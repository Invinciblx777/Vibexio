import type { MetadataRoute } from "next";

const BASE = "https://vibexio.ai";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const entries: Array<{ path: string; priority: number; changeFrequency: "monthly" | "yearly" }> = [
    { path: "/", priority: 1.0, changeFrequency: "monthly" },
    { path: "/inside", priority: 0.8, changeFrequency: "monthly" },
    { path: "/ecosystem", priority: 0.8, changeFrequency: "monthly" },
    { path: "/clario", priority: 0.9, changeFrequency: "monthly" },
    { path: "/kubyn", priority: 0.9, changeFrequency: "monthly" },
    { path: "/aisolutions", priority: 0.9, changeFrequency: "monthly" },
    { path: "/itsolutions", priority: 0.9, changeFrequency: "monthly" },
    { path: "/pathways", priority: 0.7, changeFrequency: "monthly" },
    { path: "/collaborate", priority: 0.8, changeFrequency: "monthly" },
    { path: "/privacypolicies", priority: 0.3, changeFrequency: "yearly" },
  ];

  return entries.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
