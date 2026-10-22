import type { Metadata } from "next";
import Link from "next/link";
import {
  Layers,
  ArrowRight,
  CheckCircle2,
  PhoneCall,
  Sparkles,
  ShoppingBag,
  CreditCard,
  Truck,
  ShieldCheck,
  Zap,
  DollarSign,
  PackageCheck,
  Building2,
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/lib/seo-data";
import { EnquiryButton } from "@/components/EnquiryModal";

export const metadata: Metadata = {
  title: "E-Commerce Website Development Company India | Custom & D2C",
  description:
    "Top e-commerce website development company in India. We engineer custom online stores, multi-vendor marketplaces, and high-conversion D2C checkout platforms.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/services/ecommerce-website-development`,
  },
  openGraph: {
    title: "E-Commerce Website Development Company India | Custom & D2C",
    description:
      "Enterprise e-commerce website development engineered at our Noida HQ. Custom shopping carts, GST billing, Indian payment gateways, and shipping automation.",
    url: `${siteConfig.siteUrl}/services/ecommerce-website-development`,
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: `${siteConfig.siteUrl}/images/webdev-banner.png`,
        width: 1200,
        height: 630,
        alt: "E-Commerce Website Development Company India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "E-Commerce Website Development Company India | Custom & D2C",
    description:
      "Full-stack e-commerce engineering, Indian payment gateways, GST invoices, and logistics APIs for D2C brands across India.",
    images: [`${siteConfig.siteUrl}/images/webdev-banner.png`],
  },
};

