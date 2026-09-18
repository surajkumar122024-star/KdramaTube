"use client";

import { CategoryFilter } from "@/types/drama";

interface CategoryButtonsProps {
  active: CategoryFilter;
  onChange: (category: CategoryFilter) => void;
}

const categories: CategoryFilter[] = ["All", "Korean", "Chinese", "Turkish"];

const categoryAccent: Record<CategoryFilter, string | null> = {
  All: null,
  Korean: "var(--color-korean)",
  Chinese: "var(--color-chinese)",
  Turkish: "var(--color-turkish)",
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
        const accent = categoryAccent[cat];
        return (
          <button
            key={cat}
            id={`category-btn-${cat.toLowerCase()}`}
            onClick={() => onChange(cat)}
            aria-pressed={isActive}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${
              isActive
                ? "bg-[var(--color-surface-raised)] border-[var(--color-accent)]/70 text-[var(--color-text)]"
                : "bg-transparent border-[var(--color-border)] text-[var(--color-muted)] hover:text-[var(--color-text)] hover:border-[var(--color-accent)]/40"
            }`}
          >
            {accent && (
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: accent }} aria-hidden="true" />
            )}
            {cat === "All" ? "All dramas" : `${cat} dramas`}
          </button>
        );
      })}
    </div>
  );
}
