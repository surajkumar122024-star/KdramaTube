import Link from "next/link";
import { notFound } from "next/navigation";
import { getDramaBySlug, getAllDramaSlugs } from "@/lib/dramas";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{
    slug: string;
    episode: string;
  }>;
}

// Generate static pages for all drama/episode combinations
export async function generateStaticParams() {
  const slugs = getAllDramaSlugs();
  const paths = [];

  for (const slug of slugs) {
    const drama = getDramaBySlug(slug);

    if (!drama?.episodes) continue;

    for (let i = 0; i < drama.episodes.length; i++) {
      paths.push({
        slug,
        episode: String(i + 1),
      });
    }
  }

  return paths;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug, episode } = await params;
  const drama = getDramaBySlug(slug);
  if (!drama) return { title: "Episode Not Found" };

  const episodeNumber = Number(episode);
  const currentEpisode = drama.episodes[episodeNumber - 1];
  if (!currentEpisode) return { title: "Episode Not Found" };

  const title = `Watch ${drama.title} Episode ${episodeNumber} Online | DramaVerse`;
  const description = `Stream ${drama.title} Episode ${episodeNumber} — ${drama.description}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: drama.poster ? [drama.poster] : [],
      type: "video.episode",
    },
  };
}

export default async function EpisodePage({ params }: PageProps) {
  const { slug, episode } = await params;
  const drama = getDramaBySlug(slug);

  if (!drama) {
    notFound();
  }

  const episodeNumber = Number(episode);

  if (
    !Number.isInteger(episodeNumber) ||
    episodeNumber < 1 ||
    episodeNumber > drama.episodes.length
  ) {
    notFound();
  }

  // Episode array is zero-indexed
  const currentEpisode = drama.episodes[episodeNumber - 1];

  if (!currentEpisode) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0a0d19] text-white">
      <div className="mx-auto w-full max-w-3xl px-5 py-16">
        {/* Back to Drama */}
        <Link
          href={`/drama/${drama.slug}`}
          className="mb-8 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
        >
          ← Back to {drama.title}
        </Link>

        {/* Episode Header */}
        <section className="mb-12">
          <div className="mb-5 h-1.5 w-11 rounded-full bg-violet-500" />
          <p className="mb-2 text-lg text-slate-400">{drama.title}</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {currentEpisode.title}
          </h1>
        </section>

        {/* Watch and Download */}
        <section>
          <h2 className="mb-6 text-2xl font-bold sm:text-3xl">
            Watch and Download
          </h2>
          <div className="space-y-4">
            {/* Viki */}
            <a
              href={currentEpisode.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-2xl border border-slate-800 bg-[#111a2e] px-5 py-5 transition hover:border-violet-500"
            >
              <div>
                <p className="text-xl font-semibold">Viki</p>
                <p className="mt-1 text-sm text-slate-400">
                  Watch Episode {episodeNumber}
                </p>
              </div>
              <span className="text-2xl text-slate-400">→</span>
            </a>

            {/* Netflix */}
            <a
              href={currentEpisode.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-2xl border border-slate-800 bg-[#111a2e] px-5 py-5 transition hover:border-violet-500"
            >
              <div>
                <p className="text-xl font-semibold">Netflix</p>
                <p className="mt-1 text-sm text-slate-400">
                  Watch Episode {episodeNumber}
                </p>
              </div>
              <span className="text-2xl text-slate-400">→</span>
            </a>

            {/* Disney+ */}
            <a
              href={currentEpisode.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-2xl border border-slate-800 bg-[#111a2e] px-5 py-5 transition hover:border-violet-500"
            >
              <div>
                <p className="text-xl font-semibold">Disney+</p>
                <p className="mt-1 text-sm text-slate-400">
                  Watch Episode {episodeNumber}
                </p>
              </div>
              <span className="text-2xl text-slate-400">→</span>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
