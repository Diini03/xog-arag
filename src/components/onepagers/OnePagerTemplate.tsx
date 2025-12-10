import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useOpenGraphMeta } from "@/hooks/useOpenGraphMeta";
import { GoogleMapsLatinAmerica } from "./GoogleMapsLatinAmerica";

export type MetricRow = { label: string; value: string };
export type Bullet = { title: string; description: string };

export type OnePagerProps = {
  industry: string;
  title: string;
  subheading: string;
  stakes: string[];
  challenges: string[];
  solutions: Bullet[];
  performanceNote?: string;
  performanceMetrics: MetricRow[];
  buildVsBuy: { internal: string[]; mamut: string[]; internalTitle?: string; mamutTitle?: string };
  caseStudy: { title: string; bullets: string[]; link?: string; linkLabel?: string };
  cta: { heading: string; subheading: string; primaryText?: string; secondaryText?: string; ctaLink?: string };
  heroImage?: string;
  ogImage?: string;
};

export const OnePagerTemplate = ({
  industry,
  title,
  subheading,
  stakes,
  challenges,
  solutions,
  performanceNote,
  performanceMetrics,
  buildVsBuy,
  caseStudy,
  cta,
  heroImage = "/lovable-uploads/outbound-hero-professional.png",
  ogImage,
}: OnePagerProps) => {
  const pageTitle = `${title}`;
  const description = subheading;
  const url = typeof window !== "undefined" ? window.location.href : "";

  useOpenGraphMeta({
    title: pageTitle,
    description,
    image: ogImage || heroImage,
    url,
    type: "website",
    siteName: "Lead Mamut",
    section: industry,
    tags: `${industry}, Outbound, BDR, Pipeline`,
  });

  useEffect(() => {
    // Canonical tag
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    // Structured data (Service)
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      name: `${industry} Outbound Sales System`,
      provider: {
        "@type": "Organization",
        name: "Lead Mamut",
        url: "https://leadmamut.com"
      },
      areaServed: "Global",
      serviceType: "Outbound Sales",
      description,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Outbound Installation",
        itemListElement: [
          { "@type": "Offer", name: "Install in 7 days" },
          { "@type": "Offer", name: "Managed BDR pod" }
        ]
      }
    });
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, [industry, description, url]);

  const handlePrint = () => window.print();
  const ctaLink = cta.ctaLink || "https://calendly.com/bruno-leadmamut/30min";

  return (
    <div className="min-h-screen bg-white print:bg-white">
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
          {/* Hero */}
          <header className="mb-10">
            <div className="relative overflow-hidden rounded-xl border border-gray-200">
              <img
                src={heroImage}
                alt={`${industry} outbound system hero`}
                loading="lazy"
                className="w-full h-56 sm:h-64 object-cover"
              />
            </div>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900">{title}</h1>
            <p className="mt-3 text-lg text-gray-700">{subheading}</p>
            <div className="mt-4 flex gap-3 no-print">
              <Button onClick={handlePrint}>Download PDF</Button>
              <Button variant="outline" onClick={() => window.open(ctaLink, "_blank")}>Book a 30‑min Discovery</Button>
            </div>
          </header>

          {/* Stakes */}
          <section className="page mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Why {industry} Teams Choose Mamut</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {stakes.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </section>

          {/* Challenges & Solutions */}
          <section className="grid md:grid-cols-2 gap-6 page mb-10">
            <div className="rounded-lg border border-gray-200 p-6 bg-white">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Top {industry} Outbound Challenges</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {challenges.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border border-gray-200 p-6 bg-gray-50">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How Mamut Solves This</h3>
              <ul className="space-y-4">
                {solutions.map((b, i) => (
                  <li key={i}>
                    <p className="font-medium text-gray-900">{b.title}</p>
                    <p className="text-gray-700">{b.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Performance */}
          <section className="page mb-10">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Performance at Steady State</h3>
            {performanceNote && <p className="text-sm text-gray-600 mb-4">{performanceNote}</p>}
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {performanceMetrics.map((m, i) => (
                <div key={i} className="rounded-lg border border-gray-200 p-4 text-center bg-white">
                  <div className="text-3xl font-extrabold text-gray-900">{m.value}</div>
                  <div className="text-sm text-gray-600">{m.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Latin America Map - Show only for Mamut Talent */}
          {industry === "Staff Augmentation" && (
            <section className="page mb-10">
              <GoogleMapsLatinAmerica />
            </section>
          )}

          {/* Build vs Buy */}
          <section className="grid md:grid-cols-2 gap-6 page mb-10">
            <div className="rounded-lg border border-gray-200 p-6 bg-white">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{buildVsBuy.internalTitle || "Internal Setup"}</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {buildVsBuy.internal.map((i, idx) => (
                  <li key={idx}>{i}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border border-gray-200 p-6 bg-gray-50">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{buildVsBuy.mamutTitle || "Mamut Installation"}</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {buildVsBuy.mamut.map((i, idx) => (
                  <li key={idx}>{i}</li>
                ))}
              </ul>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center page">
            <h2 className="text-2xl font-bold text-gray-900">{cta.heading}</h2>
            <p className="mt-2 text-gray-700">{cta.subheading}</p>
            <div className="mt-4 no-print flex items-center justify-center gap-3">
              <Button onClick={() => window.open(ctaLink, "_blank")}>
                {cta.primaryText || "Book a 30‑min Discovery"}
              </Button>
              <Button variant="outline" onClick={handlePrint}>
                {cta.secondaryText || "Download PDF"}
              </Button>
            </div>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default OnePagerTemplate;
