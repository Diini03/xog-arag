import { Project, ProjectPage } from "@/lib/projects/types";
import { projectStore } from "@/lib/projects/store";
import { Button } from "@/components/ui/button";
import { Plus, Copy, Trash2, FileText, LayoutGrid, Square, Type, Image as ImageIcon, Minus, BarChart3, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  project: Project;
  activePageId: string;
  onSelectPage: (id: string) => void;
  onAddElement: (kind: "heading" | "text" | "kpi" | "chart" | "image" | "shape" | "divider") => void;
}

export function ProjectExplorer({ project, activePageId, onSelectPage, onAddElement }: Props) {
  const items: { key: any; label: string; icon: any }[] = [
    { key: "heading", label: "Heading", icon: Type },
    { key: "text", label: "Text", icon: FileText },
    { key: "kpi", label: "KPI Card", icon: Sparkles },
    { key: "chart", label: "Chart", icon: BarChart3 },
    { key: "image", label: "Image", icon: ImageIcon },
    { key: "shape", label: "Shape", icon: Square },
    { key: "divider", label: "Divider", icon: Minus },
  ];

  return (
    <div className="h-full flex flex-col bg-sidebar-background border-r">
      <div className="p-3 border-b">
        <div className="text-[10px] uppercase tracking-wider text-muted-foreground/70 font-semibold px-1 pb-2">Insert</div>
        <div className="grid grid-cols-2 gap-1.5">
          {items.map((it) => (
            <button
              key={it.key}
              onClick={() => onAddElement(it.key)}
              className="flex items-center gap-1.5 h-8 px-2 rounded-md text-[12px] border bg-card hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <it.icon className="h-3.5 w-3.5" />
              <span className="truncate">{it.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="p-3 flex items-center justify-between">
        <div className="text-[10px] uppercase tracking-wider text-muted-foreground/70 font-semibold">Pages</div>
        <Button size="icon" variant="ghost" className="h-6 w-6" onClick={() => projectStore.addPage(project.id)} aria-label="Add page">
          <Plus className="h-3.5 w-3.5" />
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto px-2 pb-3 space-y-1">
        {project.pages.map((p, i) => (
          <PageRow key={p.id} page={p} index={i} active={p.id === activePageId} projectId={project.id} onSelect={() => onSelectPage(p.id)} />
        ))}
      </div>
    </div>
  );
}

function PageRow({ page, index, active, projectId, onSelect }: { page: ProjectPage; index: number; active: boolean; projectId: string; onSelect: () => void }) {
  return (
    <div
      className={cn(
        "group flex items-center gap-2 px-2 py-1.5 rounded-md cursor-pointer transition-colors",
        active ? "bg-primary-soft text-primary" : "hover:bg-muted",
      )}
      onClick={onSelect}
    >
      <LayoutGrid className="h-3.5 w-3.5 shrink-0 opacity-70" />
      <span className="text-[12.5px] truncate flex-1">{index + 1}. {page.name}</span>
      <button
        className="opacity-0 group-hover:opacity-100 p-0.5 rounded hover:bg-background/60"
        onClick={(e) => { e.stopPropagation(); projectStore.duplicatePage(projectId, page.id); }}
        aria-label="Duplicate page"
      >
        <Copy className="h-3 w-3" />
      </button>
      <button
        className="opacity-0 group-hover:opacity-100 p-0.5 rounded hover:bg-background/60 text-destructive"
        onClick={(e) => { e.stopPropagation(); projectStore.removePage(projectId, page.id); }}
        aria-label="Delete page"
      >
        <Trash2 className="h-3 w-3" />
      </button>
    </div>
  );
}
