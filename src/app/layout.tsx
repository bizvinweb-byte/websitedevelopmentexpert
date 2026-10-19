import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/lib/seo-data";
import { EnquiryProvider } from "@/components/EnquiryModal";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#ff6b1e",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "Best Website Development Company in Noida & India | WebDev Expert",
    template: "%s | Website Development Expert",
  },
  description:
    "Top-rated website development company in Noida (Sector 62) & Pan-India. We engineer ultra-fast Next.js, React, and Shopify websites with 100% Core Web Vitals to rank #1 on Google search results.",
  keywords: [
    "website development company in noida",
    "website development company in noida sector 62",
    "best website development company in noida",
    "web design company in noida",
    "website developer in noida",
    "website development company in delhi ncr",
    "best website development company in india",
    "top website development company in india",
    "web development agency india",
    "custom website development services",
    "ecommerce website development company",
    "shopify development company india",
    "shopify plus agency noida",
    "next js web development company",
    "react js web development agency",
    "mern stack development services",
    "b2b website design company",
    "corporate web application development",
    "startup website development",
    "website development cost in india",
    "best web design company near me",
    "technical seo website development",
    "brandmingo",
    "brandmingo web development",
    "brandmingo website development expert",
    "website development expert by brandmingo",
  ],
  authors: [
    {
      name: "Brandmingo & Website Development Expert Team",
      url: siteConfig.parentCompany.url,
    },
  ],
  creator: "Brandmingo - Website Development Expert",
  publisher: "Brandmingo",
  icons: {
    icon: [
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/images/webdev-icon.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      { url: "/images/webdev-icon.png", sizes: "180x180", type: "image/png" },
    ],
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
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.siteUrl,
    siteName: "Website Development Expert",
    title: "Best Website Development Company in India | Custom Web & Shopify Solutions",
    description:
      "Enterprise website development, Next.js engineering, and Shopify solutions built with Google Page 1 ranking architecture and 100% Core Web Vitals perfection.",
    images: [
      {
        url: `${siteConfig.siteUrl}/images/webdev-banner.png`,
        width: 1200,
        height: 630,
        alt: "Best Website Development Company in India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Website Development Company in India | Custom Web & Shopify Solutions",
    description:
      "Modern, fast, SEO-first website development and Shopify solutions to rank on Google first page.",
    images: [`${siteConfig.siteUrl}/images/webdev-banner.png`],
  },
  alternates: {
    canonical: siteConfig.siteUrl,
  },
  other: {
    thumbnail: `${siteConfig.siteUrl}/images/webdev-banner.png`,
    "geo.region": "IN-UP",
    "geo.placename": "Noida, Sector 62",
    "geo.position": "28.6280;77.3649",
    ICBM: "28.6280, 77.3649",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Global Schema for Organization and Professional Web Service with Primary Image for Google SERP
  const globalSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteConfig.siteUrl}/#website`,
        url: siteConfig.siteUrl,
        name: siteConfig.name,
        description:
          "Best Website Development Company in India specializing in Next.js, React, and Shopify.",
        publisher: {
          "@id": `${siteConfig.siteUrl}/#organization`,
        },
      },
      {
        "@type": "ImageObject",
        "@id": `${siteConfig.siteUrl}/#primaryimage`,
        url: `${siteConfig.siteUrl}/images/webdev-banner.png`,
        contentUrl: `${siteConfig.siteUrl}/images/webdev-banner.png`,
        width: 1200,
        height: 630,
        caption: "Best Website Development Company in India",
      },
      {
        "@type": "Organization",
        "@id": "https://brandmingo.com/#organization",
        name: siteConfig.parentCompany.name,
        url: siteConfig.parentCompany.url,
        logo: `${siteConfig.siteUrl}/images/brandmingo-logo.png`,
        sameAs: [siteConfig.parentCompany.url],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteConfig.siteUrl}/#organization`,
        name: siteConfig.name,
        url: siteConfig.siteUrl,
        parentOrganization: {
          "@id": "https://brandmingo.com/#organization",
        },
        logo: {
          "@type": "ImageObject",
          "@id": `${siteConfig.siteUrl}/#logo`,
          url: `${siteConfig.siteUrl}/images/webdev-icon.png`,
          contentUrl: `${siteConfig.siteUrl}/images/webdev-icon.png`,
          caption: "Website Development Expert Favicon & Logo",
        },
        image: [
          `${siteConfig.siteUrl}/images/webdev-banner.png`,
          `${siteConfig.siteUrl}/images/webdev-icon.png`,
        ],
        primaryImageOfPage: {
          "@id": `${siteConfig.siteUrl}/#primaryimage`,
        },
        telephone: siteConfig.phone,
        email: siteConfig.email,
        priceRange: "$$",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "184",
          bestRating: "5",
          worstRating: "1",
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.address.street,
          addressLocality: siteConfig.address.city,
          addressRegion: siteConfig.address.region,
          postalCode: siteConfig.address.postalCode,
          addressCountry: siteConfig.address.country,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "28.6280",
          longitude: "77.3649",
        },
        areaServed: [
          { "@type": "City", name: "Noida" },
          { "@type": "AdministrativeArea", name: "Delhi NCR" },
          { "@type": "AdministrativeArea", name: "Greater Noida" },
          { "@type": "AdministrativeArea", name: "Gurugram" },
          { "@type": "Country", name: "India" },
        ],
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            opens: "09:00",
            closes: "19:00",
          },
        ],
      },
    ],
  };

  return (
    <html lang="en" className={`${fontSans.variable} scroll-smooth antialiased`}>
      <body className="flex min-h-screen flex-col bg-white text-slate-900 font-sans selection:bg-[#ff6b1e] selection:text-white">
        <JsonLd data={globalSchema} />
        <EnquiryProvider>
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </EnquiryProvider>
      </body>
    </html>
  );
}
