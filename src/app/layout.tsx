import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/lib/seo-data";
import { EnquiryProvider } from "@/components/EnquiryModal";
import StickyMobileCta from "@/components/StickyMobileCta";
import CookieConsentBanner from "@/components/CookieConsentBanner";

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
    default: "Website Development Company in Noida | India-Wide Web & Shopify Experts",
    template: "%s | Website Development Expert",
  },
  description:
    "Top website development company in Noida Sector 62. We build fast Next.js & Shopify websites for businesses across India. Get a free proposal today.",
  authors: [
    {
      name: "Website Development Expert - Brandmingo",
      url: siteConfig.siteUrl,
    },
  ],
  creator: "Website Development Expert",
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
    siteName: siteConfig.name,
    title: "Website Development Company in Noida | India-Wide Web & Shopify Experts",
    description:
      "Noida-based website development company engineering fast Next.js & Shopify websites for businesses across India. Get a free technical consultation.",
    images: [
      {
        url: `${siteConfig.siteUrl}/images/webdev-banner.png`,
        width: 1200,
        height: 630,
        alt: "Website Development Company in Noida - Serving Pan-India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Development Company in Noida | India-Wide Web & Shopify Experts",
    description:
      "Noida-based web development firm building high-performance Next.js and Shopify stores for businesses across India.",
    images: [`${siteConfig.siteUrl}/images/webdev-banner.png`],
  },
  alternates: {
    canonical: siteConfig.siteUrl,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION || "google-site-verification-placeholder",
    other: {
      "msvalidate.01": process.env.NEXT_PUBLIC_BING_VERIFICATION || "bing-verification-placeholder",
    },
  },
  other: {
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
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;

  const globalSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteConfig.siteUrl}/#website`,
        url: siteConfig.siteUrl,
        name: siteConfig.name,
        description:
          "Website development company based in Noida Sector 62, engineering custom Next.js, React, and Shopify websites for businesses across India.",
        publisher: {
          "@id": `${siteConfig.siteUrl}/#organization`,
        },
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
        "@type": ["ProfessionalService", "LocalBusiness"],
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
          caption: "Website Development Expert Logo",
        },
        image: [
          `${siteConfig.siteUrl}/images/webdev-banner.png`,
          `${siteConfig.siteUrl}/images/webdev-icon.png`,
        ],
        telephone: siteConfig.phone,
        email: siteConfig.email,
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.address.street,
          addressLocality: siteConfig.address.city,
          addressRegion: siteConfig.address.region,
          postalCode: siteConfig.address.postalCode,
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "28.6280",
          longitude: "77.3649",
        },
        areaServed: {
          "@type": "Country",
          name: "India",
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
        {/* Google Consent Mode v2 Default (DPDP Compliant) */}
        <Script id="google-consent-mode" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              'analytics_storage': 'denied',
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'wait_for_update': 500
            });
          `}
        </Script>

        {/* Google Analytics 4 */}
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', { page_path: window.location.pathname });
              `}
            </Script>
          </>
        )}

        {/* Microsoft Clarity Heatmaps & Session Recording */}
        {clarityId && (
          <Script id="microsoft-clarity" strategy="afterInteractive">
            {`
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${clarityId}");
            `}
          </Script>
        )}
      </head>
      <body className="flex min-h-screen flex-col bg-white text-slate-900 font-sans selection:bg-[#ff6b1e] selection:text-white">
        <JsonLd data={globalSchema} />
        <EnquiryProvider>
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
          <StickyMobileCta />
          <CookieConsentBanner />
        </EnquiryProvider>
      </body>
    </html>
  );
}
