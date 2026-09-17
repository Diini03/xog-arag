import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Shell, PageHead, EndMark } from "@/components/log/Shell";
import { EntryBlock } from "@/components/log/EntryCard";
import { SORTED_ENTRIES, ALL_TAGS } from "@/lib/log/entries";

export const slugify = (t: string) => t.toLowerCase().replace(/\s+/g, "-");

export default function Tag() {
  const { tag } = useParams();
  const name = ALL_TAGS.find((t) => slugify(t) === tag?.toLowerCase());
  const entries = name ? SORTED_ENTRIES.filter((e) => e.tags.includes(name)) : [];

  useEffect(() => {
    document.title = name ? `#${slugify(name)} — Xog-arag` : "Xog-arag";
    return () => {
      document.title = "Xog-arag — a data analyst's field log";
    };
  }, [name]);

  if (!name) {
    return (
      <Shell>
        <p className="meta">no such tag</p>
        <h1 className="mt-3 font-display text-3xl font-semibold">Nothing is filed under that.</h1>
        <p className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
          {ALL_TAGS.map((t) => (
            <Link key={t} to={`/tag/${slugify(t)}`} className="meta hover:text-primary">
              #{slugify(t)}
            </Link>
          ))}
        </p>
      </Shell>
    );
  }

  const first = entries[entries.length - 1]?.date;
  const last = entries[0]?.date;

  return (
    <Shell>
      <PageHead
        index={`tag · ${entries.length} entr${entries.length === 1 ? "y" : "ies"}`}
        title={`#${slugify(name)}`}
        standfirst={
          first ? `Everything filed under “${name}”, from ${first} to ${last}, newest first.` : undefined
        }
      />

      <div>
        {entries.map((e, i) => (
          <EntryBlock key={e.id} entry={e} index={i} />
        ))}
      </div>

      <EndMark />

      <section className="mt-10 border-t border-rule pt-6">
        <h2 className="meta mb-3">other labels in the log</h2>
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          {ALL_TAGS.filter((t) => t !== name).map((t) => (
            <Link key={t} to={`/tag/${slugify(t)}`} className="meta hover:text-primary">
              #{slugify(t)}
            </Link>
          ))}
        </div>
      </section>
    </Shell>
  );
}
