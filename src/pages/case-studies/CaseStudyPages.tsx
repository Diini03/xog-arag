import CaseStudyTemplate, { Bullet, MetricRow } from "@/components/case-studies/CaseStudyTemplate";

// Shared notes
const saasNote = "Metrics above represent post‑ramp steady state. Weeks 1–2 are focused on installation, warmup, and training. Initial meetings typically start in Weeks 3–4; full productivity is reached by Weeks 4–6.";
const hcNote = "Post‑ramp steady state. Weeks 1–2 installation and warmup; initial meetings typically start Weeks 3–4; full productivity Weeks 5–8.";

export const SaaS30DayPipeline = () => (
  <CaseStudyTemplate
    industry="SaaS"
    title="SaaS Outbound System: Build Predictable Pipeline You Can Forecast"
    subheading="$180K–$420K/month in pipeline once ramped. Target SMB, mid‑market, and enterprise with outbound that drives demos, PQLs, and expansion."
    stakes={[
      "Inbound is plateauing — SEO and paid are getting more expensive; CAC is creeping above LTV.",
      "Long BDR ramp times — Internal hires often take 2–3 months to get consistent.",
      "Fragmented data — Poor prioritization wastes rep capacity.",
    ]}
    challenges={[
      "Inbound fatigue and lower lead quality create pipeline shortfalls.",
      "BDR ramp variance slows consistency and growth.",
      "Disparate data prevents unified prioritization and follow‑up.",
    ]}
    solutions={[
      { title: "PQL + ICP Scoring", description: "Combine product usage and firmographic signals to find accounts most likely to buy or expand." },
      { title: "Persona‑Outcome Messaging", description: "Role‑specific value props tied to pains, competitive gaps, and time‑to‑value." },
      { title: "Demo Engine", description: "Calendar‑first sequencing and SDR handoffs to maximize show rates." },
      { title: "Revenue Reporting", description: "Weekly dashboards with SQLs, pipeline, ACV by segment, and experiment logs." },
    ] as Bullet[]}
    performanceNote={saasNote}
    performanceMetrics={[
      { label: "Meetings per month", value: "18–35" },
      { label: "Demo show rate", value: "72 %" },
      { label: "Pipeline created/mo", value: "$180K–$420K" },
      { label: "CAC reduction", value: "–28 %" },
    ] as MetricRow[]}
    buildVsBuy={{
      internalTitle: "Internal Setup",
      internal: [
        "3 BDRs + Manager + RevOps + Tools: $35K–$45K/month",
        "2–3 months to ramp",
        "High management overhead",
      ],
      mamutTitle: "Mamut Installation",
      mamut: [
        "$9.8K–$12.5K/month",
        "Installed in 7 days, ramp to full productivity in 4–6 weeks",
        "Managed team and clear SLAs",
      ],
    }}
    miniCaseStudy={{
      title: "A mid‑market SaaS client ramped to $250K monthly pipeline by Week 6.",
      bullets: [
        "$250K monthly pipeline by Week 6",
        "75 % demo show rate",
        "30 % CAC reduction vs building internally",
      ],
    }}
    cta={{
      heading: "Install Your SaaS Outbound System in 7 Days",
      subheading: "Warm up, ramp, and reach full productivity in just 4–6 weeks. Fixed monthly pricing, transparent reporting, and pipeline you can forecast.",
    }}
  />
);

