import { Drama, CategoryFilter } from "@/types/drama";
import CategoryButtons from "@/components/CategoryButtons";
import DramaGrid from "@/components/DramaGrid";

interface CategorySectionProps {
  dramas: Drama[];
  active: CategoryFilter;
  heading?: string;
}

export default function CategorySection({ dramas, active, heading }: CategorySectionProps) {
  const title = heading ?? (active === "All" ? "All Dramas" : `${active} Dramas`);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <h2 className="text-[var(--color-text)] font-bold text-xl flex items-center gap-3">
          <span className="w-1 h-6 rounded-full bg-[var(--color-accent)] block" aria-hidden="true" />
          {title}
          <span className="text-[var(--color-muted)] text-sm font-normal">({dramas.length})</span>
        </h2>
        <CategoryButtons active={active} />
      </div>

      <DramaGrid dramas={dramas} />
    </div>
  );
}
