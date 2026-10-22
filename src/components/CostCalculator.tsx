"use client";

import React, { useState } from "react";
import {
  Calculator,
  Check,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Clock,
  Layers,
  Cpu,
  ShoppingBag,
  Globe2,
} from "lucide-react";
import { useEnquiryModal } from "@/components/EnquiryModal";
import { trackCalculatorUse } from "@/lib/tracking";

interface PlatformOption {
  id: string;
  name: string;
  baseCost: number;
  description: string;
  icon: React.ElementType;
}

const PLATFORMS: PlatformOption[] = [
  {
    id: "nextjs-corporate",
    name: "Custom Next.js Corporate Portal",
    baseCost: 35000,
    description: "Sub-second speed, SSR, edge cloud hosting, zero-bloat React code.",
    icon: Cpu,
  },
  {
    id: "shopify-store",
    name: "Shopify 2.0 D2C Storefront",
    baseCost: 55000,
    description: "Custom Liquid theme, mobile-first UX, Razorpay UPI checkout.",
    icon: ShoppingBag,
  },
  {
    id: "custom-web-app",
    name: "Custom Web Application / SaaS MVP",
    baseCost: 140000,
    description: "Full-stack TypeScript, PostgreSQL, RBAC, REST/GraphQL APIs.",
    icon: Layers,
  },
  {
    id: "custom-wordpress",
    name: "Custom WordPress / WooCommerce",
    baseCost: 40000,
    description: "Bespoke PHP 8 theme, Gutenberg blocks, secure CMS architecture.",
    icon: Globe2,
  },
];

const SCOPES = [
  { id: "small", name: "Lean MVP / 1–5 Pages", multiplier: 0, timeline: "2 – 3 Weeks" },
  { id: "medium", name: "Growing Business / 6–15 Pages", multiplier: 15000, timeline: "3 – 5 Weeks" },
  { id: "large", name: "Extensive Scale / 16–35 Pages", multiplier: 35000, timeline: "5 – 8 Weeks" },
  { id: "enterprise", name: "Enterprise Multi-Module / 35+ Pages", multiplier: 85000, timeline: "8 – 12 Weeks" },
];

const ADDONS = [
  { id: "upi-gateway", name: "Razorpay / PhonePe Indian UPI Payment Gateway", cost: 8000 },
  { id: "shiprocket-3pl", name: "Shiprocket / Delhivery 3PL Courier Automation", cost: 12000 },
  { id: "cod-otp", name: "COD Fraud Protection & WhatsApp OTP Verification", cost: 10000 },
  { id: "whatsapp-bot", name: "WhatsApp Business API Automated Inquiries & Receipts", cost: 14000 },
  { id: "multilingual", name: "Multi-Lingual Indic Support (Hindi, Tamil, etc.)", cost: 18000 },
  { id: "crm-sync", name: "Zoho / Salesforce / Custom ERP Webhook Integration", cost: 22000 },
];

