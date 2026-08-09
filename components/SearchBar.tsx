"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";

interface SearchBarProps {
  initialQuery?: string;
  autoFocus?: boolean;
}

export default function SearchBar({ initialQuery = "", autoFocus = false }: SearchBarProps) {
  const [query, setQuery] = useState(initialQuery);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (trimmed) {
      router.push(`/search?q=${encodeURIComponent(trimmed)}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} role="search" className="relative w-full">
      <label htmlFor="search-input" className="sr-only">
        Search dramas
      </label>
      <div className="relative">
        {/* Search Icon */}
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <svg
            className="w-4 h-4 text-slate-400"
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
          id="search-input"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search dramas, genres, countries…"
          autoFocus={autoFocus}
          className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/10 border border-white/10 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/60 focus:border-violet-500/60 focus:bg-white/15 transition-all duration-200"
        />
      </div>
    </form>
  );
}
