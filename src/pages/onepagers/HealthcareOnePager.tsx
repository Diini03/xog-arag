import OnePagerTemplate from "@/components/onepagers/OnePagerTemplate";

const HealthcareOnePager = () => {
  return (
    <OnePagerTemplate
      industry="Healthcare"
      title="Healthcare Outbound System: Build Predictable Pipeline You Can Trust"
      subheading="$120K–$300K/month in pipeline once ramped. Reach providers, payers, and medtech with compliant outbound that drives demos and stakeholder consensus."
      stakes={[
        "Regulatory overhead is pushing CAC higher while inbound stalls in clinical markets.",
        "Multi‑stakeholder buying (clinical, IT, security, finance) delays revenue without coordinated outreach.",
        "Fragmented, non‑compliant data harms deliverability and trust.",
      ]}
      challenges={[
        "Complex buying committees across clinical, IT, security, and finance.",
        "Vendor risk and InfoSec reviews slow validation and launch.",
        "Finding the right facilities and roles without compliant data is costly.",
      ]}
      solutions={[
        { title: "PQL + Facility Scoring", description: "Prioritize by provider type, bed count, EHR (Epic/Cerner), and network affiliation to focus on high‑fit accounts." },
        { title: "Persona‑Outcome Messaging", description: "Tailor to CMIO/CNIO, IT security, and operations leaders with measurable clinical and operational outcomes." },
        { title: "Demo Engine", description: "Calendar‑first sequencing and SDR handoffs increase show rates with procurement‑safe talk tracks." },
        { title: "Revenue Reporting", description: "Weekly dashboards: SQLs, pipeline by service line, security review stage, and experiment logs." },
      ]}
      performanceNote={"Metrics represent post‑ramp steady state. Weeks 1–2 installation and warmup; initial meetings typically start Weeks 3–4; full productivity Weeks 5–8."}
      performanceMetrics={[
        { label: "Meetings per month", value: "10–22" },
        { label: "Demo show rate", value: "68 %" },
        { label: "Pipeline created/mo", value: "$120K–$300K" },
        { label: "CAC reduction", value: "–24 %" },
      ]}
      buildVsBuy={{
        internal: [
          "2 BDRs + Manager + Tools + Compliance overhead: $28K–$38K/month",
          "2–4 months to ramp and stabilize",
          "Heavy diligence and specialized training burden",
        ],
        mamut: [
          "$10.5K–$13.5K/month",
          "Installed in 7 days; ramp to full productivity in 5–8 weeks",
          "Managed pod, compliant data sourcing, exec reporting",
        ],
      }}
      caseStudy={{
        title: "Regional IDN went from 0 to 14 SQLs in 6 weeks across clinical ops and IT security.",
        bullets: [
          "$210K pipeline by Week 6",
          "71 % demo show rate via multi‑threading",
          "Security review completed without rework",
        ],
        link: "/case-studies/healthcare-compliance-outreach",
        linkLabel: "Read the Healthcare case study",
      }}
      cta={{
        heading: "Install Your Healthcare Outbound System in 7 Days",
        subheading: "Warm up, ramp, and reach full productivity in 5–8 weeks. Fixed monthly pricing and transparent reporting.",
      }}
    />
  );
};

export default HealthcareOnePager;

