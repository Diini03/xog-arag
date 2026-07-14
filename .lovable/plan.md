
# InsightFlow — Phase 1 Build Plan

Replaces the existing Mamut marketing site with a production-quality BI SaaS foundation. Analytics, Reports, Visualizations, AI Insights (full), Dashboards builder, and Command Palette are staged for Phase 2 so Phase 1 stays shippable and polished.

## Stack (adapted to Lovable)

- Frontend: React + TypeScript + Vite + TailwindCSS + shadcn/ui + TanStack Query + TanStack Table + Framer Motion + Recharts, Inter font
- Backend: **Lovable Cloud** (Postgres + Auth + Storage + Edge Functions in TypeScript/Deno) — replaces the FastAPI/SQLite stack from the brief
- CSV/Excel parsing: PapaParse + SheetJS (client-side, streamed for large files)
- AI Insights: Lovable AI Gateway (`google/gemini-3-flash-preview`)
- JWT: handled by Cloud auth (Supabase GoTrue) — no custom JWT layer

## Phase 1 scope (this build)

1. **Cleanup** — delete all Mamut pages/components (`Hero`, `Services`, `About`, `FAQ`, `ROICalculator`, `Contact`, `Chatbot`, `CookieBanner`, `SeriesATimeTrap`, `Testimonials`, `Header`, `Footer`, `SocialShare`, `FloatingContactButton`, and every file under `src/components/blog`, `src/components/case-studies`, `src/components/onepagers`, `src/pages/blog`, `src/pages/case-studies`, `src/pages/onepagers`, plus `CaptainComplianceCaseStudy`, `IntegrationGuide`, `OnePager`, `PrivacyPolicy`, `Blog`). Rewrite `App.tsx`, `index.css`, `tailwind.config.ts`, `index.html`, `public/sitemap.xml`, `public/robots.txt`, `public/llms.txt` for InsightFlow.

2. **Design system** — Inter font, 16px radius, `--primary` `#2563EB`, `--secondary` `#0F172A`, `--background` `#F8FAFC`, semantic tokens for card/border/muted/success/warning/destructive, full dark mode, elevation shadows, skeleton shimmer, `tailwindcss-animate` transitions.

3. **Landing page** (`/`)
   - Sticky nav, hero ("Business intelligence made simple." + CTAs "Start Free" / "View Demo")
   - Features grid (Interactive dashboards, Advanced filtering, Report generation, Business insights, Forecasting)
   - Animated dashboard preview mockup
   - Testimonials, 3-tier pricing (Starter / Pro / Enterprise), FAQ accordion, footer

4. **Auth** (`/login`, `/register`) — Cloud email+password + Google. Protected-route wrapper, session listener, redirect to `/dashboard`. **User profile table required** (name, avatar, plan) via trigger on `auth.users`.

5. **App shell** — collapsible shadcn sidebar (Dashboard, Datasets, Analytics, Reports, Dashboards, Visualizations, Notifications, Settings), top bar with search input, notification bell, avatar menu, theme toggle. Phase-2 items render "Coming soon" empty states.

6. **Main Dashboard** (`/dashboard`) — 10 KPI cards (Total Revenue, Total Profit, Orders, Customers, Growth %, AOV, Monthly Revenue, Top Product, Top Region, Sales Forecast) computed from the user's most recent dataset (or realistic seed data if none). Revenue trend line chart, category bar chart, Recent uploads, Recent reports, Quick actions. Skeleton loaders throughout.

7. **Datasets** (`/datasets`) — TanStack Table list (name, rows, columns, size, uploaded_at, quality score), search, delete, virtualized rows. Empty state with upload CTA.

8. **Upload flow** (`/datasets/new`) — drag & drop CSV/Excel (react-dropzone), client-side parse via PapaParse/SheetJS, column + data-type detection (number/date/string/boolean), first-50-row preview table, validation errors, save to Cloud (metadata row in `datasets`, raw file in Storage bucket, parsed rows in `dataset_rows` as JSONB batches).

