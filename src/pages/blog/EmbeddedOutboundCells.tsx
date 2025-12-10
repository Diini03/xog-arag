import { BlogArticleLayout } from "@/components/blog/BlogArticleLayout";
import { HeroSection } from "@/components/blog/HeroSection";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Calendar, Clock, TrendingUp, Users, Target, BarChart3, CheckCircle, ArrowRight } from "lucide-react";
export default function EmbeddedOutboundCells() {
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const title = "Embedded, Full-Time Outbound Cells (Build & Run, Tools Included)";
  const description = "Why we build your team inside your company—and how that turns outbound into booked revenue.";
  const levers = [{
    name: "Account Coverage",
    target: "40–60 target accounts per rep/week",
    icon: Target
  }, {
    name: "Contact Depth",
    target: "3–5 relevant personas per account",
    icon: Users
  }, {
    name: "Connect Rate",
    target: "Via calling blocks, better time windows",
    icon: TrendingUp
  }, {
    name: "Reply SLA",
    target: "<2 business hours to route positive replies",
    icon: Clock
  }, {
    name: "Meetings to Opportunities",
    target: "60–75% progression rate",
    icon: CheckCircle
  }, {
    name: "Show Rate",
    target: "80%+ with confirmations + reminders",
    icon: Calendar
  }, {
    name: "Cycle Time",
    target: "Compressed to decision",
    icon: BarChart3
  }];
  const experimentExamples = [{
    title: "Call-First for Mid-Market",
    description: "Call-first on 120 accounts; OMTM: Connect→Meeting %. Keep if +4 pts with stable show rate.",
    metric: "+4 pts improvement"
  }, {
    title: "Handoff Notes → Opportunity Lift",
    description: "3-bullet brief in the calendar invite; OMTM: Meeting→Opp %. Keep if +10 pts.",
    metric: "+10 pts improvement"
  }, {
    title: "Cycle Time Framing for Fintech",
    description: "Swap 2 opener lines; OMTM: Reply→Meeting %. Keep if ≥ +20% with stable show rate.",
    metric: "+20% improvement"
  }];
  return <BlogArticleLayout currentUrl={currentUrl} title={title} description={description}>
      <HeroSection title={title} description={description} category="Strategy" date="August 30, 2025" readTime="12 min read" />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          
          {/* TL;DR Section */}
          <div className="mb-12">
            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
              <h2 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-orange-500" />
                TL;DR
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Most outbound fails in the seams: targeting, messaging, channels, coaching, and calendar handoff don't move in sync. 
                Our answer is simple: we embed a full-time outbound cell (lead + 1–4 BDRs) inside your tools and run it every day. 
                We bring the stack, manage the operations, and measure success in pipeline added, coverage, show rate, stage conversion, 
                cycle time, and booked revenue. No "programs," no vendor juggling—just a team that ships.
              </p>
            </div>
          </div>

          {/* What is an Embedded Outbound Cell */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What is an Embedded Outbound Cell?</h2>
            <p className="text-lg text-gray-700 mb-6">
              A small, focused team that operates inside your CRM, domains, and Slack:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="p-6">
                <Users className="w-8 h-8 text-orange-500 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">People</h3>
                <p className="text-gray-600 text-sm">1 Cell Lead + 1–4 BDRs (full-time, dedicated to your accounts)</p>
              </Card>
              
              <Card className="p-6">
                <BarChart3 className="w-8 h-8 text-orange-500 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Operations</h3>
                <p className="text-gray-600 text-sm">List strategy, sequencing, call blocks, reply triage, objection handling, calendar handoff</p>
              </Card>
              
              <Card className="p-6">
                <CheckCircle className="w-8 h-8 text-orange-500 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Stack Included</h3>
                <p className="text-gray-600 text-sm">Email infrastructure, dialer, data enrichment, LinkedIn execution, revenue dashboard</p>
              </Card>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 font-medium">
                <strong>Build & Run only.</strong> We recruit, train, manage, and operate the cell. 
                You see everything, inside your stack, with clear numbers every week.
              </p>
            </div>
          </section>

          {/* The Outbound Math */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Outbound Math (and why it breaks)</h2>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-center text-gray-900 mb-4">Revenue Formula</h3>
              <div className="text-center">
                <code className="text-lg font-mono bg-white px-4 py-2 rounded border">
                  Pipeline Added = Coverage × Conversion × ACV ÷ Cycle Time
                </code>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Where:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Coverage:</strong> how many ICP accounts you're engaging each week</li>
                  <li><strong>Conversion:</strong> account→conversation→meeting→opportunity→won</li>
                  <li><strong>ACV:</strong> average contract value (and whether your targets match it)</li>
                  <li><strong>Cycle Time:</strong> days from first touch to revenue</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Most teams underperform because:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>1. Coverage slips (not enough of the right accounts touched weekly)</li>
                  <li>2. Conversion stalls (connects, meetings, or handoffs aren't coached)</li>
                  <li>3. Ops drag (data quality, deliverability, sender reputation)</li>
                  <li>4. Cycle Time bloats (slow reply routing and loose next steps)</li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <Badge variant="outline" className="text-lg px-4 py-2 bg-orange-100 text-orange-700 border-orange-300">
                An embedded cell fixes all four—daily
              </Badge>
            </div>
          </section>

          {/* Build & Run Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Build & Run: What We Do Every Day</h2>
            
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Targeting & Data</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• Define ICP segments tied to ACV and win patterns</li>
                  <li>• Build and refresh account/contact lists; verify and de-duplicate</li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Multichannel Execution</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• Email + calls + LinkedIn with time-zoned call blocks</li>
                  <li>• Reply triage within agreed SLAs; live objection handling</li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Coaching & Quality</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• Call reviews, talk tracks, and role-plays based on real calls</li>
                  <li>• Message testing with 2-week iteration cycles</li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Deliverability & Infrastructure</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• Domains, warmup rhythms, sender rotation, and list hygiene</li>
                  <li>• Send windows and volume controls to protect reputation</li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Handoff & Calendar</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• Clear notes, confirmations, reschedule logic, and no-show recovery</li>
                  <li>• Feedback loop to sharpen qualification and next steps</li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Reporting & Cadence</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• One dashboard tracking pipeline added (USD), coverage, connect→meeting rate, show rate, stage conversion, cycle time, and won revenue</li>
                  <li>• Weekly review, monthly retro, and a simple action plan</li>
                </ul>
              </Card>
            </div>
          </section>

          {/* Experimentation Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Experimentation: Lean Startup for Outbound</h2>
            <p className="text-lg text-gray-700 mb-6">
              Outbound improves fastest when we treat it like product work: state a hypothesis, ship the smallest test, 
              measure one metric, learn, and roll forward. We run this loop inside your stack every week so experiments 
              turn into playbooks—not noise.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-orange-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-center text-gray-900 mb-4">The Loop</h3>
              <div className="flex items-center justify-center space-x-8 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg mb-2">1</div>
                  <span className="font-medium">Build</span>
                </div>
                <ArrowRight className="w-6 h-6 text-gray-400" />
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg mb-2">2</div>
                  <span className="font-medium">Measure</span>
                </div>
                <ArrowRight className="w-6 h-6 text-gray-400" />
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-lg mb-2">3</div>
                  <span className="font-medium">Learn</span>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Example Experiments (ready to run)</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {experimentExamples.map((experiment, index) => <Card key={index} className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">{experiment.title}</h4>
                  <p className="text-gray-600 text-sm mb-3">{experiment.description}</p>
                  <Badge variant="outline" className="bg-green-100 text-green-700 border-green-300">
                    {experiment.metric}
                  </Badge>
                </Card>)}
            </div>
          </section>

          {/* The 7 Levers Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The 7 Levers We Tune</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {levers.map((lever, index) => {
              const Icon = lever.icon;
              return <Card key={index} className="p-6 text-center">
                    <Icon className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-2">{lever.name}</h3>
                    <p className="text-gray-600 text-sm">{lever.target}</p>
                  </Card>;
            })}
            </div>
          </section>

          {/* 30-Day Plan */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">A 30-Day Build & Run Plan</h2>
            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-center mb-3">
                  <Badge className="bg-blue-100 text-blue-700 mr-3">Week 0–1</Badge>
                  <h3 className="font-semibold text-gray-900">Diagnose</h3>
                </div>
                <ul className="text-gray-700 space-y-1">
                  <li>• ICP, segments, messaging themes, baseline scorecard</li>
                  <li>• Tech setup: domains, dialer, enrichment, dashboard</li>
                </ul>
              </Card>

              <Card className="p-6">
                <div className="flex items-center mb-3">
                  <Badge className="bg-orange-100 text-orange-700 mr-3">Week 1–3</Badge>
                  <h3 className="font-semibold text-gray-900">Build</h3>
                </div>
                <ul className="text-gray-700 space-y-1">
                  <li>• Recruit/hire the cell; craft sequences and call guides</li>
                  <li>• Load first accounts; verify contacts; block calling windows</li>
                  <li>• Deliverability patterns on; dashboard live</li>
                </ul>
              </Card>

              <Card className="p-6">
                <div className="flex items-center mb-3">
                  <Badge className="bg-green-100 text-green-700 mr-3">Week 4+</Badge>
                  <h3 className="font-semibold text-gray-900">Run</h3>
                </div>
                <ul className="text-gray-700 space-y-1">
                  <li>• Daily execution: calls, replies, booking, notes</li>
                  <li>• Weekly coaching + report; 2-week message and list refresh</li>
                  <li>• Goal: consistent pipeline added and stable coverage 3–5×</li>
                </ul>
              </Card>
            </div>
          </section>

          {/* Scorecard Template */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Scorecard Template (steal this)</h2>
            <p className="text-lg text-gray-700 mb-6">Track these seven lines, weekly:</p>
            
            <Card className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b pb-2">
                    <span className="font-medium">1. Pipeline Added</span>
                    <span className="text-gray-600">$</span>
                  </div>
                  <div className="flex items-center justify-between border-b pb-2">
                    <span className="font-medium">2. Coverage</span>
                    <span className="text-gray-600">(aim for 3–5×)</span>
                  </div>
                  <div className="flex items-center justify-between border-b pb-2">
                    <span className="font-medium">3. Accounts Touched</span>
                    <span className="text-gray-600">(by segment)</span>
                  </div>
                  <div className="flex items-center justify-between border-b pb-2">
                    <span className="font-medium">4. Connect→Meeting Rate</span>
                    <span className="text-gray-600">(%)</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b pb-2">
                    <span className="font-medium">5. Show Rate</span>
                    <span className="text-gray-600">(%)</span>
                  </div>
                  <div className="flex items-center justify-between border-b pb-2">
                    <span className="font-medium">6. Stage Conversion</span>
                    <span className="text-gray-600">(by stage)</span>
                  </div>
                  <div className="flex items-center justify-between border-b pb-2">
                    <span className="font-medium">7. Cycle Time</span>
                    <span className="text-gray-600">(days)</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 mt-4 italic">
                If a number dips, we don't guess—we change one lever, run it for two weeks, and measure.
              </p>
            </Card>
          </section>

          {/* Who This Helps Most */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Who This Helps Most</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Perfect For:</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Founders and sales leaders who want repeatable outbound without building a full ops function</li>
                  <li>• SaaS and software services with mid-market motions</li>
                  <li>• Fintech, health, and staffing where cycle time and compliance matter</li>
                  <li>• Teams hiring BDRs who need operators to make them productive quickly</li>
                </ul>
              </Card>
              
              <Card className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Why Embedded Wins:</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• No black box. Everything lives in your tools</li>
                  <li>• Single operating rhythm. One cell, one dashboard, one weekly review</li>
                  <li>• Less coordination overhead. You spend time on decisions, not vendor management</li>
                  <li>• Compounding improvement. The same people learn your market and sharpen the motion</li>
                </ul>
              </Card>
            </div>
          </section>

          {/* Final Thought */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-8 rounded-lg text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Final Thought</h2>
              <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                Outbound isn't about clever lines or more software. It's about people, process, and pace—run consistently, 
                inside your company, with numbers everyone trusts. That's why we build the team and run it with the stack 
                included and a scoreboard that only cares about revenue.
              </p>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <Card className="p-8 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
              <h2 className="text-2xl font-bold mb-4">Ready to Build Your Embedded Outbound Cell?</h2>
              <p className="text-lg mb-6 opacity-90">
                Let's discuss how we can embed a full-time outbound team inside your company and start generating consistent pipeline.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" asChild>
                  <Link to="/contact">Schedule a Call</Link>
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-orange-600" asChild>
                  <Link to="/case-studies">View Case Studies</Link>
                </Button>
              </div>
            </Card>
          </section>
        </div>
      </div>
    </BlogArticleLayout>;
}