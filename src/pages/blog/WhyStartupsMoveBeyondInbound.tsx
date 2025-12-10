
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, ArrowLeft, TrendingUp, Users, Target } from "lucide-react";
import { Link } from "react-router-dom";
import SocialShare from "@/components/SocialShare";
import { useEffect } from "react";

const WhyStartupsMoveBeyondInbound = () => {
  const currentUrl = "https://leadmamut.com/blog/why-startups-move-beyond-inbound";
  const title = "Why Startups Are Moving Past Inbound-Only for Predictable Growth";
  const description = "Most startups kick off with inbound marketing, but for fast, predictable growth, just waiting for people to show up often falls short. Discover why successful startups are building predictable outbound engines.";

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
      { property: 'article:published_time', content: '2025-06-20T00:00:00+00:00' },
      { property: 'article:section', content: 'Strategy' },
      { property: 'article:tag', content: 'Strategy,Growth,Outbound' }
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
                Strategy
              </span>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                June 20, 2025
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                5 min read
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
                  <TrendingUp className="w-8 h-8 text-[#FF6B35] mr-3" />
                  Why Inbound Alone Isn't Enough for Fast-Growing Startups
                </h2>
                
                <p className="mb-6">
                  Inbound is great for small customers, sure. But if you're playing the B2B game, especially aiming for enterprise, you need outbound. Your ideal customer isn't just browsing your website looking for answers. If you want to get 'em, you gotta go get 'em.
                </p>
                
                <p className="mb-6">
                  Today's successful startups know inbound is just one piece. They're not ditching it; they're adding strong outbound engines. This shift helps them build steady revenue and scale way faster. This article shows why inbound-only slows you, outbound wins, and how combining them creates a supercharged growth engine.
                </p>
              </section>

              <Card className="border-l-4 border-[#FF6B35] bg-orange-50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-[#374151] mb-3">Key Takeaway</h3>
                  <p className="text-gray-700">
                    Modern outbound, powered by AI and sophisticated tech stacks, is outcompeting companies still running the old playbook. It's about building a brand, not just making a sale.
                  </p>
                </CardContent>
              </Card>

              <section>
                <h2 className="text-3xl font-bold text-[#374151] mb-6 flex items-center">
                  <Target className="w-8 h-8 text-[#FF6B35] mr-3" />
                  The Inbound-Only Trap: Why Waiting Around Can Slow Your Startup Down
                </h2>
                
                <p className="mb-6">
                  Inbound marketing has perks, but for startups needing rapid, predictable growth, it brings challenges.
                </p>

                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-semibold text-[#374151] mb-4">Slow Burn & Delayed Payoff</h3>
                  <p className="mb-4">
                    Creating quality inbound content takes consistent effort and time. Big results usually take months. For companies needing quick returns, this long wait is a major drawback. Inbound is a "long game," tough for startups with limited cash (your "runway").
                  </p>
                  <p>
                    Too much early money into inbound can cause cash flow issues, even threatening survival. Investors want a clear, predictable path to revenue. Relying only on inbound can make them nervous, hindering funding. You want to avoid "guessing, hope, and frantic last-minute deal-hustling".
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-semibold text-[#374151] mb-4">All the Skills & Tough Competition</h3>
                  <p className="mb-4">
                    Successful inbound isn't simple; it needs web design, killer content, SEO, and social media savvy. Small teams often struggle to do all this well, stretching themselves thin.
                  </p>
                  <p>
                    Competition makes it harder. If established rivals dominate search, breaking through is tough for new entrants. Limited resources plus fierce competition mean inbound alone might not generate enough quality leads fast enough.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-semibold text-[#374151] mb-4">Less Control & Niche Problems</h3>
                  <p className="mb-4">
                    Inbound is reactive: you wait for customers to find you. This means less control over lead generation pace and type. If your solution is new or in a niche where people aren't actively searching, inbound might not work.
                  </p>
                  <p>
                    This lack of control creates "reactive growth." Inbound captures existing interest but struggles to create new demand or proactively engage specific, high-value accounts unaware of their need. New inbound leads might not trust you right away, so you'll need to work harder to build that connection.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-[#374151] mb-6 flex items-center">
                  <Users className="w-8 h-8 text-[#FF6B35] mr-3" />
                  The Power of Predictable Outbound: Building Your Own Revenue Engine
                </h2>
                
                <p className="mb-6">
                  Unlike inbound's "wait and see" approach, outbound sales is proactive and controlled, giving startups the predictability and targeting crucial for rapid scaling.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-[#374151] mb-4">Predictable Revenue</h3>
                      <p className="text-gray-600">
                        Every business wants predictable, repeatable, scalable revenue. Outbound sales lets you clearly say: "Invest in one more salesperson, and they'll do X activities for Y results."
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-[#374151] mb-4">Targeted Prospecting</h3>
                      <p className="text-gray-600">
                        You can pinpoint and directly engage decision-makers in your ideal customer profiles. This precision makes efforts more efficient and boosts conversions.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <p className="mb-6">
                  Modern outbound isn't "spray and pray." With detailed Ideal Customer Profiles (ICPs) and buyer personas, you craft personalized messages that truly resonate. This turns cold outreach into genuine conversation, improving conversion rates and brand perception.
                </p>

                <p className="mb-6">
                  This proactive approach creates a powerful "demand creation" engine. Unlike inbound, which primarily captures existing interest, outbound actively generates demand by reaching out to people who might not even know they have a problem or that your solution exists.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-[#374151] mb-6">The Hybrid Advantage: How Outbound Teams Up with Inbound</h2>
                
                <p className="mb-6">
                  The smartest startups know the real magic happens when you combine inbound and outbound. This hybrid approach creates synergy, amplifying reach, accelerating customer journeys, and optimizing marketing ROI.
                </p>

                <div className="bg-gradient-to-r from-[#FF6B35] to-[#E55A2B] text-white p-8 rounded-xl mb-8">
                  <h3 className="text-2xl font-bold mb-4">Boosted Brand Visibility & Diverse Leads</h3>
                  <p className="text-orange-100 mb-4">
                    Mixing inbound's attraction with outbound's proactive reach boosts overall brand visibility. This diversifies lead generation, tapping both organic and paid opportunities.
                  </p>
                  <p className="text-orange-100">
                    This integrated strategy creates "full-funnel" synergy, capturing leads at every stage and accelerating conversion.
                  </p>
                </div>

                <p className="mb-6">
                  While inbound builds trust over time, outbound tactics like targeted emails or retargeting ads speed up lead nurturing. This combined approach bridges the "trust gap" for new inbound leads.
                </p>

                <p className="mb-6">
                  Blending inbound's cost-effectiveness with outbound's rapid reach optimizes marketing budgets. This dual approach is crucial for capital efficiency, vital for startups. Consider exploring how <Link to="/blog/hidden-costs-internal-bdr" className="text-[#FF6B35] hover:underline">the hidden costs of building an internal BDR team</Link> can impact your budget planning.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-[#374151] mb-6">Embrace a Balanced GTM Strategy</h2>
                
                <p className="mb-6">
                  Moving beyond inbound-only isn't rejecting its value, but recognizing its limits for rapid, predictable startup growth. By integrating predictable outbound, startups gain control over lead generation, accelerate sales, and build a more robust revenue engine.
                </p>

                <p className="mb-6">
                  This isn't your grandpa's cold calling. Modern outbound, powered by complex tech stacks and AI, allows you to educate your customer easier, build real human relationships, and truly humanize your company. Plus, these direct conversations are a super fast way to test messaging, offers, and get real-time feedback.
                </p>

                <p className="mb-6">
                  To truly scale and achieve sustainable growth, startups must embrace a hybrid Go-to-Market strategy. Learn more about <Link to="/blog/scale-outbound-without-breaking-budget" className="text-[#FF6B35] hover:underline">how to scale outbound without breaking your budget</Link> and discover the advantages of the GTM-plugin model.
                </p>

                <Card className="border-0 shadow-xl bg-gradient-to-r from-[#FF6B35] to-[#E55A2B] text-white">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-2xl font-bold mb-4">Ready to Build Your Predictable Outbound Engine?</h3>
                    <p className="text-orange-100 mb-6">
                      Discover how Mamut's GTM-plugin model helps startups build predictable outbound engines without the hidden costs and operational complexities of an internal team.
                    </p>
                    <Button 
                      variant="secondary" 
                      className="bg-white text-[#FF6B35] hover:bg-gray-100"
                      onClick={() => window.open('https://calendly.com/bruno-leadmamut/30min', '_blank')}
                    >
                      Book Discovery Call
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

export default WhyStartupsMoveBeyondInbound;
