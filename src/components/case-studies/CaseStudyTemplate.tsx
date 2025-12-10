import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useOpenGraphMeta } from "@/hooks/useOpenGraphMeta";

export type MetricRow = { label: string; value: string };
export type Bullet = { title: string; description: string };

export type CaseStudyProps = {
  industry: string;
  title: string;
  subheading: string;
  stakes: string[];
  challenges: string[];
  solutions: Bullet[];
  performanceNote?: string;
  performanceMetrics: MetricRow[];
  buildVsBuy: { internalTitle?: string; internal: string[]; mamutTitle?: string; mamut: string[] };
  miniCaseStudy: { title: string; bullets: string[] };
  cta: { heading: string; subheading: string; primaryText?: string; secondaryText?: string; ctaLink?: string };
  heroImage?: string;
  ogImage?: string;
};

const setCanonical = (url: string) => {
  let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  canonical.href = url;
};

export const CaseStudyTemplate = ({
  industry,
  title,
  subheading,
  stakes,
  challenges,
  solutions,
  performanceNote,
  performanceMetrics,
  buildVsBuy,
  miniCaseStudy,
  cta,
  heroImage = "/lovable-uploads/outbound-hero-professional.png",
  ogImage,
}: CaseStudyProps) => {
  const url = typeof window !== 'undefined' ? window.location.href : '';

  useOpenGraphMeta({
    title,
    description: subheading,
    url,
    image: ogImage || heroImage,
    type: 'article',
    siteName: 'Lead Mamut',
    section: `${industry} Case Study`,
    tags: `${industry}, Outbound, Case Study, Pipeline`,
  });

  useEffect(() => {
    setCanonical(url);

    const ld = document.createElement('script');
    ld.type = 'application/ld+json';
    ld.id = 'ld-case-study';
    ld.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: title,
      description: subheading,
      about: industry,
      author: { "@type": "Organization", name: "Lead Mamut" },
      mainEntityOfPage: url,
    });
    document.head.appendChild(ld);
    return () => {
      document.getElementById('ld-case-study')?.remove();
    };
  }, [title, subheading, industry, url]);

  const handlePrint = () => window.print();
  const ctaLink = cta.ctaLink || 'https://calendly.com/bruno-leadmamut/30min';

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 pt-28 pb-16">
        <article className="max-w-5xl mx-auto">
          {/* Hero */}
          <header className="mb-10">
            <div className="relative overflow-hidden rounded-xl border border-border">
              <img src={heroImage} alt={`${industry} case study hero`} className="w-full h-56 sm:h-64 object-cover" loading="lazy" />
            </div>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight">{title}</h1>
            <p className="mt-3 text-lg text-muted-foreground">{subheading}</p>
            <div className="mt-4 flex gap-3 no-print">
              <Button onClick={() => window.open(ctaLink, '_blank')}>{cta.primaryText || 'Book a 30‑min Discovery'}</Button>
              <Button variant="outline" onClick={handlePrint}>{cta.secondaryText || 'Download PDF'}</Button>
            </div>
          </header>

          {/* Stakes */}
          <section className="page mb-10">
            <h2 className="text-2xl font-semibold">Why {industry} Teams Choose Mamut</h2>
            <ul className="mt-3 list-disc pl-5 space-y-2 text-muted-foreground">
              {stakes.map((s, i) => (<li key={i}>{s}</li>))}
            </ul>
          </section>

          {/* Challenges & Solutions */}
          <section className="grid md:grid-cols-2 gap-6 page mb-10">
            <div className="rounded-xl border border-border p-6 bg-card">
              <h3 className="text-xl font-semibold">Top {industry} Outbound Challenges</h3>
              <ul className="mt-3 list-disc pl-5 space-y-2 text-muted-foreground">
                {challenges.map((c, i) => (<li key={i}>{c}</li>))}
              </ul>
            </div>
            <div className="rounded-xl border border-border p-6 bg-card">
              <h3 className="text-xl font-semibold">How Mamut Solves This</h3>
              <ul className="mt-3 space-y-4">
                {solutions.map((b, i) => (
                  <li key={i}>
                    <p className="font-medium">{b.title}</p>
                    <p className="text-muted-foreground">{b.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Performance */}
          <section className="page mb-10">
            <h3 className="text-xl font-semibold">Performance at Steady State</h3>
            {performanceNote && <p className="text-sm text-muted-foreground mt-1">{performanceNote}</p>}
            <div className="mt-4 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {performanceMetrics.map((m, i) => (
                <div key={i} className="rounded-xl border border-border bg-card p-4 text-center">
                  <div className="text-3xl font-extrabold">{m.value}</div>
                  <div className="text-muted-foreground text-sm">{m.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Build vs Buy */}
          <section className="grid md:grid-cols-2 gap-6 page mb-10">
            <div className="rounded-xl border border-border p-6 bg-card">
              <h3 className="text-xl font-semibold">{buildVsBuy.internalTitle || 'Internal Setup'}</h3>
              <ul className="mt-3 list-disc pl-5 text-muted-foreground space-y-1">
                {buildVsBuy.internal.map((i, idx) => (<li key={idx}>{i}</li>))}
              </ul>
            </div>
            <div className="rounded-xl border border-border p-6 bg-card">
              <h3 className="text-xl font-semibold">{buildVsBuy.mamutTitle || 'Mamut Installation'}</h3>
              <ul className="mt-3 list-disc pl-5 text-muted-foreground space-y-1">
                {buildVsBuy.mamut.map((i, idx) => (<li key={idx}>{i}</li>))}
              </ul>
            </div>
          </section>

          {/* Mini Case Study */}
          <section className="page mb-10">
            <div className="rounded-xl border border-border p-6 bg-card">
              <h3 className="text-xl font-semibold">Mini Case Study</h3>
              <p className="mt-2 text-muted-foreground">{miniCaseStudy.title}</p>
              <ul className="mt-3 list-disc pl-5 text-muted-foreground space-y-2">
                {miniCaseStudy.bullets.map((b, i) => (<li key={i}>{b}</li>))}
              </ul>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center page">
            <h2 className="text-2xl font-bold">{cta.heading}</h2>
            <p className="mt-2 text-muted-foreground">{cta.subheading}</p>
            <div className="mt-4 no-print flex items-center justify-center gap-3">
              <Button onClick={() => window.open(ctaLink, '_blank')}>{cta.primaryText || 'Book a 30‑min Discovery'}</Button>
              <Button variant="outline" onClick={handlePrint}>{cta.secondaryText || 'Download PDF'}</Button>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudyTemplate;
