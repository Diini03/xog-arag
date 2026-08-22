import { Link } from "react-router-dom";
import { LogoMark } from "@/components/common/Logo";

const ECOSYSTEM = [
  { name: "LearnData", detail: "Learn Python, SQL, Excel, Power BI, ML", url: "https://github.com/Diini03" },
  { name: "NadiifiData", detail: "Clean and prepare datasets", url: "https://nadiifi-data.vercel.app" },
  { name: "ChartWorld", detail: "Explore and build visualisations", url: "https://github.com/Diini03" },
];

const CREATOR = [
  { name: "GitHub", url: "https://github.com/Diini03" },
  { name: "Portfolio", url: "https://www.diinikahiye.online/" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/diinikahiye/" },
];

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border">
      <div className="mx-auto grid max-w-[1320px] gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2">
            <LogoMark size={24} />
            <span className="font-display text-[15px] font-bold">XogArag</span>
          </div>
          <p className="mt-3 max-w-sm text-[13.5px] leading-relaxed text-muted-foreground">
            A curiosity engine for data, AI and technology. Read a tip, try a lab, lose a game,
            leave knowing one specific thing you did not know before.
          </p>
          <p className="mt-3 max-w-sm text-[13.5px] leading-relaxed text-muted-foreground">
            A portfolio project built by Diini Kahiye to sharpen his own skills — every day it hands
            him a fresh set of questions, a tip, a reminder and a small task, and the practice keeps
            the fundamentals of data, ML and AI in working order.
          </p>
        </div>

        <div>
          <div className="label-xs">Ecosystem</div>
          <ul className="mt-3 space-y-2.5">
            {ECOSYSTEM.map((p) => (
              <li key={p.name}>
                <a href={p.url} target="_blank" rel="noreferrer noopener" className="group block">
                  <span className="text-[13.5px] font-medium group-hover:text-primary">{p.name}</span>
                  <span className="block text-[12px] text-muted-foreground">{p.detail}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="label-xs">Creator</div>
          <ul className="mt-3 space-y-2">
            {CREATOR.map((c) => (
              <li key={c.name}>
                <a href={c.url} target="_blank" rel="noreferrer noopener" className="text-[13.5px] text-muted-foreground hover:text-primary">
                  {c.name}
                </a>
              </li>
            ))}
          </ul>
          <ul className="mt-5 space-y-2">
            <li><Link to="/about" className="text-[13.5px] text-muted-foreground hover:text-primary">About &amp; sources</Link></li>
            <li><Link to="/saved" className="text-[13.5px] text-muted-foreground hover:text-primary">Saved on this device</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/70">
        <div className="mx-auto flex max-w-[1320px] flex-wrap items-center justify-between gap-2 px-4 py-4 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground sm:px-6">
          <span>XogArag — discover, play, experiment</span>
          <span>Sources shown. Nothing invented.</span>
        </div>
      </div>
    </footer>
  );
}
