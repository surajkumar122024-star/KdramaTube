// src/app/sitemap.ts
import type { MetadataRoute } from "next";
import { getAllDramas } from "@/lib/dramas";

const categoryPages = [
  "korean-dramas",
  "chinese-dramas",
  "turkish-dramas",
  "all-dramas",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kdramatube.vercel.app";

  const staticRoutes = ["", "/about", "/contact", "/privacy-policy"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: route === "" ? 1 : 0.6,
    })
  );

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

  return [...staticRoutes, ...categoryRoutes, ...dramaRoutes];
}
