import { DiscoveryKind } from "@/lib/content/types";

export const KIND_STYLE: Record<DiscoveryKind, { color: string; label: string }> = {
  quote: { color: "hsl(var(--quote))", label: "Quote" },
  tip: { color: "hsl(var(--data))", label: "Tip" },
  fact: { color: "hsl(var(--mint))", label: "Fact" },
  question: { color: "hsl(var(--primary))", label: "Question" },
  concept: { color: "hsl(var(--ai))", label: "Concept" },
  lab: { color: "hsl(var(--lab))", label: "Lab" },
  game: { color: "hsl(var(--game))", label: "Game" },
  news: { color: "hsl(var(--news))", label: "News" },
};

export function Kicker({ kind, note }: { kind: DiscoveryKind; note?: string }) {
  const s = KIND_STYLE[kind];
  return (
    <div className="flex items-center gap-2">
      <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: s.color }} aria-hidden="true" />
      <span className="font-mono text-[10.5px] uppercase tracking-[0.18em]" style={{ color: s.color }}>
        {s.label}
      </span>
      {note && <span className="label-xs">· {note}</span>}
    </div>
  );
}

export function SourceLink({ publication, url, author }: { publication: string; url: string; author?: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer noopener"
      className="inline-flex items-center gap-1 font-mono text-[11px] text-muted-foreground underline decoration-dotted underline-offset-4 hover:text-primary"
    >
      {author ? `${author} · ` : ""}{publication} ↗
    </a>
  );
}
