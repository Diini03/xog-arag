import OnePagerTemplate from "@/components/onepagers/OnePagerTemplate";

const StaffingRecruitingOnePager = () => {
  return (
    <OnePagerTemplate
      industry="Staffing & Recruiting"
      title="Staffing & Recruiting Outbound System: Fill Reqs, Expand Accounts"
      subheading="$90K–$240K/month in pipeline once ramped. Target hiring managers and talent leaders with role‑based outbound that drives intake calls and expansions."
      stakes={[
        "Inbound is plateauing; req volume is lumpy, creating feast‑famine pipelines.",
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
        { title: "Persona‑Outcome Messaging", description: "Role‑specific value props for hiring managers, TA leaders, and HR operations—focused on time‑to‑fill and quality." },
        { title: "Demo Engine", description: "Calendar‑first sequencing for intake calls and SDR handoffs to increase show rates." },
        { title: "Revenue Reporting", description: "Weekly dashboards by req and account: SQLs, pipeline, and experiment logs—so leaders know what’s working." },
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
      caseStudy={{
        title: "National staffing firm scaled role‑based outbound to stabilize pipelines between cycles.",
        bullets: [
          "$180K pipeline by Week 5",
          "74 % show rate on intake calls",
          "Dormant accounts re‑activated via function‑specific proof",
        ],
        link: "/case-studies/staffing-role-based-outbound",
        linkLabel: "Read the Staffing case study",
      }}
      cta={{
        heading: "Install Your Staffing Outbound System in 7 Days",
        subheading: "Warm up, ramp, and reach full productivity in 4–6 weeks. Fixed monthly pricing and transparent reporting.",
      }}
    />
  );
};

export default StaffingRecruitingOnePager;
