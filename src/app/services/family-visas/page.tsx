import React from 'react';
import Link from 'next/link';
import { CheckCircle2, Heart, Users, ChevronRight, Zap } from 'lucide-react';

export const metadata = {
  title: "Family Visa Attorneys Houston | HTX Immigration Law",
  description: "Houston family visa attorneys. I-130 petitions, K-1 fiancé visas, adjustment of status & consular processing. Bilingual. Free consultation.",
};

const VISA_TYPES = [
  "I-130 Immediate Relative",
  "K-1 Fiancé Visas",
  "Adjustment of Status",
  "Consular Processing",
];

const STEPS = [
  { step: "1", label: "Audit", desc: "We analyze your eligibility and identify all potential issues upfront." },
  { step: "2", label: "Preparation", desc: "High-density evidence packages built for USCIS approval." },
  { step: "3", label: "Victory", desc: "Interview prep and final legal status secured." },
];

export default function FamilyVisas() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-white pt-16 pb-20 px-6 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-6"
            style={{ background: "var(--gold-50)", color: "var(--gold-600)", border: "1px solid var(--gold-100)" }}
          >
            <Heart size={12} className="fill-current" /> Bringing Families Home
          </div>
          <h1
            className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "var(--font-playfair), serif", color: "var(--navy-900)" }}
          >
            Family Unity<br />
            <span style={{ color: "var(--gold-600)" }}>Is Non-Negotiable.</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-10">
            We navigate the complex web of USCIS petitions so you can focus on what matters: your family. Secure your future in Houston today.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-xl font-bold text-white shadow-lg transition-all hover:opacity-90"
            style={{ background: "var(--navy-900)" }}
          >
            Start Family Case Review <Zap size={18} />
          </Link>
        </div>
      </section>

      {/* SERVICE GRID */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Spousal Section */}
            <div>
              <h2
                className="text-4xl font-bold mb-4"
                style={{ fontFamily: "var(--font-playfair)", color: "var(--navy-900)" }}
              >
                Spousal &amp; Fiancé Petitions
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Whether you are getting married in Houston or bringing a fiancé from abroad, we fast-track the I-130 and K-1 processes with forensic precision.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {VISA_TYPES.map((t) => (
                  <div
                    key={t}
                    className="flex items-center gap-3 p-4 rounded-2xl border"
                    style={{ background: "var(--gold-50)", borderColor: "var(--gold-100)" }}
                  >
                    <CheckCircle2 size={18} style={{ color: "var(--gold-600)" }} />
                    <span className="text-sm font-semibold" style={{ color: "var(--navy-900)" }}>{t}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* The Unification Path */}
            <div
              className="rounded-3xl p-8"
              style={{ background: "var(--navy-50)", border: "1px solid var(--navy-100)" }}
            >
              <div className="relative mb-6 opacity-10 float-right">
                <Users size={80} style={{ color: "var(--navy-900)" }} />
              </div>
              <h3
                className="text-2xl font-bold mb-6 clear-right"
                style={{ fontFamily: "var(--font-playfair)", color: "var(--navy-900)" }}
              >
                The Unification Path
              </h3>
              <div className="space-y-6">
                {STEPS.map((s) => (
                  <div key={s.step} className="flex gap-4">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm text-white shrink-0"
                      style={{ background: "var(--navy-900)" }}
                    >
                      {s.step}
                    </div>
                    <div>
                      <p className="font-bold text-xs uppercase tracking-widest mb-1" style={{ color: "var(--gold-600)" }}>
                        {s.label}
                      </p>
                      <p className="text-sm text-gray-600">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6" style={{ background: "var(--navy-900)" }}>
        <div className="max-w-2xl mx-auto text-center text-white">
          <h2
            className="text-3xl font-bold mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Ready to start your journey?
          </h2>
          <p className="text-white/70 mb-8">
            Our Houston team is standing by to review your family&apos;s case. Bilingual, no call centers, just elite legal defense.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-xl font-bold text-white transition-all hover:opacity-90"
            style={{ background: "var(--gold-600)" }}
          >
            Contact Us Now <ChevronRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
