"use client";

import { useState } from "react";
import {
  Smartphone,
  Moon,
  Layout,
  Mic,
  Sparkles,
  Bot,
  Eye,
  UserCheck,
  Activity,
  Zap,
  MonitorSmartphone,
  ShieldCheck,
  DownloadCloud,
  Leaf,
  ChevronDown,
  ArrowRight,
  CheckCircle2,
  PhoneCall,
} from "lucide-react";
import { useEnquiryModal } from "./EnquiryModal";

interface TrendItem {
  id: string;
  title: string;
  category: "UI/UX" | "Performance" | "AI & Future" | "Architecture";
  icon: typeof Smartphone;
  tag: string;
  shortDesc: string;
  fullDesc: string;
  businessImpact: string;
  implementation: string;
}

const TRENDS_DATA: TrendItem[] = [
  {
    id: "mobile-first",
    title: "Mobile-First Design Architecture",
    category: "UI/UX",
    icon: Smartphone,
    tag: "High Conversion",
    shortDesc: "Engineered from the smallest screen upwards for zero clutter and instant finger-tap navigation.",
    fullDesc: "Over 78% of commercial web traffic in India originates from smartphones. Mobile-first design prioritizes touch gestures, thumb-friendly navigation, adaptive media, and lightning-quick rendering before expanding to desktop.",
    businessImpact: "+42% increase in mobile conversion rates and Google Mobile-First Indexing compliance.",
    implementation: "Custom Tailwind CSS responsive tokens, fluid typography (clamp), and adaptive touch hitboxes.",
  },
  {
    id: "personalized-ux",
    title: "Personalized User Experiences (Dynamic UX)",
    category: "UI/UX",
    icon: UserCheck,
    tag: "Customer Retention",
    shortDesc: "Tailored content recommendations, dynamic landing sections, and geo-targeted offers.",
    fullDesc: "Modern web apps adapt content based on user location, past visit history, and device type. Rather than a static brochure, visitors see contextual messaging relevant to their city and industry.",
    businessImpact: "3x higher user engagement time and reduced bounce rates across tier-1 & tier-2 markets.",
    implementation: "Edge middleware personalization, Next.js Server Components, and localized data caching.",
  },
  {
    id: "dark-mode",
    title: "Adaptive Dark Mode & OLED Optimization",
    category: "UI/UX",
    icon: Moon,
    tag: "User Comfort",
    shortDesc: "Automatic system-preference detection with low-glare, contrast-optimized themes.",
    fullDesc: "Dark mode reduces eye fatigue in low-light environments and saves battery life on mobile OLED screens. Our dual-theme design systems ensure crystal-clear text readability in both light and dark modes.",
    businessImpact: "Reduces visual fatigue, elevates premium brand aesthetic, and keeps night shoppers engaged longer.",
    implementation: "CSS custom properties, media-query triggers (prefers-color-scheme), and zero-FOUC hydration.",
  },
  {
    id: "motion-ui",
    title: "Motion UI & Micro-Interactions",
    category: "UI/UX",
    icon: Activity,
    tag: "Visual Excellence",
    shortDesc: "Subtle hover states, physics-based scroll indicators, and interactive micro-animations.",
    fullDesc: "Static web pages feel dead. Motion UI uses lightweight 60 FPS transitions, interactive button feedbacks, and subtle scroll-triggered reveals to guide the user's eye naturally toward conversion funnels.",
    businessImpact: "Creates an unforgettable first impression, boosting user trust and perceived brand luxury.",
    implementation: "Hardware-accelerated CSS transforms and lightweight motion libraries with zero layout shifts (CLS).",
  },
  {
    id: "minimalist-design",
    title: "Modern Minimalist & Clean UI",
    category: "UI/UX",
    icon: Layout,
    tag: "Cognitive Ease",
    shortDesc: "Uncluttered whitespace, prominent typographic hierarchy, and distraction-free layouts.",
    fullDesc: "Minimalism removes visual noise, slow banners, and redundant elements. By focusing on intentional negative space and bold typography, users immediately understand your value proposition without overwhelm.",
    businessImpact: "Fast decision-making by prospects, higher form completions, and cleaner brand authority.",
    implementation: "Plus Jakarta Sans typography, curated color palettes, and focused single-call-to-action sections.",
  },
  {
    id: "speed-seo",
    title: "Speed Optimization for Google Core Web Vitals",
    category: "Performance",
    icon: Zap,
    tag: "SEO Visibility",
    shortDesc: "Sub-second Time-to-First-Byte (TTFB) and high Google PageSpeed Insights benchmarks.",
    fullDesc: "Speed is a direct Google ranking factor. Every 100ms delay drops conversion by 7%. We engineer websites with automated image modernizing (WebP/AVIF), font subsetting, and route pre-fetching.",
    businessImpact: "Enhanced search visibility, lower bounce rates, and rapid page rendering across mobile networks.",
    implementation: "Next.js SSR/SSG, CDN edge caching, and minimized Cumulative Layout Shift (CLS < 0.05).",
  },
  {
    id: "voice-search",
    title: "Voice Search & Conversational Query SEO",
    category: "Performance",
    icon: Mic,
    tag: "Future SEO",
    shortDesc: "Optimized for natural language queries from Google Assistant, Siri, and smart devices.",
    fullDesc: "Millions of users in India now search using voice commands in conversational language. We structure your website content with Question-Answer schema, FAQPage JSON-LD, and conversational long-tail keyword architecture.",
    businessImpact: "Captures featured voice snippets (Position 0) on Google search and voice-enabled smartphones.",
    implementation: "Schema.org SpeakableSpecification, structured FAQ microdata, and conversational semantic headings.",
  },
  {
    id: "responsive-fluid",
    title: "Responsive & Fluid Container Layouts",
    category: "Architecture",
    icon: MonitorSmartphone,
    tag: "Cross-Device",
    shortDesc: "Zero broken screens across 4K monitors, foldables, laptops, tablets, and budget phones.",
    fullDesc: "With hundreds of varied screen sizes in India, fixed-width layouts break. Fluid containers adapt proportionally using modern CSS Grid and Flexbox, guaranteeing pixel-perfect alignment anywhere.",
    businessImpact: "Uniform brand experience on every device with zero horizontal scrollbars or distorted graphics.",
    implementation: "CSS subgrid, dynamic viewport units (dvh/lvh), and responsive media query matrices.",
  },
  {
    id: "interactive-ui",
    title: "Interactive & Engaging Web Elements",
    category: "UI/UX",
    icon: Sparkles,
    tag: "High Engagement",
    shortDesc: "Live price calculators, dynamic tabs, before/after visual sliders, and interactive audits.",
    fullDesc: "Interactive components transform passive readers into active participants. When visitors engage with live estimators, quiz funnels, or preview tools, their purchase intent increases by over 60%.",
    businessImpact: "2.5x higher time on page and direct qualification of high-ticket enterprise inbound leads.",
    implementation: "Isomorphic React state machines, client hydration boundaries, and accessible ARIA attributes.",
  },
  {
    id: "advanced-security",
    title: "Advanced Data Security & SSL Architecture",
    category: "Architecture",
    icon: ShieldCheck,
    tag: "Enterprise Trust",
    shortDesc: "Military-grade HTTPS/TLS encryption, automated DDoS shielding, and sanitization.",
    fullDesc: "Security breaches destroy customer trust and Google rankings. We deploy automated Content Security Policies (CSP), sanitized input pipelines, rate limiting, and HTTP strict transport security.",
    businessImpact: "Protects sensitive customer data, ensures payment gateway compliance, and builds unshakeable credibility.",
    implementation: "HSTS headers, automated CORS controls, encrypted API routes, and cloud-edge DDoS firewalls.",
  },
  {
    id: "ai-chatbots",
    title: "AI-Powered Chatbots & Smart Lead Engines",
    category: "AI & Future",
    icon: Bot,
    tag: "24/7 Leads",
    shortDesc: "Instant customer support, automated qualification, and direct CRM/WhatsApp routing.",
    fullDesc: "Customers expect immediate answers at 11 PM or on weekends. AI agents instantly answer service queries, capture phone numbers, qualify budgets, and forward warm leads to your sales team.",
    businessImpact: "Zero missed inquiries, 24/7 lead capture, and immediate customer gratification.",
    implementation: "LLM-ready API connectors, headless chat interfaces, and automated WhatsApp/Email webhooks.",
  },
  {
    id: "pwa-integration",
    title: "Progressive Web Apps (PWAs) & Offline Mode",
    category: "Architecture",
    icon: DownloadCloud,
    tag: "App-Like Feel",
    shortDesc: "Installable directly from the browser with offline caching and native app speed.",
    fullDesc: "Progressive Web Apps combine the discoverability of a website with the app-like speed of native software. Users can add your website to their home screen without downloading from the App Store.",
    businessImpact: "80% smaller footprint than native apps, higher return customer retention, and offline accessibility.",
    implementation: "Service Workers, Web App Manifest, Cache API storage, and push notification triggers.",
  },
  {
    id: "ar-integration",
    title: "Augmented Reality (AR) & 3D Visualization",
    category: "AI & Future",
    icon: Eye,
    tag: "Next-Gen Visuals",
    shortDesc: "Interactive 3D product previews and WebGL demonstrations directly inside the browser.",
    fullDesc: "For e-commerce, real estate, and product platforms, AR lets prospects visualize products in real space before purchasing. WebGL and 3D viewers increase customer certainty.",
    businessImpact: "Up to 50% decrease in return rates and 40% increase in digital checkout completions.",
    implementation: "Three.js / WebGL optimization, lightweight glTF 3D models, and iOS/Android quick-look hooks.",
  },
  {
    id: "sustainability",
    title: "Sustainable & Green Web Engineering",
    category: "Performance",
    icon: Leaf,
    tag: "Eco-Friendly",
    shortDesc: "Ultra-lean codebases that consume 65% less server energy and bandwidth.",
    fullDesc: "Heavy, bloated websites waste gigabytes of data and cloud energy. Clean, optimized code with static generation reduces server CPU load, cutting carbon emissions while making the site blazing fast.",
    businessImpact: "Lower cloud hosting infrastructure costs, faster speeds on slow networks, and ESG compliance.",
    implementation: "Tree-shaken JavaScript bundles, zero unneeded libraries, and renewable-powered edge data centers.",
  },
];

