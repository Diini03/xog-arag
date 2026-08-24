import { ReactNode } from "react";
import { Spine } from "@/components/log/Spine";

export function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="grain min-h-dvh">
      <Spine />
      <div className="lg:pl-[210px]">
        <main id="main" className="mx-auto w-full max-w-[900px] px-5 pb-24 pt-10 sm:px-10 lg:pt-16">
          {children}
        </main>
        <footer className="border-t border-rule lg:ml-0">
          <div className="mx-auto flex max-w-[900px] flex-col gap-2 px-5 py-8 sm:px-10 sm:flex-row sm:items-baseline sm:justify-between">
            <p className="meta normal-case tracking-normal">
              Kept by Diini Kahiye — analyst, Mogadishu.
            </p>
            <div className="flex gap-4">
              <a className="meta hover:text-primary" href="https://www.diinikahiye.online/" target="_blank" rel="noreferrer noopener">portfolio</a>
              <a className="meta hover:text-primary" href="https://github.com/Diini03" target="_blank" rel="noreferrer noopener">github</a>
              <a className="meta hover:text-primary" href="https://www.linkedin.com/in/diinikahiye/" target="_blank" rel="noreferrer noopener">linkedin</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export function PageHead({
  index,
  title,
  standfirst,
}: {
  index: string;
  title: string;
  standfirst?: string;
}) {
  return (
    <header className="mb-12 border-b border-rule pb-8">
      <div className="meta">{index}</div>
      <h1 className="mt-3 font-display text-[clamp(2rem,5vw,3rem)] font-semibold leading-[1.05] text-balance">
        {title}
      </h1>
      {standfirst && (
        <p className="mt-4 max-w-[58ch] text-[18px] leading-relaxed text-muted-foreground">{standfirst}</p>
      )}
    </header>
  );
}

export function EndMark() {
  return (
    <p className="mt-16 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
      —— end of current entries ——
    </p>
  );
}
