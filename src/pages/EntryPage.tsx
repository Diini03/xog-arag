import { Link, useParams } from "react-router-dom";
import { Shell } from "@/components/log/Shell";
import { EntryBlock } from "@/components/log/EntryCard";
import { SORTED_ENTRIES } from "@/lib/log/entries";
import { longDate } from "@/lib/log/format";
import { TYPE_LABEL, TYPE_PATH } from "@/lib/log/types";
import { useEffect } from "react";

export default function EntryPage() {
  const { id } = useParams();
  const index = SORTED_ENTRIES.findIndex((e) => e.id === id);
  const entry = index >= 0 ? SORTED_ENTRIES[index] : undefined;

  useEffect(() => {
    if (!entry) return;
    const label = entry.title || entry.body.slice(0, 60);
    document.title = `${label} — Xog-arag`;
    return () => {
      document.title = "Xog-arag — a data analyst's field log";
    };
  }, [entry]);

  if (!entry) {
    return (
      <Shell>
        <p className="meta">no such entry</p>
        <h1 className="mt-3 font-display text-3xl font-semibold">This page was never logged.</h1>
        <p className="mt-4">
          <Link className="meta text-primary underline underline-offset-4" to="/archive">
            back to the index →
          </Link>
        </p>
      </Shell>
    );
  }

  const newer = SORTED_ENTRIES[index - 1];
  const older = SORTED_ENTRIES[index + 1];
  const related = SORTED_ENTRIES.filter(
    (e) => e.id !== entry.id && e.tags.some((t) => entry.tags.includes(t)),
  ).slice(0, 3);

  return (
    <Shell>
      <header className="mb-10 border-b border-rule pb-6">
        <div className="flex flex-wrap items-baseline gap-x-5 gap-y-1">
          <Link className="meta hover:text-primary" to={TYPE_PATH[entry.type]}>
            ← {TYPE_LABEL[entry.type]}s
          </Link>
          <span className="meta">logged {longDate(entry.date)}</span>
          {entry.mood && <span className="meta">mood: {entry.mood}</span>}
        </div>
      </header>

      <EntryBlock entry={entry} index={index} standalone />

      {related.length > 0 && (
        <section className="mt-12">
          <h2 className="meta mb-4">elsewhere in the log, on the same subject</h2>
          <ul className="space-y-3 border-t border-rule pt-4">
            {related.map((r) => (
              <li key={r.id}>
                <Link to={`/entry/${r.id}`} className="group block">
                  <span className="meta">{r.date} · {TYPE_LABEL[r.type]}</span>
                  <span className="mt-1 block max-w-[60ch] text-[16.5px] leading-snug group-hover:text-primary">
                    {r.title || r.body.slice(0, 110) + (r.body.length > 110 ? "…" : "")}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <nav className="mt-14 flex flex-col gap-6 border-t border-rule pt-6 sm:flex-row sm:justify-between">
        <div className="max-w-[28ch]">
          {older && (
            <Link to={`/entry/${older.id}`} className="group block">
              <span className="meta">← earlier entry</span>
              <span className="mt-1 block text-[16px] leading-snug group-hover:text-primary">
                {older.title || older.body.slice(0, 70) + "…"}
              </span>
            </Link>
          )}
        </div>
        <div className="max-w-[28ch] sm:text-right">
          {newer && (
            <Link to={`/entry/${newer.id}`} className="group block">
              <span className="meta">later entry →</span>
              <span className="mt-1 block text-[16px] leading-snug group-hover:text-primary">
                {newer.title || newer.body.slice(0, 70) + "…"}
              </span>
            </Link>
          )}
        </div>
      </nav>
    </Shell>
  );
}
