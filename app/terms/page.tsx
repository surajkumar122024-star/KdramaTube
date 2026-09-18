// app/terms/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/terms" },
  title: "Terms of Service",
  description:
    "Terms of Service and content disclaimer for DramaVerse, including information about third-party content, copyright, and use of the site.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-[var(--color-text)] mb-2">Terms of Service</h1>
      <p className="text-sm text-[var(--color-muted)] mb-8">Last updated: September 2026</p>

      <p className="text-[var(--color-text)] mb-4 leading-relaxed">
        Welcome to DramaVerse (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;), available at
        kdramatube.vercel.app (the &ldquo;Site&rdquo;). By using the Site, you agree to
        these Terms of Service. If you do not agree, please do not use the
        Site.
      </p>

      <h2 className="text-xl font-semibold text-[var(--color-text)] mt-8 mb-3">1. What DramaVerse Is</h2>
      <p className="text-[var(--color-text)] mb-4 leading-relaxed">
        DramaVerse is an informational catalog and discovery guide for
        Korean, Chinese, and Turkish dramas. We provide synopses, ratings,
        cast information, and links to official streaming platforms. We do
        not host, stream, or distribute any drama, episode, or video content
        ourselves.
      </p>

      <h2 className="text-xl font-semibold text-[var(--color-text)] mt-8 mb-3">2. Third-Party Content and Copyright</h2>
      <p className="text-[var(--color-text)] mb-4 leading-relaxed">
        Poster images displayed on the Site are the copyrighted property of
        their respective studios, networks, and distributors, and are used
        for identification and editorial purposes only. Titles, cast names,
        and plot summaries are factual information compiled from publicly
        available sources. All trademarks, show titles, and character names
        belong to their respective owners, and DramaVerse is not affiliated
        with or endorsed by any of them.
      </p>
      <p className="text-[var(--color-text)] mb-4 leading-relaxed">
        If you are a rights holder and believe content on this Site
        infringes your copyright, please{" "}
        <a href="/contact" className="text-[var(--color-accent)] underline hover:text-[var(--color-accent)]">
          contact us
        </a>{" "}
        with details, and we will promptly review and remove the material if
        appropriate.
      </p>

      <h2 className="text-xl font-semibold text-[var(--color-text)] mt-8 mb-3">3. No Piracy, Streaming, or Downloads</h2>
      <p className="text-[var(--color-text)] mb-4 leading-relaxed">
        DramaVerse links only to official, legal streaming platforms (such
        as Netflix, Viki, iQIYI, Disney+, and Prime Video). We do not provide
        pirated streams, downloads, or embedded video players, and we do not
        condone the use of unauthorized sources to watch copyrighted
        content.
      </p>

      <h2 className="text-xl font-semibold text-[var(--color-text)] mt-8 mb-3">4. Accuracy of Information</h2>
      <p className="text-[var(--color-text)] mb-4 leading-relaxed">
        We try to keep ratings, episode counts, availability, and other
        details accurate and up to date, but we make no guarantees. Details
        such as where a show is streaming can change without notice, and you
        should verify availability on the official platform before relying
        on it.
      </p>

      <h2 className="text-xl font-semibold text-[var(--color-text)] mt-8 mb-3">5. Advertising</h2>
      <p className="text-[var(--color-text)] mb-4 leading-relaxed">
        This Site displays advertisements served by Google AdSense and other
        third-party advertising partners to support the cost of running
        DramaVerse. See our{" "}
        <a href="/privacy-policy" className="text-[var(--color-accent)] underline hover:text-[var(--color-accent)]">
          Privacy Policy
        </a>{" "}
        for details on how advertising cookies are used.
      </p>

      <h2 className="text-xl font-semibold text-[var(--color-text)] mt-8 mb-3">6. Limitation of Liability</h2>
      <p className="text-[var(--color-text)] mb-4 leading-relaxed">
        DramaVerse is provided &ldquo;as is&rdquo; without warranties of any kind. We
        are not liable for any loss or damage arising from your use of the
        Site, reliance on its content, or your use of any third-party
        platform linked from it.
      </p>

      <h2 className="text-xl font-semibold text-[var(--color-text)] mt-8 mb-3">7. Changes to These Terms</h2>
      <p className="text-[var(--color-text)] mb-4 leading-relaxed">
        We may update these Terms from time to time. Continued use of the
        Site after changes are posted means you accept the updated Terms.
      </p>

      <h2 className="text-xl font-semibold text-[var(--color-text)] mt-8 mb-3">8. Contact Us</h2>
      <p className="text-[var(--color-text)] leading-relaxed">
        Questions about these Terms? Please{" "}
        <a href="/contact" className="text-[var(--color-accent)] underline hover:text-[var(--color-accent)]">
          contact us
        </a>
        .
      </p>
    </main>
  );
}
