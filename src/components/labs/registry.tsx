import { useMemo, useState } from "react";
import { Plot, Slider, Stat, gauss, pearson, Pt } from "@/components/labs/plot";
import { seededRandom } from "@/lib/daily";

function useSeries(n: number, seed: number, build: (rand: () => number, i: number) => Pt) {
  return useMemo(() => {
    const rand = seededRandom(seed);
    return Array.from({ length: n }, (_, i) => build(rand, i));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [n, seed, build]);
}

function Controls({ children }: { children: React.ReactNode }) {
  return <div className="grid gap-4 rounded-md border border-border bg-card p-4">{children}</div>;
}

export function CorrelationLab() {
  const [n, setN] = useState(120);
  const [r, setR] = useState(0.7);
  const [noise, setNoise] = useState(0.4);
  const [seed, setSeed] = useState(7);

  const pts = useMemo(() => {
    const rand = seededRandom(seed);
    return Array.from({ length: n }, () => {
      const x = gauss(rand);
      const y = r * x + Math.sqrt(Math.max(0, 1 - r * r)) * gauss(rand) * (0.4 + noise);
      return { x, y };
    });
  }, [n, r, noise, seed]);

  const observed = pearson(pts);
  return (
    <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr]">
      <Plot title="Scatter plot of two simulated variables" xDomain={[-3.5, 3.5]} yDomain={[-3.5, 3.5]} xLabel="variable x" yLabel="variable y">
        {({ sx, sy }) => (
          <g>
            {pts.map((p, i) => (
              <circle key={i} cx={sx(p.x)} cy={sy(p.y)} r="3" fill="hsl(var(--data))" fillOpacity="0.65" />
            ))}
          </g>
        )}
      </Plot>
      <div className="space-y-4">
        <Controls>
          <Slider label="Target correlation" value={r} min={-1} max={1} step={0.05} onChange={setR} format={(v) => v.toFixed(2)} />
          <Slider label="Extra noise" value={noise} min={0} max={1.5} step={0.05} onChange={setNoise} format={(v) => v.toFixed(2)} />
          <Slider label="Sample size" value={n} min={10} max={500} step={10} onChange={setN} />
          <button onClick={() => setSeed((s) => s + 1)} className="rounded-md border border-border py-2 font-mono text-[11px] uppercase tracking-[0.14em] hover:border-primary/60">
            Redraw sample
          </button>
        </Controls>
        <div className="grid grid-cols-2 gap-3">
          <Stat label="Observed r" value={observed.toFixed(3)} tone="hsl(var(--data))" />
          <Stat label="r² (shared variance)" value={`${(observed * observed * 100).toFixed(1)}%`} />
        </div>
        <p className="text-[13.5px] leading-relaxed text-muted-foreground">
          With a small sample the observed correlation wanders far from the target. Drop the sample size to 20 and redraw
          a few times: the same underlying relationship produces very different values of r.
        </p>
      </div>
    </div>
  );
}

