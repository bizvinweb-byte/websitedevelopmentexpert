"use client";

import React from "react";
import Link from "next/link";
import { Phone, MessageSquare, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/seo-data";
import { useEnquiryModal } from "@/components/EnquiryModal";
import { trackWhatsAppClick, trackPhoneClick, trackCtaClick } from "@/lib/tracking";

export default function StickyMobileCta() {
  const { openEnquiryModal } = useEnquiryModal();

  const handleWhatsApp = () => {
    trackWhatsAppClick("sticky_mobile_bar");
  };

  const handlePhone = () => {
    trackPhoneClick("sticky_mobile_bar");
  };

  const handleQuote = () => {
    trackCtaClick("Get Quote", "sticky_mobile_bar");
    openEnquiryModal();
  };

  const encodedWhatsAppMessage = encodeURIComponent(
    "Hello Website Development Expert! I am looking for professional website / Shopify development for my business. Please share details."
  );

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2.5 shadow-2xl safe-area-bottom">
      <div className="mx-auto flex items-center justify-between gap-2 max-w-md">
        {/* Call Now */}
        <Link
          href={`tel:${siteConfig.rawPhone}`}
          onClick={handlePhone}
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 hover:bg-slate-100 active:scale-95 transition"
          aria-label="Call our Noida Office"
        >
          <Phone className="w-4 h-4 text-[#ff6b1e] mb-0.5" />
          <span className="text-[10px] font-bold">Call Now</span>
        </Link>

        {/* WhatsApp Chat */}
        <a
          href={`https://wa.me/919990613140?text=${encodedWhatsAppMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWhatsApp}
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 hover:bg-emerald-100 active:scale-95 transition"
          aria-label="Chat with expert on WhatsApp"
        >
          <MessageSquare className="w-4 h-4 text-emerald-600 mb-0.5" />
          <span className="text-[10px] font-bold">WhatsApp</span>
        </a>

        {/* Get Proposal Button */}
        <button
          type="button"
          onClick={handleQuote}
          className="flex-1.5 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-[#ff6b1e] text-white shadow-md shadow-[#ff6b1e]/20 hover:bg-[#e55510] active:scale-95 transition cursor-pointer"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span className="text-[11px] font-bold whitespace-nowrap">Get Quote</span>
        </button>
      </div>
    </div>
  );
}
