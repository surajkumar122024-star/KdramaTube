import { Drama } from "@/types/drama";
import DramaCard from "./DramaCard";

interface DramaGridProps {
  dramas: Drama[];
  emptyMessage?: string;
}

export default function DramaGrid({
  dramas,
  emptyMessage = "No dramas found.",
}: DramaGridProps) {
  if (dramas.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center mb-4 text-3xl">
          🎭
        </div>
        <p className="text-slate-400 text-lg font-medium">{emptyMessage}</p>
        <p className="text-slate-600 text-sm mt-1">Try a different category or search term.</p>
      </div>
    );
  }

  return (
    <div
      className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5"
      aria-label="Drama catalog grid"
    >
      {dramas.map((drama) => (
        <DramaCard key={drama.id} drama={drama} />
      ))}
    </div>
  );
}
