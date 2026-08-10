// components/WatchButtons.tsx
import { Drama } from "@/types/drama";

type Platform = {
  name: string;
  urlTemplate: (title: string) => string;
  color: string;
};

// Search-based links (never a broken/fake direct link - always lands on a real search results page)
const PLATFORMS_BY_CATEGORY: Record<Drama["category"], Platform[]> = {
  Korean: [
    { name: "Netflix", urlTemplate: (t) => `https://www.netflix.com/search?q=${encodeURIComponent(t)}`, color: "bg-red-600 hover:bg-red-500" },
    { name: "Viki", urlTemplate: (t) => `https://www.viki.com/search?q=${encodeURIComponent(t)}`, color: "bg-sky-500 hover:bg-sky-400" },
    { name: "Disney+", urlTemplate: (t) => `https://www.disneyplus.com/search?q=${encodeURIComponent(t)}`, color: "bg-blue-700 hover:bg-blue-600" },
  ],
  Chinese: [
    { name: "Viki", urlTemplate: (t) => `https://www.viki.com/search?q=${encodeURIComponent(t)}`, color: "bg-sky-500 hover:bg-sky-400" },
    { name: "iQIYI", urlTemplate: (t) => `https://www.iq.com/search?query=${encodeURIComponent(t)}`, color: "bg-green-600 hover:bg-green-500" },
    { name: "Netflix", urlTemplate: (t) => `https://www.netflix.com/search?q=${encodeURIComponent(t)}`, color: "bg-red-600 hover:bg-red-500" },
  ],
  Turkish: [
    { name: "Netflix", urlTemplate: (t) => `https://www.netflix.com/search?q=${encodeURIComponent(t)}`, color: "bg-red-600 hover:bg-red-500" },
    { name: "Viki", urlTemplate: (t) => `https://www.viki.com/search?q=${encodeURIComponent(t)}`, color: "bg-sky-500 hover:bg-sky-400" },
    { name: "Prime Video", urlTemplate: (t) => `https://www.amazon.com/s?k=${encodeURIComponent(t)}&i=instant-video`, color: "bg-cyan-700 hover:bg-cyan-600" },
  ],
};

export default function WatchButtons({ drama }: { drama: Drama }) {
  const platforms = PLATFORMS_BY_CATEGORY[drama.category] ?? [];

  return (
    <div className="mt-6">
      <h3 className="text-sm font-semibold text-slate-300 mb-3">
        Where to Watch
      </h3>
      <div className="flex flex-wrap gap-3">
        {platforms.map((platform) => (
          <a
            key={platform.name}
            href={platform.urlTemplate(drama.title)}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className={`${platform.color} text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors`}
          >
            Watch on {platform.name} &rarr;
          </a>
        ))}
      </div>
      <p className="text-xs text-slate-500 mt-3">
        Availability varies by region. Links open an official platform search
        for &quot;{drama.title}&quot;.
      </p>
    </div>
  );
}
