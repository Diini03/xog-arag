import { Link } from "react-router-dom";
import { Loader2, Sparkles } from "lucide-react";
import { Panel } from "@/components/site/cards";
import { useDailyBrief } from "@/lib/ai/daily-brief";

function Skeleton() {
  return (
    <Panel tone="hsl(var(--ai))">
      <div className="flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.18em] text-muted-foreground">
        <Loader2 className="h-3.5 w-3.5 animate-spin" /> Writing today's drop
      </div>
      <div className="mt-5 space-y-3">
        <div className="h-6 w-2/3 animate-pulse rounded bg-muted" />
        <div className="h-4 w-full animate-pulse rounded bg-muted" />
        <div className="h-4 w-5/6 animate-pulse rounded bg-muted" />
      </div>
    </Panel>
  );
}

/** Today's AI-generated focus, tip, task and quote. Same for every visitor, refreshed each UTC day. */
export function DailyDrop() {
  const { data, isLoading, error } = useDailyBrief();

  if (isLoading) return <Skeleton />;

  if (error || !data) {
    return (
      <Panel tone="hsl(var(--ai))">
        <div className="label-xs">Today's AI drop</div>
        <p className="mt-3 text-[14.5px] text-muted-foreground">
          The daily drop could not be generated right now. The curated library below is unaffected — try again in a
          few minutes.
        </p>
      </Panel>
    );
  }

  return (
    <div className="grid gap-5 lg:grid-cols-12">
      <div className="lg:col-span-7">
        <Panel tone="hsl(var(--ai))">
          <div className="flex items-center gap-2">
            <Sparkles className="h-3.5 w-3.5 text-ai" />
            <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-ai">Today's AI drop</span>
            <span className="label-xs">· {data.day} UTC</span>
          </div>
          <h2 className="mt-4 font-display text-[clamp(1.5rem,3vw,2.2rem)] font-extrabold leading-tight">{data.focus}</h2>
          <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{data.briefing}</p>

          <div className="mt-6 rounded-md border border-border bg-muted/40 p-4">
            <div className="label-xs">Tip of the day</div>
            <h3 className="mt-2 font-display text-[17px] font-bold">{data.tip.title}</h3>
            <p className="mt-1.5 text-[14px] leading-relaxed text-muted-foreground">{data.tip.explanation}</p>
            {data.tip.example && (
              <pre className="mt-3 overflow-x-auto rounded border border-border bg-background p-3 font-mono text-[12.5px] leading-relaxed">
                <code>{data.tip.example}</code>
              </pre>
            )}
          </div>

          <Link
            to="/practice"
            className="mt-6 inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-[14px] font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
          >
            Practice today's {data.questions.length} questions →
          </Link>
        </Panel>
      </div>

      <div className="grid gap-5 lg:col-span-5">
        <Panel tone="hsl(var(--mint))">
          <div className="label-xs">20-minute task</div>
          <h3 className="mt-2 font-display text-[18px] font-bold">{data.task.title}</h3>
          <p className="mt-1.5 text-[14px] text-muted-foreground">{data.task.brief}</p>
          <ol className="mt-4 space-y-2">
            {data.task.steps.map((s, i) => (
              <li key={i} className="flex gap-3 text-[14px]">
                <span className="font-mono text-[12px] text-mint">{String(i + 1).padStart(2, "0")}</span>
                <span>{s}</span>
              </li>
            ))}
          </ol>
        </Panel>
        <Panel tone="hsl(var(--quote))">
          <div className="label-xs">Line of the day</div>
          <blockquote className="mt-3 font-display text-[19px] font-semibold leading-snug text-balance">
            “{data.quote.text}”
          </blockquote>
          <p className="mt-3 text-[12.5px] text-muted-foreground">Original XogArag line — not attributed to anyone.</p>
        </Panel>
      </div>
    </div>
  );
}
