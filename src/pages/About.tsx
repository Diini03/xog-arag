import { Shell, PageHead } from "@/components/log/Shell";

const LINKS = [
  { label: "portfolio", href: "https://www.diinikahiye.online/" },
  { label: "github", href: "https://github.com/Diini03" },
  { label: "linkedin", href: "https://www.linkedin.com/in/diinikahiye/" },
];

export default function About() {
  return (
    <Shell>
      <PageHead index="05 · first page" title="This notebook belongs to Diini Kahiye" />

      <div className="max-w-[64ch] space-y-6 text-[17.5px] leading-[1.8]">
        <p>
          I am a data analyst working in Mogadishu. Xog-arag is Somali for something close to
          <em> one who has seen the record</em> — a witness to the data. That is the job as I
          understand it: look at the record carefully, then say plainly what is and is not there.
        </p>
        <p>
          This is not a resume site. It is the notebook I would keep anyway, published. Quotes that
          changed how I work, short notes written on the day they occurred to me, longer pieces on
          what worries me about how AI and machine learning are being sold, and dated entries on the
          projects I have actually shipped — including the parts that went badly.
        </p>
        <p>
          Working here shapes the whole thing. Much of what the field publishes assumes dense,
          digitised, English-first data and institutions that already measure themselves. I usually
          have none of that. The gap between the textbook and the Somali data reality is not a
          footnote in my practice; it is most of my practice, and it is the most interesting thing I
          can write about.
        </p>
        <p>
          Two rules for what goes in here. First, the uncertainty stays in — every longer piece
          carries a marker saying whether it is speculative, observed in practice, or a view I am
          still updating. Second, nothing is published to look authoritative. If I do not know, the
          entry says so.
        </p>
        <p>
          The log is added to in small doses rather than in bursts. That is also what keeps the
          fundamentals sharp: writing one honest paragraph about a thing I half-understand is a more
          reliable teacher than another course.
        </p>
      </div>

      <div className="mt-12 border-t border-rule pt-6">
        <p className="meta">elsewhere</p>
        <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer noopener"
              className="meta text-foreground link-draw"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </Shell>
  );
}
