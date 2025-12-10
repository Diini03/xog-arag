import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, TrendingUp, Users, Target, Zap, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import { BlogPostMeta } from "@/components/blog/BlogPostMeta";
import SocialShare from "@/components/SocialShare";

const StartupSalesChallenges = () => {
  const challenges = [
    {
      icon: TrendingUp,
      title: "Limited Predictable Revenue Growth",
      problem: "Startups struggle with inconsistent lead flow and unpredictable sales cycles, making it difficult to forecast revenue and plan for growth.",
      solution: "Mamut's AI-driven outbound engine creates predictable pipeline flow with consistent lead qualification and nurturing processes.",
      keywords: "predictable revenue growth, startup sales forecasting, consistent lead generation"
    },
    {
      icon: Users,
      title: "Scaling Sales Teams Cost-Effectively",
      problem: "Hiring, training, and managing internal BDR teams requires significant capital investment and time, often exceeding startup budgets.",
      solution: "Our scalable BDR team model provides expert sales development representatives at 60% less cost than internal hires, with no management overhead.",
      keywords: "scalable sales teams, cost-effective BDR, startup sales scaling"
    },
    {
      icon: Target,
      title: "Targeting the Right Prospects",
      problem: "Without proper lead scoring and market intelligence, startups waste resources on unqualified prospects and miss high-value opportunities.",
      solution: "Advanced AI lead scoring and deep data intelligence identify prospects with highest conversion probability and buying intent signals.",
      keywords: "lead scoring, prospect targeting, AI-driven lead qualification"
    },
    {
      icon: Zap,
      title: "Creating Personalized Outreach at Scale",
      problem: "Generic outbound messages have low response rates, but personalizing each message manually doesn't scale with growth requirements.",
      solution: "AI-crafted hyper-personalized messaging combines automation with human expertise to create compelling outreach that resonates at scale.",
      keywords: "personalized outreach, AI messaging, scalable personalization"
    },
    {
      icon: DollarSign,
      title: "Managing Complex Sales Technology Stacks",
      problem: "Building and maintaining multiple sales tools, CRM integrations, and automation workflows requires technical expertise and ongoing management.",
      solution: "Complete plug-and-play technology stack with seamless CRM integration and automated workflow management, handled entirely by our team.",
      keywords: "sales technology stack, CRM integration, sales automation"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <article className="pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <BlogPostMeta 
              date="2025-07-04"
              readTime="12 min read"
              category="Startup Growth"
              author="Mamut Team"
            />
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#374151] leading-tight">
              The 5 Biggest Sales Challenges Startups Face and How Mamut Solves Them
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Discover the most common sales obstacles that prevent startup growth and learn how AI-driven go-to-market strategies can transform your outbound sales engine for predictable revenue scaling.
            </p>

            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-gray-700 leading-relaxed">
                Every startup reaches a critical inflection point where organic growth and inbound marketing alone aren't enough to sustain the rapid scaling required for market dominance. The transition from early-stage traction to predictable revenue growth presents unique challenges that can make or break a company's trajectory.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                After working with hundreds of startups navigating this crucial phase, we've identified five fundamental sales challenges that consistently emerge. More importantly, we've developed proven solutions that transform these obstacles into competitive advantages through AI-driven go-to-market strategies.
              </p>
            </div>

            {/* Challenges Section */}
            <div className="space-y-16">
              {challenges.map((challenge, index) => (
                <div key={index} className="border-l-4 border-[#FF6B35] pl-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-[#FF6B35] w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <challenge.icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#374151]">
                      Challenge #{index + 1}: {challenge.title}
                    </h2>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <Card className="border-red-200 bg-red-50">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-3 text-red-800">The Problem</h3>
                        <p className="text-red-700 leading-relaxed">{challenge.problem}</p>
                      </CardContent>
                    </Card>

                    <Card className="border-green-200 bg-green-50">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-3 text-green-800">Mamut's Solution</h3>
                        <p className="text-green-700 leading-relaxed">{challenge.solution}</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Key Benefits for Startups:</h4>
                    <p className="text-sm text-gray-600 italic">
                      Related keywords: {challenge.keywords}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Why This Matters Section */}
            <div className="mt-16 bg-gradient-to-r from-orange-50 to-gray-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6 text-[#374151]">
                Why These Solutions Transform Startup Growth
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-[#FF6B35] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-2xl">60%</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Cost Reduction</h3>
                  <p className="text-gray-600">Lower sales development costs compared to internal teams</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-[#E55A2B] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-2xl">3x</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Faster Scaling</h3>
                  <p className="text-gray-600">Quicker time-to-market with proven frameworks</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-[#374151] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-2xl">∞</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Zero Overhead</h3>
                  <p className="text-gray-600">No hiring, training, or management complexity</p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-16 text-center bg-gradient-to-r from-[#FF6B35] to-[#E55A2B] rounded-xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-4">Ready to Solve These Challenges?</h2>
              <p className="text-xl mb-6 text-orange-100">
                Let's discuss how Mamut's AI-driven go-to-market plugin can transform your startup's sales engine
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" className="bg-white text-[#FF6B35] hover:bg-gray-100 px-8 py-3">
                  Schedule Strategy Call
                </Button>
                <Link to="/integration-guide">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#FF6B35] px-8 py-3">
                    View Integration Guide <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>

            <SocialShare 
              url="https://leadmamut.com/blog/startup-sales-challenges" 
              title="The 5 Biggest Sales Challenges Startups Face and How Mamut Solves Them"
              description="Discover the most common sales obstacles that prevent startup growth and learn how AI-driven go-to-market strategies can transform your outbound sales engine for predictable revenue scaling."
            />
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default StartupSalesChallenges;
