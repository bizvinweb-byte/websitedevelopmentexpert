"use client";

import { useState } from "react";
import {
  ShoppingBag,
  Code2,
  Server,
  Database,
  Cloud,
  Cpu,
  Layers,
  Sparkles,
  ArrowRight,
  PhoneCall,
  CheckCircle2,
  Terminal,
  Globe2,
} from "lucide-react";
import { useEnquiryModal } from "./EnquiryModal";

interface TechItem {
  name: string;
  category: "E-Commerce" | "Frontend" | "Backend" | "CMS & Cloud";
  iconBg: string;
  badge: string;
  description: string;
  capabilities: string[];
}

const TECH_STACK: TechItem[] = [
  // E-Commerce
  {
    name: "Shopify & Shopify Plus",
    category: "E-Commerce",
    iconBg: "bg-emerald-50 text-emerald-600 border-emerald-200",
    badge: "E-Commerce Leader",
    description:
      "Enterprise digital storefronts built on Shopify and Shopify Plus. From bespoke Liquid theme engineering to private app integrations and headless Shopify.",
    capabilities: [
      "Custom Shopify 2.0 Themes",
      "Headless Shopify with Next.js",
      "Payment Gateway Integrations",
      "High-Volume Checkout Optimization",
    ],
  },
  {
    name: "WooCommerce & WordPress Commerce",
    category: "E-Commerce",
    iconBg: "bg-violet-50 text-violet-600 border-violet-200",
    badge: "Flexible Commerce",
    description:
      "Highly customized WooCommerce solutions with custom plugin development, multi-currency engines, and automated order fulfillment pipelines.",
    capabilities: [
      "Custom WooCommerce Themes",
      "Scalable Product Catalogs",
      "Custom Payment & Shipping APIs",
      "Speed Hardening & Caching",
    ],
  },
  {
    name: "Headless E-Commerce & Custom Carts",
    category: "E-Commerce",
    iconBg: "bg-orange-50 text-[#ff6b1e] border-orange-200",
    badge: "Sub-Second Checkout",
    description:
      "Decoupled frontend architecture communicating with commerce backends via GraphQL/REST APIs for instantaneous browsing and conversion.",
    capabilities: [
      "Sub-second Product Transitions",
      "Custom Cart & Checkout Funnels",
      "Omnichannel Architecture",
      "Shopify Storefront API Integration",
    ],
  },

  // Frontend
  {
    name: "Next.js 16 (App Router)",
    category: "Frontend",
    iconBg: "bg-slate-900 text-white border-slate-700",
    badge: "Core Framework",
    description:
      "The premier React framework for enterprise web apps. Server-Side Rendering (SSR), Static Site Generation (SSG), and edge middleware for extreme speed.",
    capabilities: [
      "Server Components (RSC)",
      "Dynamic Route Handlers",
      "Core Web Vitals Optimization",
      "Automated SEO Metadata & Sitemaps",
    ],
  },
  {
    name: "React 19 & TypeScript",
    category: "Frontend",
    iconBg: "bg-cyan-50 text-cyan-600 border-cyan-200",
    badge: "Type-Safe UI",
    description:
      "Component-driven, rock-solid frontends built with strict TypeScript typing, reusable design systems, and zero runtime type errors.",
    capabilities: [
      "Type-Safe Component Architecture",
      "React Actions & Transitions",
      "Accessible WCAG 2.1 UI",
      "Modular Micro-Frontends",
    ],
  },
  {
    name: "Tailwind CSS & Modern Styling",
    category: "Frontend",
    iconBg: "bg-sky-50 text-sky-600 border-sky-200",
    badge: "Utility-First Speed",
    description:
      "Ultra-lean utility-first CSS delivering responsive, bespoke layouts with near-zero bundle bloat and automatic unused-CSS purging.",
    capabilities: [
      "Fluid Typography & Spacing",
      "Zero CSS Runtime Overhead",
      "Adaptive Dark/Light Themes",
      "Custom Brand Design Tokens",
    ],
  },

  // Backend
  {
    name: "Node.js & Express / NestJS",
    category: "Backend",
    iconBg: "bg-green-50 text-green-700 border-green-200",
    badge: "High-Throughput APIs",
    description:
      "Asynchronous, event-driven server runtime handling thousands of concurrent requests, real-time webhooks, and secure authentication.",
    capabilities: [
      "RESTful & GraphQL API Engineering",
      "JWT & OAuth2 Secure Authentication",
      "Payment Gateway Webhooks",
      "Microservice Architectures",
    ],
  },
  {
    name: "Python (Django & FastAPI)",
    category: "Backend",
    iconBg: "bg-blue-50 text-blue-600 border-blue-200",
    badge: "AI & Data Engines",
    description:
      "High-speed Python backends designed for enterprise business logic, automated background worker tasks, and AI model integrations.",
    capabilities: [
      "FastAPI Asynchronous Endpoints",
      "Enterprise Django ORM",
      "Automated Background Tasks (Celery)",
      "AI & Machine Learning Connectors",
    ],
  },
  {
    name: "PHP & Laravel Framework",
    category: "Backend",
    iconBg: "bg-red-50 text-red-600 border-red-200",
    badge: "Enterprise Web Systems",
    description:
      "Elegant, battle-tested backend architecture ideal for complex database management, custom CRMs, portals, and legacy system modernization.",
    capabilities: [
      "Custom Admin Portals & Dashboards",
      "Complex Database Relationships",
      "Queue Workers & Job Scheduling",
      "Automated Security Middleware",
    ],
  },

  // CMS & Cloud
  {
    name: "WordPress & Headless CMS",
    category: "CMS & Cloud",
    iconBg: "bg-indigo-50 text-indigo-600 border-indigo-200",
    badge: "Content Powerhouse",
    description:
      "User-friendly content management systems allowing your marketing team to publish blogs, landing pages, and banners with zero code.",
    capabilities: [
      "Custom Gutenberg Blocks",
      "Headless CMS (Strapi / Sanity)",
      "Zero-Plugin Bloat Architecture",
      "Instant Publishing Workflows",
    ],
  },
  {
    name: "PostgreSQL, MySQL & MongoDB",
    category: "CMS & Cloud",
    iconBg: "bg-amber-50 text-amber-700 border-amber-200",
    badge: "Reliable Databases",
    description:
      "ACID-compliant relational and document databases architected with indexed queries, automated backups, and zero data redundancy.",
    capabilities: [
      "High-Concurrency Indexing",
      "Redis In-Memory Caching",
      "Automated Cloud Snapshot Backups",
      "Data Encryption at Rest",
    ],
  },
  {
    name: "Cloud Edge CDN (AWS & Vercel)",
    category: "CMS & Cloud",
    iconBg: "bg-slate-100 text-slate-800 border-slate-300",
    badge: "Global Infrastructure",
    description:
      "Global CDN edge caching serving your web application from server nodes closest to your users across all Indian cities and global markets.",
    capabilities: [
      "Sub-Second TTFB Across India",
      "Automated CI/CD Deployments",
      "Zero-Downtime Rolling Updates",
      "Cloudflare DDoS Protection",
    ],
  },
];

