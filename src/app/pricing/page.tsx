import type { Metadata } from "next";
import PricingClient, { PricingDataUI } from "./PricingClient";

export const metadata: Metadata = {
  title: "Pricing — Transparent Plans & Custom Quotes",
  description:
    "Clear, value‑driven pricing for web, mobile, AI, and cloud solutions. Starter, Professional, and Enterprise options.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    url: "/pricing",
    title: "Pricing — Rizwani Solutions",
    description:
      "Explore our pricing plans and request a custom quote for your project.",
  },
};

export default async function PricingPage() {
  let categorized: Record<string, any> | null = null;
  try {
    const res = await fetch(
      "https://rizwani-admin.vercel.app/api/client-pricing",
      { cache: "no-store" }
    );
    if (res.ok) {
      categorized = (await res.json()) as Record<string, any>;
    }
  } catch (e) {
    // swallow fetch error and fallback to mock
  }

  // Fallback dummy data (matches REAL API structure)
  if (!categorized) {
    categorized = {
      "Web Development": {
        services: [
          {
            title: "Landing Pages",
            description: "High-converting responsive landing pages.",
            keys: [
              { name: "Responsive", desc: "Mobile-first layouts" },
              { name: "SEO", desc: "Optimized semantics & meta" },
            ],
            pricing: {
              fixed: [
                {
                  title: "Starter",
                  description: "Single-section LP with CTA",
                  price: "$899",
                  delivery_time: "5-7 days",
                  keys: [
                    { name: "Sections", desc: "1-2 sections" },
                    { name: "Revisions", desc: "1 round" },
                  ],
                },
              ],
              plus: [
                {
                  title: "Professional",
                  description: "Multi-section LP with analytics",
                  price: "$1,899+",
                  delivery_time: "10-14 days",
                  keys: [
                    { name: "Integrations", desc: "GA4, Pixel" },
                    { name: "A/B", desc: "Variant-ready" },
                  ],
                },
              ],
              range: [
                {
                  title: "Enterprise",
                  description: "Conversion program with CRO",
                  price: "$5,000-$15,000",
                  delivery_time: "3-6 weeks",
                  keys: [
                    { name: "CRO", desc: "Research & testing" },
                    { name: "Compliance", desc: "Perf/Acc/SEO" },
                  ],
                },
              ],
            },
          },
          {
            title: "E‑commerce",
            description: "Modern storefronts with fast checkout.",
            keys: [
              { name: "Cart", desc: "Optimized funnels" },
              { name: "Payments", desc: "Stripe/PayPal" },
            ],
            pricing: {
              fixed: [],
              plus: [
                {
                  title: "Pro Store",
                  description: "Catalog, search, filters",
                  price: "$4,999+",
                  delivery_time: "3-4 weeks",
                  keys: [
                    { name: "Catalog", desc: "Up to 200 SKUs" },
                    { name: "Search", desc: "Faceted filters" },
                  ],
                },
              ],
              range: [
                {
                  title: "Scale+",
                  description: "Headless + OMS/ERP integrations",
                  price: "$12,000-$40,000",
                  delivery_time: "6-10 weeks",
                  keys: [
                    { name: "Headless", desc: "Next.js + CMS" },
                    { name: "ERP", desc: "OMS/Sync" },
                  ],
                },
              ],
            },
          },
        ],
      },
      "AI & Automation": {
        services: [
          {
            title: "AI Chatbots",
            description: "Custom RAG bots with analytics.",
            keys: [
              { name: "RAG", desc: "Docs/KB grounding" },
              { name: "Analytics", desc: "Convo insights" },
            ],
            pricing: {
              fixed: [
                {
                  title: "Starter Bot",
                  description: "FAQ & handoff",
                  price: "$1,499",
                  delivery_time: "1-2 weeks",
                  keys: [
                    { name: "Channels", desc: "Web widget" },
                    { name: "Handoff", desc: "Email/WA" },
                  ],
                },
              ],
              plus: [
                {
                  title: "Business Bot",
                  description: "RAG + lead capture",
                  price: "$3,999+",
                  delivery_time: "2-3 weeks",
                  keys: [
                    { name: "RAG", desc: "Docs/Notion" },
                    { name: "CRM", desc: "HubSpot/Pipedrive" },
                  ],
                },
              ],
              range: [
                {
                  title: "Enterprise Bot",
                  description: "SSO, guardrails, governance",
                  price: "$10,000-$50,000",
                  delivery_time: "4-8 weeks",
                  keys: [
                    { name: "SSO", desc: "SAML/OIDC" },
                    { name: "PII", desc: "Masking & audit" },
                  ],
                },
              ],
            },
          },
        ],
      },
    };
  }

  // Map upstream structure into UI shape: { [category]: { [serviceTitle]: plans[] } }
  const pricingData: PricingDataUI = {};
  for (const [categoryName, categoryVal] of Object.entries(categorized)) {
    const services = Array.isArray((categoryVal as any)?.services)
      ? (categoryVal as any).services
      : [];
    const serviceMap: Record<
      string,
      {
        fixed: {
          name: string;
          description: string;
          price: string;
          features: string[];
          delivery_time?: string;
        }[];
        plus: {
          name: string;
          description: string;
          price: string;
          features: string[];
          delivery_time?: string;
        }[];
        range: {
          name: string;
          description: string;
          price: string;
          features: string[];
          delivery_time?: string;
        }[];
      }
    > = {};
    for (const svc of services) {
      const title = String(svc?.title ?? "Untitled Service");
      const pricing = (svc as any)?.pricing || {};
      const collect = (arr: any[] | undefined) =>
        Array.isArray(arr) ? arr : [];
      const mapPlans = (arr: any[]) =>
        arr.map((p: any) => ({
          name: String(p?.title ?? "Custom"),
          description: String(p?.description ?? ""),
          price:
            p?.price !== undefined && p?.price !== null ? String(p.price) : "",
          features: Array.isArray(p?.keys)
            ? p.keys.map(
                (k: any) =>
                  `${String(k?.name ?? "Feature")}: ${String(k?.desc ?? "")}`
              )
            : [],
          delivery_time: p?.delivery_time ? String(p.delivery_time) : undefined,
        }));
      serviceMap[title] = {
        fixed: mapPlans(collect(pricing.fixed)),
        plus: mapPlans(collect(pricing.plus)),
        range: mapPlans(collect(pricing.range)),
      };
    }
    pricingData[categoryName] = serviceMap;
  }

  return <PricingClient pricingData={pricingData} />;
}
