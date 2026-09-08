import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { SERVICES } from "@/lib/services";
import { POSTS } from "@/lib/blog";
import { LEGAL } from "@/lib/legal";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/servicii`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/proces`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/despre`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
  ];

  const servicePages: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${base}/servicii/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const blogPages: MetadataRoute.Sitemap = POSTS.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  const legalPages: MetadataRoute.Sitemap = Object.values(LEGAL).map((d) => ({
    url: `${base}/${d.slug}`,
    lastModified: new Date(d.updated),
    changeFrequency: "yearly",
    priority: 0.3,
  }));

  return [...staticPages, ...servicePages, ...blogPages, ...legalPages];
}
