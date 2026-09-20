import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { upcomingDramas } from "@/data/upcoming";
import { getYouTubeEmbedUrl } from "@/lib/youtube";

const categoryAccent: Record<string, string> = {
  Korean: "var(--color-korean)",
  Chinese: "var(--color-chinese)",
  Turkish: "var(--color-turkish)",
};

export function generateStaticParams() {
  return upcomingDramas.map((d) => ({ id: d.id }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const drama = upcomingDramas.find((d) => d.id === id);
  if (!drama) return {};

  return {
    title: `${drama.title} — Coming ${drama.expectedRelease}`,
    description: drama.synopsis,
    alternates: { canonical: `/upcoming/${drama.id}` },
    openGraph: {
      title: drama.title,
      description: drama.synopsis,
      images: drama.poster ? [{ url: drama.poster }] : undefined,
    },
  };
}

export default async function UpcomingDetailPage({ params }: PageProps) {
  const { id } = await params;
  const drama = upcomingDramas.find((d) => d.id === id);
  if (!drama) notFound();

  const accent = categoryAccent[drama.category] ?? "var(--color-muted)";
  const trailerEmbedUrl = drama.trailerUrl ? getYouTubeEmbedUrl(drama.trailerUrl) : null;

  return (
    <div className="pt-8 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm text-[var(--color-muted)] hover:text-[var(--color-accent)] mb-6 transition-colors"
        >
          <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M10 3L5 8l5 5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to home
        </Link>

        <div className="flex flex-col sm:flex-row gap-6 mb-8">
          {/* Poster / artwork */}
          <div
            className="relative w-full sm:w-56 flex-shrink-0 aspect-[2/3] sm:aspect-[2/3] rounded-xl overflow-hidden border"
            style={{
              borderColor: "var(--color-border)",
              background: "linear-gradient(155deg, #1a1613 0%, #221d19 100%)",
            }}
          >
            {drama.poster ? (
              <img
                src={drama.poster}
                alt={`${drama.title} artwork`}
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="font-display italic select-none"
                  style={{ color: accent, opacity: 0.35, fontSize: "5rem", lineHeight: 1 }}
                >
                  {drama.title.charAt(0)}
                </span>
              </div>
            )}
          </div>

          <div className="flex-1">
            <span className="inline-block bg-[var(--color-accent)] text-[#1a1310] text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full mb-3">
              Coming {drama.expectedRelease}
            </span>
            <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-[var(--color-text)] leading-tight mb-3">
              {drama.title}
            </h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-[var(--color-text)] mb-3">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: accent }} />
                {drama.category} Drama
              </span>
              <span className="text-[var(--color-muted)]">|</span>
              <span>{drama.country}</span>
              <span className="text-[var(--color-muted)]">|</span>
              <span>{drama.platform}</span>
            </div>
            <p className="text-[var(--color-muted)] text-sm sm:text-base leading-relaxed">
              {drama.synopsis}
            </p>
          </div>
        </div>

        {/* Trailer */}
        {trailerEmbedUrl && (
          <section className="mb-8">
            <h2 className="text-[var(--color-text)] font-bold text-xl flex items-center gap-3 mb-3">
              <span className="w-1 h-6 rounded-full bg-[var(--color-accent)] block" aria-hidden="true" />
              Trailer
            </h2>
            <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-[var(--color-border)]">
              <iframe
                src={trailerEmbedUrl}
                title={`${drama.title} — Trailer`}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </section>
        )}

        {/* About */}
        <section className="mb-8">
          <h2 className="text-[var(--color-text)] font-bold text-xl flex items-center gap-3 mb-3">
            <span className="w-1 h-6 rounded-full bg-[var(--color-accent)] block" aria-hidden="true" />
            About
          </h2>
          <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-5">
            <p className="text-[var(--color-text)] leading-relaxed">{drama.about}</p>
          </div>
        </section>

        {/* Cast */}
        {drama.cast.length > 0 && (
          <section className="mb-8">
            <h2 className="text-[var(--color-text)] font-bold text-xl flex items-center gap-3 mb-3">
              <span className="w-1 h-6 rounded-full bg-[var(--color-accent)] block" aria-hidden="true" />
              Cast
            </h2>
            <div className="flex flex-wrap gap-2">
              {drama.cast.map((name) => (
                <span
                  key={name}
                  className="text-sm font-medium px-3 py-1.5 rounded-full border border-[var(--color-border)] text-[var(--color-text)]"
                >
                  {name}
                </span>
              ))}
            </div>
          </section>
        )}

        <p className="text-xs text-[var(--color-muted)]">
          This title has not been released yet. Release windows, platforms, and cast are based on
          official announcements and may change before launch.
        </p>
      </div>
    </div>
  );
}
