import { Layout, PageIntro } from "@/components/site/Layout";
import { Panel } from "@/components/site/cards";

const SECTIONS = [
  {
    h: "What XogArag is",
    p: "A discovery platform for people who work with, or are curious about, data, AI and technology. It is built around short encounters: one tip, one experiment, one game, one sourced story — rather than long courses or dashboards.",
  },
  {
    h: "Why it exists",
    p: "Most learning material asks for a commitment before it gives you anything. XogArag inverts that: it gives you one specific, checkable thing in under a minute, and only then invites you deeper.",
  },
  {
    h: "Who it is for",
    p: "Analysts, students, engineers, and anyone who enjoys finding out that the mean is lying to them. No account is required to read, play, experiment or search.",
  },
  {
    h: "How AI is used",
    p: "AI can help draft structured content — tips, questions, concept explanations — against strict schemas that the interface renders through fixed components. A model never controls layout, never executes generated code, and never produces a factual news claim. API credentials stay server-side.",
  },
  {
    h: "How sources are handled",
    p: "Quotes are only attributed when a checkable public source exists; everything else is labelled an original XogArag thought rather than put in someone's mouth. News items always show publication, date and a link. Trend sections say 'recently discussed', because we do not have popularity data and will not invent it.",
  },
  {
    h: "What is saved",
    p: "Bookmarks, game scores and recently viewed items live in this browser's local storage. Nothing is synced to an account today. The data shapes are designed so that backend persistence can be added without changing the interface.",
  },
];

export default function About() {
  return (
    <Layout>
      <PageIntro kicker="Colophon" title="About XogArag" lede="A curiosity engine for data, AI and technology — and an honest account of how it is built." />
      <div className="grid gap-5 lg:grid-cols-2">
        {SECTIONS.map((s) => (
          <Panel key={s.h}>
            <h2 className="font-display text-[19px] font-bold">{s.h}</h2>
            <p className="mt-2 text-[14.5px] leading-relaxed text-muted-foreground">{s.p}</p>
          </Panel>
        ))}
      </div>

      <section className="mt-10 grid gap-5 lg:grid-cols-2">
        <Panel tone="hsl(var(--data))">
          <h2 className="font-display text-[19px] font-bold">Related projects</h2>
          <ul className="mt-3 space-y-3 text-[14px]">
            <li><span className="font-semibold">LearnData</span> — structured learning for Python, SQL, Excel, Power BI, ML and AI.</li>
            <li><span className="font-semibold">NadiifiData</span> — clean and prepare datasets before analysis.</li>
            <li><span className="font-semibold">ChartWorld</span> — explore and build data visualisations.</li>
            <li><span className="font-semibold">XogArag</span> — discover, play, experiment and stay updated.</li>
          </ul>
        </Panel>
        <Panel tone="hsl(var(--primary))">
          <h2 className="font-display text-[19px] font-bold">Creator</h2>
          <p className="mt-2 text-[14.5px] text-muted-foreground">Built by Diini Kahiye.</p>
          <ul className="mt-3 space-y-2 text-[14px]">
            <li><a className="underline decoration-dotted underline-offset-4 hover:text-primary" href="https://github.com/Diini03" target="_blank" rel="noreferrer noopener">GitHub</a></li>
            <li><a className="underline decoration-dotted underline-offset-4 hover:text-primary" href="https://www.diinikahiye.online/" target="_blank" rel="noreferrer noopener">Portfolio</a></li>
            <li><a className="underline decoration-dotted underline-offset-4 hover:text-primary" href="https://www.linkedin.com/in/diinikahiye/" target="_blank" rel="noreferrer noopener">LinkedIn</a></li>
          </ul>
        </Panel>
      </section>
    </Layout>
  );
}
