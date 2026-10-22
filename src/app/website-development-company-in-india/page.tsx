import type { Metadata } from "next";
import Link from "next/link";
import {
  Code2,
  ShieldCheck,
  Zap,
  ArrowRight,
  CheckCircle2,
  PhoneCall,
  Sparkles,
  MapPin,
  Building2,
  MessageSquare,
  Video,
  Layers,
  ShoppingBag,
  Cpu,
  Globe2,
  DollarSign,
  Clock,
  Laptop,
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import JsonLd from "@/components/JsonLd";
import { siteConfig, ncrCities, topRemoteCities, toSlug } from "@/lib/seo-data";
import { EnquiryButton } from "@/components/EnquiryModal";

export const metadata: Metadata = {
  title: "Website Development Company in India | Remote Web & Shopify Experts",
  description:
    "Leading website development company in India. Based in Noida, delivering custom Next.js web applications and Shopify stores remotely across all Indian states.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/website-development-company-in-india`,
  },
  openGraph: {
    title: "Website Development Company in India | Remote Web & Shopify Experts",
    description:
      "Enterprise website development across India. Engineered at our Noida HQ with transparent remote sprints, weekly video demos, and fixed-price proposals.",
    url: `${siteConfig.siteUrl}/website-development-company-in-india`,
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: `${siteConfig.siteUrl}/images/webdev-banner.png`,
        width: 1200,
        height: 630,
        alt: "Website Development Company in India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Development Company in India | Remote Web & Shopify Experts",
    description:
      "Pan-India web development firm headquartered in Noida. We build fast Next.js applications and high-converting Shopify stores for businesses nationwide.",
    images: [`${siteConfig.siteUrl}/images/webdev-banner.png`],
  },
};

