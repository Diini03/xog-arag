export type PageSize =
  | { kind: "a4"; w: 794; h: 1123 }
  | { kind: "slide-16-9"; w: 1280; h: 720 }
  | { kind: "carousel-1-1"; w: 1080; h: 1080 }
  | { kind: "carousel-4-5"; w: 1080; h: 1350 };

export const PAGE_SIZES: Record<PageSize["kind"], { w: number; h: number; label: string }> = {
  "a4": { w: 794, h: 1123, label: "A4 Portrait" },
  "slide-16-9": { w: 1280, h: 720, label: "Slide 16:9" },
  "carousel-1-1": { w: 1080, h: 1080, label: "Carousel 1:1" },
  "carousel-4-5": { w: 1080, h: 1350, label: "Carousel 4:5" },
};

export type ElementType =
  | "heading"
  | "text"
  | "image"
  | "shape"
  | "divider"
  | "kpi"
  | "chart";

export interface BaseElement {
  id: string;
  type: ElementType;
  x: number;
  y: number;
  w: number;
  h: number;
  rotation?: number;
  z: number;
}

export interface HeadingElement extends BaseElement {
  type: "heading";
  props: { text: string; level: 1 | 2 | 3; align: "left" | "center" | "right"; color?: string };
}
export interface TextElement extends BaseElement {
  type: "text";
  props: { text: string; size: number; align: "left" | "center" | "right"; color?: string };
}
export interface ImageElement extends BaseElement {
  type: "image";
  props: { src: string; fit: "cover" | "contain"; radius: number };
}
export interface ShapeElement extends BaseElement {
  type: "shape";
  props: { shape: "rect" | "circle"; fill: string; radius: number };
}
export interface DividerElement extends BaseElement {
  type: "divider";
  props: { color: string; thickness: number };
}
export interface KpiElement extends BaseElement {
  type: "kpi";
  props: { label: string; value: string; delta?: string; trend?: "up" | "down" | "flat"; accent?: string };
}
export interface ChartElement extends BaseElement {
  type: "chart";
  props: { title?: string; src?: string; kind: "bar" | "line" | "pie" | "placeholder" };
}

export type ProjectElement =
  | HeadingElement
  | TextElement
  | ImageElement
  | ShapeElement
  | DividerElement
  | KpiElement
  | ChartElement;

export interface ProjectPage {
  id: string;
  name: string;
  size: PageSize["kind"];
  background: string;
  elements: ProjectElement[];
}

export type ProjectType =
  | "blank"
  | "executive"
  | "business"
  | "ngo-sitrep"
  | "research"
  | "monthly"
  | "annual"
  | "marketing"
  | "case-study"
  | "linkedin-carousel"
  | "instagram-carousel"
  | "presentation";

export interface Project {
  id: string;
  name: string;
  type: ProjectType;
  theme: {
    primary: string;
    accent: string;
    text: string;
    background: string;
    font: string;
  };
  pages: ProjectPage[];
  createdAt: number;
  updatedAt: number;
}