export function RegressionLab() {
  const [slope, setSlope] = useState(1.4);
  const [intercept, setIntercept] = useState(2);
  const [noise, setNoise] = useState(2);
  const [n, setN] = useState(60);
  const [seed, setSeed] = useState(3);

  const pts = useSeries(n, seed * 1000 + n, (rand) => {
    const x = rand() * 10;
    return { x, y: intercept + slope * x + gauss(rand) * noise };
  });

  const fit = useMemo(() => {
    const mx = pts.reduce((s, p) => s + p.x, 0) / pts.length;
    const my = pts.reduce((s, p) => s + p.y, 0) / pts.length;
    let num = 0, den = 0;
    for (const p of pts) { num += (p.x - mx) * (p.y - my); den += (p.x - mx) ** 2; }
    const b = den === 0 ? 0 : num / den;
    const a = my - b * mx;
    const ssTot = pts.reduce((s, p) => s + (p.y - my) ** 2, 0);
    const ssRes = pts.reduce((s, p) => s + (p.y - (a + b * p.x)) ** 2, 0);
    return { a, b, r2: ssTot === 0 ? 0 : 1 - ssRes / ssTot };
  }, [pts]);

  const yMax = 30, yMin = -10;
  return (
    <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr]">
      <Plot title="Least squares fit through simulated points" xDomain={[0, 10]} yDomain={[yMin, yMax]} xLabel="x" yLabel="y">
        {({ sx, sy }) => (
          <g>
            {pts.map((p, i) => <circle key={i} cx={sx(p.x)} cy={sy(p.y)} r="3.2" fill="hsl(var(--mint))" fillOpacity="0.6" />)}
            <line x1={sx(0)} y1={sy(fit.a)} x2={sx(10)} y2={sy(fit.a + fit.b * 10)} stroke="hsl(var(--primary))" strokeWidth="2.5" />
          </g>
        )}
      </Plot>
      <div className="space-y-4">
        <Controls>
          <Slider label="True slope" value={slope} min={-3} max={3} step={0.1} onChange={setSlope} format={(v) => v.toFixed(1)} />
          <Slider label="True intercept" value={intercept} min={-5} max={10} step={0.5} onChange={setIntercept} />
          <Slider label="Noise (σ)" value={noise} min={0} max={8} step={0.25} onChange={setNoise} format={(v) => v.toFixed(2)} />
          <Slider label="Sample size" value={n} min={10} max={300} step={10} onChange={setN} />
          <button onClick={() => setSeed((s) => s + 1)} className="rounded-md border border-border py-2 font-mono text-[11px] uppercase tracking-[0.14em] hover:border-primary/60">
            Redraw sample
          </button>
        </Controls>
        <div className="grid grid-cols-2 gap-3">
          <Stat label="Fitted equation" value={`y = ${fit.a.toFixed(2)} + ${fit.b.toFixed(2)}x`} tone="hsl(var(--primary))" />
          <Stat label="R²" value={fit.r2.toFixed(3)} />
        </div>
        <p className="text-[13.5px] leading-relaxed text-muted-foreground">
          R² falls as noise grows even though the slope stays the same. A low R² does not mean the relationship is absent —
          it means the relationship explains little of the variation.
        </p>
      </div>
    </div>
  );
}

