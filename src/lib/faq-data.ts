export interface FaqItem {
  id: string;
  category: "general" | "pricing" | "tech" | "noida";
  question: string;
  answer: string;
  highlight?: string;
}

export const FAQ_DATA: FaqItem[] = [
  {
    id: "services-overview",
    category: "general",
    question: "What web development services does Website Development Expert provide?",
    answer:
      "We provide full-stack web engineering services from our Noida headquarters, including custom Next.js web applications, Shopify e-commerce development, modern WordPress/WooCommerce builds, technical SEO architecture, and mobile-first responsive UI/UX design for businesses across India.",
    highlight: "Custom Next.js, Shopify & Full-Stack Solutions",
  },
  {
    id: "noida-office",
    category: "noida",
    question: "Where is your office located, and can clients visit in person?",
    answer:
      "Our sole physical office is located at 8th Floor, ITHUM Tower, B-806, Block A, Industrial Area, Sector 62, Noida, Uttar Pradesh 201309. Clients from Noida, Delhi, Gurugram, and the wider NCR are welcome to visit our office for in-person project meetings during working hours (Monday to Saturday, 9:00 AM to 7:00 PM).",
    highlight: "ITHUM Tower, Sector 62, Noida HQ",
  },
  {
    id: "pan-india-services",
    category: "general",
    question: "How do you work with clients located outside Noida across India?",
    answer:
      "We serve clients throughout India completely remotely with structured communication: kickoff calls via Google Meet or Zoom, dedicated WhatsApp groups for daily coordination, Figma links for visual approvals, and private staging links to test code updates before production releases. On-site visits can also be scheduled for key project milestones.",
    highlight: "Noida HQ • Pan-India Remote Delivery",
  },
  {
    id: "development-cost",
    category: "pricing",
    question: "What is the typical cost of website development in India in 2026?",
    answer:
      "Development costs depend on scope, technology, and functionality. Standard corporate websites typically start around ₹20,000 to ₹40,000, while custom e-commerce stores, headless Shopify builds, and full-stack Next.js web applications range from ₹50,000 to ₹1,80,000+ depending on database architecture and custom integrations. We provide itemized, fixed-price proposals.",
    highlight: "Transparent Milestones • Fixed-Scope Proposals",
  },
  {
    id: "delivery-timeline",
    category: "pricing",
    question: "What are the typical project delivery timelines?",
    answer:
      "Standard business websites generally take 2 to 3 weeks from wireframe approval to launch. Complex e-commerce platforms and custom web applications typically require 4 to 8 weeks, structured into transparent sprints with regular milestone reviews.",
    highlight: "Structured Sprints • 2–6 Weeks Realistic Timelines",
  },
  {
    id: "speed-seo-rankings",
    category: "tech",
    question: "How do you engineer websites for technical SEO and search visibility?",
    answer:
      "We follow Google Search Essentials and Web Vitals best practices: semantic HTML5 tags, server-side rendering with Next.js App Router for rapid indexing, accurate Schema.org JSON-LD structured data, responsive images with next/image, clean canonical tags, and automated XML sitemaps.",
    highlight: "Semantic HTML5, Schema.org & App Router SSR",
  },
  {
    id: "custom-vs-wordpress",
    category: "tech",
    question: "When should a business choose Next.js over WordPress or Shopify?",
    answer:
      "WordPress is ideal for content-heavy blogs and editorial sites with familiar admin workflows. Shopify is the standard for fast-moving retail e-commerce. Next.js is recommended for custom web applications, SaaS dashboards, complex API integrations, and businesses demanding high frontend performance without CMS plugin bloat.",
    highlight: "Right Architecture for Your Specific Business Model",
  },
  {
    id: "mobile-responsive",
    category: "tech",
    question: "Are your websites built for mobile devices and varied network conditions?",
    answer:
      "Yes. We design mobile-first because over 75% of Indian web users browse on smartphones and 4G/5G mobile connections. Layouts, touch targets, font scaling, and image payloads are optimized to load smoothly across all mobile devices and network speeds.",
    highlight: "Mobile-First Design & Network Optimized",
  },
  {
    id: "post-launch-support",
    category: "general",
    question: "Do you offer post-launch maintenance and technical support?",
    answer:
      "Yes. Every deployment includes post-launch monitoring, bug fixes, automated database backups, and security patch updates. We also offer ongoing monthly maintenance and feature enhancement retainers tailored to growing businesses.",
    highlight: "Post-Launch Monitoring & Maintenance Retainers",
  },
];
