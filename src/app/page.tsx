import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  Code,
  Layout,
  Search,
  Zap,
  Building2,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ShoppingBag,
  Cpu,
  Layers,
  ShieldCheck,
  TrendingUp,
  Compass,
  Palette,
  Code2,
  Rocket,
  FileCheck2,
  Globe,
  PhoneCall,
  Gauge,
  Timer,
  MapPin,
} from "lucide-react";
import { siteConfig } from "@/lib/seo-data";
import { EnquiryButton } from "@/components/EnquiryModal";
import LatestTrendsSection from "@/components/LatestTrendsSection";
import TechStackSection from "@/components/TechStackSection";
import FaqSection from "@/components/FaqSection";
import { FAQ_DATA } from "@/lib/faq-data";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Website Development Company in Noida | India-Wide Web & Shopify Experts",
  description:
    "Noida-based website development company engineering high-performance Next.js, React, and Shopify websites for businesses across India. Get a free quote.",
  alternates: {
    canonical: siteConfig.siteUrl,
  },
  openGraph: {
    title: "Website Development Company in Noida | India-Wide Web & Shopify Experts",
    description:
      "Noida-based website development company engineering fast Next.js & Shopify websites for businesses across India. Get a free technical consultation.",
    url: siteConfig.siteUrl,
    type: "website",
    locale: "en_IN",
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
};

