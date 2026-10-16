"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Globe, ArrowRight, Menu, X, PhoneCall, Code2, ShoppingBag, Palette, Cpu, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/seo-data";
import { useEnquiryModal } from "@/components/EnquiryModal";

export default function Header() {
  const { openEnquiryModal } = useEnquiryModal();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/95 backdrop-blur-md transition-all shadow-2xs">
      <div className="mx-auto flex h-16 sm:h-20 max-w-7xl items-center justify-between px-3 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link
          href="/"
          className="group flex items-center transition-transform hover:scale-102"
          aria-label="Website Development Expert Home"
        >
          <Image
            src="/images/webdev-logo.png"
            alt="Website Development Expert - Custom Web & Shopify Solutions"
            width={200}
            height={48}
            className="h-8 sm:h-11 w-auto object-contain"
            priority
          />
        </Link>

        {/* Clean Semantic Navigation - Zero City Clutter */}
        <nav
          className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600"
          aria-label="Primary Navigation"
        >
          <Link
            href="/"
            className="hover:text-[#ff6b1e] transition-colors"
          >
            Home
          </Link>

          {/* Clean Professional Services Dropdown */}
          <div className="relative group py-2">
            <span className="cursor-pointer flex items-center gap-1 hover:text-[#ff6b1e] transition-colors">
              Services
              <svg
                className="w-4 h-4 transition-transform group-hover:rotate-180 text-slate-400 group-hover:text-[#ff6b1e]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>

            <div className="absolute left-0 top-full hidden group-hover:flex flex-col w-80 bg-white rounded-2xl shadow-xl border border-slate-100 p-3 z-50">
              <Link
                href="/#services"
                className="p-3 rounded-xl hover:bg-[#fff5ee] group/item transition flex items-start gap-3"
              >
                <div className="p-2 rounded-lg bg-[#fff5ee] text-[#ff6b1e] group-hover/item:bg-[#ff6b1e] group-hover/item:text-white transition">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800 group-hover/item:text-[#ff6b1e]">
                    Custom Web Applications
                  </p>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    High-speed Next.js &amp; React engineering
                  </p>
                </div>
              </Link>

              <Link
                href="/#services"
                className="p-3 rounded-xl hover:bg-[#fff5ee] group/item transition flex items-start gap-3"
              >
                <div className="p-2 rounded-lg bg-[#fff5ee] text-[#ff6b1e] group-hover/item:bg-[#ff6b1e] group-hover/item:text-white transition">
                  <ShoppingBag className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800 group-hover/item:text-[#ff6b1e]">
                    E-Commerce Platforms
                  </p>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    High-conversion digital storefronts
                  </p>
                </div>
              </Link>

              <Link
                href="/#services"
                className="p-3 rounded-xl hover:bg-[#fff5ee] group/item transition flex items-start gap-3"
              >
                <div className="p-2 rounded-lg bg-[#fff5ee] text-[#ff6b1e] group-hover/item:bg-[#ff6b1e] group-hover/item:text-white transition">
                  <Palette className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800 group-hover/item:text-[#ff6b1e]">
                    UI/UX Architecture
                  </p>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Human-centric brand experiences
                  </p>
                </div>
              </Link>

              <Link
                href="/#services"
                className="p-3 rounded-xl hover:bg-[#fff5ee] group/item transition flex items-start gap-3"
              >
                <div className="p-2 rounded-lg bg-[#fff5ee] text-[#ff6b1e] group-hover/item:bg-[#ff6b1e] group-hover/item:text-white transition">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800 group-hover/item:text-[#ff6b1e]">
                    Performance &amp; Speed
                  </p>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    100/100 Core Web Vitals optimization
                  </p>
                </div>
              </Link>
            </div>
          </div>

          <Link
            href="/#tech-stack"
            className="hover:text-[#ff6b1e] transition-colors"
          >
            Technologies
          </Link>
          <Link
            href="/#trends"
            className="hover:text-[#ff6b1e] transition-colors"
          >
            Trends
          </Link>
          <Link
            href="/#process"
            className="hover:text-[#ff6b1e] transition-colors"
          >
            Process
          </Link>
          <Link
            href="/#faqs"
            className="hover:text-[#ff6b1e] transition-colors"
          >
            FAQs
          </Link>
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="tel:+919990613140"
            className="hidden lg:inline-flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-[#ff6b1e] px-3 py-2 transition-colors"
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#ff6b1e]" />
            +91 99906 13140
          </Link>
          <button
            type="button"
            onClick={() => openEnquiryModal()}
            className="inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-full bg-[#ff6b1e] px-3.5 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold text-white shadow-md shadow-[#ff6b1e]/25 hover:bg-[#e55510] transition-all hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#ff6b1e] focus:ring-offset-2 active:scale-95 cursor-pointer whitespace-nowrap"
          >
            <span className="hidden sm:inline">Start a Conversation</span>
            <span className="sm:hidden">Enquire Now</span>
            <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-3 text-sm font-medium text-slate-700">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-[#ff6b1e]"
            >
              Home
            </Link>
            <Link
              href="/#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-[#ff6b1e]"
            >
              Services
            </Link>
            <Link
              href="/#tech-stack"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-[#ff6b1e]"
            >
              Technologies &amp; Shopify
            </Link>
            <Link
              href="/#trends"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-[#ff6b1e]"
            >
              Latest Trends
            </Link>
            <Link
              href="/#process"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-[#ff6b1e]"
            >
              Process
            </Link>
            <Link
              href="/#faqs"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-[#ff6b1e]"
            >
              FAQs
            </Link>
            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2.5">
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
                <span>Get Instant Quote</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
