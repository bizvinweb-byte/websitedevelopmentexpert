import type { Metadata } from "next";
import Link from "next/link";
import {
  Cpu,
  ArrowRight,
  CheckCircle2,
  PhoneCall,
  Sparkles,
  Code2,
  Layers,
  Zap,
  ShieldCheck,
  Server,
  Database,
  Globe2,
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/lib/seo-data";
import { EnquiryButton } from "@/components/EnquiryModal";

export const metadata: Metadata = {
  title: "Next.js Development Company in India | App Router Experts",
  description:
    "Leading Next.js development company in India. We engineer enterprise SSR, SSG, and App Router web applications optimized for speed and Google search ranking.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/services/nextjs-development-company`,
  },
  openGraph: {
    title: "Next.js Development Company in India | App Router Experts",
    description:
      "Enterprise Next.js web application development company based in Noida. We engineer high-speed Server Components, edge caching, and scalable React solutions.",
    url: `${siteConfig.siteUrl}/services/nextjs-development-company`,
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: `${siteConfig.siteUrl}/images/webdev-banner.png`,
        width: 1200,
        height: 630,
        alt: "Next.js Development Company in India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js Development Company in India | App Router Experts",
    description:
      "Full-stack Next.js 16 engineering, Server Components, and API edge caching for Indian startups and enterprises.",
    images: [`${siteConfig.siteUrl}/images/webdev-banner.png`],
  },
};

