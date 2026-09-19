import Link from "next/link";
import { UpcomingDrama } from "@/data/upcoming";

interface UpcomingRowProps {
  dramas: UpcomingDrama[];
}

const categoryAccent: Record<string, string> = {
  Korean: "var(--color-korean)",
  Chinese: "var(--color-chinese)",
  Turkish: "var(--color-turkish)",
};

function UpcomingCard({ drama }: { drama: UpcomingDrama }) {
  const accent = categoryAccent[drama.category] ?? "var(--color-muted)";

  return (
    <Link
      href={`/upcoming/${drama.id}`}
      className="block w-56 sm:w-64 flex-shrink-0 rounded-xl overflow-hidden bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-accent)]/40 transition-colors"
    >
      <div
        className="relative aspect-video flex items-center justify-center overflow-hidden"
        style={{ background: "linear-gradient(155deg, #1a1613 0%, #221d19 100%)" }}
      >
        {drama.poster ? (
          <img
            src={drama.poster}
            alt={`${drama.title} artwork`}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <span
            className="font-display italic select-none"
            style={{ color: accent, opacity: 0.3, fontSize: "3rem", lineHeight: 1 }}
          >
            {drama.title.charAt(0)}
          </span>
        )}
        <span className="absolute top-2 left-2 bg-[var(--color-accent)] text-[#1a1310] text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full">
          Coming {drama.expectedRelease}
        </span>
      </div>
      <div className="p-3">
        <h3 className="text-[var(--color-text)] font-semibold text-sm leading-tight mb-2 line-clamp-2">
          {drama.title}
        </h3>
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="flex items-center gap-1.5 text-xs font-medium text-[var(--color-muted)]">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: accent }} />
            {drama.category}
          </span>
          <span className="text-[var(--color-muted)] text-xs">{drama.platform}</span>
        </div>
        <p className="text-[var(--color-muted)] text-xs leading-relaxed line-clamp-3">
          {drama.synopsis}
        </p>
      </div>
    </Link>
  );
}

export default function UpcomingRow({ dramas }: UpcomingRowProps) {
  if (dramas.length === 0) return null;

  return (
    <section aria-labelledby="upcoming-heading" className="mb-10">
      <h2
        id="upcoming-heading"
        className="text-[var(--color-text)] font-bold text-xl flex items-center gap-3 mb-1"
      >
        <span className="w-1 h-6 rounded-full bg-[var(--color-accent)] block" aria-hidden="true" />
        Upcoming Dramas
      </h2>
      <p className="text-[var(--color-muted)] text-xs mb-4">
        Announced titles not yet released — release windows are estimates and may change.
      </p>
      <div className="flex gap-4 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 snap-x snap-mandatory">
        {dramas.map((drama) => (
          <div key={drama.id} className="snap-start">
            <UpcomingCard drama={drama} />
          </div>
        ))}
      </div>
    </section>
  );
}
