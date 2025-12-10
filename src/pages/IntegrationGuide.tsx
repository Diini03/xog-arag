import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Zap, Settings, Target, BarChart3, Users, Link as LinkIcon, Brain, Database, Mail, Phone, MessageSquare, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const IntegrationGuide = () => {
  const integrationSteps = [
    {
      step: "01",
      title: "Discovery & Alignment",
      subtitle: "Let's Get on the Same Page",
      description: "Our dedicated GTM engineer (who also acts as your BDR manager – saving you that extra headcount cost!) dives deep into your business to understand your ICP, value proposition, current sales process, and team dynamics.",
      icon: Target,
      details: [
        "Ideal Customer Profile (ICP) analysis",
        "Value proposition alignment", 
        "Current sales process mapping",
        "Team dynamics and communication preferences"
      ]
    },
    {
      step: "02",
      title: "Connecting the Dots",
      subtitle: "Seamless Communication & Data Flow",
      description: "We seamlessly integrate our powerful tech stack into your existing communication channels and CRM. Our BDRs operate as a true extension of your team, communicating where you communicate.",
      icon: LinkIcon,
      details: [
        "Operating as part of your team in Slack/Teams",
        "Participating in your Google Meetings",
        "Attending regular team syncs",
        "Automated data flow to your CRM"
      ]
    },
    {
      step: "03",
      title: "Customizing Your Workflow",
      subtitle: "Making It Authentically Yours",
      description: "We tailor automation and outreach sequences to fit your brand voice, sales cycle, and specific business needs with AI-crafted hyper-personalized messaging.",
      icon: Settings,
      details: [
        "AI-crafted hyper-personalized messaging",
        "Brand voice integration",
        "Custom automation workflows",
        "Expert copywriter collaboration"
      ]
    },
    {
      step: "04",
      title: "Launch & Optimize",
      subtitle: "Continuous Growth Engine",
      description: "Our BDRs start generating qualified leads while our GTM engineer continuously monitors and optimizes performance based on real-time data.",
      icon: BarChart3,
      details: [
        "AI-powered lead generation",
        "Real-time performance monitoring",
        "Continuous process optimization",
        "Predictable pipeline growth"
      ]
    }
  ];

  const advancedFeatures = [
    {
      icon: Database,
      title: "Deep Data Intelligence & Signal Evaluation",
      description: "We go way beyond basic company info. Our proprietary blend evaluates complex signals like buying intent, technographic data, hiring trends, and job changes to identify prospects ready to buy right now."
    },
    {
      icon: Brain,
      title: "AI-Powered Lead & Account Scoring",
      description: "Our cutting-edge AI analyzes rich data to predict which leads and accounts are most likely to convert, ensuring focus on the absolute best prospects and maximizing your ROI."
    },
    {
      icon: Mail,
      title: "AI-Crafted Hyper-Personalized Messaging",
      description: "Our AI, guided by expert copywriters, crafts messages that are truly personalized at scale, leveraging deep insights to create outreach that resonates and cuts through the noise."
    },
    {
      icon: Phone,
      title: "Multi-Channel Orchestration & Parallel Dialers",
      description: "Advanced parallel dialers and multi-channel outreach across email, LinkedIn, and calls to maximize efficiency and ensure we reach prospects wherever they are."
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "No IT Headaches",
      description: "We bring and manage the entire complex tech stack. You focus on closing deals without the massive expense of building your own."
    },
    {
      icon: ArrowRight,
      title: "Faster Time-to-Value",
      description: "Get qualified leads flowing quickly, powered by our advanced tools, without the long ramp-up or cost of building your own tech stack."
    },
    {
      icon: CheckCircle,
      title: "Clean, Actionable Data",
      description: "Our tools feed directly into your CRM, giving your sales team accurate information automatically without manual entry."
    },
    {
      icon: BarChart3,
      title: "Predictable Pipeline",
      description: "See results directly in your systems, enabling accurate forecasting and confident growth planning."
    },
    {
      icon: Users,
      title: "Humanized Sales",
      description: "Our integrated approach ensures personalized, relationship-building outreach powered by sophisticated tech."
    },
    {
      icon: MessageSquare,
      title: "True Team Integration",
      description: "Our BDRs join your Slack channels, meetings, and team syncs, operating as genuine extensions of your team."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-orange-50 via-white to-orange-100">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#FF6B35] to-[#374151] bg-clip-text text-transparent">
              Plug and Play Integration
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              How Mamut integrates seamlessly with your sales engine - no headaches, no system overhauls, 
              just predictable growth that plugs directly into your existing workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="border-[#FF6B35] text-[#FF6B35] hover:bg-orange-50 px-8 py-3">
                View Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              So, you're ready to supercharge your sales with Mamut. Awesome! You've heard about our AI-powered BDRs, 
              our expert copywriters, and how we help companies like yours build predictable revenue. But maybe you're thinking, 
              "How does this actually plug into my existing business? Is it going to be a massive headache? Do I need to buy a bunch of new software?"
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              Good questions! And here's the straight talk: This isn't about ripping out your current systems or forcing you 
              into a whole new tech stack. It's about Mamut becoming a natural extension of your team, fitting right into your 
              existing Go-to-Market (GTM) engine and communication flow. We bring our proven, cutting-edge tools directly to you, 
              making your entire sales operation sing louder and more effectively than ever before. 
              <strong> We're all about seamless integration, not stressful overhauls.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#374151] mb-6">
              Our Philosophy: We Adapt to YOU (and Bring the Firepower)
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              At Mamut, we believe integration should be a <strong>superpower, not a pain point</strong>. 
              Our goal is to become a natural extension of your team, fitting right into your existing 
              GTM engine and communication flow. This means we don't just send you leads; we ensure our advanced tools 
              and expert BDRs work with your people, in your channels, to deliver leads directly into your systems, ready for action.
            </p>
            <div className="mt-8 p-6 bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl">
              <p className="text-lg font-semibold text-[#FF6B35]">
                Think of us as the ultimate "plug-and-play" solution for your sales development. We bring the heavy lifting, so you can focus on what you do best.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proprietary Tech Stack */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#374151] mb-6">
                The Mamut Advantage: Our Proprietary Tech Stack (Your Secret Weapon)
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
                Forget the headache and massive expense of building your own complex sales tech stack. We've already done it. 
                Mamut brings a powerhouse of more than 15 specialized tools, meticulously chosen, integrated, and continuously 
                optimized to deliver unparalleled outbound results. These aren't just basic tools; they're the cutting-edge 
                solutions that would cost you a fortune to acquire, integrate, and manage yourself.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {advancedFeatures.map((feature) => (
                <Card key={feature.title} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <feature.icon className="w-12 h-12 text-[#FF6B35] mb-4" />
                    <h3 className="text-xl font-bold text-[#374151] mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 p-6 bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl">
              <h3 className="text-lg font-bold text-[#374151] mb-3">Robust Email Infrastructure</h3>
              <p className="text-gray-600">
                We know email deliverability is everything. Our email infrastructure isn't just about sending emails; 
                it's built for high volume and high deliverability. This means managing multiple sending domains, 
                warming up inboxes, and continuously validating email lists to ensure your messages land in the inbox, 
                not the spam folder. This complex, high-performing setup is all handled by us, so you don't have to worry about the 
                intricacies of maintaining a top-tier email system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Playbook */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#374151] mb-6">
                The Mamut Integration Playbook: Seamlessly Joining Your Team
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                So, how does this all fit into your day-to-day? It's a straightforward, collaborative process designed for speed, 
                efficiency, and genuine teamwork. We don't just layer on top; we become part of your operational fabric.
              </p>
            </div>

            <div className="space-y-16">
              {integrationSteps.map((step, index) => (
                <div key={step.step} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
                  <div className="lg:w-1/2">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-[#FF6B35] text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                        {step.step}
                      </div>
                      <step.icon className="w-8 h-8 text-[#FF6B35]" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#374151] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-lg text-[#FF6B35] font-semibold mb-4">
                      {step.subtitle}
                    </p>
                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                      {step.description}
                    </p>
                    <ul className="space-y-3">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-[#FF6B35] mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="lg:w-1/2">
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl">
                      <step.icon className="w-24 h-24 text-[#FF6B35] mx-auto" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#374151] mb-6">
                What This Means for YOU: No Headaches, Just Growth
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Mamut isn't just a service; it's an extension of your team, seamlessly integrated 
                to drive predictable growth. We take the complexity and cost out of sales development 
                so you can focus on what you do best: building an amazing company.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit) => (
                <Card key={benefit.title} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <benefit.icon className="w-12 h-12 text-[#FF6B35] mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-[#374151] mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#374151] mb-4">
                Related Resources
              </h2>
              <p className="text-xl text-gray-600">
                Dive deeper into our approach and strategies
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-[#374151] mb-3">
                    Why Move Beyond Inbound-Only
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Discover why successful startups are building predictable outbound engines for fast, sustainable growth.
                  </p>
                  <Link to="/blog/why-startups-move-beyond-inbound">
                    <Button variant="outline" className="border-[#FF6B35] text-[#FF6B35] hover:bg-orange-50">
                      Read More <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-[#374151] mb-3">
                    The True Cost of Internal BDRs
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Learn about the hidden expenses of building an in-house BDR team and discover the GTM-plugin alternative.
                  </p>
                  <Link to="/blog/hidden-costs-internal-bdr">
                    <Button variant="outline" className="border-[#FF6B35] text-[#FF6B35] hover:bg-orange-50">
                      Read More <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-[#374151] mb-3">
                    AI Co-Pilot for BDR Teams
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Discover how AI transforms BDR teams into strategic superheroes without replacing human expertise.
                  </p>
                  <Link to="/blog/bdr-team-ai-copilot">
                    <Button variant="outline" className="border-[#FF6B35] text-[#FF6B35] hover:bg-orange-50">
                      Read More <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#FF6B35] to-[#E55A2B]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to plug in and grow?
            </h2>
            <p className="text-xl mb-8 text-orange-100">
              Let's chat about how Mamut can integrate with your unique sales engine and 
              start generating predictable, qualified leads for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" className="bg-white text-[#FF6B35] hover:bg-gray-100 px-8 py-3 text-lg">
                Schedule Integration Call
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#FF6B35] px-8 py-3 text-lg">
                View ROI Calculator
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IntegrationGuide;
