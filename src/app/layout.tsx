import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
  title: "HTX Immigration Law | Houston Immigration Defense Attorneys",
  description:
    "Houston's trusted immigration law firm. Deportation defense, family visas, asylum, work visas & citizenship. Bilingual attorneys available 24/7. Free consultation.",
  openGraph: {
    title: "HTX Immigration Law | Houston Immigration Defense Attorneys",
    description:
      "Trusted Houston immigration attorneys. Deportation defense, family visas & citizenship. Bilingual, 24/7 available. Free consultation.",
    url: "https://htximmigrationlaw.com",
    siteName: "HTX Immigration Law",
    locale: "en_US",
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
    canonical: "https://htximmigrationlaw.com",
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
                "@id": "https://htximmigrationlaw.com/#organization",
                "name": "HTX Immigration Law",
                "url": "https://htximmigrationlaw.com",
                "telephone": "+18329778173",
                "description": "Houston immigration attorneys specializing in deportation defense, family visas, asylum, and citizenship.",
                "areaServed": { "@type": "City", "name": "Houston", "addressRegion": "TX", "addressCountry": "US" },
                "address": { "@type": "PostalAddress", "addressLocality": "Houston", "addressRegion": "TX", "addressCountry": "US" }
              },
              {
                "@type": "WebSite",
                "@id": "https://htximmigrationlaw.com/#website",
                "name": "HTX Immigration Law",
                "url": "https://htximmigrationlaw.com",
                "publisher": { "@id": "https://htximmigrationlaw.com/#organization" }
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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
