import type { Metadata } from "next";
import ServicesClient, { ServiceItem } from "./ServicesClient";

export const metadata: Metadata = {
  title: "Services — Web, Mobile, AI & Cloud",
  description:
    "End‑to‑end services: web development, mobile apps, UI/UX, API integration, cloud, cybersecurity, and digital marketing.",
  alternates: { canonical: "/services" },
  openGraph: {
    url: "/services",
    title: "Services — Rizwani Solutions",
    description:
      "Explore our web, mobile, AI, cloud, and marketing services designed to grow your business.",
  },
};

export default async function ServicesPage() {
  // Server-side fetch avoids CORS
  const res = await fetch(
    "https://rizwani-admin.vercel.app/api/client-services",
    { cache: "no-store" }
  );
  if (!res.ok) {
    // Graceful fallback to empty list
    return <ServicesClient items={[]} />;
  }
  const categorized = (await res.json()) as Record<string, any>;

  // Flatten categorized data to items expected by the UI
  const now = new Date().toISOString();
  const slug = (s: string) =>
    String(s)
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");

  const items: ServiceItem[] = Object.entries(categorized).flatMap(
    ([categoryName, value]) => {
      const services = Array.isArray((value as any)?.services)
        ? (value as any).services
        : [];
      return services.map((svc: any, idx: number) => ({
        id: `${slug(categoryName)}-${slug(String(svc?.title ?? idx))}`,
        categoryID: String(categoryName),
        title: String(svc?.title ?? "Untitled"),
        keys: Array.isArray(svc?.keys)
          ? svc.keys.map((k: any) => ({
              name: String(k?.name ?? ""),
              desc: String(k?.desc ?? ""),
            }))
          : [],
        description: String(svc?.description ?? ""),
        creatorID: String(svc?.creatorID ?? ""),
        status: "active",
        createdAt: now,
        updatedAt: now,
        Meta: Array.isArray(svc?.Meta) ? svc.Meta : [],
      }));
    }
  );

  return <ServicesClient items={items} />;
}
