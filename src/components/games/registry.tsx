import { useMemo, useState } from "react";
import { Plot, gauss, pearson } from "@/components/labs/plot";
import { seededRandom, pickManyDaily } from "@/lib/daily";
import { QUESTIONS } from "@/lib/content/questions";
import { useScores } from "@/lib/local";
import { cn } from "@/lib/utils";

function Shell({
  gameId, round, rounds, score, children, footer,
}: { gameId: string; round: number; rounds: number; score: number; children: React.ReactNode; footer?: React.ReactNode }) {
  const { best } = useScores();
  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center gap-4 rounded-md border border-border bg-card px-4 py-3">
        <span className="label-xs">Round {Math.min(round + 1, rounds)} / {rounds}</span>
        <span className="label-xs">Score <span className="text-foreground">{score}</span></span>
        <span className="label-xs ml-auto">Best on this device <span className="text-foreground">{best(gameId)}</span></span>
      </div>
      {children}
      {footer}
    </div>
  );
}

function Finished({ score, rounds, onRestart }: { score: number; rounds: number; onRestart: () => void }) {
  return (
    <div className="rounded-md border border-border bg-card p-6 text-center">
      <div className="label-xs">Final score</div>
      <div className="font-display text-[48px] font-extrabold leading-none">{score}<span className="text-muted-foreground">/{rounds}</span></div>
      <button onClick={onRestart} className="mt-5 rounded-full bg-primary px-5 py-2 text-[14px] font-semibold text-primary-foreground">
        Play again
      </button>
    </div>
  );
}

export function GuessCorrelation() {
  const ROUNDS = 6;
  const { record } = useScores();
  const [round, setRound] = useState(0);
  const [score, setScore] = useState(0);
  const [guess, setGuess] = useState(0.5);
  const [revealed, setRevealed] = useState(false);
  const [seedBase, setSeedBase] = useState(() => Math.floor(Math.random() * 9999));

  const pts = useMemo(() => {
    const rand = seededRandom(seedBase * 100 + round);
    const target = Math.round((rand() * 1.8 - 0.9) * 100) / 100;
    return {
      target,
      data: Array.from({ length: 120 }, () => {
        const x = gauss(rand);
        return { x, y: target * x + Math.sqrt(Math.max(0, 1 - target * target)) * gauss(rand) };
      }),
    };
  }, [seedBase, round]);

  const actual = pearson(pts.data);
  const error = Math.abs(actual - guess);
  const points = error < 0.1 ? 2 : error < 0.2 ? 1 : 0;

  const next = () => {
    if (round + 1 >= ROUNDS) {
      record("guess-correlation", score + points, ROUNDS * 2);
      setRound(ROUNDS);
    } else {
      setScore((s) => s + points);
      setRound((r) => r + 1);
      setGuess(0.5);
      setRevealed(false);
    }
  };

  if (round >= ROUNDS) {
    return <Finished score={score + points} rounds={ROUNDS * 2} onRestart={() => { setRound(0); setScore(0); setRevealed(false); setSeedBase(Math.floor(Math.random() * 9999)); }} />;
  }

  return (
    <Shell gameId="guess-correlation" round={round} rounds={ROUNDS} score={score}>
      <Plot title="Scatter plot to estimate" xDomain={[-3.2, 3.2]} yDomain={[-3.2, 3.2]} xLabel="x" yLabel="y">
        {({ sx, sy }) => <g>{pts.data.map((p, i) => <circle key={i} cx={sx(p.x)} cy={sy(p.y)} r="3" fill="hsl(var(--game))" fillOpacity="0.6" />)}</g>}
      </Plot>
      <div className="rounded-md border border-border bg-card p-4">
        <label htmlFor="guess" className="label-xs">Your estimate of r</label>
        <div className="mt-2 flex items-center gap-4">
          <input id="guess" type="range" min={-1} max={1} step={0.01} value={guess} disabled={revealed}
            onChange={(e) => setGuess(Number(e.target.value))}
            className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-muted accent-primary" />
          <span className="font-mono text-[16px] tabular-nums">{guess.toFixed(2)}</span>
        </div>
        {!revealed ? (
          <button onClick={() => setRevealed(true)} className="mt-4 w-full rounded-md bg-primary py-2.5 text-[14px] font-semibold text-primary-foreground">
            Lock it in
          </button>
        ) : (
          <div className="mt-4">
            <p className="text-[14px]">
              Actual r is <span className="font-mono font-semibold">{actual.toFixed(2)}</span>. You were off by{" "}
              <span className="font-mono">{error.toFixed(2)}</span> — {points} point{points === 1 ? "" : "s"}.
            </p>
            <button onClick={next} className="mt-3 w-full rounded-md border border-border py-2.5 text-[14px] font-semibold hover:border-primary/60">
              {round + 1 >= ROUNDS ? "See final score" : "Next round"}
            </button>
          </div>
        )}
      </div>
    </Shell>
  );
}

