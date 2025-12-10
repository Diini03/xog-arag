
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/blog/HeroSection";
import { BlogPostMeta } from "@/components/blog/BlogPostMeta";
import SocialShare from "@/components/SocialShare";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Bot, Users, Zap, TrendingUp, Clock, Target, AlertCircle, CheckCircle } from "lucide-react";
import { useEffect } from "react";

const BDRTeamAICopilot = () => {
  const currentUrl = window.location.href;
  const title = "Your BDR Team Needs a Co-Pilot: Why AI Isn't Coming for Their Jobs (It's Making Them Superheroes!)";
  const description = "Discover how AI transforms BDR teams from overworked manual-task-jugglers into strategic superheroes. Learn why AI isn't replacing your sales team - it's making them unstoppable.";

  useEffect(() => {
    // Set page title and meta description
    document.title = `${title} | Mamut`;
    
    // Update meta tags for better SEO and social sharing
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    // Open Graph tags for social media
    const ogTags = [
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: `${window.location.origin}/lovable-uploads/d728bba3-8705-4e19-9c90-f9b27f9ab089.png` },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:url', content: currentUrl },
      { property: 'og:type', content: 'article' },
      { property: 'og:site_name', content: 'Mamut' },
      { property: 'article:published_time', content: '2025-07-02T00:00:00Z' },
      { property: 'article:author', content: 'Mamut Team' },
      { property: 'article:section', content: 'Sales Strategy' },
      { property: 'article:tag', content: 'AI, BDR, Sales Automation, Lead Generation' }
    ];

    // X (formerly Twitter) Card tags
    const xTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: `${window.location.origin}/lovable-uploads/d728bba3-8705-4e19-9c90-f9b27f9ab089.png` },
      { name: 'twitter:site', content: '@Mamut' }
    ];

    // Add Open Graph meta tags
    ogTags.forEach(tag => {
      const existing = document.querySelector(`meta[property="${tag.property}"]`);
      if (existing) {
        existing.setAttribute('content', tag.content);
      } else {
        const meta = document.createElement('meta');
        meta.setAttribute('property', tag.property);
        meta.content = tag.content;
        document.head.appendChild(meta);
      }
    });

    // Add X Card meta tags
    xTags.forEach(tag => {
      const existing = document.querySelector(`meta[name="${tag.name}"]`);
      if (existing) {
        existing.setAttribute('content', tag.content);
      } else {
        const meta = document.createElement('meta');
        meta.setAttribute('name', tag.name);
        meta.content = tag.content;
        document.head.appendChild(meta);
      }
    });
  }, [currentUrl, title, description]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <HeroSection 
        title={title}
        description={description}
        category="AI & Automation"
        date="July 2, 2025"
        readTime="6 min read"
      />

      {/* Article Content */}
      <article className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg prose-gray">

            <div className="text-gray-700 leading-relaxed space-y-8 text-lg">
              
              <section>
                <p className="mb-6 text-xl font-medium text-[#374151]">
                  Heard the whispers? "AI is coming for our jobs!" Especially in sales, right? But what if I told you that for your BDR team, AI isn't the Terminator—it's the ultimate co-pilot?
                </p>
                
                <p className="mb-6">
                  Forget the fear. We're talking about AI transforming your Business Development Reps from overworked, manual-task-juggling humans into strategic superheroes. Seriously. This isn't about replacing them; it's about making them unstoppable.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-[#374151] mb-6 flex items-center">
                  <AlertCircle className="w-8 h-8 text-[#FF6B35] mr-3" />
                  The Old Way: The BDR Burnout Battle
                </h2>
                
                <p className="mb-6">
                  Let's be real. The traditional BDR role? It's a grind. We're talking about folks juggling over 80 outbound activities daily. Think endless manual research, trying to personalize messages one by one, and then the soul-crushing follow-up chase. It's inefficient, it's tedious, and frankly, it leads to burnout and missed opportunities.
                </p>

                <p className="mb-6">
                  This isn't just about time lost; it's about the opportunity cost. When your BDRs are stuck in the weeds, they're not building relationships, not strategizing, and definitely not getting real-time feedback on what's actually resonating. It's like having a Formula 1 driver stuck in traffic.
                </p>

                <Card className="border-l-4 border-red-500 bg-red-50">
                  <CardContent className="p-6">
                    <p className="text-red-700">
                      And let's not even get started on the hidden costs of high BDR turnover. Want to dive deeper into those? Check out our article on <Link to="/blog/hidden-costs-internal-bdr" className="text-[#FF6B35] hover:underline font-medium">the true cost of internal BDR teams</Link>.
                    </p>
                  </CardContent>
                </Card>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-[#374151] mb-6 flex items-center">
                  <Zap className="w-8 h-8 text-[#FF6B35] mr-3" />
                  Enter the Co-Pilot: AI to the Rescue
                </h2>
                
                <p className="mb-6">
                  So, how do we fix this? Enter AI. This isn't some sci-fi fantasy; it's the practical, game-changing co-pilot your BDR team needs. AI automates the repetitive, time-consuming stuff, freeing your human talent to focus on what they do best: being human.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                        <Target className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-[#374151] mb-4">Lead Gen & Personalization at Scale</h3>
                      <p className="text-gray-600">
                        Imagine AI tirelessly sifting through mountains of data, researching leads based on your Ideal Customer Profile (ICP), and enriching that data with all the juicy details. It can even spot buying signals you'd never catch.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                        <Clock className="w-6 h-6 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-[#374151] mb-4">Always-On & Always Optimizing</h3>
                      <p className="text-gray-600">
                        AI works 24/7, sending messages, tracking engagement (opens, clicks, replies), and sending those crucial follow-ups instantly. Responding within 5 minutes can boost conversion likelihood by 21X!
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <p className="mb-6">
                  Then, it crafts hyper-personalized messages—not just slapping a name on a template, but tailoring content based on a prospect's recent achievements, LinkedIn activity, or even funding rounds. This isn't just fast; it's smart.
                </p>

                <Card className="border-0 shadow-lg bg-green-50">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-[#374151] mb-4">Cost-Effective Scaling</h3>
                    <p className="text-gray-600 mb-4">
                      Think about it: AI handles massive volumes of tasks without needing coffee breaks, onboarding, or extra headcount costs. This dramatically slashes operational costs and lets you scale your sales efforts without a linear increase in expenses.
                    </p>
                    <p className="text-gray-600">
                      It's how you break away from traditional linear growth patterns. Curious about scaling without breaking the bank? Read our guide on <Link to="/blog/scale-outbound-without-breaking-budget" className="text-[#FF6B35] hover:underline font-medium">how to scale outbound without breaking your budget</Link>.
                    </p>
                  </CardContent>
                </Card>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-[#374151] mb-6 flex items-center">
                  <Users className="w-8 h-8 text-[#FF6B35] mr-3" />
                  The Human Touch: Where BDRs Become Superheroes
                </h2>
                
                <p className="mb-6">
                  So, what do your human BDRs do when AI handles the grunt work? They become strategic powerhouses. They focus on building genuine relationships, having those deep, insightful conversations, and truly understanding client needs.
                </p>

                <div className="bg-gradient-to-r from-[#FF6B35] to-[#E55A2B] text-white p-8 rounded-xl mb-8">
                  <h3 className="text-2xl font-bold mb-4">BDRs as Strategic Powerhouses</h3>
                  <ul className="space-y-3 text-orange-100">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                      Think strategically and spot subtle intent signals AI might miss
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                      Create entirely new playbooks based on real conversations
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                      Review AI-generated messages and make strategic tweaks
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                      Take over when a lead is warm and ready for human connection
                    </li>
                  </ul>
                </div>

                <p className="mb-6">
                  This partnership boosts productivity, shortens sales cycles, and leads to higher conversion rates. It also significantly improves BDR retention because they're no longer overwhelmed by tedious tasks; they're engaged in high-value, rewarding work.
                </p>

                <p className="mb-6">
                  They're not just making calls; they're building your brand and getting real-time feedback on messaging and offers, which is a super fast way to iterate and improve.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-[#374151] mb-6 flex items-center">
                  <TrendingUp className="w-8 h-8 text-[#FF6B35] mr-3" />
                  Your Future-Proof Sales Team
                </h2>
                
                <p className="mb-6">
                  The future of sales isn't human or AI. It's human plus AI. It's about leveraging the tireless efficiency and data-crunching power of AI to amplify the strategic thinking, empathy, and relationship-building skills of your human BDRs.
                </p>

                <p className="mb-6">
                  This co-pilot model isn't just a nice-to-have; it's how you build a predictable revenue engine that truly scales. It's how you humanize your company at scale, educate customers easier, and stay ahead of the competition.
                </p>

                <Card className="border-l-4 border-[#FF6B35] bg-orange-50">
                  <CardContent className="p-6">
                    <p className="text-gray-700">
                      Want to know more about building predictable revenue? Check out <Link to="/blog/why-startups-move-beyond-inbound" className="text-[#FF6B35] hover:underline font-medium">why startups are moving beyond inbound-only strategies</Link>.
                    </p>
                  </CardContent>
                </Card>

                <p className="mb-6 mt-8">
                  Ready to turn your BDR team into superheroes? Mamut's GTM-plugin model brings you this exact AI-powered, copywriter-backed solution, with experienced BDR talent who are already fluent in English and ready to hit the ground running.
                </p>

                <Card className="border-0 shadow-xl bg-gradient-to-r from-[#FF6B35] to-[#E55A2B] text-white">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-2xl font-bold mb-4">Ready to Transform Your BDR Team?</h3>
                    <p className="text-orange-100 mb-6">
                      Discover how Mamut's AI-powered GTM-plugin model turns your BDRs into strategic superheroes while automating the grunt work.
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

export default BDRTeamAICopilot;
