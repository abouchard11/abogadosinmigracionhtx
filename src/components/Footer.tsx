import React from "react";
import Link from "next/link";
import { Shield, PhoneCall, Mail } from "lucide-react";

const practiceAreas = [
  { label: "Deportation Defense", href: "/services/deportation-defense" },
  { label: "Family Visas", href: "/services/family-visas" },
  { label: "Asylum Defense", href: "/services/deportation-defense" },
  { label: "Work Visas", href: "/contact" },
  { label: "Citizenship / Naturalization", href: "/contact" },
];

const resources = [
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "vs. Foster Global", href: "/vs/foster-global" },
  { label: "Free Consultation", href: "/contact" },
];

const cities = [
  "Houston", "Sugar Land", "Katy", "Pearland",
  "The Woodlands", "Pasadena", "Cypress", "Stafford",
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--navy-900)" }} className="text-white">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center">
                <Shield size={18} className="text-white" />
              </div>
              <span
                className="text-base font-bold"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                HTX Immigration Law
              </span>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed mb-5">
              Houston&apos;s trusted immigration defense firm. Bilingual attorneys available 24/7 for deportation defense, family visas, asylum & citizenship.
            </p>
            <div className="space-y-2">
              <a href="tel:+18329778173" className="flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white transition-colors">
                <PhoneCall size={14} style={{ color: "var(--gold-500)" }} />
                (832) 977-8173
              </a>
              <a href="mailto:info@htximmigrationlaw.com" className="flex items-center gap-2 text-sm text-white/60 hover:text-white/80 transition-colors">
                <Mail size={14} style={{ color: "var(--gold-500)" }} />
                info@htximmigrationlaw.com
              </a>
            </div>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-widest mb-4" style={{ color: "var(--gold-500)" }}>
              Practice Areas
            </h3>
            <ul className="space-y-2">
              {practiceAreas.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-widest mb-4" style={{ color: "var(--gold-500)" }}>
              Resources
            </h3>
            <ul className="space-y-2">
              {resources.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cities */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-widest mb-4" style={{ color: "var(--gold-500)" }}>
              Cities Served
            </h3>
            <ul className="space-y-2">
              {cities.map((city) => (
                <li key={city}>
                  <span className="text-sm text-white/60">{city}, TX</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} HTX Immigration Law. All rights reserved. This website is for informational purposes only and does not constitute legal advice.
          </p>
          <p className="text-xs text-white/40">
            Houston, TX · AILA Member Firm
          </p>
        </div>
      </div>
    </footer>
  );
}
