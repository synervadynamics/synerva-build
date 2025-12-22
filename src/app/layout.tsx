import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@/styles/globals.css";
import { copy } from "@/data/copy";
import CursorLayer from "@/components/CursorLayer";
import BackgroundDynamics from "@/components/BackgroundDynamics";

const metadataBase = new URL(copy.meta.url);

export const metadata: Metadata = {
  metadataBase,
  title: copy.meta.title,
  description: copy.meta.description,
  icons: "/favicon.ico",
  manifest: "/manifest.json",
  openGraph: {
    title: copy.meta.title,
    description: copy.meta.description,
    url: copy.meta.url,
    siteName: "Synerva Dynamics",
    images: [
      {
        url: copy.meta.ogImage,
        width: 1200,
        height: 630,
        alt: copy.meta.title,
      },
    ],
    type: "website",
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    site: copy.meta.twitter,
    creator: copy.meta.twitter,
    title: copy.meta.title,
    description: copy.meta.description,
    images: [copy.meta.ogImage],
  },
  alternates: {
    canonical: copy.meta.url,
  },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: copy.footer.schema.name,
  url: copy.footer.schema.url,
  logo: copy.footer.schema.logo,
  sameAs: copy.footer.schema.sameAs,
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: copy.global.contact.phone,
      contactType: "customer support",
      areaServed: "CA",
      availableLanguage: ["English", "French"],
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "259 St. Paul Street",
    addressLocality: "St. Catharines",
    addressRegion: "ON",
    postalCode: "L2R 3M7",
    addressCountry: "CA",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: copy.meta.url,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Contact",
      item: `${copy.meta.url}/contact`,
    },
  ],
};

