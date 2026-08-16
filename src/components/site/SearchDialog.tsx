import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { searchContent } from "@/lib/content/catalog";
import { KIND_STYLE } from "@/components/site/kind";

export function SearchDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const results = useMemo(() => searchContent(query, 20), [query]);

  const go = (href: string) => {
    onOpenChange(false);
    setQuery("");
    navigate(href);
  };

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput value={query} onValueChange={setQuery} placeholder="Search labs, games, tips, news, concepts…" />
      <CommandList>
        {query.trim() === "" ? (
          <CommandGroup heading="Jump to">
            {[
              { label: "Today's board", href: "/today" },
              { label: "All labs", href: "/labs" },
              { label: "All games", href: "/games" },
              { label: "News with sources", href: "/news" },
              { label: "Explore everything", href: "/explore" },
            ].map((s) => (
              <CommandItem key={s.href} value={s.label} onSelect={() => go(s.href)}>
                {s.label}
              </CommandItem>
            ))}
          </CommandGroup>
        ) : (
          <>
            <CommandEmpty>Nothing matched. Try “regression”, “SQL”, or “transformer”.</CommandEmpty>
            <CommandGroup heading={`${results.length} result${results.length === 1 ? "" : "s"}`}>
              {results.map((r) => (
                <CommandItem key={`${r.kind}-${r.id}`} value={`${r.title} ${r.body}`} onSelect={() => go(r.href)}>
                  <span className="mr-2 font-mono text-[10px] uppercase tracking-widest" style={{ color: KIND_STYLE[r.kind].color }}>
                    {r.kind}
                  </span>
                  <span className="truncate">{r.title}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          </>
        )}
      </CommandList>
    </CommandDialog>
  );
}
