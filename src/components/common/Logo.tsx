import { cn } from "@/lib/utils";

/** XogArag mark: three signal bars crossing a curiosity dot. */
export function LogoMark({ size = 28, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={cn("shrink-0", className)} aria-hidden="true">
      <rect x="0.75" y="0.75" width="30.5" height="30.5" rx="9" stroke="currentColor" strokeOpacity="0.22" strokeWidth="1.5" />
      <rect x="6" y="17" width="4" height="9" rx="2" fill="hsl(var(--mint))" />
      <rect x="14" y="11" width="4" height="15" rx="2" fill="hsl(var(--primary))" />
      <rect x="22" y="14" width="4" height="12" rx="2" fill="hsl(var(--accent))" />
      <circle cx="16" cy="7" r="3" fill="hsl(var(--primary))" />
      <circle cx="16" cy="7" r="6" stroke="hsl(var(--primary))" strokeOpacity="0.35" strokeWidth="1.2" />
    </svg>
  );
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("font-display text-[17px] font-extrabold tracking-tight", className)}>
      Xog<span className="text-primary">Arag</span>
    </span>
  );
}
