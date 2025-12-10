import OnePagerTemplate from "@/components/onepagers/OnePagerTemplate";

const FinancialServicesOnePager = () => {
  return (
    <OnePagerTemplate
      industry="Financial Services"
      title="Financial Services Outbound System: Forecastable, Trust‑First Growth"
      subheading="$140K–$350K/month in pipeline once ramped. Reach buyers in wealth, payments, lending, insurance, and fintech infra with compliant, value‑forward outbound."
      stakes={[
        "Inbound is plateauing as compliance tightens and buyer scrutiny increases—CAC drifts up.",
        "Approvals and reviews slow iteration; slow loops delay pipeline.",
        "Senior buyers are saturated; generic ROI claims underperform.",
      ]}
      challenges={[
        "High compliance burden and content approvals increase friction.",
        "CFO, CRO, CCO stakeholders require conservative, credible messaging.",
        "Account quality varies widely across data vendors; wasted cycles.",
      ]}
      solutions={[
        { title: "PQL + Account Risk Scoring", description: "Prioritize by licenses, AUM, NAICS, tech stack, hiring and growth signals to find high‑intent accounts." },
        { title: "Persona‑Outcome Messaging", description: "CFO/CCO/COO sequences that emphasize risk management, revenue enablement, and cost control with approved claims." },
        { title: "Demo Engine", description: "Calendar‑first sequencing and SDR handoffs increase show rates with compliance‑approved scripts." },
        { title: "Revenue Reporting", description: "Weekly dashboards with SQLs, pipeline, ACV by segment, and approval states so execs see what’s working." },
      ]}
      performanceNote={"Post‑ramp steady state. Weeks 1–2 installation; meetings begin Weeks 3–4; full productivity Weeks 4–6."}
      performanceMetrics={[
        { label: "Meetings per month", value: "10–22" },
        { label: "Demo show rate", value: "70 %" },
        { label: "Pipeline created/mo", value: "$140K–$350K" },
        { label: "CAC reduction", value: "–25 %" },
      ]}
      buildVsBuy={{
        internal: [
          "3 BDRs + Manager + RevOps + Tools + Compliance: $30K–$45K/month",
          "2–3 months to ramp with slow feedback loops",
          "Ongoing management overhead and vendor risk reviews",
        ],
        mamut: [
          "$9.8K–$12.5K/month",
          "Installed in 7 days; ramp to full productivity in 4–6 weeks",
          "Managed team, approved messaging, transparent reporting",
        ],
      }}
      caseStudy={{
        title: "Payments infra vendor executed trust‑first outbound and accelerated enterprise cycles.",
        bullets: [
          "$280K pipeline by Week 6",
          "73 % demo show rate with CFO/CCO threading",
          "Compliance sign‑off maintained without rework",
        ],
        link: "/case-studies/finserv-trust-first-outbound",
        linkLabel: "Read the Financial Services case study",
      }}
      cta={{
        heading: "Install Your Financial Services Outbound System in 7 Days",
        subheading: "Warm up, ramp, and reach full productivity in 4–6 weeks. Fixed monthly pricing and transparent reporting.",
      }}
    />
  );
};

export default FinancialServicesOnePager;
