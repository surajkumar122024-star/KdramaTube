import DramaCard from "./DramaCard";
import type { Drama } from "@/types/drama";

export default function RelatedDramas({ dramas }: { dramas: Drama[] }) {
  if (!dramas || dramas.length === 0) return null;

  return (
    <section aria-labelledby="related-heading" className="mt-8">
      <h2 id="related-heading" className="text-xl font-bold text-white mb-4 flex items-center gap-3">
        <span className="w-1 h-6 rounded-full bg-violet-500 block" aria-hidden="true" />
        More {dramas[0].category} Dramas
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {dramas.map((d) => (
          <DramaCard key={d.slug} drama={d} />
        ))}
      </div>
    </section>
  );
}
