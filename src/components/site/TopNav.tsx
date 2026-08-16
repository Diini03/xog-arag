import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, Search, Shuffle, X } from "lucide-react";
import { LogoMark, Wordmark } from "@/components/common/Logo";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { SearchDialog } from "@/components/site/SearchDialog";
import { useRandomDiscovery } from "@/lib/discovery";
import { cn } from "@/lib/utils";

const LINKS = [
  { to: "/today", label: "Today" },
  { to: "/explore", label: "Explore" },
  { to: "/labs", label: "Labs" },
  { to: "/games", label: "Games" },
  { to: "/news", label: "News" },
  { to: "/about", label: "About" },
];

export function TopNav() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();
  const surprise = useRandomDiscovery();

  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-xl">
        <nav className="mx-auto flex h-14 max-w-[1320px] items-center gap-3 px-4 sm:px-6" aria-label="Main">
          <Link to="/" className="flex items-center gap-2" aria-label="XogArag home">
            <LogoMark size={26} />
            <Wordmark />
          </Link>

          <ul className="ml-4 hidden items-center gap-0.5 md:flex">
            {LINKS.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  className={({ isActive }) =>
                    cn(
                      "rounded-md px-2.5 py-1.5 font-mono text-[11.5px] uppercase tracking-[0.14em] transition-colors",
                      isActive ? "text-primary" : "text-muted-foreground hover:text-foreground",
                    )
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="ml-auto flex items-center gap-1.5">
            <button
              onClick={() => setSearchOpen(true)}
              className="flex h-8 items-center gap-2 rounded-full border border-border px-3 text-[12px] text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground"
              aria-label="Search XogArag"
            >
              <Search className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Search</span>
              <kbd className="hidden font-mono text-[10px] text-muted-foreground/70 lg:inline">⌘K</kbd>
            </button>
            <button
              onClick={surprise}
              className="hidden h-8 items-center gap-1.5 rounded-full bg-primary px-3 text-[12px] font-semibold text-primary-foreground transition-transform hover:scale-[1.03] sm:flex"
            >
              <Shuffle className="h-3.5 w-3.5" /> Surprise me
            </button>
            <ThemeToggle />
            <button
              className="md:hidden inline-flex h-8 w-8 items-center justify-center rounded-md border border-border"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="border-t border-border bg-background md:hidden">
            <ul className="mx-auto grid max-w-[1320px] grid-cols-2 gap-1 px-4 py-3">
              {LINKS.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    className="block rounded-md px-3 py-2.5 font-display text-[15px] font-semibold hover:bg-muted"
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
              <li className="col-span-2">
                <button
                  onClick={surprise}
                  className="mt-1 flex w-full items-center justify-center gap-2 rounded-md bg-primary px-3 py-2.5 text-[14px] font-semibold text-primary-foreground"
                >
                  <Shuffle className="h-4 w-4" /> Surprise me
                </button>
              </li>
            </ul>
          </div>
        )}
      </header>

      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </>
  );
}
