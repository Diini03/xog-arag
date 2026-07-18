import { ProjectElement } from "@/lib/projects/types";
import { ArrowUpRight, ArrowDownRight, Minus } from "lucide-react";

export function ElementView({ el }: { el: ProjectElement }) {
  switch (el.type) {
    case "heading": {
      const { text, level, align, color } = el.props;
      const sizes = { 1: 56, 2: 36, 3: 24 } as const;
      return (
        <div
          className="w-full h-full flex items-center font-semibold leading-tight"
          style={{ fontSize: sizes[level], textAlign: align, color: color ?? "inherit", letterSpacing: "-0.02em", justifyContent: align === "center" ? "center" : align === "right" ? "flex-end" : "flex-start" }}
        >
          <span style={{ display: "block", width: "100%" }}>{text}</span>
        </div>
      );
    }
    case "text": {
      const { text, size, align, color } = el.props;
      return (
        <div
          className="w-full h-full whitespace-pre-wrap leading-relaxed"
          style={{ fontSize: size, textAlign: align, color: color ?? "inherit" }}
        >
          {text}
        </div>
      );
    }
    case "image": {
      const { src, fit, radius } = el.props;
      return (
        <div className="w-full h-full overflow-hidden bg-muted" style={{ borderRadius: radius }}>
          {src ? (
            <img src={src} alt="" className="w-full h-full" style={{ objectFit: fit }} draggable={false} />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-xs text-muted-foreground">
              Image
            </div>
          )}
        </div>
      );
    }
    case "shape": {
      const { shape, fill, radius } = el.props;
      return (
        <div
          className="w-full h-full"
          style={{ background: fill, borderRadius: shape === "circle" ? "9999px" : radius }}
        />
      );
    }
    case "divider": {
      const { color, thickness } = el.props;
      return <div className="w-full h-full flex items-center"><div className="w-full" style={{ height: thickness, background: color }} /></div>;
    }
    case "kpi": {
      const { label, value, delta, trend, accent } = el.props;
      const TrendIcon = trend === "up" ? ArrowUpRight : trend === "down" ? ArrowDownRight : Minus;
      const trendColor = trend === "up" ? "#10B981" : trend === "down" ? "#EF4444" : "#64748B";
      return (
        <div className="w-full h-full rounded-xl border p-5 flex flex-col justify-between bg-card" style={{ borderColor: "rgba(15,23,42,0.08)" }}>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: accent ?? "#2563EB" }} />
            <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">{label}</span>
          </div>
          <div className="text-4xl font-semibold tabular-nums leading-none" style={{ color: "#0F172A" }}>{value}</div>
          {delta && (
            <div className="inline-flex items-center gap-1 text-xs font-medium" style={{ color: trendColor }}>
              <TrendIcon className="h-3.5 w-3.5" />
              <span className="tabular-nums">{delta}</span>
            </div>
          )}
        </div>
      );
    }
    case "chart": {
      const { title, src, kind } = el.props;
      if (src) {
        return <img src={src} alt={title ?? "chart"} className="w-full h-full object-contain" draggable={false} />;
      }
      return (
        <div className="w-full h-full rounded-xl border bg-card p-4 flex flex-col gap-3" style={{ borderColor: "rgba(15,23,42,0.08)" }}>
          {title && <div className="text-sm font-medium text-foreground">{title}</div>}
          <ChartPlaceholder kind={kind} />
        </div>
      );
    }
    default:
      return null;
  }
}

function ChartPlaceholder({ kind }: { kind: "bar" | "line" | "pie" | "placeholder" }) {
  if (kind === "pie") {
    return (
      <svg viewBox="0 0 100 100" className="flex-1 w-full h-full">
        <circle cx="50" cy="50" r="40" fill="#DBEAFE" />
        <path d="M50 50 L50 10 A40 40 0 0 1 88 62 Z" fill="#2563EB" />
        <path d="M50 50 L88 62 A40 40 0 0 1 30 84 Z" fill="#60A5FA" />
      </svg>
    );
  }
  if (kind === "line") {
    return (
      <svg viewBox="0 0 300 120" className="flex-1 w-full h-full" preserveAspectRatio="none">
        <polyline points="0,90 40,70 80,80 120,55 160,60 200,35 240,45 300,20" fill="none" stroke="#2563EB" strokeWidth="2.5" />
        <polyline points="0,90 40,70 80,80 120,55 160,60 200,35 240,45 300,20 300,120 0,120" fill="#2563EB" fillOpacity="0.08" stroke="none" />
      </svg>
    );
  }
  const bars = [40, 68, 55, 82, 48, 74, 60];
  return (
    <svg viewBox="0 0 300 120" className="flex-1 w-full h-full" preserveAspectRatio="none">
      {bars.map((b, i) => (
        <rect key={i} x={i * 42 + 6} y={120 - b} width="30" height={b} rx="4" fill={i % 2 === 0 ? "#2563EB" : "#93C5FD"} />
      ))}
    </svg>
  );
}
