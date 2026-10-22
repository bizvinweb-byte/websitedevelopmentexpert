# Analytics Measurement & Dashboard Setup Guide

> **Purpose:**
> Step-by-step instructions for linking Google Analytics 4 with Google Search Console, building a central acquisition dashboard in Google Looker Studio, and reviewing monthly performance KPIs.

---

## 1. Linking Google Analytics 4 (GA4) with Google Search Console (GSC)

Connecting GA4 with GSC allows you to see organic search queries and landing page impressions directly inside your GA4 reports alongside conversion events.

### Step-by-Step Linking Instructions:
1. Open [Google Analytics](https://analytics.google.com/) and navigate to **Admin** (gear icon in lower left).
2. Under the **Property** column, scroll down to **Product Links** and click on **Search Console Links**.
3. Click the blue **Link** button in the upper right.
4. Click **Choose accounts** and select your verified `https://websitedevelopmentexpert.in` Search Console property. (Ensure your Google account has *Owner* or *Full* access on both properties).
5. Click **Confirm**.
6. Select your Web Data Stream (the stream corresponding to your `NEXT_PUBLIC_GA_ID`).
7. Review and click **Submit**.
8. **Publish Search Console Reports in GA4 UI:**
   - Go to **Reports > Library** in GA4.
   - Locate the **Search Console** report collection card.
   - Click the three dots icon and select **Publish**.
   - You will now see **Queries** and **Google Organic Search Traffic** reports under the Reports sidebar.

---

## 2. Setting Up Microsoft Clarity for Heatmaps & Session Recording

1. Create a free project at [Clarity.microsoft.com](https://clarity.microsoft.com/).
2. Name the project: `Website Development Expert`.
3. Set domain: `https://websitedevelopmentexpert.in`.
4. Copy your **Clarity Project ID** (a string of ~10 alphanumeric characters).
5. Add the project ID to your production environment variables:
   ```bash
   NEXT_PUBLIC_CLARITY_PROJECT_ID="your_project_id_here"
   ```
6. The codebase will automatically inject the optimized Clarity tracking script with zero layout shift via Next.js `next/script` (`strategy="afterInteractive"`).

---

## 3. Building the Lead & Acquisition Dashboard in Google Looker Studio

Google Looker Studio provides a single, live executive dashboard that combines lead records, GA4 traffic, and GSC search rankings.

### Recommended Dashboard Layout (3 Pages):

#### Page 1: Executive KPI Scorecard
- **Top Metrics Row (Scorecard Cards):**
  - Total Organic Users (30-day trend)
  - Key Events: `form_submit` count
  - Key Events: `whatsapp_click` count
  - Click-to-Call: `phone_click` count
  - Blended Inbound Conversion Rate (% of visitors submitting inquiries or initiating WhatsApp)
- **Time Series Chart:** Daily Organic Sessions vs Daily Form Submissions.
- **Bar Chart by Lead Source:** Inquiries grouped by `utm_source` (e.g. Google Organic vs Direct vs Referral vs LinkedIn).

#### Page 2: Organic Search Engine Performance (Data Source: Search Console)
- **Table 1: Top Organic Search Queries**
  - Dimensions: `Query`
  - Metrics: `Clicks`, `Impressions`, `Average CTR`, `Average Position`
  - Filter: Country = `India`
- **Table 2: Top Organic Landing Pages**
  - Dimensions: `Landing Page`
  - Metrics: `Clicks`, `Impressions`, `Key Events (form_submit + whatsapp_click)`
  - Benchmark performance across `/`, `/website-development-company-in-india`, `/services/*`, and `/website-development-company-in-noida`.

#### Page 3: Technical Health & Lead Quality (Data Source: Inquiries CSV)
- Connect Google Sheets webhook export from [`src/app/api/enquiry/route.ts`](file:///c:/websitedevelopmentexpert/src/app/api/enquiry/route.ts).
- **Pie Chart:** Leads by `Service Required` (Shopify vs Next.js vs Custom Web App vs WordPress).
- **Bar Chart:** Leads by `Budget Bracket` (e.g. ₹50k–₹1L vs ₹1L–₹2.5L).
- **Regional Map:** Inquiries by City/State across India.

---

## 4. Monthly SEO & Revenue KPI Review Checklist

Conduct this review on the first Monday of every month:

| KPI Category | Target Metric | Healthy Benchmark | Diagnostic Action if Underperforming |
| :--- | :--- | :--- | :--- |
| **Search Visibility** | Total Organic Impressions | 15% to 25% Month-over-Month Growth | Check for crawl errors in GSC, publish 2 weekly planned articles from the content calendar. |
| **Search Traffic** | Qualified Organic Clicks | 10% to 20% MoM Growth | Optimize `<title>` tags and meta descriptions for pages with high impressions but CTR < 2%. |
| **National Authority** | Rankings for National Terms | Top 10 for target keywords in [`keyword-map.md`](keyword-map.md) | Build authoritative white-hat backlinks and internal contextual links from new blog posts. |
| **Local Authority** | NCR & Noida Rankings | Top 3 for Sector 62 / Noida web development | Acquire authentic Google Business Profile reviews mentioning specific services. |
| **Lead Generation** | Key Conversion Events | 25+ verified commercial inquiries/month | Test alternative value proposition messaging and evaluate sticky mobile CTA clicks. |
| **User Experience** | Real Mobile LCP (CrUX) | Under 2.2 seconds on Indian 4G | Audit newly added images, ensure AVIF/WebP compression and zero render-blocking third-party scripts. |
