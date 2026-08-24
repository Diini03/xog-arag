import { Link } from "react-router-dom";
import { Shell, EndMark } from "@/components/log/Shell";
import { EntryBlock } from "@/components/log/EntryCard";
import { SORTED_ENTRIES } from "@/lib/log/entries";

export default function Home() {
  const entries = SORTED_ENTRIES;
  return (
    <Shell>
      <header className="mb-14 border-b border-rule pb-10">
        <p className="meta">Xog-arag · Somali: one who has seen the record</p>
        <h1 className="mt-4 font-display text-[clamp(2.2rem,6vw,3.6rem)] font-semibold leading-[1.02] text-balance">
          A field log kept by a working analyst.
        </h1>
        <p className="mt-5 max-w-[60ch] text-[18.5px] leading-relaxed text-muted-foreground">
          Quotes that stuck, notes worth keeping, and honest concerns about AI, data science and
          machine learning — written from practice, in Mogadishu, with the uncertainty left in.
        </p>
        <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2">
          <Link className="meta text-primary underline underline-offset-4" to="/concerns">read the concerns</Link>
          <Link className="meta hover:text-foreground" to="/data-diary">data diary</Link>
          <Link className="meta hover:text-foreground" to="/about">first page</Link>
        </div>
      </header>

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
        <Link className="meta text-primary underline underline-offset-4" to="/archive">full index →</Link>
      </p>
    </Shell>
  );
}
