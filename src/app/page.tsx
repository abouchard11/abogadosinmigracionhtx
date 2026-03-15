"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  Shield, PhoneCall, CheckCircle2, ChevronRight, Loader2,
  Star, Users, Award, Clock, Zap, Globe, Lock, Heart
} from "lucide-react";

const CASE_TYPES = [
  "Deportation / Removal Defense",
  "Family Visa Petition",
  "Asylum Application",
  "Work Visa / Employment",
  "Citizenship / Naturalization",
  "Bond Hearing",
  "Other Immigration Matter",
];

const SERVICES = [
  {
    icon: <Shield size={28} />, title: "Deportation Defense",
    desc: "Aggressive 24/7 representation to stop removal. Emergency bonds, court defense, and prosecutorial discretion strategies.",
    href: "/services/deportation-defense",
    pills: ["Emergency Bonds", "Removal Defense", "Crimmigration"],
  },
  {
    icon: <Heart size={28} />, title: "Family Visas",
    desc: "Navigate I-130 petitions, K-1 fiancé visas, and consular processing to keep your Houston family together.",
    href: "/services/family-visas",
    pills: ["Spousal Petitions", "K-1 Visas", "Adjustment of Status"],
  },
  {
    icon: <Globe size={28} />, title: "Citizenship & Asylum",
    desc: "Path to naturalization, asylum defense, and Temporary Protected Status for Houston's immigrant community.",
    href: "/contact",
    pills: ["Naturalization", "Asylum", "TPS / DACA"],
  },
];

const STATS = [
  { value: "15+", label: "Years in Houston Courts" },
  { value: "2k+", label: "Cases Won" },
  { value: "98%", label: "Client Success Rate" },
  { value: "24/7", label: "Emergency Response" },
];

