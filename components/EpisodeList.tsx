import { Episode } from "@/types/drama";

interface EpisodeListProps {
  episodes: Episode[];
  dramaTitle: string;
}

export default function EpisodeList({ episodes, dramaTitle }: EpisodeListProps) {
  return (
    <section aria-labelledby="episodes-heading">
      <h2
        id="episodes-heading"
        className="text-xl font-bold text-white mb-4 flex items-center gap-3"
      >
        <span className="w-1 h-6 rounded-full bg-violet-500 block" aria-hidden="true" />
        Episodes
        <span className="text-slate-500 text-sm font-normal">({episodes.length} episodes)</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {episodes.map((episode, index) => (
          <a
            key={index}
            href={episode.url}
            target="_blank"
            rel="noopener noreferrer"
            id={`episode-${index + 1}`}
            aria-label={`Watch ${episode.title} of ${dramaTitle}`}
            className="group flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700/50 hover:border-violet-500/50 hover:bg-slate-800 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-violet-900/20"
          >
            {/* Episode number bubble */}
            <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-400 font-bold text-xs group-hover:bg-violet-600 group-hover:border-violet-500 group-hover:text-white transition-all duration-200">
              {index + 1}
            </div>

            <span className="text-slate-300 text-sm font-medium group-hover:text-white transition-colors flex-1 truncate">
              {episode.title}
            </span>

            {/* Play icon */}
            <svg
              className="w-4 h-4 text-slate-600 group-hover:text-violet-400 flex-shrink-0 transition-colors"
              viewBox="0 0 16 16"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M5 3.5l8 4.5-8 4.5V3.5z" />
            </svg>
          </a>
        ))}
      </div>
    </section>
  );
}
