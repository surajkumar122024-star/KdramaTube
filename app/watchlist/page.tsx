import type { Metadata } from "next";
import WatchlistContent from "./WatchlistContent";

export const metadata: Metadata = {
  title: "My Watchlist",
  description: "Dramas you've saved to watch later on DramaVerse.",
  robots: { index: false, follow: true },
};

export default function WatchlistPage() {
  return <WatchlistContent />;
}
