"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Korean", href: "/korean-dramas" },
  { label: "Chinese", href: "/chinese-dramas" },
  { label: "Turkish", href: "/turkish-dramas" },
  { label: "All dramas", href: "/all-dramas" },
  { label: "Quiz", href: "/quiz" },
];

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeDrawer = () => setDrawerOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 border-b ${
          scrolled
            ? "bg-[var(--color-bg)]/95 backdrop-blur-md border-[var(--color-border)]"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-5">
          {/* Wordmark */}
          <Link
            href="/"
            className="flex items-baseline gap-0.5 flex-shrink-0"
            aria-label="DramaVerse Home"
          >
            <span className="font-display italic text-xl text-[var(--color-text)]">Drama</span>
            <span className="font-display italic text-xl text-[var(--color-accent)]">Verse</span>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-xl mx-auto">
            <SearchBar />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[var(--color-muted)] hover:text-[var(--color-text)] text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Watchlist */}
          <Link
            href="/watchlist"
            aria-label="My watchlist"
            title="My watchlist"
            className="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-lg hover:bg-white/5 text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors"
          >
            <svg width="17" height="17" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3.5 2h9a.5.5 0 0 1 .5.5V14l-5-3-5 3V2.5a.5.5 0 0 1 .5-.5z" strokeLinejoin="round" />
            </svg>
          </Link>

          {/* Hamburger Button */}
          <button
            id="menu-btn"
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-lg hover:bg-white/5 transition-colors"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={drawerOpen}
          >
            <span className="w-5 h-0.5 bg-[var(--color-text)] rounded-full" />
            <span className="w-5 h-0.5 bg-[var(--color-text)] rounded-full" />
            <span className="w-5 h-0.5 bg-[var(--color-text)] rounded-full" />
          </button>
        </div>
      </header>

      {/* Backdrop */}
      {drawerOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          onClick={closeDrawer}
          aria-hidden="true"
        />
      )}

      {/* Slide-out Drawer */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-[var(--color-surface)] border-l border-[var(--color-border)] shadow-2xl transform transition-transform duration-300 ease-in-out ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Mobile navigation drawer"
      >
        <div className="flex items-center justify-between p-5 border-b border-[var(--color-border)]">
          <span className="font-display italic text-lg text-[var(--color-text)]">
            Drama<span className="text-[var(--color-accent)]">Verse</span>
          </span>
          <button
            onClick={closeDrawer}
            aria-label="Close navigation menu"
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/5 text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M1 1l14 14M15 1L1 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col p-4 gap-1" aria-label="Drawer navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeDrawer}
              className="px-4 py-3 rounded-lg text-[var(--color-muted)] hover:text-[var(--color-text)] hover:bg-white/5 font-medium transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}
