import { Project, ProjectPage, ProjectType } from "./types";

const uid = () => Math.random().toString(36).slice(2, 10);

const defaultTheme = {
  primary: "#2563EB",
  accent: "#0EA5E9",
  text: "#0F172A",
  background: "#FFFFFF",
  font: "Inter",
};

const darkTheme = { ...defaultTheme, text: "#F8FAFC", background: "#0B1220", primary: "#60A5FA" };

function coverPage(title: string, subtitle: string, size: ProjectPage["size"] = "a4", bg = "#FFFFFF"): ProjectPage {
  const dims = size === "a4" ? { w: 794, h: 1123 } : size === "slide-16-9" ? { w: 1280, h: 720 } : { w: 1080, h: 1080 };
  return {
    id: uid(),
    name: "Cover",
    size,
    background: bg,
    elements: [
      {
        id: uid(), type: "shape", x: 0, y: 0, w: dims.w, h: 8, z: 0,
        props: { shape: "rect", fill: "#2563EB", radius: 0 },
      },
      {
        id: uid(), type: "text", x: 64, y: 96, w: dims.w - 128, h: 28, z: 1,
        props: { text: new Date().toLocaleDateString(undefined, { month: "long", year: "numeric" }).toUpperCase(), size: 12, align: "left", color: "#64748B" },
      },
      {
        id: uid(), type: "heading", x: 64, y: 140, w: dims.w - 128, h: 120, z: 2,
        props: { text: title, level: 1, align: "left" },
      },
      {
        id: uid(), type: "text", x: 64, y: 280, w: dims.w - 128, h: 80, z: 3,
        props: { text: subtitle, size: 18, align: "left", color: "#475569" },
      },
      {
        id: uid(), type: "divider", x: 64, y: 380, w: 120, h: 4, z: 4,
        props: { color: "#2563EB", thickness: 4 },
      },
    ],
  };
}

function summaryPage(size: ProjectPage["size"] = "a4"): ProjectPage {
  const dims = size === "a4" ? { w: 794, h: 1123 } : { w: 1280, h: 720 };
  return {
    id: uid(),
    name: "Executive Summary",
    size,
    background: "#FFFFFF",
    elements: [
      { id: uid(), type: "heading", x: 64, y: 64, w: dims.w - 128, h: 60, z: 1, props: { text: "Executive Summary", level: 2, align: "left" } },
      { id: uid(), type: "text", x: 64, y: 140, w: dims.w - 128, h: 160, z: 2, props: { text: "Provide a concise overview of the key findings, decisions and outcomes covered in this report. Replace this text with your own summary.", size: 16, align: "left", color: "#334155" } },
      { id: uid(), type: "kpi", x: 64, y: 340, w: 210, h: 130, z: 3, props: { label: "Revenue", value: "$2.4M", delta: "+12.4%", trend: "up", accent: "#2563EB" } },
      { id: uid(), type: "kpi", x: 292, y: 340, w: 210, h: 130, z: 4, props: { label: "New Customers", value: "1,284", delta: "+8.1%", trend: "up", accent: "#10B981" } },
      { id: uid(), type: "kpi", x: 520, y: 340, w: 210, h: 130, z: 5, props: { label: "Churn", value: "3.2%", delta: "-0.6%", trend: "down", accent: "#F59E0B" } },
      { id: uid(), type: "chart", x: 64, y: 500, w: dims.w - 128, h: 260, z: 6, props: { title: "Revenue trend", kind: "line" } },
    ],
  };
}

function carouselCover(title: string, kicker: string): ProjectPage {
  return {
    id: uid(), name: "Cover", size: "carousel-1-1", background: "#0B1220",
    elements: [
      { id: uid(), type: "text", x: 80, y: 100, w: 920, h: 40, z: 1, props: { text: kicker.toUpperCase(), size: 20, align: "left", color: "#60A5FA" } },
      { id: uid(), type: "heading", x: 80, y: 200, w: 920, h: 400, z: 2, props: { text: title, level: 1, align: "left", color: "#F8FAFC" } },
      { id: uid(), type: "divider", x: 80, y: 640, w: 120, h: 4, z: 3, props: { color: "#60A5FA", thickness: 4 } },
      { id: uid(), type: "text", x: 80, y: 940, w: 920, h: 40, z: 4, props: { text: "Swipe →", size: 20, align: "left", color: "#94A3B8" } },
      { id: uid(), type: "text", x: 940, y: 940, w: 60, h: 40, z: 5, props: { text: "1", size: 20, align: "right", color: "#94A3B8" } },
    ],
  };
}

function carouselStat(n: number, stat: string, label: string, insight: string): ProjectPage {
  return {
    id: uid(), name: `Slide ${n}`, size: "carousel-1-1", background: "#FFFFFF",
    elements: [
      { id: uid(), type: "text", x: 80, y: 100, w: 920, h: 32, z: 1, props: { text: `INSIGHT ${String(n).padStart(2, "0")}`, size: 18, align: "left", color: "#2563EB" } },
      { id: uid(), type: "heading", x: 80, y: 200, w: 920, h: 200, z: 2, props: { text: stat, level: 1, align: "left", color: "#0F172A" } },
      { id: uid(), type: "text", x: 80, y: 420, w: 920, h: 60, z: 3, props: { text: label, size: 28, align: "left", color: "#475569" } },
      { id: uid(), type: "text", x: 80, y: 560, w: 920, h: 200, z: 4, props: { text: insight, size: 20, align: "left", color: "#334155" } },
      { id: uid(), type: "text", x: 940, y: 940, w: 60, h: 40, z: 5, props: { text: String(n), size: 20, align: "right", color: "#94A3B8" } },
    ],
  };
}

