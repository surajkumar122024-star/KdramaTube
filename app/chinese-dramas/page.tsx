import type { Metadata } from "next";
import { getAllDramas } from "@/lib/dramas";
import CategorySection from "@/components/CategorySection";

export const metadata: Metadata = {
  title: "Chinese Dramas",
  description:
    "Browse our full catalog of Chinese dramas (C-dramas) — synopses, ratings, cast, and where to legally stream each show.",
  alternates: { canonical: "/chinese-dramas" },
};

export default function ChineseDramasPage() {
  const dramas = getAllDramas().filter((d) => d.category === "Chinese");

  return (
    <div className="pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-[var(--color-text)] mb-2">
          Chinese Dramas
        </h1>
        <p className="text-[var(--color-muted)] text-sm sm:text-base mb-2">
          From sweeping historical epics to modern romances, explore our full
          catalog of Chinese dramas (C-dramas) with ratings, cast details, and
          legal streaming links.
        </p>
      </div>
      <CategorySection dramas={dramas} active="Chinese" heading="Chinese Dramas" />
    </div>
  );
}
