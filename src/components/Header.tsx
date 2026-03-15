"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Shield, PhoneCall, Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const services = [
  { label: "Deportation Defense", href: "/services/deportation-defense" },
  { label: "Family Visas", href: "/services/family-visas" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md transition-transform group-hover:scale-105"
            style={{ background: "var(--navy-900)" }}
          >
            <Shield size={20} className="text-white" />
          </div>
          <div className="leading-tight">
            <span
              className="block text-sm font-bold tracking-tight"
              style={{ color: "var(--navy-900)", fontFamily: "var(--font-playfair), serif" }}
            >
              HTX Immigration
            </span>
            <span className="block text-[10px] font-semibold uppercase tracking-widest" style={{ color: "var(--gold-600)" }}>
              Law &amp; Defense
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {/* Services Dropdown */}
          <div className="relative">
            <button
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
              className="flex items-center gap-1 text-sm font-medium transition-colors"
              style={{ color: "var(--navy-900)" }}
            >
              Services <ChevronDown size={14} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            {servicesOpen && (
              <div
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                className="absolute top-full left-0 mt-2 w-52 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 animate-fade-in z-50"
              >
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="flex items-center px-4 py-3 text-sm font-medium hover:bg-gray-50 transition-colors"
                    style={{ color: "var(--navy-900)" }}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors hover:opacity-70"
              style={{ color: "var(--navy-900)" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+18329778173"
            className="flex items-center gap-2 text-sm font-semibold transition-colors"
            style={{ color: "var(--gold-600)" }}
          >
            <PhoneCall size={14} />
            (832) 977-8173
          </a>
          <Link
            href="/contact"
            className="px-5 py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90 shadow-md"
            style={{ background: "var(--navy-900)" }}
          >
            Free Consultation
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded-lg"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} style={{ color: "var(--navy-900)" }} /> : <Menu size={22} style={{ color: "var(--navy-900)" }} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-6 space-y-4 animate-fade-in">
          <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "var(--gold-600)" }}>Services</p>
          {services.map((s) => (
            <Link key={s.href} href={s.href} className="block text-sm font-medium py-1" style={{ color: "var(--navy-900)" }} onClick={() => setMobileOpen(false)}>
              {s.label}
            </Link>
          ))}
          <div className="border-t border-gray-100 pt-4 space-y-3">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="block text-sm font-medium py-1" style={{ color: "var(--navy-900)" }} onClick={() => setMobileOpen(false)}>
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            href="/contact"
            className="block w-full text-center py-3 rounded-xl text-sm font-bold text-white mt-2"
            style={{ background: "var(--navy-900)" }}
          >
            Free Consultation
          </Link>
          <a
            href="tel:+18329778173"
            className="block text-center text-sm font-semibold"
            style={{ color: "var(--gold-600)" }}
          >
            Call (832) 977-8173
          </a>
        </div>
      )}
    </header>
  );
}
