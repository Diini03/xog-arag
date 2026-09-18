import { useState } from "react";
import { Link } from "react-router-dom";
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
        <Link
          key={t}
          to={`/tag/${t.toLowerCase().replace(/\s+/g, "-")}`}
          className="meta hover:text-primary"
        >
          #{t.replace(/\s+/g, "-")}
        </Link>
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
        "relative block w-full border border-foreground px-6 py-8 text-left transition-colors duration-200",
        flipped ? "bg-background" : "invert-block",
      )}
      aria-expanded={flipped}
    >
      <span className="absolute right-4 top-3 font-mono text-[10px] uppercase tracking-[0.2em] opacity-60">
        {String(i + 1).padStart(2, "0")}
      </span>
      {!flipped ? (
        <>
          <p className="font-display text-[clamp(1.3rem,2.9vw,1.9rem)] font-semibold leading-[1.15] tracking-tight">
            {entry.body}
          </p>
          <p className="mt-5 font-mono text-[10.5px] uppercase tracking-[0.18em] opacity-70">
            {entry.source ? entry.source : "unattributed · mine"}
          </p>
          <p className="mt-2 font-mono text-[10.5px] uppercase tracking-[0.18em] opacity-70">
            tap for the annotation
          </p>
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
              className="meta link-draw mt-4 inline-block text-foreground"
            >
              source
            </a>
          )}
          <p className="meta mt-3">tap to flip back</p>
        </>
      )}
    </button>
  );
}

function ConfidenceMark({ entry }: { entry: Entry }) {
  if (!entry.confidence) return null;
  return (
    <span className="meta invert-block px-2 py-1 text-background">{entry.confidence}</span>
  );
}

function StatusStamp({ entry }: { entry: Entry }) {
  if (!entry.status) return null;
  return (
    <span className="meta border border-foreground px-2 py-1 text-foreground">{entry.status}</span>
  );
}

export function EntryBlock({
  entry,
  index = 0,
  standalone = false,
}: {
  entry: Entry;
  index?: number;
  standalone?: boolean;
}) {
  const paras = paragraphs(entry.body);
  return (
    <article
      className={cn("group relative py-10 lg:pl-0", !standalone && "border-b border-rule")}
    >
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
              className="meta mt-5 inline-block text-foreground link-draw"
            >
              repository →
            </a>
          )}
        </>
      )}

      <Tags tags={entry.tags} />
      <div className="mt-3 flex flex-wrap items-baseline gap-x-5 gap-y-1">
        <p className="meta lg:hidden">{longDate(entry.date)}</p>
        {!standalone && (
          <Link to={`/entry/${entry.id}`} className="meta text-foreground link-draw">
            permalink →
          </Link>
        )}
      </div>
    </article>
  );
}