export interface TemplateDef {
  id: ProjectType;
  name: string;
  category: "report" | "carousel" | "presentation";
  description: string;
  accent: string;
  build: () => Omit<Project, "id" | "createdAt" | "updatedAt">;
}

export const TEMPLATES: TemplateDef[] = [
  {
    id: "blank", name: "Blank Report", category: "report", accent: "#64748B",
    description: "Start from an empty A4 page.",
    build: () => ({
      name: "Untitled report", type: "blank", theme: defaultTheme,
      pages: [{ id: uid(), name: "Page 1", size: "a4", background: "#FFFFFF", elements: [] }],
    }),
  },
  {
    id: "executive", name: "Executive Report", category: "report", accent: "#2563EB",
    description: "Board-ready summary with KPIs and highlights.",
    build: () => ({
      name: "Executive Report", type: "executive", theme: defaultTheme,
      pages: [coverPage("Executive Report", "Quarterly highlights, KPIs and strategic outlook."), summaryPage()],
    }),
  },
  {
    id: "business", name: "Business Report", category: "report", accent: "#0EA5E9",
    description: "Operational report with sections and charts.",
    build: () => ({
      name: "Business Report", type: "business", theme: defaultTheme,
      pages: [coverPage("Business Report", "Operational performance and next steps."), summaryPage()],
    }),
  },
  {
    id: "ngo-sitrep", name: "NGO Situation Report", category: "report", accent: "#10B981",
    description: "Situation report for humanitarian and NGO teams.",
    build: () => ({
      name: "Situation Report", type: "ngo-sitrep", theme: defaultTheme,
      pages: [coverPage("Situation Report", "Field update, key indicators and response actions."), summaryPage()],
    }),
  },
  {
    id: "research", name: "Research Report", category: "report", accent: "#7C3AED",
    description: "Methodology, findings and recommendations.",
    build: () => ({
      name: "Research Report", type: "research", theme: defaultTheme,
      pages: [coverPage("Research Report", "Methodology, findings and recommendations."), summaryPage()],
    }),
  },
  {
    id: "monthly", name: "Monthly Report", category: "report", accent: "#F59E0B",
    description: "Monthly performance snapshot.",
    build: () => ({
      name: "Monthly Report", type: "monthly", theme: defaultTheme,
      pages: [coverPage("Monthly Report", "This month at a glance."), summaryPage()],
    }),
  },
  {
    id: "annual", name: "Annual Report", category: "report", accent: "#DC2626",
    description: "Year-in-review report.",
    build: () => ({
      name: "Annual Report", type: "annual", theme: defaultTheme,
      pages: [coverPage("Annual Report", "A full-year review of performance and impact."), summaryPage()],
    }),
  },
  {
    id: "marketing", name: "Marketing Report", category: "report", accent: "#EC4899",
    description: "Campaign performance and channels.",
    build: () => ({
      name: "Marketing Report", type: "marketing", theme: defaultTheme,
      pages: [coverPage("Marketing Report", "Campaign performance, channels and conversions."), summaryPage()],
    }),
  },
  {
    id: "case-study", name: "Case Study", category: "report", accent: "#0891B2",
    description: "Customer or project case study.",
    build: () => ({
      name: "Case Study", type: "case-study", theme: defaultTheme,
      pages: [coverPage("Case Study", "How we delivered measurable impact."), summaryPage()],
    }),
  },
  {
    id: "presentation", name: "Presentation Slides", category: "presentation", accent: "#0F172A",
    description: "16:9 slide deck for a boardroom presentation.",
    build: () => ({
      name: "Presentation", type: "presentation", theme: defaultTheme,
      pages: [coverPage("Quarterly Review", "Q4 highlights and outlook", "slide-16-9"), summaryPage("slide-16-9")],
    }),
  },
  {
    id: "linkedin-carousel", name: "LinkedIn Carousel", category: "carousel", accent: "#0A66C2",
    description: "8-slide data storytelling carousel.",
    build: () => ({
      name: "LinkedIn Carousel", type: "linkedin-carousel", theme: darkTheme,
      pages: [
        carouselCover("5 numbers that reshaped our quarter", "Data story"),
        carouselStat(2, "+42%", "Growth in qualified pipeline", "Outbound experiments launched in July compounded into a record quarter for the sales team."),
        carouselStat(3, "3.2×", "Return on paid channels", "Focused spend on 2 channels lifted ROAS from 1.1× to 3.2× in eight weeks."),
        carouselStat(4, "12 pts", "NPS improvement", "Onboarding redesign moved NPS from 34 to 46 without changing the pricing model."),
      ],
    }),
  },
  {
    id: "instagram-carousel", name: "Instagram Carousel", category: "carousel", accent: "#E1306C",
    description: "4:5 carousel for Instagram feed.",
    build: () => ({
      name: "Instagram Carousel", type: "instagram-carousel", theme: defaultTheme,
      pages: [
        { ...carouselCover("3 shifts we saw in our data", "Insights"), size: "carousel-4-5" },
        { ...carouselStat(2, "68%", "Prefer weekly digests", "Users read the Monday digest more than any other touchpoint."), size: "carousel-4-5" },
        { ...carouselStat(3, "2×", "Faster time-to-insight", "Analysts ship reports in half the time using pre-built templates."), size: "carousel-4-5" },
      ],
    }),
  },
];

export function createProjectFromTemplate(id: ProjectType): Project {
  const t = TEMPLATES.find((x) => x.id === id) ?? TEMPLATES[0];
  const seed = t.build();
  const now = Date.now();
  return { id: uid(), createdAt: now, updatedAt: now, ...seed };
}
