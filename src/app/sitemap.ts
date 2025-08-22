import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const raw = "https://rizwanisolution.com/";
  const base = raw.replace(/\/+$/, "");
  const now = new Date().toISOString();
  const routes = [
    "",
    "/about",
    "/services",
    "/pricing",
    "/contact",
    "/privacy",
    "/terms",
  ];
  return routes.map((path) => ({
    url: `${base}${path || "/"}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));
}
