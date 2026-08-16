import { Link, useParams } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Layout, PageIntro } from "@/components/site/Layout";
import { Kicker } from "@/components/site/kind";
import { GAMES } from "@/lib/content/catalog";
import { SaveButton } from "@/components/site/cards";

const GameRegistry = lazy(() =>
  import("@/components/games/registry").then((m) => ({
    default: ({ id }: { id: string }) => {
      const C = m.GAME_COMPONENTS[id];
      return C ? <C /> : <p className="text-[14px] text-muted-foreground">This game could not be loaded.</p>;
    },
  })),
);

export function GamesIndex() {
  return (
    <Layout>
      <PageIntro kicker="Short, losable" title="Games" lede="A few minutes each. Scores stay on this device — no account, no sync." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {GAMES.map((g) => (
          <Link key={g.id} to={`/game/${g.id}`} className="group rounded-lg border border-border bg-card p-5 transition-colors hover:border-game/60">
            <Kicker kind="game" note={`${g.rounds} rounds`} />
            <h2 className="mt-3 font-display text-[19px] font-bold group-hover:text-game">{g.title}</h2>
            <p className="mt-1.5 text-[13.5px] leading-relaxed text-muted-foreground">{g.description}</p>
          </Link>
        ))}
      </div>
    </Layout>
  );
}

export default function GamePage() {
  const { id = "" } = useParams();
  const meta = GAMES.find((g) => g.id === id);
  if (!meta) {
    return (
      <Layout>
        <PageIntro kicker="Not found" title="No such game" />
        <Link to="/games" className="text-primary underline">Back to all games</Link>
      </Layout>
    );
  }
  return (
    <Layout>
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4 border-b border-border pb-5">
        <div className="max-w-2xl">
          <Kicker kind="game" note={meta.difficulty} />
          <h1 className="mt-2 font-display text-[clamp(1.9rem,4.5vw,2.75rem)] font-extrabold leading-tight">{meta.title}</h1>
          <p className="mt-2 text-[15px] text-muted-foreground">{meta.description}</p>
        </div>
        <div className="flex gap-2">
          <SaveButton id={meta.id} kind="game" title={meta.title} href={`/game/${meta.id}`} />
          <Link to="/games" className="inline-flex h-7 items-center rounded-full border border-border px-2.5 font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted-foreground hover:text-foreground">All games</Link>
        </div>
      </div>
      <div className="mx-auto max-w-2xl">
        <Suspense fallback={<div className="h-64 animate-pulse rounded-md border border-border bg-muted/30" />}>
          <GameRegistry id={id} />
        </Suspense>
      </div>
    </Layout>
  );
}
