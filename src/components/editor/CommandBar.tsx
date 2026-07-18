import { Link } from "react-router-dom";
import { Project } from "@/lib/projects/types";
import { projectStore } from "@/lib/projects/store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Download, Play, Minus, Plus, Maximize2 } from "lucide-react";
import { LogoMark } from "@/components/common/Logo";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { toast } from "sonner";

interface Props {
  project: Project;
  zoom: number;
  autoFit: boolean;
  onZoom: (z: number) => void;
  onFit: () => void;
}

export function CommandBar({ project, zoom, autoFit, onZoom, onFit }: Props) {
  return (
    <header className="h-12 shrink-0 border-b bg-background flex items-center gap-2 px-2.5">
      <Link to="/" className="inline-flex items-center gap-2 px-2 h-8 rounded-md hover:bg-muted" aria-label="Back to home">
        <ArrowLeft className="h-3.5 w-3.5" />
        <LogoMark size={20} />
      </Link>

      <div className="h-5 w-px bg-border mx-1" />

      <Input
        value={project.name}
        onChange={(e) => projectStore.rename(project.id, e.target.value)}
        className="h-8 max-w-[280px] bg-transparent border-0 focus-visible:ring-1 text-[13px] font-medium"
        aria-label="Project name"
      />

      <div className="ml-auto flex items-center gap-1">
        <div className="flex items-center gap-0.5 mr-1">
          <Button size="icon" variant="ghost" className="h-8 w-8" onClick={() => onZoom(Math.max(0.2, zoom - 0.1))} aria-label="Zoom out"><Minus className="h-3.5 w-3.5" /></Button>
          <button onClick={onFit} className="h-8 min-w-[52px] px-2 text-[12px] tabular-nums rounded-md hover:bg-muted">
            {autoFit ? "Fit" : `${Math.round(zoom * 100)}%`}
          </button>
          <Button size="icon" variant="ghost" className="h-8 w-8" onClick={() => onZoom(Math.min(3, zoom + 0.1))} aria-label="Zoom in"><Plus className="h-3.5 w-3.5" /></Button>
        </div>

        <Button size="sm" variant="ghost" className="h-8" onClick={() => toast.info("Export is coming in the next phase")}>
          <Download className="h-3.5 w-3.5 mr-1.5" /> Export
        </Button>
        <Button size="sm" className="h-8" onClick={() => toast.info("Presentation mode is coming in the next phase")}>
          <Play className="h-3.5 w-3.5 mr-1.5" /> Present
        </Button>
        <ThemeToggle />
      </div>
    </header>
  );
}
