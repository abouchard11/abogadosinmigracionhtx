import React from 'react';
import Link from 'next/link';
import { CheckCircle2, Lock, Gavel, Scale, PhoneCall, ChevronRight, AlertTriangle } from 'lucide-react';

export const metadata = {
  title: "Deportation Defense Attorneys Houston | HTX Immigration Law",
  description: "Stop deportation in Houston. 24/7 emergency bonds, removal defense & crimmigration expertise. Aggressive bilingual attorneys. Call (832) 977-8173.",
};

const DEFENSE_MODULES = [
  {
    icon: <Lock size={28} />,
    title: "Emergency Bonds",
    desc: "We move within hours to secure immigration bonds, preventing long-term detention and keeping families together.",
    items: ["24/7 Detention Tracking", "Bond Hearing Advocacy", "Fast-Track Processing"],
  },
  {
    icon: <Gavel size={28} />,
    title: "Removal Defense",
    desc: "Forensic legal defense in immigration court. We exploit every procedural technicality to block removal orders.",
    items: ["Asylum & Withholding", "Cancellation of Removal", "Prosecutorial Discretion"],
  },
  {
    icon: <Scale size={28} />,
    title: "Criminal Overlays",
    desc: "Crimmigration specialists — mitigating immigration consequences of criminal charges or prior convictions.",
    items: ["Padilla Consultations", "Post-Conviction Relief", "Waivers of Inadmissibility"],
  },
];

export default function DeportationDefense() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-white pt-16 pb-20 px-6 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 px-4 py-1.5 rounded-full text-red-600 text-xs font-bold uppercase tracking-widest mb-6">
            <AlertTriangle size={12} /> Immediate Intervention Required
          </div>
          <h1
            className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "var(--font-playfair), serif", color: "var(--navy-900)" }}
          >
            Stop Deportation.<br />
            <span style={{ color: "var(--gold-600)" }}>Defend Your Life.</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-10">
            When ICE acts, every second counts. We provide aggressive, 24/7 defense for families in Houston facing detention and removal proceedings.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-10 py-4 rounded-xl font-bold text-white text-base transition-all hover:opacity-90 shadow-lg"
              style={{ background: "var(--navy-900)" }}
            >
              Start Emergency Case Review <ChevronRight className="inline" size={18} />
            </Link>
            <a
              href="tel:+18329778173"
              className="flex items-center gap-2 px-6 py-4 rounded-xl font-bold border-2 transition-all"
              style={{ borderColor: "var(--navy-900)", color: "var(--navy-900)" }}
            >
              <PhoneCall size={18} /> (832) 977-8173
            </a>
          </div>
        </div>
      </section>

      {/* DEFENSE MODULES */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {DEFENSE_MODULES.map((m) => (
              <div
                key={m.title}
                className="p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                style={{ background: "var(--navy-50)" }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 text-white shadow-sm"
                  style={{ background: "var(--navy-900)" }}
                >
                  {m.icon}
                </div>
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ fontFamily: "var(--font-playfair)", color: "var(--navy-900)" }}
                >
                  {m.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-5">{m.desc}</p>
                <ul className="space-y-2">
                  {m.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm font-semibold" style={{ color: "var(--navy-800)" }}>
                      <CheckCircle2 size={14} className="text-green-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6" style={{ background: "var(--navy-900)" }}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2
            className="text-4xl font-bold mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            The Clock is Ticking.
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
            Get a forensic analysis of your deportation case within 15 minutes from our Houston defense team.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-10 py-4 rounded-xl font-bold text-white transition-all hover:opacity-90"
              style={{ background: "var(--gold-600)" }}
            >
              Get My Case Audit →
            </Link>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center animate-pulse">
                <PhoneCall size={18} />
              </div>
              <div className="text-left">
                <div className="text-[10px] font-bold uppercase tracking-widest text-white/50">Emergency Line</div>
                <div className="text-lg font-bold">+1 (832) 977-8173</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
