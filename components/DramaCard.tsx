import Link from "next/link";
import { Drama } from "@/types/drama";

interface DramaCardProps {
  drama: Drama;
}

const originAccent: Record<string, string> = {
  Korean: "var(--color-korean)",
  Chinese: "var(--color-chinese)",
  Turkish: "var(--color-turkish)",
};

export default function DramaCard({ drama }: DramaCardProps) {
  const accent = originAccent[drama.category] ?? "var(--color-muted)";

  return (
    <Link
      href={`/drama/${drama.slug}`}
      id={`drama-card-${drama.slug}`}
      className="group block rounded-xl overflow-hidden bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-accent)]/40 transition-all duration-300"
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
          <div
            className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:scale-105"
            style={{ background: "linear-gradient(155deg, #1a1613 0%, #221d19 100%)" }}
          >
            <span
              className="font-display italic select-none"
              style={{ color: accent, opacity: 0.25, fontSize: "4.5rem", lineHeight: 1 }}
            >
              {drama.title.charAt(0)}
            </span>
          </div>
        )}

        {/* Origin spine */}
        <div className="absolute top-0 left-0 bottom-0 w-[3px]" style={{ background: accent }} aria-hidden="true" />

        {/* Rating badge */}
        <div className="absolute top-2 right-2 flex items-center gap-1 bg-black/60 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-bold text-[var(--color-accent)]">
          <span aria-hidden="true">★</span>
          <span>{drama.rating}</span>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
          <span className="text-[var(--color-text)] text-xs font-semibold">View details</span>
        </div>
      </div>

      {/* Info */}
      <div className="p-3">
        <h3 className="text-[var(--color-text)] font-semibold text-sm leading-tight mb-2 line-clamp-2 group-hover:text-[var(--color-accent)] transition-colors">
          {drama.title}
        </h3>
        <div className="flex items-center justify-between gap-2">
          <span className="flex items-center gap-1.5 text-xs font-medium text-[var(--color-muted)]">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: accent }} />
            {drama.category}
          </span>
          <span className="text-[var(--color-muted)] text-xs">{drama.year}</span>
        </div>
      </div>
    </Link>
  );
}
