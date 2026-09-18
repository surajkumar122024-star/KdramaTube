import type { Metadata } from "next";
import { getAllDramas } from "@/lib/dramas";
import CategorySection from "@/components/CategorySection";

export const metadata: Metadata = {
  title: "All Dramas",
  description:
    "Browse the complete DramaVerse catalog — every Korean, Chinese, and Turkish drama with ratings, cast details, and legal streaming links.",
  alternates: { canonical: "/all-dramas" },
};

export default function AllDramasPage() {
  const dramas = getAllDramas();

  return (
    <div className="pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-[var(--color-text)] mb-2">
          All Dramas
        </h1>
        <p className="text-[var(--color-muted)] text-sm sm:text-base mb-2">
          The complete DramaVerse catalog — every Korean, Chinese, and Turkish
          drama we cover, in one place.
        </p>
      </div>
      <CategorySection dramas={dramas} active="All" heading="All Dramas" />
    </div>
  );
}
