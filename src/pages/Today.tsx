import { Link } from "react-router-dom";
import { Layout, PageIntro } from "@/components/site/Layout";
import { ChallengeCard, ConceptCard, FactCard, NewsCard, Panel, QuestionCard, QuoteCard, TipCard } from "@/components/site/cards";
import { Kicker } from "@/components/site/kind";
import { QUOTES } from "@/lib/content/quotes";
import { TIPS } from "@/lib/content/tips";
import { CONCEPTS, FACTS } from "@/lib/content/facts";
import { CHALLENGES, QUESTIONS } from "@/lib/content/questions";
import { CURATED_NEWS } from "@/lib/content/news";
import { GAMES, LABS } from "@/lib/content/catalog";
import { pickDaily, todayKey } from "@/lib/daily";

export default function Today() {
  const day = todayKey();
  const lab = pickDaily(LABS, "today-lab");
  const game = pickDaily(GAMES, "today-game");

  return (
    <Layout>
      <PageIntro
        kicker={`Daily edition · ${day} UTC`}
        title="Today"
        lede="One quote, one tip, one fact, one question, one challenge, one concept, one story. It changes at midnight UTC and it is the same for everyone."
      />
      <div className="grid gap-5 lg:grid-cols-12">
        <div className="lg:col-span-7"><QuoteCard quote={pickDaily(QUOTES, "today-quote")} slot="today's quote" /></div>
        <div className="lg:col-span-5"><FactCard fact={pickDaily(FACTS, "today-fact")} slot="today's fact" /></div>
        <div className="lg:col-span-6"><TipCard tip={pickDaily(TIPS, "today-tip")} slot="today's tip" /></div>
        <div className="lg:col-span-6"><QuestionCard question={pickDaily(QUESTIONS, "today-question")} /></div>
        <div className="lg:col-span-7"><ChallengeCard challenge={pickDaily(CHALLENGES, "today-challenge")} /></div>
        <div className="lg:col-span-5"><ConceptCard concept={pickDaily(CONCEPTS, "today-concept")} /></div>

        <div className="lg:col-span-6">
          <Panel tone="hsl(var(--lab))">
            <Kicker kind="lab" note="today's experiment" />
            <h3 className="mt-3 font-display text-[19px] font-bold">{lab.title}</h3>
            <p className="mt-1.5 text-[14px] text-muted-foreground">{lab.description}</p>
            <Link to={`/lab/${lab.id}`} className="mt-4 inline-block rounded-full border border-border px-4 py-2 text-[13.5px] font-semibold hover:border-lab">Open the lab →</Link>
          </Panel>
        </div>
        <div className="lg:col-span-6">
          <Panel tone="hsl(var(--game))">
            <Kicker kind="game" note="today's game" />
            <h3 className="mt-3 font-display text-[19px] font-bold">{game.title}</h3>
            <p className="mt-1.5 text-[14px] text-muted-foreground">{game.description}</p>
            <Link to={`/game/${game.id}`} className="mt-4 inline-block rounded-full border border-border px-4 py-2 text-[13.5px] font-semibold hover:border-game">Play →</Link>
          </Panel>
        </div>
      </div>

      <section className="mt-12">
        <h2 className="border-b border-border pb-3 font-display text-[24px] font-extrabold">Today's story</h2>
        <NewsCard item={pickDaily(CURATED_NEWS, "today-news")} />
      </section>
    </Layout>
  );
}
