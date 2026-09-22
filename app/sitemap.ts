// src/app/sitemap.ts
import type { MetadataRoute } from "next";
import { getAllDramas } from "@/lib/dramas";
import { upcomingDramas } from "@/data/upcoming";

const categoryPages = [
  "korean-dramas",
  "chinese-dramas",
  "turkish-dramas",
  "all-dramas",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kdramatube.vercel.app";

  const staticRoutes = ["", "/about", "/contact", "/privacy-policy", "/terms", "/quiz"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: route === "" ? 1 : 0.6,
    })
  );

  // Top 10 page re-ranks itself daily and is a strong SEO/repeat-visitor page,
  // so it gets its own high-priority, frequently-changing entry.
  const topDramasRoute = {
    url: `${baseUrl}/top-dramas`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 0.9,
  };

  const categoryRoutes = categoryPages.map((cat) => ({
    url: `${baseUrl}/${cat}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 0.8,
  }));

  const dramaRoutes = getAllDramas().map((drama) => ({
    url: `${baseUrl}/drama/${drama.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const upcomingRoutes = upcomingDramas.map((drama) => ({
    url: `${baseUrl}/upcoming/${drama.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, topDramasRoute, ...categoryRoutes, ...dramaRoutes, ...upcomingRoutes];
}