export default function Home() {
  const coreServices = [
    {
      icon: Code,
      title: "Custom Web Application Development",
      slug: "/services/custom-web-application-development",
      description:
        "High-performance, scalable web apps built with Next.js App Router, React 19, and TypeScript. Engineered for business reliability and rapid edge delivery.",
      features: ["Server-Side Rendering (SSR)", "API-First Architecture", "Strict TypeScript Typing"],
    },
    {
      icon: ShoppingBag,
      title: "Shopify & E-Commerce Development",
      slug: "/services/shopify-development-company",
      description:
        "Modern digital storefronts on Shopify, Shopify Plus, and custom carts with streamlined checkout flows, payment gateway integrations, and inventory syncing.",
      features: ["Shopify 2.0 Theme Engineering", "Liquid & Storefront API", "High-Conversion Checkout"],
    },
    {
      icon: Cpu,
      title: "Next.js Web Engineering",
      slug: "/services/nextjs-development-company",
      description:
        "Enterprise-grade React applications taking full advantage of Next.js Server Components, dynamic caching, and automated Core Web Vitals optimization.",
      features: ["Sub-second TTFB on Edge CDNs", "Server Components & Actions", "Automated Image Modernization"],
    },
    {
      icon: Layers,
      title: "E-Commerce Website Solutions",
      slug: "/services/ecommerce-website-development",
      description:
        "Custom commerce architectures and WooCommerce platforms tailored to direct-to-consumer (D2C) brands, distributors, and high-SKU catalogs.",
      features: ["Custom Shopping Carts", "Payment Gateway Webhooks", "Logistics & ERP Integrations"],
    },
    {
      icon: Globe,
      title: "WordPress Website Development",
      slug: "/services/wordpress-website-development",
      description:
        "Lightweight, secure WordPress and WooCommerce builds engineered without plugin bloat, complete with custom Gutenberg blocks and security hardening.",
      features: ["Custom Theme Coding", "Zero-Bloat Architecture", "Security & Speed Hardening"],
    },
    {
      icon: Layout,
      title: "Website Development Cost in India",
      slug: "/website-development-cost-in-india",
      description:
        "A transparent, comprehensive 2026 guide analyzing web design costs, hourly rates, scope factors, and hidden agency charges across Indian cities.",
      features: ["Pricing Breakdown by Project Type", "Next.js vs Shopify Cost Factors", "No Hidden Retainers"],
    },
  ];

  const processPhases = [
    {
      step: "01",
      icon: Search,
      title: "Discovery & Technical Scope",
      description:
        "In-depth consultation to map business objectives, user flows, competitive benchmarks, and technical architecture specifications before writing code.",
      deliverable: "Project Scope & Technical Roadmap",
    },
    {
      step: "02",
      icon: Compass,
      title: "Information Architecture & Wireframes",
      description:
        "Designing intuitive user journeys, clean content structures, and interactive wireframes that eliminate navigation friction and drive conversions.",
      deliverable: "UX Wireframes & Flow Architecture",
    },
    {
      step: "03",
      icon: Palette,
      title: "Modern UI/UX Design System",
      description:
        "Crafting bespoke visual components, responsive typography, cohesive design tokens, and engaging micro-interactions aligned with brand identity.",
      deliverable: "Interactive Figma Prototypes",
    },
    {
      step: "04",
      icon: Code2,
      title: "Next.js Production Coding",
      description:
        "Developing the approved design with clean TypeScript, Next.js App Router, and Tailwind CSS. Built with semantic HTML5 and Schema.org rich markup.",
      deliverable: "Production Next.js Codebase",
    },
    {
      step: "05",
      icon: Rocket,
      title: "Testing, Launch & Support",
      description:
        "Rigorous multi-device QA, Core Web Vitals optimization, Google Search Console sitemap push, followed by ongoing security updates and maintenance.",
      deliverable: "Live Deployment & Handover",
    },
  ];

  // Schema.org JSON-LD for Google SERP
  const homeJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${siteConfig.siteUrl}/#webpage`,
        url: siteConfig.siteUrl,
        name: "Website Development Company in Noida | India-Wide Web & Shopify Experts",
        isPartOf: {
          "@id": `${siteConfig.siteUrl}/#website`,
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          "@id": `${siteConfig.siteUrl}/#primaryimage`,
          url: `${siteConfig.siteUrl}/images/webdev-banner.png`,
          width: 1200,
          height: 630,
        },
        image: `${siteConfig.siteUrl}/images/webdev-banner.png`,
        description:
          "Noida-based website development company engineering high-performance Next.js, React, and Shopify websites for businesses across India. Get a free quote.",
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQ_DATA.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      {
        "@type": "ItemList",
        name: "Web Development Services",
        itemListElement: coreServices.map((service, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: service.title,
          url: `${siteConfig.siteUrl}${service.slug}`,
          description: service.description,
        })),
      },
    ],
  };

  return (
    <div className="bg-white">
      {/* Structural SEO JSON-LD */}
      <JsonLd data={homeJsonLd} />

      {/* Hero Section */}
      <section
        className="relative overflow-hidden bg-white pt-8 pb-12 sm:pt-16 sm:pb-20"
        aria-labelledby="hero-heading"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-[600px] h-[300px] bg-gradient-to-tr from-[#ff6b1e]/10 to-amber-200/20 blur-3xl rounded-full pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-[#ff6b1e]/20 bg-[#fff5ee] px-3.5 py-1 sm:px-4 sm:py-1.5 text-[11px] sm:text-xs font-semibold text-[#ff6b1e] shadow-2xs mb-4 sm:mb-6">
            <Building2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#ff6b1e]" />
            <span>Noida Sector 62 Headquarters • Serving Clients Across India</span>
          </div>

          <h1
            id="hero-heading"
            className="mx-auto max-w-4xl text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight sm:leading-tight"
          >
            Website Development Company in{" "}
            <span className="text-[#ff6b1e]">Noida</span> &amp; Across India
          </h1>

          <p className="mx-auto mt-4 sm:mt-6 max-w-3xl text-sm sm:text-lg text-slate-600 font-normal leading-relaxed">
            Headquartered at ITHUM Tower, Sector 62, Noida. A specialized venture of Brandmingo engineering high-speed Next.js web applications, high-converting Shopify storefronts, and custom enterprise websites for ambitious businesses across Delhi NCR and nationwide.
          </p>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-sm sm:max-w-none mx-auto">
            <EnquiryButton className="w-full sm:w-auto px-6 py-3.5 sm:px-8 sm:py-4 text-xs sm:text-sm font-bold justify-center shadow-md sm:shadow-lg shadow-[#ff6b1e]/30 hover:scale-102 active:scale-95 transition-all">
              <span>Start Your Project</span>
              <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </EnquiryButton>
            <Link
              href="/website-development-company-in-india"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 sm:px-8 sm:py-4 text-xs sm:text-sm font-bold text-slate-700 hover:border-[#ff6b1e] hover:text-[#ff6b1e] transition-all shadow-2xs"
            >
              <span>Explore India-Wide Hub</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Verified Engineering Benchmarks */}
      <section
        className="relative -mt-4 sm:-mt-8 z-20 mx-auto max-w-6xl px-3 sm:px-6"
        aria-label="Verified Engineering Benchmarks"
      >
        <div className="rounded-xl sm:rounded-2xl border border-slate-200/80 bg-white/95 backdrop-blur-md shadow-md sm:shadow-lg shadow-slate-900/5 overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            {/* Metric 1 */}
            <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 hover:bg-slate-50/60 transition">
              <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-[#fff5ee] text-[#ff6b1e]">
                <Gauge className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </div>
              <div className="min-w-0">
                <span className="text-sm sm:text-base font-bold text-slate-900 block leading-tight">
                  Core Web Vitals
                </span>
                <p className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5 truncate">
                  Engineered for Fast LCP &amp; Zero CLS
                </p>
              </div>
            </div>

            {/* Metric 2 */}
            <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 hover:bg-slate-50/60 transition">
              <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-[#fff5ee] text-[#ff6b1e]">
                <Code2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </div>
              <div className="min-w-0">
                <span className="text-sm sm:text-base font-bold text-slate-900 block leading-tight">
                  Next.js App Router
                </span>
                <p className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5 truncate">
                  Server-Side Rendered (SSR)
                </p>
              </div>
            </div>

            {/* Metric 3 */}
            <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 hover:bg-slate-50/60 transition">
              <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-[#fff5ee] text-[#ff6b1e]">
                <Search className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </div>
              <div className="min-w-0">
                <span className="text-sm sm:text-base font-bold text-slate-900 block leading-tight">
                  Technical SEO
                </span>
                <p className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5 truncate">
                  JSON-LD &amp; Semantic HTML5
                </p>
              </div>
            </div>

            {/* Metric 4 */}
            <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 hover:bg-slate-50/60 transition">
              <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-[#fff5ee] text-[#ff6b1e]">
                <Building2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </div>
              <div className="min-w-0">
                <span className="text-sm sm:text-base font-bold text-slate-900 block leading-tight">
                  Noida Sector 62
                </span>
                <p className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5 truncate">
                  Pan-India Remote Delivery
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Honest Client Work Strip */}
      <section
        className="border-y border-slate-100 bg-slate-50/60 py-8 my-10"
        aria-label="Client Engagement Standards"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
            Custom Web Engineering Across Indian Industries
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm font-semibold text-slate-600">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#ff6b1e]" />
              D2C &amp; E-Commerce Brands
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#ff6b1e]" />
              Fintech &amp; B2B SaaS
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#ff6b1e]" />
              Healthcare &amp; Diagnostics
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#ff6b1e]" />
              Manufacturing &amp; Export
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#ff6b1e]" />
              Education &amp; Corporate Portals
            </span>
          </div>
          <p className="text-[11px] text-slate-400 mt-3">
            [ADD REAL CLIENT LOGOS &amp; VERIFIED REVIEWS IN PRODUCTION DEPLOYMENT]
          </p>
        </div>
      </section>

      {/* Why Businesses Choose Us */}
      <section
        className="py-8 sm:py-16 bg-white overflow-hidden"
        aria-labelledby="why-need-website-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 lg:gap-14 items-center">
            {/* Visual Column */}
            <div className="relative w-full order-1">
              <div className="relative h-[240px] sm:h-[420px] lg:h-[480px] w-full overflow-hidden rounded-2xl sm:rounded-3xl shadow-md sm:shadow-xl border border-slate-200/90 group">
                <Image
                  src="/images/why-website.jpg"
                  alt="Web development engineers and UI designers collaborating on web applications"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Badge */}
              <div className="absolute bottom-3 right-3 sm:-bottom-5 sm:right-8 bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg border border-slate-100 flex items-center gap-3 z-10">
                <div className="flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-lg sm:rounded-xl bg-[#fff5ee] text-[#ff6b1e]">
                  <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-extrabold text-slate-900">
                    Engineered for Conversions
                  </p>
                  <p className="text-[10px] sm:text-xs text-slate-500">
                    Fast Loading &amp; Clear CTA Funnels
                  </p>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="w-full order-2">
              <div className="rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 p-5 sm:p-10 shadow-sm sm:shadow-xl shadow-slate-900/5">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-[#fff5ee] border border-[#ff6b1e]/25 px-3 py-1 text-[11px] sm:text-xs font-bold text-[#ff6b1e] mb-3 shadow-2xs">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Essential Digital Foundation</span>
                </div>

                <h2
                  id="why-need-website-heading"
                  className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight"
                >
                  Why Modern Businesses Need Fast, Well-Architected Websites
                </h2>

                <p className="mt-3 text-xs sm:text-base text-slate-600 leading-relaxed">
                  In today&apos;s digital market, your website is your company&apos;s primary commercial asset. Slow load times or outdated designs lead high-intent buyers to competitors. We build fast, responsive websites with clear messaging and clean code.
                </p>

                <div className="mt-5 space-y-3">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50/70 border border-slate-100">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#fff5ee] text-[#ff6b1e] mt-0.5">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                        Credibility &amp; Professional Brand Trust
                      </h3>
                      <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5 leading-relaxed">
                        Prospective clients form an immediate opinion of your business based on page responsiveness, visual clarity, and mobile usability.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50/70 border border-slate-100">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#fff5ee] text-[#ff6b1e] mt-0.5">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                        Continuous Lead Generation &amp; Inbound Inquiries
                      </h3>
                      <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5 leading-relaxed">
                        Built with targeted conversion paths and optimized mobile forms, your site captures client inquiries 24/7.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50/70 border border-slate-100">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#fff5ee] text-[#ff6b1e] mt-0.5">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                        Search Engine Discoverability
                      </h3>
                      <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5 leading-relaxed">
                        Semantic HTML5, automated XML sitemaps, and Schema.org structured data ensure search engines easily index your pages.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <EnquiryButton className="w-full sm:w-auto px-6 py-3 text-xs sm:text-sm justify-center">
                    <span>Discuss Your Web Project</span>
                    <ArrowRight className="h-4 w-4" />
                  </EnquiryButton>
                  <Link
                    href="/about"
                    className="inline-flex items-center justify-center text-xs font-semibold text-slate-600 hover:text-[#ff6b1e] transition-colors py-2"
                  >
                    Learn about Brandmingo venture →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Services Section */}
      <section
        className="py-10 sm:py-16 bg-white"
        id="services"
        aria-labelledby="services-hub-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-[#ff6b1e]">
              Core Capabilities
            </span>
            <h2
              id="services-hub-heading"
              className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900"
            >
              Enterprise-Grade Web Engineering Solutions
            </h2>
            <p className="mt-2.5 sm:mt-3 text-xs sm:text-base text-slate-600">
              End-to-end web design and development capabilities built on modern frameworks for performance, scalability, and user conversion.
            </p>
          </div>

          <div className="mt-8 sm:mt-12 grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {coreServices.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 sm:p-7 shadow-xs hover:shadow-xl hover:border-[#ff6b1e]/50 transition-all duration-300 group"
                >
                  <div>
                    <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-[#fff5ee] text-[#ff6b1e] group-hover:bg-[#ff6b1e] group-hover:text-white transition-colors mb-4 sm:mb-5">
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#ff6b1e] transition-colors">
                      <Link href={service.slug}>{service.title}</Link>
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="mt-4 space-y-2 text-xs text-slate-600">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 text-[#ff6b1e] shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href={service.slug}
                      className="text-xs font-bold text-[#ff6b1e] hover:underline flex items-center gap-1"
                    >
                      <span>Explore Service</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <EnquiryButton
                      variant="link"
                      service={service.title}
                      className="p-0 text-xs font-semibold text-slate-500 hover:text-slate-800"
                    >
                      <span>Get Quote</span>
                    </EnquiryButton>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section
        className="py-10 sm:py-16 bg-slate-50/60 border-y border-slate-100"
        id="process"
        aria-labelledby="process-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#fff5ee] border border-[#ff6b1e]/25 px-3.5 py-1 text-xs font-bold text-[#ff6b1e] mb-2 sm:mb-3 shadow-2xs">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Disciplined 5-Stage Framework</span>
            </div>
            <h2
              id="process-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight"
            >
              Our Website Development Process
            </h2>
            <p className="mt-2.5 sm:mt-3 text-xs sm:text-base text-slate-600 leading-relaxed">
              A transparent, milestone-driven approach engineered to take your website from strategic concept to stable production launch.
            </p>
          </div>

          <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-5">
            {processPhases.map((phase) => {
              const PhaseIcon = phase.icon;
              return (
                <div
                  key={phase.step}
                  className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-xs hover:shadow-lg hover:border-[#ff6b1e]/50 transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <span className="text-xl sm:text-2xl font-black text-[#ff6b1e]">
                        {phase.step}
                      </span>
                      <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-[#fff5ee] text-[#ff6b1e] group-hover:bg-[#ff6b1e] group-hover:text-white transition-colors">
                        <PhaseIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#ff6b1e] transition-colors">
                      {phase.title}
                    </h3>
                    <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                      {phase.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-0.5">
                      Deliverable
                    </span>
                    <p className="text-xs font-bold text-slate-800 truncate">
                      {phase.deliverable}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 sm:mt-12 rounded-2xl bg-white border border-slate-200/90 p-5 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-center sm:text-left">
              <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-[#fff5ee] text-[#ff6b1e]">
                <FileCheck2 className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-slate-900">
                  Ready to Plan Your Project Milestones?
                </h4>
                <p className="text-xs text-slate-600 mt-0.5 max-w-xl">
                  Connect with our technical team in Noida for an architectural scope and fixed delivery plan.
                </p>
              </div>
            </div>

            <EnquiryButton className="w-full sm:w-auto px-6 py-3 text-xs sm:text-sm justify-center whitespace-nowrap">
              <span>Schedule Discovery Call</span>
              <ArrowRight className="h-4 w-4" />
            </EnquiryButton>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <TechStackSection />

      {/* Latest Web Trends Section */}
      <LatestTrendsSection />

      {/* Frequently Asked Questions (Server-Rendered) */}
      <FaqSection />

      {/* Final Conversion CTA */}
      <section className="bg-white py-10 sm:py-16 text-center" id="contact">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl sm:rounded-3xl border border-slate-100 bg-[#fff5ee] p-6 sm:p-12 shadow-lg shadow-[#ff6b1e]/5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#ff6b1e] text-[11px] sm:text-xs font-bold mb-3 sm:mb-4 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5" />
              Free Technical Consultation
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              Ready to Build Your High-Performance Website?
            </h2>
            <p className="mt-3 text-slate-600 max-w-2xl mx-auto text-xs sm:text-base leading-relaxed">
              Connect directly with our senior website engineers at our Noida Sector 62 office. We evaluate your business requirements and provide an itemized proposal.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 max-w-sm sm:max-w-none mx-auto">
              <EnquiryButton className="w-full sm:w-auto px-6 py-3.5 sm:px-8 sm:py-3.5 text-xs sm:text-sm font-bold justify-center">
                <span>Request Free Proposal</span>
                <ArrowRight className="h-4 w-4" />
              </EnquiryButton>
              <Link
                href="tel:+919990613140"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-white border border-slate-300 px-6 py-3.5 sm:px-8 sm:py-3.5 text-xs sm:text-sm font-bold text-slate-800 hover:border-[#ff6b1e] hover:text-[#ff6b1e] transition-all shadow-2xs active:scale-95"
              >
                <PhoneCall className="w-4 h-4 text-[#ff6b1e]" />
                <span>Call: +91 99906 13140</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
