"use client";

import Link from "next/link";
import { useWatchlist } from "@/hooks/useWatchlist";
import { getAllDramas } from "@/lib/dramas";
import DramaCard from "@/components/DramaCard";

export default function WatchlistPage() {
  const { slugs, hydrated } = useWatchlist();
  const allDramas = getAllDramas();
  const savedDramas = allDramas.filter((d) => slugs.includes(d.slug));

  return (
    <div className="pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-[var(--color-text)] mb-2">
          My Watchlist
        </h1>
        <p className="text-[var(--color-muted)] text-sm sm:text-base mb-8">
          Dramas you&apos;ve saved for later. Saved on this device only.
        </p>

        {!hydrated ? null : savedDramas.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center py-20 border border-dashed border-[var(--color-border)] rounded-xl">
            <div className="w-14 h-14 rounded-full border border-[var(--color-border)] flex items-center justify-center mb-4">
              <svg width="22" height="22" viewBox="0 0 16 16" fill="none" stroke="var(--color-accent)" strokeWidth="1.5">
                <path d="M3.5 2h9a.5.5 0 0 1 .5.5V14l-5-3-5 3V2.5a.5.5 0 0 1 .5-.5z" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="text-[var(--color-text)] text-lg font-medium mb-1">Your watchlist is empty</p>
            <p className="text-[var(--color-muted)] text-sm mb-6">
              Tap the bookmark icon on any drama to save it here.
            </p>
            <Link
              href="/all-dramas"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--color-accent)] hover:bg-[var(--color-accent-soft)] text-[#1a1310] font-semibold text-sm transition-all duration-200"
            >
              Browse all dramas
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {savedDramas.map((drama) => (
              <DramaCard key={drama.slug} drama={drama} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
