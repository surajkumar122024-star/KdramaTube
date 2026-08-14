// lib/schema.ts
import type { Drama } from "@/types/drama";

const SITE_URL = "https://kdramatube.vercel.app";

function absoluteUrl(path: string) {
  return path.startsWith("http") ? path : `${SITE_URL}${path.startsWith("/") ? "" : "/"}${path}`;
}

export function generateDramaSchema(drama: Drama) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "TVSeries",
    name: drama.title,
    description: drama.story,
    image: absoluteUrl(drama.poster),
    genre: drama.genre,
    numberOfEpisodes: drama.episodes.length,
    countryOfOrigin: {
      "@type": "Country",
      name: drama.country,
    },
    datePublished: `${drama.year}`,
    url: `${SITE_URL}/drama/${drama.slug}`,
    // AggregateRating jaan-bujh kar nahi lagaya — dataset mein real ratingCount
    // nahi hai, aur bina genuine count ke Google isse fake-rating maan sakta hai.
  };

  if (drama.cast && drama.cast.length > 0) {
    schema.actor = drama.cast.map((member) => ({
      "@type": "Person",
      name: member.name,
      description: member.bio,
    }));
  }

  return schema;
}

export function generateDramaListSchema(dramas: Drama[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: dramas.map((d, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE_URL}/drama/${d.slug}`,
      name: d.title,
    })),
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "DramaVerse",
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}