export function SpotOutlier() {
  const ROUNDS = 6;
  const { record } = useScores();
  const [round, setRound] = useState(0);
  const [score, setScore] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [seedBase, setSeedBase] = useState(() => Math.floor(Math.random() * 9999));

  const { data, outlierIndex } = useMemo(() => {
    const rand = seededRandom(seedBase * 77 + round);
    const n = 40;
    const arr = Array.from({ length: n }, () => 50 + gauss(rand) * 6);
    const idx = Math.floor(rand() * n);
    arr[idx] = 50 + (rand() > 0.5 ? 1 : -1) * (28 + rand() * 20);
    return { data: arr, outlierIndex: idx };
  }, [seedBase, round]);

  const next = () => {
    const gained = picked === outlierIndex ? 1 : 0;
    if (round + 1 >= ROUNDS) { record("spot-outlier", score + gained, ROUNDS); setScore((s) => s + gained); setRound(ROUNDS); }
    else { setScore((s) => s + gained); setRound((r) => r + 1); setPicked(null); }
  };

  if (round >= ROUNDS) {
    return <Finished score={score} rounds={ROUNDS} onRestart={() => { setRound(0); setScore(0); setPicked(null); setSeedBase(Math.floor(Math.random() * 9999)); }} />;
  }

  return (
    <Shell gameId="spot-outlier" round={round} rounds={ROUNDS} score={score}>
      <Plot title="Click the point that does not belong" xDomain={[-1, data.length]} yDomain={[0, 110]} xLabel="row" yLabel="value">
        {({ sx, sy }) => (
          <g>
            {data.map((v, i) => (
              <circle
                key={i} cx={sx(i)} cy={sy(v)} r={picked === i ? 6 : 4.5}
                className="cursor-pointer"
                fill={picked === null ? "hsl(var(--data))" : i === outlierIndex ? "hsl(var(--mint))" : picked === i ? "hsl(var(--destructive))" : "hsl(var(--muted-foreground))"}
                fillOpacity="0.8"
                onClick={() => picked === null && setPicked(i)}
              />
            ))}
          </g>
        )}
      </Plot>
      {picked !== null && (
        <div className="rounded-md border border-border bg-card p-4">
          <p className="text-[14px]">
            {picked === outlierIndex ? "Correct — that value sits far outside the spread." : "Not quite. The highlighted mint point was the injected outlier."}
          </p>
          <button onClick={next} className="mt-3 w-full rounded-md border border-border py-2.5 text-[14px] font-semibold hover:border-primary/60">
            {round + 1 >= ROUNDS ? "See final score" : "Next round"}
          </button>
        </div>
      )}
    </Shell>
  );
}

const CHART_ROUNDS = [
  { q: "How did monthly revenue change over the last two years?", options: ["Line chart", "Pie chart", "Treemap", "Scatter plot"], a: 0, why: "A line encodes change over ordered time through slope, which is what the question asks about." },
  { q: "Which five products contribute most to total sales?", options: ["Stacked area", "Horizontal bar chart", "Radar chart", "Histogram"], a: 1, why: "Ranked categorical comparison reads best as sorted bars; length is the most accurately judged encoding." },
  { q: "Is there a relationship between advertising spend and signups?", options: ["Scatter plot", "Donut chart", "Bar chart", "Gauge"], a: 0, why: "Two continuous variables per observation is exactly the scatter plot's job." },
  { q: "How are customer ages distributed?", options: ["Line chart", "Histogram", "Pie chart", "Bullet chart"], a: 1, why: "A histogram bins one continuous variable and shows shape, spread and skew." },
  { q: "What share of total traffic came from each of three channels?", options: ["Scatter plot", "Stacked bar of one column", "Histogram", "Box plot"], a: 1, why: "Parts of a whole across a few categories reads well as one stacked bar, and it beats a pie for comparison." },
  { q: "Did the median delivery time differ across four warehouses?", options: ["Box plot", "Pie chart", "Area chart", "Word cloud"], a: 0, why: "A box plot compares medians and spread across groups in one view." },
];