export const HealthcareComplianceOutreach = () => (
  <CaseStudyTemplate
    industry="Healthcare"
    title="Healthcare Outbound System: Compliant Growth You Can Forecast"
    subheading="$120K–$300K/month in pipeline once ramped. Reach providers, payers, and medtech with compliant outbound that drives demos and stakeholder consensus."
    stakes={[
      "Regulatory overhead pushes CAC higher while inbound stalls.",
      "Multi‑stakeholder buying (clinical, IT, security, finance) delays revenue without coordination.",
      "Fragmented, non‑compliant data harms deliverability and trust.",
    ]}
    challenges={[
      "Complex buying committees across clinical, IT, security, and finance.",
      "Vendor risk and InfoSec reviews slow progress.",
      "Finding the right facilities and roles without compliant data is costly.",
    ]}
    solutions={[
      { title: "PQL + Facility Scoring", description: "Prioritize by provider type, bed count, EHR, and affiliation to focus on high‑fit accounts." },
      { title: "Persona‑Outcome Messaging", description: "Tailor to CMIO/CNIO, IT security, and operations leaders with measurable outcomes." },
      { title: "Demo Engine", description: "Calendar‑first sequencing and SDR handoffs improve show rates with procurement‑safe talk tracks." },
      { title: "Revenue Reporting", description: "Weekly dashboards: SQLs, pipeline by service line, and security review stage." },
    ]}
    performanceNote={hcNote}
    performanceMetrics={[
      { label: "Meetings per month", value: "10–22" },
      { label: "Demo show rate", value: "68 %" },
      { label: "Pipeline created/mo", value: "$120K–$300K" },
      { label: "CAC reduction", value: "–24 %" },
    ]}
    buildVsBuy={{
      internal: [
        "2 BDRs + Manager + Tools + Compliance: $28K–$38K/month",
        "2–4 months to ramp and stabilize",
        "Heavy diligence and specialized training burden",
      ],
      mamut: [
        "$10.5K–$13.5K/month",
        "Installed in 7 days; ramp to full productivity in 5–8 weeks",
        "Managed pod, compliant data sourcing, exec reporting",
      ],
    }}
    miniCaseStudy={{
      title: "Regional IDN went from 0 to 14 SQLs in 6 weeks across clinical ops and IT security.",
      bullets: ["$210K pipeline by Week 6", "71 % demo show rate", "Security review completed without rework"],
    }}
    cta={{
      heading: "Install Your Healthcare Outbound System in 7 Days",
      subheading: "Warm up, ramp, and reach full productivity in 5–8 weeks. Fixed monthly pricing and transparent reporting.",
    }}
  />
);

export const FinservTrustFirstOutbound = () => (
  <CaseStudyTemplate
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
      { title: "PQL + Account Risk Scoring", description: "Prioritize by licenses, AUM, NAICS, tech stack, and growth signals to find high‑intent accounts." },
      { title: "Persona‑Outcome Messaging", description: "CFO/CCO/COO sequences emphasizing risk mitigation, revenue enablement, and cost control." },
      { title: "Demo Engine", description: "Calendar‑first sequencing and SDR handoffs with compliance‑approved scripts to increase show rates." },
      { title: "Revenue Reporting", description: "Weekly dashboards with SQLs, pipeline, ACV by segment, and approval states." },
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
    miniCaseStudy={{
      title: "Payments infra vendor executed trust‑first outbound and accelerated enterprise cycles.",
      bullets: ["$280K pipeline by Week 6", "73 % demo show rate", "Compliance sign‑off without rework"],
    }}
    cta={{
      heading: "Install Your Financial Services Outbound System in 7 Days",
      subheading: "Warm up, ramp, and reach full productivity in 4–6 weeks. Fixed monthly pricing and transparent reporting.",
    }}
  />
);

