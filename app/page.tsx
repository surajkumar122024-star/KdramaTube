import { Suspense } from "react";
import HomePageContent from "./HomePageContent";

export default function Page() {
  return (
    <Suspense fallback={
      <div className="hero-gradient min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 rounded-full border-2 border-[var(--color-accent)] border-t-transparent animate-spin" />
          <p className="text-[var(--color-muted)] text-sm">Loading dramas…</p>
        </div>
      </div>
    }>
      <HomePageContent />
    </Suspense>
  );
}
