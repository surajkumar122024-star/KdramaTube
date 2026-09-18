import CastList from "@/components/CastList";
import { getRelatedDramas } from "@/lib/dramas";
import RelatedDramas from "@/components/RelatedDramas";
import { notFound } from "next/navigation";
import { generateDramaSchema } from "@/lib/schema";
import WatchButtons from "@/components/WatchButtons";
import { Metadata } from "next";
import Link from "next/link";
import { getDramaBySlug, getAllDramaSlugs } from "@/lib/dramas";
import EpisodeList from "@/components/EpisodeList";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static paths for all dramas at build time
export async function generateStaticParams() {
  const slugs = getAllDramaSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Dynamic SEO metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const drama = getDramaBySlug(slug);
  if (!drama) return { title: "Drama Not Found" };

  return {
    title: drama.title,
    description: drama.description,
    openGraph: {
      title: drama.title,
      description: drama.description,
      type: "website",
    },
  };
}

const categoryAccent: Record<string, string> = {
  Korean: "var(--color-korean)",
  Chinese: "var(--color-chinese)",
  Turkish: "var(--color-turkish)",
};

export default async function DramaDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const drama = getDramaBySlug(slug);

  if (!drama) notFound();

const related = getRelatedDramas(drama);
  
  const accent = categoryAccent[drama.category] ?? "var(--color-muted)";

 return (
  <article>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(generateDramaSchema(drama)) }}
    />
    {/* Back nav */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[var(--color-muted)] hover:text-[var(--color-text)] text-sm transition-colors group"
        >
          <svg
            className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M10 3L5 8l5 5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to all dramas
        </Link>
      </div>

      {/* Hero / poster area */}
        <div className="relative w-full overflow-hidden" style={{ minHeight: "340px" }}>
          {/* Background */}
          {drama.poster ? (
            <div
              className="absolute inset-0 bg-cover bg-center scale-105"
              style={{ backgroundImage: `url(${drama.poster})` }}
              aria-hidden="true"
            />
          ) : (
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(155deg, #1a1613 0%, #221d19 100%)" }}
              aria-hidden="true"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="font-display italic select-none"
                  style={{ color: accent, opacity: 0.2, fontSize: "16rem", lineHeight: 1 }}
                >
                  {drama.title.charAt(0)}
                </span>
              </div>
            </div>
          )}
          {/* Origin spine */}
          <div className="absolute top-0 left-0 bottom-0 w-1 z-10" style={{ background: accent }} aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-[var(--color-bg)]/40 to-[var(--color-bg)]/10" />
        {/* Content overlay */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row gap-6 items-end">
          {/* Poster card */}
          <div className="flex-shrink-0">
            <div
              className="w-32 sm:w-44 aspect-[2/3] rounded-xl border overflow-hidden flex items-center justify-center"
              style={{ background: "linear-gradient(155deg, #1a1613 0%, #221d19 100%)", borderColor: "var(--color-border)" }}
              role={drama.poster ? undefined : "img"}
              aria-label={drama.poster ? undefined : `${drama.title} poster placeholder`}
            >
              {drama.poster ? (
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${drama.poster})` }}
                />
              ) : (
                <span className="font-display italic select-none text-6xl" style={{ color: accent, opacity: 0.4 }}>
                  {drama.title.charAt(0)}
                </span>
              )}
            </div>
          </div>

          {/* Title + meta */}
          <div className="flex-1 pb-2">
            {/* Category badge */}
            <span
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full border mb-3"
              style={{ borderColor: "var(--color-border)", color: "var(--color-text)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: accent }} />
              {drama.category} Drama
            </span>

            <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-[var(--color-text)] leading-tight mb-3">
              {drama.title}
            </h1>

            {/* Stats row */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-[var(--color-text)] mb-4">
              <span className="flex items-center gap-1">
                <span style={{ color: "var(--color-accent)" }}>★</span>
                <strong className="text-[var(--color-text)]">{drama.rating}</strong>
                <span className="text-[var(--color-muted)]">/10</span>
              </span>
              <span className="text-[var(--color-muted)]">|</span>
              <span>{drama.year}</span>
              <span className="text-[var(--color-muted)]">|</span>
              <span>{drama.country}</span>
              <span className="text-[var(--color-muted)]">|</span>
              <span>{drama.episodes?.length ?? drama.episodeCount ?? 0} Episodes</span>
            </div>

            {/* Genre badges */}
            <div className="flex flex-wrap gap-2">
              {drama.genre.map((g) => (
                <span
                  key={g}
                  className="text-xs font-medium px-3 py-1 rounded-full border text-[var(--color-muted)]"
                  style={{ borderColor: "var(--color-border)" }}
                >
                  {g}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Body content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        {/* Story / synopsis */}
        <section aria-labelledby="story-heading">
          <h2
            id="story-heading"
            className="text-xl font-bold text-[var(--color-text)] mb-4 flex items-center gap-3"
          >
            <span className="w-1 h-6 rounded-full bg-[var(--color-accent)] block" aria-hidden="true" />
            Story
          </h2>
          <div className="bg-[var(--color-surface)]/70 border border-[var(--color-border)] rounded-xl p-6">
            <p className="text-[var(--color-text)] leading-relaxed text-sm sm:text-base">
              {drama.story}
            </p>
          </div>
        </section>

        {/* Quick info panel */}
        <section aria-labelledby="info-heading">
          <h2
            id="info-heading"
            className="text-xl font-bold text-[var(--color-text)] mb-4 flex items-center gap-3"
          >
            <span className="w-1 h-6 rounded-full bg-[var(--color-accent)] block" aria-hidden="true" />
            Drama Info
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: "Country", value: drama.country },
              { label: "Year", value: drama.year.toString() },
              { label: "Rating", value: `★ ${drama.rating}/10` },
              { label: "Episodes", value: (drama.episodes?.length ?? drama.episodeCount ?? 0).toString() },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-[var(--color-surface)]/70 border border-[var(--color-border)] rounded-xl p-4 text-center"
              >
                <p className="text-[var(--color-muted)] text-xs uppercase tracking-wider mb-1">{item.label}</p>
                <p className="text-[var(--color-text)] font-bold text-sm">{item.value}</p>
              </div>
            ))}
          </div>
        </section>
        <WatchButtons drama={drama} />
        <CastList cast={drama.cast} />
        {/* Episodes */}
        <EpisodeList episodes={drama.episodes ?? []} dramaTitle={drama.title} dramaSlug={drama.slug} />
       <RelatedDramas dramas={related} />
      </div>
    </article>
  );
}
