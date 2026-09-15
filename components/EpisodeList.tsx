import Link from "next/link";
import type { Episode } from "@/types/drama";

interface EpisodeListProps {
  episodes: Episode[];
  dramaTitle: string;
  dramaSlug: string;
}

export default function EpisodeList({ episodes, dramaTitle, dramaSlug }: EpisodeListProps) {
  return (
    <section aria-labelledby="episodes-heading">
      <h2
        id="episodes-heading"
        className="text-xl font-bold text-[var(--color-text)] mb-4 flex items-center gap-3"
      >
        <span className="w-1 h-6 rounded-full bg-[var(--color-accent)] block" aria-hidden="true" />
        Episodes
        <span className="text-[var(--color-muted)] text-sm font-normal">({episodes.length} episodes)</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {episodes.map((episode, index) => (
          <Link
            key={index}
            href={`/drama/${dramaSlug}/episode/${index + 1}`}
            id={`episode-${index + 1}`}
            aria-label={`Watch ${episode.title} of ${dramaTitle}`}
            className="group flex items-center gap-3 px-4 py-3 rounded-xl bg-[var(--color-surface)]/80 border border-[var(--color-border)] hover:border-[var(--color-accent)]/40"
          >
            {/* Episode number bubble */}
            <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[var(--color-accent)]/15 border border-[var(--color-accent)]/30 flex items-center justify-center text-[var(--color-accent)] text-sm font-bold group-hover:bg-[var(--color-accent)] group-hover:text-[#1a1310] transition-all duration-200">
              {index + 1}
            </div>

            <span className="text-[var(--color-text)] text-sm font-medium group-hover:text-[var(--color-text)] transition-colors flex-1 truncate">
              {episode.title}
            </span>

            {/* Play icon */}
            <svg
              className="w-4 h-4 text-[var(--color-muted)] group-hover:text-[var(--color-accent)] flex-shrink-0 transition-colors"
              viewBox="0 0 16 16"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M5 3.5l4.5 4.5-4.5 4.5V3.5z" />
            </svg>
          </Link>
        ))}
      </div>
    </section>
  );
}
