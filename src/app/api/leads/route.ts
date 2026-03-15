import { NextResponse } from "next/server";

import { emitEvent } from "@/lib/event-spine";

function estimateImmigrationLeadValue(input: {
  caseType?: string;
  emergency?: boolean;
}): number {
  let estimatedValue = 2500;

  if (input.caseType === "Deportation / Removal Defense") {
    estimatedValue = 15000;
  } else if (input.caseType === "Asylum Application") {
    estimatedValue = 8500;
  }

  if (input.emergency) {
    estimatedValue += 5000;
  }

  return estimatedValue;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      name?: string;
      phone?: string;
      email?: string;
      caseType?: string;
      emergency?: boolean;
      source_page?: string;
      lang?: string;
    };

    if (!body.name || !body.phone) {
      return NextResponse.json(
        { success: false, error: "Name and phone are required." },
        { status: 400 },
      );
    }

    const estimatedValue = estimateImmigrationLeadValue({
      caseType: body.caseType,
      emergency: body.emergency,
    });

    const event = await emitEvent(
      {
        type: "lead.new",
        domain: "htximmigrationlaw.com",
        node_id: "SITE-HTX-IMMIGRATION",
        data: {
          name: body.name,
          phone: body.phone,
          email: body.email,
          source_page: body.source_page ?? "/",
          form_type: "eligibility_audit",
          lead_type: "immigration_defense",
          estimated_value: estimatedValue,
          raw_metadata: {
            caseType: body.caseType ?? null,
            emergency: body.emergency ?? false,
            lang: body.lang ?? "en",
          },
        },
      },
      { blocking: true, retries: 2 },
    );

    if (!event.success) {
      throw new Error(event.error ?? "Failed to ingest lead into Maestro.");
    }

    const formspreeId = process.env.FORMSPREE_ID || "mqaejvrr";
    const formspreeResponse = await fetch(`https://formspree.io/f/${formspreeId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        _subject: `NEW QUALIFIED LEAD: HTX Immigration - ${body.name}`,
        ...body,
        estimated_value: estimatedValue,
        lead_id: event.event_id,
        source: "htximmigrationlaw.com",
      }),
    });

    if (!formspreeResponse.ok) {
      const errorBody = await formspreeResponse.text();
      throw new Error(
        `Formspree notification failed (${formspreeResponse.status}): ${errorBody.slice(0, 240)}`,
      );
    }

    return NextResponse.json({
      success: true,
      leadId: event.event_id,
      estimatedValue,
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to process immigration lead.";
    console.error("[HTX-IMMIGRATION-LEADS-FAIL]", error);
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
