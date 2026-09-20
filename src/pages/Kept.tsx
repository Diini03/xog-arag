import { Link } from "react-router-dom";
import { Shell, PageHead, EndMark } from "@/components/log/Shell";
import { EntryBlock } from "@/components/log/EntryCard";
import { SORTED_ENTRIES } from "@/lib/log/entries";
import { useBookmarks } from "@/lib/local";

export default function Kept() {
  const { items, clear } = useBookmarks();
  const kept = items
    .map((b) => SORTED_ENTRIES.find((e) => e.id === b.id))
    .filter((e): e is NonNullable<typeof e> => Boolean(e));

  return (
    <Shell>
      <PageHead
        index="07 · kept"
        title="Pages you folded over"
        standfirst="Entries you marked while reading. Kept on this device only — nothing is sent anywhere."
      />

      {kept.length === 0 ? (
        <div className="py-10">
          <p className="text-[17.5px] leading-[1.75]">
            Nothing folded over yet. Open any entry and press <span className="font-mono">keep</span> to
            mark it — it will wait for you here.
          </p>
          <p className="mt-6">
            <Link className="meta text-foreground link-draw" to="/archive">browse the full index →</Link>
          </p>
        </div>
      ) : (
        <>
          <div className="mb-6 flex items-baseline justify-between">
            <span className="meta">{kept.length} kept</span>
            <button onClick={clear} className="meta hover:text-foreground">clear all</button>
          </div>
          <div>
            {kept.map((e, i) => (
              <EntryBlock key={e.id} entry={e} index={i} />
            ))}
          </div>
          <EndMark />
        </>
      )}
    </Shell>
  );
}
