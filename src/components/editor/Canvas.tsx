import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { PAGE_SIZES, Project, ProjectElement, ProjectPage } from "@/lib/projects/types";
import { projectStore } from "@/lib/projects/store";
import { ElementView } from "./elements/ElementView";
import { cn } from "@/lib/utils";

interface CanvasProps {
  project: Project;
  page: ProjectPage;
  selectedId: string | null;
  onSelect: (id: string | null) => void;
  zoom: number;
  onFit: (fit: number) => void;
  autoFit: boolean;
}

export function Canvas({ project, page, selectedId, onSelect, zoom, onFit, autoFit }: CanvasProps) {
  const dims = PAGE_SIZES[page.size];
  const wrapRef = useRef<HTMLDivElement>(null);
  const [fit, setFit] = useState(1);

  useLayoutEffect(() => {
    if (!wrapRef.current) return;
    const el = wrapRef.current;
    const compute = () => {
      const pad = 96;
      const scaleX = (el.clientWidth - pad) / dims.w;
      const scaleY = (el.clientHeight - pad) / dims.h;
      const f = Math.max(0.15, Math.min(scaleX, scaleY, 1));
      setFit(f);
      onFit(f);
    };
    compute();
    const ro = new ResizeObserver(compute);
    ro.observe(el);
    return () => ro.disconnect();
  }, [dims.w, dims.h, onFit]);

  const scale = autoFit ? fit : zoom;

  return (
    <div
      ref={wrapRef}
      className="relative w-full h-full overflow-auto bg-muted/40"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onSelect(null);
      }}
    >
      <div className="min-h-full min-w-full flex items-center justify-center p-12">
        <div
          className="relative shadow-elevated rounded-md"
          style={{
            width: dims.w * scale,
            height: dims.h * scale,
          }}
        >
          <div
            className="absolute top-0 left-0 origin-top-left"
            style={{
              width: dims.w,
              height: dims.h,
              transform: `scale(${scale})`,
              background: page.background,
            }}
            onMouseDown={(e) => {
              if (e.target === e.currentTarget) onSelect(null);
            }}
          >
            {[...page.elements]
              .sort((a, b) => a.z - b.z)
              .map((el) => (
                <ElementFrame
                  key={el.id}
                  el={el}
                  page={page}
                  projectId={project.id}
                  selected={selectedId === el.id}
                  scale={scale}
                  bounds={dims}
                  onSelect={() => onSelect(el.id)}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ElementFrame({
  el, page, projectId, selected, scale, bounds, onSelect,
}: {
  el: ProjectElement;
  page: ProjectPage;
  projectId: string;
  selected: boolean;
  scale: number;
  bounds: { w: number; h: number };
  onSelect: () => void;
}) {
  const [drag, setDrag] = useState<null | { mode: "move" | "resize"; startX: number; startY: number; el: ProjectElement }>(null);

  useEffect(() => {
    if (!drag) return;
    const onMove = (e: PointerEvent) => {
      const dx = (e.clientX - drag.startX) / scale;
      const dy = (e.clientY - drag.startY) / scale;
      if (drag.mode === "move") {
        const x = Math.max(0, Math.min(bounds.w - drag.el.w, drag.el.x + dx));
        const y = Math.max(0, Math.min(bounds.h - drag.el.h, drag.el.y + dy));
        projectStore.updateElement(projectId, page.id, drag.el.id, { x, y } as any);
      } else {
        const w = Math.max(20, Math.min(bounds.w - drag.el.x, drag.el.w + dx));
        const h = Math.max(20, Math.min(bounds.h - drag.el.y, drag.el.h + dy));
        projectStore.updateElement(projectId, page.id, drag.el.id, { w, h } as any);
      }
    };
    const onUp = () => setDrag(null);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, [drag, scale, bounds, projectId, page.id]);

  return (
    <div
      className={cn("absolute group cursor-move", selected && "z-10")}
      style={{ left: el.x, top: el.y, width: el.w, height: el.h, zIndex: el.z + (selected ? 1000 : 0) }}
      onMouseDown={(e) => e.stopPropagation()}
      onPointerDown={(e) => {
        e.stopPropagation();
        onSelect();
        setDrag({ mode: "move", startX: e.clientX, startY: e.clientY, el });
      }}
    >
      <div className="w-full h-full pointer-events-none select-none">
        <ElementView el={el} />
      </div>
      <div
        className={cn(
          "absolute inset-0 border-2 rounded-sm pointer-events-none transition-opacity",
          selected ? "border-primary opacity-100" : "border-primary/0 group-hover:border-primary/40 opacity-100",
        )}
        style={{ borderStyle: "solid" }}
      />
      {selected && (
        <div
          className="absolute -right-1.5 -bottom-1.5 h-3 w-3 bg-background border-2 border-primary rounded-sm cursor-nwse-resize"
          onPointerDown={(e) => {
            e.stopPropagation();
            setDrag({ mode: "resize", startX: e.clientX, startY: e.clientY, el });
          }}
        />
      )}
    </div>
  );
}
