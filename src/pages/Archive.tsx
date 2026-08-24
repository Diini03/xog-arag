import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Shell, PageHead, EndMark } from "@/components/log/Shell";
import { SORTED_ENTRIES, ALL_TAGS } from "@/lib/log/entries";
import { EntryType, TYPE_LABEL, TYPE_PATH } from "@/lib/log/types";
import { cn } from "@/lib/utils";

const TYPES: (EntryType | "all")[] = ["all", "note", "quote", "concern", "project"];

export default function Archive() {
  const [type, setType] = useState<EntryType | "all">("all");
  const [tag, setTag] = useState<string | "all">("all");
  const [q, setQ] = useState("");

  const list = useMemo(
    () =>
      SORTED_ENTRIES.filter(
        (e) =>
          (type === "all" || e.type === type) &&
          (tag === "all" || e.tags.includes(tag)) &&
          (q.trim() === "" ||
            (e.title ?? "").toLowerCase().includes(q.toLowerCase()) ||
            e.body.toLowerCase().includes(q.toLowerCase())),
      ),
    [type, tag, q],
  );

  return (
    <Shell>
      <PageHead
        index="06 · archive"
        title="Full chronological index"
        standfirst="Everything logged, filterable by type, tag and text. Dates are the day the entry was written down, not the day the thought arrived."
      />

      <div className="mb-8 space-y-4 border-b border-rule pb-6">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="search the log"
          className="w-full border-b border-rule bg-transparent pb-2 font-mono text-[12.5px] outline-none placeholder:text-muted-foreground focus:border-primary"
        />
        <div className="flex flex-wrap gap-x-4 gap-y-1">
          {TYPES.map((t) => (
            <button
              key={t}
              onClick={() => setType(t)}
              className={cn("meta", type === t ? "text-primary underline underline-offset-4" : "hover:text-foreground")}
            >
              {t === "all" ? "all types" : TYPE_LABEL[t]}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-1">
          <button
            onClick={() => setTag("all")}
            className={cn("meta", tag === "all" ? "text-primary underline underline-offset-4" : "hover:text-foreground")}
          >
            all tags
          </button>
          {ALL_TAGS.map((t) => (
            <button
              key={t}
              onClick={() => setTag(t)}
              className={cn("meta", tag === t ? "text-primary underline underline-offset-4" : "hover:text-foreground")}
            >
              #{t.replace(/\s+/g, "-")}
            </button>
          ))}
        </div>
      </div>

      <ol>
        {list.map((e) => (
          <li key={e.id} className="border-b border-rule py-4">
            <Link to={TYPE_PATH[e.type]} className="group flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-6">
              <span className="meta shrink-0">{e.date}</span>
              <span className="meta w-[86px] shrink-0">{TYPE_LABEL[e.type]}</span>
              <span className="text-[17px] leading-snug group-hover:text-primary">
                {e.title ?? e.body.slice(0, 96) + (e.body.length > 96 ? "…" : "")}
              </span>
            </Link>
          </li>
        ))}
      </ol>
      {list.length === 0 && <p className="meta py-10">nothing logged under those filters.</p>}
      <EndMark />
    </Shell>
  );
}
