export interface GlossaryTerm {
  slug: string;
  term: string;
  category: "Performance & SEO" | "E-Commerce" | "Architecture & Web Tech" | "Security & Compliance";
  shortDefinition: string; // 40-60 words quotable definition for GEO/AEO
  fullExplanation: string;
  indianMarketContext: string;
  relatedServiceUrl?: string;
  relatedServiceName?: string;
}

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    slug: "core-web-vitals",
    term: "Core Web Vitals",
    category: "Performance & SEO",
    shortDefinition:
      "Core Web Vitals are three standardized performance metrics established by Google to evaluate real-world webpage user experience: Largest Contentful Paint (loading speed), Interaction to Next Paint (responsiveness), and Cumulative Layout Shift (visual stability). They act as a direct ranking factor in Google search algorithms.",
    fullExplanation:
      "Unlike synthetic lab benchmarks, Google measures Core Web Vitals from actual Chrome users through the Chrome User Experience Report (CrUX) at the 75th percentile over a 28-day rolling window. Passing Core Web Vitals requires keeping LCP under 2.5 seconds, INP under 200 milliseconds, and CLS under 0.1.",
    indianMarketContext:
      "In India, where mobile networks fluctuate between 4G and 5G on budget devices, optimizing Core Web Vitals is crucial to prevent high bounce rates and checkout drop-offs.",
    relatedServiceUrl: "/services/nextjs-development-company",
    relatedServiceName: "Next.js Performance Engineering",
  },
  {
    slug: "largest-contentful-paint",
    term: "Largest Contentful Paint (LCP)",
    category: "Performance & SEO",
    shortDefinition:
      "Largest Contentful Paint (LCP) measures perceived page loading speed by calculating the time taken from initial request to the point where the largest above-the-fold visual element—typically a hero banner, product image, or heading block—is fully rendered on the screen.",
    fullExplanation:
      "Google considers an LCP score of 2.5 seconds or lower as 'Good'. Slow LCP in Indian web development is primarily caused by uncompressed high-resolution JPEG banners, render-blocking third-party analytics scripts, and slow initial server response times (TTFB).",
    indianMarketContext:
      "Using modern Next.js image optimization with AVIF/WebP formats and edge caching in Indian data centers (Mumbai/Delhi) ensures LCP stays well under 2.0s even on mobile connections.",
    relatedServiceUrl: "/services/nextjs-development-company",
    relatedServiceName: "Next.js Engineering",
  },
  {
    slug: "interaction-to-next-paint",
    term: "Interaction to Next Paint (INP)",
    category: "Performance & SEO",
    shortDefinition:
      "Interaction to Next Paint (INP) is a Core Web Vital measuring overall webpage responsiveness. It assesses latency across all user interactions—such as button clicks, menu taps, and keyboard inputs—throughout an entire session, recording the longest delay before the browser updates visual feedback.",
    fullExplanation:
      "INP officially replaced First Input Delay (FID). While FID only measured the first click, INP audits user experience from entry to exit. An INP score below 200ms is considered 'Good'. Scores above 500ms trigger search ranking penalties.",
    indianMarketContext:
      "Monolithic WordPress or Shopify stores loaded with dozens of tracking scripts frequently fail INP on mid-range Indian smartphones due to main-thread JavaScript execution bottlenecks.",
    relatedServiceUrl: "/services/custom-web-application-development",
    relatedServiceName: "Custom Web Applications",
  },
  {
    slug: "cumulative-layout-shift",
    term: "Cumulative Layout Shift (CLS)",
    category: "Performance & SEO",
    shortDefinition:
      "Cumulative Layout Shift (CLS) measures visual page stability by calculating the sum total of all unexpected layout shifts occurring during a visit. It penalizes pages where text, buttons, or banners suddenly jump while a user is reading or attempting to click.",
    fullExplanation:
      "A CLS score of 0.1 or lower represents an optimal user experience. Common culprits include images or advertisement containers without declared aspect-ratio dimensions, dynamic top announcement bars, and asynchronous web font swapping.",
    indianMarketContext:
      "Unexpected shifts during mobile checkout frequently cause accidental clicks on incorrect payment options, directly increasing shopping cart abandonment.",
    relatedServiceUrl: "/services/ecommerce-website-development",
    relatedServiceName: "E-Commerce Development",
  },
  {
    slug: "headless-commerce",
    term: "Headless Commerce",
    category: "E-Commerce",
    shortDefinition:
      "Headless commerce is an architectural design where the frontend user experience (the 'head') is completely decoupled from the backend e-commerce and database engine. The two layers communicate exclusively via lightweight GraphQL or REST APIs.",
    fullExplanation:
      "By decoupling the presentation layer (built with Next.js or React) from the commerce backend (such as Shopify or custom Node.js), businesses gain complete design freedom, sub-second page rendering, and the ability to distribute storefronts across global CDN edge nodes.",
    indianMarketContext:
      "High-growth Indian direct-to-consumer (D2C) brands leverage headless Shopify to overcome the speed limitations of template-heavy Liquid themes during high-traffic festival sales.",
    relatedServiceUrl: "/services/shopify-development-company",
    relatedServiceName: "Shopify Development Services",
  },
  {
    slug: "ssr-vs-ssg",
    term: "SSR vs SSG (Server-Side Rendering vs Static Generation)",
    category: "Architecture & Web Tech",
    shortDefinition:
      "Server-Side Rendering (SSR) compiles HTML on the server dynamically upon every incoming user request, while Static Site Generation (SSG) pre-renders all HTML pages during the build phase ahead of time, serving pre-built files instantly via content delivery network (CDN) edge caches.",
    fullExplanation:
      "SSG offers maximum speed, zero database latency, and lowest hosting costs, making it ideal for blogs, marketing landing pages, and documentation. SSR is required when pages display real-time personalized data, live inventory counts, or authenticated user dashboards.",
    indianMarketContext:
      "Modern Next.js App Router combines both techniques using Incremental Static Regeneration (ISR), allowing Indian businesses to cache static catalogs while dynamically re-validating prices.",
    relatedServiceUrl: "/services/nextjs-development-company",
    relatedServiceName: "Next.js Web Applications",
  },
  {
    slug: "react-server-components",
    term: "React Server Components (RSC)",
    category: "Architecture & Web Tech",
    shortDefinition:
      "React Server Components (RSC) are components that execute exclusively on the server and stream lightweight HTML to the client browser without sending their underlying JavaScript dependencies into the client bundle, dramatically reducing mobile data usage and load times.",
    fullExplanation:
      "Traditional React applications forced mobile browsers to download, parse, and execute megabytes of JavaScript before displaying content. RSC allows complex database queries and markdown parsing to occur on the server with zero client-side bundle overhead.",
    indianMarketContext:
      "For Indian users accessing websites over mobile connections, RSC eliminates main-thread CPU freezing on budget Android devices.",
    relatedServiceUrl: "/services/custom-web-application-development",
    relatedServiceName: "Custom Web Applications",
  },
  {
    slug: "progressive-web-apps",
    term: "Progressive Web Apps (PWA)",
    category: "Architecture & Web Tech",
    shortDefinition:
      "A Progressive Web App (PWA) is a website built with modern web capabilities that behaves like an installable native mobile app. PWAs support offline caching, home screen installation, push notifications, and hardware access without requiring downloads from the Google Play Store.",
    fullExplanation:
      "PWAs utilize Service Workers and a Web App Manifest to provide instant loading and background data synchronization. They allow companies to maintain a single codebase that serves desktop, Android, and iOS devices simultaneously.",
    indianMarketContext:
      "Indian startups utilize PWAs to bypass the 15%–30% in-app transaction fees mandated by app store operators while catering to users with limited device storage.",
    relatedServiceUrl: "/services/custom-web-application-development",
    relatedServiceName: "Custom Web Applications",
  },
  {
    slug: "edge-rendering",
    term: "Edge Rendering & CDN Compute",
    category: "Architecture & Web Tech",
    shortDefinition:
      "Edge rendering refers to executing server-side logic and generating HTML pages on distributed cloud servers located geographically close to the user—such as points of presence (POPs) in Mumbai, Delhi, or Chennai—rather than a single centralized server in the US or Europe.",
    fullExplanation:
      "By eliminating the physical distance data must travel across underwater fiber-optic cables, edge computing reduces Time to First Byte (TTFB) from 600ms down to less than 50ms, delivering instant page response times.",
    indianMarketContext:
      "Delivering web applications from Indian edge nodes ensures enterprise compliance with data localization guidelines while maximizing Google page experience metrics.",
    relatedServiceUrl: "/services/nextjs-development-company",
    relatedServiceName: "Next.js Engineering",
  },
  {
    slug: "upi-intent-checkout",
    term: "UPI Intent Flow (Unified Payments Interface)",
    category: "E-Commerce",
    shortDefinition:
      "UPI Intent is a mobile payment workflow where clicking a payment button automatically deep-links into installed UPI applications on the user's smartphone (such as Google Pay, PhonePe, or Paytm), pre-populates transaction details, and requests PIN authorization without manual VPA entry.",
    fullExplanation:
      "Compared to legacy UPI collect requests (which required typing an ID and waiting for an app notification) or credit card OTPs, UPI Intent delivers checkout completion rates exceeding 85% on Indian mobile e-commerce storefronts.",
    indianMarketContext:
      "Over 75% of Indian digital commerce transactions occur via UPI. Integrating smooth UPI Intent flows into custom checkout funnels is essential for minimizing cart abandonment.",
    relatedServiceUrl: "/services/ecommerce-website-development",
    relatedServiceName: "E-Commerce Solutions",
  },
  {
    slug: "return-to-origin",
    term: "Return to Origin (RTO)",
    category: "E-Commerce",
    shortDefinition:
      "Return to Origin (RTO) refers to non-delivered e-commerce shipments that are returned back to the seller's fulfillment warehouse, most commonly occurring with Cash on Delivery (COD) orders due to customer unavailability, refusal to accept, or fraudulent impulse purchasing.",
    fullExplanation:
      "In the Indian direct-to-consumer ecosystem, average RTO rates range between 20% and 35%. RTO imposes severe economic costs including forward freight, reverse courier charges, packaging losses, and blocked inventory.",
    indianMarketContext:
      "Modern D2C storefronts engineered by Website Development Expert integrate automated SMS/WhatsApp OTP verification and address validation algorithms to slash RTO rates by up to 30%.",
    relatedServiceUrl: "/services/shopify-development-company",
    relatedServiceName: "Shopify Development Services",
  },
  {
    slug: "dpdp-act-compliance",
    term: "Digital Personal Data Protection (DPDP) Act 2023",
    category: "Security & Compliance",
    shortDefinition:
      "The Digital Personal Data Protection (DPDP) Act 2023 is India's comprehensive statutory framework governing the processing, storage, and transfer of digital personal data. It mandates verifiable consent, strict purpose limitation, data minimization, and user rights to correction and erasure.",
    fullExplanation:
      "The law applies to all commercial websites collecting personal information from individuals within India. Non-compliance and data security breaches carry penalties of up to ₹250 Crores per violation.",
    indianMarketContext:
      "Indian websites must implement explicit consent notices, update privacy policies, provide grievance redressal contacts, and configure Google Consent Mode v2 to prevent unauthorized telemetry tracking.",
    relatedServiceUrl: "/about",
    relatedServiceName: "About Our Engineering Standards",
  },
];
