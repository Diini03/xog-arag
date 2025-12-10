
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, ArrowLeft, DollarSign, AlertCircle, Calculator, Users, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import SocialShare from "@/components/SocialShare";
import { useEffect } from "react";
import { HeroSection } from "@/components/blog/HeroSection";
import { CostCards } from "@/components/blog/CostCards";
import { CostBreakdownTable } from "@/components/blog/CostBreakdownTable";

const HiddenCostsInternalBDR = () => {
  const currentUrl = "https://leadmamut.com/blog/hidden-costs-internal-bdr";
  const title = "The True Cost of an Internal BDR Team: Why the GTM-Plugin Model Changes Everything";
  const description = "Building an in-house Business Development Representative (BDR) team seems simple, but the real cost goes way beyond salary. Hidden expenses lead to budget problems and slower growth.";

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
      { property: 'article:published_time', content: '2025-06-15T00:00:00+00:00' },
      { property: 'article:section', content: 'Operations' },
      { property: 'article:tag', content: 'BDR,Sales,Operations' }
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
      
      <HeroSection 
        title={title}
        description={description}
        category="Operations"
        date="June 15, 2025"
        readTime="8 min read"
      />

      {/* Article Content */}
      <article className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg prose-gray">

            <div className="text-gray-700 leading-relaxed space-y-8 text-lg">
              
              <section>
                <h2 className="text-3xl font-bold text-[#374151] mb-6 flex items-center">
                  <AlertCircle className="w-8 h-8 text-[#FF6B35] mr-3" />
                  The Hidden Costs of Building Your Own BDR Team
                </h2>
                
                <p className="mb-6">
                  Understanding why <Link to="/blog/why-startups-move-beyond-inbound" className="text-[#FF6B35] hover:underline">startups are moving beyond inbound-only strategies</Link> is just the beginning. The real challenge comes when deciding how to implement outbound sales effectively.
                </p>
                
                <p className="mb-6">
                  This article breaks down those costs and introduces the GTM-plugin model, a leaner, more predictable alternative that addresses the core issues most startups face when scaling outbound.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-[#374151] mb-6 flex items-center">
                  <DollarSign className="w-8 h-8 text-[#FF6B35] mr-3" />
                  The Full Financial Picture: What an Internal BDR Really Costs
                </h2>
                
                <p className="mb-6">
                  Understanding the full financial commitment for an internal BDR team means looking beyond just their salary. Many direct and indirect costs add up, making it much more expensive than you might think.
                </p>

                <CostCards />

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <Card className="border-l-4 border-red-500">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-[#374151] mb-3">Direct Pay: Salary & OTE</h3>
                      <p className="text-gray-600 mb-3">
                        Average US BDR total pay is around <strong>$91K/year</strong>, but that's just the start.
                      </p>
                      <p className="text-gray-600">
                        Some estimates reach $134,500 in high-cost areas like San Francisco.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-l-4 border-orange-500">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-[#374151] mb-3">Benefits & Overhead</h3>
                      <p className="text-gray-600">
                        Add about <strong>15% for benefits</strong> like health insurance and retirement, plus office costs, eating into your "runway".
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-semibold text-red-800 mb-4">Hiring & Onboarding Reality</h3>
                  <ul className="space-y-2 text-red-700">
                    <li>• Recruitment costs: <strong>12% to 22% of salary</strong></li>
                    <li>• Ramp-up time: <strong>3-4 months</strong> for new BDRs</li>
                    <li>• High turnover: <strong>34%+ average</strong></li>
                    <li>• Constant rehiring and lost revenue</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-semibold text-[#374151] mb-4">Training & Development</h3>
                  <p className="mb-4">
                    Ongoing training programs cost <strong>$420 to $1,197 per rep per year</strong>, plus internal coaching time. This ongoing investment is vital to keep BDRs effective.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-semibold text-[#374151] mb-4">Management & Supervision</h3>
                  <p className="mb-4">
                    A manager oversees 7 to 9 BDRs, adding about <strong>12.5% of their $85K salary per BDR</strong>. This scales linearly and is expensive.
                  </p>
                </div>

                <Card className="border-0 shadow-lg bg-yellow-50">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-[#374151] mb-4">Tech Stack Reality Check</h3>
                    <p className="mb-4">
                      To operate effectively, each BDR needs a comprehensive suite of sales technology tools. Think about it: a portal alone can run you around <strong>$800/month</strong>.
                    </p>
                    <div className="space-y-2 text-gray-600">
                      <p>• Clay ($800/month)</p>
                      <p>• Apollo.io ($99/month)</p>
                      <p>• Nooks, Orum, Salesfinity, or other Power Dialer ($300/month)</p>
                      <p>• LinkedIn Sales Navigator ($100/month)</p>
                      <p>• Sales Engagement Platforms ($15-$145/month)</p>
                      <p>• CRM systems ($67/month average)</p>
                      <p>• ChatGPT Plus ($25/month)</p>
                      <p>• OpenAI API credits ($80-$150/month)</p>
                    </div>
                  </CardContent>
                </Card>

                <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-semibold text-orange-800 mb-4">Email Infrastructure Nightmare</h3>
                  <p className="mb-4 text-orange-700">
                    To send 50,000 emails a month (about 16,000 unique contacts), you're looking at:
                  </p>
                  <ul className="space-y-2 text-orange-700">
                    <li>• Around <strong>100 inboxes</strong> - roughly $500 for mailboxes alone</li>
                    <li>• About <strong>30 domains</strong> at $15 per domain per year</li>
                    <li>• Credits for 16,000 contacts</li>
                    <li>• 8-9 platforms for signals and accurate data</li>
                    <li>• AI and OpenAI credits for personalization</li>
                  </ul>
                  <p className="mt-4 font-semibold text-orange-800">This stuff adds up fast.</p>
                </div>

                <CostBreakdownTable />
              </section>

              <section>
                <h2 className="text-3xl font-bold text-[#374151] mb-6">The GTM-Plugin Model: A Game Changer</h2>
                
                <p className="mb-6">
                  The GTM-plugin model offers a powerful alternative, reshaping sales development costs and efficiency. It excels at cutting overhead, providing access to vetted talent, and offering unmatched scalability.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <DollarSign className="w-6 h-6 text-green-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-[#374151] mb-3">Cost Savings</h3>
                      <p className="text-gray-600">
                        Save 30-70% on salaries and eliminate overhead costs like benefits and office space.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-[#374151] mb-3">Vetted Talent</h3>
                      <p className="text-gray-600">
                        Immediate access to qualified BDRs with proven track records and established processes.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <TrendingUp className="w-6 h-6 text-purple-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-[#374151] mb-3">Scalability</h3>
                      <p className="text-gray-600">
                        Rapidly scale up or down without hiring burdens or long-term commitments.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <p className="mb-6">
                  You can rapidly scale sales development up or down based on market demands, without long-term commitments or extra staff training. This model effectively eliminates the "revolving door"—the continuous cycle of recruiting, hiring, training, and onboarding that plagues internal teams due to high BDR turnover.
                </p>

                <p className="mb-6">
                  Learn more about <Link to="/blog/scale-outbound-without-breaking-budget" className="text-[#FF6B35] hover:underline">how to scale outbound without breaking your budget</Link> and discover the compelling advantages of the GTM-plugin model.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-[#374151] mb-6">Investing Smarter: The Path Forward</h2>
                
                <p className="mb-6">
                  Internal BDR team costs are far more complex and expensive than perceived. The cumulative burden of benefits, recruitment, training, management, tech, and inefficient manual messaging creates a heavy financial and operational burden, hindering predictable scaling.
                </p>

                <p className="mb-6">
                  The GTM-plugin model is a powerful alternative. By shifting fixed costs to predictable variable ones, it offers financial agility. It provides immediate access to vetted talent and proven processes, bypassing costly internal team building.
                </p>

                <Card className="border-0 shadow-xl bg-gradient-to-r from-[#FF6B35] to-[#E55A2B] text-white">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-2xl font-bold mb-4">Ready to Eliminate Hidden Costs?</h3>
                    <p className="text-orange-100 mb-6">
                      It's not just a cost-saving measure; it's a strategic pathway to a leaner, more effective outbound engine, driving predictable revenue without breaking the bank.
                    </p>
                    <Button 
                      variant="secondary" 
                      className="bg-white text-[#FF6B35] hover:bg-gray-100"
                      onClick={() => window.open('https://calendly.com/bruno-leadmamut/30min', '_blank')}
                    >
                      Discover Mamut's GTM-Plugin
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

export default HiddenCostsInternalBDR;