export default function CostCalculator() {
  const { openEnquiryModal } = useEnquiryModal();

  const [selectedPlatform, setSelectedPlatform] = useState<string>("shopify-store");
  const [selectedScope, setSelectedScope] = useState<string>("medium");
  const [selectedAddons, setSelectedAddons] = useState<string[]>(["upi-gateway", "shiprocket-3pl"]);
  const [designLevel, setDesignLevel] = useState<"standard" | "bespoke">("bespoke");

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Calculate pricing
  const platform = PLATFORMS.find((p) => p.id === selectedPlatform) || PLATFORMS[0];
  const scope = SCOPES.find((s) => s.id === selectedScope) || SCOPES[1];
  const addonsTotal = selectedAddons.reduce((sum, addonId) => {
    const addon = ADDONS.find((a) => a.id === addonId);
    return sum + (addon ? addon.cost : 0);
  }, 0);
  const designCost = designLevel === "bespoke" ? 20000 : 0;

  const baseTotal = platform.baseCost + scope.multiplier + addonsTotal + designCost;
  const minEstimate = Math.round(baseTotal * 0.95);
  const maxEstimate = Math.round(baseTotal * 1.15);

  const formatInr = (num: number) =>
    "₹" + num.toLocaleString("en-IN");

  const handleConsultation = () => {
    const summary = `${platform.name} (${scope.name}) ~ ${formatInr(minEstimate)} - ${formatInr(maxEstimate)}`;
    trackCalculatorUse(platform.name, `${minEstimate}-${maxEstimate}`);
    openEnquiryModal({
      service: platform.name,
      location: `Calculator Scope: ${scope.name}, Estimated Range: ${formatInr(minEstimate)} - ${formatInr(maxEstimate)}`,
    });
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-xl">
      <div className="text-center sm:text-left mb-8 pb-6 border-b border-slate-100">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fff5ee] text-[#ff6b1e] text-xs font-semibold mb-3 border border-[#ff6b1e]/20">
          <Calculator className="w-3.5 h-3.5" />
          <span>Transparent 2026 Engineering Estimator</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
          Interactive Website Cost &amp; Timeline Calculator
        </h3>
        <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
          Select your architectural requirements below to generate an unvarnished investment estimate based on our current Sector 62, Noida engineering benchmarks.
        </p>
      </div>

      <div className="space-y-8">
        {/* Step 1: Select Platform */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
            1. Select Technology Architecture &amp; Platform
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {PLATFORMS.map((item) => {
              const Icon = item.icon;
              const isSelected = selectedPlatform === item.id;
              return (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => setSelectedPlatform(item.id)}
                  className={`text-left p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? "border-[#ff6b1e] bg-[#fff5ee]/50 ring-1 ring-[#ff6b1e] shadow-2xs"
                      : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/50"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`p-2 rounded-xl shrink-0 ${
                        isSelected ? "bg-[#ff6b1e] text-white" : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900">{item.name}</h4>
                      <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-500 text-[11px]">Base Architecture</span>
                    <span className="font-bold text-[#ff6b1e]">from {formatInr(item.baseCost)}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2: Select Project Scale */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
            2. Choose Project Scope &amp; Scale
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
            {SCOPES.map((sc) => {
              const isSelected = selectedScope === sc.id;
              return (
                <button
                  type="button"
                  key={sc.id}
                  onClick={() => setSelectedScope(sc.id)}
                  className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? "border-[#ff6b1e] bg-[#fff5ee]/50 ring-1 ring-[#ff6b1e]"
                      : "border-slate-200 bg-white hover:border-slate-300"
                  }`}
                >
                  <div className="text-xs font-bold text-slate-900">{sc.name}</div>
                  <div className="text-[11px] text-slate-500 mt-1 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#ff6b1e]" />
                    <span>Est. {sc.timeline}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 3: Add-on Technical Modules */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
            3. Specialized Integrations &amp; Workflows (Select all that apply)
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {ADDONS.map((addon) => {
              const isChecked = selectedAddons.includes(addon.id);
              return (
                <div
                  key={addon.id}
                  onClick={() => toggleAddon(addon.id)}
                  className={`flex items-center justify-between p-3 rounded-xl border transition-all cursor-pointer ${
                    isChecked
                      ? "border-[#ff6b1e]/60 bg-[#fff5ee]/30"
                      : "border-slate-200 bg-white hover:bg-slate-50/50"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`w-4 h-4 rounded-md border flex items-center justify-center transition-colors ${
                        isChecked
                          ? "bg-[#ff6b1e] border-[#ff6b1e] text-white"
                          : "border-slate-300 bg-white"
                      }`}
                    >
                      {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                    <span className="text-xs text-slate-800 font-medium">{addon.name}</span>
                  </div>
                  <span className="text-xs font-semibold text-slate-500 shrink-0 ml-2">
                    +{formatInr(addon.cost)}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Step 4: UI/UX Design Level */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
            4. UI/UX Design Approach
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setDesignLevel("standard")}
              className={`p-3.5 rounded-xl border text-left cursor-pointer transition ${
                designLevel === "standard"
                  ? "border-[#ff6b1e] bg-[#fff5ee]/50 ring-1 ring-[#ff6b1e]"
                  : "border-slate-200 bg-white hover:border-slate-300"
              }`}
            >
              <div className="text-xs font-bold text-slate-900">Pre-Engineered Component Architecture</div>
              <div className="text-[11px] text-slate-500 mt-1">
                Fastest time-to-market using accessible Tailwind UI tokens.
              </div>
            </button>
            <button
              type="button"
              onClick={() => setDesignLevel("bespoke")}
              className={`p-3.5 rounded-xl border text-left cursor-pointer transition ${
                designLevel === "bespoke"
                  ? "border-[#ff6b1e] bg-[#fff5ee]/50 ring-1 ring-[#ff6b1e]"
                  : "border-slate-200 bg-white hover:border-slate-300"
              }`}
            >
              <div className="text-xs font-bold text-slate-900">100% Bespoke Custom Figma Design System</div>
              <div className="text-[11px] text-slate-500 mt-1">
                Unique brand identity, custom illustrations, and interactive micro-animations (+{formatInr(20000)}).
              </div>
            </button>
          </div>
        </div>

        {/* Result Breakdown Card */}
        <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-900 to-slate-950 p-6 sm:p-8 text-white shadow-lg">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#ff6b1e] uppercase tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Estimated Investment Range</span>
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
                {formatInr(minEstimate)} – {formatInr(maxEstimate)}
              </div>
              <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#ff6b1e]" />
                  <span>Timeline: {scope.timeline}</span>
                </span>
                <span>•</span>
                <span>Includes Source Code Handover</span>
                <span>•</span>
                <span>30-Day Post-Launch Warranty</span>
              </div>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={handleConsultation}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#ff6b1e] px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-[#ff6b1e]/30 hover:bg-[#e55510] active:scale-95 transition cursor-pointer"
              >
                <span>Request Exact Architecture &amp; Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-slate-400 leading-relaxed">
            * Estimates are indicative based on standard engineering specifications and exclude domain/hosting subscriptions. A definitive fixed-milestone statement of work (SOW) is provided following an initial architectural discovery call.
          </div>
        </div>
      </div>
    </div>
  );
}
