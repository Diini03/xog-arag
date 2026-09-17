import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SORTED_ENTRIES } from "@/lib/log/entries";
import { TYPE_LABEL } from "@/lib/log/types";
import { cn } from "@/lib/utils";

/**
 * "Turn to page —" : a keyboard-first finder over the whole log.
 * Opens with / or Cmd/Ctrl-K, closes with Escape.
 */
export function QuickFind() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [cursor, setCursor] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const el = document.activeElement;
      const typing =
        el instanceof HTMLInputElement ||
        el instanceof HTMLTextAreaElement ||
        (el as HTMLElement | null)?.isContentEditable;
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || (e.key === "/" && !typing)) {
        e.preventDefault();
        setOpen(true);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (open) {
      setQ("");
      setCursor(0);
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [open]);

  const results = useMemo(() => {
    const needle = q.trim().toLowerCase();
    const pool = needle
      ? SORTED_ENTRIES.filter((e) =>
          [e.title ?? "", e.body, e.source ?? "", e.annotation ?? "", e.tags.join(" "), e.type]
            .join(" ")
            .toLowerCase()
            .includes(needle),
        )
      : SORTED_ENTRIES;
    return pool.slice(0, 8);
  }, [q]);

  useEffect(() => setCursor(0), [q]);

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="meta fixed bottom-4 right-4 z-40 border border-rule-strong bg-card px-3 py-2 hover:text-primary"
        aria-label="Find an entry"
      >
        find · /
      </button>
    );
  }

  const go = (id: string) => {
    setOpen(false);
    navigate(`/entry/${id}`);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-background/80 px-4 pt-[12vh] backdrop-blur-[2px]"
      onClick={() => setOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-label="Find an entry"
    >
      <div
        className="w-full max-w-[640px] border border-rule-strong bg-card shadow-none"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="border-b border-rule px-4 py-3">
          <p className="meta mb-2">turn to page —</p>
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown") {
                e.preventDefault();
                setCursor((c) => Math.min(c + 1, results.length - 1));
              } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setCursor((c) => Math.max(c - 1, 0));
              } else if (e.key === "Enter" && results[cursor]) {
                go(results[cursor].id);
              }
            }}
            placeholder="a word, a tag, a name…"
            className="w-full bg-transparent font-display text-[20px] outline-none placeholder:text-muted-foreground/70"
          />
        </div>

        <ul className="max-h-[52vh] overflow-y-auto">
          {results.length === 0 && (
            <li className="meta px-4 py-5">nothing in the log matches that.</li>
          )}
          {results.map((e, i) => (
            <li key={e.id}>
              <button
                onMouseEnter={() => setCursor(i)}
                onClick={() => go(e.id)}
                className={cn(
                  "block w-full border-b border-rule px-4 py-3 text-left",
                  i === cursor && "bg-muted",
                )}
              >
                <span className="meta">
                  {e.date} · {TYPE_LABEL[e.type]}
                </span>
                <span className="mt-1 block max-w-[62ch] text-[16px] leading-snug">
                  {e.title || e.body.slice(0, 96) + (e.body.length > 96 ? "…" : "")}
                </span>
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between px-4 py-2">
          <span className="meta">↑↓ move · ↵ open · esc close</span>
          <span className="meta">{SORTED_ENTRIES.length} entries logged</span>
        </div>
      </div>
    </div>
  );
}
