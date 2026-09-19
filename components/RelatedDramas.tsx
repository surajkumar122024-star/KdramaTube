import DramaCard from "./DramaCard";
import type { Drama } from "@/types/drama";

export default function RelatedDramas({ dramas, currentTitle }: { dramas: Drama[]; currentTitle?: string }) {
  if (!dramas || dramas.length === 0) return null;

  return (
    <section aria-labelledby="related-heading" className="mt-8">
      <h2 id="related-heading" className="text-xl font-bold text-[var(--color-text)] mb-1 flex items-center gap-3">
        <span className="w-1 h-6 rounded-full bg-[var(--color-accent)] block" aria-hidden="true" />
        You Might Also Like
      </h2>
      {currentTitle && (
        <p className="text-[var(--color-muted)] text-sm mb-4">
          If you liked {currentTitle}, these share a similar genre or feel.
        </p>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {dramas.map((d) => (
          <DramaCard key={d.slug} drama={d} />
        ))}
      </div>
    </section>
  );
}
