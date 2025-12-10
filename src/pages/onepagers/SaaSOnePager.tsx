import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CalendarDays, CheckCircle2, BarChart3, Gauge, LineChart, Users, TrendingUp } from "lucide-react";
import heroImg from "@/assets/outbound-playbook-hero.jpg";
import frameworkImg from "@/assets/outbound-math-framework.jpg";

const setSEO = (title: string, description: string) => {
  document.title = title;
  const desc = document.querySelector('meta[name="description"]');
  if (desc) {
    desc.setAttribute("content", description);
  } else {
    const m = document.createElement("meta");
    m.name = "description";
    m.content = description;
    document.head.appendChild(m);
  }
  let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.rel = "canonical";
    document.head.appendChild(canonical);
  }
  canonical.href = window.location.href;

  // Structured data (Service)
  const existingLd = document.getElementById("ld-service");
  existingLd?.remove();
  const ld = document.createElement("script");
  ld.type = "application/ld+json";
  ld.id = "ld-service";
  ld.text = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    name: "SaaS Outbound Installation",
    provider: { "@type": "Organization", name: "Lead Mamut" },
    areaServed: "Global",
    serviceType: "Outbound Sales as a System",
    description,
  });
  document.head.appendChild(ld);
};

const SaaSOnePager = () => {
  useEffect(() => {
    setSEO(
      "Lead Mamut | SaaS Outbound One-Pager",
      "Drive $200K+ pipeline in 30 days with a SaaS outbound system: PQL+ICP scoring, persona messaging, demo engine, and revenue reporting."
    );
  }, []);

  const handlePrint = () => window.print();
  const ctaLink = "https://calendly.com/bruno-leadmamut/30min";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="container mx-auto px-4 pt-28 pb-16">
        {/* Hero */}
        <section className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-primary/10 via-accent/20 to-transparent">
          <div className="grid md:grid-cols-2 gap-8 items-center p-8 md:p-12">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                Drive $200K+ in Pipeline in Just 30 Days with SaaS Outbound That Works
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Outcomes first. Installation to measurable results in under 30 days.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button onClick={() => window.open(ctaLink, "_blank")}>
                  Book a 30‑min Discovery
                </Button>
                <Button variant="outline" onClick={handlePrint}>Download PDF</Button>
              </div>
              <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2"><TrendingUp className="opacity-80" /> <span>7‑day install</span></div>
                <div className="flex items-center gap-2"><CalendarDays className="opacity-80" /> <span>Demos in week 1</span></div>
                <div className="flex items-center gap-2"><Gauge className="opacity-80" /> <span>Clear SLAs</span></div>
              </div>
            </div>
            <div className="relative">
              <img
                src={heroImg}
                alt="SaaS outbound hero graphic showcasing growth metrics"
                className="w-full rounded-xl shadow-xl"
                loading="eager"
              />
              <div className="pointer-events-none absolute -bottom-8 -right-8 hidden md:block h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
            </div>
          </div>
        </section>

        {/* Stakes */}
        <section className="mt-12 grid md:grid-cols-5 gap-6 items-center">
          <div className="md:col-span-3 rounded-xl border border-border p-6 bg-card">
            <h2 className="text-2xl font-semibold">Why Outbound Still Wins</h2>
            <p className="mt-3 text-muted-foreground">
              Inbound growth is stalling—content noise and SEO saturation make it hard to attract the right fits. Outbound remains the most controllable, direct, and cost‑effective way to reach high‑intent buyers right now.
            </p>
            <div className="mt-4 flex gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><LineChart /> <span>Direct pipeline control</span></div>
              <div className="flex items-center gap-2"><Users /> <span>Target ideal buyers</span></div>
              <div className="flex items-center gap-2"><BarChart3 /> <span>Trackable ROI</span></div>
            </div>
          </div>
          <div className="md:col-span-2">
            <img
              src={frameworkImg}
              alt="Outbound math framework visualization"
              className="w-full rounded-xl border border-border"
              loading="lazy"
            />
          </div>
        </section>

        {/* Challenges */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Top SaaS Outbound Challenges</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Inbound fatigue",
                desc: "Leads are fewer and lower quality—resulting in pipeline shortfalls.",
              },
              {
                title: "BDR ramp time",
                desc: "Long onboarding and inconsistent rep performance slow growth.",
              },
              {
                title: "Disparate data",
                desc: "No unified view means lost opportunities and poor prioritization.",
              },
            ].map((c) => (
              <div key={c.title} className="rounded-xl border border-border bg-card p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary" />
                  <div>
                    <h3 className="font-semibold">{c.title}</h3>
                    <p className="text-muted-foreground mt-1">{c.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Mamut Solution */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Mamut’s Solution (Narrative + Proof)</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {[ 
              { title: "PQL + ICP Scoring", desc: "Leverage product usage, firmographics, and intent signals to pinpoint accounts ready to buy or expand." },
              { title: "Persona-Outcome Messaging", desc: "Customize messaging for each role—show how Mamut fixes their pain faster than they expect." },
              { title: "Demo Engine", desc: "Calendar-first outreach paired with SDR handoffs boosts show-up rates—getting buy‑in faster." },
              { title: "Revenue Reporting", desc: "Weekly dashboards tracking SQLs, pipeline, ACV by segment, and test findings—so execs always know what’s working." },
            ].map((b) => (
              <div key={b.title} className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-semibold">{b.title}</h3>
                <p className="text-muted-foreground mt-1">{b.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            These are not just tactics—they form a repeatable system that goes from installation to measurable results in less than 30 days.
          </p>
        </section>

        {/* Performance */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Performance at a Glance</h2>
          <p className="text-sm text-muted-foreground">Based on 6‑month average across clients</p>
          <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Meetings per month", value: "18–35" },
              { label: "Demo show rate", value: "72%" },
              { label: "Pipeline created/mo", value: "$180K–$420K" },
              { label: "CAC reduction", value: "–28%" },
            ].map((m) => (
              <div key={m.label} className="rounded-xl border border-border bg-card p-5 text-center">
                <div className="text-3xl font-extrabold">{m.value}</div>
                <div className="text-muted-foreground text-sm">{m.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Build vs Buy */}
        <section className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="text-xl font-semibold">Build Internal Team</h3>
            <ul className="mt-3 list-disc pl-5 text-muted-foreground space-y-1">
              <li>Team: 3 BDRs + Manager + RevOps + Tech Stack</li>
              <li>Cost: $35K–$45K/month</li>
              <li>Ramp: 2–3 months + high ops overhead</li>
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-secondary p-6">
            <h3 className="text-xl font-semibold">Mamut Installation</h3>
            <ul className="mt-3 list-disc pl-5 text-foreground space-y-1">
              <li>Price: $9.8K–$12.5K/month</li>
              <li>Installed in 7 days, with demos starting in week 1</li>
              <li>Meets SLAs, managed outcomes, and transparent reporting</li>
            </ul>
            <p className="mt-3 text-sm text-muted-foreground">
              Choosing Mamut means faster pipeline growth, lower cost, and zero hiring headaches.
            </p>
          </div>
        </section>

        {/* Mini Case Study */}
        <section className="mt-12">
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <h3 className="text-xl font-semibold">Mini Case Study (Anonymized)</h3>
            <div className="mt-4 grid md:grid-cols-2 gap-6 items-center">
              <div>
                <p className="text-muted-foreground">
                  A mid‑market SaaS platform partnered with Mamut and saw:
                </p>
                <ul className="mt-3 space-y-2">
                  <li className="flex items-start gap-2"><CheckCircle2 className="text-primary shrink-0" /> <span>$250K in pipeline within 4 weeks (up from $70K)</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="text-primary shrink-0" /> <span>Demo show rate spiked to 75%</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="text-primary shrink-0" /> <span>CAC dropped by 30%, validating the investment</span></li>
                </ul>
              </div>
              <div>
                <img src={heroImg} alt="Case study visuals for SaaS outbound" className="w-full rounded-xl border border-border" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">Install Your SaaS Outbound System in 7 Days</h2>
          <p className="mt-2 text-muted-foreground">Fixed monthly pricing. Clear SLAs. Predictable pipeline growth.</p>
          <div className="mt-4 flex items-center justify-center gap-3">
            <Button onClick={() => window.open(ctaLink, "_blank")}>Book a 30‑min Discovery</Button>
            <Button variant="outline" onClick={handlePrint}>Download PDF</Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SaaSOnePager;
