import Link from "next/link";
import Image from "next/image";
import {
  Code,
  Layout,
  Search,
  Zap,
  Award,
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
  HelpCircle,
} from "lucide-react";
import { siteConfig } from "@/lib/seo-data";
import { EnquiryButton } from "@/components/EnquiryModal";
import LatestTrendsSection from "@/components/LatestTrendsSection";
import TechStackSection from "@/components/TechStackSection";
import FaqSection from "@/components/FaqSection";
import { FAQ_DATA } from "@/lib/faq-data";
import JsonLd from "@/components/JsonLd";

export default function Home() {
  const coreServices = [
    {
      icon: Code,
      title: "Custom Web Application Development",
      description:
        "High-performance, scalable web apps built with Next.js, React, and TypeScript. Engineered for enterprise reliability and extreme speed.",
      features: ["Server-Side Rendering (SSR)", "API-First Architecture", "Micro-frontend Ready"],
    },
    {
      icon: ShoppingBag,
      title: "Enterprise E-Commerce Platforms",
      description:
        "Modern, frictionless digital shopping experiences with instant checkout flows, payment gateway integrations, and robust inventory systems.",
      features: ["Headless Commerce", "Omnichannel Ready", "Sub-second Page Speeds"],
    },
    {
      icon: Layout,
      title: "High-Converting UI/UX Engineering",
      description:
        "Bespoke, human-centered digital experiences that build brand authority, increase engagement, and drive quantifiable conversions.",
      features: ["Design System Crafting", "Interactive Prototypes", "Accessibility (WCAG 2.1)"],
    },
    {
      icon: Search,
      title: "Technical SEO & Google SERP Dominance",
      description:
        "100% semantic HTML5, Schema.org rich snippets, dynamic Open Graph architecture, and automated XML sitemaps to rank on Google Page 1.",
      features: ["Structured JSON-LD Data", "Canonical Tagging", "Google Core Web Vitals 95+"],
    },
    {
      icon: Cpu,
      title: "API & Cloud Infrastructure",
      description:
        "Secure cloud-native deployments, CDN edge caching, and scalable REST/GraphQL APIs that handle millions of concurrent requests.",
      features: ["Edge Network Deployment", "Zero-Downtime Releases", "Enterprise Security"],
    },
    {
      icon: Layers,
      title: "Continuous Maintenance & Optimization",
      description:
        "Proactive 24/7 technical monitoring, security patch management, performance tuning, and automated database backups.",
      features: ["24/7 Uptime Monitoring", "Speed Audits", "Dedicated Support SLA"],
    },
  ];

  const processPhases = [
    {
      step: "01",
      icon: Search,
      title: "Requirement Gathering & Analysis",
      description:
        "Deep-dive audit into your business goals, target audience demographics, competitor vulnerabilities, and technical specifications to build a winning roadmap.",
      deliverable: "Strategic Blueprint & Technical Scope",
    },
    {
      step: "02",
      icon: Compass,
      title: "Planning & Wireframing",
      description:
        "Architecting clean information hierarchy, intuitive sitemaps, and interactive low-fidelity wireframes that eliminate navigation friction and guide user intent.",
      deliverable: "UX Wireframes & Flow Architecture",
    },
    {
      step: "03",
      icon: Palette,
      title: "Human-Centric UI/UX Design",
      description:
        "Crafting pixel-perfect visual elements, cohesive design tokens, responsive typography, and engaging micro-interactions that elevate brand trust.",
      deliverable: "Modern Interactive UI Prototypes",
    },
    {
      step: "04",
      icon: Code2,
      title: "Development & Clean Coding",
      description:
        "Bringing approved interfaces to life with cutting-edge Next.js, TypeScript, and Tailwind CSS. Built with 100% semantic tags and Schema.org rich data.",
      deliverable: "Sub-Second Production Codebase",
    },
    {
      step: "05",
      icon: Rocket,
      title: "Testing, Launch & Maintenance",
      description:
        "Rigorous cross-device QA, 100/100 Core Web Vitals audit, Google Search Console indexing, followed by 24/7 security updates and performance tuning.",
      deliverable: "Live Launch & Google Ranking Push",
    },
  ];

  // Comprehensive Schema.org JSON-LD for Google Page 1 Rich Snippets
  const homeJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteConfig.siteUrl}/#website`,
        url: siteConfig.siteUrl,
        name: siteConfig.name,
        description:
          "India's premier digital engineering and website development agency.",
        publisher: {
          "@type": "Organization",
          name: siteConfig.parentCompany.name,
          url: siteConfig.parentCompany.url,
          logo: `${siteConfig.siteUrl}/images/brandmingo-logo.png`,
          contactPoint: {
            "@type": "ContactPoint",
            telephone: siteConfig.phone,
            contactType: "Customer Support",
            areaServed: "IN",
            availableLanguage: ["en", "hi"],
          },
        },
        parentOrganization: {
          "@type": "Organization",
          name: siteConfig.parentCompany.name,
          url: siteConfig.parentCompany.url,
        },
      },
      {
        "@type": "WebPage",
        "@id": `${siteConfig.siteUrl}/#webpage`,
        url: siteConfig.siteUrl,
        name: "Best Website Development Company in India | Top WebDev Expert",
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
        thumbnailUrl: `${siteConfig.siteUrl}/images/webdev-banner.png`,
        description:
          "Top-rated website development company in India engineering ultra-fast Next.js, React, and Shopify websites with 100% Core Web Vitals to rank #1 on Google search results.",
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
    ],
  };

  return (
    <div className="bg-white">
      {/* Structural SEO JSON-LD */}
      <JsonLd data={homeJsonLd} />

      {/* Hero Section - Compact on mobile */}
      <section
        className="relative overflow-hidden bg-white pt-8 pb-10 sm:pt-16 sm:pb-18"
        aria-labelledby="hero-heading"
      >
        {/* Subtle orange ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-[600px] h-[300px] bg-gradient-to-tr from-[#ff6b1e]/10 to-amber-200/20 blur-3xl rounded-full pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-[#ff6b1e]/20 bg-[#fff5ee] px-3.5 py-1 sm:px-4 sm:py-1.5 text-[11px] sm:text-xs font-semibold text-[#ff6b1e] shadow-2xs mb-4 sm:mb-6">
            <Award className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#ff6b1e]" />
            <span>#1 Rated Web &amp; Shopify Agency • A Venture of Brandmingo</span>
          </div>

          <h1
            id="hero-heading"
            className="mx-auto max-w-4xl text-[28px] sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight sm:leading-tight"
          >
            Best Website Development Company in{" "}
            <span className="text-[#ff6b1e]">
              India
            </span>
          </h1>

          <p className="mx-auto mt-3 sm:mt-6 max-w-3xl text-xs sm:text-lg text-slate-600 font-normal leading-relaxed">
            We engineer high-speed Next.js web applications, high-converting Shopify storefronts, and enterprise custom websites designed to dominate Google Page 1 search rankings and convert visitors into clients.
          </p>

          <div className="mt-5 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-sm sm:max-w-none mx-auto">
            <EnquiryButton className="w-full sm:w-auto px-6 py-3.5 sm:px-8 sm:py-4 text-xs sm:text-sm font-bold justify-center shadow-md sm:shadow-lg shadow-[#ff6b1e]/30 hover:scale-105 active:scale-95 transition-all">
              <span>Start Your Project</span>
              <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </EnquiryButton>
            <Link
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 sm:px-8 sm:py-4 text-xs sm:text-sm font-bold text-slate-700 hover:border-[#ff6b1e] hover:text-[#ff6b1e] transition-all shadow-2xs hover:scale-105 active:scale-95"
            >
              <span>Explore Services</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Key Performance Metrics Compact Bar */}
      <section
        className="relative -mt-4 sm:-mt-8 z-20 mx-auto max-w-6xl px-3 sm:px-6"
        aria-label="Verified Performance Benchmarks"
      >
        <div className="rounded-xl sm:rounded-2xl border border-slate-200/80 bg-white/95 backdrop-blur-md shadow-md sm:shadow-lg shadow-slate-900/5 overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            {/* Metric 1 */}
            <div className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-4 hover:bg-slate-50/60 transition">
              <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-[#fff5ee] text-[#ff6b1e]">
                <Gauge className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </div>
              <div className="min-w-0">
                <div className="flex items-baseline gap-1">
                  <span className="text-base sm:text-2xl font-extrabold text-slate-900 leading-none">99+</span>
                  <span className="text-[8px] sm:text-[9px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-200/60 px-1 py-0.5 rounded">Rank 1</span>
                </div>
                <p className="text-[10px] sm:text-[11px] font-semibold text-slate-500 mt-0.5 truncate">Core Web Vitals</p>
              </div>
            </div>

            {/* Metric 2 */}
            <div className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-4 hover:bg-slate-50/60 transition">
              <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-[#fff5ee] text-[#ff6b1e]">
                <Code2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </div>
              <div className="min-w-0">
                <div className="flex items-baseline gap-1">
                  <span className="text-base sm:text-2xl font-extrabold text-slate-900 leading-none">100%</span>
                  <span className="text-[8px] sm:text-[9px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-200/60 px-1 py-0.5 rounded">Clean</span>
                </div>
                <p className="text-[10px] sm:text-[11px] font-semibold text-slate-500 mt-0.5 truncate">Semantic HTML5</p>
              </div>
            </div>

            {/* Metric 3 */}
            <div className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-4 hover:bg-slate-50/60 transition">
              <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-[#fff5ee] text-[#ff6b1e]">
                <TrendingUp className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </div>
              <div className="min-w-0">
                <div className="flex items-baseline gap-1">
                  <span className="text-base sm:text-2xl font-extrabold text-slate-900 leading-none">Top 5</span>
                  <span className="text-[8px] sm:text-[9px] font-bold text-[#ff6b1e] bg-[#fff5ee] border border-[#ff6b1e]/20 px-1 py-0.5 rounded">Google</span>
                </div>
                <p className="text-[10px] sm:text-[11px] font-semibold text-slate-500 mt-0.5 truncate">SERP Ranking Focus</p>
              </div>
            </div>

            {/* Metric 4 */}
            <div className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-4 hover:bg-slate-50/60 transition">
              <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-[#fff5ee] text-[#ff6b1e]">
                <Timer className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </div>
              <div className="min-w-0">
                <div className="flex items-baseline gap-1">
                  <span className="text-base sm:text-2xl font-extrabold text-slate-900 leading-none">0.4s</span>
                  <span className="text-[8px] sm:text-[9px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-200/60 px-1 py-0.5 rounded">Speed</span>
                </div>
                <p className="text-[10px] sm:text-[11px] font-semibold text-slate-500 mt-0.5 truncate">Avg Edge Load Time</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Do You Need a Website Section (Asymmetrical Overlapping Image + Card) */}
      <section
        className="py-8 sm:py-16 bg-white overflow-hidden"
        aria-labelledby="why-need-website-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-8 lg:gap-14 items-center">
            {/* Left Column: Visual Image with Floating Experience Badge */}
            <div className="relative w-full order-1">
              <div style={{ position: "relative", minHeight: "210px" }} className="relative h-[210px] sm:h-[420px] lg:h-[500px] w-full overflow-hidden rounded-2xl sm:rounded-3xl shadow-md sm:shadow-xl border border-slate-200/90 group">
                <Image
                  src="/images/why-website.jpg"
                  alt="Web development engineers and UI designers collaborating on web applications"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Experience Badge - Clean bottom inside on mobile, overlapping on desktop */}
              <div className="absolute bottom-3 right-3 sm:-bottom-5 sm:right-10 bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl p-2.5 sm:p-4 shadow-lg sm:shadow-xl border border-slate-100 flex items-center gap-2 sm:gap-3.5 z-10">
                <div className="flex h-8 w-8 sm:h-11 sm:w-11 items-center justify-center rounded-lg sm:rounded-xl bg-[#fff5ee] text-[#ff6b1e]">
                  <TrendingUp className="h-4 w-4 sm:h-6 sm:w-6" />
                </div>
                <div>
                  <p className="text-sm sm:text-xl font-extrabold text-slate-900">+340%</p>
                  <p className="text-[9px] sm:text-xs font-medium text-slate-500">Avg Lead Growth</p>
                </div>
              </div>
            </div>

            {/* Right Column: Clean Content Card */}
            <div className="w-full order-2">
              <div className="rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 p-4 sm:p-10 lg:p-12 shadow-sm sm:shadow-xl shadow-slate-900/5">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-[#fff5ee] border border-[#ff6b1e]/25 px-3 py-1 text-[11px] sm:text-xs font-bold text-[#ff6b1e] mb-2.5 sm:mb-4 shadow-2xs">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Essential Digital Growth</span>
                </div>

                <h2
                  id="why-need-website-heading"
                  className="text-xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 leading-snug sm:leading-tight"
                >
                  Why Does Your Business Need a Modern High-Performance Website?
                </h2>

                <p className="mt-2 sm:mt-4 text-xs sm:text-base text-slate-600 leading-relaxed">
                  In today&apos;s hyper-competitive digital economy, your website is your company&apos;s primary storefront, sales representative, and credibility engine. A slow or outdated site drives your most valuable high-intent customers straight to competitors.
                </p>

                <div className="mt-4 sm:mt-6 space-y-2.5 sm:space-y-4">
                  <div className="flex items-start gap-2.5 sm:gap-3 p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-slate-50/70 sm:bg-transparent border border-slate-100 sm:border-0">
                    <div className="flex h-5 w-5 sm:h-6 sm:w-6 shrink-0 items-center justify-center rounded-full bg-[#fff5ee] text-[#ff6b1e] mt-0.5">
                      <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                        Instant Credibility &amp; Trust Authority
                      </h3>
                      <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5 leading-relaxed">
                        84% of consumers evaluate business trust and professionalism directly from website speed, modern visual design, and mobile responsiveness.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 sm:gap-3 p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-slate-50/70 sm:bg-transparent border border-slate-100 sm:border-0">
                    <div className="flex h-5 w-5 sm:h-6 sm:w-6 shrink-0 items-center justify-center rounded-full bg-[#fff5ee] text-[#ff6b1e] mt-0.5">
                      <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                        24/7 Automated Revenue &amp; Lead Generation
                      </h3>
                      <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5 leading-relaxed">
                        Engineered with high-converting user funnels and sub-second loading, your website captures and nurtures leads around the clock.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 sm:gap-3 p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-slate-50/70 sm:bg-transparent border border-slate-100 sm:border-0">
                    <div className="flex h-5 w-5 sm:h-6 sm:w-6 shrink-0 items-center justify-center rounded-full bg-[#fff5ee] text-[#ff6b1e] mt-0.5">
                      <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                        Google Search Dominance Over Competitors
                      </h3>
                      <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5 leading-relaxed">
                        Built with 100% semantic HTML5 and JSON-LD schema, your site ranks on Google Page 1 when prospects actively search for your services.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-4 sm:mt-8 sm:pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4">
                  <EnquiryButton className="w-full sm:w-auto px-6 py-3 text-xs sm:text-sm justify-center">
                    <span>Build Your High-Growth Website</span>
                    <ArrowRight className="h-4 w-4" />
                  </EnquiryButton>
                  <span className="text-[11px] sm:text-xs text-slate-500 font-medium text-center sm:text-left">
                    Free technical &amp; SEO audit included
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Website Designing Process Section */}
      <section
        className="py-8 sm:py-16 bg-slate-50/60 border-y border-slate-100"
        id="process"
        aria-labelledby="process-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#fff5ee] border border-[#ff6b1e]/25 px-3.5 py-1 text-xs font-bold text-[#ff6b1e] mb-2 sm:mb-3 shadow-2xs">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Proven 5-Stage Framework</span>
            </div>
            <h2
              id="process-heading"
              className="text-xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight"
            >
              What is the Process of Our Website Designing Services?
            </h2>
            <p className="mt-2 sm:mt-3 text-xs sm:text-base text-slate-600 leading-relaxed">
              We follow a disciplined, transparent, and results-driven methodology engineered to take your website from initial concept to Google Page 1 authority.
            </p>
          </div>

          {/* 5-Step Cards Grid - Compact on mobile */}
          <div className="mt-6 sm:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-5">
            {processPhases.map((phase) => {
              const PhaseIcon = phase.icon;
              return (
                <div
                  key={phase.step}
                  className="group relative flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white p-4 sm:p-6 shadow-xs hover:shadow-xl hover:border-[#ff6b1e]/50 hover:-translate-y-1 transition-all duration-300"
                >
                  <div>
                    {/* Step Number & Icon Header */}
                    <div className="flex items-center justify-between mb-2.5 sm:mb-5">
                      <span className="text-lg sm:text-2xl font-black text-[#ff6b1e]">
                        {phase.step}
                      </span>
                      <div className="flex h-8 w-8 sm:h-11 sm:w-11 items-center justify-center rounded-lg sm:rounded-xl bg-[#fff5ee] text-[#ff6b1e] group-hover:bg-[#ff6b1e] group-hover:text-white transition-colors shadow-2xs">
                        <PhaseIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#ff6b1e] transition-colors leading-snug">
                      {phase.title}
                    </h3>
                    <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {phase.description}
                    </p>
                  </div>

                  {/* Key Deliverable Pill */}
                  <div className="mt-3.5 pt-2.5 sm:mt-6 sm:pt-4 border-t border-slate-100">
                    <span className="text-[9px] sm:text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-0.5">
                      Deliverable
                    </span>
                    <p className="text-[11px] sm:text-xs font-bold text-slate-800 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#ff6b1e] shrink-0" />
                      <span className="truncate">{phase.deliverable}</span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Process Trust Banner - Centered & Compact on Mobile */}
          <div className="mt-6 sm:mt-12 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 p-4 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 shadow-sm">
            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-3 sm:gap-4 text-center sm:text-left">
              <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-[#fff5ee] text-[#ff6b1e]">
                <FileCheck2 className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-slate-900">
                  Ready to Start Phase 01 for Your Business?
                </h4>
                <p className="text-xs text-slate-600 mt-1 max-w-xl">
                  Get a dedicated technical project manager, milestone schedule, and fixed-scope delivery guarantee.
                </p>
              </div>
            </div>

            <EnquiryButton className="w-full sm:w-auto px-6 py-3 text-xs sm:text-sm justify-center whitespace-nowrap shadow-md shadow-[#ff6b1e]/25">
              <span>Schedule Discovery Call</span>
              <ArrowRight className="h-4 w-4" />
            </EnquiryButton>
          </div>
        </div>
      </section>

      {/* Best Website Development Company in India Section - Premium 2-Column Split Showcase */}
      <section
        className="py-8 sm:py-16 bg-gradient-to-b from-white via-slate-50/50 to-white overflow-hidden"
        aria-labelledby="best-agency-india-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Top 2-Column Split: Content & Visual Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Left Content Column (7 cols) */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#fff5ee] border border-[#ff6b1e]/25 px-3.5 py-1 text-xs font-bold text-[#ff6b1e] shadow-2xs">
                <Sparkles className="h-3.5 w-3.5 text-[#ff6b1e]" />
                <span>India&apos;s Premier Digital Engineering Agency</span>
              </div>

              <h2
                id="best-agency-india-heading"
                className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight"
              >
                Top Web Design &amp; Development Agency in{" "}
                <span className="text-[#ff6b1e]">India</span>
              </h2>

              <p className="text-xs sm:text-base lg:text-lg text-slate-600 leading-relaxed">
                India is the world&apos;s fastest-growing digital economy, home to visionary startups, high-growth SMEs, and global enterprises. In this hyper-competitive market, generic templates won&apos;t cut it. We engineer custom, user-centric, and high-performance web applications tailored to build instant brand authority and turn visitors into paying clients.
              </p>

              {/* 3 High-Impact Value Points */}
              <div className="space-y-2.5 sm:space-y-3.5 pt-1 sm:pt-2">
                <div className="flex items-start gap-3 p-3 rounded-xl sm:rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-[#ff6b1e]/40 transition">
                  <div className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-[#fff5ee] text-[#ff6b1e] mt-0.5">
                    <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                      Modern Next.js &amp; React Engineering
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5 leading-relaxed">
                      Sub-second load times engineered for extreme speed across 4G/5G mobile networks and commercial hubs throughout India.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl sm:rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-[#ff6b1e]/40 transition">
                  <div className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-[#fff5ee] text-[#ff6b1e] mt-0.5">
                    <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                      Google Page 1 Technical SEO Architecture
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5 leading-relaxed">
                      100% semantic HTML5, localized Schema.org JSON-LD data, and Core Web Vitals perfection to dominate search rankings.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl sm:rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-[#ff6b1e]/40 transition">
                  <div className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-[#fff5ee] text-[#ff6b1e] mt-0.5">
                    <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                      High-Conversion Enterprise UX
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5 leading-relaxed">
                      Intuitive customer funnels, frictionless checkout flows, and automated lead capture designed for maximum ROI.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4">
                <EnquiryButton
                  service="Custom Web Application"
                  className="w-full sm:w-auto px-6 py-3 text-xs sm:text-sm justify-center"
                >
                  <span>Consult Our Engineering Team</span>
                  <ArrowRight className="h-4 w-4" />
                </EnquiryButton>
                <Link
                  href="tel:+919990613140"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-white border border-slate-300 px-5 py-3 text-xs sm:text-sm font-bold text-slate-800 hover:border-[#ff6b1e] hover:text-[#ff6b1e] transition-all shadow-2xs active:scale-95"
                >
                  <PhoneCall className="w-4 h-4 text-[#ff6b1e]" />
                  <span>Call: +91 99906 13140</span>
                </Link>
              </div>
            </div>

            {/* Right Visual Column (5 cols) - High-Tech Agency Showcase */}
            <div className="lg:col-span-5 relative">
              <div style={{ position: "relative", minHeight: "220px" }} className="relative h-[220px] sm:h-[460px] w-full overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-2xl border border-slate-100 group">
                <Image
                  src="/images/india-web-agency.jpg"
                  alt="Senior web development and engineering team in India building enterprise websites"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />

                {/* Floating Top Badge */}
                <div className="absolute top-3 left-3 sm:top-5 sm:left-5 bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl px-2.5 py-1 sm:px-4 sm:py-2 shadow-lg border border-slate-100 flex items-center gap-1.5 sm:gap-2">
                  <span className="flex h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-[10px] sm:text-xs font-extrabold text-slate-900">
                    Google Page 1 Ready Architecture
                  </span>
                </div>

                {/* Bottom Overlay Card */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-5 sm:left-5 sm:right-5 bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl p-2.5 sm:p-4 shadow-xl border border-slate-100/80">
                  <div className="flex items-center justify-between text-[10px] sm:text-xs font-semibold text-slate-500 border-b border-slate-100 pb-1.5 mb-1.5 sm:pb-2 sm:mb-2">
                    <span className="text-slate-800 font-bold">Tech Stack Standards</span>
                    <span className="text-emerald-600 font-bold">100/100 Core Web Vitals</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-1 sm:gap-2">
                    <span className="px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-md sm:rounded-lg bg-slate-100 text-[9px] sm:text-[11px] font-bold text-slate-700">
                      Next.js 16 SSR
                    </span>
                    <span className="px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-md sm:rounded-lg bg-[#fff5ee] text-[9px] sm:text-[11px] font-bold text-[#ff6b1e]">
                      React 19
                    </span>
                    <span className="px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-md sm:rounded-lg bg-slate-100 text-[9px] sm:text-[11px] font-bold text-slate-700">
                      Tailwind CSS
                    </span>
                    <span className="px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-md sm:rounded-lg bg-slate-100 text-[9px] sm:text-[11px] font-bold text-slate-700">
                      Schema JSON-LD
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Pillars of Excellence Grid - Compact on mobile */}
          <div className="mt-8 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            <div className="rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white p-4 sm:p-7 shadow-xs hover:shadow-xl hover:border-[#ff6b1e]/50 transition-all duration-300">
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl bg-[#fff5ee] text-[#ff6b1e] mb-3 sm:mb-5">
                <Globe className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                Pan-India Scalability
              </h3>
              <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Deployed on high-speed global edge CDNs for lightning-fast delivery across all Indian states and network bandwidths.
              </p>
            </div>

            <div className="rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white p-4 sm:p-7 shadow-xs hover:shadow-xl hover:border-[#ff6b1e]/50 transition-all duration-300">
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl bg-[#fff5ee] text-[#ff6b1e] mb-3 sm:mb-5">
                <Search className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                Google Rank #1 SEO Focus
              </h3>
              <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Precision meta architecture, Schema rich snippets, and semantic hierarchy engineered to outrank legacy competitors.
              </p>
            </div>

            <div className="rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white p-4 sm:p-7 shadow-xs hover:shadow-xl hover:border-[#ff6b1e]/50 transition-all duration-300">
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl bg-[#fff5ee] text-[#ff6b1e] mb-3 sm:mb-5">
                <Zap className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                Sub-Second Core Web Vitals
              </h3>
              <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Modern Next.js SSR &amp; SSG frameworks delivering 95+ PageSpeed scores and instantaneous mobile loading speeds.
              </p>
            </div>

            <div className="rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white p-4 sm:p-7 shadow-xs hover:shadow-xl hover:border-[#ff6b1e]/50 transition-all duration-300">
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl bg-[#fff5ee] text-[#ff6b1e] mb-3 sm:mb-5">
                <ShieldCheck className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                Dedicated Lifetime Support
              </h3>
              <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                24/7 security hardening, automated cloud backups, and ongoing optimization SLA to keep your business running smoothly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Services Section */}
      <section
        className="py-8 sm:py-16 bg-white"
        id="services"
        aria-labelledby="services-hub-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-[#ff6b1e]">
              What We Deliver
            </span>
            <h2
              id="services-hub-heading"
              className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900"
            >
              Enterprise-Grade Web Engineering Solutions
            </h2>
            <p className="mt-2.5 sm:mt-3 text-xs sm:text-base text-slate-600">
              End-to-end web design and development capabilities built on modern
              frameworks for extreme speed, search ranking, and conversion rate.
            </p>
          </div>

          <div className="mt-6 sm:mt-12 grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {coreServices.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-4 sm:p-8 shadow-xs hover:shadow-xl hover:border-[#ff6b1e]/50 transition-all duration-300 group"
                >
                  <div>
                    <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-[#fff5ee] text-[#ff6b1e] group-hover:bg-[#ff6b1e] group-hover:text-white transition-colors mb-3 sm:mb-6">
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <h3 className="text-base sm:text-xl font-bold text-slate-900 group-hover:text-[#ff6b1e] transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-1.5 sm:mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="mt-3.5 sm:mt-6 space-y-1.5 sm:space-y-2.5 text-xs text-slate-600">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#ff6b1e] shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-5 pt-3 sm:mt-8 sm:pt-6 border-t border-slate-100">
                    <EnquiryButton
                      variant="link"
                      service={service.title}
                      className="p-0 text-xs sm:text-sm"
                    >
                      <span>Inquire About This Service</span>
                      <ArrowRight className="h-4 w-4" />
                    </EnquiryButton>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies & Platforms We Master (Shopify, Next.js, React, Node, etc.) */}
      <TechStackSection />

      {/* SEO Pillars Section */}
      <section
        className="bg-slate-900 py-8 sm:py-16 text-white"
        id="solutions"
        aria-labelledby="seo-pillars-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#ff6b1e]">
              Google Rank 1 Formula
            </span>
            <h2
              id="seo-pillars-heading"
              className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight"
            >
              Why This Website Architecture Ranks in Top 5 Results
            </h2>
            <p className="mt-2.5 sm:mt-3 text-xs sm:text-base text-slate-400">
              Search engines reward websites with high relevance, semantic
              clarity, fast delivery, and structured data signals.
            </p>
          </div>

          <div className="mt-6 sm:mt-12 grid grid-cols-1 gap-3.5 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl sm:rounded-2xl border border-slate-800 bg-slate-950 p-4 sm:p-6">
              <Zap className="h-7 w-7 sm:h-8 sm:w-8 text-[#ff6b1e]" />
              <h3 className="mt-3 sm:mt-4 text-base sm:text-lg font-bold text-white">
                Next.js SSR &amp; SSG Speed
              </h3>
              <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-slate-400">
                Server-side rendered and static pre-rendered pages deliver
                sub-second Time-to-First-Byte (TTFB) that Google crawlers prefer.
              </p>
            </div>

            <div className="rounded-xl sm:rounded-2xl border border-slate-800 bg-slate-950 p-4 sm:p-6">
              <Code className="h-7 w-7 sm:h-8 sm:w-8 text-[#ff6b1e]" />
              <h3 className="mt-3 sm:mt-4 text-base sm:text-lg font-bold text-white">
                100% Semantic HTML5
              </h3>
              <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-slate-400">
                Clean semantic tags (&lt;header&gt;, &lt;nav&gt;, &lt;main&gt;, &lt;article&gt;, and &lt;section&gt;)
                inform search engine bots exactly what each content block means.
              </p>
            </div>

            <div className="rounded-xl sm:rounded-2xl border border-slate-800 bg-slate-950 p-4 sm:p-6">
              <Layout className="h-7 w-7 sm:h-8 sm:w-8 text-[#ff6b1e]" />
              <h3 className="mt-3 sm:mt-4 text-base sm:text-lg font-bold text-white">
                JSON-LD Rich Snippets
              </h3>
              <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-slate-400">
                Schema.org markup for LocalBusiness, Service, BreadcrumbList,
                and FAQPage unlocks rich snippets on Google Search.
              </p>
            </div>

            <div className="rounded-xl sm:rounded-2xl border border-slate-800 bg-slate-950 p-4 sm:p-6">
              <ShieldCheck className="h-7 w-7 sm:h-8 sm:w-8 text-[#ff6b1e]" />
              <h3 className="mt-3 sm:mt-4 text-base sm:text-lg font-bold text-white">
                Core Web Vitals Ready
              </h3>
              <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-slate-400">
                Zero Cumulative Layout Shift (CLS) and optimized Largest
                Contentful Paint (LCP) for superior search engine favorability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Web Design & Development: Latest Trends Section */}
      <LatestTrendsSection />

      {/* Frequently Asked Questions (FAQ) Section - Interactive Accordion & Google Rich Snippets */}
      <FaqSection />

      {/* CTA Conversion Box */}
      <section className="bg-white py-8 sm:py-16 text-center" id="contact">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl sm:rounded-3xl border border-slate-100 bg-[#fff5ee] p-5 sm:p-12 shadow-lg shadow-[#ff6b1e]/5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#ff6b1e] text-[11px] sm:text-xs font-bold mb-3 sm:mb-4 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5" />
              Free Technical Consultation
            </div>
            <h2 className="text-xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              Ready to Build Your High-Performance Website?
            </h2>
            <p className="mt-2.5 sm:mt-4 text-slate-600 max-w-2xl mx-auto text-xs sm:text-base leading-relaxed">
              Speak with our senior website engineers today. We analyze your
              industry and provide a complete architectural roadmap to rank in
              Google&apos;s top 5.
            </p>
            <div className="mt-5 sm:mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 max-w-sm sm:max-w-none mx-auto">
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
