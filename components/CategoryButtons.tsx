"use client";

import { CategoryFilter } from "@/types/drama";

interface CategoryButtonsProps {
  active: CategoryFilter;
  onChange: (category: CategoryFilter) => void;
}

const categories: CategoryFilter[] = ["All", "Korean", "Chinese", "Turkish"];

const categoryEmoji: Record<CategoryFilter, string> = {
  All: "🌏",
  Korean: "🇰🇷",
  Chinese: "🇨🇳",
  Turkish: "🇹🇷",
};

export default function CategoryButtons({ active, onChange }: CategoryButtonsProps) {
  return (
    <div
      role="group"
      aria-label="Filter dramas by category"
      className="flex flex-wrap gap-2 sm:gap-3"
    >
      {categories.map((cat) => {
        const isActive = active === cat;
        return (
          <button
            key={cat}
            id={`category-btn-${cat.toLowerCase()}`}
            onClick={() => onChange(cat)}
            aria-pressed={isActive}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${
              isActive
                ? "bg-violet-600 border-violet-500 text-white shadow-lg shadow-violet-600/30 scale-105"
                : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:border-white/20 hover:text-white"
            }`}
          >
            <span aria-hidden="true">{categoryEmoji[cat]}</span>
            {cat === "All" ? "All Dramas" : `${cat} Dramas`}
          </button>
        );
      })}
    </div>
  );
}