9. **Dataset Details** (`/datasets/:id`) — profile stats (rows, columns, missing %, duplicates, memory, quality score 0–100), per-column stats card (type, unique, nulls, min/max/mean/median for numeric, top values for categorical), preview table, **AI-generated executive summary** via edge function `generate-insights` calling Lovable AI Gateway.

10. **Notifications** (`/notifications`) — list from `notifications` table (dataset uploaded, insight ready). Bell shows unread count. Realtime subscription.

11. **Settings & Profile** (`/settings`, `/profile`) — update name/avatar (Cloud Storage), theme, sign out.

12. **UX polish** — Framer Motion page transitions, skeleton loaders, toast notifications (sonner), empty states with illustrations, keyboard-friendly focus rings, ARIA labels.

## Database (Lovable Cloud migration)

```text
profiles(id uuid pk → auth.users, full_name, avatar_url, plan text default 'free', created_at)
datasets(id uuid pk, user_id uuid, name, description, file_path, row_count, column_count,
         columns jsonb, quality_score numeric, size_bytes, created_at)
dataset_rows(id bigserial pk, dataset_id uuid, batch_index int, rows jsonb)
reports(id uuid pk, user_id, dataset_id, title, config jsonb, created_at)   -- schema now, UI Phase 2
dashboards(id uuid pk, user_id, name, layout jsonb, created_at)              -- schema now, UI Phase 2
charts(id uuid pk, dashboard_id, chart_type, configuration jsonb)            -- schema now, UI Phase 2
notifications(id uuid pk, user_id, type, title, body, read boolean, created_at)
insights(id uuid pk, dataset_id, kind, content text, created_at)             -- AI summaries cache
```

RLS on every table: owner-only via `auth.uid() = user_id` (and `dataset_rows`/`charts` join through parent). GRANTs to `authenticated` + `service_role`. Trigger `handle_new_user()` seeds `profiles`. Storage bucket `datasets` (private) with per-user path policies.

## Edge Functions

- `generate-insights` — takes `dataset_id`, loads column stats + sample rows, calls Lovable AI Gateway (`google/gemini-3-flash-preview`) with a structured prompt, stores result in `insights`, inserts a `notifications` row. Uses the AI SDK gateway helper from `ai-sdk-lovable-gateway`.

## Folder structure

```text
src/
  components/
    ui/                    (shadcn)
    layout/                (AppShell, Sidebar, Topbar)
    landing/               (Hero, Features, Testimonials, Pricing, FAQ, Footer)
    dashboard/             (KpiCard, RevenueChart, RecentUploads, QuickActions)
    datasets/              (UploadDropzone, PreviewTable, ColumnStats, QualityScore)
    common/                (Skeletons, EmptyState, PageHeader, ThemeToggle)
  pages/
    Landing.tsx, Login.tsx, Register.tsx,
    Dashboard.tsx, Datasets.tsx, DatasetNew.tsx, DatasetDetails.tsx,
    Analytics.tsx, Reports.tsx, Dashboards.tsx, Visualizations.tsx,
    Notifications.tsx, Settings.tsx, Profile.tsx, NotFound.tsx
  hooks/     (useAuth, useDatasets, useDataset, useProfile, useTheme)
  services/  (datasets.ts, insights.ts, storage.ts)
  lib/       (parse-csv.ts, parse-xlsx.ts, profile-dataset.ts, format.ts, utils.ts)
  types/     (dataset.ts, api.ts)
supabase/
  migrations/<timestamp>_init.sql
  functions/generate-insights/index.ts
  functions/_shared/ai-gateway.ts
```

## Explicitly deferred to Phase 2

Full Analytics module (Pareto, RFM, YoY, cohorts), Report Builder + PDF/PNG export, drag-and-drop Dashboards builder, Visualization playground (heatmap/treemap/bubble/pivot), advanced filter system + saved filters, command palette, forecasting model, deep AI Insights (per-chart explainers, anomaly detection). Sidebar routes for these render polished "Coming soon" states so navigation stays complete.

## Deliverable at end of Phase 1

Signed-in user can: land on marketing site → register → upload a CSV/Excel → see it profiled with AI-generated executive summary → view KPI dashboard driven by their data → manage profile/settings. Fully themed light/dark, responsive, accessible, with skeletons, empty states, and error handling throughout.
