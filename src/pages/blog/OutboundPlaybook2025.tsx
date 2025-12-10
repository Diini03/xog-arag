import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calculator, Target, TrendingUp, Users, DollarSign, Zap, CheckCircle, ArrowRight, BarChart3, Brain, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import { BlogPostMeta } from "@/components/blog/BlogPostMeta";
import SocialShare from "@/components/SocialShare";
import { useOpenGraphMeta } from "@/hooks/useOpenGraphMeta";
const heroImage = "/lovable-uploads/outbound-playbook-2025-hero.png";

const OutboundPlaybook2025 = () => {
  const currentUrl = "https://leadmamut.com/blog/outbound-playbook-2025-math-behind-outreach-volume";
  const title = "Your 2025 Outbound Playbook: The Math Behind Your Outreach Volume";
  const description = "Stop guessing with outbound volume. Learn the data-driven framework to reverse-engineer your revenue goals into precise outreach targets for predictable growth in 2025.";

  // Use the Open Graph meta hook
  useOpenGraphMeta({
    title,
    description,
    image: heroImage,
    url: currentUrl,
    type: 'article',
    author: 'Mamut Team',
    publishedTime: '2025-08-06T00:00:00+00:00',
    section: 'Strategy',
    tags: 'Outbound Sales, Sales Strategy, Revenue Planning, Lead Generation, Sales Math, B2B Sales'
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <article className="pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog" className="inline-flex items-center text-[#FF6B35] hover:text-[#E55A2B] mb-6">
              <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
              Back to Blog
            </Link>

            <BlogPostMeta 
              date="August 6, 2025"
              readTime="15 min read"
              category="Strategy"
              author="Mamut Team"
            />
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#374151] leading-tight">
              Your 2025 Outbound Playbook: The Math Behind Your Outreach Volume
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Stop guessing with outbound volume. Learn the data-driven framework to reverse-engineer your revenue goals into precise outreach targets for predictable growth in 2025.
            </p>

            <div className="mb-12">
              <img 
                src={heroImage}
                alt="Professional dashboard showing outbound sales metrics and mathematical framework for revenue planning" 
                className="w-full rounded-xl shadow-lg"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none space-y-12">
              
              {/* Introduction */}
              <section>
                <h2 className="text-3xl font-bold text-[#374151] mb-6 flex items-center">
                  <TrendingUp className="w-8 h-8 text-[#FF6B35] mr-3" />
                  The Old Way vs. The New Math of Outbound
                </h2>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Let's get real for a minute. If you're a sales leader, you know the drill: hit your number, every quarter, no excuses. For years, the approach to outbound was simple—more activity equals more results. The "spray and pray" mindset was king. But in 2025, that's not just outdated; it's a fast track to burnout and missed revenue targets.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Today's market is too noisy, prospects are too busy, and your budget is too tight for guesswork. Modern outbound isn't about volume for the sake of volume; it's about precision, predictability, and a data-driven plan. It's about reverse-engineering your revenue goals to find the exact volume and type of outreach you need to succeed.
                </p>

                <Card className="border-l-4 border-[#FF6B35] bg-orange-50">
                  <CardContent className="p-6">
                    <p className="text-gray-700 font-medium">
                      This isn't a theory. It's the playbook for predictable growth. Let's break down the math and show you how a strategic approach—not a frantic one—will get you to your number every time.
                    </p>
                  </CardContent>
                </Card>
              </section>

              {/* Flawed Volume First */}
              <section>
                <h2 className="text-3xl font-bold text-[#374151] mb-6 flex items-center">
                  <Target className="w-8 h-8 text-[#FF6B35] mr-3" />
                  The Flawed "Volume First" Mentality and What to Fix
                </h2>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  The old way of thinking says, "Send 10,000 emails and see what sticks." It's a recipe for low reply rates, poor sender reputation, and a sales team spending their time chasing bad leads. A "good" cold email reply rate in 2025 is between 5-10%, with top performers breaking 10%. Anything less means your targeting, messaging, or both are off.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <Card className="border-l-4 border-red-500 bg-red-50">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-red-800 mb-3">Industry Disconnect</h3>
                      <p className="text-red-700">
                        A BDR selling a $500/month SaaS tool to SMBs has a completely different sales cycle and volume requirement than a BDR selling a $250k enterprise solution. A one-size-fits-all approach is a one-size-fits-none approach.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-l-4 border-orange-500 bg-orange-50">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-orange-800 mb-3">Rep Burnout</h3>
                      <p className="text-orange-700">
                        Pushing reps to hit a massive, arbitrary activity quota leads to fatigue and poor personalization. As a result, they spend just two hours per day actually selling.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-yellow-500 bg-yellow-50">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-yellow-800 mb-3">Bad Data, Bad Results</h3>
                      <p className="text-yellow-700">
                        Sending to a huge list without proper segmentation and personalization is the quickest way to get ignored. The best teams in 2025 are working smarter with smaller, highly-targeted lists of 100-300 active accounts per rep.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold text-[#374151] mb-4 flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                    The Fix?
                  </h3>
                  <p className="text-lg text-gray-700">
                    Don't start with the number of emails to send. Start with the number you need to hit.
                  </p>
                </div>

                <Card className="border-0 shadow-lg bg-gray-50 mt-8">
                  <CardContent className="p-6">
                    <p className="text-gray-700">
                      Learn more about why startups are moving beyond spray-and-pray tactics in our analysis: <Link to="/blog/why-startups-move-beyond-inbound" className="text-[#FF6B35] hover:underline font-medium">Why Startups Are Moving Past Inbound-Only for Predictable Growth</Link>.
                    </p>
                  </CardContent>
                </Card>
              </section>

              {/* Mamut Framework */}
              <section>
                <h2 className="text-3xl font-bold text-[#374151] mb-6 flex items-center">
                  <Calculator className="w-8 h-8 text-[#FF6B35] mr-3" />
                  The Mamut Reverse-Engineering Framework: From Revenue to Outreach
                </h2>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  This is the core of our approach. We take your ultimate goal—your revenue target—and work backward to determine the exact number of qualified conversations and outreach activities required to get there. It's a data-centric, bottom-up model that gives you complete control and predictability.
                </p>

                {/* Custom Professional Infographic */}
                <div className="bg-slate-700 rounded-xl p-8 mb-12">
                  <h4 className="text-2xl font-bold text-white text-center mb-8">Outbound Sales Volume Calculator</h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
                    <div className="bg-white rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-slate-700 mb-2">$1M</div>
                      <div className="text-sm text-gray-600">Revenue Goals</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-slate-700 mb-2">20</div>
                      <div className="text-sm text-gray-600">Deals Needed</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-slate-700 mb-2">100</div>
                      <div className="text-sm text-gray-600">Opportunities</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-slate-700 mb-2">200</div>
                      <div className="text-sm text-gray-600">Meetings</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-slate-700 mb-2">800</div>
                      <div className="text-sm text-gray-600">Replies</div>
                    </div>
                  </div>

                  <div className="flex justify-center mb-8">
                    <div className="w-0 h-0 border-l-[150px] border-r-[150px] border-t-[200px] border-l-transparent border-r-transparent border-t-[#FF6B35] relative">
                      <div className="absolute -top-32 left-1/2 transform -translate-x-1/2 bg-white rounded-full w-16 h-16 flex items-center justify-center">
                        <Target className="w-8 h-8 text-[#FF6B35]" />
                      </div>
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white rounded-lg px-4 py-2">
                        <div className="text-lg font-bold text-slate-700">7,618</div>
                        <div className="text-sm text-gray-600">Prospects</div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
                    <div>
                      <h5 className="font-semibold mb-2">Reply Rate Needed</h5>
                      <ul className="text-sm space-y-1 text-gray-300">
                        <li>• Email: 7.5% average</li>
                        <li>• LinkedIn: 17.5% average</li>
                        <li>• Cold Calls: 4% average</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">Outreach Volumes</h5>
                      <div className="text-sm text-gray-300">
                        <div>Mix of channels for optimal conversion results</div>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-[#374151] mb-6">Here's how we reverse-engineer the math:</h3>

                {/* Step 1 */}
                <div className="mb-12">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 bg-[#FF6B35] rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">1</div>
                    <h4 className="text-2xl font-bold text-[#374151]">Define Your Revenue Goal & Key Metrics</h4>
                  </div>

                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    First, what's the number? Let's assume your company has a revenue goal of $1 million in new business this quarter. You also need to know your:
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <Card className="border-0 shadow-lg">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                          <DollarSign className="w-6 h-6 text-green-600" />
                        </div>
                        <h5 className="text-xl font-semibold text-[#374151] mb-3">Average Deal Size (ADS)</h5>
                        <p className="text-gray-600">The average value of a closed deal. Let's say it's $50,000.</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-0 shadow-lg">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                          <BarChart3 className="w-6 h-6 text-blue-600" />
                        </div>
                        <h5 className="text-xl font-semibold text-[#374151] mb-3">Win Rate</h5>
                        <p className="text-gray-600">The percentage of qualified opportunities that close. Let's say your historical win rate is 20%.</p>
                      </CardContent>
                    </Card>
                  </div>

                  <Card className="border-l-4 border-green-500 bg-green-50">
                    <CardContent className="p-6">
                      <h5 className="text-xl font-semibold text-green-800 mb-4">Calculation:</h5>
                      <div className="space-y-2 text-green-700 font-mono">
                        <p>$1M Revenue Goal ÷ $50K ADS = <strong>20 deals</strong> to close this quarter.</p>
                        <p>20 deals ÷ 20% Win Rate = <strong>100 qualified opportunities</strong> needed.</p>
                      </div>
                      <p className="text-green-700 mt-4 font-medium">
                        So, to hit your revenue target, you need to generate 100 qualified opportunities. That's our first, and most important, milestone.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Step 2 */}
                <div className="mb-12">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 bg-[#FF6B35] rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">2</div>
                    <h4 className="text-2xl font-bold text-[#374151]">Calculate Your Meeting & Engagement Goals</h4>
                  </div>

                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Now that we know the number of opportunities, we can figure out the number of qualified meetings and positive engagements needed. These metrics are what your BDRs control.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <Card className="border-0 shadow-lg">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                          <Users className="w-6 h-6 text-purple-600" />
                        </div>
                        <h5 className="text-xl font-semibold text-[#374151] mb-3">Meeting-to-Opportunity Conversion Rate</h5>
                        <p className="text-gray-600">The percentage of qualified meetings that turn into a sales opportunity. Let's say your rate is 50%.</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-0 shadow-lg">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                          <Zap className="w-6 h-6 text-orange-600" />
                        </div>
                        <h5 className="text-xl font-semibold text-[#374151] mb-3">Reply-to-Meeting Conversion Rate</h5>
                        <p className="text-gray-600">The percentage of positive replies that lead to a booked meeting. A good rate in 2025 is 20-30%. Let's use 25% as our benchmark.</p>
                      </CardContent>
                    </Card>
                  </div>

                  <Card className="border-l-4 border-blue-500 bg-blue-50">
                    <CardContent className="p-6">
                      <h5 className="text-xl font-semibold text-blue-800 mb-4">Calculation:</h5>
                      <div className="space-y-2 text-blue-700 font-mono">
                        <p>100 opportunities ÷ 50% Conversion Rate = <strong>200 qualified meetings</strong> needed.</p>
                        <p>200 meetings ÷ 25% Conversion Rate = <strong>800 positive replies</strong> needed.</p>
                      </div>
                      <p className="text-blue-700 mt-4 font-medium">
                        Suddenly, hitting a $1M quarter isn't a vague aspiration—it's a tangible goal of 800 positive replies.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Step 3 */}
                <div className="mb-12">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 bg-[#FF6B35] rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">3</div>
                    <h4 className="text-2xl font-bold text-[#374151]">Define Your Outreach Volume by Channel</h4>
                  </div>

                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Finally, with your engagement goal of 800 positive replies, you can determine your outreach volume. Here's where it gets interesting, because different industries and outreach channels have vastly different benchmarks.
                  </p>

                  <div className="overflow-x-auto mb-8">
                    <table className="w-full border-collapse border border-gray-300 bg-white rounded-lg overflow-hidden shadow-lg">
                      <thead>
                        <tr className="bg-[#FF6B35] text-white">
                          <th className="border border-gray-300 p-4 text-left font-semibold">Industry</th>
                          <th className="border border-gray-300 p-4 text-center font-semibold">Cold Email</th>
                          <th className="border border-gray-300 p-4 text-center font-semibold">LinkedIn</th>
                          <th className="border border-gray-300 p-4 text-center font-semibold">Cold Call</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="hover:bg-gray-50">
                          <td className="border border-gray-300 p-4 font-medium">SaaS</td>
                          <td className="border border-gray-300 p-4 text-center">5-10%</td>
                          <td className="border border-gray-300 p-4 text-center">15-20%</td>
                          <td className="border border-gray-300 p-4 text-center">3-5%</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="border border-gray-300 p-4 font-medium">FinTech</td>
                          <td className="border border-gray-300 p-4 text-center">3-7%</td>
                          <td className="border border-gray-300 p-4 text-center">10-15%</td>
                          <td className="border border-gray-300 p-4 text-center">2-4%</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="border border-gray-300 p-4 font-medium">Manufacturing</td>
                          <td className="border border-gray-300 p-4 text-center">7-12%</td>
                          <td className="border border-gray-300 p-4 text-center">12-18%</td>
                          <td className="border border-gray-300 p-4 text-center">5-8%</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="border border-gray-300 p-4 font-medium">Professional Services</td>
                          <td className="border border-gray-300 p-4 text-center">8-15%</td>
                          <td className="border border-gray-300 p-4 text-center">15-25%</td>
                          <td className="border border-gray-300 p-4 text-center">4-7%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="text-sm text-gray-500 mb-6 italic">Benchmarks from late 2025 data, assuming high-quality personalization.</p>

                  <Card className="border-l-4 border-purple-500 bg-purple-50">
                    <CardContent className="p-6">
                      <h5 className="text-xl font-semibold text-purple-800 mb-4">Example: SaaS Company Calculation</h5>
                      <p className="text-purple-700 mb-4">Let's say you're in SaaS and aim for a 50/50 split between email and LinkedIn. To get 800 positive replies:</p>
                      <div className="space-y-2 text-purple-700 font-mono">
                        <p>Email: 400 replies ÷ 7.5% average reply rate = <strong>5,333 unique prospects</strong></p>
                        <p>LinkedIn: 400 replies ÷ 17.5% average reply rate = <strong>2,285 unique prospects</strong></p>
                        <p className="font-bold">Total unique prospects to engage: <strong>7,618 for the quarter</strong></p>
                      </div>
                      <p className="text-purple-700 mt-4 font-medium">
                        Now, you can build your outreach sequences around that number, knowing exactly how many touches per prospect you need to send. This is the predictable revenue engine in action.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Mamut Advantage */}
              <section>
                <h2 className="text-3xl font-bold text-[#374151] mb-6 flex items-center">
                  <Rocket className="w-8 h-8 text-[#FF6B35] mr-3" />
                  The Mamut Advantage: Making the Math Work for You
                </h2>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  This framework is great in theory, but in practice, getting accurate data and hitting those benchmarks is where most companies fail. That's where Mamut's AI-powered GTM plugin model comes in.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  We don't just give you a calculator. We are the engine that makes the math work, delivering go-to-market efficiency you can't get with a DIY approach.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                        <Brain className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-[#374151] mb-4">Advanced Data & Signals</h3>
                      <p className="text-gray-600">
                        We bring a heavy-duty tech stack (with over 15 tools) that evaluates buyer intent signals. This ensures every prospect we contact has a higher likelihood of engagement, boosting your reply rates and making the math more reliable.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                        <Zap className="w-6 h-6 text-purple-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-[#374151] mb-4">AI-Powered Hyper-Personalization</h3>
                      <p className="text-gray-600">
                        Our AI helps our BDRs craft messaging that is so relevant and personal, it cuts through the noise. This directly impacts your engagement rates, especially on cold emails and LinkedIn, pushing you toward that "top-performer" territory.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                        <Users className="w-6 h-6 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-[#374151] mb-4">A Full-Fledged Team</h3>
                      <p className="text-gray-600">
                        You don't have to hire a BDR, a manager, and a copywriter. We embed our BDRs, GTM Engineer, and expert copywriter into your team, ensuring every part of your outbound strategy is optimized and aligned.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                        <Target className="w-6 h-6 text-orange-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-[#374151] mb-4">Parallel Dialers & Robust Infrastructure</h3>
                      <p className="text-gray-600">
                        While the numbers above focus on email, we use parallel dialers and a robust, multi-domain email infrastructure to ensure our team is maximizing conversations and your messages are landing in the inbox.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold text-[#374151] mb-4">The Result</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    A sales team that is not just working hard, but working smart—and a revenue forecast that is no longer a guess, but a data-driven certainty.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <Card className="border-0 shadow-lg bg-gray-50">
                    <CardContent className="p-6">
                      <p className="text-gray-700">
                        Learn more about our comprehensive approach: <Link to="/blog/hidden-costs-internal-bdr" className="text-[#FF6B35] hover:underline font-medium">The True Cost of an Internal BDR Team: Why the GTM-Plugin Model Changes Everything</Link>.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg bg-gray-50">
                    <CardContent className="p-6">
                      <p className="text-gray-700">
                        Discover how AI transforms sales teams: <Link to="/blog/bdr-team-ai-copilot" className="text-[#FF6B35] hover:underline font-medium">Your BDR Team Needs a Co-Pilot: Why AI Isn't Coming for Their Jobs</Link>.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Conclusion */}
              <section>
                <h2 className="text-3xl font-bold text-[#374151] mb-6 flex items-center">
                  <CheckCircle className="w-8 h-8 text-[#FF6B35] mr-3" />
                  Your Path to a Predictable Sales Machine
                </h2>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  In 2025, the most successful startups aren't the ones with the biggest outreach volume; they're the ones with the most intelligent outbound strategy. By reverse-engineering your goals and leveraging the power of an AI-driven, data-centric partner, you can stop wasting time and start building a predictable, scalable sales machine.
                </p>

                <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium">
                  Ready to stop guessing and start growing?
                </p>

                <Card className="border-0 shadow-xl bg-gradient-to-r from-[#FF6B35] to-[#E55A2B]">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Build Your Predictable Outbound Engine
                    </h3>
                    <p className="text-orange-100 mb-6 text-lg">
                      Discover how Mamut can make the math of sales work for you with our proven outbound framework.
                    </p>
                    <Link to="/roi-calculator">
                      <Button size="lg" variant="secondary" className="bg-white text-[#FF6B35] hover:bg-gray-100 font-semibold">
                        Calculate Your ROI
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </section>
            </div>
          </div>
        </div>
      </article>
      
      {/* Social Share Section */}
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="border-t border-gray-200 mt-12 pt-8">
            <SocialShare 
              url={currentUrl}
              title={title}
              description={description}
            />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default OutboundPlaybook2025;