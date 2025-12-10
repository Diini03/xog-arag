import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

export type Metric = { label: string; value: string };
export type Bullet = { title: string; description: string };

export type IndustryContent = {
  industry: string;
  headline?: string;
  subheading?: string;
  complianceNotes?: string[];
  painPoints: string[];
  solutionBullets: Bullet[];
  metrics: Metric[];
  pricingComparison?: { internal: string[]; mamut: string[] };
  ctaLink?: string;
};

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
  // canonical
  let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.rel = "canonical";
    document.head.appendChild(canonical);
  }
  canonical.href = window.location.href;
};

export const IndustryOnePager = ({
  industry,
  headline,
  subheading,
  complianceNotes = [],
  painPoints,
  solutionBullets,
  metrics,
  pricingComparison,
  ctaLink = "https://calendly.com/bruno-leadmamut/30min",
}: IndustryContent) => {
  useEffect(() => {
    setSEO(
      `Lead Mamut | ${industry} Outbound Sales One-Pager`,
      `${industry} outbound sales system: 7-day installation, 60% lower cost, predictable pipeline with AI-enhanced BDR teams.`
    );
  }, [industry]);

  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-white print:bg-white">
      {/* Print styles */}
      <style>{`
        @media print {
          header, footer, nav, .no-print { display: none !important; }
          main { padding: 0 !important; }
          .page { page-break-inside: avoid; }
        }
      `}</style>

      <Header />

      <main className="container mx-auto px-4 pt-28 pb-16">
        <article className="max-w-5xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
              {headline || `Outbound Sales System for ${industry}`}
            </h1>
            <p className="mt-3 text-lg text-gray-700">
              {subheading ||
                "We install a complete outbound engine in 7 days: compliant data, smart targeting, AI-personalized outreach, and accountable BDR teams managed for outcomes."}
            </p>
            <div className="mt-4 flex gap-3 no-print">
              <Button onClick={handlePrint} className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white">Download PDF</Button>
              <Button variant="outline" onClick={() => window.open(ctaLink, "_blank")}>Book a 30‑min Discovery</Button>
            </div>
          </header>

          {/* Pain points vs solution */}
          <section className="grid md:grid-cols-2 gap-6 page mb-10">
            <div className="rounded-lg border border-gray-200 p-6 bg-white">
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Top {industry} Challenges</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {painPoints.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border border-gray-200 p-6 bg-orange-50">
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">How Mamut Solves This</h2>
              <ul className="space-y-4">
                {solutionBullets.map((b, i) => (
                  <li key={i} className="">
                    <p className="font-medium text-gray-900">{b.title}</p>
                    <p className="text-gray-700">{b.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Compliance */}
          {complianceNotes.length > 0 && (
            <section className="page mb-10">
              <div className="rounded-lg border border-gray-200 p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">Compliance & Data Governance</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {complianceNotes.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          {/* Metrics */}
          <section className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 page mb-10">
            {metrics.map((m, i) => (
              <div key={i} className="rounded-lg border border-gray-200 p-4 text-center bg-white">
                <div className="text-3xl font-extrabold text-gray-900">{m.value}</div>
                <div className="text-sm text-gray-600">{m.label}</div>
              </div>
            ))}
          </section>

          {/* Pricing Comparison */}
          {pricingComparison && (
            <section className="grid md:grid-cols-2 gap-6 page mb-10">
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Build Internal Team</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {pricingComparison.internal.map((i, idx) => (
                    <li key={idx}>{i}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg border border-gray-200 p-6 bg-orange-50">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Mamut Installation</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {pricingComparison.mamut.map((i, idx) => (
                    <li key={idx}>{i}</li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          {/* CTA */}
          <section className="text-center page">
            <h2 className="text-2xl font-bold text-gray-900">Install Your {industry} Outbound System in 7 Days</h2>
            <p className="mt-2 text-gray-700">Fixed monthly pricing, transparent reporting, and pipeline you can forecast.</p>
            <div className="mt-4 no-print">
              <Button className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white" onClick={() => window.open(ctaLink, "_blank")}>
                Book Your Installation
              </Button>
            </div>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default IndustryOnePager;
