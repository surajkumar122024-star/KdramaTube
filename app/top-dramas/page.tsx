import type { Metadata } from "next";
import Link from "next/link";
import { getTopDramas } from "@/lib/dramas";
import { generateDramaListSchema } from "@/lib/schema";
import SaveButton from "@/components/SaveButton";

// Revalidate once a day so the "Month Year" in the title/heading stays current
// without needing a redeploy, and the ranking refreshes if ratings/data change.
export const revalidate = 86400;

const originAccent: Record<string, string> = {
  Korean: "var(--color-korean)",
  Chinese: "var(--color-chinese)",
  Turkish: "var(--color-turkish)",
};

function currentMonthYear(): string {
  return new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

export function generateMetadata(): Metadata {
  const monthYear = currentMonthYear();
  return {
    title: `Top 10 Dramas of ${monthYear}`,
    description: `The 10 highest-rated Korean, Chinese, and Turkish dramas on DramaVerse right now, ranked and updated for ${monthYear} — with ratings, genres, and where to watch each one.`,
    alternates: { canonical: "/top-dramas" },
  };
}

export default function TopDramasPage() {
  const monthYear = currentMonthYear();
  const dramas = getTopDramas(10);

  return (
    <div className="pt-8 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateDramaListSchema(dramas)) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-[var(--color-text)] mb-2">
          Top 10 Dramas of {monthYear}
        </h1>
        <p className="text-[var(--color-muted)] text-sm sm:text-base mb-10">
          Our highest-rated Korean, Chinese, and Turkish dramas right now, ranked
          by rating across the whole DramaVerse catalog. This list refreshes
          automatically as ratings and new titles are added — bookmark it and
          check back each month.
        </p>

        <ol className="flex flex-col gap-4 sm:gap-5">
          {dramas.map((drama, i) => {
            const accent = originAccent[drama.category] ?? "var(--color-muted)";
            return (
              <li key={drama.id} className="relative">
                <SaveButton slug={drama.slug} className="absolute top-2 right-2 z-10" />
                <Link
                  href={`/drama/${drama.slug}`}
                  className="group flex gap-4 sm:gap-5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-3 sm:p-4 hover:border-[var(--color-accent)]/40 transition-all duration-300"
                  aria-label={`View details for ${drama.title}`}
                >
                  {/* Rank number */}
                  <span
                    className="font-display italic flex-shrink-0 w-10 sm:w-14 flex items-center justify-center text-3xl sm:text-4xl font-bold"
                    style={{ color: i < 3 ? "var(--color-accent)" : "var(--color-muted)", opacity: i < 3 ? 1 : 0.6 }}
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>

                  {/* Poster thumb */}
                  <div className="relative w-16 sm:w-20 aspect-[2/3] flex-shrink-0 rounded-lg overflow-hidden">
                    {drama.poster ? (
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                        style={{ backgroundImage: `url(${drama.poster})` }}
                        role="img"
                        aria-label={`${drama.title} poster`}
                      />
                    ) : (
                      <div
                        className="absolute inset-0 flex items-center justify-center"
                        style={{ background: "linear-gradient(155deg, #1a1613 0%, #221d19 100%)" }}
                      >
                        <span
                          className="font-display italic select-none"
                          style={{ color: accent, opacity: 0.25, fontSize: "2rem", lineHeight: 1 }}
                        >
                          {drama.title.charAt(0)}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0 py-1">
                    <div className="flex items-start justify-between gap-3">
                      <h2 className="text-[var(--color-text)] font-semibold text-base sm:text-lg leading-tight group-hover:text-[var(--color-accent)] transition-colors">
                        {drama.title}
                      </h2>
                      <span className="flex-shrink-0 flex items-center gap-1 text-xs sm:text-sm font-bold text-[var(--color-accent)]">
                        <span aria-hidden="true">★</span>
                        {drama.rating}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mt-1 mb-2">
                      <span className="flex items-center gap-1.5 text-xs font-medium text-[var(--color-muted)]">
                        <span className="w-1.5 h-1.5 rounded-full" style={{ background: accent }} />
                        {drama.category}
                      </span>
                      <span className="text-[var(--color-muted)] text-xs">· {drama.year}</span>
                    </div>
                    <p className="text-[var(--color-muted)] text-xs sm:text-sm line-clamp-2">
                      {drama.description}
                    </p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ol>

        <p className="text-[var(--color-muted)] text-sm mt-10">
          Want more? Browse the{" "}
          <Link href="/all-dramas" className="text-[var(--color-accent)] hover:underline">
            complete DramaVerse catalog
          </Link>{" "}
          across Korean, Chinese, and Turkish dramas.
        </p>
      </div>
    </div>
  );
}
