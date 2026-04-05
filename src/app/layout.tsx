import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PostHogProvider } from "@/components/PostHogProvider";
import { PostHogPageView } from "@/components/PostHogPageView";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Abogados de Inmigración Houston TX | Defensa contra Deportación 24/7",
  description:
    "Abogados de inmigración en Houston, TX. Defensa contra deportación, visas familiares, asilo, visas de trabajo y ciudadanía. Abogados bilingües disponibles 24/7. Consulta gratis.",
  openGraph: {
    title: "Abogados de Inmigración Houston TX | Defensa contra Deportación 24/7",
    description:
      "Abogados de inmigración en Houston. Defensa contra deportación, visas familiares y ciudadanía. Bilingüe, disponible 24/7. Consulta gratis.",
    url: "https://abogadosinmigracionhtx.com",
    siteName: "Abogados de Inmigración HTX",
    locale: "es_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://abogadosinmigracionhtx.com",
    languages: {
      "en": "https://htximmigrationlaw.com",
      "es": "https://abogadosinmigracionhtx.com",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <Script
          id="schema-legalservice"
          type="application/ld+json"
        >
          {`{
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "LegalService",
                "@id": "https://abogadosinmigracionhtx.com/#organization",
                "name": "Abogados de Inmigración HTX",
                "url": "https://abogadosinmigracionhtx.com",
                "telephone": "+18329778173",
                "description": "Abogados de inmigración en Houston especializados en defensa contra deportación, visas familiares, asilo y ciudadanía.",
                "areaServed": { "@type": "City", "name": "Houston", "addressRegion": "TX", "addressCountry": "US" },
                "address": { "@type": "PostalAddress", "addressLocality": "Houston", "addressRegion": "TX", "addressCountry": "US" },
                "availableLanguage": ["Spanish", "English"]
              },
              {
                "@type": "WebSite",
                "@id": "https://abogadosinmigracionhtx.com/#website",
                "name": "Abogados de Inmigración HTX",
                "url": "https://abogadosinmigracionhtx.com",
                "inLanguage": "es",
                "publisher": { "@id": "https://abogadosinmigracionhtx.com/#organization" }
              }
            ]
          }`}
        </Script>
        <meta name="geo.region" content="US-TX" />
        <meta name="geo.placename" content="Houston" />
        <meta name="geo.position" content="29.7604;-95.3698" />
        <meta name="ICBM" content="29.7604, -95.3698" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <PostHogProvider>
          <PostHogPageView />
          <Header />
          {children}
          <Footer />
        </PostHogProvider>
      </body>
    </html>
  );
}
