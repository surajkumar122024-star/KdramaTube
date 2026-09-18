import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      {/* Visual */}
      <div className="relative mb-8">
        <div className="text-[8rem] sm:text-[12rem] font-black text-[var(--color-surface)] leading-none select-none">
          404
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-5xl">
          🎭
        </div>
      </div>

      <h1 className="text-2xl sm:text-3xl font-bold text-[var(--color-text)] mb-3">
        Drama Not Found
      </h1>
      <p className="text-[var(--color-muted)] text-sm sm:text-base max-w-sm mb-8 leading-relaxed">
        The page or drama you&apos;re looking for doesn&apos;t exist. It may have been moved or deleted.
      </p>

      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--color-accent)] hover:bg-[var(--color-accent-soft)] text-[#1a1310] font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
        >
          Go Home
        </Link>
        <Link
          href="/search"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--color-surface)] hover:bg-[var(--color-border)] border border-[var(--color-border)] hover:border-[var(--color-accent)]/40 text-[var(--color-text)] hover:text-[var(--color-text)] font-semibold text-sm transition-all duration-200"
        >
          Search Dramas
        </Link>
      </div>
    </div>
  );
}
