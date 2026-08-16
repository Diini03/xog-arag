import { Link } from "react-router-dom";
import { Bookmark as BookmarkIcon, Check, Copy } from "lucide-react";
import { useState } from "react";
import { Concept, Fact, NewsItem, Question, Quote, Tip, Challenge } from "@/lib/content/types";
import { Kicker, SourceLink } from "@/components/site/kind";
import { useBookmarks } from "@/lib/local";
import { cn } from "@/lib/utils";

export function Panel({ className, children, tone }: { className?: string; children: React.ReactNode; tone?: string }) {
  return (
    <section
      className={cn("relative rounded-lg border border-border bg-card p-5 sm:p-6", className)}
      style={tone ? { boxShadow: `inset 3px 0 0 0 ${tone}` } : undefined}
    >
      {children}
    </section>
  );
}

export function SaveButton({ id, kind, title, href }: { id: string; kind: string; title: string; href: string }) {
  const { has, toggle } = useBookmarks();
  const saved = has(id);
  return (
    <button
      onClick={() => toggle({ id, kind, title, href })}
      aria-pressed={saved}
      aria-label={saved ? `Remove ${title} from saved` : `Save ${title}`}
      className={cn(
        "inline-flex h-7 items-center gap-1.5 rounded-full border px-2.5 font-mono text-[10.5px] uppercase tracking-[0.14em] transition-colors",
        saved ? "border-primary/60 text-primary" : "border-border text-muted-foreground hover:text-foreground",
      )}
    >
      <BookmarkIcon className="h-3 w-3" fill={saved ? "currentColor" : "none"} />
      {saved ? "Saved" : "Save"}
    </button>
  );
}

export function QuoteCard({ quote, slot }: { quote: Quote; slot?: string }) {
  const [copied, setCopied] = useState(false);
  const line = quote.attributed ? `“${quote.text}” — ${quote.author}` : `“${quote.text}” — original XogArag thought`;
  return (
    <Panel tone="hsl(var(--quote))" id={quote.id}>
      <Kicker kind="quote" note={slot} />
      <blockquote className="mt-4 font-display text-[clamp(1.25rem,3.2vw,2rem)] font-semibold leading-[1.18] text-balance">
        “{quote.text}”
      </blockquote>
      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
        <span className="text-[13px] text-muted-foreground">
          {quote.attributed ? quote.author : "Original XogArag thought — not attributed to anyone"}
        </span>
        {quote.source && <SourceLink {...quote.source} />}
        <div className="ml-auto flex items-center gap-2">
          <button
            onClick={() => { navigator.clipboard?.writeText(line); setCopied(true); setTimeout(() => setCopied(false), 1400); }}
            className="inline-flex h-7 items-center gap-1.5 rounded-full border border-border px-2.5 font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted-foreground hover:text-foreground"
          >
            {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />} {copied ? "Copied" : "Copy"}
          </button>
          <SaveButton id={quote.id} kind="quote" title={quote.text.slice(0, 60)} href={`/explore?kind=quote#${quote.id}`} />
        </div>
      </div>
    </Panel>
  );
}

export function TipCard({ tip, slot }: { tip: Tip; slot?: string }) {
  return (
    <Panel tone="hsl(var(--data))" id={tip.id}>
      <Kicker kind="tip" note={slot ?? tip.difficulty} />
      <h3 className="mt-3 font-display text-[19px] font-bold leading-tight">{tip.title}</h3>
      <p className="mt-2 text-[14.5px] leading-relaxed text-muted-foreground">{tip.explanation}</p>
      {tip.example && (
        <pre className="mt-4 overflow-x-auto rounded-md border border-border bg-muted/50 p-3 font-mono text-[12.5px] leading-relaxed">
          <code>{tip.example}</code>
        </pre>
      )}
      <div className="mt-4 flex flex-wrap items-center gap-3">
        {tip.source && <SourceLink {...tip.source} />}
        <div className="ml-auto"><SaveButton id={tip.id} kind="tip" title={tip.title} href={`/explore?kind=tip#${tip.id}`} /></div>
      </div>
    </Panel>
  );
}

export function FactCard({ fact, slot }: { fact: Fact; slot?: string }) {
  return (
    <Panel tone="hsl(var(--mint))" id={fact.id}>
      <Kicker kind="fact" note={slot} />
      <p className="mt-3 text-[16px] leading-relaxed">{fact.text}</p>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        {fact.source && <SourceLink {...fact.source} />}
        <div className="ml-auto"><SaveButton id={fact.id} kind="fact" title={fact.text.slice(0, 60)} href={`/explore?kind=fact#${fact.id}`} /></div>
      </div>
    </Panel>
  );
}