export default function EcommerceServicePage() {
  const pageUrl = `${siteConfig.siteUrl}/services/ecommerce-website-development`;

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/website-development-company-in-india#services" },
    { name: "E-Commerce Website Development", url: "/services/ecommerce-website-development" },
  ];

  const faqs = [
    {
      question: "Which platform is best for my e-commerce business: Shopify, WooCommerce, or Custom Next.js?",
      answer:
        "The ideal platform depends on your operational model and catalog size. For fast-growing retail D2C brands wanting rapid rollout and proven checkout infrastructure, Shopify is the industry standard. For businesses needing deeply integrated editorial content or self-hosted data ownership, WooCommerce is cost-effective. For high-volume marketplaces, bespoke B2B portals, or platforms with complex configuration calculators, a custom Next.js full-stack application provides unmatched speed, flexibility, and scalability.",
    },
    {
      question: "How do you handle Indian GST billing and automated invoicing?",
      answer:
        "We build automated GST calculation engines that handle intra-state (CGST + SGST) and inter-state (IGST) taxation based on the customer's delivery state. Invoices automatically generate with itemized HSN/SAC codes, state tax splits, customer GSTIN verification, and downloadable PDF receipts triggered upon order confirmation.",
    },
    {
      question: "What strategies do you implement to reduce Cash-on-Delivery (COD) RTO rates?",
      answer:
        "Return-to-Origin (RTO) on Cash-on-Delivery is one of the highest expenses for Indian e-commerce merchants. We implement intelligent COD verification: automated WhatsApp/SMS OTP confirmation before order fulfillment, address accuracy auto-completion using Google Places API, and dynamic COD availability rules based on pin-code delivery risk ratings.",
    },
    {
      question: "Can your e-commerce platforms integrate with physical retail POS and ERP systems?",
      answer:
        "Yes. We build custom API connectors to sync inventory, prices, and order statuses between your online storefront and internal ERPs (SAP, Tally, Zoho Inventory, Marg ERP, Unicommerce) ensuring real-time catalog stock synchronization across offline and online channels.",
    },
    {
      question: "What are the typical costs and timelines for building an e-commerce website in India?",
      answer:
        "Custom WooCommerce storefronts typically range between ₹35,000 to ₹75,000 (3–4 weeks). Shopify 2.0 implementations range between ₹45,000 to ₹1,10,000 (3–5 weeks). Custom full-stack Next.js commerce applications and multi-vendor marketplaces range between ₹1,20,000 to ₹3,00,000+ (6–10 weeks).",
    },
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name: "E-Commerce Website Development Services",
    serviceType: "Digital Commerce Engineering",
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
      "Custom e-commerce web development company engineering high-conversion shopping portals, marketplace systems, and D2C checkout platforms for Indian businesses.",
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
                <Layers className="w-3.5 h-3.5 text-[#ff6b1e]" />
                <span>Custom Commerce &amp; Multi-Vendor Platforms • Pan-India Remote Delivery</span>
              </div>

              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl sm:leading-tight">
                E-Commerce Website Development Company in{" "}
                <span className="text-[#ff6b1e]">India</span>
              </h1>

              <p className="mt-6 text-base sm:text-xl text-slate-600 leading-relaxed">
                We engineer scalable digital storefronts, custom shopping carts, and multi-vendor marketplace platforms designed for high transaction volume, seamless UPI checkout, and automated logistics. Delivered from our Noida technology center.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <EnquiryButton
                  service="E-Commerce Development"
                  className="px-8 py-3.5 text-sm font-bold"
                >
                  <span>Request Commerce Proposal</span>
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
                <span>Integrated Indian payment gateways, automated GST billing, COD verification &amp; Shiprocket logistics</span>
              </div>
            </div>
          </div>
        </header>

        {/* Section 1: Core E-Commerce Pillars */}
        <section className="py-12 sm:py-16 bg-white border-t border-slate-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#ff6b1e]">
                Commerce Engineering
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900">
                Tailored E-Commerce Solutions for Modern Indian Commerce
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                Running a digital storefront in India requires solving distinct friction points: instant UPI intent flows, Cash on Delivery verification, regional language considerations, and multi-state GST compliance. We build systems that resolve these hurdles natively.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-[#ff6b1e]/50 transition">
                <div className="h-11 w-11 rounded-xl bg-[#fff5ee] text-[#ff6b1e] flex items-center justify-center mb-4">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  Direct-to-Consumer (D2C) Storefronts
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Fast-loading visual catalogs, dynamic bundle builders, one-click reorders, and personalized upselling engines engineered to maximize Average Order Value (AOV).
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-[#ff6b1e]/50 transition">
                <div className="h-11 w-11 rounded-xl bg-[#fff5ee] text-[#ff6b1e] flex items-center justify-center mb-4">
                  <CreditCard className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  Instant UPI &amp; Multi-Payment Gateways
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Support for Razorpay, Cashfree, PayU, and CCAvenue. Direct UPI QR generation and mobile deep linking to Google Pay, PhonePe, and Paytm for zero-dropoff checkout.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-[#ff6b1e]/50 transition">
                <div className="h-11 w-11 rounded-xl bg-[#fff5ee] text-[#ff6b1e] flex items-center justify-center mb-4">
                  <PackageCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  Automated GST &amp; HSN Invoicing
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Automated computation of CGST, SGST, and IGST based on shipping destination. Automatic generation of tax-compliant PDF invoices with verified buyer GSTIN credentials.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-[#ff6b1e]/50 transition">
                <div className="h-11 w-11 rounded-xl bg-[#fff5ee] text-[#ff6b1e] flex items-center justify-center mb-4">
                  <Truck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  Logistics &amp; Courier Webhook Integration
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Direct API sync with Shiprocket, Delhivery, Bluedart, and Ecom Express. Auto-assign courier partners based on pin-code delivery speed and trigger live WhatsApp tracking updates.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-[#ff6b1e]/50 transition">
                <div className="h-11 w-11 rounded-xl bg-[#fff5ee] text-[#ff6b1e] flex items-center justify-center mb-4">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  B2B Wholesale &amp; Distributor Portals
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Tiered wholesale pricing, Minimum Order Quantities (MOQ), custom credit terms, RFQ (Request for Quote) flows, and separate distributor login dashboards.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-[#ff6b1e]/50 transition">
                <div className="h-11 w-11 rounded-xl bg-[#fff5ee] text-[#ff6b1e] flex items-center justify-center mb-4">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  Sub-Second Mobile Commerce (Next.js)
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Headless architecture delivering instantaneous page transitions, persistent client-side shopping bags, and zero layout shift across mobile 4G/5G connections.
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
                  Technical Rigor
                </span>
                <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                  High-Conversion Architecture Built for Indian Buyers
                </h2>
                <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                  A high cart abandonment rate is the single greatest drain on Indian e-commerce profitability. We engineer every checkout flow, address input field, and verification step to eliminate friction.
                </p>

                <div className="mt-6 space-y-3.5 text-xs sm:text-sm text-slate-600">
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                    <CheckCircle2 className="w-4 h-4 text-[#ff6b1e] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">Optimized One-Page Checkout:</strong> Simplified forms with auto-detect pin-code filling for city and state, reducing form entry errors by over 40%.
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                    <CheckCircle2 className="w-4 h-4 text-[#ff6b1e] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">Comprehensive Product Schema.org Data:</strong> Rich snippet structured data informing Google Search of exact stock counts, currency pricing, and aggregate reviews.
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                    <CheckCircle2 className="w-4 h-4 text-[#ff6b1e] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">ERP &amp; Inventory Webhooks:</strong> Zero stockouts with automatic inventory reconciliation across online storefronts and warehouse physical counts.
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-4">
                  Indicative E-Commerce Packages (2026)
                </h3>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-slate-900">WooCommerce / Custom Cart</span>
                      <span className="font-bold text-[#ff6b1e]">₹35,000 – ₹75,000</span>
                    </div>
                    <p className="text-slate-500 mt-1 text-[11px] sm:text-xs">
                      Self-hosted, up to 500 products, Razorpay/UPI gateway, Shiprocket sync, 3–4 weeks.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-slate-900">Shopify 2.0 D2C Store</span>
                      <span className="font-bold text-[#ff6b1e]">₹45,000 – ₹1,10,000</span>
                    </div>
                    <p className="text-slate-500 mt-1 text-[11px] sm:text-xs">
                      Custom Liquid theme, payment gateways, WhatsApp alerts, COD verification, 3–5 weeks.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-slate-900">Headless Next.js Commerce / Marketplace</span>
                      <span className="font-bold text-[#ff6b1e]">₹1,20,000 – ₹3,00,000+</span>
                    </div>
                    <p className="text-slate-500 mt-1 text-[11px] sm:text-xs">
                      Extreme speed, custom admin panel, multi-vendor commission splits, 6–10 weeks.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <EnquiryButton
                    service="E-Commerce Development"
                    className="w-full justify-center text-xs sm:text-sm"
                  >
                    <span>Request E-Commerce Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </EnquiryButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: FAQs */}
        <section className="py-12 sm:py-16 bg-white" id="faqs">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-[#ff6b1e]">
                Direct Answers
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900">
                Frequently Asked Questions — E-Commerce Development
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-600">
                Answers regarding e-commerce platform selection, Indian payment gateways, and timelines.
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

        {/* Internal Cross-Linking */}
        <section className="py-10 bg-slate-50 border-t border-slate-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 text-center">
              Explore Related Web Services
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm">
              <Link
                href="/services/shopify-development-company"
                className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:border-[#ff6b1e] hover:text-[#ff6b1e] transition shadow-2xs"
              >
                Shopify Development →
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
                Ready to Engineer Your E-Commerce Storefront?
              </h2>
              <p className="mt-3 text-slate-600 max-w-2xl mx-auto text-xs sm:text-base leading-relaxed">
                Connect with our e-commerce solutions architects at our Noida Sector 62 office. We evaluate your product catalog, payment requirements, and provide a fixed-price proposal.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <EnquiryButton
                  service="E-Commerce Storefront"
                  className="px-8 py-3.5 text-sm"
                >
                  <span>Request Free Commerce Proposal</span>
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
