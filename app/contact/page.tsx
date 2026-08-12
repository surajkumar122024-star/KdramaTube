// app/contact/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the DramaVerse team for feedback, drama suggestions, or corrections.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6">Contact Us</h1>

      <p className="text-slate-300 mb-6 leading-relaxed">
        We would love to hear from you - whether it's a drama you think we
        should add, a correction to existing info, or just general feedback.
      </p>

      <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
        <p className="text-slate-300">
          <strong className="text-white">Email:</strong>{" "}
          <a
            href="mailto:support@dramaverse.example.com"
            className="text-violet-400 underline hover:text-violet-300"
          >
            support@dramaverse.example.com
          </a>
        </p>
        {/* TODO: replace with your real email address */}
      </div>

      <h2 className="text-xl font-semibold text-white mt-8 mb-3">Response Time</h2>
      <p className="text-slate-300 leading-relaxed">
        We typically respond within 2-3 business days. For drama suggestions,
        please include the title and, if possible, a link to more
        information so we can add it quickly.
      </p>
    </main>
  );
}
