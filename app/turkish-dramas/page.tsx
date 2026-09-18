import type { Metadata } from "next";
import { getAllDramas } from "@/lib/dramas";
import CategorySection from "@/components/CategorySection";

export const metadata: Metadata = {
  title: "Turkish Dramas",
  description:
    "Browse our full catalog of Turkish dramas (dizi) — synopses, ratings, cast, and where to legally stream each show.",
  alternates: { canonical: "/turkish-dramas" },
};

export default function TurkishDramasPage() {
  const dramas = getAllDramas().filter((d) => d.category === "Turkish");

  return (
    <div className="pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-[var(--color-text)] mb-2">
          Turkish Dramas
        </h1>
        <p className="text-[var(--color-muted)] text-sm sm:text-base mb-2">
          From epic historical sagas to passionate romances, explore our full
          catalog of Turkish dramas (dizi) with ratings, cast details, and legal
          streaming links.
        </p>
      </div>
      <CategorySection dramas={dramas} active="Turkish" heading="Turkish Dramas" />
    </div>
  );
}
