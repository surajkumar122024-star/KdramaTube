"use client";

import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "dramaverse:watchlist";
const EVENT_NAME = "dramaverse:watchlist-updated";

function readStorage(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function writeStorage(slugs: string[]) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(slugs));
    window.dispatchEvent(new Event(EVENT_NAME));
  } catch {
    // localStorage unavailable (private browsing, etc.) — fail silently
  }
}

export function useWatchlist() {
  const [slugs, setSlugs] = useState<string[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    // Intentional: localStorage isn't available during SSR, so we render an
    // empty list first and hydrate it here. Using a lazy useState initializer
    // instead would cause a client/server hydration mismatch.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSlugs(readStorage());
    setHydrated(true);

    const handleUpdate = () => setSlugs(readStorage());
    window.addEventListener(EVENT_NAME, handleUpdate);
    window.addEventListener("storage", handleUpdate);
    return () => {
      window.removeEventListener(EVENT_NAME, handleUpdate);
      window.removeEventListener("storage", handleUpdate);
    };
  }, []);

  const isSaved = useCallback((slug: string) => slugs.includes(slug), [slugs]);

  const toggle = useCallback((slug: string) => {
    const current = readStorage();
    const next = current.includes(slug)
      ? current.filter((s) => s !== slug)
      : [...current, slug];
    writeStorage(next);
    setSlugs(next);
  }, []);

  return { slugs, isSaved, toggle, hydrated };
}
