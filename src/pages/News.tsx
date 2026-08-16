import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Layout, PageIntro } from "@/components/site/Layout";
import { NewsCard, Panel, SaveButton } from "@/components/site/cards";
import { Kicker, SourceLink } from "@/components/site/kind";
import { CURATED_NEWS, DISCUSSED_TOPICS } from "@/lib/content/news";
import { CATEGORY_LABEL, Category } from "@/lib/content/types";
import { cn } from "@/lib/utils";

export function NewsIndex() {
  const [cat, setCat] = useState<Category | "all">("all");
  const items = [...CURATED_NEWS]
    .filter((n) => cat === "all" || n.category === cat)
    .sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt));

  return (
    <Layout>
      <PageIntro
        kicker="Curated, sourced, never invented"
        title="News"
        lede="Stories that matter to people working with data and AI. Every item links to its primary source with a publication date."
      />
      <div className="grid gap-8 lg:grid-cols-[1.7fr_1fr]">
        <div>
          <div className="flex flex-wrap gap-1.5 border-b border-border pb-3">
            {(["all", ...Object.keys(CATEGORY_LABEL)] as (Category | "all")[]).map((c) => (
              <button key={c} onClick={() => setCat(c)}
                className={cn("rounded-full px-3 py-1 text-[12px]", cat === c ? "bg-secondary text-secondary-foreground" : "text-muted-foreground hover:text-foreground")}>
                {c === "all" ? "All" : CATEGORY_LABEL[c as Category]}
              </button>
            ))}
          </div>
          {items.length === 0 ? (
            <p className="mt-6 text-[14px] text-muted-foreground">No stories in this topic yet.</p>
          ) : items.map((n) => <NewsCard key={n.id} item={n} />)}
        </div>
        <aside className="space-y-5">
          <Panel tone="hsl(var(--mint))">
            <div className="label-xs">Recently discussed</div>
            <p className="mt-1 text-[12.5px] text-muted-foreground">Topic frequency in the tracked set. Not a popularity metric.</p>
            <ul className="mt-3 space-y-2">
              {DISCUSSED_TOPICS.map((t) => (
                <li key={t.topic} className="flex items-center justify-between text-[14px]">
                  <span>{t.topic}</span><span className="font-mono text-[11px] text-muted-foreground">{t.count}</span>
                </li>
              ))}
            </ul>
          </Panel>
          <Panel>
            <div className="label-xs">How this section works</div>
            <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">
              Stories are curated and each one keeps its publication and link. AI is never used to write a claim of fact here —
              only to help summarise material that already has a source.
            </p>
          </Panel>
        </aside>
      </div>
    </Layout>
  );
}

export default function NewsArticle() {
  const { id = "" } = useParams();
  const item = CURATED_NEWS.find((n) => n.id === id);
  if (!item) {
    return (
      <Layout>
        <PageIntro kicker="Not found" title="That story is not here" />
        <Link to="/news" className="text-primary underline">Back to news</Link>
      </Layout>
    );
  }
  const related = CURATED_NEWS.filter((n) => n.category === item.category && n.id !== item.id).slice(0, 3);

  return (
    <Layout>
      <article className="mx-auto max-w-3xl">
        <Kicker kind="news" note={item.publication} />
        <h1 className="mt-3 font-display text-[clamp(2rem,5vw,3rem)] font-extrabold leading-[1.02] text-balance">{item.title}</h1>
        <div className="mt-3 flex flex-wrap items-center gap-4">
          <time className="label-xs" dateTime={item.publishedAt}>
            {new Date(item.publishedAt).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })}
          </time>
          <span className="label-xs">{CATEGORY_LABEL[item.category]}</span>
          <SaveButton id={item.id} kind="news" title={item.title} href={`/news/${item.id}`} />
        </div>
        <p className="mt-6 text-[17px] leading-relaxed">{item.summary}</p>
        <h2 className="mt-8 font-display text-[20px] font-bold">Why it matters</h2>
        <p className="mt-2 text-[15.5px] leading-relaxed text-muted-foreground">{item.whyItMatters}</p>
        <div className="mt-8 rounded-md border border-border bg-card p-4">
          <div className="label-xs">Source</div>
          <div className="mt-2"><SourceLink publication={item.publication} url={item.url} author={item.author} /></div>
          <p className="mt-2 text-[12.5px] text-muted-foreground">Read the original before quoting it. XogArag summarises; it does not replace the source.</p>
        </div>
      </article>

      {related.length > 0 && (
        <section className="mx-auto mt-14 max-w-3xl">
          <h2 className="border-b border-border pb-3 font-display text-[22px] font-extrabold">More on {CATEGORY_LABEL[item.category]}</h2>
          {related.map((r) => <NewsCard key={r.id} item={r} compact />)}
        </section>
      )}
    </Layout>
  );
}
