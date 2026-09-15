import Link from "next/link";
import { Drama } from "@/types/drama";

interface FeaturedCardProps {
  drama: Drama;
}

const originAccent: Record<string, string> = {
  Korean: "var(--color-korean)",
  Chinese: "var(--color-chinese)",
  Turkish: "var(--color-turkish)",
};

export default function FeaturedCard({ drama }: FeaturedCardProps) {
  const accent = originAccent[drama.category] ?? "var(--color-muted)";

  return (
    <article
      className="relative w-full overflow-hidden rounded-2xl min-h-[420px] sm:min-h-[480px] flex items-end group border"
      style={{ borderColor: "var(--color-border)" }}
    >
      {/* Background: poster image or typographic placeholder */}
      {drama.poster ? (
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url(${drama.poster})` }}
          role="img"
          aria-label={`${drama.title} poster`}
        />
      ) : (
        <div
          className="absolute inset-0 flex items-center justify-center transition-transform duration-700 group-hover:scale-105"
          style={{ background: "linear-gradient(155deg, #1a1613 0%, #241d18 100%)" }}
          aria-hidden="true"
        >
          <span
            className="font-display italic select-none"
            style={{ color: accent, opacity: 0.22, fontSize: "16rem", lineHeight: 1 }}
          >
            {drama.title.charAt(0)}
          </span>
        </div>
      )}

      {/* Origin spine */}
      <div
        className="absolute top-0 left-0 bottom-0 w-1"
        style={{ background: accent }}
        aria-hidden="true"
      />

      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />

      {/* Content */}
      <div className="relative z-10 p-6 sm:p-10 w-full max-w-2xl">
        <div className="flex items-center gap-3 mb-3 text-xs font-semibold">
          <span className="flex items-center gap-1.5" style={{ color: accent }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: accent }} />
            {drama.category}
          </span>
          <span className="text-[var(--color-accent)]">Now screening</span>
        </div>

        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[var(--color-text)] leading-[1.05] mb-3 tracking-tight">
          {drama.title}
        </h2>

        <div className="flex items-center gap-3 text-sm text-[var(--color-muted)] mb-4">
          <span>{drama.year}</span>
          <span className="w-1 h-1 rounded-full bg-[var(--color-border)]" />
          <span>{drama.country}</span>
          <span className="w-1 h-1 rounded-full bg-[var(--color-border)]" />
          <span className="flex items-center gap-1">
            <span style={{ color: "var(--color-accent)" }}>★</span>
            {drama.rating}
          </span>
        </div>

        <p className="text-[var(--color-muted)] text-sm sm:text-base leading-relaxed mb-6 max-w-lg line-clamp-2">
          {drama.description}
        </p>

        <Link
          href={`/drama/${drama.slug}`}
          id={`featured-view-${drama.slug}`}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--color-accent)] hover:bg-[var(--color-accent-soft)] text-[#1a1310] font-semibold text-sm transition-all duration-200"
        >
          View details
          <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
