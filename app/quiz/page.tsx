import type { Metadata } from "next";
import QuizContent from "./QuizContent";

export const metadata: Metadata = {
  title: "Find Your Next Drama — Recommendation Quiz",
  description:
    "Answer a few quick questions about your mood, favorite country, and how long you want to binge — get matched with Korean, Chinese, and Turkish dramas from our catalog.",
  alternates: { canonical: "/quiz" },
};

export default function QuizPage() {
  return <QuizContent />;
}
