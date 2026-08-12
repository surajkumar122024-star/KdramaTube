import Link from "next/link";
import { Drama } from "@/types/drama";

interface DramaCardProps {
  drama: Drama;
}

// Unique gradient per category used as poster placeholder
const placeholderGradients: Record<string, string> = {
  Korean: "from-violet-900 via-purple-800 to-indigo-900",
  Chinese: "from-rose-900 via-red-800 to-pink-900",
  Turkish: "from-amber-900 via-orange-800 to-red-900",
};

const categoryBadgeColors: Record<string, string> = {
  Korean: "bg-violet-500/20 text-violet-300 border-violet-500/30",
  Chinese: "bg-rose-500/20 text-rose-300 border-rose-500/30",
  Turkish: "bg-amber-500/20 text-amber-300 border-amber-500/30",
};

export default function DramaCard({ drama }: DramaCardProps) {
  const gradient = placeholderGradients[drama.category] ?? "from-slate-900 to-slate-800";
  const badgeColor = categoryBadgeColors[drama.category] ?? "bg-slate-500/20 text-slate-300 border-slate-500/30";

  return (
    <Link
      href={`/drama/${drama.slug}`}
      id={`drama-card-${drama.slug}`}
      className="group block rounded-xl overflow-hidden bg-slate-800/50 border border-slate-700/50 hover:border-violet-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-900/20"
      aria-label={`View details for ${drama.title}`}
    >
      {/* Poster area */}
      <div className="relative aspect-[2/3] overflow-hidden">
        {drama.poster ? (
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
            style={{ backgroundImage: `url(${drama.poster})` }}
            role="img"
            aria-label={`${drama.title} poster`}
          />
        ) : (
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient} transition-transform duration-500 group-hover:scale-105 flex items-center justify-center`}>
            <div className="text-center px-3">
              <span className="text-white/20 font-black text-7xl leading-none select-none block">
                {drama.title.charAt(0)}
              </span>
            </div>
          </div>
        )}

        {/* Rating badge */}
        <div className="absolute top-2 right-2 flex items-center gap-1 bg-black/60 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-bold text-yellow-400">
          <span aria-hidden="true">★</span>
          <span>{drama.rating}</span>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
          <span className="text-white text-xs font-semibold">View Details →</span>
        </div>
      </div>

      {/* Info */}
      <div className="p-3">
        <h3 className="text-white font-bold text-sm leading-tight mb-2 line-clamp-2 group-hover:text-violet-300 transition-colors">
          {drama.title}
        </h3>
        <div className="flex items-center justify-between gap-2">
          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${badgeColor}`}>
            {drama.category}
          </span>
          <span className="text-slate-400 text-xs">{drama.year}</span>
        </div>
        <p className="text-slate-500 text-xs mt-1">{drama.country}</p>
      </div>
    </Link>
  );
}
