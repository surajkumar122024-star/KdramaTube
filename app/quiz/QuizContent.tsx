"use client";

import { useState } from "react";
import Link from "next/link";
import { getAllDramas } from "@/lib/dramas";
import { Drama } from "@/types/drama";
import DramaCard from "@/components/DramaCard";

type Mood = "romantic" | "dark" | "funny" | "epic";
type CountryPref = "Korean" | "Chinese" | "Turkish" | "any";
type LengthPref = "short" | "long";

const moodGenres: Record<Mood, string[]> = {
  romantic: ["Romance", "Melodrama"],
  dark: ["Thriller", "Mystery", "Crime", "Horror"],
  funny: ["Comedy", "Satire"],
  epic: ["Historical", "Action", "Epic", "Period"],
};

const moodOptions: { value: Mood; label: string; blurb: string }[] = [
  { value: "romantic", label: "Sweet & Romantic", blurb: "Butterflies, slow-burns, happy tears" },
  { value: "dark", label: "Dark & Intense", blurb: "Thrillers, mysteries, edge-of-your-seat" },
  { value: "funny", label: "Fun & Light", blurb: "Comedy, banter, feel-good energy" },
  { value: "epic", label: "Epic & Dramatic", blurb: "Historical sagas, high stakes, big emotions" },
];

const countryOptions: { value: CountryPref; label: string }[] = [
  { value: "Korean", label: "Korean" },
  { value: "Chinese", label: "Chinese" },
  { value: "Turkish", label: "Turkish" },
  { value: "any", label: "Surprise me" },
];

const lengthOptions: { value: LengthPref; label: string; blurb: string }[] = [
  { value: "short", label: "Quick binge", blurb: "Under 16 episodes" },
  { value: "long", label: "Long journey", blurb: "16 episodes or more" },
];

function scoreDrama(drama: Drama, mood: Mood, country: CountryPref, length: LengthPref): number {
  let score = 0;
  const targetGenres = moodGenres[mood];
  score += drama.genre.filter((g) => targetGenres.includes(g)).length * 2;
  if (country !== "any" && drama.category === country) score += 2;
  const episodeCount = drama.episodes?.length ?? drama.episodeCount ?? 0;
  const isShort = episodeCount > 0 && episodeCount <= 16;
  if ((length === "short" && isShort) || (length === "long" && !isShort)) score += 1;
  score += drama.rating / 20; // small tiebreaker, never dominates genre/category match
  return score;
}

export default function QuizContent() {
  const [step, setStep] = useState(0);
  const [mood, setMood] = useState<Mood | null>(null);
  const [country, setCountry] = useState<CountryPref | null>(null);
  const [length, setLength] = useState<LengthPref | null>(null);

  const results =
    mood && country && length
      ? getAllDramas()
          .map((d) => ({ drama: d, score: scoreDrama(d, mood, country, length) }))
          .sort((a, b) => b.score - a.score)
          .slice(0, 4)
          .map((r) => r.drama)
      : [];

  const restart = () => {
    setStep(0);
    setMood(null);
    setCountry(null);
    setLength(null);
  };

  const steps = [
    {
      question: "What mood are you in?",
      render: () => (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {moodOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => {
                setMood(opt.value);
                setStep(1);
              }}
              className="text-left p-5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-accent)]/60 transition-colors"
            >
              <p className="text-[var(--color-text)] font-semibold mb-1">{opt.label}</p>
              <p className="text-[var(--color-muted)] text-sm">{opt.blurb}</p>
            </button>
          ))}
        </div>
      ),
    },
    {
      question: "Which country's dramas are you curious about?",
      render: () => (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {countryOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => {
                setCountry(opt.value);
                setStep(2);
              }}
              className="text-center p-5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-accent)]/60 transition-colors"
            >
              <p className="text-[var(--color-text)] font-semibold">{opt.label}</p>
            </button>
          ))}
        </div>
      ),
    },
    {
      question: "How long a watch do you want?",
      render: () => (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {lengthOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => {
                setLength(opt.value);
                setStep(3);
              }}
              className="text-left p-5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-accent)]/60 transition-colors"
            >
              <p className="text-[var(--color-text)] font-semibold mb-1">{opt.label}</p>
              <p className="text-[var(--color-muted)] text-sm">{opt.blurb}</p>
            </button>
          ))}
        </div>
      ),
    },
  ];

  return (
    <div className="pt-8 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-[var(--color-text)] mb-2">
          Find Your Next Drama
        </h1>
        <p className="text-[var(--color-muted)] text-sm sm:text-base mb-8">
          Answer three quick questions and we&apos;ll match you with dramas from the catalog.
        </p>

        {step < 3 ? (
          <>
            {/* Progress dots */}
            <div className="flex items-center gap-2 mb-6">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="h-1.5 flex-1 rounded-full"
                  style={{ background: i <= step ? "var(--color-accent)" : "var(--color-border)" }}
                />
              ))}
            </div>
            <h2 className="text-[var(--color-text)] font-semibold text-lg mb-4">
              {steps[step].question}
            </h2>
            {steps[step].render()}
          </>
        ) : (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-[var(--color-text)] font-semibold text-lg">
                Here&apos;s what we&apos;d recommend
              </h2>
              <button
                onClick={restart}
                className="text-sm text-[var(--color-accent)] hover:underline"
              >
                Start over
              </button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {results.map((drama) => (
                <DramaCard key={drama.slug} drama={drama} />
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/all-dramas"
                className="text-sm text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors"
              >
                Or browse the full catalog →
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
