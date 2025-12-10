import { OnePagerTemplate } from "@/components/onepagers/OnePagerTemplate";

const MamutTalentOnePager = () => {
  return (
    <OnePagerTemplate
      industry="Staff Augmentation"
      title="Mamut Talent: Your Integrated BDR Team"
      subheading="Dedicated, highly-skilled Business Development Representatives who integrate seamlessly with your company through our staff augmentation model."
      stakes={[
        "Building an effective outbound sales team internally can cost $180K+ per BDR annually when factoring in salary, benefits, training, management overhead, and technology stack.",
        "Many companies struggle with high turnover, lengthy hiring cycles, and the complexity of managing international talent."
      ]}
      challenges={[
        "High cost of hiring local BDRs ($80K+ base salary plus benefits)",
        "3-6 month hiring cycles for qualified sales talent",
        "30-40% annual turnover rates in BDR roles",
        "Complex onboarding and training programs",
        "Management overhead and administrative burden",
        "Technology stack costs and training requirements",
        "International hiring complexity and legal compliance"
      ]}
      solutions={[
        { title: "Elite University Network", description: "BDRs sourced from top 150 Latin American institutions with rigorous business programs" },
        { title: "Multi-Stage Vetting", description: "Comprehensive screening for English proficiency, sales acumen, and professionalism" },
        { title: "Comprehensive Training", description: "Modern sales techniques, tech stack mastery, and integrated onboarding process" },
        { title: "Seamless Integration", description: "Work on your schedule, integrated into your communication channels and team meetings" },
        { title: "Direct Compensation Control", description: "You set bonuses and commissions - we take zero cut of performance compensation" },
        { title: "Full Administrative Management", description: "We handle all HR, payroll, legal compliance, and administrative tasks" },
        { title: "Flexible Contracts", description: "3-month proof of concept, then month-to-month agreements for maximum flexibility" }
      ]}
      performanceNote="Starting at $2,500/month per BDR - we handle all payments, staffing, training, vetting, and contractual nuances across different countries."
      performanceMetrics={[
        { label: "Cost Savings", value: "60-70% vs. local hiring" },
        { label: "Time to Productivity", value: "7-14 days with pre-trained talent" },
        { label: "University Network", value: "150+ elite institutions" },
        { label: "Geographic Coverage", value: "15+ Latin American countries" },
        { label: "English Proficiency", value: "C1/C2 certified level" },
        { label: "Contract Flexibility", value: "Month-to-month after trial" }
      ]}
      buildVsBuy={{
        internal: [
          "Local BDR salaries: $80K+ annually",
          "Benefits and overhead: $30K+ per employee",
          "Hiring cycle: 3-6 months",
          "Training development: 2-3 months",
          "Management overhead: 15-20 hours/week",
          "Technology stack costs: $200+ per seat",
          "High turnover replacement costs"
        ],
        mamut: [
          "All-inclusive: $2,500/month per BDR",
          "Zero overhead or hidden costs",
          "7-14 day deployment",
          "Pre-trained and tech-ready",
          "Full administrative management",
          "Integrated tech stack included",
          "Month-to-month flexibility"
        ],
        internalTitle: "Internal Hiring",
        mamutTitle: "Mamut Talent"
      }}
      caseStudy={{
        title: "SaaS Startup Success Story",
        bullets: [
          "Challenge: Needed to scale outbound sales quickly without building internal team overhead",
          "Solution: Deployed 3 Mamut Talent BDRs integrated with existing sales process",
          "Results: Generated 150+ qualified leads monthly while saving $200K+ annually vs. local hiring"
        ]
      }}
      cta={{
        heading: "Ready to Scale Your Sales Team?",
        subheading: "Start your 3-month proof of concept with our integrated BDR team.",
        primaryText: "Get Started with Mamut Talent",
        secondaryText: "Book a consultation: sales@mamut.co"
      }}
    />
  );
};

export default MamutTalentOnePager;