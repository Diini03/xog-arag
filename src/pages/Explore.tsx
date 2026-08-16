import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Layout, PageIntro } from "@/components/site/Layout";
import { ChallengeCard, ConceptCard, FactCard, QuestionCard, QuoteCard, TipCard } from "@/components/site/cards";
import { QUOTES } from "@/lib/content/quotes";
import { TIPS } from "@/lib/content/tips";
import { CONCEPTS, FACTS } from "@/lib/content/facts";
import { CHALLENGES, QUESTIONS } from "@/lib/content/questions";
import { CATEGORY_LABEL, Category } from "@/lib/content/types";
import { cn } from "@/lib/utils";

const KINDS = ["all", "quote", "tip", "fact", "question", "challenge", "concept"] as const;

export default function Explore() {
  const [params, setParams] = useSearchParams();
  const kind = (params.get("kind") ?? "all") as (typeof KINDS)[number];
  const category = params.get("category") as Category | null;

  const set = (key: string, value: string | null) => {
    const next = new URLSearchParams(params);
    if (!value || value === "all") next.delete(key); else next.set(key, value);
    setParams(next, { replace: true });
  };

  const matches = (c: Category) => !category || c === category;

  const blocks = useMemo(() => {
    const out: JSX.Element[] = [];
    if (kind === "all" || kind === "quote") QUOTES.filter((q) => matches(q.category)).forEach((q) => out.push(<QuoteCard key={q.id} quote={q} />));
    if (kind === "all" || kind === "tip") TIPS.filter((t) => matches(t.category)).forEach((t) => out.push(<TipCard key={t.id} tip={t} />));
    if (kind === "all" || kind === "fact") FACTS.filter((f) => matches(f.category)).forEach((f) => out.push(<FactCard key={f.id} fact={f} />));
    if (kind === "all" || kind === "question") QUESTIONS.filter((q) => matches(q.category)).forEach((q) => out.push(<QuestionCard key={q.id} question={q} />));
    if (kind === "all" || kind === "challenge") CHALLENGES.filter((c) => matches(c.category)).forEach((c) => out.push(<ChallengeCard key={c.id} challenge={c} />));
    if (kind === "all" || kind === "concept") CONCEPTS.filter((c) => matches(c.category)).forEach((c) => out.push(<ConceptCard key={c.id} concept={c} />));
    return out;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [kind, category]);

  return (
    <Layout>
      <PageIntro kicker="Everything, filterable" title="Explore" lede="The whole library: quotes with sources, practical tips, facts, questions, challenges and concepts." />

      <div className="sticky top-14 z-20 -mx-4 mb-6 border-y border-border bg-background/90 px-4 py-3 backdrop-blur sm:mx-0 sm:rounded-md sm:border">
        <div className="flex flex-wrap gap-1.5">
          {KINDS.map((k) => (
            <button key={k} onClick={() => set("kind", k)}
              className={cn("rounded-full px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] transition-colors",
                kind === k ? "bg-primary text-primary-foreground" : "border border-border text-muted-foreground hover:text-foreground")}>
              {k}
            </button>
          ))}
        </div>
        <div className="mt-2 flex flex-wrap gap-1.5">
          <button onClick={() => set("category", null)}
            className={cn("rounded-full px-3 py-1 text-[12px]", !category ? "bg-secondary text-secondary-foreground" : "text-muted-foreground hover:text-foreground")}>
            All topics
          </button>
          {(Object.keys(CATEGORY_LABEL) as Category[]).map((c) => (
            <button key={c} onClick={() => set("category", c)}
              className={cn("rounded-full px-3 py-1 text-[12px]", category === c ? "bg-secondary text-secondary-foreground" : "text-muted-foreground hover:text-foreground")}>
              {CATEGORY_LABEL[c]}
            </button>
          ))}
        </div>
      </div>

      {blocks.length === 0 ? (
        <p className="rounded-md border border-border bg-card p-8 text-center text-[14px] text-muted-foreground">
          Nothing in that combination yet. Clear a filter to see more.
        </p>
      ) : (
        <div className="columns-1 gap-5 lg:columns-2 [&>*]:mb-5 [&>*]:break-inside-avoid">{blocks}</div>
      )}
    </Layout>
  );
}