const CATEGORIES = [
  "All Technologies (12)",
  "E-Commerce",
  "Frontend",
  "Backend",
  "CMS & Cloud",
];

export default function TechStackSection() {
  const [activeCategory, setActiveCategory] = useState("All Technologies (12)");
  const { openEnquiryModal } = useEnquiryModal();

  const filteredTech =
    activeCategory === "All Technologies (12)"
      ? TECH_STACK
      : TECH_STACK.filter((item) => item.category === activeCategory);

  return (
    <section
      className="py-8 sm:py-16 bg-white border-t border-slate-100"
      id="tech-stack"
      aria-labelledby="tech-stack-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#fff5ee] border border-[#ff6b1e]/25 px-3.5 py-1 text-xs font-bold text-[#ff6b1e] mb-2 sm:mb-3 shadow-2xs">
            <Sparkles className="h-3.5 w-3.5 text-[#ff6b1e]" />
            <span>Modern Engineering Arsenal</span>
          </div>

          <h2
            id="tech-stack-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight"
          >
            Technologies &amp; Platforms{" "}
            <span className="text-[#ff6b1e]">We Master</span>
          </h2>

          <p className="mt-2.5 sm:mt-3 text-xs sm:text-base text-slate-600 leading-relaxed">
            From high-conversion <strong className="font-bold text-slate-900">Shopify &amp; Shopify Plus</strong> storefronts
            to custom <strong className="font-bold text-slate-900">Next.js &amp; React</strong> enterprise web applications,
            we select the ideal technology stack designed for your growth.
          </p>

          {/* Category Tabs */}
          <div className="mt-4 sm:mt-6 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#ff6b1e] text-white shadow-md shadow-[#ff6b1e]/25 scale-105"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Tech Cards Grid */}
        <div className="mt-6 sm:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6">
          {filteredTech.map((tech) => (
            <div
              key={tech.name}
              className="rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white p-4 sm:p-7 shadow-xs hover:shadow-xl hover:border-[#ff6b1e]/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 sm:gap-3 mb-3 sm:mb-5">
                  <span
                    className={`inline-flex items-center px-2.5 py-1 rounded-xl text-xs font-bold border ${tech.iconBg}`}
                  >
                    {tech.name}
                  </span>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider bg-slate-100 px-2 py-0.5 rounded-md">
                    {tech.badge}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3.5 sm:mb-6">
                  {tech.description}
                </p>

                <div className="border-t border-slate-100 pt-3 sm:pt-4">
                  <p className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-400 mb-2 sm:mb-2.5">
                    Core Capabilities
                  </p>
                  <ul className="space-y-1.5 sm:space-y-2 text-xs text-slate-700">
                    {tech.capabilities.map((cap) => (
                      <li key={cap} className="flex items-center gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#ff6b1e] shrink-0" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-5 sm:mt-8 pt-3 sm:pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => openEnquiryModal({ service: tech.name })}
                  className="w-full flex items-center justify-between text-xs font-bold text-[#ff6b1e] hover:text-[#e55510] transition py-1 group/btn cursor-pointer"
                >
                  <span>Build with {tech.name.split(" ")[0]}</span>
                  <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Consultation Box */}
        <div className="mt-8 sm:mt-16 rounded-2xl sm:rounded-3xl border border-slate-100 bg-[#fff5ee] p-5 sm:p-12 text-center shadow-lg shadow-[#ff6b1e]/5">
          <div className="max-w-3xl mx-auto space-y-2.5 sm:space-y-3">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#ff6b1e]">
              Custom Technology Consulting
            </span>
            <h3 className="text-xl sm:text-3xl font-extrabold text-slate-900">
              Need Help Choosing the Right Tech Stack or Shopify Setup?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
              Our principal engineers evaluate your traffic projections, budget, and business requirements
              to recommend the optimal architecture (Shopify vs Next.js vs Custom Full-Stack).
            </p>
            <div className="pt-3 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
              <button
                type="button"
                onClick={() => openEnquiryModal({ service: "Tech Stack Consultation" })}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#ff6b1e] px-6 py-3 sm:px-7 sm:py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-[#ff6b1e]/30 hover:bg-[#e55510] transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>Get Free Architecture Recommendation</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href="tel:+919990613140"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 sm:px-6 sm:py-3.5 text-xs sm:text-sm font-bold text-slate-800 hover:border-[#ff6b1e] hover:text-[#ff6b1e] transition-all shadow-2xs"
              >
                <PhoneCall className="w-4 h-4 text-[#ff6b1e]" />
                <span>Call: +91 99906 13140</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