export default function IndiaHubPage() {
  const pageUrl = `${siteConfig.siteUrl}/website-development-company-in-india`;

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Website Development Company in India", url: "/website-development-company-in-india" },
  ];

  const faqs = [
    {
      question: "How does remote website development work with clients outside Noida?",
      answer:
        "Our remote delivery model is structured for complete clarity and accountability. We initiate every project with a comprehensive kickoff call over Google Meet or Zoom to review your exact business goals, user personas, and technical specifications. We establish a dedicated private WhatsApp group for daily correspondence, share interactive Figma prototypes for design feedback, and host private password-protected staging URLs where you can test live software features throughout development sprints.",
    },
    {
      question: "Where is your team physically located?",
      answer:
        "Our single physical development office is located at 8th Floor, ITHUM Tower, B-806, Block A, Industrial Area, Sector 62, Noida, Uttar Pradesh 201309. We do not operate secondary branch offices in other cities. Every line of code, design asset, and SEO structure is produced by our in-house engineering team at Noida HQ.",
    },
    {
      question: "Can on-site visits be arranged for clients located in other Indian cities?",
      answer:
        "Yes. While 95% of our client engagements run efficiently through remote collaboration tools, our senior solutions architects and project leads can schedule on-site visits for enterprise architectural planning, kickoff workshops, or executive sign-offs upon mutual agreement.",
    },
    {
      question: "What are the primary factors influencing website development costs in India?",
      answer:
        "Key pricing factors include the project scope (number of unique templates and page layouts), underlying architecture (pre-built CMS like Shopify or WordPress vs custom full-stack Next.js applications), database complexity, third-party API integrations (payment gateways, ERPs, CRMs, logistics trackers), and post-launch maintenance requirements.",
    },
    {
      question: "What is your typical project delivery timeline?",
      answer:
        "Standard corporate websites are typically delivered within 2 to 3 weeks from wireframe sign-off. High-volume Shopify stores and multi-vendor e-commerce platforms take approximately 4 to 6 weeks. Complex custom web applications, SaaS dashboards, and workflow portals generally require 6 to 10 weeks, organized into transparent two-week agile development sprints.",
    },
    {
      question: "Do clients own the source code and intellectual property upon completion?",
      answer:
        "Yes, 100%. Upon project completion and final milestone clearance, we transfer full ownership of the source code repository, Git commits, Figma visual assets, database schemas, and hosting configurations to your team. There are no proprietary software lock-ins or hidden licensing fees.",
    },
  ];

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: "Website Development Company in India | Remote Web & Shopify Experts",
    description:
      "Comprehensive guide to remote website development in India. Learn about our delivery methodology, timelines, pricing factors, tech stack, and nationwide services.",
    isPartOf: {
      "@id": `${siteConfig.siteUrl}/#website`,
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
      <JsonLd data={[webPageSchema, faqSchema]} />

      <article className="min-h-screen bg-white">
        {/* Hero Section */}
        <header className="relative overflow-hidden pt-8 pb-16 sm:pt-14 sm:pb-24 bg-gradient-to-b from-orange-50/40 via-white to-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center mb-6">
              <Breadcrumb items={breadcrumbs} />
            </div>

            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fff5ee] border border-[#ff6b1e]/25 text-[#ff6b1e] text-xs font-semibold mb-6 shadow-2xs">
                <Globe2 className="w-3.5 h-3.5 text-[#ff6b1e]" />
                <span>Noida HQ • Seamless Remote Delivery Nationwide</span>
              </div>

              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl sm:leading-tight">
                Website Development Company in{" "}
                <span className="text-[#ff6b1e]">India</span>
              </h1>

              <p className="mt-6 text-base sm:text-xl text-slate-600 leading-relaxed font-normal">
                Based in Sector 62, Noida, we engineer high-performance web applications, custom Shopify stores, and enterprise digital platforms for forward-thinking businesses across every state in India through disciplined, remote-first collaboration.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <EnquiryButton
                  service="All-India Web Development"
                  className="px-8 py-3.5 text-sm font-bold"
                >
                  <span>Request Project Scope</span>
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

              {/* Honest Notice */}
              <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50/80 p-4 text-xs text-slate-600 max-w-2xl mx-auto flex items-center justify-center gap-2">
                <Building2 className="w-4 h-4 text-[#ff6b1e] shrink-0" />
                <span>
                  <strong>Sole Physical Location:</strong> Sector 62, Noida, UP. We maintain NO branch offices in other cities and serve all national clients via dedicated remote workflows.
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Section 1: How Remote Delivery Works */}
        <section className="py-12 sm:py-16 bg-white border-t border-slate-100" id="remote-workflow">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#ff6b1e]">
                Transparent Collaboration
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900">
                How Our Remote Project Delivery Works Across India
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                Over the past decade, high-speed fiber internet, collaborative UI/UX tools, and distributed cloud hosting have transformed software development. You no longer need an agency located on your physical street corner to build an extraordinary web presence. We have refined a predictable 5-pillar remote delivery model that keeps you informed at every phase without geographic friction.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-[#ff6b1e]/40 transition">
                <div className="h-11 w-11 rounded-xl bg-[#fff5ee] text-[#ff6b1e] flex items-center justify-center mb-4">
                  <Video className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  Weekly Video Sprint Reviews
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Every 7 days, we host a 30-minute Google Meet demo walkthrough showcasing actual progress on staging servers, gathering feedback and approving the upcoming sprint backlog.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-[#ff6b1e]/40 transition">
                <div className="h-11 w-11 rounded-xl bg-[#fff5ee] text-[#ff6b1e] flex items-center justify-center mb-4">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  Direct WhatsApp Coordination
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  We assign a dedicated project manager and lead engineer to a private WhatsApp group for quick clarifications, screenshot reviews, and same-day response times.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-[#ff6b1e]/40 transition">
                <div className="h-11 w-11 rounded-xl bg-[#fff5ee] text-[#ff6b1e] flex items-center justify-center mb-4">
                  <Laptop className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  Interactive Figma Prototypes
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Review visual page layouts, color tokens, and responsive mobile behaviors in interactive Figma files with pinpoint commenting before any production code is written.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-[#ff6b1e]/40 transition">
                <div className="h-11 w-11 rounded-xl bg-[#fff5ee] text-[#ff6b1e] flex items-center justify-center mb-4">
                  <Globe2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  Live Staging Environments
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Test interactive features, checkout funnels, contact forms, and mobile performance on private, password-protected staging domains before pushing live.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Process & Timelines */}
        <section className="py-12 sm:py-16 bg-slate-50/60 border-y border-slate-100" id="delivery-process">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#ff6b1e]">
                Phase by Phase
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900">
                End-to-End Engineering Methodology
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                Every commercial web application engineered at our Noida center moves through a structured, multi-phase lifecycle to ensure technical excellence, zero missed requirements, and on-time launches.
              </p>
            </div>

            <div className="mt-10 space-y-4">
              <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#fff5ee] text-base font-black text-[#ff6b1e]">
                    01
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      Discovery &amp; Architectural Scoping (Week 1)
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      We audit your current digital footprint, analyze user flows, study competitor benchmarks across your sector, and create an itemized technical scope document.
                    </p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg shrink-0">
                  Deliverable: Architecture Document
                </span>
              </div>

              <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#fff5ee] text-base font-black text-[#ff6b1e]">
                    02
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      UX Wireframing &amp; Design System (Weeks 1–2)
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      Our design team crafts responsive wireframes, typographic hierarchy, color palettes, and component states in Figma. You provide feedback directly in Figma.
                    </p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg shrink-0">
                  Deliverable: Figma Visual Sign-Off
                </span>
              </div>

              <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#fff5ee] text-base font-black text-[#ff6b1e]">
                    03
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      Clean Frontend &amp; Backend Engineering (Weeks 2–5)
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      Our engineers write type-safe TypeScript, Next.js Server Components, and modular Tailwind CSS. Backends, databases, and payment APIs are integrated with strict validation.
                    </p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg shrink-0">
                  Deliverable: Live Staging Build
                </span>
              </div>

              <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#fff5ee] text-base font-black text-[#ff6b1e]">
                    04
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      Technical SEO, Core Web Vitals &amp; Cross-Device QA (Week 5–6)
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      We execute cross-browser audits, mobile viewport stress tests, Schema.org JSON-LD structured data validation, and Core Web Vitals profiling.
                    </p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg shrink-0">
                  Deliverable: QA &amp; Audit Report
                </span>
              </div>

              <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#fff5ee] text-base font-black text-[#ff6b1e]">
                    05
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      Live DNS Cutover &amp; Post-Launch Handover (Week 6+)
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      We handle production deployment on Vercel or AWS, configure custom domain SSL, push XML sitemaps to Google Search Console, and deliver complete IP handover.
                    </p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg shrink-0">
                  Deliverable: Live Site &amp; Full IP
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Pricing Factors in India */}
        <section className="py-12 sm:py-16 bg-white" id="pricing-factors">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#ff6b1e]">
                  Commercial Clarity
                </span>
                <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                  What Really Affects Website Development Costs in India?
                </h2>
                <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                  Many agencies in India offer opaque pricing or entice clients with unrealistically cheap initial quotes only to bill heavy hidden charges later. We operate on transparent, milestone-based fixed scope agreements. Understanding the key cost drivers helps you make informed procurement choices.
                </p>

                <div className="mt-6 space-y-3 text-xs sm:text-sm text-slate-600">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50">
                    <CheckCircle2 className="w-4 h-4 text-[#ff6b1e] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">Technology Architecture:</strong> Pre-built WordPress templates have lower upfront costs, while bespoke Next.js web applications and headless Shopify stores require specialized full-stack engineers.
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50">
                    <CheckCircle2 className="w-4 h-4 text-[#ff6b1e] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">Custom Integrations:</strong> Integrating custom ERP systems, complex Indian payment gateways, automated logistics trackers (Shiprocket, Delhivery), or CRM webhooks increases backend engineering time.
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50">
                    <CheckCircle2 className="w-4 h-4 text-[#ff6b1e] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">Content &amp; Technical SEO:</strong> Crafting original human-written copy, localized schema markup, dynamic Open Graph banners, and comprehensive canonical hierarchies requires senior SEO strategy.
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <Link
                    href="/website-development-cost-in-india"
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#ff6b1e] hover:underline"
                  >
                    <span>Read our complete 2026 Website Cost in India Guide</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-[#fff5ee] via-white to-orange-50/40 p-6 sm:p-8">
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-[#ff6b1e]" />
                  <span>Indicative Investment Ranges (2026)</span>
                </h3>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-2xs">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-slate-900">Standard Business Website</span>
                      <span className="font-extrabold text-[#ff6b1e]">₹20,000 – ₹45,000</span>
                    </div>
                    <p className="text-slate-500 mt-1 text-[11px] sm:text-xs">
                      5–10 pages, mobile-first design, contact forms, technical SEO, fast CDN setup.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-2xs">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-slate-900">Shopify &amp; E-Commerce Portal</span>
                      <span className="font-extrabold text-[#ff6b1e]">₹45,000 – ₹1,20,000</span>
                    </div>
                    <p className="text-slate-500 mt-1 text-[11px] sm:text-xs">
                      Custom theme, payment gateway, inventory management, shipping automation.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-2xs">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-slate-900">Custom Next.js Web Application</span>
                      <span className="font-extrabold text-[#ff6b1e]">₹80,000 – ₹2,50,000+</span>
                    </div>
                    <p className="text-slate-500 mt-1 text-[11px] sm:text-xs">
                      Bespoke React 19 architecture, database integrations, authentication, admin portals.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-orange-100">
                  <EnquiryButton className="w-full justify-center text-xs sm:text-sm">
                    <span>Request Itemized Fixed-Price Proposal</span>
                    <ArrowRight className="w-4 h-4" />
                  </EnquiryButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: National Service Offerings */}
        <section className="py-12 sm:py-16 bg-slate-50/60 border-y border-slate-100" id="services">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-[#ff6b1e]">
                National Capabilities
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900">
                Explore Our Core Development Services
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600">
                Primary specialized services engineered for ambitious businesses across all Indian states.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-[#ff6b1e]/50 transition flex flex-col justify-between">
                <div>
                  <div className="h-10 w-10 rounded-xl bg-[#fff5ee] text-[#ff6b1e] flex items-center justify-center mb-3">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    Custom Web Application Development
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Full-stack web applications with Next.js App Router, PostgreSQL, Prisma, and REST/GraphQL APIs.
                  </p>
                </div>
                <Link
                  href="/services/custom-web-application-development"
                  className="mt-4 pt-3 border-t border-slate-100 text-xs font-bold text-[#ff6b1e] hover:underline flex items-center gap-1"
                >
                  <span>Explore Custom Web Apps</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-[#ff6b1e]/50 transition flex flex-col justify-between">
                <div>
                  <div className="h-10 w-10 rounded-xl bg-[#fff5ee] text-[#ff6b1e] flex items-center justify-center mb-3">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    Shopify Development Company
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Custom Shopify 2.0 theme design, private app development, and headless storefronts for Indian D2C brands.
                  </p>
                </div>
                <Link
                  href="/services/shopify-development-company"
                  className="mt-4 pt-3 border-t border-slate-100 text-xs font-bold text-[#ff6b1e] hover:underline flex items-center gap-1"
                >
                  <span>Explore Shopify Solutions</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-[#ff6b1e]/50 transition flex flex-col justify-between">
                <div>
                  <div className="h-10 w-10 rounded-xl bg-[#fff5ee] text-[#ff6b1e] flex items-center justify-center mb-3">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    Next.js Web Development
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Modern React engineering leveraging Server-Side Rendering, edge caching, and Core Web Vitals optimization.
                  </p>
                </div>
                <Link
                  href="/services/nextjs-development-company"
                  className="mt-4 pt-3 border-t border-slate-100 text-xs font-bold text-[#ff6b1e] hover:underline flex items-center gap-1"
                >
                  <span>Explore Next.js Services</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-[#ff6b1e]/50 transition flex flex-col justify-between">
                <div>
                  <div className="h-10 w-10 rounded-xl bg-[#fff5ee] text-[#ff6b1e] flex items-center justify-center mb-3">
                    <Layers className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    E-Commerce Website Development
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Digital shopping carts, catalog navigation, and automated checkout funnels built for high transaction volume.
                  </p>
                </div>
                <Link
                  href="/services/ecommerce-website-development"
                  className="mt-4 pt-3 border-t border-slate-100 text-xs font-bold text-[#ff6b1e] hover:underline flex items-center gap-1"
                >
                  <span>Explore E-Commerce</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-[#ff6b1e]/50 transition flex flex-col justify-between">
                <div>
                  <div className="h-10 w-10 rounded-xl bg-[#fff5ee] text-[#ff6b1e] flex items-center justify-center mb-3">
                    <Globe2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    WordPress Website Development
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Clean, bespoke WordPress themes with custom Gutenberg blocks, WooCommerce, and robust security protections.
                  </p>
                </div>
                <Link
                  href="/services/wordpress-website-development"
                  className="mt-4 pt-3 border-t border-slate-100 text-xs font-bold text-[#ff6b1e] hover:underline flex items-center gap-1"
                >
                  <span>Explore WordPress</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-[#ff6b1e]/50 transition flex flex-col justify-between">
                <div>
                  <div className="h-10 w-10 rounded-xl bg-[#fff5ee] text-[#ff6b1e] flex items-center justify-center mb-3">
                    <DollarSign className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    Website Development Cost Guide
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Detailed pricing factors, hourly vs fixed rates, and technology comparisons for Indian business founders.
                  </p>
                </div>
                <Link
                  href="/website-development-cost-in-india"
                  className="mt-4 pt-3 border-t border-slate-100 text-xs font-bold text-[#ff6b1e] hover:underline flex items-center gap-1"
                >
                  <span>View Pricing Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Top City Hubs Across India */}
        <section className="py-12 sm:py-16 bg-white" id="city-hubs">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#ff6b1e]">
                Pan-India Reach
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900">
                Top Commercial Hubs We Serve Remotely Across India
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                While engineered exclusively from our Noida Sector 62 development center, we actively deliver bespoke web platforms to clients in India&apos;s leading commercial and industrial capitals.
              </p>
            </div>

            {/* NCR Hubs */}
            <div className="mt-8">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#ff6b1e]" />
                <span>Delhi NCR Local Corridor (Direct On-Site Availability)</span>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                {ncrCities.map((loc) => (
                  <Link
                    key={loc.city}
                    href={`/${toSlug(loc.city)}`}
                    className="p-3.5 rounded-xl border border-slate-200 bg-white hover:border-[#ff6b1e] hover:text-[#ff6b1e] transition shadow-2xs text-xs font-medium text-slate-700"
                  >
                    <span className="font-bold text-slate-900 block">{loc.city}</span>
                    <span className="text-[10px] text-slate-500 block mt-0.5">{loc.state}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Top 10 Remote Hubs */}
            <div className="mt-8">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <Globe2 className="w-3.5 h-3.5 text-[#ff6b1e]" />
                <span>Top 10 National Metro Hubs (Remote Project Delivery)</span>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                {topRemoteCities.map((loc) => (
                  <Link
                    key={loc.city}
                    href={`/${toSlug(loc.city)}`}
                    className="p-3.5 rounded-xl border border-slate-200 bg-white hover:border-[#ff6b1e] hover:text-[#ff6b1e] transition shadow-2xs text-xs font-medium text-slate-700"
                  >
                    <span className="font-bold text-slate-900 block">{loc.city}</span>
                    <span className="text-[10px] text-slate-500 block mt-0.5">{loc.industryFocus.split(",")[0]}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-6 text-center">
              <Link
                href="/areas-we-serve"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#ff6b1e] hover:underline"
              >
                <span>View Full State-Wise Breakdown of Areas We Serve</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Section 6: FAQs (Server-Rendered in HTML) */}
        <section className="py-12 sm:py-16 bg-slate-50/60 border-t border-slate-100" id="faqs">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-[#ff6b1e]">
                Common Queries
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900">
                Frequently Asked Questions — Web Development in India
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-600">
                Answers regarding remote delivery, communication, timelines, and technical standards.
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

        {/* Conversion CTA */}
        <section className="bg-white py-12 sm:py-16 text-center">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-slate-100 bg-[#fff5ee] p-8 sm:p-12 shadow-lg shadow-[#ff6b1e]/5">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
                Ready to Discuss Your Project Across India?
              </h2>
              <p className="mt-3 text-slate-600 max-w-2xl mx-auto text-xs sm:text-base leading-relaxed">
                Connect directly with our senior development engineers at our Noida headquarters. We provide a transparent technical breakdown, architecture roadmap, and fixed proposal.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <EnquiryButton
                  service="Pan-India Web Development"
                  className="px-8 py-3.5 text-sm"
                >
                  <span>Request Free Technical Proposal</span>
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
