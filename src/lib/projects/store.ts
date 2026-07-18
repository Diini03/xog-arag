import { useSyncExternalStore } from "react";
import { Project, ProjectElement, ProjectPage, ProjectType } from "./types";
import { createProjectFromTemplate } from "./templates";

const STORAGE_KEY = "xogarag.projects.v1";
const uid = () => Math.random().toString(36).slice(2, 10);

type Listener = () => void;
const listeners = new Set<Listener>();
let projects: Project[] = load();

function load(): Project[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as Project[];
  } catch {
    return [];
  }
}

function persist() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
  } catch {}
  listeners.forEach((l) => l());
}

function subscribe(l: Listener) {
  listeners.add(l);
  return () => listeners.delete(l);
}

export function useProjects() {
  return useSyncExternalStore(subscribe, () => projects, () => projects);
}

export function useProject(id: string | undefined) {
  return useSyncExternalStore(
    subscribe,
    () => (id ? projects.find((p) => p.id === id) : undefined),
    () => (id ? projects.find((p) => p.id === id) : undefined),
  );
}

function update(id: string, updater: (p: Project) => Project) {
  projects = projects.map((p) => (p.id === id ? { ...updater(p), updatedAt: Date.now() } : p));
  persist();
}

export const projectStore = {
  createFromTemplate(type: ProjectType) {
    const p = createProjectFromTemplate(type);
    projects = [p, ...projects];
    persist();
    return p;
  },
  duplicate(id: string) {
    const src = projects.find((p) => p.id === id);
    if (!src) return null;
    const copy: Project = { ...JSON.parse(JSON.stringify(src)), id: uid(), name: `${src.name} (copy)`, createdAt: Date.now(), updatedAt: Date.now() };
    projects = [copy, ...projects];
    persist();
    return copy;
  },
  remove(id: string) {
    projects = projects.filter((p) => p.id !== id);
    persist();
  },
  rename(id: string, name: string) {
    update(id, (p) => ({ ...p, name }));
  },
  addPage(id: string, size?: ProjectPage["size"]) {
    update(id, (p) => {
      const s = size ?? p.pages[p.pages.length - 1]?.size ?? "a4";
      const page: ProjectPage = { id: uid(), name: `Page ${p.pages.length + 1}`, size: s, background: "#FFFFFF", elements: [] };
      return { ...p, pages: [...p.pages, page] };
    });
  },
  duplicatePage(id: string, pageId: string) {
    update(id, (p) => {
      const idx = p.pages.findIndex((pg) => pg.id === pageId);
      if (idx < 0) return p;
      const src = p.pages[idx];
      const copy: ProjectPage = {
        ...JSON.parse(JSON.stringify(src)),
        id: uid(),
        name: `${src.name} copy`,
        elements: src.elements.map((e) => ({ ...e, id: uid() })),
      };
      const next = [...p.pages];
      next.splice(idx + 1, 0, copy);
      return { ...p, pages: next };
    });
  },
  removePage(id: string, pageId: string) {
    update(id, (p) => ({ ...p, pages: p.pages.length > 1 ? p.pages.filter((pg) => pg.id !== pageId) : p.pages }));
  },
  reorderPages(id: string, from: number, to: number) {
    update(id, (p) => {
      const next = [...p.pages];
      const [moved] = next.splice(from, 1);
      next.splice(to, 0, moved);
      return { ...p, pages: next };
    });
  },
  renamePage(id: string, pageId: string, name: string) {
    update(id, (p) => ({ ...p, pages: p.pages.map((pg) => (pg.id === pageId ? { ...pg, name } : pg)) }));
  },
  setPageBackground(id: string, pageId: string, background: string) {
    update(id, (p) => ({ ...p, pages: p.pages.map((pg) => (pg.id === pageId ? { ...pg, background } : pg)) }));
  },
  addElement(id: string, pageId: string, el: Omit<ProjectElement, "id" | "z"> & { z?: number }) {
    update(id, (p) => ({
      ...p,
      pages: p.pages.map((pg) => {
        if (pg.id !== pageId) return pg;
        const z = (el.z ?? Math.max(0, ...pg.elements.map((e) => e.z)) + 1);
        return { ...pg, elements: [...pg.elements, { ...el, id: uid(), z } as ProjectElement] };
      }),
    }));
  },
  updateElement(id: string, pageId: string, elementId: string, patch: Partial<ProjectElement>) {
    update(id, (p) => ({
      ...p,
      pages: p.pages.map((pg) => {
        if (pg.id !== pageId) return pg;
        return {
          ...pg,
          elements: pg.elements.map((e) => (e.id === elementId ? ({ ...e, ...patch, props: { ...(e as any).props, ...(patch as any).props } } as ProjectElement) : e)),
        };
      }),
    }));
  },
  removeElement(id: string, pageId: string, elementId: string) {
    update(id, (p) => ({
      ...p,
      pages: p.pages.map((pg) => (pg.id === pageId ? { ...pg, elements: pg.elements.filter((e) => e.id !== elementId) } : pg)),
    }));
  },
  bringForward(id: string, pageId: string, elementId: string, dir: 1 | -1) {
    update(id, (p) => ({
      ...p,
      pages: p.pages.map((pg) => (pg.id === pageId ? { ...pg, elements: pg.elements.map((e) => (e.id === elementId ? { ...e, z: e.z + dir } : e)) } : pg)),
    }));
  },
};
