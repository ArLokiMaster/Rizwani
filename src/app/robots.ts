import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const raw = "https://rizwanisolution.com/";
  const base = raw.replace(/\/+$/, "");
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [],
    },
    sitemap: [`${base}/sitemap.xml`],
    host: base,
  };
}
