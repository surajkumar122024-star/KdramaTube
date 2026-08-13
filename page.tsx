import { Suspense } from "react";
import HomePageContent from "./HomePageContent";
import { getAllDramas } from "@/lib/dramas";
import { generateWebsiteSchema, generateDramaListSchema } from "@/lib/schema";

export default function Page() {
  const dramas = getAllDramas();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateWebsiteSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateDramaListSchema(dramas)) }}
      />
      <Suspense fallback={
        <div className="hero-gradient min-h-screen flex items-center justify-center">
          <div className="flex flex-col items-center gap-3">
            <div className="w-10 h-10 rounded-full border-2 border-violet-500 border-t-transparent animate-spin" />
            <p className="text-slate-400 text-sm">Loading dramas…</p>
          </div>
        </div>
      }>
        <HomePageContent />
      </Suspense>
    </>
  );
}
