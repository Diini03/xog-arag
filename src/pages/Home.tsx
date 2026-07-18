import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import { motion } from "framer-motion";
import {
  FileText, LayoutGrid, Presentation, Sparkles, Plus, Upload, Copy, Trash2, Search,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LogoMark } from "@/components/common/Logo";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { useProjects, projectStore } from "@/lib/projects/store";
import { TEMPLATES } from "@/lib/projects/templates";
import { PAGE_SIZES, ProjectType } from "@/lib/projects/types";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";

const CATEGORY_LABELS: Record<string, string> = {
  report: "Reports",
  presentation: "Presentations",
  carousel: "Social carousels",
};

const CATEGORY_ICONS: Record<string, any> = {
  report: FileText,
  presentation: Presentation,
  carousel: LayoutGrid,
};

export default function Home() {
  const projects = useProjects();
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const [q, setQ] = useState("");
  const [category, setCategory] = useState<"all" | "report" | "presentation" | "carousel">("all");

  const filteredTemplates = useMemo(
    () =>
      TEMPLATES.filter(
        (t) =>
          (category === "all" || t.category === category) &&
          (q.trim() === "" || t.name.toLowerCase().includes(q.toLowerCase())),
      ),
    [q, category],
  );

  const recent = useMemo(() => [...projects].sort((a, b) => b.updatedAt - a.updatedAt).slice(0, 8), [projects]);

  const createFrom = (type: ProjectType) => {
    const p = projectStore.createFromTemplate(type);
    navigate(`/editor/${p.id}`);
  };

  return (
    <div className="min-h-dvh flex flex-col bg-background">
      {/* Top bar */}
      <header className="h-14 shrink-0 border-b bg-background/80 backdrop-blur sticky top-0 z-20">
        <div className="max-w-[1400px] mx-auto h-full px-6 flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2.5">
            <LogoMark size={26} />
            <span className="text-[14px] font-semibold tracking-tight">
              Xog<span className="text-primary">Arag</span>
            </span>
          </Link>

          <div className="relative flex-1 max-w-md mx-auto">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
            <Input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search templates, projects…"
              className="pl-8 h-8 bg-muted/60 border-0 text-[12.5px] focus-visible:ring-1"
            />
          </div>

          <div className="flex items-center gap-1">
            <ThemeToggle />
            {user ? (
              <Button size="sm" variant="ghost" className="h-8" onClick={() => signOut()}>Sign out</Button>
            ) : (
              <Button size="sm" variant="ghost" className="h-8" asChild><Link to="/login">Sign in</Link></Button>
            )}
          </div>
        </div>
      </header>

      <main className="flex-1">
        <div className="max-w-[1400px] mx-auto px-6 py-10 space-y-14">
          {/* Hero row */}
          <section className="flex items-end justify-between gap-8 flex-wrap">
            <div className="max-w-xl">
              <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary mb-3">
                Data storytelling studio
              </div>
              <h1 className="text-[34px] leading-[1.05] font-semibold tracking-tight">
                Turn your analysis into <span className="text-gradient">beautiful reports</span> and social stories.
              </h1>
              <p className="mt-3 text-[15px] text-muted-foreground">
                XogArag picks up where NadiifiData leaves off. Bring your charts, KPIs and insights, and design executive reports, presentations and LinkedIn carousels in minutes.
              </p>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              <Button size="lg" className="h-11 gap-2 shadow-glow" onClick={() => createFrom("blank")}>
                <Plus className="h-4 w-4" /> New blank report
              </Button>
              <Button size="lg" variant="outline" className="h-11 gap-2" onClick={() => toast.info("Import is coming in the next phase")}>
                <Upload className="h-4 w-4" /> Import charts
              </Button>
            </div>
          </section>

          {/* Recent */}
          {recent.length > 0 && (
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-[13px] font-semibold uppercase tracking-wider text-muted-foreground/80">Recent projects</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {recent.map((p) => (
                  <RecentCard key={p.id} project={p} />
                ))}
              </div>
            </section>
          )}

          {/* Templates */}
          <section>
            <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
              <h2 className="text-[13px] font-semibold uppercase tracking-wider text-muted-foreground/80">Start from a template</h2>
              <div className="flex items-center gap-1 rounded-full border p-0.5 bg-card">
                {(["all", "report", "presentation", "carousel"] as const).map((c) => (
                  <button
                    key={c}
                    onClick={() => setCategory(c)}
                    className={cn(
                      "px-3 h-7 rounded-full text-[12px] font-medium transition-colors",
                      category === c ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {c === "all" ? "All" : CATEGORY_LABELS[c]}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredTemplates.map((t, idx) => (
                <motion.button
                  key={t.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.18, delay: idx * 0.02 }}
                  onClick={() => createFrom(t.id)}
                  className="group text-left rounded-2xl border bg-card hover:shadow-elevated transition-all overflow-hidden"
                >
                  <div className="aspect-[4/3] relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${t.accent}18, ${t.accent}04)` }}>
                    <TemplatePreview accent={t.accent} category={t.category} />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-background/60 backdrop-blur-sm transition-opacity flex items-center justify-center">
                      <div className="inline-flex items-center gap-1.5 px-3 h-8 rounded-full bg-primary text-primary-foreground text-[12px] font-medium shadow-md">
                        <Plus className="h-3.5 w-3.5" /> Use this template
                      </div>
                    </div>
                  </div>
                  <div className="p-3.5">
                    <div className="flex items-center gap-1.5 mb-1">
                      {(() => {
                        const Icon = CATEGORY_ICONS[t.category];
                        return <Icon className="h-3 w-3 text-muted-foreground" />;
                      })()}
                      <span className="text-[10.5px] uppercase tracking-wider text-muted-foreground/80 font-semibold">
                        {CATEGORY_LABELS[t.category]}
                      </span>
                    </div>
                    <div className="text-[13.5px] font-semibold">{t.name}</div>
                    <div className="text-[12px] text-muted-foreground line-clamp-1">{t.description}</div>
                  </div>
                </motion.button>
              ))}
            </div>
          </section>

          {/* Empty state hint */}
          {recent.length === 0 && (
            <section className="rounded-2xl border bg-gradient-hero p-8 text-center">
              <Sparkles className="h-6 w-6 mx-auto text-primary mb-2" />
              <div className="text-[15px] font-medium">Your workspace is ready.</div>
              <p className="text-[13px] text-muted-foreground mt-1">Pick a template above or start with a blank report — everything saves locally, and cloud sync unlocks after sign in.</p>
            </section>
          )}
        </div>
      </main>

      <footer className="border-t">
        <div className="max-w-[1400px] mx-auto px-6 py-5 flex items-center justify-between text-[12px] text-muted-foreground">
          <span>XogArag · Data storytelling & report builder</span>
          <span>Best paired with NadiifiData</span>
        </div>
      </footer>
    </div>
  );
}

function RecentCard({ project }: { project: ReturnType<typeof useProjects>[number] }) {
  const first = project.pages[0];
  const dims = first ? PAGE_SIZES[first.size] : { w: 400, h: 300 };
  return (
    <div className="group rounded-2xl border bg-card overflow-hidden hover:shadow-elevated transition-all">
      <Link to={`/editor/${project.id}`} className="block">
        <div className="aspect-[4/3] relative bg-muted overflow-hidden">
          <div
            className="absolute top-1/2 left-1/2 shadow-md"
            style={{
              width: dims.w,
              height: dims.h,
              transform: `translate(-50%, -50%) scale(${Math.min(280 / dims.w, 220 / dims.h)})`,
              background: first?.background ?? "#fff",
              transformOrigin: "center center",
            }}
          >
            {first?.elements.slice(0, 12).map((el) => (
              <div key={el.id} className="absolute" style={{ left: el.x, top: el.y, width: el.w, height: el.h, background: el.type === "shape" ? (el as any).props.fill : "transparent" }} />
            ))}
          </div>
          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
            <button
              onClick={(e) => { e.preventDefault(); projectStore.duplicate(project.id); }}
              className="h-7 w-7 rounded-md bg-background/80 backdrop-blur border flex items-center justify-center hover:bg-background"
              aria-label="Duplicate"
            ><Copy className="h-3 w-3" /></button>
            <button
              onClick={(e) => { e.preventDefault(); if (confirm("Delete this project?")) projectStore.remove(project.id); }}
              className="h-7 w-7 rounded-md bg-background/80 backdrop-blur border flex items-center justify-center hover:bg-background text-destructive"
              aria-label="Delete"
            ><Trash2 className="h-3 w-3" /></button>
          </div>
        </div>
      </Link>
      <div className="p-3.5">
        <Link to={`/editor/${project.id}`} className="flex items-center justify-between gap-2 group/link">
          <div className="min-w-0">
            <div className="text-[13.5px] font-medium truncate">{project.name}</div>
            <div className="text-[11.5px] text-muted-foreground">
              {project.pages.length} page{project.pages.length === 1 ? "" : "s"} · Edited {formatDistanceToNow(project.updatedAt, { addSuffix: true })}
            </div>
          </div>
          <ArrowUpRight className="h-4 w-4 text-muted-foreground shrink-0 group-hover/link:text-primary transition-colors" />
        </Link>
      </div>
    </div>
  );
}

function TemplatePreview({ accent, category }: { accent: string; category: string }) {
  if (category === "carousel") {
    return (
      <div className="absolute inset-0 flex items-center justify-center gap-2 p-4">
        {[0, 1, 2].map((i) => (
          <div key={i} className="aspect-square h-full max-h-[70%] rounded-md shadow-sm relative overflow-hidden" style={{ background: i === 0 ? accent : "#fff", border: "1px solid rgba(15,23,42,0.08)" }}>
            <div className="absolute inset-3 flex flex-col justify-between">
              <div className="h-1 w-1/3 rounded-full" style={{ background: i === 0 ? "rgba(255,255,255,0.5)" : accent }} />
              <div className="space-y-1">
                <div className="h-2 rounded-full" style={{ background: i === 0 ? "#fff" : "#0F172A", width: "70%" }} />
                <div className="h-1.5 rounded-full" style={{ background: i === 0 ? "rgba(255,255,255,0.6)" : "#94A3B8", width: "50%" }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  if (category === "presentation") {
    return (
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="w-full aspect-video rounded-md shadow-md relative overflow-hidden" style={{ background: "#fff", border: "1px solid rgba(15,23,42,0.08)" }}>
          <div className="absolute top-0 left-0 h-1 w-full" style={{ background: accent }} />
          <div className="absolute inset-5 flex flex-col justify-center gap-1.5">
            <div className="h-2 w-16 rounded-full" style={{ background: accent }} />
            <div className="h-3 w-3/4 rounded-full bg-foreground/80" />
            <div className="h-2 w-1/2 rounded-full bg-muted-foreground/40" />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="absolute inset-0 flex items-center justify-center p-4">
      <div className="h-full aspect-[3/4] rounded-md shadow-md relative overflow-hidden" style={{ background: "#fff", border: "1px solid rgba(15,23,42,0.08)" }}>
        <div className="absolute top-0 left-0 h-1 w-full" style={{ background: accent }} />
        <div className="absolute inset-3 flex flex-col gap-1.5">
          <div className="h-1.5 w-8 rounded-full" style={{ background: accent }} />
          <div className="h-2.5 w-3/4 rounded-full bg-foreground/80" />
          <div className="h-1.5 w-1/2 rounded-full bg-muted-foreground/40" />
          <div className="flex-1" />
          <div className="grid grid-cols-3 gap-1">
            <div className="h-5 rounded" style={{ background: `${accent}22` }} />
            <div className="h-5 rounded" style={{ background: `${accent}22` }} />
            <div className="h-5 rounded" style={{ background: `${accent}22` }} />
          </div>
          <div className="h-6 rounded" style={{ background: `${accent}12` }} />
        </div>
      </div>
    </div>
  );
}
