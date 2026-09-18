// app/contact/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/contact" },
  title: "Contact Us",
  description:
    "Get in touch with the DramaVerse team for feedback, drama suggestions, or corrections.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-[var(--color-text)] mb-6">Contact Us</h1>

      <p className="text-[var(--color-text)] mb-6 leading-relaxed">
        We would love to hear from you - whether it's a drama you think we
        should add, a correction to existing info, or just general feedback.
      </p>

      <div className="bg-[var(--color-surface-raised)]/50 border border-[var(--color-border)] rounded-xl p-6">
        <p className="text-[var(--color-text)]">
          <strong className="text-[var(--color-text)]">Email:</strong>{" "}
          <a
            href="mailto:support@dramaverse.example.com"
            className="text-[var(--color-accent)] underline hover:text-[var(--color-accent)]"
          >
            support@dramaverse.example.com
          </a>
        </p>
        {/* TODO: replace with your real email address */}
      </div>

      <h2 className="text-xl font-semibold text-[var(--color-text)] mt-8 mb-3">Response Time</h2>
      <p className="text-[var(--color-text)] leading-relaxed">
        We typically respond within 2-3 business days. For drama suggestions,
        please include the title and, if possible, a link to more
        information so we can add it quickly.
      </p>
    </main>
  );
}
