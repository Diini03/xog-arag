import { Shell, PageHead, EndMark } from "@/components/log/Shell";
import { EntryBlock } from "@/components/log/EntryCard";
import { byType } from "@/lib/log/entries";

export default function Quotes() {
  const list = byType("quote");
  return (
    <Shell>
      <PageHead
        index="02 · quotes"
        title="Lines I pinned to the page"
        standfirst="Each card carries the line on the front and my annotation on the back — why it mattered, and what I did with it. Unattributed cards are mine."
      />
      {list.map((e, i) => (
        <EntryBlock key={e.id} entry={e} index={i} />
      ))}
      <EndMark />
    </Shell>
  );
}
