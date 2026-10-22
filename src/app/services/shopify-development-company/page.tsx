import type { Metadata } from "next";
import Link from "next/link";
import {
  ShoppingBag,
  ArrowRight,
  CheckCircle2,
  PhoneCall,
  Sparkles,
  Layers,
  Cpu,
  ShieldCheck,
  Zap,
  Globe2,
  DollarSign,
  PackageCheck,
  CreditCard,
  Truck,
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/lib/seo-data";
import { EnquiryButton } from "@/components/EnquiryModal";

export const metadata: Metadata = {
  title: "Shopify Development Company in India | Custom Theme & Plus",
  description:
    "Expert Shopify development company in India. We engineer custom Shopify 2.0 themes, headless storefronts, app integrations, and fast checkout funnels.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/services/shopify-development-company`,
  },
  openGraph: {
    title: "Shopify Development Company in India | Custom Theme & Plus",
    description:
      "Enterprise Shopify and Shopify Plus development company based in Noida, serving fast-growing D2C brands across India with custom Liquid and headless stores.",
    url: `${siteConfig.siteUrl}/services/shopify-development-company`,
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: `${siteConfig.siteUrl}/images/webdev-banner.png`,
        width: 1200,
        height: 630,
        alt: "Shopify Development Company in India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Development Company in India | Custom Theme & Plus",
    description:
      "Custom Shopify 2.0 themes, app integrations, and headless commerce solutions engineered at Noida HQ for Indian D2C brands.",
    images: [`${siteConfig.siteUrl}/images/webdev-banner.png`],
  },
};

