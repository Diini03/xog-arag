import { useMemo, useState } from "react";
import { Shell, PageHead, EndMark } from "@/components/log/Shell";
import { EntryBlock } from "@/components/log/EntryCard";
import { byType } from "@/lib/log/entries";
import { cn } from "@/lib/utils";

type Filter = "all" | "signal" | "noise";

export default function Notes() {
  const [filter, setFilter] = useState<Filter>("all");
  const all = byType("note");
  const list = useMemo(
    () => (filter === "all" ? all : all.filter((n) => (n.register ?? "noise") === filter)),
    [all, filter],
  );

  return (
    <Shell>
      <PageHead
        index="01 · notes"
        title="Short observations, logged as they happen"
        standfirst="Raw thoughts from the working day. Some are half-formed on purpose — the filter below separates what I still stand behind from what I merely wrote down."
      />

      <div className="mb-8 flex items-center gap-1 border-b border-rule pb-4">
        {(["all", "signal", "noise"] as Filter[]).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={cn(
              "meta px-3 py-1.5 transition-colors",
              filter === f ? "text-primary underline underline-offset-4" : "hover:text-foreground",
            )}
          >
            {f}
          </button>
        ))}
        <span className="meta ml-auto normal-case tracking-normal">
          signal = developed · noise = unfiltered
        </span>
      </div>

      {list.map((e, i) => (
        <EntryBlock key={e.id} entry={e} index={i} />
      ))}
      <EndMark />
    </Shell>
  );
}
