import { getAllDramas, getFeaturedDrama } from "@/lib/dramas";
import { Drama } from "@/types/drama";
import { upcomingDramas } from "@/data/upcoming";
import FeaturedCard from "@/components/FeaturedCard";
import TrendingRow from "@/components/TrendingRow";
import UpcomingRow from "@/components/UpcomingRow";
import CategorySection from "@/components/CategorySection";

const TRENDING_SLUGS = [
  "squid-game",
  "when-life-gives-you-tangerines",
  "bon-appetit-your-majesty",
  "queen-of-tears",
  "crash-landing-on-you",
  "dear-x",
  "the-glory",
  "true-beauty",
  "goblin",
  "the-manipulated",
];

export default function HomePageContent() {
  const allDramas = getAllDramas();
  const featured = getFeaturedDrama();
  const trendingDramas = TRENDING_SLUGS
    .map((slug) => allDramas.find((d) => d.slug === slug))
    .filter((d): d is Drama => Boolean(d));
  const schoolDramas = allDramas.filter((d) => d.genre.includes("School"));

  return (
    <>
      {/* Hero section */}
      <div className="hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-8">
          {/* Page heading */}
          <div className="mb-8">
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-[var(--color-text)] mb-2">
              Discover Your Next Drama
            </h1>
            <p className="text-[var(--color-muted)] text-sm sm:text-base">
              Explore the best Korean, Chinese, and Turkish dramas — all in one place.
            </p>
          </div>

          {/* Featured Drama */}
          {featured && (
            <section aria-labelledby="featured-heading" className="mb-10">
              <h2 id="featured-heading" className="sr-only">
                Featured Drama
              </h2>
              <FeaturedCard drama={featured} />
            </section>
          )}
        </div>
      </div>

      {/* Trending row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <TrendingRow dramas={trendingDramas} />
        <TrendingRow dramas={schoolDramas} title="Popular School Dramas" headingId="school-dramas-heading" />
        <UpcomingRow dramas={upcomingDramas} />
      </div>

      {/* Catalog section — full library, with links to dedicated category pages */}
      <CategorySection dramas={allDramas} active="All" heading="Browse the Catalog" />
    </>
  );
}
