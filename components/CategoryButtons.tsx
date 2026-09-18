import Link from "next/link";
import { CategoryFilter } from "@/types/drama";

interface CategoryButtonsProps {
  active: CategoryFilter;
}

const categories: { label: CategoryFilter; href: string }[] = [
  { label: "All", href: "/all-dramas" },
  { label: "Korean", href: "/korean-dramas" },
  { label: "Chinese", href: "/chinese-dramas" },
  { label: "Turkish", href: "/turkish-dramas" },
];

const categoryAccent: Record<CategoryFilter, string | null> = {
  All: null,
  Korean: "var(--color-korean)",
  Chinese: "var(--color-chinese)",
  Turkish: "var(--color-turkish)",
};

export default function CategoryButtons({ active }: CategoryButtonsProps) {
  return (
    <div
      role="group"
      aria-label="Filter dramas by category"
      className="flex flex-wrap gap-2 sm:gap-3"
    >
      {categories.map((cat) => {
        const isActive = active === cat.label;
        const accent = categoryAccent[cat.label];
        return (
          <Link
            key={cat.label}
            id={`category-btn-${cat.label.toLowerCase()}`}
            href={cat.href}
            aria-current={isActive ? "page" : undefined}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${
              isActive
                ? "bg-[var(--color-surface-raised)] border-[var(--color-accent)]/70 text-[var(--color-text)]"
                : "bg-transparent border-[var(--color-border)] text-[var(--color-muted)] hover:text-[var(--color-text)] hover:border-[var(--color-accent)]/40"
            }`}
          >
            {accent && (
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: accent }} aria-hidden="true" />
            )}
            {cat.label === "All" ? "All dramas" : `${cat.label} dramas`}
          </Link>
        );
      })}
    </div>
  );
}