export default function NextjsServicePage() {
  const pageUrl = `${siteConfig.siteUrl}/services/nextjs-development-company`;

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/website-development-company-in-india#services" },
    { name: "Next.js Development Company", url: "/services/nextjs-development-company" },
  ];

  const faqs = [
    {
      question: "Why should enterprises choose Next.js over traditional single-page apps (SPAs)?",
      answer:
        "Traditional React single-page applications (built with Create React App or standard Vite bundles) render client-side, requiring the user's mobile device to download and parse large JavaScript bundles before any content is visible. This creates slow initial load times and makes search indexing difficult for Googlebot. Next.js solves this with Server-Side Rendering (SSR) and React Server Components (RSC), serving pre-rendered HTML instantaneously with zero client-side JavaScript overhead for static elements.",
    },
    {
      question: "How does Next.js App Router improve Google search indexing and Core Web Vitals?",
      answer:
        "Next.js App Router allows fine-grained streaming, selective hydration, and edge caching. Critical above-the-fold content renders on the server within milliseconds, ensuring low Largest Contentful Paint (LCP). Because page layouts are statically generated and streamed, Cumulative Layout Shift (CLS) is virtually zero. Dynamic metadata APIs and automated XML sitemaps ensure every page URL is indexed cleanly with exact canonical tags.",
    },
    {
      question: "Can Next.js handle high-traffic Indian e-commerce and SaaS platforms?",
      answer:
        "Yes, absolutely. By combining Incremental Static Regeneration (ISR) with edge middleware, Next.js can serve millions of page views per day with minimal database strain. High-traffic Indian platforms utilize Next.js for high-speed catalog browsing while delegating real-time transactions to isolated server actions or edge microservices.",
    },
    {
      question: "What is your typical technology stack when building a Next.js project?",
      answer:
        "Our standard production stack includes Next.js 16 with App Router, TypeScript for strict compile-time type safety, Tailwind CSS for zero-runtime CSS bloat, Prisma or Drizzle ORM for PostgreSQL databases, NextAuth or Supabase Auth for identity management, and deployment on Vercel or AWS edge infrastructure.",
    },
    {
      question: "Can you migrate our legacy WordPress or PHP website to Next.js?",
      answer:
        "Yes. We frequently execute modernization projects converting monolithic WordPress or legacy PHP sites into modern headless or standalone Next.js applications. You can retain your WordPress CMS for editorial drafting while serving the public frontend via Next.js, or migrate completely to a modern headless CMS like Strapi or Sanity with full 301 SEO redirect preservation.",
    },
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name: "Next.js Web Development Services",
    serviceType: "Full-Stack Web Engineering",
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
      "Enterprise Next.js development company engineering scalable React applications, App Router architectures, edge rendering, and technical SEO for Indian businesses.",
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
                <Cpu className="w-3.5 h-3.5 text-[#ff6b1e]" />
                <span>Next.js 16 App Router &amp; React 19 • Noida HQ Engineering</span>
              </div>

              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl sm:leading-tight">
                Next.js Development Company in{" "}
                <span className="text-[#ff6b1e]">India</span>
              </h1>

              <p className="mt-6 text-base sm:text-xl text-slate-600 leading-relaxed">
                We engineer scalable, enterprise-grade React applications powered by Next.js Server Components, edge streaming, and disciplined technical SEO. Serving startups and enterprises across India from our Noida Sector 62 technology center.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <EnquiryButton
                  service="Next.js Development"
                  className="px-8 py-3.5 text-sm font-bold"
                >
                  <span>Request Next.js Proposal</span>
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
                <span>Direct collaboration with senior engineers • Transparent Git repository access • Full IP ownership</span>
              </div>
            </div>
          </div>
        </header>

        {/* Section 1: Capabilities */}
        <section className="py-12 sm:py-16 bg-white border-t border-slate-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#ff6b1e]">
                Technical Superiority
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900">
                Why Next.js is the Modern Foundation for High-Growth Indian Web Apps
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                As internet consumption in India shifts overwhelmingly to mobile devices and varying cellular network qualities, web performance is no longer a vanity metric — it is the defining factor for user retention, conversion rates, and Google organic rankings. Next.js provides the architectural tools to deliver desktop-grade performance on mobile devices.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-[#ff6b1e]/50 transition">
                <div className="h-11 w-11 rounded-xl bg-[#fff5ee] text-[#ff6b1e] flex items-center justify-center mb-4">
                  <Server className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  React Server Components (RSC)
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Execute complex data fetching and component rendering on the server. Deliver zero-bundle-size React components to the user, minimizing JavaScript execution times on budget Android smartphones.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-[#ff6b1e]/50 transition">
                <div className="h-11 w-11 rounded-xl bg-[#fff5ee] text-[#ff6b1e] flex items-center justify-center mb-4">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  Sub-Second Time-to-First-Byte
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Leveraging edge runtime caching and geographical CDN nodes across India (Delhi, Mumbai, Chennai, Bengaluru) so pages load instantly regardless of geographic distance.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-[#ff6b1e]/50 transition">
                <div className="h-11 w-11 rounded-xl bg-[#fff5ee] text-[#ff6b1e] flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  Full TypeScript Type Safety
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Every interface, database query, API route handler, and React hook is strictly typed. This prevents regression bugs, simplifies refactoring, and ensures enterprise stability.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-[#ff6b1e]/50 transition">
                <div className="h-11 w-11 rounded-xl bg-[#fff5ee] text-[#ff6b1e] flex items-center justify-center mb-4">
                  <Database className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  Server Actions &amp; Zero API Boilerplate
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Mutate server data directly from React components with secure Server Actions, automated cache revalidation, and integrated CSRF protection without writing verbose REST boilerplate.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-[#ff6b1e]/50 transition">
                <div className="h-11 w-11 rounded-xl bg-[#fff5ee] text-[#ff6b1e] flex items-center justify-center mb-4">
                  <Globe2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  Dynamic SEO &amp; Automated Schema
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Generate programmatic metadata, Open Graph banners, and JSON-LD structured data on dynamic routes. Automatically output XML sitemaps and robots.txt straight from TypeScript.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-[#ff6b1e]/50 transition">
                <div className="h-11 w-11 rounded-xl bg-[#fff5ee] text-[#ff6b1e] flex items-center justify-center mb-4">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  Seamless Headless CMS Integration
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Connect your Next.js application to Strapi, Sanity, Contentful, or headless WordPress, giving non-technical marketing teams intuitive visual dashboards to publish content.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Pricing & Timelines */}
        <section className="py-12 sm:py-16 bg-slate-50/60 border-y border-slate-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#ff6b1e]">
                  Investment &amp; Sprints
                </span>
                <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                  Transparent Next.js Project Pricing in India
                </h2>
                <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                  Because Next.js applications range from lean marketing platforms to full-scale SaaS portals with thousands of concurrent users, we structure projects into transparent development sprints with clearly defined milestones and fixed proposals.
                </p>

                <div className="mt-6 space-y-3.5 text-xs sm:text-sm text-slate-600">
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                    <CheckCircle2 className="w-4 h-4 text-[#ff6b1e] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">Dedicated Sprint Leads:</strong> Direct technical communication with the lead software architect coding your project at our Noida headquarters.
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                    <CheckCircle2 className="w-4 h-4 text-[#ff6b1e] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">Milestone-Based Billing:</strong> Payments tied to concrete deliverables: Wireframe approval (30%), Staging build review (40%), and Final production deployment (30%).
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                    <CheckCircle2 className="w-4 h-4 text-[#ff6b1e] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">Full IP Handover:</strong> Direct transfer of GitHub repositories, Vercel/AWS cloud infrastructure, and environment variables with zero vendor lock-in.
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-4">
                  Indicative Next.js Investment Levels
                </h3>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-slate-900">Next.js Corporate Marketing Site</span>
                      <span className="font-bold text-[#ff6b1e]">₹40,000 – ₹85,000</span>
                    </div>
                    <p className="text-slate-500 mt-1 text-[11px] sm:text-xs">
                      10–15 pre-rendered pages, Tailwind styling, dynamic SEO tags, contact forms, 2–3 weeks timeline.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-slate-900">Next.js Web App / Client Portal</span>
                      <span className="font-bold text-[#ff6b1e]">₹85,000 – ₹1,80,000</span>
                    </div>
                    <p className="text-slate-500 mt-1 text-[11px] sm:text-xs">
                      User authentication, PostgreSQL database, custom dashboard, role permissions, 4–6 weeks timeline.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-slate-900">Enterprise SaaS / Marketplace</span>
                      <span className="font-bold text-[#ff6b1e]">₹1,80,000 – ₹3,50,000+</span>
                    </div>
                    <p className="text-slate-500 mt-1 text-[11px] sm:text-xs">
                      High-concurrency database queries, payment subscription funnels, multi-tenant logic, 6–10 weeks.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <EnquiryButton
                    service="Next.js Development"
                    className="w-full justify-center text-xs sm:text-sm"
                  >
                    <span>Request Next.js Technical Scope</span>
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
                Frequently Asked Questions — Next.js Development
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-600">
                Answers regarding our Next.js engineering architecture, migration, and performance standards.
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
              Related Web Development Capabilities
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm">
              <Link
                href="/services/custom-web-application-development"
                className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:border-[#ff6b1e] hover:text-[#ff6b1e] transition shadow-2xs"
              >
                Custom Web Applications →
              </Link>
              <Link
                href="/services/shopify-development-company"
                className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:border-[#ff6b1e] hover:text-[#ff6b1e] transition shadow-2xs"
              >
                Shopify Development →
              </Link>
              <Link
                href="/services/ecommerce-website-development"
                className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:border-[#ff6b1e] hover:text-[#ff6b1e] transition shadow-2xs"
              >
                E-Commerce Solutions →
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
                Ready to Build Your Application with Next.js?
              </h2>
              <p className="mt-3 text-slate-600 max-w-2xl mx-auto text-xs sm:text-base leading-relaxed">
                Schedule a consultation with our senior Next.js engineers at our Noida Sector 62 office. We provide an architectural roadmap, stack selection, and fixed-price proposal.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <EnquiryButton
                  service="Next.js Web Application"
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
