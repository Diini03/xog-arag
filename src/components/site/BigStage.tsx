import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, Pause, Play } from "lucide-react";

export interface StageItem {
  id: string;
  text: string;
  meta?: string;
}

interface BigStageProps {
  label: string;
  items: StageItem[];
  tone: string;
  /** ms per slide */
  interval?: number;
  size?: "xl" | "lg" | "md";
}

const SIZES = {
  xl: "text-[clamp(2.2rem,7vw,5.5rem)] leading-[0.98]",
  lg: "text-[clamp(1.9rem,5.2vw,4rem)] leading-[1.02]",
  md: "text-[clamp(1.5rem,3.4vw,2.6rem)] leading-[1.14]",
};

export function BigStage({ label, items, tone, interval = 7000, size = "xl" }: BigStageProps) {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [phase, setPhase] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  const go = useCallback(
    (dir: number) => {
      setIndex((i) => (i + dir + items.length) % items.length);
      setPhase((p) => p + 1);
    },
    [items.length],
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.intersectionRatio > 0.5), {
      threshold: [0, 0.5, 1],
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!playing || !visible) return;
    const t = window.setInterval(() => go(1), interval);
    return () => window.clearInterval(t);
  }, [playing, visible, interval, go, index]);

  const item = items[index];

  return (
    <section
      ref={ref}
      className="relative flex min-h-dvh snap-start snap-always flex-col justify-center px-6 py-20 sm:px-10"
      style={{ ["--tone" as string]: tone }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{ background: `radial-gradient(70% 55% at 50% 40%, hsl(${tone} / 0.16), transparent 70%)` }}
      />

      <div className="relative mx-auto w-full max-w-[1180px]">
        <div
          className="font-mono text-[11px] uppercase tracking-[0.32em]"
          style={{ color: `hsl(${tone})` }}
        >
          {label}
        </div>

        <div key={`${item.id}-${phase}`} className="mt-8 animate-rise">
          <p className={`font-display font-extrabold text-balance ${SIZES[size]}`}>{item.text}</p>
          {item.meta && (
            <p className="mt-8 font-mono text-[12px] uppercase tracking-[0.22em] text-muted-foreground">
              {item.meta}
            </p>
          )}
        </div>

        <div className="mt-14 flex items-center gap-4">
          <button
            onClick={() => go(1)}
            className="group inline-flex h-14 items-center gap-3 rounded-full px-7 text-[15px] font-semibold transition-transform hover:scale-[1.03]"
            style={{ background: `hsl(${tone})`, color: "hsl(var(--background))" }}
          >
            Next
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          <button
            onClick={() => setPlaying((p) => !p)}
            className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:text-foreground"
            aria-label={playing ? "Pause auto-scroll" : "Resume auto-scroll"}
          >
            {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </button>
          <span className="ml-2 font-mono text-[12px] text-muted-foreground">
            {String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
          </span>
        </div>

        <div className="mt-8 flex gap-1.5">
          {items.map((it, i) => (
            <button
              key={it.id}
              aria-label={`Go to ${i + 1}`}
              onClick={() => {
                setIndex(i);
                setPhase((p) => p + 1);
              }}
              className="h-[3px] flex-1 rounded-full transition-colors"
              style={{ background: i === index ? `hsl(${tone})` : "hsl(var(--border))" }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
