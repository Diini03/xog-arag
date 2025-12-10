import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useOpenGraphMeta } from "@/hooks/useOpenGraphMeta";
import { CheckCircle2, CalendarDays } from "lucide-react";

const CaseStudiesIndex = () => {
  const url = typeof window !== 'undefined' ? window.location.href : '';
  useOpenGraphMeta({
    title: "Lead Mamut | Case Studies",
    description: "Real outcomes across SaaS, Healthcare, Financial Services, Staffing, and Software Consultancies.",
    url,
    type: "website",
    siteName: "Lead Mamut",
    section: "Case Studies",
  });

  useEffect(() => {
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;
  }, [url]);

  const studies = [
    { title: "SaaS: 30‑Day Pipeline Surge", to: "/case-studies/saas-30-day-pipeline", summary: "$250K in 4 weeks, 75% show rate, –30% CAC." },
    { title: "Healthcare: Compliance‑Safe Outreach", to: "/case-studies/healthcare-compliance-outreach", summary: "$210K by Week 6 across clinical ops and security." },
    { title: "Financial Services: Trust‑First Enterprise", to: "/case-studies/finserv-trust-first-outbound", summary: "$280K by Week 6, CFO/CCO threading." },
    { title: "Staffing: Role‑Based Outbound at Scale", to: "/case-studies/staffing-role-based-outbound", summary: "$180K by Week 5, 74% intake show rate." },
    { title: "Consultancies: Initiative‑Led Access", to: "/case-studies/consultancies-initiative-led-outbound", summary: "$260K by Week 6, faster cycles." },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 pt-28 pb-16 max-w-5xl">
        <header className="mb-8">
          <h1 className="text-4xl font-extrabold tracking-tight">Case Studies</h1>
          <p className="mt-3 text-muted-foreground">Proof across industries—designed, installed, and managed by Mamut.</p>
        </header>

        <section className="grid gap-6 sm:grid-cols-2">
          {studies.map((s) => (
            <Link key={s.to} to={s.to} className="rounded-xl border border-border bg-card p-6 hover:shadow transition">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-primary" />
                <div>
                  <h2 className="text-lg font-semibold">{s.title}</h2>
                  <p className="text-muted-foreground mt-1">{s.summary}</p>
                  <div className="mt-2 text-sm text-muted-foreground flex items-center gap-2">
                    <CalendarDays /> <span>Read case study</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </section>

        <div className="mt-10 text-center">
          <Button onClick={() => window.open('https://calendly.com/bruno-leadmamut/30min','_blank')}>Book a 30‑min Discovery</Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudiesIndex;
