import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Flame, RotateCcw, Sparkles } from "lucide-react";
import { Layout, PageIntro } from "@/components/site/Layout";
import { Panel } from "@/components/site/cards";
import { CATEGORY_LABEL, Category, Question } from "@/lib/content/types";
import { QUESTIONS } from "@/lib/content/questions";
import { briefQuestions, useDailyBrief } from "@/lib/ai/daily-brief";
import { pickManyDaily, todayKey } from "@/lib/daily";
import { useLocalState } from "@/lib/local";
import { cn } from "@/lib/utils";

interface StreakState {
  lastDay: string | null;
  streak: number;
  answered: number;
  correct: number;
}

const EMPTY: StreakState = { lastDay: null, streak: 0, answered: 0, correct: 0 };

function yesterdayKey() {
  const d = new Date();
  d.setUTCDate(d.getUTCDate() - 1);
  return todayKey(d);
}

export default function Practice() {
  const { data, isLoading } = useDailyBrief();
  const [filter, setFilter] = useState<Category | "all">("all");
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [session, setSession] = useState({ right: 0, done: 0 });
  const [stats, setStats] = useLocalState<StreakState>("practice-stats", EMPTY);

  const pool = useMemo<Question[]>(() => {
    const ai = briefQuestions(data);
    const curated = pickManyDaily(QUESTIONS, "practice", 7);
    const all = [...ai, ...curated];
    return filter === "all" ? all : all.filter((q) => q.category === filter);
  }, [data, filter]);

  const categories = useMemo(() => {
    const set = new Set<Category>();
    [...briefQuestions(data), ...QUESTIONS].forEach((q) => set.add(q.category));
    return [...set];
  }, [data]);

  const question = pool[index % Math.max(pool.length, 1)];

  function answer(i: number) {
    if (picked !== null || !question) return;
    const right = i === question.answerIndex;
    setPicked(i);
    setSession((s) => ({ right: s.right + (right ? 1 : 0), done: s.done + 1 }));
    setStats((prev) => {
      const day = todayKey();
      const continued = prev.lastDay === day ? prev.streak : prev.lastDay === yesterdayKey() ? prev.streak + 1 : 1;
      return {
        lastDay: day,
        streak: Math.max(continued, 1),
        answered: prev.answered + 1,
        correct: prev.correct + (right ? 1 : 0),
      };
    });
  }

  function next() {
    setPicked(null);
    setIndex((i) => (i + 1) % Math.max(pool.length, 1));
  }

  const accuracy = stats.answered ? Math.round((stats.correct / stats.answered) * 100) : 0;

  return (
    <Layout>
      <PageIntro
        kicker="The lab"
        title="Practice"
        lede="A short daily rep. Three questions written fresh by AI each morning, mixed with curated ones from the library. Answer, read why, keep the streak."
      />

      <div className="grid gap-5 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <Panel tone="hsl(var(--primary))">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-primary">
                Question {String(index + 1).padStart(2, "0")}
              </span>
              {question?.id.startsWith("ai-") && (
                <span className="inline-flex items-center gap-1 font-mono text-[10.5px] uppercase tracking-[0.18em] text-ai">
                  <Sparkles className="h-3 w-3" /> written today
                </span>
              )}
              {question && <span className="label-xs">· {CATEGORY_LABEL[question.category]} · {question.difficulty}</span>}
            </div>

            {isLoading && !question ? (
              <div className="mt-6 space-y-3">
                <div className="h-6 w-3/4 animate-pulse rounded bg-muted" />
                <div className="h-10 w-full animate-pulse rounded bg-muted" />
                <div className="h-10 w-full animate-pulse rounded bg-muted" />
              </div>
            ) : question ? (
              <>
                <h2 className="mt-4 font-display text-[clamp(1.15rem,2.4vw,1.6rem)] font-bold leading-snug">
                  {question.prompt}
                </h2>
                {question.code && (
                  <pre className="mt-3 overflow-x-auto rounded-md border border-border bg-muted/50 p-3 font-mono text-[12.5px] leading-relaxed">
                    <code>{question.code}</code>
                  </pre>
                )}
                <div className="mt-5 grid gap-2">
                  {question.options.map((o, i) => {
                    const state =
                      picked === null ? "idle" : i === question.answerIndex ? "right" : i === picked ? "wrong" : "idle";
                    return (
                      <button
                        key={i}
                        disabled={picked !== null}
                        onClick={() => answer(i)}
                        className={cn(
                          "rounded-md border px-3.5 py-3 text-left text-[14.5px] transition-colors disabled:cursor-default",
                          state === "idle" && "border-border hover:border-primary/60",
                          state === "right" && "border-mint/70 bg-mint/10",
                          state === "wrong" && "border-destructive/70 bg-destructive/10",
                        )}
                      >
                        <span className="font-mono text-[11px] text-muted-foreground">{String.fromCharCode(65 + i)}</span>
                        <span className="ml-2.5">{o}</span>
                      </button>
                    );
                  })}
                </div>
                {picked !== null && (
                  <div className="mt-5 rounded-md border border-border bg-muted/40 p-4 text-[14px] leading-relaxed">
                    <span className="font-semibold">
                      {picked === question.answerIndex ? "Correct. " : "Not quite. "}
                    </span>
                    {question.explanation}
                    <div className="mt-4">
                      <button
                        onClick={next}
                        className="rounded-full bg-primary px-5 py-2 text-[14px] font-semibold text-primary-foreground"
                      >
                        Next question →
                      </button>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <p className="mt-4 text-[14.5px] text-muted-foreground">No questions in this filter yet.</p>
            )}
          </Panel>
        </div>

        <div className="grid gap-5 lg:col-span-4">
          <Panel tone="hsl(var(--mint))">
            <div className="label-xs">Your reps</div>
            <div className="mt-4 grid grid-cols-3 gap-3 text-center">
              <div>
                <div className="flex items-center justify-center gap-1 font-display text-[26px] font-extrabold">
                  <Flame className="h-4 w-4 text-mint" />
                  {stats.streak}
                </div>
                <div className="label-xs mt-1">day streak</div>
              </div>
              <div>
                <div className="font-display text-[26px] font-extrabold">{stats.answered}</div>
                <div className="label-xs mt-1">answered</div>
              </div>
              <div>
                <div className="font-display text-[26px] font-extrabold">{accuracy}%</div>
                <div className="label-xs mt-1">accuracy</div>
              </div>
            </div>
            <p className="mt-4 text-[13px] text-muted-foreground">
              This session: {session.right}/{session.done} correct. Progress is stored in this browser only.
            </p>
            <button
              onClick={() => setStats(EMPTY)}
              className="mt-3 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground hover:text-foreground"
            >
              <RotateCcw className="h-3 w-3" /> Reset
            </button>
          </Panel>

          <Panel>
            <div className="label-xs">Filter by topic</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {(["all", ...categories] as (Category | "all")[]).map((c) => (
                <button
                  key={c}
                  onClick={() => {
                    setFilter(c);
                    setIndex(0);
                    setPicked(null);
                  }}
                  className={cn(
                    "rounded-full border px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] transition-colors",
                    filter === c ? "border-primary text-primary" : "border-border text-muted-foreground hover:text-foreground",
                  )}
                >
                  {c === "all" ? "Everything" : CATEGORY_LABEL[c]}
                </button>
              ))}
            </div>
            <p className="mt-4 text-[13px] leading-relaxed text-muted-foreground">
              Want the interactive side? Try the{" "}
              <Link to="/labs" className="text-primary underline decoration-dotted underline-offset-4">labs</Link> or a{" "}
              <Link to="/games" className="text-primary underline decoration-dotted underline-offset-4">game</Link>.
            </p>
          </Panel>
        </div>
      </div>
    </Layout>
  );
}