export function WhichChart() {
  const ROUNDS = CHART_ROUNDS.length;
  const { record } = useScores();
  const [round, setRound] = useState(0);
  const [score, setScore] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const r = CHART_ROUNDS[Math.min(round, ROUNDS - 1)];

  const next = () => {
    const gained = picked === r.a ? 1 : 0;
    if (round + 1 >= ROUNDS) { record("which-chart", score + gained, ROUNDS); setScore((s) => s + gained); setRound(ROUNDS); }
    else { setScore((s) => s + gained); setRound((x) => x + 1); setPicked(null); }
  };

  if (round >= ROUNDS) return <Finished score={score} rounds={ROUNDS} onRestart={() => { setRound(0); setScore(0); setPicked(null); }} />;

  return (
    <Shell gameId="which-chart" round={round} rounds={ROUNDS} score={score}>
      <div className="rounded-md border border-border bg-card p-5">
        <p className="font-display text-[20px] font-bold leading-snug">{r.q}</p>
        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          {r.options.map((o, i) => (
            <button key={i} disabled={picked !== null} onClick={() => setPicked(i)}
              className={cn("rounded-md border px-3 py-2.5 text-left text-[14px] transition-colors",
                picked === null && "border-border hover:border-primary/60",
                picked !== null && i === r.a && "border-mint/70 bg-mint/10",
                picked !== null && i === picked && i !== r.a && "border-destructive/70 bg-destructive/10",
                picked !== null && i !== r.a && i !== picked && "border-border opacity-60")}>
              {o}
            </button>
          ))}
        </div>
        {picked !== null && (
          <>
            <p className="mt-4 rounded-md border border-border bg-muted/40 p-3 text-[13.5px]">{r.why}</p>
            <button onClick={next} className="mt-3 w-full rounded-md border border-border py-2.5 text-[14px] font-semibold hover:border-primary/60">
              {round + 1 >= ROUNDS ? "See final score" : "Next question"}
            </button>
          </>
        )}
      </div>
    </Shell>
  );
}

export function ConceptQuiz() {
  const set = useMemo(() => pickManyDaily(QUESTIONS, "quiz", 8, String(Math.floor(Date.now() / 60000))), []);
  const ROUNDS = set.length;
  const { record } = useScores();
  const [round, setRound] = useState(0);
  const [score, setScore] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const q = set[Math.min(round, ROUNDS - 1)];

  const next = () => {
    const gained = picked === q.answerIndex ? 1 : 0;
    if (round + 1 >= ROUNDS) { record("quiz", score + gained, ROUNDS); setScore((s) => s + gained); setRound(ROUNDS); }
    else { setScore((s) => s + gained); setRound((x) => x + 1); setPicked(null); }
  };

  if (round >= ROUNDS) return <Finished score={score} rounds={ROUNDS} onRestart={() => { setRound(0); setScore(0); setPicked(null); }} />;

  return (
    <Shell gameId="quiz" round={round} rounds={ROUNDS} score={score}>
      <div className="rounded-md border border-border bg-card p-5">
        <span className="label-xs">{q.category} · {q.difficulty}</span>
        <p className="mt-2 font-display text-[19px] font-bold leading-snug">{q.prompt}</p>
        {q.code && <pre className="mt-3 overflow-x-auto rounded-md border border-border bg-muted/50 p-3 font-mono text-[12.5px]"><code>{q.code}</code></pre>}
        <div className="mt-4 grid gap-2">
          {q.options.map((o, i) => (
            <button key={i} disabled={picked !== null} onClick={() => setPicked(i)}
              className={cn("rounded-md border px-3 py-2.5 text-left text-[14px] transition-colors",
                picked === null && "border-border hover:border-primary/60",
                picked !== null && i === q.answerIndex && "border-mint/70 bg-mint/10",
                picked !== null && i === picked && i !== q.answerIndex && "border-destructive/70 bg-destructive/10")}>
              {o}
            </button>
          ))}
        </div>
        {picked !== null && (
          <>
            <p className="mt-4 rounded-md border border-border bg-muted/40 p-3 text-[13.5px]">{q.explanation}</p>
            <button onClick={next} className="mt-3 w-full rounded-md border border-border py-2.5 text-[14px] font-semibold hover:border-primary/60">
              {round + 1 >= ROUNDS ? "See final score" : "Next question"}
            </button>
          </>
        )}
      </div>
    </Shell>
  );
}

export const GAME_COMPONENTS: Record<string, () => JSX.Element> = {
  "guess-correlation": GuessCorrelation,
  "spot-outlier": SpotOutlier,
  "which-chart": WhichChart,
  quiz: ConceptQuiz,
};
