"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Korean Dramas", href: "/?category=Korean" },
  { label: "Chinese Dramas", href: "/?category=Chinese" },
  { label: "Turkish Dramas", href: "/?category=Turkish" },
  { label: "All Dramas", href: "/?category=All" },
];

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close drawer on route change / backdrop click
  const closeDrawer = () => setDrawerOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-slate-950/95 backdrop-blur-md shadow-lg shadow-black/30"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 flex-shrink-0 group"
            aria-label="DramaVerse Home"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center shadow-lg shadow-violet-500/30 group-hover:shadow-violet-500/50 transition-shadow">
              <span className="text-white font-bold text-sm">D</span>
            </div>
            <span className="text-white font-bold text-lg tracking-tight hidden sm:block">
              Drama<span className="text-violet-400">Verse</span>
            </span>
          </Link>

          {/* Search Bar — grows to fill space */}
          <div className="flex-1 max-w-xl mx-auto">
            <SearchBar />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-300 hover:text-white text-sm font-medium transition-colors duration-200 hover:text-violet-400"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Hamburger Button */}
          <button
            id="menu-btn"
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={drawerOpen}
          >
            <span className="w-5 h-0.5 bg-white rounded-full" />
            <span className="w-5 h-0.5 bg-white rounded-full" />
            <span className="w-5 h-0.5 bg-white rounded-full" />
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
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-slate-900 border-l border-slate-700/50 shadow-2xl transform transition-transform duration-300 ease-in-out ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Mobile navigation drawer"
      >
        <div className="flex items-center justify-between p-5 border-b border-slate-700/50">
          <span className="text-white font-bold text-lg">
            Drama<span className="text-violet-400">Verse</span>
          </span>
          <button
            onClick={closeDrawer}
            aria-label="Close navigation menu"
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
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
              className="flex items-center px-4 py-3 rounded-lg text-slate-300 hover:text-white hover:bg-violet-600/20 font-medium transition-all duration-200 group"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-violet-500 mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}
