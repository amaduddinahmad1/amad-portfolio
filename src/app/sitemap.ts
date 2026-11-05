import type { MetadataRoute } from "next";
import { projects, seo } from "@/data/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: seo.siteUrl, priority: 1 },
    { url: `${seo.siteUrl}/projects`, priority: 0.8 },
    ...projects.map((project) => ({
      url: `${seo.siteUrl}/projects/${project.slug}`,
      priority: 0.7,
    })),
  ];
}
