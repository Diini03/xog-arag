import { useEffect, useMemo, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { ResizablePanel, ResizableHandle, ResizablePanelGroup } from "@/components/ui/resizable";
import { useProject, projectStore } from "@/lib/projects/store";
import { ProjectExplorer } from "@/components/editor/ProjectExplorer";
import { PropertiesPanel } from "@/components/editor/PropertiesPanel";
import { PageNavigator } from "@/components/editor/PageNavigator";
import { CommandBar } from "@/components/editor/CommandBar";
import { Canvas } from "@/components/editor/Canvas";
import { PAGE_SIZES, ProjectElement } from "@/lib/projects/types";

export default function Editor() {
  const { id } = useParams();
  const project = useProject(id);
  const [activePageId, setActivePageId] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);
  const [autoFit, setAutoFit] = useState(true);

  useEffect(() => {
    if (project && !activePageId) setActivePageId(project.pages[0]?.id ?? null);
  }, [project, activePageId]);

  useEffect(() => setSelectedId(null), [activePageId]);

  if (!project) return <Navigate to="/" replace />;
  const page = project.pages.find((p) => p.id === activePageId) ?? project.pages[0];
  const selected = page?.elements.find((e) => e.id === selectedId) ?? null;

  const addElement = (kind: string) => {
    if (!page) return;
    const dims = PAGE_SIZES[page.size];
    const cx = dims.w / 2, cy = dims.h / 2;
    let el: Omit<ProjectElement, "id" | "z">;
    switch (kind) {
      case "heading":
        el = { type: "heading", x: cx - 200, y: cy - 40, w: 400, h: 80, props: { text: "Heading", level: 2, align: "left" } } as any; break;
      case "text":
        el = { type: "text", x: cx - 200, y: cy - 30, w: 400, h: 60, props: { text: "Body text", size: 16, align: "left" } } as any; break;
      case "kpi":
        el = { type: "kpi", x: cx - 105, y: cy - 65, w: 210, h: 130, props: { label: "Metric", value: "1,234", delta: "+4.2%", trend: "up", accent: "#2563EB" } } as any; break;
      case "chart":
        el = { type: "chart", x: cx - 240, y: cy - 130, w: 480, h: 260, props: { title: "Chart title", kind: "bar" } } as any; break;
      case "image":
        el = { type: "image", x: cx - 160, y: cy - 100, w: 320, h: 200, props: { src: "", fit: "cover", radius: 12 } } as any; break;
      case "shape":
        el = { type: "shape", x: cx - 100, y: cy - 60, w: 200, h: 120, props: { shape: "rect", fill: "#2563EB", radius: 12 } } as any; break;
      case "divider":
        el = { type: "divider", x: cx - 150, y: cy, w: 300, h: 8, props: { color: "#2563EB", thickness: 3 } } as any; break;
      default: return;
    }
    projectStore.addElement(project.id, page.id, el as any);
  };

  return (
    <div className="h-dvh flex flex-col bg-background text-foreground overflow-hidden">
      <CommandBar
        project={project}
        zoom={zoom}
        autoFit={autoFit}
        onZoom={(z) => { setAutoFit(false); setZoom(z); }}
        onFit={() => setAutoFit(true)}
      />
      <div className="flex-1 min-h-0">
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={18} minSize={14} maxSize={26}>
            <ProjectExplorer
              project={project}
              activePageId={page?.id ?? ""}
              onSelectPage={setActivePageId}
              onAddElement={addElement as any}
            />
          </ResizablePanel>
          <ResizableHandle withHandle={false} />
          <ResizablePanel defaultSize={62} minSize={40}>
            <div className="h-full flex flex-col">
              <div className="flex-1 min-h-0">
                {page && (
                  <Canvas
                    project={project}
                    page={page}
                    selectedId={selectedId}
                    onSelect={setSelectedId}
                    zoom={zoom}
                    onFit={setZoom}
                    autoFit={autoFit}
                  />
                )}
              </div>
              <PageNavigator project={project} activeId={page?.id ?? ""} onSelect={setActivePageId} />
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle={false} />
          <ResizablePanel defaultSize={20} minSize={16} maxSize={30}>
            {page && <PropertiesPanel project={project} page={page} element={selected} />}
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
}
