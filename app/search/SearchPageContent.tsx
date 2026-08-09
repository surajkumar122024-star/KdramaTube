"use client";

import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { searchDramas } from "@/lib/dramas";
import { Drama } from "@/types/drama";
import DramaGrid from "@/components/DramaGrid";

export default function SearchPageContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") ?? "";

  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState<Drama[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  // Run search whenever query changes
  useEffect(() => {
    const trimmed = query.trim();
    setResults(searchDramas(trimmed));
    // Update URL without navigation
    const url = trimmed ? `/search?q=${encodeURIComponent(trimmed)}` : "/search";
    window.history.replaceState({}, "", url);
  }, [query]);

  // Auto-focus the input
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const hasQuery = query.trim().length > 0;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Page heading */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Search Dramas</h1>
        <p className="text-slate-400 text-sm">
          Search by title, genre, country, or category across all dramas.
        </p>
      </div>

      {/* Big search input */}
      <div className="relative mb-8 max-w-2xl">
        <label htmlFor="search-page-input" className="sr-only">
          Search dramas
        </label>
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
          <svg
            className="w-5 h-5 text-slate-400"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <circle cx="9" cy="9" r="6" />
            <path d="M20 20l-4-4" strokeLinecap="round" />
          </svg>
        </div>
        <input
          ref={inputRef}
          id="search-page-input"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search dramas, genres, countries…"
          className="w-full pl-12 pr-5 py-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 text-white placeholder-slate-500 text-base focus:outline-none focus:ring-2 focus:ring-violet-500/60 focus:border-violet-500/60 focus:bg-slate-800 transition-all duration-200"
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            className="absolute inset-y-0 right-4 flex items-center text-slate-500 hover:text-white transition-colors"
            aria-label="Clear search"
          >
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M1 1l14 14M15 1L1 15" strokeLinecap="round" />
            </svg>
          </button>
        )}
      </div>

      {/* Results header */}
      {hasQuery && (
        <div className="flex items-center gap-3 mb-5">
          <h2 className="text-white font-bold text-lg flex items-center gap-3">
            <span className="w-1 h-5 rounded-full bg-violet-500 block" aria-hidden="true" />
            Results for &quot;{query.trim()}&quot;
            <span className="text-slate-500 text-sm font-normal">({results.length})</span>
          </h2>
        </div>
      )}

      {!hasQuery && (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center mb-4 text-3xl">
            🔍
          </div>
          <p className="text-slate-400 text-lg font-medium">Start typing to search</p>
          <p className="text-slate-600 text-sm mt-1">
            Search across titles, genres, and countries.
          </p>
        </div>
      )}

      {hasQuery && (
        <DramaGrid
          dramas={results}
          emptyMessage={`No dramas found for "${query.trim()}".`}
        />
      )}
    </div>
  );
}
