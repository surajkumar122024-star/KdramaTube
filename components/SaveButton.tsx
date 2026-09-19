"use client";

import { useWatchlist } from "@/hooks/useWatchlist";

interface SaveButtonProps {
  slug: string;
  className?: string;
  size?: "sm" | "md";
}

export default function SaveButton({ slug, className = "", size = "sm" }: SaveButtonProps) {
  const { isSaved, toggle, hydrated } = useWatchlist();
  const saved = hydrated && isSaved(slug);
  const dims = size === "md" ? "w-10 h-10" : "w-8 h-8";
  const iconSize = size === "md" ? 18 : 15;

  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggle(slug);
      }}
      aria-pressed={saved}
      aria-label={saved ? "Remove from watchlist" : "Add to watchlist"}
      title={saved ? "Remove from watchlist" : "Add to watchlist"}
      className={`${dims} flex items-center justify-center rounded-full bg-black/60 backdrop-blur-sm border border-white/10 transition-colors hover:border-[var(--color-accent)]/60 ${className}`}
    >
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 16 16"
        fill={saved ? "var(--color-accent)" : "none"}
        stroke={saved ? "var(--color-accent)" : "currentColor"}
        strokeWidth="1.5"
        className={saved ? "" : "text-[var(--color-text)]"}
      >
        <path d="M3.5 2h9a.5.5 0 0 1 .5.5V14l-5-3-5 3V2.5a.5.5 0 0 1 .5-.5z" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
