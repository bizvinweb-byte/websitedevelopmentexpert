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
    default: "Best Website Development Company in India | Top WebDev Expert",
    template: "%s | Website Development Expert",
  },
  description:
    "Top-rated website development company in India. We engineer ultra-fast Next.js, React, and Shopify websites with 100% Core Web Vitals to rank #1 on Google search results.",
  keywords: [
    "best website development company in india",
    "website development company in noida",
    "website development company in noida sector 62",
    "website development company in delhi ncr",
    "top website development company",
    "web development agency india",
    "custom website development services",
    "ecommerce website development company",
    "shopify development company india",
    "shopify plus agency",
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
      <head>
        {/* Google SERP Favicon Standards (Consistent across Google Search & Browser) */}
        <link rel="icon" type="image/png" sizes="192x192" href="/icon.png" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

        {/* Google Search Snippet Right-Side Thumbnail / Banner Meta Tags */}
        <meta name="thumbnail" content={`${siteConfig.siteUrl}/images/webdev-banner.png`} />
        <meta property="og:image" content={`${siteConfig.siteUrl}/images/webdev-banner.png`} />
        <meta property="og:image:secure_url" content={`${siteConfig.siteUrl}/images/webdev-banner.png`} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Best Website Development Company in India" />
        <meta name="twitter:image" content={`${siteConfig.siteUrl}/images/webdev-banner.png`} />

        <JsonLd data={globalSchema} />
      </head>
      <body className="flex min-h-screen flex-col bg-white text-slate-900 font-sans selection:bg-[#ff6b1e] selection:text-white">
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
