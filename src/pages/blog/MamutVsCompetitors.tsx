import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useOpenGraphMeta } from "@/hooks/useOpenGraphMeta";
import { ArrowLeft, Download } from "lucide-react";
import { BlogArticleLayout } from "@/components/blog/BlogArticleLayout";
import { ComparisonTable } from "@/components/blog/ComparisonTable";
import { ProviderCard } from "@/components/blog/ProviderCard";
import { DecisionTree } from "@/components/blog/DecisionTree";
import { PricingWidget } from "@/components/blog/PricingWidget";
import { CostPerMeetingCalculator } from "@/components/blog/CostPerMeetingCalculator";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { SocialProofSection } from "@/components/blog/SocialProofSection";

const MamutVsCompetitors = () => {
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";

  useOpenGraphMeta({
    title: "Mamut vs. SalesRoads vs. SalesHive vs. Belkins: Outbound Sales Partner Comparison 2025",
    description: "Compare top outbound sales partners: SalesRoads, SalesHive, Belkins, CIENCE, Bandalier & Mamut. Pricing, features & which is right for your business in 2025.",
    url: currentUrl,
    type: "article",
    publishedTime: "2025-10-28",
    section: "Comparisons",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>

      <BlogArticleLayout
        currentUrl={currentUrl}
        title="Mamut vs. SalesRoads vs. SalesHive vs. Belkins: Which Outbound Sales Partner Wins?"
        description="Data-driven comparison to help you choose the right outbound sales partner for 2025"
      >
        {/* Hero Section */}
        <section className="pt-20 pb-16 bg-gradient-to-br from-orange-50 via-white to-orange-100">
          <div className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto">
              <Link to="/blog" className="inline-flex items-center text-[#FF6B35] hover:text-[#E55A2B] mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>

              <div className="flex items-center gap-4 mb-6 text-sm text-gray-600">
                <span className="bg-[#FF6B35] text-white px-3 py-1 rounded-full text-xs font-medium">
                  Comparisons
                </span>
                <span>October 28, 2025</span>
                <span>12 min read</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#374151] leading-tight">
                Outbound Sales Partner Comparison: Real Costs, Setup Times & Results (2025)
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                You've been told to "just hire 2 BDRs" but 4 months later you're $40K in with zero pipeline. Sound familiar? We analyzed 6 leading providers to answer: Which delivers the best cost-per-meeting for startups and scale-ups?
              </p>

              <div className="bg-orange-100 dark:bg-orange-900/30 border-l-4 border-[#FF6B35] p-4 rounded">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong>TL;DR:</strong> If you need pipeline fast without the overhead of hiring, Mamut launches in 7 days and saves 50-70% vs. in-house teams. But other providers have their place—read on for the full breakdown.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <article className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            
            {/* Table of Contents */}
            <TableOfContents />
            
            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Building a strong sales pipeline is non-negotiable for growth. But the path forward isn't clear: Do you hire in-house, or outsource to experts? If outsourcing, which provider actually delivers ROI?
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                From established firms like <strong>SalesRoads</strong> and <strong>CIENCE</strong> to newer multi-channel agencies like <strong>SalesHive</strong> and <strong>Belkins</strong>, the market is crowded. Then there's <strong>Mamut's GTM Plugin</strong>—an embedded outbound solution that deploys a complete sales development system in your company within 7 days.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                In this post, we'll compare these models fairly with real data. By the end, you'll understand which option fits your situation and why Mamut's approach offers unique advantages for growth-focused teams.
              </p>
            </div>

            {/* Comparison Table */}
            <ComparisonTable />

            {/* Cost Per Meeting Calculator */}
            <CostPerMeetingCalculator />

            {/* Provider Deep Dives */}
            <section id="provider-deep-dives" className="my-16">
              <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
                Provider Deep-Dives: What You're Really Getting
              </h2>

              <div className="space-y-8">
                {/* SalesRoads */}
                <ProviderCard
                  name="SalesRoads"
                  tagline="Experience and quality at a premium price"
                  price="$9,500+"
                  pros={[
                    "20+ years in business with proven track record",
                    "Delivered 50,000+ sales opportunities",
                    "Full support team included (ops, success, training)",
                    "Works with enterprise clients like Microsoft",
                  ]}
                  cons={[
                    "Premium pricing at $9,500+/month ($317/meeting CPM)",
                    "2-3 week setup timeline vs Mamut's 7 days",
                    "Limited to phone + email (no LinkedIn automation)",
                  ]}
                  bottomLine="Choose SalesRoads if you have enterprise-level budget and want a white-glove, established provider with deep B2B experience."
                  whenToChoose={[
                    "You have $10K+ monthly budget and need enterprise credibility",
                    "Your ideal customer profile is well-defined with proven messaging",
                    "You value 20+ years of industry track record",
                  ]}
                  whenToSkip={[
                    "You're a startup testing outbound for the first time",
                    "You need multi-channel (email + phone + LinkedIn) from day 1",
                    "You need to launch within 1 week, not 2-3 weeks",
                  ]}
                />

                {/* SalesHive */}
                <ProviderCard
                  name="SalesHive"
                  tagline="Flexible packages with month-to-month freedom"
                  price="$4,000-12,000"
                  pros={[
                    "Lowest entry point at $4K starter package",
                    "No long-term contracts—cancel anytime",
                    "85,000+ meetings booked for clients",
                    "Proprietary tech platform for transparency",
                  ]}
                  cons={[
                    "Starter plan forces you to choose ONE channel only",
                    "Must upgrade to $8K for true multi-channel",
                    "2-3 months to dial in strategy fully",
                  ]}
                  bottomLine="Choose SalesHive if you're testing outbound affordably or want flexibility to scale channel-by-channel as budget allows."
                />

                {/* Belkins */}
                <ProviderCard
                  name="Belkins"
                  tagline="Omnichannel lead gen with global talent"
                  price="$5,000-15,000"
                  pros={[
                    "True omnichannel: email, phone, LinkedIn, even ads",
                    "Served 1,000+ clients, $2B+ revenue generated",
                    "Fast launch—campaigns live in 14 days",
                    "Delivers 100-400 qualified appointments/year",
                  ]}
                  cons={[
                    "Wide price range makes budgeting unclear",
                    "Much of team is offshore (if you need US-only)",
                    "May feel less embedded as external agency",
                  ]}
                  bottomLine="Choose Belkins if you want maximum channel diversity and can invest $10K+/month for high-volume lead generation at scale."
                />

                {/* CIENCE */}
                <ProviderCard
                  name="CIENCE"
                  tagline="Tech-powered global outreach at massive scale"
                  price="$5,000+"
                  pros={[
                    "1,000+ employees across 4 continents",
                    "Deep data science and automation capabilities",
                    "Served 2,500+ clients from startups to enterprise",
                    "Strong in complex technical/IT sales",
                  ]}
                  cons={[
                    "Large organization—smaller clients may feel lost",
                    "3-4 week onboarding and setup time",
                    "Often requires multi-month commitments",
                  ]}
                  bottomLine="Choose CIENCE if you need enterprise-grade scale, have VC funding, and want sophisticated targeting powered by data science."
                />

                {/* Bandalier */}
                <ProviderCard
                  name="Bandalier"
                  tagline="AI-supercharged SDR pods with high call volume"
                  price="$8,000"
                  pros={[
                    "US-based team (New York & Pennsylvania)",
                    "Guarantees 100+ calls per day from each SDR",
                    "AI tools enhance productivity and personalization",
                    "Fast ramp—typically within 2-3 weeks",
                  ]}
                  cons={[
                    "Heavy focus on phone—less omnichannel",
                    "SDR-only scope (meetings, not closings)",
                    "Boutique size may limit scaling to 5+ reps",
                  ]}
                  bottomLine="Choose Bandalier if you believe phone outreach is critical and want a hands-on managed SDR team with US-based talent."
                />

                {/* Mamut - highlighted */}
                <ProviderCard
                  name="Mamut GTM Plugin"
                  tagline="Embedded outbound system installed in 7 days"
                  price="$6,490"
                  pros={[
                    "Fastest deployment: live in 7 days (not weeks)",
                    "$13,859 value for $6,490 (53% discount on real costs)",
                    "Includes GTM engineer ($7K value) + all tools ($1,859)",
                    "All channels from day 1: email, phone, LinkedIn",
                    "Embedded model: feels in-house, not agency",
                    "Proven playbooks + daily Slack integration",
                  ]}
                  cons={[
                    "Newer brand (founded 2023) vs. 20-year firms",
                    "Focused on startups/scale-ups ($10K-100K ACV sweet spot)",
                  ]}
                  bottomLine="Choose Mamut if you need pipeline this quarter without distraction. Best for founders and RevOps leaders who value speed, cost-efficiency, and deep integration."
                  highlight
                />
              </div>
            </section>

            {/* Pricing Widget */}
            <PricingWidget />

            {/* Social Proof */}
            <SocialProofSection />

            {/* Mamut's Differentiation */}
            <section id="mamut-difference" className="my-16 p-8 bg-gradient-to-br from-orange-50 to-white dark:from-orange-900/20 dark:to-gray-800 rounded-xl border-2 border-[#FF6B35]">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                What Makes Mamut Different: The Embedded Model
              </h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  Unlike traditional agencies that operate as external vendors, Mamut installs an entire outbound system directly into your company. Think of it as a "plug & play" revenue engine that your team controls.
                </p>

                <div className="grid md:grid-cols-3 gap-6 my-8">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-[#FF6B35] mb-2">$13,859</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Real Value Per Month</div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                    BDR ($5K) + GTM Engineer ($7K) + Tools ($1,859) = $13,859 value
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-[#FF6B35] mb-2">$6,490</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">What You Actually Pay</div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                    53% discount on real costs — cheaper than hiring 1 BDR alone
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-[#FF6B35] mb-2">7 Days</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Time to Launch</div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                    Live and generating meetings in 1 week, not 3 months
                  </p>
                </div>
                </div>

                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  Three Unique Advantages:
                </h3>

                <div className="space-y-4">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                    <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                      1. Full Stack Included (Not Just Labor)
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      While competitors charge $4K-9.5K for just the BDR, Mamut includes a **GTM Engineer** ($7K value), premium email infrastructure ($650), data enrichment tools ($760), and enterprise-grade dialer ($350). Total value: **$13,859** — you pay $6,490. That's 53% off the real cost.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                    <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                      2. Truly Embedded (Not Just Outsourced)
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      Your Mamut BDRs integrate with your CRM, use your company domain, sync with your sales team daily, and adapt messaging in real-time. You get agency expertise with in-house alignment—the best of both worlds.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                    <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                      3. Speed Without Sacrifice
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      Mamut's 7-day installation doesn't mean cutting corners. You get proven playbooks, AI-enhanced tools, and experienced BDRs—all pre-packaged and ready to customize for your product. It's fast because the infrastructure already exists, not because quality is rushed.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Decision Tree */}
            <DecisionTree />

            {/* Conclusion */}
            <section className="my-16">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                The Bottom Line: Choosing Your Partner
              </h2>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                  There's no universal "best" outbound partner—only the best fit for your specific situation:
                </p>

                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-6">
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-3">
                      <span className="text-[#FF6B35] font-bold">→</span>
                      <span><strong>Testing on a budget?</strong> SalesHive's $4K starter lets you dip your toe in (but remember—it's one channel only).</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#FF6B35] font-bold">→</span>
                      <span><strong>Enterprise budget with complex needs?</strong> SalesRoads or CIENCE bring decades of experience and massive scale.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#FF6B35] font-bold">→</span>
                      <span><strong>Need omnichannel volume at all costs?</strong> Belkins will flood your funnel across every channel imaginable.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#FF6B35] font-bold">→</span>
                      <span><strong>Believe in high-touch phone outreach?</strong> Bandalier's call-focused approach with US-based SDRs delivers quality conversations.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#FF6B35] font-bold">→</span>
                      <span><strong>Need pipeline this quarter without overhead?</strong> Mamut installs a complete outbound engine in 7 days at half the cost of in-house.</span>
                    </li>
                  </ul>
                </div>

                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                  For most startups and scaling companies, <strong>Mamut's GTM Plugin</strong> hits the sweet spot: it's comprehensive yet fast, embedded yet managed, and delivers enterprise-level results at startup-friendly economics.
                </p>

                <p className="text-lg text-gray-700 dark:text-gray-300">
                  The difference? You stay focused on closing deals and building product while Mamut handles the heavy lifting of filling your calendar with qualified meetings. No hiring sprints. No tool sprawl. No 6-month ramp time. Just results.
                </p>
              </div>
            </section>

            {/* CTA Section */}
            <section className="my-16 p-8 bg-gradient-to-br from-[#FF6B35] to-[#E55A2B] rounded-xl text-white">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to See the Mamut Difference?</h2>
                <p className="text-lg mb-8 text-orange-100">
                  Calculate your potential savings and see how much pipeline you could be generating
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/#roi-calculator"
                    className="inline-flex items-center justify-center gap-2 bg-white text-[#FF6B35] hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-colors"
                  >
                    Calculate Your ROI
                  </Link>
                  <Link
                    to="/#contact"
                    className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-lg transition-colors"
                  >
                    Talk to Our Team
                  </Link>
                </div>
                <p className="mt-6 text-sm text-orange-100">
                  Or download our free comparison checklist to evaluate all providers side-by-side
                </p>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="my-16">
              <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                    How long does it take to see results from outsourced outbound?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Most providers deliver first meetings within 30-45 days. Mamut's proven playbooks often generate qualified conversations within 2-3 weeks of launch due to the 7-day setup advantage.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                    What's the real cost of building an in-house BDR team?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    For a 2-person BDR team with manager, expect $220K+ annually ($18K+/month) including salaries, benefits, tools, recruiting, and training. Mamut delivers similar or better results at $6,490/month—a 65% savings.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                    Can I switch providers if I'm not happy?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Most month-to-month providers (SalesHive, Mamut) allow cancellation with 30 days notice. Agencies requiring multi-month commitments (CIENCE, sometimes Belkins) may have early termination fees. Always review contract terms.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                    Do these providers only work with B2B SaaS companies?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    No. While many specialize in B2B tech, providers like Belkins and CIENCE serve 50+ industries. Mamut focuses on startups and scale-ups across various B2B sectors. The key is whether your sales cycle fits outbound prospecting (typically $10K+ deal size).
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                    What makes Mamut's 7-day installation possible?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Mamut pre-builds the infrastructure: trained BDR teams, proven multi-channel playbooks, AI-enhanced tools, and established processes. Instead of creating everything from scratch, Mamut customizes an existing system to your product—dramatically accelerating time-to-value.
                  </p>
                </div>
              </div>
            </section>

            {/* Related Articles */}
            <section className="my-16 border-t border-gray-200 dark:border-gray-700 pt-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Related Articles</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <Link to="/blog/hidden-costs-internal-bdr" className="group">
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
                    <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-[#FF6B35] mb-2">
                      Hidden Costs of Internal BDR Teams
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      What companies miss when calculating in-house costs
                    </p>
                  </div>
                </Link>
                <Link to="/blog/scale-outbound-without-breaking-budget" className="group">
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
                    <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-[#FF6B35] mb-2">
                      Scale Outbound Without Breaking Budget
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Proven frameworks for cost-efficient pipeline growth
                    </p>
                  </div>
                </Link>
                <Link to="/blog/outbound-playbook-2025" className="group">
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
                    <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-[#FF6B35] mb-2">
                      Outbound Playbook 2025
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Complete guide to modern outbound sales strategies
                    </p>
                  </div>
                </Link>
              </div>
            </section>

          </div>
        </article>
      </BlogArticleLayout>
    </>
  );
};

export default MamutVsCompetitors;