function normalPdf(x: number, mu: number, sd: number) {
  return Math.exp(-((x - mu) ** 2) / (2 * sd * sd)) / (sd * Math.sqrt(2 * Math.PI));
}
function normalCdf(x: number, mu: number, sd: number) {
  const z = (x - mu) / (sd * Math.SQRT2);
  const t = 1 / (1 + 0.3275911 * Math.abs(z));
  const y = 1 - ((((1.061405429 * t - 1.453152027) * t + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t * Math.exp(-z * z);
  return 0.5 * (1 + (z >= 0 ? y : -y));
}

export function DistributionLab() {
  const [mu, setMu] = useState(0);
  const [sd, setSd] = useState(1);
  const [lo, setLo] = useState(-1);
  const [hi, setHi] = useState(1);

  const curve = useMemo(() => Array.from({ length: 121 }, (_, i) => {
    const x = -6 + (i * 12) / 120;
    return { x, y: normalPdf(x, mu, sd) };
  }), [mu, sd]);
  const area = Math.max(0, normalCdf(Math.max(lo, hi), mu, sd) - normalCdf(Math.min(lo, hi), mu, sd));

  return (
    <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr]">
      <Plot title="Normal distribution with a shaded interval" xDomain={[-6, 6]} yDomain={[0, 0.85]} xLabel="value" yLabel="density">
        {({ sx, sy }) => (
          <g>
            <path
              d={`M ${sx(Math.min(lo, hi))} ${sy(0)} ${curve.filter((p) => p.x >= Math.min(lo, hi) && p.x <= Math.max(lo, hi)).map((p) => `L ${sx(p.x)} ${sy(p.y)}`).join(" ")} L ${sx(Math.max(lo, hi))} ${sy(0)} Z`}
              fill="hsl(var(--primary))" fillOpacity="0.25"
            />
            <path d={curve.map((p, i) => `${i === 0 ? "M" : "L"} ${sx(p.x)} ${sy(p.y)}`).join(" ")} fill="none" stroke="hsl(var(--ai))" strokeWidth="2.5" />
          </g>
        )}
      </Plot>
      <div className="space-y-4">
        <Controls>
          <Slider label="Mean (μ)" value={mu} min={-3} max={3} step={0.1} onChange={setMu} format={(v) => v.toFixed(1)} />
          <Slider label="Standard deviation (σ)" value={sd} min={0.3} max={3} step={0.1} onChange={setSd} format={(v) => v.toFixed(1)} />
          <Slider label="Interval start" value={lo} min={-6} max={6} step={0.1} onChange={setLo} format={(v) => v.toFixed(1)} />
          <Slider label="Interval end" value={hi} min={-6} max={6} step={0.1} onChange={setHi} format={(v) => v.toFixed(1)} />
        </Controls>
        <div className="grid grid-cols-2 gap-3">
          <Stat label="Area in interval" value={`${(area * 100).toFixed(1)}%`} tone="hsl(var(--primary))" />
          <Stat label="Interval width in σ" value={`${(Math.abs(hi - lo) / sd).toFixed(2)}σ`} />
        </div>
        <p className="text-[13.5px] leading-relaxed text-muted-foreground">
          Set the interval to μ ± 1σ and the area lands near 68%. Widen it to ±2σ and it reaches about 95% — the origin of
          the interval widths quoted in most reports.
        </p>
      </div>
    </div>
  );
}

export function OutlierLab() {
  const [n, setN] = useState(60);
  const [contamination, setContamination] = useState(3);
  const [zThreshold, setZThreshold] = useState(3);
  const [seed, setSeed] = useState(5);

  const values = useMemo(() => {
    const rand = seededRandom(seed * 31 + n);
    const base = Array.from({ length: n }, () => 50 + gauss(rand) * 8);
    for (let i = 0; i < contamination; i++) base[Math.floor(rand() * n)] = 50 + (rand() > 0.5 ? 1 : -1) * (35 + rand() * 40);
    return base;
  }, [n, contamination, seed]);

  const stats = useMemo(() => {
    const sorted = [...values].sort((a, b) => a - b);
    const q = (p: number) => sorted[Math.min(sorted.length - 1, Math.floor(p * (sorted.length - 1)))];
    const q1 = q(0.25), q3 = q(0.75), iqr = q3 - q1;
    const mean = values.reduce((s, v) => s + v, 0) / values.length;
    const sd = Math.sqrt(values.reduce((s, v) => s + (v - mean) ** 2, 0) / values.length) || 1;
    return { q1, q3, iqr, mean, sd, lo: q1 - 1.5 * iqr, hi: q3 + 1.5 * iqr };
  }, [values]);

  const flags = values.map((v) => ({
    v,
    z: Math.abs((v - stats.mean) / stats.sd) > zThreshold,
    iqr: v < stats.lo || v > stats.hi,
  }));
  const zCount = flags.filter((f) => f.z).length;
  const iqrCount = flags.filter((f) => f.iqr).length;

  return (
    <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr]">
      <Plot title="Values flagged by z-score and IQR rules" xDomain={[0, values.length]} yDomain={[-40, 140]} xLabel="row index" yLabel="value">
        {({ sx, sy }) => (
          <g>
            <line x1={sx(0)} x2={sx(values.length)} y1={sy(stats.hi)} y2={sy(stats.hi)} stroke="hsl(var(--mint))" strokeDasharray="4 4" />
            <line x1={sx(0)} x2={sx(values.length)} y1={sy(stats.lo)} y2={sy(stats.lo)} stroke="hsl(var(--mint))" strokeDasharray="4 4" />
            {flags.map((f, i) => (
              <circle
                key={i} cx={sx(i)} cy={sy(f.v)} r={f.z || f.iqr ? 4.5 : 3}
                fill={f.z && f.iqr ? "hsl(var(--destructive))" : f.iqr ? "hsl(var(--mint))" : f.z ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))"}
                fillOpacity={f.z || f.iqr ? 0.95 : 0.5}
              />
            ))}
          </g>
        )}
      </Plot>
      <div className="space-y-4">
        <Controls>
          <Slider label="Rows" value={n} min={20} max={200} step={10} onChange={setN} />
          <Slider label="Injected extreme values" value={contamination} min={0} max={12} onChange={setContamination} />
          <Slider label="z-score threshold" value={zThreshold} min={1.5} max={5} step={0.1} onChange={setZThreshold} format={(v) => v.toFixed(1)} />
          <button onClick={() => setSeed((s) => s + 1)} className="rounded-md border border-border py-2 font-mono text-[11px] uppercase tracking-[0.14em] hover:border-primary/60">
            Redraw sample
          </button>
        </Controls>
        <div className="grid grid-cols-2 gap-3">
          <Stat label="Flagged by z-score" value={String(zCount)} tone="hsl(var(--primary))" />
          <Stat label="Flagged by IQR" value={String(iqrCount)} tone="hsl(var(--mint))" />
        </div>
        <p className="text-[13.5px] leading-relaxed text-muted-foreground">
          The z-score rule uses the mean and standard deviation, which the outliers themselves inflate — so extreme points
          can hide their own effect. The IQR rule is built on quartiles and is far less sensitive to them.
        </p>
      </div>
    </div>
  );
}

