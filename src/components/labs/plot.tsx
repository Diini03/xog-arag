import { ReactNode } from "react";

export interface Pt { x: number; y: number }

export function scaleFactory(domain: [number, number], range: [number, number]) {
  const [d0, d1] = domain;
  const [r0, r1] = range;
  const span = d1 - d0 || 1;
  return (v: number) => r0 + ((v - d0) / span) * (r1 - r0);
}

export function Plot({
  width = 520,
  height = 340,
  xDomain,
  yDomain,
  xLabel,
  yLabel,
  children,
  title,
}: {
  width?: number;
  height?: number;
  xDomain: [number, number];
  yDomain: [number, number];
  xLabel?: string;
  yLabel?: string;
  title: string;
  children: (helpers: { sx: (v: number) => number; sy: (v: number) => number }) => ReactNode;
}) {
  const pad = { l: 44, r: 14, t: 14, b: 34 };
  const sx = scaleFactory(xDomain, [pad.l, width - pad.r]);
  const sy = scaleFactory(yDomain, [height - pad.b, pad.t]);
  const ticksX = 5, ticksY = 4;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="h-auto w-full select-none rounded-md border border-border bg-muted/20"
      role="img"
      aria-label={title}
    >
      {Array.from({ length: ticksY + 1 }, (_, i) => {
        const v = yDomain[0] + ((yDomain[1] - yDomain[0]) * i) / ticksY;
        return (
          <g key={`y${i}`}>
            <line x1={pad.l} x2={width - pad.r} y1={sy(v)} y2={sy(v)} stroke="hsl(var(--border))" strokeWidth="1" />
            <text x={pad.l - 8} y={sy(v) + 4} textAnchor="end" className="fill-muted-foreground font-mono" fontSize="10">
              {formatTick(v)}
            </text>
          </g>
        );
      })}
      {Array.from({ length: ticksX + 1 }, (_, i) => {
        const v = xDomain[0] + ((xDomain[1] - xDomain[0]) * i) / ticksX;
        return (
          <text key={`x${i}`} x={sx(v)} y={height - pad.b + 16} textAnchor="middle" className="fill-muted-foreground font-mono" fontSize="10">
            {formatTick(v)}
          </text>
        );
      })}
      {children({ sx, sy })}
      {xLabel && (
        <text x={(width + pad.l) / 2} y={height - 4} textAnchor="middle" className="fill-muted-foreground font-mono" fontSize="10">{xLabel}</text>
      )}
      {yLabel && (
        <text transform={`translate(11 ${height / 2}) rotate(-90)`} textAnchor="middle" className="fill-muted-foreground font-mono" fontSize="10">{yLabel}</text>
      )}
    </svg>
  );
}

function formatTick(v: number) {
  if (Math.abs(v) >= 1000) return `${Math.round(v / 100) / 10}k`;
  return Math.abs(v) < 1 ? v.toFixed(1) : Math.round(v * 10) / 10;
}

export function Slider({
  label, value, min, max, step = 1, onChange, format,
}: {
  label: string; value: number; min: number; max: number; step?: number;
  onChange: (v: number) => void; format?: (v: number) => string;
}) {
  const id = `s-${label.replace(/\s+/g, "-").toLowerCase()}`;
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <label htmlFor={id} className="label-xs">{label}</label>
        <span className="font-mono text-[12.5px] tabular-nums text-foreground">{format ? format(value) : value}</span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-2 h-1.5 w-full cursor-pointer appearance-none rounded-full bg-muted accent-primary"
      />
    </div>
  );
}

export function Stat({ label, value, tone }: { label: string; value: string; tone?: string }) {
  return (
    <div className="rounded-md border border-border bg-card px-3 py-2.5">
      <div className="label-xs">{label}</div>
      <div className="font-display text-[22px] font-bold tabular-nums" style={tone ? { color: tone } : undefined}>{value}</div>
    </div>
  );
}

/** Box–Muller standard normal from a uniform generator. */
export function gauss(rand: () => number) {
  let u = 0, v = 0;
  while (u === 0) u = rand();
  while (v === 0) v = rand();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}

export function pearson(pts: Pt[]) {
  const n = pts.length;
  if (n < 2) return 0;
  const mx = pts.reduce((s, p) => s + p.x, 0) / n;
  const my = pts.reduce((s, p) => s + p.y, 0) / n;
  let num = 0, dx = 0, dy = 0;
  for (const p of pts) {
    num += (p.x - mx) * (p.y - my);
    dx += (p.x - mx) ** 2;
    dy += (p.y - my) ** 2;
  }
  const den = Math.sqrt(dx * dy);
  return den === 0 ? 0 : num / den;
}