const CATEGORIES = [
  "All Trends (14)",
  "UI/UX",
  "Performance",
  "AI & Future",
  "Architecture",
];

export default function LatestTrendsSection() {
  const [activeCategory, setActiveCategory] = useState("All Trends (14)");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const { openEnquiryModal } = useEnquiryModal();

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const filteredTrends =
    activeCategory === "All Trends (14)"
      ? TRENDS_DATA
      : TRENDS_DATA.filter((item) => item.category === activeCategory);

  const col1 = filteredTrends.filter((_, i) => i % 2 === 0);
  const col2 = filteredTrends.filter((_, i) => i % 2 === 1);

  const renderTrendCard = (trend: TrendItem) => {
    const Icon = trend.icon;
    const isExpanded = expandedId === trend.id;

    return (
      <div
        key={trend.id}
        className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
          isExpanded
            ? "bg-slate-850 border-[#ff6b1e]/60 shadow-xl shadow-[#ff6b1e]/10"
            : "bg-slate-950/70 border-slate-800/90 hover:border-slate-700 hover:bg-slate-850/60"
        }`}
      >
        {/* Header Clickable Bar */}
        <button
          type="button"
          onClick={() => toggleExpand(trend.id)}
          className="w-full p-3.5 sm:p-5 text-left flex items-center justify-between gap-3 sm:gap-4 cursor-pointer focus:outline-none"
          aria-expanded={isExpanded}
        >
          <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
            <div
              className={`flex h-9 w-9 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl transition-colors ${
                isExpanded
                  ? "bg-[#ff6b1e] text-white shadow-md shadow-[#ff6b1e]/30"
                  : "bg-slate-800 text-[#ff6b1e]"
              }`}
            >
              <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-0.5 sm:mb-1">
                <span className="text-xs sm:text-base font-bold text-white tracking-tight truncate">
                  {trend.title}
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 rounded-md bg-[#ff6b1e]/15 text-[#ff6b1e] text-[10px] font-bold border border-[#ff6b1e]/20">
                  {trend.tag}
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-400 line-clamp-1">
                {trend.shortDesc}
              </p>
            </div>
          </div>

          <div
            className={`flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-lg bg-slate-800/80 text-slate-300 transition-transform duration-300 ${
              isExpanded ? "rotate-180 bg-[#ff6b1e] text-white" : ""
            }`}
          >
            <ChevronDown className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </div>
        </button>

        {/* Expanded Drawer Details */}
        {isExpanded && (
          <div className="px-3.5 pb-4 pt-1 sm:px-6 sm:pb-6 border-t border-slate-800/80 animate-in fade-in slide-in-from-top-2 duration-200 space-y-3 sm:space-y-4">
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {trend.fullDesc}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#ff6b1e] block mb-1">
                  Business ROI
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {trend.businessImpact}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-400 block mb-1">
                  How We Engineer It
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {trend.implementation}
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
              <span className="inline-flex items-center gap-1.5 text-xs text-slate-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                100% Production Ready
              </span>

              <button
                type="button"
                onClick={() => openEnquiryModal({ service: trend.title })}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#ff6b1e] hover:text-[#ff8240] transition cursor-pointer"
              >
                <span>Implement this on your site</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <section
      className="py-8 sm:py-16 bg-slate-900 text-white relative overflow-hidden"
      id="trends"
      aria-labelledby="trends-heading"
    >
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 right-1/4 -z-10 w-[500px] h-[300px] bg-gradient-to-tr from-[#ff6b1e]/15 to-purple-600/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-10 -z-10 w-[400px] h-[300px] bg-gradient-to-br from-indigo-500/10 to-[#ff6b1e]/10 blur-3xl rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#ff6b1e]/30 bg-[#ff6b1e]/10 px-3.5 py-1 text-xs font-semibold text-[#ff6b1e] mb-2 sm:mb-3">
            <Sparkles className="h-3.5 w-3.5 text-[#ff6b1e]" />
            <span>2026 Web Engineering &amp; Design Standards</span>
          </div>

          <h2
            id="trends-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight"
          >
            Web Design and Development:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b1e] via-amber-400 to-[#ff6b1e]">
              Latest Trends
            </span>
          </h2>

          <p className="mt-2.5 sm:mt-3 text-xs sm:text-base text-slate-300 leading-relaxed">
            The digital landscape evolves at breakneck speed. Here are the 14 cutting-edge
            technologies and design principles we deploy to build future-proof, high-ranking
            web applications for modern businesses.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-4 sm:mt-6 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#ff6b1e] text-white shadow-lg shadow-[#ff6b1e]/30 scale-105"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-750 hover:text-white border border-slate-700/60"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 2 Independent Columns Grid (Prevents row stretching and blank space) */}
        <div className="mt-6 sm:mt-10 grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-6 items-start">
          {/* Left Column */}
          <div className="flex flex-col gap-3.5 sm:gap-6">
            {col1.map((trend) => renderTrendCard(trend))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-3.5 sm:gap-6">
            {col2.map((trend) => renderTrendCard(trend))}
          </div>
        </div>

        {/* Bottom Conversion Banner */}
        <div className="mt-8 sm:mt-16 rounded-2xl sm:rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-5 sm:p-10 text-center shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-2.5 sm:space-y-3">
            <h3 className="text-xl sm:text-3xl font-extrabold text-white">
              Want to Implement These 2026 Trends on Your Website?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Speak with our senior website engineers today. We analyze your existing site,
              benchmark against modern competitors, and provide a roadmap for 95+ speed and Google Rank 1.
            </p>
            <div className="pt-3 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
              <button
                type="button"
                onClick={() => openEnquiryModal({ service: "Next-Gen Trends Consultation" })}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#ff6b1e] px-6 py-3 sm:px-7 sm:py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-[#ff6b1e]/30 hover:bg-[#e55510] transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>Get Free Trend Feasibility Audit</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href="tel:+919990613140"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800/80 px-5 py-3 sm:px-6 sm:py-3.5 text-xs sm:text-sm font-bold text-slate-200 hover:border-[#ff6b1e] hover:text-[#ff6b1e] transition-all"
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
