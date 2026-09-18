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
      className="relative w-full overflow-hidden rounded-2xl border flex flex-col sm:flex-row"
      style={{
        borderColor: "var(--color-border)",
        background: "linear-gradient(155deg, #1a1613 0%, #211b17 100%)",
      }}
    >
      {/* Poster — shown at its own aspect ratio, never stretched or upscaled into blur */}
      <div className="relative w-full sm:w-[260px] lg:w-[300px] flex-shrink-0 aspect-[2/3] sm:aspect-auto sm:self-stretch">
        {drama.poster ? (
          <img
            src={drama.poster}
            alt={`${drama.title} poster`}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
            <span
              className="font-display italic select-none"
              style={{ color: accent, opacity: 0.3, fontSize: "6rem", lineHeight: 1 }}
            >
              {drama.title.charAt(0)}
            </span>
          </div>
        )}
        {/* soft edge fade into the panel, desktop only */}
        <div className="hidden sm:block absolute inset-y-0 right-0 w-16 bg-gradient-to-r from-transparent to-[#1a1613]" />
        <div className="sm:hidden absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#1a1613] to-transparent" />
      </div>

      {/* Content panel */}
      <div className="relative z-10 flex-1 p-6 sm:p-8 lg:p-10 flex flex-col justify-center min-w-0">
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

        <p className="text-[var(--color-muted)] text-sm sm:text-base leading-relaxed mb-6 max-w-lg line-clamp-3">
          {drama.description}
        </p>

        <Link
          href={`/drama/${drama.slug}`}
          id={`featured-view-${drama.slug}`}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--color-accent)] hover:bg-[var(--color-accent-soft)] text-[#1a1310] font-semibold text-sm transition-all duration-200 w-fit"
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
