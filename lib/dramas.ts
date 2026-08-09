import dramas from "@/data/dramas.json";
import { Drama, CategoryFilter } from "@/types/drama";

// Cast the imported JSON to our typed array
const allDramas = dramas as Drama[];

/** Return all dramas */
export function getAllDramas(): Drama[] {
  return allDramas;
}

/** Return a single drama by slug */
export function getDramaBySlug(slug: string): Drama | undefined {
  return allDramas.find((d) => d.slug === slug);
}

/** Return dramas filtered by category */
export function getDramasByCategory(category: CategoryFilter): Drama[] {
  if (category === "All") return allDramas;
  return allDramas.filter((d) => d.category === category);
}

/** Return the featured drama (first one marked featured) */
export function getFeaturedDrama(): Drama | undefined {
  return allDramas.find((d) => d.featured);
}

/** Return all unique slugs — used for static param generation */
export function getAllDramaSlugs(): string[] {
  return allDramas.map((d) => d.slug);
}

/** Search dramas by title (case-insensitive) across all categories */
export function searchDramas(query: string): Drama[] {
  const lower = query.toLowerCase().trim();
  if (!lower) return allDramas;
  return allDramas.filter(
    (d) =>
      d.title.toLowerCase().includes(lower) ||
      d.category.toLowerCase().includes(lower) ||
      d.genre.some((g) => g.toLowerCase().includes(lower)) ||
      d.country.toLowerCase().includes(lower)
  );
}
