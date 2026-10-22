import type { Metadata } from "next";
import Link from "next/link";
import {
  DollarSign,
  ArrowRight,
  CheckCircle2,
  PhoneCall,
  Sparkles,
  Layers,
  Cpu,
  ShieldCheck,
  Zap,
  Globe2,
  HelpCircle,
  Building2,
  Clock,
  TrendingUp,
  FileText,
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/lib/seo-data";
import { EnquiryButton } from "@/components/EnquiryModal";
import CostCalculator from "@/components/CostCalculator";

export const metadata: Metadata = {
  title: "Website Development Cost in India (2026) | Real Price Guide",
  description:
    "Comprehensive 2026 website development cost in India guide. Detailed pricing for business sites, Shopify stores, and Next.js custom web apps. No hidden fees.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/website-development-cost-in-india`,
  },
  openGraph: {
    title: "Website Development Cost in India (2026) | Real Price Guide",
    description:
      "Honest breakdown of website development costs in India. Compare hourly rates, fixed-scope packages, technology stack pricing, and maintenance retainers.",
    url: `${siteConfig.siteUrl}/website-development-cost-in-india`,
    type: "article",
    locale: "en_IN",
    images: [
      {
        url: `${siteConfig.siteUrl}/images/webdev-banner.png`,
        width: 1200,
        height: 630,
        alt: "Website Development Cost in India 2026 Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Development Cost in India (2026) | Real Price Guide",
    description:
      "How much does a website really cost in India in 2026? Complete pricing guide across WordPress, Shopify, Next.js, and custom web apps.",
    images: [`${siteConfig.siteUrl}/images/webdev-banner.png`],
  },
};

export default function WebsiteDevelopmentCostPage() {
  const pageUrl = `${siteConfig.siteUrl}/website-development-cost-in-india`;

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Website Development Cost in India", url: "/website-development-cost-in-india" },
  ];

  const faqs = [
    {
      question: "What is the average cost of developing a standard business website in India in 2026?",
      answer:
        "For a professional 5 to 10-page corporate website built with responsive mobile-first architecture, clean technical SEO, and contact form funnels, typical agency pricing in India ranges between ₹20,000 and ₹45,000. Freelancers may quote ₹10,000 to ₹18,000 using standard marketplace templates, while top-tier design agencies in metro cities may charge ₹60,000 to ₹1,20,000.",
    },
    {
      question: "Why do website development quotes vary so dramatically across Indian agencies?",
      answer:
        "Quotes vary based on three factors: (1) Architecture: Agencies quoting ₹10,000 typically clone a pirated WordPress theme with 30 conflicting plugins that breaks within months. Agencies charging ₹40,000+ write bespoke code (Next.js or clean PHP) with strict security and speed optimization. (2) Scope & Customization: Unique UX/UI wireframing versus pre-built templates. (3) Post-Launch Support: Whether the agency includes QA testing, Google Search Console indexing, and maintenance.",
    },
    {
      question: "How much does a Shopify e-commerce store cost to build in India?",
      answer:
        "A customized Shopify 2.0 store with custom Liquid sections, Indian payment gateways (Razorpay, UPI, Cash on Delivery OTP verification), and logistics integrations (Shiprocket, Delhivery) typically costs between ₹45,000 and ₹1,10,000. Headless Next.js Shopify stores range from ₹1,40,000 to ₹3,00,000 depending on catalog complexity.",
    },
    {
      question: "What are the ongoing hidden costs of maintaining a website in India?",
      answer:
        "Common recurring costs include: Domain registration (₹800 to ₹1,500/year for .in or .com), Cloud Hosting (₹3,000 to ₹15,000/year on Hostinger/AWS/Vercel), SSL Certificate (free via Let's Encrypt), Business Email (₹1,500 to ₹3,000/year on Google Workspace), and Optional Maintenance/Security Retainers (₹3,000 to ₹15,000/month).",
    },
    {
      question: "Is it better to pay a fixed project fee or an hourly rate for web development?",
      answer:
        "For defined projects (corporate sites, e-commerce stores, initial MVPs), a fixed-scope milestone agreement is vastly safer for business owners. It protects you from unexpected scope creep and hourly billing disputes. Hourly billing ($20–$45/hr) is best reserved for ongoing maintenance, feature expansions, or agile R&D iterations.",
    },
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${pageUrl}#article`,
    headline: "Website Development Cost in India (2026 Complete Guide)",
    description:
      "A comprehensive, transparent analysis of website development pricing in India across corporate sites, Shopify stores, and custom Next.js applications.",
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.siteUrl,
      logo: `${siteConfig.siteUrl}/images/webdev-icon.png`,
    },
    mainEntityOfPage: pageUrl,
    datePublished: "2026-01-15T00:00:00.000Z",
    dateModified: "2026-03-01T00:00:00.000Z",
    author: {
      "@type": "Organization",
      name: "Website Development Expert Engineering Team",
    },
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
      <JsonLd data={[articleSchema, faqSchema]} />

      <article className="min-h-screen bg-white">
        {/* Header Hero */}
        <header className="relative overflow-hidden pt-8 pb-16 sm:pt-14 sm:pb-24 bg-gradient-to-b from-orange-50/40 via-white to-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center mb-6">
              <Breadcrumb items={breadcrumbs} />
            </div>

            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fff5ee] border border-[#ff6b1e]/25 text-[#ff6b1e] text-xs font-semibold mb-6 shadow-2xs">
                <DollarSign className="w-3.5 h-3.5 text-[#ff6b1e]" />
                <span>2026 Pricing Intelligence • Transparent Breakdown</span>
              </div>

              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl sm:leading-tight">
                Website Development Cost in India{" "}
                <span className="text-[#ff6b1e]">(2026 Guide)</span>
              </h1>

              <p className="mt-6 text-base sm:text-xl text-slate-600 leading-relaxed font-normal">
                How much does a website really cost in India in 2026? An unfiltered, comprehensive breakdown of actual agency rates, technology tradeoffs, hidden expenses, and milestone models for business owners.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <EnquiryButton
                  service="Website Cost Calculation"
                  className="px-8 py-3.5 text-sm font-bold"
                >
                  <span>Get Itemized Fixed-Price Quote</span>
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
                <span>Written by Senior Solutions Architects • Published from Noida Sector 62 HQ</span>
              </div>
            </div>
          </div>
        </header>

        {/* Section 1: Executive Summary Table */}
        <section className="py-12 sm:py-16 bg-white border-t border-slate-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#ff6b1e]">
                Quick Reference
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900">
                2026 Website Development Cost Summary in India
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                Prices for web development in India vary according to business requirements, technological complexity, and agency reliability. The table below outlines typical investment ranges for verified quality work with proper contracts and IP ownership.
              </p>
            </div>

            <div className="mt-8 overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-slate-900 font-bold">
                    <th className="py-3 px-4">Project Category</th>
                    <th className="py-3 px-4">Typical Price Range</th>
                    <th className="py-3 px-4">Timeline</th>
                    <th className="py-3 px-4">Core Technology Stack</th>
                    <th className="py-3 px-4">Best Suited For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-600">
                  <tr className="hover:bg-slate-50/60 transition">
                    <td className="py-3 px-4 font-bold text-slate-900">Basic Corporate Website</td>
                    <td className="py-3 px-4 font-extrabold text-[#ff6b1e]">₹20,000 – ₹35,000</td>
                    <td className="py-3 px-4">10–14 Days</td>
                    <td className="py-3 px-4">Next.js or Custom PHP</td>
                    <td className="py-3 px-4">Local service businesses, consultants, law firms</td>
                  </tr>
                  <tr className="hover:bg-slate-50/60 transition">
                    <td className="py-3 px-4 font-bold text-slate-900">Growth Business Website</td>
                    <td className="py-3 px-4 font-extrabold text-[#ff6b1e]">₹35,000 – ₹60,000</td>
                    <td className="py-3 px-4">2–3 Weeks</td>
                    <td className="py-3 px-4">Next.js App Router / TypeScript</td>
                    <td className="py-3 px-4">B2B companies, manufacturing, regional exporters</td>
                  </tr>
                  <tr className="hover:bg-slate-50/60 transition">
                    <td className="py-3 px-4 font-bold text-slate-900">Shopify 2.0 Storefront</td>
                    <td className="py-3 px-4 font-extrabold text-[#ff6b1e]">₹45,000 – ₹95,000</td>
                    <td className="py-3 px-4">3–5 Weeks</td>
                    <td className="py-3 px-4">Shopify Liquid / Storefront API</td>
                    <td className="py-3 px-4">D2C retail brands, fashion, cosmetics, electronics</td>
                  </tr>
                  <tr className="hover:bg-slate-50/60 transition">
                    <td className="py-3 px-4 font-bold text-slate-900">Custom E-Commerce / Multi-Vendor</td>
                    <td className="py-3 px-4 font-extrabold text-[#ff6b1e]">₹85,000 – ₹2,20,000</td>
                    <td className="py-3 px-4">5–8 Weeks</td>
                    <td className="py-3 px-4">Next.js + Node.js + PostgreSQL</td>
                    <td className="py-3 px-4">Complex catalogs, wholesale B2B, vendor marketplaces</td>
                  </tr>
                  <tr className="hover:bg-slate-50/60 transition">
                    <td className="py-3 px-4 font-bold text-slate-900">Full-Stack SaaS / Web App</td>
                    <td className="py-3 px-4 font-extrabold text-[#ff6b1e]">₹1,20,000 – ₹3,50,000+</td>
                    <td className="py-3 px-4">6–12 Weeks</td>
                    <td className="py-3 px-4">Next.js 16 + React 19 + AWS/Vercel</td>
                    <td className="py-3 px-4">Tech startups, client portals, internal workflow SaaS</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Interactive Pricing Estimator Widget */}
            <div className="mt-14">
              <CostCalculator />
            </div>
          </div>
        </section>

        {/* Section 2: Primary Cost Factors */}
        <section className="py-12 sm:py-16 bg-slate-50/60 border-y border-slate-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#ff6b1e]">
                In-Depth Analysis
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900">
                The 5 Factors That Dictate Website Development Pricing in India
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                When you request proposals from different web development companies in India, you will frequently see quotes differing by 300% or more. Here is the objective technical rationale behind those price disparities.
              </p>
            </div>

            <div className="mt-10 space-y-6">
              <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-xs">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#fff5ee] text-xs font-bold text-[#ff6b1e]">
                    1
                  </span>
                  <span>Technology Stack Choice: Template CMS vs Custom Next.js</span>
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Installing a pre-made WordPress theme or low-end Shopify template requires minimal technical skill; a junior technician can install it in an afternoon. This is why agencies can offer sites for ₹10,000 to ₹15,000. However, these templates come packed with 40,000 lines of unneeded CSS, bloated JavaScript that crashes mobile PageSpeed scores, and rigid layout locks. Custom Next.js web applications, on the other hand, require senior full-stack TypeScript engineers who architect server-rendered components, clean CSS, and optimized database queries from scratch.
                </p>
              </div>

              <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-xs">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#fff5ee] text-xs font-bold text-[#ff6b1e]">
                    2
                  </span>
                  <span>Custom UI/UX Wireframing vs Cloned Layouts</span>
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  A high-converting website begins in Figma, where human-centric user journeys, visual hierarchy, mobile thumb zones, and conversion funnels are systematically prototyped. Budget agencies skip this stage entirely, dropping your logo onto an existing generic template used by thousands of other businesses. Custom UI/UX adds ₹15,000 to ₹35,000 to a project but typically doubles the resulting inquiry conversion rate.
                </p>
              </div>

              <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-xs">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#fff5ee] text-xs font-bold text-[#ff6b1e]">
                    3
                  </span>
                  <span>Technical SEO &amp; Schema.org Structured Data</span>
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Proper technical SEO is built into the codebase, not installed via a plugin. It includes semantic HTML5 tags (&lt;header&gt;, &lt;main&gt;, &lt;article&gt;), canonical tag enforcement, dynamic Open Graph banners, automated XML sitemap feeds, and Schema.org JSON-LD markup (LocalBusiness, Service, FAQPage, Product). Senior technical SEO engineering adds foundational value that drives organic Google traffic for years without recurring ad spend.
                </p>
              </div>

              <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-xs">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#fff5ee] text-xs font-bold text-[#ff6b1e]">
                    4
                  </span>
                  <span>Indian E-Commerce &amp; Payment Gateway Integrations</span>
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Integrating standard PayPal or Stripe checkout is straightforward. Integrating Indian commerce requires custom logic: Razorpay/Cashfree with instant UPI intent flows, Cash on Delivery OTP verification via SMS/WhatsApp, state-specific GST invoicing with HSN splits, and automated Shiprocket/Delhivery AWB label generation. These custom connectors require experienced backend developers.
                </p>
              </div>

              <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-xs">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#fff5ee] text-xs font-bold text-[#ff6b1e]">
                    5
                  </span>
                  <span>Post-Launch QA, Warranty &amp; Code Ownership</span>
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Many budget developers abandon clients the moment final payment is made, leaving them stranded when PHP updates or security vulnerabilities break the site. Reputable firms include a 30 to 90-day post-launch warranty, automated cloud snapshot backups, and 100% intellectual property transfer to your private GitHub repository.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Hidden Costs to Avoid */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#ff6b1e]">
                Buyer Protection
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900">
                Hidden Costs Frequently Concealed by Low-Bid Developers
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                When evaluating proposals in India, always verify that your quote covers these critical infrastructure items so you don&apos;t face surprise invoices after development begins.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-slate-200 p-5 bg-slate-50/50">
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>Holding Domain and Hosting Hostage</span>
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Some developers register your domain name or server account under their own personal email. When you decide to change providers, they demand exorbitant transfer fees. Always insist that domains and servers be purchased under your company credentials.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-5 bg-slate-50/50">
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>Pirated (Nulled) Themes &amp; Plugins</span>
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Extremely low bids often rely on pirated commercial plugins downloaded from file-sharing forums. These files frequently carry backdoor malware, crypto miners, and spam injection scripts that trigger instant Google Safe Browsing blacklisting.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-5 bg-slate-50/50">
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>Unlicensed Stock Media &amp; Fonts</span>
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Stealing images from Google Image search exposes your business to copyright infringement notices and legal penalties. Ensure your agreement states that all photography, icons, and fonts are legally licensed or custom created.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-5 bg-slate-50/50">
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>Extra Charges for Mobile Responsiveness</span>
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Some agencies quote a low fee for desktop design, then bill additional charges when you discover the website looks broken on mobile phones. Mobile responsiveness must be an uncompromised default in every modern contract.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: FAQs */}
        <section className="py-12 sm:py-16 bg-slate-50/60 border-t border-slate-100" id="faqs">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-[#ff6b1e]">
                Frequently Asked Questions
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900">
                Common Cost &amp; Pricing Inquiries
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-600">
                Honest answers to help you budget accurately for your digital presence.
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
        <section className="py-10 bg-white border-t border-slate-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 text-center">
              Compare Services &amp; Technology Options
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm">
              <Link
                href="/services/custom-web-application-development"
                className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 hover:border-[#ff6b1e] hover:text-[#ff6b1e] transition shadow-2xs"
              >
                Custom Web Applications →
              </Link>
              <Link
                href="/services/shopify-development-company"
                className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 hover:border-[#ff6b1e] hover:text-[#ff6b1e] transition shadow-2xs"
              >
                Shopify Development →
              </Link>
              <Link
                href="/services/nextjs-development-company"
                className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 hover:border-[#ff6b1e] hover:text-[#ff6b1e] transition shadow-2xs"
              >
                Next.js Engineering →
              </Link>
              <Link
                href="/website-development-company-in-india"
                className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 hover:border-[#ff6b1e] hover:text-[#ff6b1e] transition shadow-2xs"
              >
                All-India Delivery Hub →
              </Link>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-slate-50 py-12 sm:py-16 text-center">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-12 shadow-sm">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
                Want a Transparent, Fixed-Price Proposal for Your Website?
              </h2>
              <p className="mt-3 text-slate-600 max-w-2xl mx-auto text-xs sm:text-base leading-relaxed">
                Send us your project specifications. Our senior architects in Noida evaluate your requirements and provide an itemized scope with fixed milestones and zero hidden surprises.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <EnquiryButton
                  service="Fixed-Price Scope Request"
                  className="px-8 py-3.5 text-sm"
                >
                  <span>Request Itemized Proposal</span>
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
