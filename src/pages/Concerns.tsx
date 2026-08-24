import { Shell, PageHead, EndMark } from "@/components/log/Shell";
import { EntryBlock } from "@/components/log/EntryCard";
import { byType } from "@/lib/log/entries";

export default function Concerns() {
  const list = byType("concern");
  return (
    <Shell>
      <PageHead
        index="03 · concerns"
        title="Honest commentary on AI, data science and machine learning"
        standfirst="Longer pieces, written from practice rather than from a feed. Every one carries an honesty marker saying how much weight it should carry: speculative, observed in practice, or still updating my view."
      />
      {list.map((e, i) => (
        <EntryBlock key={e.id} entry={e} index={i} />
      ))}
      <EndMark />
    </Shell>
  );
}