const gradientStageStyle = {
  backgroundImage: `
    radial-gradient(
      circle at var(--cursor-x, 50vw) var(--cursor-y, 50vh),
      hsl(calc(var(--auto-hue, 210) + 30) 100% 92% / calc(0.34 + (var(--cursor-speed, 0) * 0.46))) 0%,
      hsl(calc(var(--auto-hue-2, 40) + 120) 96% 74% / calc(0.3 + (var(--cursor-speed, 0) * 0.36))) 16%,
      hsl(calc(var(--auto-hue-3, 120) + 200) 96% 64% / calc(0.24 + (var(--cursor-speed, 0) * 0.3))) 32%,
      transparent 54%
    ),
    radial-gradient(
      circle at var(--cursor-x, 50vw) var(--cursor-y, 50vh),
      transparent 0%,
      transparent 26%,
      hsl(calc(var(--auto-hue, 210) + 200) 96% 74% / calc(0.3 + (var(--cursor-speed, 0) * 0.24))) 34%,
      hsl(calc(var(--auto-hue-4, 300) + 40) 92% 70% / calc(0.22 + (var(--cursor-speed, 0) * 0.18))) 44%,
      transparent 62%
    ),
    radial-gradient(
      circle at calc(var(--cursor-x, 50vw) + 3vw)
        calc(var(--cursor-y, 50vh) - 2vh),
      hsl(calc(var(--auto-hue-2, 40) + 80) 90% 68% / 0.26) 0%,
      hsl(calc(var(--auto-hue-3, 120) + 160) 90% 62% / 0.2) 22%,
      hsl(calc(var(--auto-hue-4, 300) + 260) 90% 64% / 0.18) 40%,
      transparent 62%
    ),
    radial-gradient(
      circle at calc(var(--grad-x, 50%) + 8%) calc(var(--grad-y, 50%) + 2%),
      hsl(calc(var(--auto-hue-3, 120) + 310) 98% 66% / 0.34) 0%,
      hsl(calc(var(--auto-hue-4, 300) + 40) 98% 62% / 0.28) 16%,
      hsl(calc(var(--auto-hue-2, 40) + 180) 98% 58% / 0.24) 30%,
      hsl(calc(var(--auto-hue, 210) + 260) 98% 56% / 0.2) 46%,
      transparent 66%
    ),
    radial-gradient(
      circle at var(--grad-x, 50%) var(--grad-y, 50%),
      hsl(calc(var(--auto-hue, 210) + 20) 96% 66% / 0.36) 0%,
      hsl(calc(var(--auto-hue-2, 40) + 120) 98% 62% / 0.28) 20%,
      hsl(calc(var(--auto-hue-3, 120) + 210) 98% 58% / 0.24) 36%,
      hsl(calc(var(--auto-hue-4, 300) + 300) 98% 60% / 0.22) 52%,
      transparent 68%
    ),
    radial-gradient(
      circle at calc(var(--grad-x, 50%) + 18%) calc(var(--grad-y, 50%) - 14%),
      hsl(calc(var(--auto-hue, 210) + 180) 98% 66% / 0.34) 0%,
      hsl(calc(var(--auto-hue-2, 40) + 40) 100% 64% / 0.28) 16%,
      hsl(calc(var(--auto-hue-3, 120) + 140) 100% 60% / 0.24) 32%,
      hsl(calc(var(--auto-hue-4, 300) + 260) 98% 62% / 0.22) 46%,
      hsl(calc(var(--auto-hue, 210) + 320) 98% 58% / 0.2) 60%,
      transparent 74%
    ),
    radial-gradient(
      circle at calc(var(--grad-x, 50%) + 26%) calc(var(--grad-y, 50%) + 6%),
      hsl(calc(var(--auto-hue-2, 40) + 140) 100% 66% / 0.34) 0%,
      hsl(calc(var(--auto-hue, 210) + 260) 100% 62% / 0.28) 18%,
      hsl(calc(var(--auto-hue-4, 300) + 40) 98% 58% / 0.24) 34%,
      hsl(calc(var(--auto-hue-3, 120) + 200) 100% 60% / 0.22) 50%,
      hsl(calc(var(--auto-hue-2, 40) + 300) 98% 56% / 0.2) 64%,
      transparent 76%
    ),
    radial-gradient(
      circle at calc(var(--grad-x, 50%) - 18%) calc(var(--grad-y, 50%) + 22%),
      hsl(calc(var(--auto-hue-3, 120) + 190) 100% 66% / 0.34) 0%,
      hsl(calc(var(--auto-hue, 210) + 70) 100% 62% / 0.28) 18%,
      hsl(calc(var(--auto-hue-2, 40) + 220) 98% 58% / 0.24) 34%,
      hsl(calc(var(--auto-hue-4, 300) + 320) 100% 60% / 0.22) 50%,
      hsl(calc(var(--auto-hue-3, 120) + 30) 98% 56% / 0.2) 64%,
      transparent 76%
    ),
    radial-gradient(
      circle at calc(var(--grad-x, 50%) - 28%) calc(var(--grad-y, 50%) - 8%),
      hsl(calc(var(--auto-hue-4, 300) + 120) 100% 66% / 0.32) 0%,
      hsl(calc(var(--auto-hue, 210) + 320) 100% 62% / 0.28) 20%,
      hsl(calc(var(--auto-hue-2, 40) + 60) 98% 58% / 0.24) 38%,
      hsl(calc(var(--auto-hue-3, 120) + 260) 100% 60% / 0.22) 54%,
      hsl(calc(var(--auto-hue-4, 300) + 20) 98% 56% / 0.2) 68%,
      transparent 80%
    ),
    radial-gradient(
      circle at 64% 22%,
      hsl(calc(var(--scroll-hue, 210) + 90) 100% 66% / 0.3) 0%,
      hsl(calc(var(--auto-hue-2, 40) + 200) 100% 62% / 0.26) 22%,
      hsl(calc(var(--auto-hue, 210) + 40) 98% 58% / 0.24) 42%,
      hsl(calc(var(--auto-hue-4, 300) + 280) 100% 60% / 0.22) 58%,
      hsl(calc(var(--auto-hue-3, 120) + 140) 98% 56% / 0.2) 72%,
      transparent 84%
    ),
    radial-gradient(
      circle at 64% 22%,
      transparent 0%,
      transparent 18%,
      hsl(calc(var(--scroll-hue, 210) + 210) 92% 68% / 0.18) 28%,
      hsl(calc(var(--auto-hue-3, 120) + 280) 94% 62% / 0.16) 44%,
      transparent 64%
    ),
    radial-gradient(
      circle at 36% 64%,
      hsl(calc(var(--scroll-hue, 210) + 210) 100% 66% / 0.3) 0%,
      hsl(calc(var(--auto-hue, 210) + 20) 100% 62% / 0.26) 20%,
      hsl(calc(var(--auto-hue-2, 40) + 220) 98% 58% / 0.24) 40%,
      hsl(calc(var(--auto-hue-4, 300) + 40) 100% 60% / 0.22) 56%,
      hsl(calc(var(--auto-hue-3, 120) + 300) 98% 56% / 0.2) 70%,
      transparent 82%
    ),
    radial-gradient(
      circle at 78% 58%,
      hsl(calc(var(--scroll-hue, 210) + 40) 100% 66% / 0.3) 0%,
      hsl(calc(var(--auto-hue-3, 120) + 160) 100% 62% / 0.26) 22%,
      hsl(calc(var(--auto-hue, 210) + 260) 98% 58% / 0.24) 42%,
      hsl(calc(var(--auto-hue-2, 40) + 120) 100% 60% / 0.22) 58%,
      hsl(calc(var(--auto-hue-4, 300) + 240) 98% 56% / 0.2) 72%,
      transparent 84%
    ),
    radial-gradient(
      circle at 22% 56%,
      hsl(calc(var(--scroll-hue, 210) + 160) 100% 66% / 0.3) 0%,
      hsl(calc(var(--auto-hue-4, 300) + 320) 100% 62% / 0.26) 22%,
      hsl(calc(var(--auto-hue-2, 40) + 60) 98% 58% / 0.24) 42%,
      hsl(calc(var(--auto-hue, 210) + 300) 100% 60% / 0.22) 58%,
      hsl(calc(var(--auto-hue-3, 120) + 20) 98% 56% / 0.2) 72%,
      transparent 84%
    ),
    linear-gradient(
      150deg,
      rgba(1, 3, 8, 0.7),
      rgba(2, 6, 12, 0.86) 46%,
      rgba(2, 4, 10, 0.94)
    ),
    linear-gradient(135deg, #010209, #04070d 42%, #02040b)
  `,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-CA" suppressHydrationWarning>
      <body
        className="bg-[var(--bg)] text-white antialiased"
        suppressHydrationWarning
      >
        <div className="gradient-stage" style={gradientStageStyle} aria-hidden>
          <span className="cursor-spotlight-layer" aria-hidden />
        </div>
        <div className="noise-bg" aria-hidden />
        <BackgroundDynamics />
        <CursorLayer />
        <div className="page-shell">{children}</div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </body>
    </html>
  );
}