export function ConfusionLab() {
  const [threshold, setThreshold] = useState(0.5);
  const [positives, setPositives] = useState(200);
  const [negatives, setNegatives] = useState(800);
  const [separation, setSeparation] = useState(1.6);

  const { tp, fp, fn, tn } = useMemo(() => {
    const posAbove = 1 - normalCdf(threshold, 0.5 + separation * 0.15, 0.18);
    const negAbove = 1 - normalCdf(threshold, 0.5 - separation * 0.15, 0.18);
    const tp = Math.round(positives * posAbove);
    const fp = Math.round(negatives * negAbove);
    return { tp, fp, fn: positives - tp, tn: negatives - fp };
  }, [threshold, positives, negatives, separation]);

  const precision = tp + fp === 0 ? 0 : tp / (tp + fp);
  const recall = tp + fn === 0 ? 0 : tp / (tp + fn);
  const f1 = precision + recall === 0 ? 0 : (2 * precision * recall) / (precision + recall);

  const cell = (label: string, value: number, tone: string) => (
    <div className="rounded-md border border-border p-3" style={{ background: `color-mix(in srgb, ${tone} 12%, transparent)` }}>
      <div className="label-xs">{label}</div>
      <div className="font-display text-[24px] font-bold tabular-nums" style={{ color: tone }}>{value}</div>
    </div>
  );

  return (
    <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr]">
      <div className="space-y-3">
        <div className="grid grid-cols-2 gap-3">
          {cell("True positives", tp, "hsl(var(--mint))")}
          {cell("False positives", fp, "hsl(var(--primary))")}
          {cell("False negatives", fn, "hsl(var(--destructive))")}
          {cell("True negatives", tn, "hsl(var(--muted-foreground))")}
        </div>
        <div className="grid grid-cols-3 gap-3">
          <Stat label="Precision" value={precision.toFixed(3)} tone="hsl(var(--primary))" />
          <Stat label="Recall" value={recall.toFixed(3)} tone="hsl(var(--mint))" />
          <Stat label="F1" value={f1.toFixed(3)} />
        </div>
      </div>
      <div className="space-y-4">
        <Controls>
          <Slider label="Decision threshold" value={threshold} min={0.05} max={0.95} step={0.01} onChange={setThreshold} format={(v) => v.toFixed(2)} />
          <Slider label="Class separation" value={separation} min={0.2} max={3} step={0.1} onChange={setSeparation} format={(v) => v.toFixed(1)} />
          <Slider label="Actual positives" value={positives} min={20} max={1000} step={20} onChange={setPositives} />
          <Slider label="Actual negatives" value={negatives} min={20} max={2000} step={20} onChange={setNegatives} />
        </Controls>
        <p className="text-[13.5px] leading-relaxed text-muted-foreground">
          Lower the threshold and recall rises while precision falls; raise it and the reverse happens. Set positives to 20
          against 2000 negatives to see how a rare class makes precision collapse even for a good model. These are simulated
          counts for teaching the trade-off, not a trained classifier.
        </p>
      </div>
    </div>
  );
}

export const LAB_COMPONENTS: Record<string, () => JSX.Element> = {
  correlation: CorrelationLab,
  regression: RegressionLab,
  distribution: DistributionLab,
  outliers: OutlierLab,
  confusion: ConfusionLab,
};
