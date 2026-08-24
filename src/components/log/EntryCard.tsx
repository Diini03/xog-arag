import { useState } from "react";
import { Entry, TYPE_LABEL } from "@/lib/log/types";
import { longDate, paragraphs, readTime } from "@/lib/log/format";
import { cn } from "@/lib/utils";

function Marginalia({ entry }: { entry: Entry }) {
  return (
    <div className="mb-2 shrink-0 lg:absolute lg:-left-[190px] lg:top-1 lg:mb-0 lg:w-[165px] lg:text-right lg:opacity-45 lg:transition-opacity lg:duration-300 lg:group-hover:opacity-100 lg:group-focus-within:opacity-100">
      <div className="meta">logged {entry.date}</div>
      <div className="meta mt-1">{TYPE_LABEL[entry.type]}</div>
      {entry.tags[0] && <div className="meta mt-1">tag: {entry.tags[0]}</div>}
      <div className="meta mt-1">{readTime(entry.body)} min read</div>
    </div>
  );
}

function Tags({ tags }: { tags: string[] }) {
  return (
    <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
      {tags.map((t) => (
        <span key={t} className="meta">#{t.replace(/\s+/g, "-")}</span>
      ))}
    </div>
  );
}

function QuoteCard({ entry, i }: { entry: Entry; i: number }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <button
      onClick={() => setFlipped((f) => !f)}
      className={cn(
        "relative block w-full border border-rule-strong/60 bg-card px-6 py-7 text-left transition-transform duration-300 hover:rotate-0",
        i % 2 === 0 ? "pin-rotate-a" : "pin-rotate-b",
      )}
      aria-expanded={flipped}
    >
      <span className="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-stamp" aria-hidden="true" />
      {!flipped ? (
        <>
          <p className="font-display text-[clamp(1.15rem,2.3vw,1.55rem)] leading-snug">
            “{entry.body}”
          </p>
          <p className="meta mt-4 normal-case tracking-normal">
            {entry.source ? `— ${entry.source}` : "— unattributed; mine"}
          </p>
          <p className="meta mt-3 text-primary">tap for the annotation</p>
        </>
      ) : (
        <>
          <p className="meta">why it mattered</p>
          <p className="mt-3 text-[16.5px] leading-relaxed">{entry.annotation}</p>
          {entry.sourceUrl && (
            <a
              href={entry.sourceUrl}
              target="_blank"
              rel="noreferrer noopener"
              onClick={(e) => e.stopPropagation()}
              className="meta mt-4 inline-block text-primary underline underline-offset-4"
            >
              source
            </a>
          )}
          <p className="meta mt-3 text-muted-foreground">tap to flip back</p>
        </>
      )}
    </button>
  );
}

function ConfidenceMark({ entry }: { entry: Entry }) {
  if (!entry.confidence) return null;
  return (
    <span className="meta border border-stamp/60 px-2 py-0.5 text-stamp">[{entry.confidence}]</span>
  );
}

function StatusStamp({ entry }: { entry: Entry }) {
  if (!entry.status) return null;
  return (
    <span className="meta -rotate-2 border border-rule-strong px-2 py-0.5 text-foreground/70">
      {entry.status}
    </span>
  );
}

export function EntryBlock({ entry, index = 0 }: { entry: Entry; index?: number }) {
  const paras = paragraphs(entry.body);
  return (
    <article className="group relative border-b border-rule py-10 lg:pl-0">
      <Marginalia entry={entry} />

      {entry.type === "quote" && <QuoteCard entry={entry} i={index} />}

      {entry.type !== "quote" && (
        <>
          {(entry.title || entry.confidence || entry.status) && (
            <header className="mb-3">
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <ConfidenceMark entry={entry} />
                <StatusStamp entry={entry} />
              </div>
              {entry.title && (
                <h2 className="font-display text-[clamp(1.3rem,2.6vw,1.85rem)] font-semibold leading-tight text-balance">
                  {entry.title}
                </h2>
              )}
            </header>
          )}
          <div className="max-w-[64ch] space-y-4">
            {paras.map((p, i) => (
              <p key={i} className="text-[17.5px] leading-[1.75]">{p}</p>
            ))}
          </div>
          {entry.relatedProjectUrl && (
            <a
              href={entry.relatedProjectUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="meta mt-5 inline-block text-primary underline underline-offset-4"
            >
              repository →
            </a>
          )}
        </>
      )}

      <Tags tags={entry.tags} />
      <p className="meta mt-3 lg:hidden">{longDate(entry.date)}</p>
    </article>
  );
}
