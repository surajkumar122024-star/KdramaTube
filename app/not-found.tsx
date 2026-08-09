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
        <div className="text-[8rem] sm:text-[12rem] font-black text-slate-800/50 leading-none select-none">
          404
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-5xl">
          🎭
        </div>
      </div>

      <h1 className="text-2xl sm:text-3xl font-bold text-white mb-3">
        Drama Not Found
      </h1>
      <p className="text-slate-400 text-sm sm:text-base max-w-sm mb-8 leading-relaxed">
        The page or drama you&apos;re looking for doesn&apos;t exist. It may have been moved or deleted.
      </p>

      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-violet-600/30 hover:-translate-y-0.5"
        >
          Go Home
        </Link>
        <Link
          href="/search"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 text-slate-300 hover:text-white font-semibold text-sm transition-all duration-200"
        >
          Search Dramas
        </Link>
      </div>
    </div>
  );
}
