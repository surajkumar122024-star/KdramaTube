export interface Episode {
  title: string;
  url: string;
}

export interface Drama {
  id: string;
  slug: string;
  title: string;
  category: "Korean" | "Chinese" | "Turkish";
  country: string;
  year: number;
  rating: number;
  poster: string; // URL or local path — swap in real URL later
  description: string; // Short text for cards
  story: string; // Full synopsis for detail page
  genre: string[];
  featured: boolean;
  episodes: Episode[];
}

export type CategoryFilter = "All" | "Korean" | "Chinese" | "Turkish";