export default function ShopifyServicePage() {
  const pageUrl = `${siteConfig.siteUrl}/services/shopify-development-company`;

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/website-development-company-in-india#services" },
    { name: "Shopify Development Company", url: "/services/shopify-development-company" },
  ];

  const faqs = [
    {
      question: "Why should Indian D2C brands choose custom Shopify 2.0 theme development?",
      answer:
        "Off-the-shelf marketplace themes often suffer from bloated, redundant JavaScript libraries, rigid section configurations, and sluggish mobile performance. Custom Shopify 2.0 theme development delivers tailor-made Liquid sections, streamlined CSS, native support for dynamic product metaobjects, and optimized assets. This directly increases conversion rates across Indian smartphone shoppers on 4G and 5G networks.",
    },
    {
      question: "Do you integrate Indian payment gateways and logistics aggregators?",
      answer:
        "Yes, absolutely. We have extensive experience integrating Razorpay, Cashfree, PayU, and CCAvenue, including custom Cash on Delivery (COD) verification workflows with OTP authentication. For shipping, we integrate Shiprocket, Delhivery, Pickrr, and Bluedart with automated AWB generation, real-time rate calculators, and tracking webhook triggers.",
    },
    {
      question: "What is headless Shopify, and when is it recommended?",
      answer:
        "Headless Shopify decouples Shopify's commerce engine (catalog, inventory, checkout, customer accounts) from the frontend display layer, replacing standard Liquid templates with a bespoke Next.js React frontend via the Shopify Storefront GraphQL API. It is recommended for brands with over 5,000 SKUs, international multi-currency requirements, or brands requiring sub-second page transitions and ultra-custom customer funnels.",
    },
    {
      question: "How long does it take to develop a custom Shopify storefront?",
      answer:
        "A customized Shopify 2.0 store with custom section building, catalog import, payment configuration, and mobile optimization typically requires 3 to 5 weeks. Headless Next.js Shopify implementations take 6 to 9 weeks, including comprehensive API stress testing and QA audits.",
    },
    {
      question: "Can you migrate our existing store from WooCommerce or Magento to Shopify?",
      answer:
        "Yes. We manage secure, zero-data-loss migrations from WooCommerce, Magento, OpenCart, and custom carts to Shopify. We migrate your complete historical database including customer credentials, historical orders, product variations, high-resolution media, and configure 301 URL redirects to protect your existing Google organic search rankings.",
    },
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name: "Shopify Development Services",
    serviceType: "E-Commerce Web Development",
    provider: {
      "@type": "ProfessionalService",
      name: siteConfig.name,
      url: siteConfig.siteUrl,
      telephone: siteConfig.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address.street,
        addressLocality: siteConfig.address.city,
        addressRegion: siteConfig.address.region,
        postalCode: siteConfig.address.postalCode,
        addressCountry: "IN",
      },
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    description:
      "Enterprise Shopify 2.0 theme design, private app development, checkout optimization, and headless Next.js Shopify engineering for Indian businesses.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <>
      <JsonLd data={[serviceSchema, faqSchema]} />

      <article className="min-h-screen bg-white">
        {/* Header Hero */}
        <header className="relative overflow-hidden pt-8 pb-16 sm:pt-14 sm:pb-24 bg-gradient-to-b from-orange-50/40 via-white to-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center mb-6">
              <Breadcrumb items={breadcrumbs} />
            </div>

            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fff5ee] border border-[#ff6b1e]/25 text-[#ff6b1e] text-xs font-semibold mb-6 shadow-2xs">
                <ShoppingBag className="w-3.5 h-3.5 text-[#ff6b1e]" />
                <span>Shopify &amp; Shopify Plus Engineering • Pan-India Remote Delivery</span>
              </div>

              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl sm:leading-tight">
                Shopify Development Company in{" "}
                <span className="text-[#ff6b1e]">India</span>
              </h1>

              <p className="mt-6 text-base sm:text-xl text-slate-600 leading-relaxed">
                We engineer bespoke Shopify 2.0 storefronts, private app integrations, and headless commerce architectures that turn casual browsers into loyal, repeat customers. Delivered with structured remote sprints from our Noida headquarters.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <EnquiryButton
                  service="Shopify Development"
                  className="px-8 py-3.5 text-sm font-bold"
                >
                  <span>Request Shopify Proposal</span>
                  <ArrowRight className="w-4 h-4" />
                </EnquiryButton>
                <Link
                  href="tel:+919990613140"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white border border-slate-300 px-7 py-3.5 text-sm font-semibold text-slate-700 shadow-2xs hover:border-[#ff6b1e] hover:text-[#ff6b1e] transition-all"
                >
                  <PhoneCall className="w-4 h-4 text-[#ff6b1e]" />
                  <span>Call: +91 99906 13140</span>
                </Link>
              </div>

              <div className="mt-6 text-xs text-slate-500">
                <span>Based in Noida HQ, Sector 62 • Serving D2C brands across Mumbai, Bengaluru, Delhi NCR &amp; nationwide</span>
              </div>
            </div>
          </div>
        </header>

        {/* Section 1: Detailed Shopify Capabilities */}
        <section className="py-12 sm:py-16 bg-white border-t border-slate-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#ff6b1e]">
                Enterprise Capabilities
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900">
                Tailor-Made Shopify Solutions for High-Growth Indian Brands
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                The Indian direct-to-consumer (D2C) ecosystem is one of the most dynamic in the world, with unique operational requirements such as high Cash-on-Delivery (COD) ratios, localized payment apps (UPI, NetBanking), and multi-carrier logistics networks. Our engineering approach directly addresses these ground realities.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-[#ff6b1e]/50 transition">
                <div className="h-11 w-11 rounded-xl bg-[#fff5ee] text-[#ff6b1e] flex items-center justify-center mb-4">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  Custom Shopify 2.0 Theme Design
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  We design and code unique Liquid themes with zero unnecessary third-party scripts. Every section is modular, allowing your marketing team to customize layouts, banners, and product grids without touching code.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-[#ff6b1e]/50 transition">
                <div className="h-11 w-11 rounded-xl bg-[#fff5ee] text-[#ff6b1e] flex items-center justify-center mb-4">
                  <CreditCard className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  Indian Payment &amp; COD Verification
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Seamlessly integrate Razorpay, Cashfree, PayU, and PhonePe with automated UPI instant intent. Build custom SMS/WhatsApp OTP verification funnels to reduce Cash-on-Delivery RTO return rates.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-[#ff6b1e]/50 transition">
                <div className="h-11 w-11 rounded-xl bg-[#fff5ee] text-[#ff6b1e] flex items-center justify-center mb-4">
                  <Truck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  Shipping &amp; Logistics Automation
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Direct API integrations with Shiprocket, Delhivery, Pickrr, and Clickpost. Automatically generate shipping labels, sync tracking numbers back to Shopify, and trigger customer WhatsApp order alerts.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-[#ff6b1e]/50 transition">
                <div className="h-11 w-11 rounded-xl bg-[#fff5ee] text-[#ff6b1e] flex items-center justify-center mb-4">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  Headless Shopify with Next.js
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Uncouple your frontend with Next.js 16 and connect via Shopify&apos;s Storefront GraphQL API. Experience instant page transitions, bespoke UI animations, and superior Core Web Vitals across mobile browsers.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-[#ff6b1e]/50 transition">
                <div className="h-11 w-11 rounded-xl bg-[#fff5ee] text-[#ff6b1e] flex items-center justify-center mb-4">
                  <PackageCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  Platform Migration to Shopify
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Migrate seamlessly from WooCommerce, Magento, or custom web portals without losing orders, customer accounts, or historical search rankings, backed by comprehensive 301 redirect mapping.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-[#ff6b1e]/50 transition">
                <div className="h-11 w-11 rounded-xl bg-[#fff5ee] text-[#ff6b1e] flex items-center justify-center mb-4">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  Speed Audits &amp; App Cleanup
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Identify and eradicate slow app scripts, render-blocking tags, and inefficient tracking pixels. We replace bloat with native Liquid code to maintain fast mobile browsing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Technical Approach */}
        <section className="py-12 sm:py-16 bg-slate-50/60 border-y border-slate-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#ff6b1e]">
                  Engineering Discipline
                </span>
                <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                  Why Fast-Growing Indian Brands Choose Our Shopify Team
                </h2>
                <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                  We don&apos;t just install commercial themes and adjust colors. Our team writes clean, semantic code that optimizes your checkout flow and helps your products get discovered organically on Google Search.
                </p>

                <div className="mt-6 space-y-3.5 text-xs sm:text-sm text-slate-600">
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                    <CheckCircle2 className="w-4 h-4 text-[#ff6b1e] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">Schema.org Product &amp; AggregateOffer JSON-LD:</strong> Search engines display rich snippets including real-time pricing, stock availability, and ratings directly in Google search results.
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                    <CheckCircle2 className="w-4 h-4 text-[#ff6b1e] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">Mobile Checkout Optimization:</strong> Frictionless single-page checkout configuration with autofill, local address validation, and express payment options (GPay, PhonePe, Paytm).
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                    <CheckCircle2 className="w-4 h-4 text-[#ff6b1e] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">Full Code Ownership &amp; IP Transfer:</strong> We build in your development store or transfer repository commits directly to your GitHub/Shopify account upon launch.
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-4">
                  Shopify Project Investment &amp; Timelines
                </h3>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-slate-900">Custom Shopify 2.0 Store</span>
                      <span className="font-bold text-[#ff6b1e]">₹45,000 – ₹90,000</span>
                    </div>
                    <p className="text-slate-500 mt-1 text-[11px] sm:text-xs">
                      Bespoke theme, up to 10 page layouts, payment gateway, logistics setup, 3–4 weeks timeline.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-slate-900">Shopify Plus / Advanced Migration</span>
                      <span className="font-bold text-[#ff6b1e]">₹90,000 – ₹1,80,000</span>
                    </div>
                    <p className="text-slate-500 mt-1 text-[11px] sm:text-xs">
                      Large catalog migration, multi-currency, custom ERP webhook bridges, 4–7 weeks timeline.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-slate-900">Headless Shopify (Next.js)</span>
                      <span className="font-bold text-[#ff6b1e]">₹1,50,000 – ₹3,20,000</span>
                    </div>
                    <p className="text-slate-500 mt-1 text-[11px] sm:text-xs">
                      Decoupled React frontend, Storefront API, extreme speed optimization, 6–9 weeks timeline.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <EnquiryButton
                    service="Shopify Development"
                    className="w-full justify-center text-xs sm:text-sm"
                  >
                    <span>Get Detailed Shopify Proposal</span>
                    <ArrowRight className="w-4 h-4" />
                  </EnquiryButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: FAQs (Server-Rendered in HTML) */}
        <section className="py-12 sm:py-16 bg-white" id="faqs">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-[#ff6b1e]">
                Direct Answers
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900">
                Frequently Asked Questions — Shopify Development
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-600">
                Answers regarding our Shopify development capabilities, integrations, and pricing.
              </p>
            </div>

            <div className="mt-10 space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xs"
                >
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#ff6b1e] shrink-0 mt-0.5" />
                    <span>{faq.question}</span>
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed pl-6.5">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Internal Cross-Linking Silo */}
        <section className="py-10 bg-slate-50 border-t border-slate-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 text-center">
              Explore Related Web &amp; E-Commerce Services
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm">
              <Link
                href="/services/ecommerce-website-development"
                className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:border-[#ff6b1e] hover:text-[#ff6b1e] transition shadow-2xs"
              >
                E-Commerce Solutions →
              </Link>
              <Link
                href="/services/nextjs-development-company"
                className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:border-[#ff6b1e] hover:text-[#ff6b1e] transition shadow-2xs"
              >
                Next.js Engineering →
              </Link>
              <Link
                href="/services/custom-web-application-development"
                className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:border-[#ff6b1e] hover:text-[#ff6b1e] transition shadow-2xs"
              >
                Custom Web Applications →
              </Link>
              <Link
                href="/website-development-cost-in-india"
                className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:border-[#ff6b1e] hover:text-[#ff6b1e] transition shadow-2xs"
              >
                Website Cost in India Guide →
              </Link>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-white py-12 sm:py-16 text-center">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-slate-100 bg-[#fff5ee] p-8 sm:p-12 shadow-lg shadow-[#ff6b1e]/5">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
                Ready to Launch or Upgrade Your Shopify Store?
              </h2>
              <p className="mt-3 text-slate-600 max-w-2xl mx-auto text-xs sm:text-base leading-relaxed">
                Connect with our senior Shopify engineers at our Noida Sector 62 office. We provide a full store audit, feature breakdown, and clear timeline.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <EnquiryButton
                  service="Shopify Store Development"
                  className="px-8 py-3.5 text-sm"
                >
                  <span>Request Free Store Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </EnquiryButton>
                <Link
                  href="tel:+919990613140"
                  className="inline-flex items-center gap-2 rounded-xl bg-white border border-slate-300 px-7 py-3.5 text-sm font-bold text-slate-800 hover:border-[#ff6b1e] hover:text-[#ff6b1e] transition-all shadow-2xs"
                >
                  <PhoneCall className="w-4 h-4 text-[#ff6b1e]" />
                  <span>Call: +91 99906 13140</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
