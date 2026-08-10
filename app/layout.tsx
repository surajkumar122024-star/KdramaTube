import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <meta name="google-site-verification" content="GGvF0UPj84iXp1cP1DJ_wHErlNISZjBJvqL34DwgOOY" />
      <body className="bg-slate-950 text-slate-100 antialiased min-h-screen">
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6461565201811259"
     crossorigin="anonymous"></script>
      </body>
    </html>
  );
}
