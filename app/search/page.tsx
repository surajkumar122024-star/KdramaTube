import { Suspense } from "react";
import SearchPageContent from "./SearchPageContent";

export const metadata = {
  title: "Search Dramas",
  description: "Search across all Korean, Chinese, and Turkish dramas on DramaVerse.",
};

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-2 border-violet-500 border-t-transparent animate-spin" />
      </div>
    }>
      <SearchPageContent />
    </Suspense>
  );
}
