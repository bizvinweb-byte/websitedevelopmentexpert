import Link from "next/link";
import Image from "next/image";
import { Globe, Mail, Phone, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/seo-data";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="border-t border-slate-100 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 pt-10 pb-24 sm:py-16 sm:px-6 lg:px-8">
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
              India&apos;s premier web development and digital engineering firm. We
              engineer Google Page 1 SEO compliant, high-conversion web
              applications for ambitious businesses.
            </p>
            <div className="flex flex-col gap-2 pt-2 text-xs text-slate-300">
              <span className="inline-flex items-start gap-2">
                <MapPin className="h-4 w-4 text-[#ff6b1e] shrink-0 mt-0.5" />
                <span>
                  {siteConfig.address.street}, {siteConfig.address.city},{" "}
                  {siteConfig.address.region} - {siteConfig.address.postalCode}
                </span>
              </span>
              <a
                href="tel:+919990613140"
                className="inline-flex items-center gap-2 hover:text-[#ff6b1e] transition-colors"
              >
                <Phone className="h-4 w-4 text-[#ff6b1e] shrink-0" />
                <span>{siteConfig.phone}</span>
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 hover:text-[#ff6b1e] transition-colors"
              >
                <Mail className="h-4 w-4 text-[#ff6b1e] shrink-0" />
                <span>{siteConfig.email}</span>
              </a>
            </div>
          </div>

          {/* Core Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
              <li>
                <Link
                  href="/#services"
                  className="hover:text-[#ff6b1e] transition"
                >
                  Custom Web Apps
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="hover:text-[#ff6b1e] transition"
                >
                  Next.js Engineering
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="hover:text-[#ff6b1e] transition"
                >
                  Shopify &amp; E-Commerce
                </Link>
              </li>
              <li>
                <Link
                  href="/#tech-stack"
                  className="hover:text-[#ff6b1e] transition"
                >
                  Technologies &amp; Frameworks
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="hover:text-[#ff6b1e] transition"
                >
                  UI/UX Architecture
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="hover:text-[#ff6b1e] transition"
                >
                  Technical SEO Audit
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
              <li>
                <Link
                  href="/#solutions"
                  className="hover:text-[#ff6b1e] transition"
                >
                  Why WebDev Expert
                </Link>
              </li>
              <li>
                <Link
                  href="/#process"
                  className="hover:text-[#ff6b1e] transition"
                >
                  Our Process
                </Link>
              </li>
              <li>
                <Link
                  href="/#trends"
                  className="hover:text-[#ff6b1e] transition"
                >
                  Latest Trends 2026
                </Link>
              </li>
              <li>
                <Link
                  href="/#faqs"
                  className="hover:text-[#ff6b1e] transition"
                >
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="hover:text-[#ff6b1e] transition"
                >
                  Contact Our Engineers
                </Link>
              </li>
            </ul>
          </div>

          {/* SEO & Compliance Standards */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              SEO Standards
            </h3>
            <ul className="mt-4 space-y-2 text-xs text-slate-400">
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                100% Core Web Vitals Ready
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                Schema.org JSON-LD Enabled
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                Canonical &amp; OpenGraph Tags
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                Automated XML Sitemap
              </li>
            </ul>
          </div>
        </div>

        {/* Popular Locations & SEO Keywords Bar */}
        <div className="mt-10 pt-8 border-t border-slate-800/80">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#ff6b1e]" />
            <span>Popular Service Locations Across India</span>
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-500">
            <Link
              href="/services/website-development-company-in-noida"
              className="hover:text-[#ff6b1e] transition"
            >
              Website Development Company in Noida
            </Link>
            <span className="text-slate-700">•</span>
            <Link
              href="/services/website-development-company-in-delhi"
              className="hover:text-[#ff6b1e] transition"
            >
              Website Development Company in Delhi
            </Link>
            <span className="text-slate-700">•</span>
            <Link
              href="/services/website-development-company-in-gurugram"
              className="hover:text-[#ff6b1e] transition"
            >
              Website Development Company in Gurugram
            </Link>
            <span className="text-slate-700">•</span>
            <Link
              href="/services/website-development-company-in-greater-noida"
              className="hover:text-[#ff6b1e] transition"
            >
              Website Development Company in Greater Noida
            </Link>
            <span className="text-slate-700">•</span>
            <Link
              href="/services/website-development-company-in-mumbai"
              className="hover:text-[#ff6b1e] transition"
            >
              Website Development Company in Mumbai
            </Link>
            <span className="text-slate-700">•</span>
            <Link
              href="/services/website-development-company-in-bengaluru"
              className="hover:text-[#ff6b1e] transition"
            >
              Website Development Company in Bengaluru
            </Link>
            <span className="text-slate-700">•</span>
            <Link
              href="/services/website-development-company-in-hyderabad"
              className="hover:text-[#ff6b1e] transition"
            >
              Website Development Company in Hyderabad
            </Link>
            <span className="text-slate-700">•</span>
            <Link
              href="/services/website-development-company-in-pune"
              className="hover:text-[#ff6b1e] transition"
            >
              Website Development Company in Pune
            </Link>
            <span className="text-slate-700">•</span>
            <Link
              href="/services/website-development-company-in-ahmedabad"
              className="hover:text-[#ff6b1e] transition"
            >
              Website Development Company in Ahmedabad
            </Link>
            <span className="text-slate-700">•</span>
            <Link
              href="/services/website-development-company-in-jaipur"
              className="hover:text-[#ff6b1e] transition"
            >
              Website Development Company in Jaipur
            </Link>
            <span className="text-slate-700">•</span>
            <Link
              href="/services/website-development-company-in-lucknow"
              className="hover:text-[#ff6b1e] transition"
            >
              Website Development Company in Lucknow
            </Link>
            <span className="text-slate-700">•</span>
            <Link
              href="/services/website-development-company-in-kolkata"
              className="hover:text-[#ff6b1e] transition"
            >
              Website Development Company in Kolkata
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
            . All rights reserved.
          </p>
          <div className="flex gap-6">
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
