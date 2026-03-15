"use client";

import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { PhoneCall, Mail, CheckCircle2, ChevronRight, Loader2 } from 'lucide-react';

export default function ContactPage() {
  const [lang, setLang] = useState<"en" | "es">("es");
  const [state, handleSubmit] = useForm("mbdzgvao");

  const copy = {
    en: {
      successTitle: "Transmission Received!",
      successDesc: "Our Houston defense unit has been alerted. We will contact you within 15 minutes.",
      successBtn: "Send another update",
      h1a: "Contact Our Houston",
      h1b: "Defense Team",
      sub: "Secure your future. 24/7 Rapid Response active.",
      emergency: "Emergency 24/7 Line",
      email: "Email Transmission",
      formTitle: "Initiate Case Audit",
      labelName: "Full Name",
      labelPhone: "Phone Number",
      labelDetails: "Case Details",
      placeholderDetails: "Describe the situation...",
      btnSend: "Send My Case",
      btnSending: "Sending..."
    },
    es: {
      successTitle: "¡Transmisión Recibida!",
      successDesc: "Nuestra unidad de defensa en Houston ha sido alertada. Lo contactaremos en 15 minutos.",
      successBtn: "Enviar otra actualización",
      h1a: "Contacte a Nuestro Equipo de",
      h1b: "Defensa en Houston",
      sub: "Asegure su futuro. Respuesta rápida 24/7 activa.",
      emergency: "Línea de Emergencia 24/7",
      email: "Transmisión por Correo Electrónico",
      formTitle: "Iniciar Auditoría de Caso",
      labelName: "Nombre Completo",
      labelPhone: "Número de Teléfono",
      labelDetails: "Detalles del Caso",
      placeholderDetails: "Describa la situación...",
      btnSend: "Enviar Mi Caso",
      btnSending: "Enviando..."
    }
  }[lang];

  if (state.succeeded) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center text-center px-6">
        <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center mb-6 shadow-xl">
          <CheckCircle2 size={40} className="text-white" />
        </div>
        <h3 className="text-3xl font-bold text-navy-900 mb-4" style={{ fontFamily: "var(--font-playfair), serif" }}>{copy.successTitle}</h3>
        <p className="text-gray-600 max-w-md">{copy.successDesc}</p>
        <button onClick={() => window.location.reload()} className="mt-8 text-gold-600 font-bold uppercase tracking-widest text-xs hover:underline">{copy.successBtn}</button>
      </div>
    );
  }

  return (
    <main className="bg-white min-h-screen">
      {/* Lang Toggle */}
      <div className="max-w-7xl mx-auto px-6 pt-8 flex justify-end">
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

      <section className="pt-8 pb-12 px-6 border-b border-gray-100 text-center">
        <h1 className="text-5xl font-bold mb-4 text-navy-900" style={{ fontFamily: "var(--font-playfair), serif" }}>{copy.h1a}<br /><span className="text-gold-600">{copy.h1b}</span></h1>
        <p className="text-lg text-gray-600">{copy.sub}</p>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="flex gap-5 items-start">
              <div className="w-12 h-12 rounded-2xl bg-gold-50 border border-gold-100 flex items-center justify-center shrink-0">
                <PhoneCall size={22} className="text-gold-600" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">{copy.emergency}</div>
                <a href="tel:+18329778173" className="text-2xl font-bold text-navy-900">+1 (832) 977-8173</a>
              </div>
            </div>
            <div className="flex gap-5 items-start">
              <div className="w-12 h-12 rounded-2xl bg-navy-50 border border-navy-100 flex items-center justify-center shrink-0">
                <Mail size={22} className="text-navy-900" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">{copy.email}</div>
                <a href="mailto:info@htximmigrationlaw.com" className="text-lg font-semibold text-navy-900">info@htximmigrationlaw.com</a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <h2 className="text-2xl font-bold mb-1 text-navy-900" style={{ fontFamily: "var(--font-playfair), serif" }}>{copy.formTitle}</h2>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5">{copy.labelName}</label>
                <input name="name" required type="text" placeholder="Juan García" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-navy-900 outline-none transition-all" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5">{copy.labelPhone}</label>
                <input name="phone" required type="tel" placeholder="+1 (XXX) XXX-XXXX" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-navy-900 outline-none transition-all" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5">{copy.labelDetails}</label>
                <textarea id="message" name="message" required rows={4} placeholder={copy.placeholderDetails} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-navy-900 outline-none transition-all resize-none" />
                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-xs text-red-500 mt-1" />
              </div>
              <button type="submit" disabled={state.submitting} className="w-full py-4 rounded-xl bg-navy-900 text-white font-bold text-base shadow-lg hover:opacity-95 transition-all disabled:opacity-50 flex items-center justify-center gap-2">
                {state.submitting ? <><Loader2 className="animate-spin" /> {copy.btnSending}</> : <>{copy.btnSend} <ChevronRight size={18} /></>}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
