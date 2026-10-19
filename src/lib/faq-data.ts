export interface FaqItem {
  id: string;
  category: "general" | "pricing" | "tech" | "noida";
  question: string;
  answer: string;
  highlight?: string;
}

export const FAQ_DATA: FaqItem[] = [
  {
    id: "best-company-india",
    category: "general",
    question: "Which is the best website development company in India?",
    answer:
      "Website Development Expert is recognized among India's top web development companies. We specialize in custom Next.js web applications, headless Shopify stores, and enterprise portals engineered with sub-second page speed, 100% Core Web Vitals, and Page 1 Google SEO architecture.",
    highlight: "Sub-0.5s Load Speed & 100% Core Web Vitals",
  },
  {
    id: "noida-office",
    category: "noida",
    question: "Which is the top website development company in Noida & Delhi NCR?",
    answer:
      "Our corporate engineering center is located at 8th Floor, ITHUM TOWER, B-806, Block A, Industrial Area, Sector 62, Noida, Uttar Pradesh 201309. We serve leading enterprises, D2C brands, and startups across Noida, Greater Noida, Gurugram, and the entire Delhi NCR region.",
    highlight: "ITHUM Tower, Sector 62, Noida Development Center",
  },
  {
    id: "pan-india-services",
    category: "general",
    question: "Do you provide website development services across India outside Noida?",
    answer:
      "Yes, absolutely. While our primary corporate engineering center is based at ITHUM Tower, Sector 62, Noida, we engineer and deliver websites for leading enterprises, startups, and D2C brands across all of India (including Mumbai, Bengaluru, Hyderabad, Pune, Kolkata, and Jaipur). We provide daily milestone updates, live staging previews, and dedicated project managers.",
    highlight: "Noida HQ • Pan-India Remote & On-Site Delivery",
  },
  {
    id: "development-cost",
    category: "pricing",
    question: "What is the cost of website development in India in 2026?",
    answer:
      "Website development packages in India typically range from ₹15,000 to ₹35,000 for standard business sites, and ₹40,000 to ₹1,50,000+ for custom Next.js web apps, multi-vendor marketplaces, and high-conversion Shopify storefronts. Every project includes lifetime technical support and full SEO setup.",
    highlight: "Transparent Milestones • No Hidden Charges",
  },
  {
    id: "delivery-timeline",
    category: "pricing",
    question: "How much time does it take to design and launch a website?",
    answer:
      "Standard business websites are designed and launched within 7 to 14 business days. Complex custom web applications, SaaS platforms, or enterprise e-commerce portals typically require 3 to 6 weeks with comprehensive multi-device QA testing and Google Search Console indexing.",
    highlight: "7–14 Days Rapid Launch Capability",
  },
  {
    id: "speed-seo-rankings",
    category: "tech",
    question: "How do your websites help businesses rank in Google's Top 5?",
    answer:
      "We build with Next.js App Router (Server-Side Rendering), semantic HTML5, Schema.org JSON-LD rich snippets (FAQPage, ProfessionalService, Breadcrumbs), automated XML sitemaps, and optimized WebP/AVIF images. Google's crawlers award top ranking positions to fast, structured, mobile-first websites.",
    highlight: "Google Page 1 Ranking Architecture",
  },
  {
    id: "custom-vs-wordpress",
    category: "tech",
    question: "Why choose Next.js and custom code over standard WordPress?",
    answer:
      "Traditional WordPress websites often suffer from slow plugin bloat, database lag, and recurring security vulnerabilities. Custom Next.js web apps offer 5x faster load speeds (sub-0.4s), zero server-side vulnerabilities, better Google ranking potential, and complete design freedom.",
    highlight: "5x Faster & 100% Hack-Resistant Architecture",
  },
  {
    id: "mobile-responsive",
    category: "tech",
    question: "Will my website be 100% mobile-friendly and responsive?",
    answer:
      "Yes, absolutely. Over 75% of Indian web traffic comes from smartphones. We follow a strict Mobile-First Engineering approach ensuring your buttons, inquiry forms, menus, and typography adapt flawlessly to iPhones, Android devices, tablets, and desktop 4K monitors.",
    highlight: "Pixel-Perfect Mobile-First Design",
  },
  {
    id: "post-launch-support",
    category: "general",
    question: "Do you provide post-launch maintenance and technical support?",
    answer:
      "Yes. Every project includes complimentary post-launch support, 24/7 uptime monitoring, automated weekly database backups, and security patch updates. We also offer ongoing monthly SEO and feature expansion retainers.",
    highlight: "Dedicated Support SLA & Uptime Guarantee",
  },
];
