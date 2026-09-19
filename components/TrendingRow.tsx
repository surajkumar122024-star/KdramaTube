import { Drama } from "@/types/drama";
import DramaCard from "./DramaCard";

interface TrendingRowProps {
  dramas: Drama[];
  title?: string;
  headingId?: string;
}

export default function TrendingRow({ dramas, title = "Trending Now", headingId = "trending-heading" }: TrendingRowProps) {
  if (dramas.length === 0) return null;

  return (
    <section aria-labelledby={headingId} className="mb-10">
      <h2
        id={headingId}
        className="text-[var(--color-text)] font-bold text-xl flex items-center gap-3 mb-4"
      >
        <span className="w-1 h-6 rounded-full bg-[var(--color-accent)] block" aria-hidden="true" />
        {title}
      </h2>
      <div className="flex gap-4 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 snap-x snap-mandatory">
        {dramas.map((drama) => (
          <div key={drama.slug} className="w-36 sm:w-44 flex-shrink-0 snap-start">
            <DramaCard drama={drama} />
          </div>
        ))}
      </div>
    </section>
  );
}
