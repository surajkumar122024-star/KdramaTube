// app/about/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about DramaVerse - a curated catalog of Korean, Chinese, and Turkish dramas helping viewers discover their next favorite show.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-[var(--color-text)] mb-6">About DramaVerse</h1>

      <p className="text-[var(--color-text)] mb-4 leading-relaxed">
        DramaVerse is a curated catalog built for fans of Korean, Chinese, and
        Turkish dramas. Our goal is simple: help viewers discover their next
        favorite show quickly, without endless scrolling across dozens of
        different sites.
      </p>

      <p className="text-[var(--color-text)] mb-4 leading-relaxed">
        Every drama on DramaVerse includes a synopsis, genre tags, ratings,
        and direct links to official streaming platforms where the show is
        available - so you always know where to legally watch.
      </p>

      <h2 className="text-xl font-semibold text-[var(--color-text)] mt-8 mb-3">Why DramaVerse?</h2>
      <ul className="list-disc pl-6 space-y-2 text-[var(--color-text)]">
        <li>Curated catalog across Korean, Chinese, and Turkish dramas</li>
        <li>Clean, fast, mobile-friendly browsing experience</li>
        <li>Direct links to official platforms - no piracy, ever</li>
        <li>New dramas added regularly</li>
      </ul>

      <p className="text-[var(--color-text)] mt-8 leading-relaxed">
        Have a suggestion or found something that needs fixing? Feel free to{" "}
        <a href="/contact" className="text-[var(--color-accent)] underline hover:text-[var(--color-accent)]">
          contact us
        </a>
        .
      </p>
    </main>
  );
}
