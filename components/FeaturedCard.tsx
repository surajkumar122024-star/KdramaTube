import Link from "next/link";
import { Drama } from "@/types/drama";

interface FeaturedCardProps {
  drama: Drama;
}

const categoryColors: Record<string, string> = {
  Korean: "bg-violet-600/80 text-violet-100",
  Chinese: "bg-rose-600/80 text-rose-100",
  Turkish: "bg-amber-600/80 text-amber-100",
};

export default function FeaturedCard({ drama }: FeaturedCardProps) {
  const badgeColor = categoryColors[drama.category] ?? "bg-slate-600/80 text-slate-100";

  return (
    <article className="relative w-full overflow-hidden rounded-2xl min-h-[420px] sm:min-h-[480px] flex items-end group">
      {/* Background: poster image or gradient fallback */}
      {drama.poster ? (
        // When a real poster URL is set, this renders the image
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url(${drama.poster})` }}
          role="img"
          aria-label={`${drama.title} poster`}
        />
      ) : (
        /* Placeholder gradient that looks intentional */
        <div
          className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
          style={{
            background:
              "linear-gradient(135deg, #1e0a3c 0%, #3b0764 25%, #4c0571 50%, #7c3aed 75%, #a855f7 100%)",
          }}
          aria-hidden="true"
        >
          {/* Decorative pattern overlay */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, #ec4899 0%, transparent 50%),
                                radial-gradient(circle at 80% 20%, #8b5cf6 0%, transparent 40%),
                                radial-gradient(circle at 60% 80%, #06b6d4 0%, transparent 40%)`,
            }}
          />
          {/* Drama initial as decorative element */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <span className="text-white font-black text-[20rem] leading-none select-none">
              {drama.title.charAt(0)}
            </span>
          </div>
        </div>
      )}

      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 p-6 sm:p-10 w-full max-w-2xl">
        {/* Category + Featured badges */}
        <div className="flex items-center gap-2 mb-3">
          <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${badgeColor} backdrop-blur-sm`}>
            {drama.category}
          </span>
          <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-300 border border-yellow-500/30 backdrop-blur-sm">
            ★ Featured
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-3 tracking-tight">
          {drama.title}
        </h2>

        {/* Meta */}
        <div className="flex items-center gap-3 text-sm text-slate-300 mb-4">
          <span>{drama.year}</span>
          <span className="w-1 h-1 rounded-full bg-slate-500" />
          <span>{drama.country}</span>
          <span className="w-1 h-1 rounded-full bg-slate-500" />
          <span className="flex items-center gap-1">
            <span className="text-yellow-400">★</span>
            {drama.rating}
          </span>
        </div>

        {/* Description */}
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 max-w-lg line-clamp-2">
          {drama.description}
        </p>

        {/* CTA */}
        <Link
          href={`/drama/${drama.slug}`}
          id={`featured-view-${drama.slug}`}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-violet-600/40 hover:shadow-violet-500/50 hover:-translate-y-0.5 active:translate-y-0"
        >
          View Details
          <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
