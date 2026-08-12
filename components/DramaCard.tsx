// components/HomePageContent.tsx
import Link from "next/link";
import { getAllDramas, getDramasByCategory, getFeaturedDrama } from "@/lib/dramas";
import DramaCard from "@/components/DramaCard";

function Row({ title, dramas }: { title: string; dramas: ReturnType<typeof getAllDramas> }) {
  if (dramas.length === 0) return null;
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h2 className="text-xl sm:text-2xl font-bold text-white mb-5 flex items-center gap-2">
        {title}
      </h2>
      <div className="flex gap-4 overflow-x-auto pb-3 -mx-1 px-1 snap-x snap-mandatory scrollbar-thin">
        {dramas.map((drama) => (
          <div key={drama.id} className="shrink-0 w-40 sm:w-48 snap-start">
            <DramaCard drama={drama} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default function HomePageContent() {
  const allDramas = getAllDramas();
  const featured = getFeaturedDrama() ?? allDramas[0];

  const trending = [...allDramas].sort((a, b) => b.rating - a.rating).slice(0, 12);
  const romance = getDramasByCategory("All").filter((d) => d.genre.includes("Romance")).slice(0, 12);
  const popular = [...allDramas].sort((a, b) => b.year - a.year).slice(0, 12);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* HERO */}
      <section className="relative w-full overflow-hidden" style={{ minHeight: "560px" }}>
        {featured?.poster ? (
          <div
            className="absolute inset-0 bg-cover bg-center scale-105"
            style={{ backgroundImage: `url(${featured.poster})` }}
            aria-hidden="true"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-violet-900 via-slate-900 to-slate-950" aria-hidden="true" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/40 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center py-24 sm:py-32">
          <span className="inline-block w-fit text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-violet-600/20 text-violet-300 border border-violet-500/30 mb-4">
            Drama Verse
          </span>
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-4">
            Your World of
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Korean Dramas
            </span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-lg mb-8">
            Discover your next favorite K-Drama — trending hits, timeless
            romances, and everything in between.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/all-dramas"
              className="bg-violet-600 hover:bg-violet-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Browse All Dramas
            </Link>
            {featured && (
              <Link
                href={`/drama/${featured.slug}`}
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg border border-white/20 transition-colors backdrop-blur-sm"
              >
                Watch {featured.title} &rarr;
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* SECTIONS */}
      <Row title="🔥 Trending K-Dramas" dramas={trending} />
      <Row title="❤️ Romance" dramas={romance} />
      <Row title="✨ Popular Dramas" dramas={popular} />
    </main>
  );
}
