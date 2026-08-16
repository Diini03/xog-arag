import { Link, useParams } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Layout, PageIntro } from "@/components/site/Layout";
import { Kicker } from "@/components/site/kind";
import { LABS } from "@/lib/content/catalog";
import { SaveButton } from "@/components/site/cards";

const LabRegistry = lazy(() =>
  import("@/components/labs/registry").then((m) => ({
    default: ({ id }: { id: string }) => {
      const C = m.LAB_COMPONENTS[id];
      return C ? <C /> : <p className="text-[14px] text-muted-foreground">This lab could not be loaded.</p>;
    },
  })),
);

export function LabsIndex() {
  return (
    <Layout>
      <PageIntro kicker="Interactive experiments" title="Labs" lede="Move a slider, watch the statistic move. Every lab is an educational simulation, not a production model." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {LABS.map((l) => (
          <Link key={l.id} to={`/lab/${l.id}`} className="group rounded-lg border border-border bg-card p-5 transition-colors hover:border-lab/60">
            <Kicker kind="lab" note={l.difficulty} />
            <h2 className="mt-3 font-display text-[19px] font-bold group-hover:text-lab">{l.title}</h2>
            <p className="mt-1.5 text-[13.5px] leading-relaxed text-muted-foreground">{l.description}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {l.tags.slice(0, 3).map((t) => (
                <span key={t} className="rounded-full border border-border px-2 py-0.5 font-mono text-[10px] text-muted-foreground">{t}</span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
}

export default function LabPage() {
  const { id = "" } = useParams();
  const meta = LABS.find((l) => l.id === id);
  if (!meta) {
    return (
      <Layout>
        <PageIntro kicker="Not found" title="No such lab" lede="It may have been renamed." />
        <Link to="/labs" className="text-primary underline">Back to all labs</Link>
      </Layout>
    );
  }
  return (
    <Layout>
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4 border-b border-border pb-5">
        <div className="max-w-2xl">
          <Kicker kind="lab" note={meta.difficulty} />
          <h1 className="mt-2 font-display text-[clamp(1.9rem,4.5vw,2.75rem)] font-extrabold leading-tight">{meta.title}</h1>
          <p className="mt-2 text-[15px] text-muted-foreground">{meta.description}</p>
        </div>
        <div className="flex gap-2">
          <SaveButton id={meta.id} kind="lab" title={meta.title} href={`/lab/${meta.id}`} />
          <Link to="/labs" className="inline-flex h-7 items-center rounded-full border border-border px-2.5 font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted-foreground hover:text-foreground">All labs</Link>
        </div>
      </div>
      <Suspense fallback={<div className="h-64 animate-pulse rounded-md border border-border bg-muted/30" />}>
        <LabRegistry id={id} />
      </Suspense>
    </Layout>
  );
}