export function ConceptCard({ concept }: { concept: Concept }) {
  return (
    <Panel tone="hsl(var(--ai))" id={concept.id}>
      <Kicker kind="concept" />
      <h3 className="mt-3 font-display text-[19px] font-bold">{concept.term}</h3>
      <p className="mt-2 text-[14.5px] leading-relaxed">{concept.definition}</p>
      <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground"><span className="text-foreground">Why it matters: </span>{concept.why}</p>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        {concept.source && <SourceLink {...concept.source} />}
        <div className="ml-auto"><SaveButton id={concept.id} kind="concept" title={concept.term} href={`/explore?kind=concept#${concept.id}`} /></div>
      </div>
    </Panel>
  );
}

export function ChallengeCard({ challenge }: { challenge: Challenge }) {
  return (
    <Panel tone="hsl(var(--primary))" id={challenge.id}>
      <Kicker kind="question" note={`challenge · ${challenge.difficulty}`} />
      <h3 className="mt-3 font-display text-[19px] font-bold">{challenge.title}</h3>
      <p className="mt-2 text-[14.5px] text-muted-foreground">{challenge.brief}</p>
      <ol className="mt-4 space-y-2">
        {challenge.steps.map((s, i) => (
          <li key={i} className="flex gap-3 text-[14px]">
            <span className="font-mono text-[12px] text-primary">{String(i + 1).padStart(2, "0")}</span>
            <span>{s}</span>
          </li>
        ))}
      </ol>
      <div className="mt-4 flex justify-end">
        <SaveButton id={challenge.id} kind="challenge" title={challenge.title} href={`/explore?kind=challenge#${challenge.id}`} />
      </div>
    </Panel>
  );
}

export function QuestionCard({ question }: { question: Question }) {
  const [picked, setPicked] = useState<number | null>(null);
  const correct = picked === question.answerIndex;
  return (
    <Panel tone="hsl(var(--primary))" id={question.id}>
      <Kicker kind="question" note={question.difficulty} />
      <h3 className="mt-3 font-display text-[18px] font-bold leading-snug">{question.prompt}</h3>
      {question.code && (
        <pre className="mt-3 overflow-x-auto rounded-md border border-border bg-muted/50 p-3 font-mono text-[12.5px] leading-relaxed"><code>{question.code}</code></pre>
      )}
      <div className="mt-4 grid gap-2">
        {question.options.map((o, i) => {
          const state = picked === null ? "idle" : i === question.answerIndex ? "right" : i === picked ? "wrong" : "idle";
          return (
            <button
              key={i}
              disabled={picked !== null}
              onClick={() => setPicked(i)}
              className={cn(
                "rounded-md border px-3 py-2.5 text-left text-[14px] transition-colors disabled:cursor-default",
                state === "idle" && "border-border hover:border-primary/60",
                state === "right" && "border-mint/70 bg-mint/10",
                state === "wrong" && "border-destructive/70 bg-destructive/10",
              )}
            >
              <span className="font-mono text-[11px] text-muted-foreground">{String.fromCharCode(65 + i)}</span>
              <span className="ml-2.5">{o}</span>
              {state === "right" && <span className="ml-2 font-mono text-[11px] text-mint">correct</span>}
              {state === "wrong" && <span className="ml-2 font-mono text-[11px] text-destructive">not this one</span>}
            </button>
          );
        })}
      </div>
      {picked !== null && (
        <p className="mt-4 rounded-md border border-border bg-muted/40 p-3 text-[13.5px] leading-relaxed">
          <span className="font-semibold">{correct ? "Right. " : "Here is why: "}</span>
          {question.explanation}
        </p>
      )}
    </Panel>
  );
}

export function NewsCard({ item, compact }: { item: NewsItem; compact?: boolean }) {
  return (
    <article className="group border-t border-border py-5 first:border-t-0" id={item.id}>
      <div className="flex flex-wrap items-center gap-3">
        <Kicker kind="news" note={item.publication} />
        <time className="label-xs" dateTime={item.publishedAt}>
          {new Date(item.publishedAt).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" })}
        </time>
      </div>
      <h3 className="mt-2 font-display text-[19px] font-bold leading-snug">
        <Link to={`/news/${item.id}`} className="hover:text-primary">{item.title}</Link>
      </h3>
      <p className="mt-1.5 max-w-3xl text-[14px] leading-relaxed text-muted-foreground">{item.summary}</p>
      {!compact && (
        <p className="mt-2 max-w-3xl text-[13.5px] leading-relaxed">
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-news">Why it matters </span>
          {item.whyItMatters}
        </p>
      )}
      <div className="mt-3 flex flex-wrap items-center gap-3">
        <SourceLink publication={item.publication} url={item.url} author={item.author} />
        <div className="ml-auto"><SaveButton id={item.id} kind="news" title={item.title} href={`/news/${item.id}`} /></div>
      </div>
    </article>
  );
}
