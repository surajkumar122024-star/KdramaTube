// lib/schema.ts

export interface Drama {
  slug: string;
  title: string;
  story: string;
  poster?: string;
  genres: string[];
  year: number;
  country: string;
  episodes: number;
  rating?: number;       // e.g. 8.6
  ratingCount?: number;  // sirf real hone par pass karo
}

const SITE_URL = "https://kdramatube.vercel.app";

export function generateDramaSchema(drama: Drama) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "TVSeries",
    name: drama.title,
    description: drama.story,
    genre: drama.genres,
    numberOfEpisodes: drama.episodes,
    countryOfOrigin: {
      "@type": "Country",
      name: drama.country,
    },
    datePublished: `${drama.year}`,
    url: `${SITE_URL}/drama/${drama.slug}`,
  };

  if (drama.poster) schema.image = drama.poster;

  // Sirf real ratingCount hone par hi AggregateRating add karo
  if (drama.rating && drama.ratingCount) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: drama.rating,
      bestRating: "10",
      ratingCount: drama.ratingCount,
    };
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
