"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import { CheckCircle2, Brain, Landmark, Award, Building2, Rocket } from 'lucide-react';

export default function AboutPage() {
  const [lang, setLang] = useState<"en" | "es">("es");

  const copy = {
    en: {
      badge: "About Our Firm",
      h1a: "The Logic of",
      h1b: "Aggressive Defense.",
      sub: "Standard law firms handle paperwork. We weaponize the law to protect your freedom. HTX Immigration was built to dominate the courtroom and secure your status in Houston.",
      h2: "Why HTX Defense?",
      quote: "\"We don't just file forms. We analyze every case through a forensic lens, identifying procedural exploits that others miss. In Houston, we are the wall between you and removal.\"",
      features: [
        { title: 'Local Dominance', desc: 'Deep connections within the Houston immigration courts and detention centers.' },
        { title: '24/7 Rapid Response', desc: 'Emergencies don\'t happen during business hours. Neither do we.' },
        { title: 'Bilingual Elite', desc: 'Native-level proficiency in Spanish and English for seamless communication.' },
      ],
      stats: [
        { icon: <Landmark size={28} />, value: "15+", label: "Years Experience" },
        { icon: <Award size={28} />, value: "98%", label: "Client Success" },
        { icon: <Building2 size={28} />, value: "2k+", label: "Cases Won" },
        { icon: <Rocket size={28} />, value: "24h", label: "Response Time" },
      ],
      ctaTitle: "Ready to Defend Your Future?",
      ctaSub: "Contact our Houston immigration defense team for a free, confidential case review.",
      ctaBtn: "Free Consultation →"
    },
    es: {
      badge: "Sobre Nuestro Bufete",
      h1a: "La Lógica de la",
      h1b: "Defensa Agresiva.",
      sub: "Los bufetes estándar manejan papeleo. Nosotros usamos la ley para proteger su libertad. HTX Immigration fue construido para dominar la corte y asegurar su estatus en Houston.",
      h2: "¿Por qué HTX Immigration?",
      quote: "\"No solo llenamos formularios. Analizamos cada caso con una lente forense, identificando estrategias procesales que otros pasan por alto. En Houston, somos el muro entre usted y la deportación.\"",
      features: [
        { title: 'Dominio Local', desc: 'Conexiones profundas en las cortes de inmigración y centros de detención de Houston.' },
        { title: 'Respuesta Rápida 24/7', desc: 'Las emergencias no ocurren en horario de oficina. Nosotros tampoco trabajamos así.' },
        { title: 'Élite Bilingüe', desc: 'Dominio nativo de español e inglés para una comunicación perfecta.' },
      ],
      stats: [
        { icon: <Landmark size={28} />, value: "15+", label: "Años de Experiencia" },
        { icon: <Award size={28} />, value: "98%", label: "Casos de Éxito" },
        { icon: <Building2 size={28} />, value: "2k+", label: "Casos Ganados" },
        { icon: <Rocket size={28} />, value: "24h", label: "Tiempo de Rspuesta" },
      ],
      ctaTitle: "¿Listo para Defender su Futuro?",
      ctaSub: "Contacte a nuestro equipo de defensa de inmigración en Houston para una revisión gratuita y confidencial de su caso.",
      ctaBtn: "Consulta Gratuita →"
    }
  }[lang];

  return (
    <main>
      {/* Lang Toggle */}
      <div className="bg-white pt-8 px-6">
        <div className="max-w-4xl mx-auto flex justify-end">
          <div className="inline-flex rounded-xl border border-gray-200 overflow-hidden text-sm font-semibold">
            <button
              onClick={() => setLang("en")}
              className={`px-4 py-1.5 transition-colors ${lang === "en" ? "text-white bg-navy-900" : "text-gray-500 hover:bg-gray-50"}`}
              style={lang === "en" ? { background: "var(--navy-900)" } : {}}
            >
              EN
            </button>
            <button
              onClick={() => setLang("es")}
              className={`px-4 py-1.5 transition-colors ${lang === "es" ? "text-white bg-navy-900" : "text-gray-500 hover:bg-gray-50"}`}
              style={lang === "es" ? { background: "var(--navy-900)" } : {}}
            >
              ES
            </button>
          </div>
        </div>
      </div>

      {/* HERO */}
      <section className="bg-white pt-8 pb-20 px-6 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-6"
            style={{ background: "var(--gold-50)", color: "var(--gold-600)", border: "1px solid var(--gold-100)" }}
          >
            {copy.badge}
          </div>
          <h1
            className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "var(--font-playfair), serif", color: "var(--navy-900)" }}
          >
            {copy.h1a}<br />
            <span style={{ color: "var(--gold-600)" }}>{copy.h1b}</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {copy.sub}
          </p>
        </div>
      </section>

      {/* TRUST MODULES */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{ background: "var(--navy-50)" }}
              >
                <Brain size={32} style={{ color: "var(--navy-900)" }} />
              </div>
              <h2
                className="text-4xl font-bold"
                style={{ fontFamily: "var(--font-playfair)", color: "var(--navy-900)" }}
              >
                {copy.h2}
              </h2>
              <blockquote
                className="text-lg text-gray-600 leading-relaxed italic border-l-4 pl-6"
                style={{ borderColor: "var(--gold-600)" }}
              >
                {copy.quote}
              </blockquote>
              <ul className="space-y-5">
                {copy.features.map((item) => (
                  <li key={item.title} className="flex gap-4">
                    <CheckCircle2 size={20} className="text-green-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold mb-0.5" style={{ color: "var(--navy-900)" }}>{item.title}</p>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {copy.stats.map((s) => (
                <div
                  key={s.label}
                  className="p-8 rounded-3xl text-center border"
                  style={{ background: "var(--navy-50)", borderColor: "var(--navy-100)" }}
                >
                  <div className="flex justify-center mb-3" style={{ color: "var(--navy-900)" }}>
                    {s.icon}
                  </div>
                  <div
                    className="text-3xl font-bold mb-1"
                    style={{ fontFamily: "var(--font-playfair)", color: "var(--navy-900)" }}
                  >
                    {s.value}
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6" style={{ background: "var(--navy-900)" }}>
        <div className="max-w-xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
            {copy.ctaTitle}
          </h2>
          <p className="text-white/70 mb-8">
            {copy.ctaSub}
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 rounded-xl font-bold text-white transition-all hover:opacity-90"
            style={{ background: "var(--gold-600)" }}
          >
            {copy.ctaBtn}
          </Link>
        </div>
      </section>
    </main>
  );
}
