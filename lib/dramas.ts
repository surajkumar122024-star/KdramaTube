import dramas from "@/data/dramas.json";
import { moreKoreanDramas1, mergeDramas } from "@/data/moreKoreanDramas1";
import { Drama, CategoryFilter } from "@/types/drama";

// Cast the imported JSON to our typed array, then add the extra dramas
// (agar koi slug pehle se hai to wo dobara add nahi hoti)
const allDramas: Drama[] = mergeDramas(dramas as Drama[], moreKoreanDramas1);

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

/** Return dramas most similar to the current one, scored by shared genres
 *  (primary signal) with same-category as a secondary boost — powers the
 *  "You Might Also Like" section on each drama's detail page. */
export function getRelatedDramas(current: Drama, limit = 4): Drama[] {
  const scored = allDramas
    .filter((d) => d.slug !== current.slug)
    .map((d) => {
      const sharedGenres = d.genre.filter((g) => current.genre.includes(g)).length;
      const sameCategory = d.category === current.category ? 1 : 0;
      const score = sharedGenres * 3 + sameCategory;
      return { drama: d, score };
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score || b.drama.rating - a.drama.rating)
    .map((r) => r.drama);

  if (scored.length >= limit) return scored.slice(0, limit);

  // Backfill with same-category dramas if genre overlap alone isn't enough
  const seen = new Set(scored.map((d) => d.slug));
  const backfill = allDramas.filter(
    (d) => d.slug !== current.slug && d.category === current.category && !seen.has(d.slug)
  );
  return [...scored, ...backfill].slice(0, limit);
}

/** "Tae-ri", "Taeri", "tae ri" — sab ek jaise ho jayein (space, hyphen, accents hata do) */
const normalize = (s: string): string =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, "");

/** Search dramas by title, category, genre, country or actor name (case-insensitive) */
export function searchDramas(query: string): Drama[] {
  const lower = query.toLowerCase().trim();
  if (!lower) return allDramas;
  const q = normalize(query);
  return allDramas.filter(
    (d) =>
      d.title.toLowerCase().includes(lower) ||
      d.category.toLowerCase().includes(lower) ||
      d.genre.some((g) => g.toLowerCase().includes(lower)) ||
      d.country.toLowerCase().includes(lower) ||
      (q.length > 0 && (d.cast ?? []).some((c) => normalize(c.name).includes(q)))
  );
}
