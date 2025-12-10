import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, ArrowLeft, Target, Users, Zap, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import SocialShare from "@/components/SocialShare";
import { useEffect } from "react";

const ScaleOutboundWithoutBreakingBudget = () => {
  const currentUrl = "https://leadmamut.com/blog/scale-outbound-without-breaking-budget";
  const title = "How to Scale Outbound Without Breaking Your Budget";
  const description = "You've got a killer product and found your market fit. Time to hit the gas! Here's the proven framework for implementing outbound at scale with integrated teams, tools, and processes.";

  useEffect(() => {
    // Set page title
    document.title = `${title} | Mamut - Outbound Installation System`;

    // Remove all existing meta tags
    const metaSelectors = [
      'meta[name="description"]',
      'meta[property^="og:"]',
      'meta[name^="twitter:"]',
      'meta[property^="article:"]'
    ];
    
    metaSelectors.forEach(selector => {
      document.querySelectorAll(selector).forEach(meta => meta.remove());
    });

    // Create meta tags with proper LinkedIn requirements
    const metaData = [
      { name: 'description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: currentUrl },
      { property: 'og:type', content: 'article' },
      { property: 'og:site_name', content: 'Mamut' },
      { property: 'og:locale', content: 'en_US' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:site', content: '@Mamut' },
      { name: 'twitter:creator', content: '@Mamut' },
      { property: 'article:author', content: 'Mamut' },
      { property: 'article:published_time', content: '2025-06-10T00:00:00+00:00' },
      { property: 'article:section', content: 'Growth' },
      { property: 'article:tag', content: 'Growth,Scaling,Budget' }
    ];

    // Add meta tags
    metaData.forEach(({ name, property, content }) => {
      const meta = document.createElement('meta');
      if (name) meta.setAttribute('name', name);
      if (property) meta.setAttribute('property', property);
      meta.setAttribute('content', content);
      document.head.appendChild(meta);
    });

    // Cleanup on unmount
    return () => {
      document.title = "Mamut - Outbound Installation System";
      metaSelectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(meta => meta.remove());
      });
      
      // Restore original meta tags
      const originalMetas = [
        { name: 'description', content: 'Professional BDR services and B2B lead generation for startups. Outsourced sales development team from Latin America. Get qualified appointments and pipeline growth at 60% less cost.' },
        { property: 'og:title', content: 'MAMUT' },
        { property: 'og:description', content: 'AI-driven go-to-market plugin for startups ready to scale beyond inbound' },
        { property: 'og:image', content: '/lovable-uploads/eac12b9c-5fb2-4b07-96de-df4a89cd8fe9.png' }
      ];
      
      originalMetas.forEach(({ name, property, content }) => {
        const meta = document.createElement('meta');
        if (name) meta.setAttribute('name', name);
        if (property) meta.setAttribute('property', property);
        meta.setAttribute('content', content);
        document.head.appendChild(meta);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
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
                Growth
              </span>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                June 10, 2025
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                6 min read
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#374151] leading-tight">
              {title}
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg prose-gray">

            <div className="text-gray-700 leading-relaxed space-y-8 text-lg">
              
              <section>
                <h2 className="text-3xl font-bold text-[#374151] mb-6 flex items-center">
                  <Target className="w-8 h-8 text-[#FF6B35] mr-3" />
                  The Scaling Puzzle: Growth Without the GTM Headache
                </h2>
                
                <p className="mb-6">
                  After understanding <Link to="/blog/why-startups-move-beyond-inbound" className="text-[#FF6B35] hover:underline">why startups are moving beyond inbound-only strategies</Link> and recognizing <Link to="/blog/hidden-costs-internal-bdr" className="text-[#FF6B35] hover:underline">the hidden costs of building an internal BDR team</Link>, the next challenge becomes clear: how do you scale effectively?
                </p>
                
                <p className="mb-6">
                  The truth is, scaling outbound isn't just about throwing money at it. It's about smart strategy, integrated systems, and a lean approach that makes every dollar count. This article gives you a framework to scale outbound, focusing on getting your teams, tools, and processes working together to drive predictable revenue without breaking the bank.
                </p>

                <Card className="border-l-4 border-[#FF6B35] bg-orange-50">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-[#374151] mb-3">Key Insight</h3>
                    <p className="text-gray-700">
                      Scaling outbound effectively means building a well-oiled machine, not just adding more people and tools. It's about working smarter, not just harder.
                    </p>
                  </CardContent>
                </Card>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-[#374151] mb-6">The Blueprint for Scalable Outbound</h2>
                
                <p className="mb-6">
                  To scale outbound effectively, you need a structured approach focused on efficiency. Think of it as building a well-oiled machine with four key components.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                        <Target className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-[#374151] mb-4">1. Know Your ICP & Value Prop</h3>
                      <p className="text-gray-600 mb-4">
                        Before outreach, get crystal clear on who you're selling to and why they should care. This is the foundation of cost-effective outbound.
                      </p>
                      <ul className="space-y-2 text-gray-600 text-sm">
                        <li>• Define your market (TAM, SAM, SOM)</li>
                        <li>• Create detailed ICPs</li>
                        <li>• Analyze existing customers</li>
                        <li>• Focus on growing sectors with real pain</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                        <Users className="w-6 h-6 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-[#374151] mb-4">2. Build Integrated Teams</h3>
                      <p className="text-gray-600 mb-4">
                        Scaling outbound means building a specialized, integrated team. For max sales growth, roles should be specialized.
                      </p>
                      <ul className="space-y-2 text-gray-600 text-sm">
                        <li>• <strong>BDRs:</strong> 90%+ focus on generating leads</li>
                        <li>• <strong>AEs:</strong> Focus on demos and closing</li>
                        <li>• Clear career progression paths</li>
                        <li>• Cross-functional collaboration</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-gradient-to-r from-[#FF6B35] to-[#E55A2B] text-white p-8 rounded-xl mb-8">
                  <h3 className="text-2xl font-bold mb-4 flex items-center">
                    <Zap className="w-8 h-8 mr-3" />
                    Your Value Proposition Must Be Crystal Clear
                  </h3>
                  <div className="text-orange-100 space-y-3">
                    <p>• <strong>What problem do you solve for me?</strong></p>
                    <p>• <strong>How do you solve it?</strong></p>
                    <p>• <strong>Why are you better?</strong></p>
                  </div>
                  <p className="mt-4 text-orange-100">
                    When you find people with real pain points and data, you're consulting, not just selling – way more effective and less "salesy".
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-[#374151] mb-6 flex items-center">
                  <Zap className="w-8 h-8 text-[#FF6B35] mr-3" />
                  Use Smart Tools: The Right Tech, Not Just More Tech
                </h2>
                
                <p className="mb-6">
                  You don't need every shiny tool. You need the right ones that integrate seamlessly and automate repetitive tasks. A solid tech foundation includes:
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-4">
                    <Card className="border-l-4 border-blue-500">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-[#374151] mb-2">CRM System</h4>
                        <p className="text-gray-600 text-sm">Your central data hub. Customize fields, build automated workflows, create dashboards. (e.g., Salesforce, HubSpot)</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-l-4 border-green-500">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-[#374151] mb-2">Sales Engagement Platform</h4>
                        <p className="text-gray-600 text-sm">Essential for multi-channel outreach automation and managing sequences. (e.g., Outreach.io, ActiveCampaign)</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="space-y-4">
                    <Card className="border-l-4 border-purple-500">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-[#374151] mb-2">Data & Lead Generation</h4>
                        <p className="text-gray-600 text-sm">Critical for identifying ideal prospects and enriching data. (e.g., LinkedIn Sales Navigator, ZoomInfo, Apollo.io)</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-l-4 border-orange-500">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-[#374151] mb-2">Email Infrastructure</h4>
                        <p className="text-gray-600 text-sm">Dedicated warm-up and validation services ensure deliverability and prevent spam issues.</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">The AI Advantage</h3>
                  <p className="mb-4 text-blue-700">
                    Use AI for lead generation, scoring, drafting/sending messages, and admin tasks. AI sifts data, pulls details, and scores leads faster and more accurately than humans.
                  </p>
                  <ul className="space-y-2 text-blue-700">
                    <li>• Automate repetitive sales outreach</li>
                    <li>• Craft personalized messages at scale</li>
                    <li>• Multiply your best reps' skills</li>
                    <li>• Focus team on higher-value activities</li>
                  </ul>
                </div>

                <p className="mb-6">
                  The goal: automate repetitive sales outreach, so your team focuses on higher-value activities like building relationships. Remember, it's "process over prompts" for effective AI use.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-[#374151] mb-6">Use Smart Processes: Playbooks and Sequences</h2>
                
                <p className="mb-6">
                  A strong, documented sales process is a must for scalability. This ensures consistency and reliable data.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Target className="w-6 h-6 text-purple-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-[#374151] mb-3">Sales Playbook</h3>
                      <p className="text-gray-600">
                        A written guide outlining your entire sales process from prospecting to closing.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Zap className="w-6 h-6 text-green-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-[#374151] mb-3">Outreach Sequences</h3>
                      <p className="text-gray-600">
                        Design logical multi-channel sequences (8-12 touchpoints over 2-4 weeks).
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-[#374151] mb-3">Qualification Frameworks</h3>
                      <p className="text-gray-600">
                        Clear criteria to ensure BDRs pass only truly qualified leads to closers.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <Card className="border-l-4 border-[#FF6B35] bg-orange-50">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-[#374151] mb-3">Remember</h3>
                    <p className="text-gray-700">
                      The tools don't make the difference; the process does. Focus on building repeatable, scalable processes that your team can execute consistently.
                    </p>
                  </CardContent>
                </Card>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-[#374151] mb-6 flex items-center">
                  <BarChart3 className="w-8 h-8 text-[#FF6B35] mr-3" />
                  Measure and Optimize: Data-Driven Improvement
                </h2>
                
                <p className="mb-6">
                  You can't improve what you don't measure. Consistent tracking and analysis are crucial for growth.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <Card className="border-0 shadow-lg bg-blue-50">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-blue-800 mb-4">Activity Metrics</h3>
                      <ul className="space-y-2 text-blue-700 text-sm">
                        <li>• Accounts researched</li>
                        <li>• Outreach attempts</li>
                        <li>• Conversations initiated</li>
                        <li>• Follow-up completion rates</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-0 shadow-lg bg-green-50">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-green-800 mb-4">Outcome Metrics</h3>
                      <ul className="space-y-2 text-green-700 text-sm">
                        <li>• Meetings scheduled</li>
                        <li>• Opportunities created</li>
                        <li>• Pipeline value generated</li>
                        <li>• Closed deals</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-0 shadow-lg bg-purple-50">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-purple-800 mb-4">Key KPIs</h3>
                      <ul className="space-y-2 text-purple-700 text-sm">
                        <li>• Conversion rates</li>
                        <li>• Customer Acquisition Cost</li>
                        <li>• Pipeline velocity</li>
                        <li>• Email/call metrics</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <p className="mb-6">
                  Continuously tracking these helps you identify what works and make data-driven adjustments. This feedback loop is essential for continuous improvement and scaling without waste.
                </p>

                <p className="mb-6">
                  However, building and managing all these components internally can be complex and expensive. That's where solutions like  BDRs become an attractive alternative to internal scaling challenges.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-[#374151] mb-6">Your Budget-Friendly Path to Outbound Dominance</h2>
                
                <p className="mb-6">
                  Scaling outbound doesn't have to mean sacrificing your budget or sanity. By focusing on a clear ICP and value prop, building specialized teams, using smart tech (especially AI), implementing streamlined processes, and committing to data-driven optimization, you can build a powerful, predictable outbound engine that fuels sustainable growth.
                </p>

                <p className="mb-6">
                  It's about working smarter, not just harder. The framework outlined here helps you avoid the common pitfalls that lead to budget overruns and inefficient scaling.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-[#374151] mb-4">DIY Approach</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Build internal team</li>
                        <li>• Invest in tools and training</li>
                        <li>• Manage ongoing operations</li>
                        <li>• Handle turnover and scaling</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-0 shadow-lg bg-[#FF6B35] text-white">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-4">GTM-Plugin Approach</h3>
                      <ul className="space-y-2 text-orange-100">
                        <li>• Ready-to-deploy team</li>
                        <li>• Integrated tools and processes</li>
                        <li>• Predictable monthly costs</li>
                        <li>• Instant scalability</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <Card className="border-0 shadow-xl bg-gradient-to-r from-[#FF6B35] to-[#E55A2B] text-white">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-2xl font-bold mb-4">Ready to Scale Without the Headache?</h3>
                    <p className="text-orange-100 mb-6">
                      Explore Mamut's GTM-plugin model and see how we can help you implement these frameworks without the operational complexity and hidden costs.
                    </p>
                    <Button 
                      variant="secondary" 
                      className="bg-white text-[#FF6B35] hover:bg-gray-100"
                      onClick={() => window.open('https://calendly.com/bruno-leadmamut/30min', '_blank')}
                    >
                      Book Your Strategy Call
                    </Button>
                  </CardContent>
                </Card>
              </section>
            </div>

            {/* Social Share Section */}
            <div className="border-t border-gray-200 mt-12 pt-8">
              <SocialShare 
                url={currentUrl}
                title={title}
                description={description}
              />
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default ScaleOutboundWithoutBreakingBudget;
