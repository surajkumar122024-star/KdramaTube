import { notFound } from "next/navigation";
import WatchButtons from "@/components/WatchButtons";
import { Metadata } from "next";
import Link from "next/link";
import { getDramaBySlug, getAllDramaSlugs } from "@/lib/dramas";
import EpisodeList from "@/components/EpisodeList";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static paths for all dramas at build time
export async function generateStaticParams() {
  const slugs = getAllDramaSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Dynamic SEO metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const drama = getDramaBySlug(slug);
  if (!drama) return { title: "Drama Not Found" };

  return {
    title: drama.title,
    description: drama.description,
    openGraph: {
      title: drama.title,
      description: drama.description,
      type: "website",
    },
  };
}

const categoryColors: Record<string, string> = {
  Korean: "bg-violet-600/20 text-violet-300 border-violet-600/40",
  Chinese: "bg-rose-600/20 text-rose-300 border-rose-600/40",
  Turkish: "bg-amber-600/20 text-amber-300 border-amber-600/40",
};

const genreColors = [
  "bg-blue-600/20 text-blue-300 border-blue-600/30",
  "bg-emerald-600/20 text-emerald-300 border-emerald-600/30",
  "bg-pink-600/20 text-pink-300 border-pink-600/30",
  "bg-cyan-600/20 text-cyan-300 border-cyan-600/30",
  "bg-orange-600/20 text-orange-300 border-orange-600/30",
];

export default async function DramaDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const drama = getDramaBySlug(slug);

  if (!drama) notFound();

  const catColor = categoryColors[drama.category] ?? "bg-slate-600/20 text-slate-300 border-slate-600/40";
  const posterGradients: Record<string, string> = {
    Korean: "from-violet-900 via-purple-800 to-indigo-950",
    Chinese: "from-rose-900 via-red-800 to-pink-950",
    Turkish: "from-amber-900 via-orange-800 to-red-950",
  };
  const posterGrad = posterGradients[drama.category] ?? "from-slate-900 to-slate-800";

  return (
    <article>
      {/* Back nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm transition-colors group"
        >
          <svg
            className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M10 3L5 8l5 5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to all dramas
        </Link>
      </div>

      {/* Hero / poster area */}
      <div className="relative w-full overflow-hidden" style={{ minHeight: "340px" }}>
        {/* Background */}
        {drama.poster ? (
          <div
            className="absolute inset-0 bg-cover bg-center scale-110 blur-sm"
            style={{ backgroundImage: `url(${drama.poster})` }}
            aria-hidden="true"
          />
        ) : (
          <div
            className={`absolute inset-0 bg-gradient-to-br ${posterGrad}`}
            aria-hidden="true"
          >
            <div className="absolute inset-0 opacity-10 flex items-center justify-center">
              <span className="text-white font-black text-[18rem] leading-none select-none">
                {drama.title.charAt(0)}
              </span>
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />

        {/* Content overlay */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row gap-6 items-end">
          {/* Poster card */}
          <div className="flex-shrink-0">
            <div
              className={`w-32 sm:w-44 aspect-[2/3] rounded-xl bg-gradient-to-br ${posterGrad} border border-white/10 shadow-2xl flex items-center justify-center overflow-hidden`}
              role={drama.poster ? undefined : "img"}
              aria-label={drama.poster ? undefined : `${drama.title} poster placeholder`}
            >
              {drama.poster ? (
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${drama.poster})` }}
                />
              ) : (
                <span className="text-white/30 font-black text-6xl select-none">
                  {drama.title.charAt(0)}
                </span>
              )}
            </div>
          </div>

          {/* Title + meta */}
          <div className="flex-1 pb-2">
            {/* Category badge */}
            <span className={`inline-flex text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${catColor} mb-3`}>
              {drama.category} Drama
            </span>

            <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-3">
              {drama.title}
            </h1>

            {/* Stats row */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-300 mb-4">
              <span className="flex items-center gap-1">
                <span className="text-yellow-400">★</span>
                <strong className="text-white">{drama.rating}</strong>
                <span className="text-slate-500">/10</span>
              </span>
              <span className="text-slate-600">|</span>
              <span>{drama.year}</span>
              <span className="text-slate-600">|</span>
              <span>{drama.country}</span>
              <span className="text-slate-600">|</span>
              <span>{drama.episodes.length} Episodes</span>
            </div>

            {/* Genre badges */}
            <div className="flex flex-wrap gap-2">
              {drama.genre.map((g, i) => (
                <span
                  key={g}
                  className={`text-xs font-medium px-3 py-1 rounded-full border ${genreColors[i % genreColors.length]}`}
                >
                  {g}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Body content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        {/* Story / synopsis */}
        <section aria-labelledby="story-heading">
          <h2
            id="story-heading"
            className="text-xl font-bold text-white mb-4 flex items-center gap-3"
          >
            <span className="w-1 h-6 rounded-full bg-violet-500 block" aria-hidden="true" />
            Story
          </h2>
          <div className="bg-slate-800/40 border border-slate-700/40 rounded-xl p-6">
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              {drama.story}
            </p>
          </div>
        </section>

        {/* Quick info panel */}
        <section aria-labelledby="info-heading">
          <h2
            id="info-heading"
            className="text-xl font-bold text-white mb-4 flex items-center gap-3"
          >
            <span className="w-1 h-6 rounded-full bg-violet-500 block" aria-hidden="true" />
            Drama Info
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: "Country", value: drama.country },
              { label: "Year", value: drama.year.toString() },
              { label: "Rating", value: `★ ${drama.rating}/10` },
              { label: "Episodes", value: drama.episodes.length.toString() },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-slate-800/40 border border-slate-700/40 rounded-xl p-4 text-center"
              >
                <p className="text-slate-500 text-xs uppercase tracking-wider mb-1">{item.label}</p>
                <p className="text-white font-bold text-sm">{item.value}</p>
              </div>
            ))}
          </div>
        </section>
        <WatchButtons drama={drama} />

        {/* Episodes */}
        <EpisodeList episodes={drama.episodes} dramaTitle={drama.title} />
      </div>
    </article>
  );
}
