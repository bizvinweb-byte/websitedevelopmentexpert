import Link from "next/link";
import { ChevronRight } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/lib/seo-data";

export interface BreadcrumbItem {
  name?: string;
  label?: string;
  url?: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  // Normalize items to ensure robust name and url resolution
  const normalizedItems = items.map((item) => {
    const name = item.name || item.label || "";
    const rawUrl = item.url || item.href || "/";
    const fullUrl = rawUrl.startsWith("http")
      ? rawUrl
      : `${siteConfig.siteUrl}${rawUrl.startsWith("/") ? "" : "/"}${rawUrl}`;
    return { name, url: rawUrl, fullUrl };
  });

  // Generate BreadcrumbList Schema for Google Search Console & SERPs
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: normalizedItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.fullUrl,
    })),
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <nav aria-label="Breadcrumb" className="py-3">
        <ol className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-500">
          {normalizedItems.map((item, index) => {
            const isLast = index === normalizedItems.length - 1;
            return (
              <li key={`${item.url}-${index}`} className="inline-flex items-center gap-1.5">
                {index > 0 && (
                  <ChevronRight className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                )}
                {isLast ? (
                  <span
                    className="text-[#ff6b1e] font-semibold truncate max-w-[280px] sm:max-w-none"
                    aria-current="page"
                  >
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.url}
                    className="hover:underline hover:text-[#ff6b1e] transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