export const StaffingRoleBasedOutbound = () => (
  <CaseStudyTemplate
    industry="Staffing & Recruiting"
    title="Staffing & Recruiting Outbound System: Fill Reqs, Expand Accounts"
    subheading="$90K–$240K/month in pipeline once ramped. Target hiring managers and talent leaders with role‑based outbound that drives intake calls and expansions."
    stakes={[
      "Req volume is lumpy, creating feast‑famine pipelines.",
      "Internal BDR ramp can take 2–3 months—too slow to match demand spikes.",
      "Fragmented data reduces prioritization quality and wastes rep time.",
    ]}
    challenges={[
      "Unpredictable req volume and seasonality.",
      "Crowded inboxes—hard to differentiate agency value.",
      "Manual prospecting and low data quality slow teams.",
    ]}
    solutions={[
      { title: "PQL + ICP Scoring", description: "Segment by department, seniority, hiring velocity, market, and tech stack to find active demand pockets." },
      { title: "Persona‑Outcome Messaging", description: "Value props for hiring managers, TA leaders, and HR ops—focused on time‑to‑fill and quality." },
      { title: "Demo Engine", description: "Calendar‑first sequencing for intake calls and SDR handoffs to increase show rates." },
      { title: "Revenue Reporting", description: "Weekly dashboards by req and account: SQLs, pipeline, and experiment logs." },
    ]}
    performanceNote={"Post‑ramp steady state. Weeks 1–2 installation/warmup; meetings begin Weeks 3–4; full productivity Weeks 4–6."}
    performanceMetrics={[
      { label: "Meetings per month", value: "15–30" },
      { label: "Demo show rate", value: "70 %" },
      { label: "Pipeline created/mo", value: "$90K–$240K" },
      { label: "CAC reduction", value: "–30 %" },
    ]}
    buildVsBuy={{
      internal: [
        "BDR + Sourcer + Manager + Tools: $24K–$32K/month",
        "2–3 months to ramp; inconsistent performance risk",
        "High coordination overhead across reqs and accounts",
      ],
      mamut: [
        "$7.9K–$9.8K/month",
        "Installed in 7 days; ramp to full productivity in 4–6 weeks",
        "Managed pod, role‑based campaigns, exec reporting",
      ],
    }}
    miniCaseStudy={{
      title: "National staffing firm scaled role‑based outbound to stabilize pipelines between cycles.",
      bullets: ["$180K pipeline by Week 5", "74 % show rate on intake calls", "Dormant accounts re‑activated"],
    }}
    cta={{
      heading: "Install Your Staffing Outbound System in 7 Days",
      subheading: "Warm up, ramp, and reach full productivity in 4–6 weeks. Fixed monthly pricing and transparent reporting.",
    }}
  />
);

export const ConsultanciesInitiativeLedOutbound = () => (
  <CaseStudyTemplate
    industry="Software Consultancies"
    title="Software Consultancies Outbound System: Land Larger, Strategic Deals"
    subheading="$150K–$400K/month in pipeline once ramped. Target economic buyers for modernization, AI enablement, platform migration, and cost takeout."
    stakes={[
      "Project‑based revenue volatility creates bench risk and margin pressure.",
      "Inbound referrals plateau at network limits; new logos slow down.",
      "Hard to access VP/C‑suite for strategic initiatives without proof‑first messaging.",
    ]}
    challenges={[
      "Volatile delivery capacity vs. pipeline timing.",
      "Referrals/word of mouth are insufficient for new markets.",
      "Economic buyers are hard to reach and prioritize.",
    ]}
    solutions={[
      { title: "Initiative‑Led Positioning", description: "Outbound on outcomes—modernization, AI enablement, cloud cost optimization, platform consolidation." },
      { title: "Proof‑First Framework", description: "Concise case artifacts and references reduce perceived delivery risk and unlock budget." },
      { title: "Multi‑Threading", description: "Land with director‑level champions while warming VP/C‑suite to secure priority and budget." },
      { title: "Capacity‑Aware Throttling", description: "Scale outreach to match bench capacity and delivery bandwidth to protect margin." },
    ]}
    performanceNote={"Post‑ramp steady state. Weeks 1–2 installation; initial meetings Weeks 3–4; full productivity Weeks 4–6."}
    performanceMetrics={[
      { label: "SQLs / month", value: "10–20" },
      { label: "Demo show rate", value: "68 %" },
      { label: "Pipeline created/mo", value: "$150K–$400K" },
      { label: "CAC reduction", value: "–22 %" },
    ]}
    buildVsBuy={{
      internal: [
        "1–2 BDRs + Director + Tools: $22K–$30K/month",
        "2–3 months to validate messaging and proof",
        "Bench risk if pipeline misses",
      ],
      mamut: [
        "$8.9K–$10.9K/month",
        "Installed in 7 days; ramp to full productivity in 4–6 weeks",
        "Managed pod + collateral support, exec reporting",
      ],
    }}
    miniCaseStudy={{
      title: "Data platform consultancy activated initiative‑led outbound and unlocked VP access.",
      bullets: ["$260K pipeline by Week 6", "+22 % cycle acceleration", "Bench time reduced"],
    }}
    cta={{
      heading: "Install Your Consultancy Outbound System in 7 Days",
      subheading: "Warm up, ramp, and reach full productivity in 4–6 weeks. Fixed monthly pricing and transparent reporting.",
    }}
  />
);
