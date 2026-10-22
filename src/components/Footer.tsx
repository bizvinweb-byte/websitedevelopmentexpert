import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Building2, CheckCircle2 } from "lucide-react";
import { siteConfig, ncrCities, topRemoteCities, toSlug } from "@/lib/seo-data";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="border-t border-slate-100 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 pt-12 pb-24 sm:py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand & Overview */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex flex-col gap-1.5">
              <Link
                href="/"
                className="inline-flex items-center rounded-2xl bg-white px-4 py-2.5 shadow-md hover:scale-102 transition-transform border border-slate-200/20 w-fit"
                aria-label="Website Development Expert Home"
              >
                <Image
                  src="/images/webdev-logo.png"
                  alt="Website Development Expert - Web & Shopify Development"
                  width={220}
                  height={52}
                  className="h-9 sm:h-10 w-auto object-contain"
                />
              </Link>
              <div className="pt-1">
                <a
                  href={siteConfig.parentCompany.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#ff6b1e] hover:text-white transition tracking-wide"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b1e]"></span>
                  A Specialized Venture of Brandmingo ↗
                </a>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Noida-based web development and digital engineering firm. We engineer high-speed Next.js web applications, Shopify stores, and enterprise custom websites for businesses across India.
            </p>

            {/* Honest Office Location Banner */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-3 text-xs text-slate-300 space-y-2">
              <div className="flex items-start gap-2">
                <Building2 className="h-4 w-4 text-[#ff6b1e] shrink-0 mt-0.5" />
                <span className="font-semibold text-white">
                  Sole Physical Office (Noida HQ):
                </span>
              </div>
              <div className="flex items-start gap-2 pl-6">
                <MapPin className="h-3.5 w-3.5 text-slate-400 shrink-0 mt-0.5" />
                <span className="text-slate-400">
                  {siteConfig.address.building}, {siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.region} - {siteConfig.address.postalCode}
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-4 pl-6 pt-1 text-slate-300">
                <a
                  href="tel:+919990613140"
                  className="inline-flex items-center gap-1.5 hover:text-[#ff6b1e] transition-colors"
                >
                  <Phone className="h-3.5 w-3.5 text-[#ff6b1e]" />
                  <span>{siteConfig.phone}</span>
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-1.5 hover:text-[#ff6b1e] transition-colors"
                >
                  <Mail className="h-3.5 w-3.5 text-[#ff6b1e]" />
                  <span>{siteConfig.email}</span>
                </a>
              </div>
              <p className="text-[11px] text-slate-400 pl-6 border-t border-slate-800/60 pt-2 leading-relaxed">
                We serve clients across ALL of India via video calls, WhatsApp, and email, with on-site visits arranged upon request. We maintain NO offices outside Noida.
              </p>
            </div>
          </div>

          {/* National Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              National Services
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
              <li>
                <Link
                  href="/services/custom-web-application-development"
                  className="hover:text-[#ff6b1e] transition"
                >
                  Custom Web Apps
                </Link>
              </li>
              <li>
                <Link
                  href="/services/shopify-development-company"
                  className="hover:text-[#ff6b1e] transition"
                >
                  Shopify Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/nextjs-development-company"
                  className="hover:text-[#ff6b1e] transition"
                >
                  Next.js Engineering
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ecommerce-website-development"
                  className="hover:text-[#ff6b1e] transition"
                >
                  E-Commerce Platforms
                </Link>
              </li>
              <li>
                <Link
                  href="/services/wordpress-website-development"
                  className="hover:text-[#ff6b1e] transition"
                >
                  WordPress Development
                </Link>
              </li>
              <li>
                <Link
                  href="/website-development-cost-in-india"
                  className="hover:text-[#ff6b1e] text-[#ff6b1e] font-medium transition"
                >
                  Website Cost in India 2026
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Resources */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Company &amp; Hubs
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
              <li>
                <Link
                  href="/website-development-company-in-india"
                  className="hover:text-[#ff6b1e] transition"
                >
                  India-Wide Hub
                </Link>
              </li>
              <li>
                <Link
                  href="/website-development-company-in-noida"
                  className="hover:text-[#ff6b1e] transition"
                >
                  Noida HQ Office
                </Link>
              </li>
              <li>
                <Link
                  href="/areas-we-serve"
                  className="hover:text-[#ff6b1e] transition"
                >
                  Areas We Serve
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#ff6b1e] transition"
                >
                  About Brandmingo
                </Link>
              </li>
              <li>
                <Link
                  href="/reviews"
                  className="hover:text-[#ff6b1e] text-slate-300 font-medium transition"
                >
                  Client Reviews &amp; Ratings
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/seo-checker"
                  className="hover:text-[#ff6b1e] text-[#ff6b1e] font-medium transition"
                >
                  Free Website SEO Checker
                </Link>
              </li>
              <li>
                <Link
                  href="/glossary"
                  className="hover:text-[#ff6b1e] transition"
                >
                  Tech &amp; SEO Glossary
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="hover:text-[#ff6b1e] transition"
                >
                  Portfolio &amp; Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-[#ff6b1e] transition"
                >
                  Technical Blog &amp; Guides
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#ff6b1e] transition"
                >
                  Contact Noida Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Technical Engineering Standards */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Engineering Standards
            </h3>
            <ul className="mt-4 space-y-2 text-xs text-slate-400">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Next.js App Router &amp; SSR</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Core Web Vitals Optimization</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Schema.org JSON-LD Markup</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Semantic HTML5 Architecture</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Clean Typescript &amp; Tailwind CSS</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Automated XML Sitemap Push</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Delhi NCR Local Service Corridor */}
        <div className="mt-10 pt-8 border-t border-slate-800/80">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#ff6b1e]" />
            <span>Delhi NCR Local Corridor (Engineered at Noida HQ, Sector 62)</span>
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-400">
            {ncrCities.map((loc, idx) => (
              <span key={loc.city} className="flex items-center gap-3">
                <Link
                  href={`/${toSlug(loc.city)}`}
                  className="hover:text-[#ff6b1e] transition"
                >
                  Web Development {loc.city}
                </Link>
                {idx < ncrCities.length - 1 && <span className="text-slate-700">•</span>}
              </span>
            ))}
          </div>
        </div>

        {/* Top 10 Pan-India Remote Service Hubs */}
        <div className="mt-6 pt-6 border-t border-slate-800/60">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#ff6b1e]" />
            <span>Top National Hubs (Remote Project Delivery across India)</span>
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-500">
            {topRemoteCities.map((loc, idx) => (
              <span key={loc.city} className="flex items-center gap-3">
                <Link
                  href={`/${toSlug(loc.city)}`}
                  className="hover:text-[#ff6b1e] transition text-slate-400"
                >
                  Website Development {loc.city}
                </Link>
                {idx < topRemoteCities.length - 1 && <span className="text-slate-700">•</span>}
              </span>
            ))}
            <span className="text-slate-700">•</span>
            <Link
              href="/areas-we-serve"
              className="text-[#ff6b1e] hover:underline font-semibold"
            >
              View All Served Regions →
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-slate-800/80 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            © {currentYear} Website Development Expert — A Venture of{" "}
            <a
              href={siteConfig.parentCompany.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white underline font-medium transition"
            >
              Brandmingo
            </a>
            . Headquartered at Sector 62, Noida. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-5">
            <Link
              href="/privacy-policy"
              className="hover:text-slate-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="hover:text-slate-400 transition-colors"
            >
              Terms &amp; Conditions
            </Link>
            <Link
              href="/sitemap.xml"
              className="hover:text-slate-400 transition-colors"
            >
              XML Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
