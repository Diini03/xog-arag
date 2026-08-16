import { useCallback, useEffect, useState } from "react";

/**
 * Guest-first local persistence. Nothing here is synced to an account — the
 * shapes are deliberately serialisable so a backend can adopt them later.
 */

const PREFIX = "xogarag:";

function read<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(PREFIX + key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function write<T>(key: string, value: T) {
  try {
    localStorage.setItem(PREFIX + key, JSON.stringify(value));
    window.dispatchEvent(new CustomEvent("xogarag:store", { detail: key }));
  } catch {
    /* storage unavailable — guest session degrades silently */
  }
}

export function useLocalState<T>(key: string, initial: T) {
  const [value, setValue] = useState<T>(() => read(key, initial));

  useEffect(() => {
    const onChange = (e: Event) => {
      if ((e as CustomEvent).detail === key) setValue(read(key, initial));
    };
    window.addEventListener("xogarag:store", onChange);
    return () => window.removeEventListener("xogarag:store", onChange);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  const update = useCallback(
    (next: T | ((prev: T) => T)) => {
      setValue((prev) => {
        const resolved = typeof next === "function" ? (next as (p: T) => T)(prev) : next;
        write(key, resolved);
        return resolved;
      });
    },
    [key],
  );

  return [value, update] as const;
}

export interface Bookmark {
  id: string;
  kind: string;
  title: string;
  href: string;
  savedAt: number;
}

export function useBookmarks() {
  const [items, setItems] = useLocalState<Bookmark[]>("bookmarks", []);
  const has = useCallback((id: string) => items.some((b) => b.id === id), [items]);
  const toggle = useCallback(
    (b: Omit<Bookmark, "savedAt">) =>
      setItems((prev) =>
        prev.some((x) => x.id === b.id) ? prev.filter((x) => x.id !== b.id) : [{ ...b, savedAt: Date.now() }, ...prev],
      ),
    [setItems],
  );
  return { items, has, toggle, clear: () => setItems([]) };
}

export interface ScoreEntry { gameId: string; score: number; total: number; at: number }

export function useScores() {
  const [scores, setScores] = useLocalState<ScoreEntry[]>("scores", []);
  const record = useCallback(
    (gameId: string, score: number, total: number) =>
      setScores((prev) => [{ gameId, score, total, at: Date.now() }, ...prev].slice(0, 100)),
    [setScores],
  );
  const best = useCallback(
    (gameId: string) => scores.filter((s) => s.gameId === gameId).reduce((m, s) => Math.max(m, s.score), 0),
    [scores],
  );
  return { scores, record, best };
}

export function useRecentlyViewed() {
  const [items, setItems] = useLocalState<{ title: string; href: string; at: number }[]>("recent", []);
  const push = useCallback(
    (title: string, href: string) =>
      setItems((prev) => [{ title, href, at: Date.now() }, ...prev.filter((p) => p.href !== href)].slice(0, 12)),
    [setItems],
  );
  return { items, push };
}
