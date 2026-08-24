import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/common/ThemeProvider";

const SECTIONS = [
  { to: "/", label: "log", index: "00" },
  { to: "/notes", label: "notes", index: "01" },
  { to: "/quotes", label: "quotes", index: "02" },
  { to: "/concerns", label: "concerns", index: "03" },
  { to: "/data-diary", label: "data diary", index: "04" },
  { to: "/about", label: "about", index: "05" },
  { to: "/archive", label: "archive", index: "06" },
];

function InkMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path
        d="M2 12c4-6 16-6 20 0-4 6-16 6-20 0Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <circle cx="12" cy="12" r="2.6" fill="currentColor" />
    </svg>
  );
}

function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const dark = theme === "dark";
  return (
    <button
      onClick={() => setTheme(dark ? "light" : "dark")}
      className="meta text-left transition-colors hover:text-foreground"
      aria-label={dark ? "Switch to paper" : "Switch to ink"}
    >
      {dark ? "paper" : "ink"}
    </button>
  );
}

export function Spine() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);

  const list = (
    <ul className="space-y-1.5">
      {SECTIONS.map((s) => (
        <li key={s.to}>
          <NavLink
            to={s.to}
            end={s.to === "/"}
            className={({ isActive }) =>
              cn(
                "group flex items-baseline gap-2 font-mono text-[11.5px] uppercase tracking-[0.16em] transition-colors",
                isActive ? "text-primary" : "text-muted-foreground hover:text-foreground",
              )
            }
          >
            <span className="text-[9.5px] opacity-50">{s.index}</span>
            <span>{s.label}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      {/* Desktop spine — the notebook binding */}
      <aside className="fixed left-0 top-0 z-30 hidden h-dvh w-[210px] flex-col justify-between border-r border-rule px-7 py-8 lg:flex">
        <div>
          <Link to="/" className="flex items-center gap-2 text-foreground">
            <InkMark />
            <span className="font-display text-[17px] font-semibold tracking-tight">Xog-arag</span>
          </Link>
          <p className="mt-2 font-mono text-[10px] uppercase leading-relaxed tracking-[0.14em] text-muted-foreground">
            field log · est. 2026
          </p>
          <div className="my-7 h-px w-full bg-rule" />
          {list}
        </div>
        <div className="space-y-3">
          <div className="h-px w-full bg-rule" />
          <ThemeSwitch />
          <div className="meta leading-relaxed normal-case tracking-normal">
            Diini Kahiye<br />Mogadishu
          </div>
        </div>
      </aside>

      {/* Mobile spine strip */}
      <div className="sticky top-0 z-40 border-b border-rule bg-background/95 backdrop-blur lg:hidden">
        <div className="flex items-center justify-between px-5 py-3">
          <Link to="/" className="flex items-center gap-2">
            <InkMark />
            <span className="font-display text-[16px] font-semibold">Xog-arag</span>
          </Link>
          <button
            onClick={() => setOpen((o) => !o)}
            className="meta hover:text-foreground"
            aria-expanded={open}
          >
            {open ? "close" : "index"}
          </button>
        </div>
        {open && (
          <div className="border-t border-rule px-5 py-4">
            {list}
            <div className="mt-4 border-t border-rule pt-3">
              <ThemeSwitch />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
