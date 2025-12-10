import OnePagerTemplate from "@/components/onepagers/OnePagerTemplate";

const SoftwareConsultanciesOnePager = () => {
  return (
    <OnePagerTemplate
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
        { title: "Initiative‑Led Positioning", description: "Anchor outbound on outcomes—modernization, AI enablement, cloud cost optimization, and platform consolidation." },
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
      caseStudy={{
        title: "Data platform consultancy activated initiative‑led outbound and unlocked VP access.",
        bullets: [
          "$260K pipeline by Week 6",
          "+22 % cycle acceleration with proof‑first artifacts",
          "Bench time reduced via capacity‑aware throttling",
        ],
        link: "/case-studies/consultancies-initiative-led-outbound",
        linkLabel: "Read the Software Consultancies case study",
      }}
      cta={{
        heading: "Install Your Consultancy Outbound System in 7 Days",
        subheading: "Warm up, ramp, and reach full productivity in 4–6 weeks. Fixed monthly pricing and transparent reporting.",
      }}
    />
  );
};

export default SoftwareConsultanciesOnePager;
