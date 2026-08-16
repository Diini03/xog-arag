import { Link } from "react-router-dom";
import { Layout, PageIntro } from "@/components/site/Layout";
import { useBookmarks, useScores } from "@/lib/local";
import { GAMES } from "@/lib/content/catalog";

export default function Saved() {
  const { items, clear } = useBookmarks();
  const { scores } = useScores();

  return (
    <Layout>
      <PageIntro kicker="This device only" title="Saved" lede="Bookmarks and game scores stored in your browser. Nothing is synced to an account." />
      <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <section>
          <div className="flex items-center justify-between border-b border-border pb-3">
            <h2 className="font-display text-[20px] font-extrabold">Bookmarks</h2>
            {items.length > 0 && (
              <button onClick={clear} className="label-xs hover:text-destructive">Clear all</button>
            )}
          </div>
          {items.length === 0 ? (
            <p className="mt-5 text-[14px] text-muted-foreground">
              Nothing saved yet. Use the save button on any tip, quote, lab or story.
            </p>
          ) : (
            <ul className="mt-2">
              {items.map((b) => (
                <li key={b.id} className="border-b border-border py-3">
                  <Link to={b.href} className="flex items-baseline justify-between gap-3 hover:text-primary">
                    <span className="text-[14.5px]">{b.title}</span>
                    <span className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted-foreground">{b.kind}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>
        <section>
          <h2 className="border-b border-border pb-3 font-display text-[20px] font-extrabold">Game history</h2>
          {scores.length === 0 ? (
            <p className="mt-5 text-[14px] text-muted-foreground">No games played yet.</p>
          ) : (
            <ul className="mt-2">
              {scores.slice(0, 15).map((s, i) => (
                <li key={i} className="flex items-baseline justify-between border-b border-border py-2.5 text-[14px]">
                  <span>{GAMES.find((g) => g.id === s.gameId)?.title ?? s.gameId}</span>
                  <span className="font-mono tabular-nums">{s.score}/{s.total}</span>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </Layout>
  );
}
