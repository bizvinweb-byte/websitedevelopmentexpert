import Link from "next/link";
import { ArrowLeft, Home, PhoneCall, Compass, Layers, FileText } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-2xl text-center">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fff5ee] text-[#ff6b1e] border border-[#ff6b1e]/20 text-xs font-bold mb-4">
          404 Error
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
          Page Not Found
        </h1>
        <p className="mt-4 text-base text-slate-600 leading-relaxed max-w-lg mx-auto">
          The page you are looking for may have been moved, renamed, or is temporarily unavailable. Explore our core services or return to the homepage.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-[#ff6b1e] px-6 py-3 text-sm font-bold text-white shadow-md shadow-[#ff6b1e]/25 hover:bg-[#e55510] transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Back to Homepage</span>
          </Link>
          <Link
            href="/services/custom-web-application-development"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:border-[#ff6b1e] hover:text-[#ff6b1e] transition-all shadow-2xs"
          >
            <Layers className="w-4 h-4 text-[#ff6b1e]" />
            <span>View Services</span>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:border-[#ff6b1e] hover:text-[#ff6b1e] transition-all shadow-2xs"
          >
            <PhoneCall className="w-4 h-4 text-[#ff6b1e]" />
            <span>Contact Noida HQ</span>
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-100 text-left">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 text-center">
            Popular Destinations
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <Link
              href="/website-development-company-in-india"
              className="p-3 rounded-xl border border-slate-100 hover:border-[#ff6b1e]/40 hover:bg-[#fff5ee]/50 transition flex items-center justify-between"
            >
              <span className="font-medium text-slate-700">All-India Web Services</span>
              <span className="text-[#ff6b1e] text-xs">→</span>
            </Link>
            <Link
              href="/website-development-company-in-noida"
              className="p-3 rounded-xl border border-slate-100 hover:border-[#ff6b1e]/40 hover:bg-[#fff5ee]/50 transition flex items-center justify-between"
            >
              <span className="font-medium text-slate-700">Noida HQ Local Hub</span>
              <span className="text-[#ff6b1e] text-xs">→</span>
            </Link>
            <Link
              href="/services/shopify-development-company"
              className="p-3 rounded-xl border border-slate-100 hover:border-[#ff6b1e]/40 hover:bg-[#fff5ee]/50 transition flex items-center justify-between"
            >
              <span className="font-medium text-slate-700">Shopify Development</span>
              <span className="text-[#ff6b1e] text-xs">→</span>
            </Link>
            <Link
              href="/website-development-cost-in-india"
              className="p-3 rounded-xl border border-slate-100 hover:border-[#ff6b1e]/40 hover:bg-[#fff5ee]/50 transition flex items-center justify-between"
            >
              <span className="font-medium text-slate-700">Web Cost in India 2026</span>
              <span className="text-[#ff6b1e] text-xs">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
