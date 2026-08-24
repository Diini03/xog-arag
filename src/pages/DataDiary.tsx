import { Shell, PageHead, EndMark } from "@/components/log/Shell";
import { EntryBlock } from "@/components/log/EntryCard";
import { byType } from "@/lib/log/entries";

export default function DataDiary() {
  const list = byType("project");
  return (
    <Shell>
      <PageHead
        index="04 · data diary"
        title="Projects as dated field entries"
        standfirst="Not a card grid. Each entry states the question I started with, what I actually found, and what I would do differently — with a status stamp: shipped, ongoing, archived."
      />
      {list.map((e, i) => (
        <EntryBlock key={e.id} entry={e} index={i} />
      ))}
      <EndMark />
    </Shell>
  );
}
