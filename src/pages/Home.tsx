import { BigStage, StageItem } from "@/components/site/BigStage";
import { QUOTES } from "@/lib/content/quotes";
import { TIPS } from "@/lib/content/tips";
import { FACTS } from "@/lib/content/facts";
import { QUESTIONS } from "@/lib/content/questions";

const quotes: StageItem[] = QUOTES.map((q) => ({
  id: q.id,
  text: `“${q.text}”`,
  meta: q.attributed ? q.author : `${q.author} — original`,
}));

const facts: StageItem[] = FACTS.map((f) => ({
  id: f.id,
  text: f.text,
  meta: f.source?.publication ?? "did you know",
}));

const tips: StageItem[] = TIPS.map((t) => ({
  id: t.id,
  text: t.title,
  meta: t.explanation,
}));

const questions: StageItem[] = QUESTIONS.map((q) => ({
  id: q.id,
  text: q.prompt,
  meta: q.options.join("   ·   "),
}));

export default function Home() {
  return (
    <div className="h-dvh snap-y snap-mandatory overflow-y-auto overflow-x-hidden">
      <BigStage label="Quote" items={quotes} tone="var(--quote)" size="xl" />
      <BigStage label="Fact" items={facts} tone="var(--data)" size="lg" interval={9000} />
      <BigStage label="Tip" items={tips} tone="var(--mint)" size="lg" interval={9000} />
      <BigStage label="Question" items={questions} tone="var(--accent)" size="lg" interval={10000} />
    </div>
  );
}
