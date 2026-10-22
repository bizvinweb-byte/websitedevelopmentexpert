"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Menu,
  X,
  PhoneCall,
  Code2,
  ShoppingBag,
  Layers,
  Sparkles,
  ChevronDown,
  Globe2,
  Building2,
  DollarSign,
  Cpu,
  BookOpen,
  Star,
  Wrench,
  MapPin,
} from "lucide-react";
import { siteConfig } from "@/lib/seo-data";
import { useEnquiryModal } from "@/components/EnquiryModal";

export default function Header() {
  const { openEnquiryModal } = useEnquiryModal();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [locationsDropdownOpen, setLocationsDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/95 backdrop-blur-md transition-all shadow-2xs">
      <div className="mx-auto flex h-16 sm:h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo - Clean, prominent, no squishing badge */}
        <div className="flex items-center shrink-0">
          <Link
            href="/"
            className="group flex items-center transition-transform hover:scale-102"
            aria-label="Website Development Expert Home"
          >
            <Image
              src="/images/webdev-logo.png"
              alt="Website Development Expert"
              width={220}
              height={48}
              className="h-9 sm:h-11 w-auto object-contain"
              priority
            />
          </Link>
        </div>

        {/* Clean, Streamlined Desktop Navigation (6 Focused Tabs, No Overcrowding) */}
        <nav
          className="hidden lg:flex items-center gap-6 xl:gap-7 text-sm font-medium text-slate-700"
          aria-label="Primary Navigation"
        >
          {/* Services Dropdown */}
          <div
            className="relative group py-2"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button
              type="button"
              className="cursor-pointer flex items-center gap-1 hover:text-[#ff6b1e] transition-colors focus:outline-none py-1"
              aria-expanded={servicesDropdownOpen}
            >
              <span>Services</span>
              <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180 text-slate-400 group-hover:text-[#ff6b1e]" />
            </button>

            <div className="absolute left-0 top-full hidden group-hover:flex flex-col w-84 bg-white rounded-2xl shadow-xl border border-slate-100 p-3 z-50 animate-in fade-in-50 duration-150">
              <Link
                href="/services/custom-web-application-development"
                className="p-2.5 rounded-xl hover:bg-[#fff5ee] group/item transition flex items-start gap-3"
              >
                <div className="p-2 rounded-lg bg-[#fff5ee] text-[#ff6b1e] group-hover/item:bg-[#ff6b1e] group-hover/item:text-white transition">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800 group-hover/item:text-[#ff6b1e]">
                    Custom Web Applications
                  </p>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Scalable full-stack Next.js &amp; React apps
                  </p>
                </div>
              </Link>

              <Link
                href="/services/shopify-development-company"
                className="p-2.5 rounded-xl hover:bg-[#fff5ee] group/item transition flex items-start gap-3"
              >
                <div className="p-2 rounded-lg bg-[#fff5ee] text-[#ff6b1e] group-hover/item:bg-[#ff6b1e] group-hover/item:text-white transition">
                  <ShoppingBag className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800 group-hover/item:text-[#ff6b1e]">
                    Shopify Development
                  </p>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Custom themes, Liquid, and headless Shopify
                  </p>
                </div>
              </Link>

              <Link
                href="/services/nextjs-development-company"
                className="p-2.5 rounded-xl hover:bg-[#fff5ee] group/item transition flex items-start gap-3"
              >
                <div className="p-2 rounded-lg bg-[#fff5ee] text-[#ff6b1e] group-hover/item:bg-[#ff6b1e] group-hover/item:text-white transition">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800 group-hover/item:text-[#ff6b1e]">
                    Next.js Engineering
                  </p>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    SSR, SSG, App Router &amp; Core Web Vitals
                  </p>
                </div>
              </Link>

              <Link
                href="/services/ecommerce-website-development"
                className="p-2.5 rounded-xl hover:bg-[#fff5ee] group/item transition flex items-start gap-3"
              >
                <div className="p-2 rounded-lg bg-[#fff5ee] text-[#ff6b1e] group-hover/item:bg-[#ff6b1e] group-hover/item:text-white transition">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800 group-hover/item:text-[#ff6b1e]">
                    E-Commerce Solutions
                  </p>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    High-conversion online stores and checkout funnels
                  </p>
                </div>
              </Link>

              <Link
                href="/services/wordpress-website-development"
                className="p-2.5 rounded-xl hover:bg-[#fff5ee] group/item transition flex items-start gap-3"
              >
                <div className="p-2 rounded-lg bg-[#fff5ee] text-[#ff6b1e] group-hover/item:bg-[#ff6b1e] group-hover/item:text-white transition">
                  <Globe2 className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800 group-hover/item:text-[#ff6b1e]">
                    WordPress Development
                  </p>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Custom themes, WooCommerce, and CMS security
                  </p>
                </div>
              </Link>

              <Link
                href="/website-development-cost-in-india"
                className="p-2.5 rounded-xl bg-orange-50/60 hover:bg-[#fff5ee] group/item transition flex items-start gap-3 border-t border-slate-100"
              >
                <div className="p-2 rounded-lg bg-[#ff6b1e] text-white transition">
                  <DollarSign className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900 group-hover/item:text-[#ff6b1e]">
                    Cost Guide &amp; Calculator (2026)
                  </p>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Transparent Indian website pricing breakdown
                  </p>
                </div>
              </Link>
            </div>
          </div>

          {/* Locations Dropdown (Consolidates Noida HQ, India Hub, and Areas We Serve) */}
          <div
            className="relative group py-2"
            onMouseEnter={() => setLocationsDropdownOpen(true)}
            onMouseLeave={() => setLocationsDropdownOpen(false)}
          >
            <button
              type="button"
              className="cursor-pointer flex items-center gap-1 hover:text-[#ff6b1e] transition-colors focus:outline-none py-1"
              aria-expanded={locationsDropdownOpen}
            >
              <span>Locations</span>
              <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180 text-slate-400 group-hover:text-[#ff6b1e]" />
            </button>

            <div className="absolute left-0 top-full hidden group-hover:flex flex-col w-80 bg-white rounded-2xl shadow-xl border border-slate-100 p-3 z-50 animate-in fade-in-50 duration-150">
              <Link
                href="/website-development-company-in-noida"
                className="p-2.5 rounded-xl hover:bg-[#fff5ee] group/loc transition flex items-start gap-3"
              >
                <div className="p-2 rounded-lg bg-[#fff5ee] text-[#ff6b1e] group-hover/loc:bg-[#ff6b1e] group-hover/loc:text-white transition">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800 group-hover/loc:text-[#ff6b1e]">
                    Noida HQ (Sector 62)
                  </p>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Our sole physical office &amp; engineering facility
                  </p>
                </div>
              </Link>

              <Link
                href="/website-development-company-in-india"
                className="p-2.5 rounded-xl hover:bg-[#fff5ee] group/loc transition flex items-start gap-3"
              >
                <div className="p-2 rounded-lg bg-[#fff5ee] text-[#ff6b1e] group-hover/loc:bg-[#ff6b1e] group-hover/loc:text-white transition">
                  <Globe2 className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800 group-hover/loc:text-[#ff6b1e]">
                    India-Wide Remote Hub
                  </p>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Remote delivery across all Indian states &amp; metros
                  </p>
                </div>
              </Link>

              <Link
                href="/areas-we-serve"
                className="p-2.5 rounded-xl hover:bg-[#fff5ee] group/loc transition flex items-start gap-3 border-t border-slate-100"
              >
                <div className="p-2 rounded-lg bg-slate-100 text-slate-600 group-hover/loc:bg-[#ff6b1e] group-hover/loc:text-white transition">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800 group-hover/loc:text-[#ff6b1e]">
                    All Areas We Serve
                  </p>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Delhi NCR corridor &amp; top national hubs
                  </p>
                </div>
              </Link>
            </div>
          </div>

          {/* Portfolio */}
          <Link
            href="/portfolio"
            className="hover:text-[#ff6b1e] transition-colors py-1"
          >
            Portfolio
          </Link>

          {/* Resources Dropdown (Free SEO Checker, Tech Glossary, Blog, Reviews) */}
          <div
            className="relative group py-2"
            onMouseEnter={() => setResourcesDropdownOpen(true)}
            onMouseLeave={() => setResourcesDropdownOpen(false)}
          >
            <button
              type="button"
              className="cursor-pointer flex items-center gap-1 hover:text-[#ff6b1e] transition-colors focus:outline-none py-1"
              aria-expanded={resourcesDropdownOpen}
            >
              <span>Resources</span>
              <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180 text-slate-400 group-hover:text-[#ff6b1e]" />
            </button>

            <div className="absolute left-0 top-full hidden group-hover:flex flex-col w-76 bg-white rounded-2xl shadow-xl border border-slate-100 p-2.5 z-50 animate-in fade-in-50 duration-150">
              <Link
                href="/tools/seo-checker"
                className="p-2.5 rounded-xl hover:bg-[#fff5ee] group/res transition flex items-start gap-3"
              >
                <div className="p-2 rounded-lg bg-[#fff5ee] text-[#ff6b1e] group-hover/res:bg-[#ff6b1e] group-hover/res:text-white transition">
                  <Wrench className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800 group-hover/res:text-[#ff6b1e]">
                    Free Website SEO Checker
                  </p>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Instant on-page &amp; speed analysis
                  </p>
                </div>
              </Link>

              <Link
                href="/glossary"
                className="p-2.5 rounded-xl hover:bg-[#fff5ee] group/res transition flex items-start gap-3"
              >
                <div className="p-2 rounded-lg bg-[#fff5ee] text-[#ff6b1e] group-hover/res:bg-[#ff6b1e] group-hover/res:text-white transition">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800 group-hover/res:text-[#ff6b1e]">
                    Tech &amp; SEO Glossary
                  </p>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Core Web Vitals &amp; stack guides
                  </p>
                </div>
              </Link>

              <Link
                href="/blog"
                className="p-2.5 rounded-xl hover:bg-[#fff5ee] group/res transition flex items-start gap-3"
              >
                <div className="p-2 rounded-lg bg-[#fff5ee] text-[#ff6b1e] group-hover/res:bg-[#ff6b1e] group-hover/res:text-white transition">
                  <Globe2 className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800 group-hover/res:text-[#ff6b1e]">
                    Blog &amp; Tech Guides
                  </p>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Engineering, speed &amp; Shopify tutorials
                  </p>
                </div>
              </Link>

              <Link
                href="/reviews"
                className="p-2.5 rounded-xl hover:bg-[#fff5ee] group/res transition flex items-start gap-3 border-t border-slate-100"
              >
                <div className="p-2 rounded-lg bg-[#fff5ee] text-[#ff6b1e] group-hover/res:bg-[#ff6b1e] group-hover/res:text-white transition">
                  <Star className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800 group-hover/res:text-[#ff6b1e]">
                    Client Reviews
                  </p>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Verified client feedback &amp; ratings
                  </p>
                </div>
              </Link>
            </div>
          </div>

          {/* About */}
          <Link
            href="/about"
            className="hover:text-[#ff6b1e] transition-colors py-1"
          >
            About
          </Link>

          {/* Contact */}
          <Link
            href="/contact"
            className="hover:text-[#ff6b1e] transition-colors py-1"
          >
            Contact
          </Link>
        </nav>

        {/* Right CTA Actions - Clean, Never Wrapping */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="tel:+919990613140"
            className="hidden xl:inline-flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-[#ff6b1e] px-2 py-2 transition-colors whitespace-nowrap shrink-0"
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#ff6b1e]" />
            <span>+91 99906 13140</span>
          </Link>

          <button
            type="button"
            onClick={() => openEnquiryModal()}
            className="inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-full bg-[#ff6b1e] px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold text-white shadow-md shadow-[#ff6b1e]/25 hover:bg-[#e55510] transition-all hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#ff6b1e] focus:ring-offset-2 active:scale-95 cursor-pointer whitespace-nowrap shrink-0"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </button>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-2.5 text-sm font-medium text-slate-700">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-[#ff6b1e]"
            >
              Home
            </Link>

            {/* Services Section */}
            <div className="py-2 border-y border-slate-100">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Services
              </span>
              <div className="grid grid-cols-1 gap-2 pl-2">
                <Link
                  href="/services/custom-web-application-development"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 text-xs hover:text-[#ff6b1e]"
                >
                  Custom Web Applications
                </Link>
                <Link
                  href="/services/shopify-development-company"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 text-xs hover:text-[#ff6b1e]"
                >
                  Shopify Development
                </Link>
                <Link
                  href="/services/nextjs-development-company"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 text-xs hover:text-[#ff6b1e]"
                >
                  Next.js Engineering
                </Link>
                <Link
                  href="/services/ecommerce-website-development"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 text-xs hover:text-[#ff6b1e]"
                >
                  E-Commerce Development
                </Link>
                <Link
                  href="/services/wordpress-website-development"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 text-xs hover:text-[#ff6b1e]"
                >
                  WordPress Development
                </Link>
                <Link
                  href="/website-development-cost-in-india"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 text-xs font-bold text-[#ff6b1e]"
                >
                  Website Cost in India Guide (2026)
                </Link>
              </div>
            </div>

            {/* Free Tools & Resources */}
            <div className="py-2 border-b border-slate-100">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Free Tools &amp; Resources
              </span>
              <div className="grid grid-cols-1 gap-2 pl-2">
                <Link
                  href="/tools/seo-checker"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 text-xs hover:text-[#ff6b1e]"
                >
                  Free Website SEO &amp; Speed Checker
                </Link>
                <Link
                  href="/glossary"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 text-xs hover:text-[#ff6b1e]"
                >
                  Engineering &amp; SEO Glossary
                </Link>
                <Link
                  href="/reviews"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 text-xs hover:text-[#ff6b1e]"
                >
                  Verified Client Reviews
                </Link>
                <Link
                  href="/blog"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 text-xs hover:text-[#ff6b1e]"
                >
                  Blog &amp; Tech Guides
                </Link>
              </div>
            </div>

            {/* Locations */}
            <div className="py-2 border-b border-slate-100">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Locations
              </span>
              <div className="grid grid-cols-1 gap-2 pl-2">
                <Link
                  href="/website-development-company-in-noida"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 text-xs font-semibold text-[#ff6b1e]"
                >
                  Noida HQ (Sector 62)
                </Link>
                <Link
                  href="/website-development-company-in-india"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 text-xs hover:text-[#ff6b1e]"
                >
                  India-Wide Remote Hub
                </Link>
                <Link
                  href="/areas-we-serve"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 text-xs hover:text-[#ff6b1e]"
                >
                  All Areas We Serve
                </Link>
              </div>
            </div>

            <Link
              href="/portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-[#ff6b1e]"
            >
              Portfolio &amp; Case Studies
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-[#ff6b1e]"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-[#ff6b1e]"
            >
              Contact Us
            </Link>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
              <Link
                href="tel:+919990613140"
                className="inline-flex items-center gap-2 py-2 text-sm font-semibold text-slate-800"
              >
                <PhoneCall className="w-4 h-4 text-[#ff6b1e]" />
                <span>+91 99906 13140</span>
              </Link>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openEnquiryModal();
                }}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#ff6b1e] py-3 text-sm font-bold text-white shadow-md hover:bg-[#e55510]"
              >
                <Sparkles className="w-4 h-4" />
                <span>Get Free Proposal</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
