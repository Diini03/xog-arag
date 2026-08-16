import { ReactNode } from "react";
import { TopNav } from "@/components/site/TopNav";
import { SiteFooter } from "@/components/site/SiteFooter";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh overflow-x-hidden">
      <TopNav />
      <main id="main" className="mx-auto w-full max-w-[1320px] px-4 pb-4 pt-8 sm:px-6">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageIntro({ kicker, title, lede }: { kicker: string; title: string; lede?: string }) {
  return (
    <header className="mb-8 max-w-3xl">
      <div className="label-xs">{kicker}</div>
      <h1 className="mt-2 font-display text-[clamp(2rem,5vw,3.25rem)] font-extrabold leading-[0.98] text-balance">{title}</h1>
      {lede && <p className="mt-3 text-[15.5px] leading-relaxed text-muted-foreground">{lede}</p>}
    </header>
  );
}
