import { Project, PAGE_SIZES } from "@/lib/projects/types";
import { projectStore } from "@/lib/projects/store";
import { cn } from "@/lib/utils";
import { ElementView } from "./elements/ElementView";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PageNavigator({ project, activeId, onSelect }: { project: Project; activeId: string; onSelect: (id: string) => void }) {
  return (
    <div className="h-24 shrink-0 border-t bg-background/95 backdrop-blur px-3 flex items-center gap-2 overflow-x-auto">
      {project.pages.map((page, i) => {
        const dims = PAGE_SIZES[page.size];
        const targetH = 60;
        const scale = targetH / dims.h;
        return (
          <button
            key={page.id}
            onClick={() => onSelect(page.id)}
            className={cn(
              "relative flex-shrink-0 group rounded-md overflow-hidden border-2 transition-all",
              page.id === activeId ? "border-primary shadow-md" : "border-transparent hover:border-muted-foreground/30",
            )}
            style={{ width: dims.w * scale + 4, padding: 2 }}
          >
            <div className="relative rounded-sm overflow-hidden" style={{ width: dims.w * scale, height: dims.h * scale, background: page.background }}>
              <div className="absolute top-0 left-0 origin-top-left" style={{ width: dims.w, height: dims.h, transform: `scale(${scale})` }}>
                {[...page.elements].sort((a, b) => a.z - b.z).map((el) => (
                  <div key={el.id} className="absolute" style={{ left: el.x, top: el.y, width: el.w, height: el.h }}>
                    <ElementView el={el} />
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute bottom-0.5 left-1 right-1 flex items-center justify-between text-[9px] font-medium text-muted-foreground pointer-events-none">
              <span>{i + 1}</span>
            </div>
          </button>
        );
      })}
      <Button variant="outline" size="sm" className="h-14 shrink-0" onClick={() => projectStore.addPage(project.id)}>
        <Plus className="h-4 w-4 mr-1" /> Add page
      </Button>
    </div>
  );
}
