import type { Metadata } from "next";
import { Fraunces, Work_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz"],
});

export const metadata: Metadata = {
  title: {
    default: "DramaVerse — Korean, Chinese & Turkish Dramas",
    template: "%s | DramaVerse",
  },
  description:
    "Explore a curated catalog of the best Korean, Chinese, and Turkish dramas. Find your next binge-worthy show on DramaVerse.",
  keywords: ["Korean drama", "Chinese drama", "Turkish drama", "kdrama", "cdrama", "drama catalog"],
  openGraph: {
    siteName: "DramaVerse",
    type: "website",
  },
  verification: {
    google: "GGvF0UPj84iXp1cP1DJ_wHErlNISZjBJvqL34DwgOOY",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${workSans.variable} ${fraunces.variable}`}>
      <body className="bg-[var(--color-bg)] text-[var(--color-text)] antialiased min-h-screen">
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
