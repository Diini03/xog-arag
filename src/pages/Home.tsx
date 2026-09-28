import { Link } from "react-router-dom";
import { Shell, EndMark } from "@/components/log/Shell";
import { EntryBlock } from "@/components/log/EntryCard";
import { SORTED_ENTRIES } from "@/lib/log/entries";
import { useRecentlyViewed } from "@/lib/local";

export default function Home() {
  const entries = SORTED_ENTRIES;
  const { items: recent } = useRecentlyViewed();
  return (
    <Shell>
      <header className="mb-14 border-b border-foreground pb-10">
        <p className="meta">Xog-arag · Somali: one who has seen the record</p>
        <h1 className="mt-5 font-display text-[clamp(2.6rem,8vw,5rem)] font-bold leading-[0.95] tracking-[-0.04em] text-balance">
          A field log kept<br />by a working analyst.
        </h1>
        <p className="mt-6 max-w-[58ch] text-[18px] leading-relaxed text-muted-foreground">
          Quotes that stuck, notes worth keeping, and honest concerns about AI, data science and
          machine learning — written from practice, in Mogadishu, with the uncertainty left in.
        </p>
        <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2">
          <Link className="meta text-foreground link-draw" to="/concerns">read the concerns</Link>
          <Link className="meta hover:text-foreground" to="/data-diary">data diary</Link>
          <Link className="meta hover:text-foreground" to="/about">first page</Link>
        </div>
      </header>

      {recent.length > 0 && (
        <section className="mb-12 border-b border-rule pb-8">
          <h2 className="meta mb-4">recently read — pick up where you left off</h2>
          <ol className="grid border-l border-t border-rule sm:grid-cols-3">
            {recent.slice(0, 3).map((r, i) => (
              <li key={r.href} className="border-b border-r border-rule">
                <Link to={r.href} className="group block h-full p-4 transition-colors hover:bg-foreground hover:text-background">
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] opacity-60">
                    {String(i + 1).padStart(2, "0")} · {new Date(r.at).toLocaleDateString("en-GB", { day: "numeric", month: "short" })}
                  </span>
                  <span className="mt-2 block text-[15px] font-medium leading-snug">
                    {r.title.length > 70 ? r.title.slice(0, 70) + "…" : r.title}
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </section>
      )}

      <div className="mb-6 flex items-baseline justify-between">
        <h2 className="meta">current entries · newest first</h2>
        <span className="meta">{entries.length} logged</span>
      </div>

      <div>
        {entries.map((e, i) => (
          <EntryBlock key={e.id} entry={e} index={i} />
        ))}
      </div>

      <EndMark />
      <p className="mt-4 text-center">
        <Link className="meta text-foreground link-draw" to="/archive">full index →</Link>
      </p>
    </Shell>
  );
}
