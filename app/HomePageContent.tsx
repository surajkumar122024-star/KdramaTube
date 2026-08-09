"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { getAllDramas, getFeaturedDrama } from "@/lib/dramas";
import { CategoryFilter, Drama } from "@/types/drama";
import CategoryButtons from "@/components/CategoryButtons";
import FeaturedCard from "@/components/FeaturedCard";
import DramaGrid from "@/components/DramaGrid";

export default function HomePageContent() {
  const searchParams = useSearchParams();
  const initialCategory = (searchParams.get("category") as CategoryFilter) || "All";

  const [activeCategory, setActiveCategory] = useState<CategoryFilter>(initialCategory);
  const [dramas, setDramas] = useState<Drama[]>([]);

  const allDramas = getAllDramas();
  const featured = getFeaturedDrama();

  useEffect(() => {
    const category = (searchParams.get("category") as CategoryFilter) || "All";
    setActiveCategory(category);
  }, [searchParams]);

  useEffect(() => {
    if (activeCategory === "All") {
      setDramas(allDramas);
    } else {
      setDramas(allDramas.filter((d) => d.category === activeCategory));
    }
  }, [activeCategory, allDramas]);

  const handleCategoryChange = (cat: CategoryFilter) => {
    setActiveCategory(cat);
    const url = cat === "All" ? "/" : `/?category=${cat}`;
    window.history.pushState({}, "", url);
  };

  return (
    <>
      {/* Hero section */}
      <div className="hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-8">
          {/* Page heading */}
          <div className="mb-8">
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-2">
              Discover Your Next Drama
            </h1>
            <p className="text-slate-400 text-sm sm:text-base">
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

      {/* Catalog section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Category filter row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <h2 className="text-white font-bold text-xl flex items-center gap-3">
            <span className="w-1 h-6 rounded-full bg-violet-500 block" aria-hidden="true" />
            {activeCategory === "All" ? "All Dramas" : `${activeCategory} Dramas`}
            <span className="text-slate-500 text-sm font-normal">({dramas.length})</span>
          </h2>
          <CategoryButtons active={activeCategory} onChange={handleCategoryChange} />
        </div>

        <DramaGrid dramas={dramas} />
      </div>
    </>
  );
}
