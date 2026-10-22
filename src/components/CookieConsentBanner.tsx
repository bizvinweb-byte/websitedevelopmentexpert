"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ShieldCheck, X } from "lucide-react";
import { initUtmCapture } from "@/lib/tracking";

export default function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // 1. Initialize UTM parameter capture upon first page load
    initUtmCapture();

    // 2. Check if user has previously acted on consent
    const consent = localStorage.getItem("wde_consent_given");
    if (!consent) {
      // Short delay so it doesn't cause layout shift during initial paint
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("wde_consent_given", "granted");
    setVisible(false);

    // Update Google Consent Mode v2
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("consent", "update", {
        analytics_storage: "granted",
        ad_storage: "denied", // Privacy-preserving default for DPDP
        ad_user_data: "denied",
        ad_personalization: "denied",
      });
    }
  };

  const handleDecline = () => {
    localStorage.setItem("wde_consent_given", "denied");
    setVisible(false);

    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("consent", "update", {
        analytics_storage: "denied",
        ad_storage: "denied",
      });
    }
  };

  if (!visible) return null;

  return (
    <aside
      aria-label="Cookie and Privacy Consent"
      className="fixed bottom-16 sm:bottom-6 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 rounded-2xl border border-slate-200 bg-white/95 backdrop-blur-md p-4 sm:p-5 shadow-2xl animate-in fade-in slide-in-from-bottom duration-300"
    >
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-xl bg-[#fff5ee] text-[#ff6b1e] shrink-0 mt-0.5">
          <ShieldCheck className="w-4 h-4" />
        </div>
        <div className="flex-1 text-xs text-slate-600 leading-relaxed">
          <p className="font-bold text-slate-900 text-sm mb-1">
            Privacy &amp; Data Protection (DPDP)
          </p>
          We use essential cookies and anonymous analytics to understand site usage and improve performance in compliance with India's DPDP Act. We never sell your personal data.
          <div className="mt-1">
            <Link
              href="/privacy-policy"
              className="text-[#ff6b1e] hover:underline font-semibold"
            >
              Read our Privacy Policy
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-3.5 pt-3 border-t border-slate-100 flex items-center justify-end gap-2.5">
        <button
          type="button"
          onClick={handleDecline}
          className="px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-500 hover:text-slate-800 transition cursor-pointer"
        >
          Essential Only
        </button>
        <button
          type="button"
          onClick={handleAccept}
          className="px-4 py-1.5 rounded-lg bg-[#ff6b1e] text-white text-xs font-bold hover:bg-[#e55510] shadow-xs transition cursor-pointer"
        >
          Accept Analytics
        </button>
      </div>
    </aside>
  );
}
