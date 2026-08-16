import { Link } from "react-router-dom";
import { ArrowRight, Shuffle } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { QuoteCard, TipCard, FactCard, Panel, NewsCard, QuestionCard } from "@/components/site/cards";
import { Kicker } from "@/components/site/kind";
import { QUOTES } from "@/lib/content/quotes";
import { TIPS } from "@/lib/content/tips";
import { FACTS } from "@/lib/content/facts";
import { QUESTIONS } from "@/lib/content/questions";
import { CURATED_NEWS, DISCUSSED_TOPICS } from "@/lib/content/news";
import { GAMES, LABS } from "@/lib/content/catalog";
import { pickDaily, pickManyDaily, todayKey } from "@/lib/daily";
import { useRandomDiscovery } from "@/lib/discovery";

export default function Home() {
  const surprise = useRandomDiscovery();
  const quote = pickDaily(QUOTES, "home-quote");
  const tip = pickDaily(TIPS, "home-tip");
  const fact = pickDaily(FACTS, "home-fact");
  const question = pickDaily(QUESTIONS, "home-question");
  const stories = pickManyDaily(CURATED_NEWS, "home-news", 3);
  const labs = pickManyDaily(LABS, "home-labs", 3);

  return (
    <Layout>
      {/* Board header — not a hero */}
      <section className="grid gap-6 border-b border-border pb-8 md:grid-cols-[1.35fr_1fr] md:items-end">
        <div>
          <div className="label-xs">{todayKey()} · board of discoveries</div>
          <h1 className="mt-3 font-display text-[clamp(2.25rem,6.5vw,4.5rem)] font-extrabold leading-[0.94] text-balance">
            What can you learn,<br />try or break today?
          </h1>
        </div>
        <div className="space-y-4">
          <p className="text-[15px] leading-relaxed text-muted-foreground">
            XogArag is a playground for data, AI and technology. Read one specific thing, poke a lab until the numbers move,
            lose a game to a scatter plot, then leave.
          </p>
          <div className="flex flex-wrap gap-2">
            <button onClick={surprise} className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-[14px] font-semibold text-primary-foreground transition-transform hover:scale-[1.02]">
              <Shuffle className="h-4 w-4" /> Show me something
            </button>
            <Link to="/today" className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2.5 text-[14px] font-semibold hover:border-primary/60">
              Today's board <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Asymmetric discovery board */}
      <section className="mt-8 grid gap-5 lg:grid-cols-12">
        <div className="lg:col-span-7"><QuoteCard quote={quote} slot="today" /></div>
        <div className="lg:col-span-5"><FactCard fact={fact} slot="did you know" /></div>
        <div className="lg:col-span-5"><TipCard tip={tip} slot="today's tip" /></div>
        <div className="lg:col-span-7"><QuestionCard question={question} /></div>
      </section>

      {/* Labs strip */}
      <section className="mt-14">
        <div className="flex items-end justify-between gap-4 border-b border-border pb-3">
          <h2 className="font-display text-[24px] font-extrabold">Try an experiment</h2>
          <Link to="/labs" className="label-xs hover:text-primary">All labs →</Link>
        </div>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {labs.map((l) => (
            <Link key={l.id} to={`/lab/${l.id}`} className="group rounded-lg border border-border bg-card p-5 transition-colors hover:border-lab/60">
              <Kicker kind="lab" note={l.difficulty} />
              <h3 className="mt-3 font-display text-[18px] font-bold group-hover:text-lab">{l.title}</h3>
              <p className="mt-1.5 text-[13.5px] leading-relaxed text-muted-foreground">{l.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* News + trending, uneven split */}
      <section className="mt-14 grid gap-8 lg:grid-cols-[1.6fr_1fr]">
        <div>
          <div className="flex items-end justify-between gap-4 border-b border-border pb-3">
            <h2 className="font-display text-[24px] font-extrabold">Worth reading</h2>
            <Link to="/news" className="label-xs hover:text-primary">All stories →</Link>
          </div>
          <div className="mt-2">
            {stories.map((s) => <NewsCard key={s.id} item={s} compact />)}
          </div>
        </div>
        <div className="space-y-5">
          <Panel tone="hsl(var(--mint))">
            <div className="label-xs">Recently discussed</div>
            <p className="mt-1 text-[12.5px] text-muted-foreground">Topics repeated across the stories we track — not a popularity ranking.</p>
            <ul className="mt-4 space-y-2.5">
              {DISCUSSED_TOPICS.map((t) => (
                <li key={t.topic} className="flex items-center gap-3">
                  <span className="font-mono text-[11px] text-muted-foreground">{String(t.count).padStart(2, "0")}</span>
                  <span className="text-[14px]">{t.topic}</span>
                </li>
              ))}
            </ul>
          </Panel>
          <Panel tone="hsl(var(--game))">
            <div className="label-xs">Five-minute games</div>
            <ul className="mt-3 space-y-2">
              {GAMES.map((g) => (
                <li key={g.id}>
                  <Link to={`/game/${g.id}`} className="flex items-baseline justify-between gap-3 py-1 hover:text-game">
                    <span className="text-[14.5px] font-medium">{g.title}</span>
                    <span className="font-mono text-[11px] text-muted-foreground">{g.rounds} rounds</span>
                  </Link>
                </li>
              ))}
            </ul>
          </Panel>
        </div>
      </section>
    </Layout>
  );
}