export default function Home({ locale = 'es', city = 'houston' }: { locale?: string, city?: string }) {
  const [lang, setLang] = useState<"en" | "es">(locale as "en" | "es");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState(false);

  const copy = {
    en: {
      badge: "Houston's Top Immigration Defense Firm",
      h1a: "Stop Deportation.",
      h1b: "Protect Your Family.",
      sub: "Trusted Houston immigration attorneys. Bilingual, aggressive, and available 24/7 for deportation defense, family visas, and asylum cases.",
      cta: "Free Consultation",
      formTitle: "Get Your Free Case Review",
      formSub: "Response within 15 minutes.",
    },
    es: {
      badge: "El Bufete de Defensa Migratoria #1 en Houston",
      h1a: "Detenga la Deportación.",
      h1b: "Proteja a su Familia.",
      sub: "Abogados de inmigración de confianza en Houston. Bilingüe, agresivos y disponibles las 24 horas, 7 días a la semana.",
      cta: "Consulta Gratuita",
      formTitle: "Revisión Gratuita de su Caso",
      formSub: "Respuesta en 15 minutos.",
    },
  }[lang];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setFormError(false);
    const fd = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fd.get("name"),
          phone: fd.get("phone"),
          caseType: fd.get("caseType"),
          emergency: fd.get("emergency") === "on",
          source_page: "/",
          lang,
        }),
      });
      if (res.ok) setSubmitted(true);
      else setFormError(true);
    } catch {
      setFormError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main>
      {/* HERO */}
      <section className="bg-white pt-12 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Lang Toggle */}
          <div className="flex justify-end mb-8">
            <div className="inline-flex rounded-xl border border-gray-200 overflow-hidden text-sm font-semibold">
              <button
                onClick={() => setLang("en")}
                className={`px-4 py-1.5 transition-colors ${lang === "en" ? "text-white" : "text-gray-500 hover:bg-gray-50"}`}
                style={lang === "en" ? { background: "var(--navy-900)" } : {}}
              >
                EN
              </button>
              <button
                onClick={() => setLang("es")}
                className={`px-4 py-1.5 transition-colors ${lang === "es" ? "text-white" : "text-gray-500 hover:bg-gray-50"}`}
                style={lang === "es" ? { background: "var(--navy-900)" } : {}}
              >
                ES
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-6"
                style={{ background: "var(--gold-50)", color: "var(--gold-600)", border: "1px solid var(--gold-100)" }}
              >
                <Star size={12} className="fill-current" />
                {copy.badge}
              </div>

              <h1
                className="text-5xl lg:text-6xl font-bold leading-tight mb-6"
                style={{ fontFamily: "var(--font-playfair), serif", color: "var(--navy-900)" }}
              >
                {copy.h1a}<br />
                <span style={{ color: "var(--gold-600)" }}>{copy.h1b}</span>
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-lg">
                {copy.sub}
              </p>

              {/* Trust Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                {STATS.map((s) => (
                  <div key={s.label} className="text-center p-3 rounded-xl" style={{ background: "var(--navy-50)" }}>
                    <div className="text-2xl font-bold" style={{ color: "var(--navy-900)", fontFamily: "var(--font-playfair)" }}>
                      {s.value}
                    </div>
                    <div className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide mt-1">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="tel:+18329778173"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-xl font-bold text-white shadow-lg transition-all hover:opacity-90"
                style={{ background: "var(--gold-600)" }}
              >
                <PhoneCall size={18} />
                (832) 977-8173 · Emergency 24/7
              </a>
            </div>

            {/* Right — Lead Form */}
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h2 className="text-2xl font-bold mb-1" style={{ color: "var(--navy-900)", fontFamily: "var(--font-playfair)" }}>
                      {copy.formTitle}
                    </h2>
                    <p className="text-sm text-gray-500">{copy.formSub}</p>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1.5">
                      Full Name
                    </label>
                    <input
                      name="name" required type="text"
                      placeholder="Juan García"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all"
                      style={{ "--tw-ring-color": "var(--navy-900)" } as React.CSSProperties}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      name="phone" required type="tel"
                      placeholder="+1 (XXX) XXX-XXXX"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1.5">
                      Case Type
                    </label>
                    <select
                      name="caseType" required
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 bg-white transition-all"
                    >
                      <option value="">Select your case type…</option>
                      {CASE_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>

                  <label className="flex items-center gap-3 cursor-pointer">
                    <input name="emergency" type="checkbox" className="w-4 h-4 rounded" />
                    <span className="text-sm text-red-600 font-semibold">🚨 This is an emergency (ICE detention / immediate removal)</span>
                  </label>

                  {formError && (
                    <p className="text-xs text-red-500 font-semibold">
                      Submission failed. Call (832) 977-8173 directly.
                    </p>
                  )}

                  <button
                    type="submit" disabled={submitting}
                    className="w-full py-4 rounded-xl text-white font-bold text-base transition-all hover:opacity-90 disabled:opacity-50 flex items-center justify-center gap-2 shadow-lg"
                    style={{ background: "var(--navy-900)" }}
                  >
                    {submitting
                      ? <><Loader2 size={18} className="animate-spin" /> Submitting…</>
                      : <>{copy.cta} <ChevronRight size={18} /></>}
                  </button>

                  <p className="text-[10px] text-gray-400 text-center">
                    Confidential. Attorney-client privilege applies. No spam.
                  </p>
                </form>
              ) : (
                <div className="flex flex-col items-center justify-center text-center py-12 space-y-4">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ background: "#10b981" }}
                  >
                    <CheckCircle2 size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold" style={{ color: "var(--navy-900)" }}>
                    We&apos;ll call you within 15 minutes.
                  </h3>
                  <p className="text-sm text-gray-500">
                    Your case details have been received by our Houston defense team.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="py-8 px-6" style={{ background: "var(--navy-900)" }}>
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-8 text-white/50 text-xs font-bold uppercase tracking-widest">
          <span>Univision Houston</span>
          <span className="hidden sm:block">·</span>
          <span>Houston Chronicle</span>
          <span className="hidden sm:block">·</span>
          <span>AILA Member</span>
          <span className="hidden sm:block">·</span>
          <span>BBB Accredited</span>
          <span className="hidden sm:block">·</span>
          <span>Texas State Bar</span>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="text-4xl font-bold mb-3"
              style={{ fontFamily: "var(--font-playfair)", color: "var(--navy-900)" }}
            >
              Practice Areas
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Houston&apos;s most aggressive immigration defense across every case type.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICES.map((svc) => (
              <Link
                key={svc.title} href={svc.href}
                className="group block p-8 rounded-3xl border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300"
                style={{ background: "var(--navy-50)" }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 text-white shadow-md"
                  style={{ background: "var(--navy-900)" }}
                >
                  {svc.icon}
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: "var(--navy-900)", fontFamily: "var(--font-playfair)" }}>
                  {svc.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{svc.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {svc.pills.map((p) => (
                    <span
                      key={p} className="text-[10px] px-2.5 py-1 rounded-full font-bold uppercase tracking-wide"
                      style={{ background: "var(--gold-100)", color: "var(--gold-600)" }}
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY HTX */}
      <section className="py-20 px-6" style={{ background: "var(--gold-50)" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2
              className="text-4xl font-bold mb-4"
              style={{ fontFamily: "var(--font-playfair)", color: "var(--navy-900)" }}
            >
              Why Houston Families Choose HTX
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We don&apos;t just file forms. We build forensic legal defense strategies tailored to Houston&apos;s immigration courts and ICE field office. Every case is personal.
            </p>
            <ul className="space-y-4">
              {[
                { icon: <Users size={18} />, t: "Bilingual Elite", d: "Native Spanish/English for seamless communication with your family." },
                { icon: <Lock size={18} />, t: "24/7 Emergency Response", d: "ICE doesn&apos;t wait for business hours. Neither do we." },
                { icon: <Award size={18} />, t: "Houston Court Expertise", d: "Deep relationships inside Harris County immigration courts." },
                { icon: <Zap size={18} />, t: "Forensic Defense Strategy", d: "We exploit every procedural angle competitors miss." },
              ].map((item) => (
                <li key={item.t} className="flex items-start gap-4">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 text-white"
                    style={{ background: "var(--navy-900)" }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-bold text-sm mb-0.5" style={{ color: "var(--navy-900)" }}>{item.t}</p>
                    <p className="text-sm text-gray-600">{item.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="p-8 rounded-3xl text-center shadow-sm border border-white"
                style={{ background: "white" }}
              >
                <div className="text-4xl font-bold mb-1" style={{ color: "var(--navy-900)", fontFamily: "var(--font-playfair)" }}>
                  {s.value}
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-gray-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EMERGENCY CTA */}
      <section className="py-20 px-6" style={{ background: "var(--navy-900)" }}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
            style={{ background: "rgba(159,123,52,0.2)", color: "var(--gold-400)", border: "1px solid rgba(159,123,52,0.3)" }}
          >
            <Clock size={12} /> Available Right Now
          </div>
          <h2
            className="text-4xl lg:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Facing Detention or Removal?
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
            Don&apos;t wait. Every hour matters in an immigration emergency. Get a forensic case review from our Houston team in 15 minutes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-10 py-4 rounded-xl font-bold text-base transition-all hover:opacity-90 shadow-xl"
              style={{ background: "var(--gold-600)", color: "white" }}
            >
              Get Free Consultation <ChevronRight className="inline" size={18} />
            </Link>
            <a
              href="tel:+18329778173"
              className="flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-white border border-white/20 hover:bg-white/10 transition-all"
            >
              <PhoneCall size={18} />
              (832) 977-8173
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
