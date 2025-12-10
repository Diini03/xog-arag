import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowRight, Target, Zap, Users, TrendingUp, Clock, DollarSign, CheckCircle } from "lucide-react";

const OnePager = () => {
  const handleDownload = () => {
    window.print();
  };

  return (
    <>
      <style>{`
        @media print {
          @page {
            margin: 0.5in;
            size: A4;
          }
          
          [data-testid*="lovable"],
          [class*="lovable"],
          [id*="lovable"],
          .fixed,
          .sticky {
            display: none !important;
          }
          
          body * {
            visibility: visible;
          }
          
          #onepager-content, #onepager-content * {
            visibility: visible;
          }
          
          script, noscript, iframe, embed, object {
            display: none !important;
          }
        }
      `}</style>
      
      <div className="min-h-screen bg-white print:bg-white">
        <div className="print:hidden">
          <Header />
        </div>
        
        {/* Download Button */}
        <div className="fixed top-24 right-4 z-50 print:hidden">
          <Button onClick={handleDownload} className="bg-primary text-white hover:bg-primary/90">
            Download PDF
          </Button>
        </div>

        <div id="onepager-content" className="max-w-4xl mx-auto p-8 print:p-0">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              Revenue Engine as a Service
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Stop Waiting for Leads.<br />
              <span className="text-primary">Start Creating Them.</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Transform your startup from "hoping for referrals" to "predicting next month's revenue" 
              with LeadMamut's integrated BDR expertise. No hiring headaches. No ramp-up time. Just results.
            </p>
          </div>

          {/* Problem/Solution Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-2 border-red-100">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-red-600 mb-4">The Startup Reality</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>You're burning cash on ads that don't convert</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Referrals are great but unpredictable</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Hiring a BDR costs $120K+ and takes 6 months</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Your founding team is too busy to cold call</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Revenue feels like gambling, not science</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-100">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-green-600 mb-4">The LeadMamut Way</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>25-35 qualified leads delivered monthly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>15% conversion rate (3x industry average)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Start seeing results in 2 weeks, not 6 months</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Dedicated BDR embedded in your team</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>300% ROI in first 6 months</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* What Makes Us Different */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">Why Startups Choose LeadMamut Over Hiring</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">Instant Expertise</h3>
                  <p className="text-gray-600">Skip the 6-month ramp-up. Our BDRs have already perfected outbound for 50+ startups.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">AI-Enhanced</h3>
                  <p className="text-gray-600">40 domains, 160 emails, advanced tech stack. We make 50K+ touches look effortless.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">True Partnership</h3>
                  <p className="text-gray-600">Embedded in your Slack, weekly 1:1s with founders. We're your team, not a vendor.</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">Real Results, Real Fast</h2>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">25-35</div>
                <div className="text-gray-600">SQLs per month</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">15%</div>
                <div className="text-gray-600">Conversion rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">30</div>
                <div className="text-gray-600">Day avg. sales cycle</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">300%</div>
                <div className="text-gray-600">ROI in 6 months</div>
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <Card className="mb-12 border-l-4 border-l-primary">
            <CardContent className="p-8">
              <blockquote className="text-xl italic text-gray-700 mb-4">
                "Working with LeadMamut felt like we instantly gained a full, high-performing sales development department. 
                Their expertise, seamless integration, and focus on delivering qualified leads allowed us to achieve growth 
                we couldn't have managed on our own. It's more than a service; it's a true partnership."
              </blockquote>
              <div className="text-gray-600">
                <strong>Chief Revenue Officer</strong><br />
                Captain Compliance
              </div>
            </CardContent>
          </Card>

          {/* Pricing Comparison */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">The Math is Simple</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-600">Traditional Hiring</h3>
                  <div className="space-y-3 text-gray-600">
                    <div className="flex justify-between">
                      <span>BDR Salary + Benefits</span>
                      <span>$120,000/year</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tools & Software</span>
                      <span>$12,000/year</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Ramp-up Time (6 months)</span>
                      <span>$66,000 cost</span>
                    </div>
                    <div className="flex justify-between border-t pt-3 font-bold text-lg">
                      <span>Total Year 1</span>
                      <span>$198,000</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-primary">LeadMamut</h3>
                  <div className="space-y-3 text-gray-600">
                    <div className="flex justify-between">
                      <span>Monthly Service</span>
                      <span>$8,000/month</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Setup & Tools</span>
                      <span>Included</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Start Delivering</span>
                      <span>Week 1</span>
                    </div>
                    <div className="flex justify-between border-t pt-3 font-bold text-lg text-primary">
                      <span>Total Year 1</span>
                      <span>$96,000</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-green-50 rounded-lg text-center">
                    <span className="text-green-700 font-bold">Save $102,000 + Get Results Faster</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-primary rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to Stop Hoping and Start Knowing?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join 50+ startups who've transformed their revenue with LeadMamut's integrated BDR expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                className="bg-white text-primary hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
                onClick={() => window.location.href = '/contact'}
              >
                Book Your Strategy Call
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <div className="text-sm opacity-75">
                No setup fees • 30-day pilot available • Results in 2 weeks
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center mt-8 text-gray-600 print:block">
            <p>LeadMamut • hello@leadmamut.com • leadmamut.com</p>
          </div>
        </div>

        <div className="print:hidden">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default OnePager;