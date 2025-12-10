
import { ArrowRight, Users, TrendingUp, Clock, DollarSign, Target, CheckCircle, BarChart3, Download, Printer } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const CaptainComplianceCaseStudy = () => {
  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Create a downloadable version
    const element = document.getElementById('case-study-content');
    if (element) {
      window.print();
    }
  };

  return (
    <>
      <style>{`
        @media print {
          @page {
            margin: 0.5in;
            size: A4;
          }
          
          /* Hide all browser-generated headers and footers */
          @page :first {
            margin-top: 0.5in;
          }
          
          /* Hide any lovable badges or links */
          [data-testid*="lovable"],
          [class*="lovable"],
          [id*="lovable"],
          .fixed,
          .sticky {
            display: none !important;
          }
          
          /* Ensure clean printing */
          body * {
            visibility: visible;
          }
          
          #case-study-content, #case-study-content * {
            visibility: visible;
          }
          
          /* Hide any external scripts or badges */
          script, 
          noscript,
          iframe,
          embed,
          object {
            display: none !important;
          }
        }
      `}</style>
      
      <div className="min-h-screen bg-white print:bg-white">
        <div className="print:hidden">
          <Header />
        </div>
      
      {/* Action Buttons - Hidden in print */}
      <div className="fixed top-24 right-4 z-50 flex flex-col gap-2 print:hidden">
        <Button onClick={handlePrint} className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white">
          <Printer className="w-4 h-4 mr-2" />
          Print PDF
        </Button>
        <Button onClick={handleDownload} variant="outline" className="border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white">
          <Download className="w-4 h-4 mr-2" />
          Download
        </Button>
      </div>

      <div id="case-study-content" className="container mx-auto px-4 py-8 print:px-0 print:py-4">
        
        {/* Header Section */}
        <div className="text-center mb-12 print:mb-8">
          <Badge className="bg-[#FF6B35] text-white mb-4 print:mb-2">Case Study</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#374151] leading-tight print:text-3xl print:mb-4">
            Captain Compliance: Architecting Predictable Revenue Streams
          </h1>
          <p className="text-xl text-gray-600 mb-8 print:text-lg print:mb-4">
            How LeadMamut's Integrated BDR Expertise Transformed a Startup's Growth Trajectory
          </p>
          
          {/* Key Metrics Banner */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8 print:grid-cols-4 print:gap-2 print:mb-4">
            <Card className="border-[#FF6B35]/20">
              <CardContent className="p-4 text-center print:p-2">
                <div className="text-2xl font-bold text-[#FF6B35] print:text-xl">25-35</div>
                <div className="text-sm text-gray-600">SQLs per month</div>
              </CardContent>
            </Card>
            <Card className="border-[#FF6B35]/20">
              <CardContent className="p-4 text-center print:p-2">
                <div className="text-2xl font-bold text-[#FF6B35] print:text-xl">15%</div>
                <div className="text-sm text-gray-600">Conversion rate</div>
              </CardContent>
            </Card>
            <Card className="border-[#FF6B35]/20">
              <CardContent className="p-4 text-center print:p-2">
                <div className="text-2xl font-bold text-[#FF6B35] print:text-xl">30 days</div>
                <div className="text-sm text-gray-600">Sales cycle</div>
              </CardContent>
            </Card>
            <Card className="border-[#FF6B35]/20">
              <CardContent className="p-4 text-center print:p-2">
                <div className="text-2xl font-bold text-[#FF6B35] print:text-xl">300%</div>
                <div className="text-sm text-gray-600">ROI achieved</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Company Overview */}
        <Card className="mb-8 print:mb-4">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-[#374151]">
              <Target className="w-5 h-5 text-[#FF6B35]" />
              Company Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6 print:gap-4">
              <div>
                <h3 className="font-semibold mb-2 text-[#374151]">About Captain Compliance</h3>
                <p className="text-gray-600 mb-4">
                  An innovative early-stage startup in the data privacy and compliance management industry, 
                  simplifying complex regulations like GDPR and CPRA for businesses.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#FF6B35]" />
                    <span className="text-sm">Data Privacy & Compliance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#FF6B35]" />
                    <span className="text-sm">Early-stage Startup</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#FF6B35]" />
                    <span className="text-sm">B2B SaaS Platform</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg print:p-4">
                <h4 className="font-semibold mb-3 text-[#374151]">Industry Challenges</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Complex regulatory landscape</li>
                  <li>• High customer acquisition costs</li>
                  <li>• Long sales cycles</li>
                  <li>• Need for specialized expertise</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* The Challenge */}
        <Card className="mb-8 print:mb-4">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-[#374151]">
              <TrendingUp className="w-5 h-5 text-[#FF6B35]" />
              The Challenge: Navigating Early-Stage Growth
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6 print:space-y-4">
              <p className="text-gray-600">
                Captain Compliance entered the critical data privacy and compliance management industry with a clear mission 
                but faced a familiar startup hurdle: the absence of a predictable, scalable revenue generation mechanism.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 print:gap-4">
                <div>
                  <h4 className="font-semibold mb-3 text-[#374151]">Initial Growth Constraints</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Reliance on organic referrals</li>
                    <li>• Limited channel partnerships</li>
                    <li>• Negligible paid advertising returns</li>
                    <li>• No dedicated outbound capability</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-[#374151]">Resource Limitations</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Lean organizational structure</li>
                    <li>• Limited internal bandwidth</li>
                    <li>• Lack of specialized sales expertise</li>
                    <li>• Focus on product development</li>
                  </ul>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4 print:p-3">
                <h4 className="font-semibold text-red-800 mb-2">Key Pain Points</h4>
                <div className="text-sm text-red-700">
                  <p className="mb-2">
                    <strong>Unpredictable Growth:</strong> Dependence on referrals meant inconsistent lead flow
                  </p>
                  <p>
                    <strong>Sales Pipeline Bottleneck:</strong> No systematic approach to outbound prospecting
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* The Solution */}
        <Card className="mb-8 print:mb-4">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-[#374151]">
              <Users className="w-5 h-5 text-[#FF6B35]" />
              The Solution: Strategic Partnership with LeadMamut
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6 print:space-y-4">
              <p className="text-gray-600">
                The pivotal shift occurred when Captain Compliance's CRO, with prior successful experience with LeadMamut, 
                introduced our specialized BDR services. This established trust enabled confident decision-making.
              </p>

              {/* Solution Components */}
              <div className="grid md:grid-cols-2 gap-6 print:gap-4">
                <Card className="border-[#FF6B35]/20">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Strategic Foundation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Customized outbound playbook</li>
                      <li>• Target audience definition</li>
                      <li>• Value proposition refinement</li>
                      <li>• Multi-channel strategy</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-[#FF6B35]/20">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Execution Excellence</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• 50,000+ targeted emails</li>
                      <li>• LinkedIn engagement</li>
                      <li>• Direct phone outreach</li>
                      <li>• Rigorous lead qualification</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Technology Stack */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg print:p-4">
                <h4 className="font-semibold mb-4 text-[#374151]">Technology Infrastructure</h4>
                <div className="grid md:grid-cols-3 gap-4 print:gap-2">
                  <div>
                    <h5 className="font-medium mb-2 text-[#374151]">Lead Tools</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Clay</li>
                      <li>• Lead Magic</li>
                      <li>• Hunter.io</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2 text-[#374151]">Outreach Tools</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Findymail</li>
                      <li>• People Search</li>
                      <li>• Smart Lead</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2 text-[#374151]">Infrastructure</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 40 domains</li>
                      <li>• 160 email accounts</li>
                      <li>• HubSpot integration</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results Section */}
        <Card className="mb-8 print:mb-4">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-[#374151]">
              <BarChart3 className="w-5 h-5 text-[#FF6B35]" />
              The Results: Transformation to Predictable Revenue
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-8 print:space-y-4">
              
              {/* Results Overview */}
              <div className="grid md:grid-cols-2 gap-8 print:gap-4">
                <div>
                  <h4 className="font-semibold mb-4 text-[#374151]">Key Performance Metrics</h4>
                  
                  <div className="space-y-4 print:space-y-2">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">SQLs Generated Monthly</span>
                        <span className="text-sm font-bold text-[#FF6B35]">25-35</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Conversion Rate</span>
                        <span className="text-sm font-bold text-[#FF6B35]">15%</span>
                      </div>
                      <Progress value={75} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Sales Cycle Reduction</span>
                        <span className="text-sm font-bold text-[#FF6B35]">30 days</span>
                      </div>
                      <Progress value={90} className="h-2" />
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-4 text-[#374151]">Business Impact</h4>
                  <div className="space-y-4 print:space-y-2">
                    <Card className="border-green-200 bg-green-50">
                      <CardContent className="p-4 print:p-3">
                        <div className="flex items-center gap-2 mb-2">
                          <DollarSign className="w-4 h-4 text-green-600" />
                          <span className="font-medium text-green-800">ROI Achievement</span>
                        </div>
                        <p className="text-sm text-green-700">300% ROI within 6 months</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-blue-200 bg-blue-50">
                      <CardContent className="p-4 print:p-3">
                        <div className="flex items-center gap-2 mb-2">
                          <Clock className="w-4 h-4 text-blue-600" />
                          <span className="font-medium text-blue-800">Time Savings</span>
                        </div>
                        <p className="text-sm text-blue-700">200+ hours per month reclaimed</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>

              {/* Results Table */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-200">
                  <thead>
                    <tr className="bg-[#FF6B35] text-white">
                      <th className="border border-gray-300 p-3 text-left print:p-2">Metric</th>
                      <th className="border border-gray-300 p-3 text-left print:p-2">Before LeadMamut</th>
                      <th className="border border-gray-300 p-3 text-left print:p-2">After LeadMamut</th>
                      <th className="border border-gray-300 p-3 text-left print:p-2">Improvement</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="border border-gray-300 p-3 font-medium print:p-2">Monthly SQLs</td>
                      <td className="border border-gray-300 p-3 print:p-2">5-10 (referrals)</td>
                      <td className="border border-gray-300 p-3 print:p-2">25-35</td>
                      <td className="border border-gray-300 p-3 text-green-600 font-medium print:p-2">+250%</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3 font-medium print:p-2">Conversion Rate</td>
                      <td className="border border-gray-300 p-3 print:p-2">8-10%</td>
                      <td className="border border-gray-300 p-3 print:p-2">15%</td>
                      <td className="border border-gray-300 p-3 text-green-600 font-medium print:p-2">+50%</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 p-3 font-medium print:p-2">Sales Cycle</td>
                      <td className="border border-gray-300 p-3 print:p-2">45-60 days</td>
                      <td className="border border-gray-300 p-3 print:p-2">30 days</td>
                      <td className="border border-gray-300 p-3 text-green-600 font-medium print:p-2">-50%</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3 font-medium print:p-2">Pipeline Predictability</td>
                      <td className="border border-gray-300 p-3 print:p-2">Low</td>
                      <td className="border border-gray-300 p-3 print:p-2">High</td>
                      <td className="border border-gray-300 p-3 text-green-600 font-medium print:p-2">Significant</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Testimonial */}
        <Card className="mb-8 bg-gradient-to-br from-orange-50 to-orange-100 border-[#FF6B35]/20 print:mb-4">
          <CardContent className="p-8 print:p-4">
            <div className="text-center">
              <blockquote className="text-lg italic text-gray-700 mb-4 print:text-base">
                "Working with LeadMamut felt like we instantly gained a full, high-performing sales development department. 
                Their unparalleled expertise, seamless integration, and relentless focus on delivering truly qualified leads 
                allowed us to achieve growth we simply couldn't have managed on our own. It's more than a service; 
                it's a true partnership that consistently delivers tangible, transformative results."
              </blockquote>
              <div className="font-semibold text-[#374151]">
                Captain Compliance CRO
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Takeaways */}
        <Card className="mb-8 print:mb-4">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-[#374151]">
              <CheckCircle className="w-5 h-5 text-[#FF6B35]" />
              Key Takeaways & Success Factors
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6 print:gap-4">
              <div>
                <h4 className="font-semibold mb-3 text-[#374151]">Success Factors</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Established trust through previous relationship</li>
                  <li>• Comprehensive technology infrastructure</li>
                  <li>• Embedded BDR integration</li>
                  <li>• Continuous optimization and feedback</li>
                  <li>• Full transparency and reporting</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-[#374151]">Lessons Learned</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Specialized expertise accelerates results</li>
                  <li>• Integration is key to partnership success</li>
                  <li>• Predictable systems enable scalable growth</li>
                  <li>• Quality over quantity drives conversions</li>
                  <li>• Transparency builds trust and efficiency</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-[#374151] text-white print:bg-gray-800">
          <CardContent className="p-8 text-center print:p-4">
            <h3 className="text-2xl font-bold mb-4 print:text-xl">Ready to Transform Your Sales Pipeline?</h3>
            <p className="text-gray-300 mb-6 print:mb-4">
              Like Captain Compliance, discover how LeadMamut's integrated BDR solutions can empower your sales team, 
              optimize your pipeline, and unlock your full market potential.
            </p>
            <div className="print:hidden">
              <Button className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white px-8 py-3">
                Contact Us Today
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <div className="hidden print:block text-center">
              <p className="font-semibold">Contact LeadMamut for a personalized consultation</p>
              <p className="text-sm text-gray-300">Visit our website or reach out directly</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="print:hidden">
        <Footer />
      </div>
      </div>
    </>
  );
};

export default CaptainComplianceCaseStudy;
