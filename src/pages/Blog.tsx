
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  // Updated blog posts with the new comparison article as featured
  const blogPosts = [
    {
      id: 10,
      title: "Mamut vs. SalesRoads vs. SalesHive vs. Others: Which Outbound Sales Partner Wins?",
      excerpt: "Data-driven comparison of top outbound sales providers. See pricing, setup times, and which partner fits your business best in 2025.",
      date: "October 28, 2025",
      readTime: "12 min read",
      category: "Comparisons",
      slug: "mamut-vs-competitors-outbound-sales-comparison",
    },
    {
      id: 9,
      title: "Embedded, Full-Time Outbound Cells (Build & Run, Tools Included)",
      excerpt: "Why we build your team inside your company—and how that turns outbound into booked revenue. Learn about embedded outbound cells and the math behind predictable sales.",
      date: "2025-08-30",
      readTime: "12 min read",
      category: "Strategy",
      slug: "embedded-outbound-cells"
    },
    {
      id: 8,
      title: "Your 2025 Outbound Playbook: The Math Behind Your Outreach Volume",
      excerpt: "Stop guessing with outbound volume. Learn the data-driven framework to reverse-engineer your revenue goals into precise outreach targets for predictable growth in 2025.",
      date: "2025-08-06",
      readTime: "15 min read",
      category: "Strategy",
      slug: "outbound-playbook-2025-math-behind-outreach-volume"
    },
    {
      id: 7,
      title: "Lead Gen Agency vs. Mamut's GTM Plugin vs. In-House Outbound Team: The Outbound Revolution",
      excerpt: "Discover why Mamut's Go-to-Market Plugin revolutionizes outbound lead generation by combining the best of in-house control with specialized expertise, eliminating the black box of traditional agencies.",
      date: "2025-01-11",
      readTime: "12 min read",
      category: "Strategy",
      slug: "lead-gen-agency-vs-mamut-gtm-plugin"
    },
    {
      id: 6,
      title: "Why Startups Are Ditching DIY & Embracing AI-Powered Outbound Sales Solutions",
      excerpt: "Discover why smart startups are ditching DIY sales teams for AI-powered outbound sales solutions. Learn how to scale predictably with startup sales automation and go-to-market efficiency.",
      date: "2025-07-04",
      readTime: "10 min read",
      category: "AI & Sales",
      slug: "ai-outbound-sales-solutions-startups"
    },
    {
      id: 5,
      title: "Your BDR Team Needs a Co-Pilot: Why AI Isn't Coming for Their Jobs (It's Making Them Superheroes!)",
      excerpt: "Discover how AI transforms BDR teams from overworked manual-task-jugglers into strategic superheroes. Learn why AI isn't replacing your sales team - it's making them unstoppable.",
      date: "2025-07-02",
      readTime: "8 min read",
      category: "AI & Sales",
      slug: "bdr-team-ai-copilot"
    },
    {
      id: 1,
      title: "Why Startups Are Moving Past Inbound-Only for Predictable Growth",
      excerpt: "Most startups kick off with inbound marketing, but for fast, predictable growth, just waiting for people to show up often falls short. Discover why successful startups are building predictable outbound engines.",
      date: "2025-06-20",
      readTime: "5 min read",
      category: "Strategy",
      slug: "why-startups-move-beyond-inbound"
    },
    {
      id: 2,
      title: "The True Cost of an Internal BDR Team: Why the GTM-Plugin Model Changes Everything",
      excerpt: "Building an in-house BDR team seems simple, but the real cost goes way beyond salary. Hidden expenses lead to budget problems and slower growth. Learn about the GTM-plugin alternative.",
      date: "2025-06-15",
      readTime: "7 min read",
      category: "Operations",
      slug: "hidden-costs-internal-bdr"
    },
    {
      id: 3,
      title: "How to Scale Outbound Without Breaking Your Budget",
      excerpt: "You've got a killer product and found your market fit. Time to hit the gas! Here's the proven framework for implementing outbound at scale with integrated teams, tools, and processes.",
      date: "2025-06-10",
      readTime: "6 min read",
      category: "Growth",
      slug: "scale-outbound-without-breaking-budget"
    },
    {
      id: 4,
      title: "BDRs: The Smart Choice Over Internal Hires",
      excerpt: "Startups need strong BDRs for leads, but internal hires in high-cost regions bring big challenges. Discover why specialized BDRs offer a superior strategic advantage.",
      date: "2025-06-05",
      readTime: "8 min read",
      category: "Strategy",
      slug: "nearshore-bdrs-smart-choice"
    }
  ];

  const featuredPost = blogPosts[0]; // New comparison article

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-orange-50 via-white to-orange-100">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#FF6B35] to-[#374151] bg-clip-text text-transparent">
              Outbound Insights
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Expert insights on building scalable outbound engines, go-to-market strategies, and startup growth tactics that drive predictable revenue.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-[#374151] mb-8">Featured Article</h2>
            <Card className="border-0 shadow-xl overflow-hidden">
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                  <span className="bg-[#FF6B35] text-white px-3 py-1 rounded-full text-xs font-medium">
                    {featuredPost.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    August 30, 2025
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#374151]">
                  {featuredPost.title}
                </h3>
                
                <p className="text-gray-600 mb-6 text-lg">
                  {featuredPost.excerpt}
                </p>
                
                <Link to={`/blog/${featuredPost.slug}`}>
                  <Button className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white group">
                    Read Full Article
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-[#374151] mb-12">Latest Articles</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post) => (
                <Card key={post.id} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                      <span className="bg-[#FF6B35] text-white px-3 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-[#374151] line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <Link to={`/blog/${post.slug}`}>
                      <Button 
                        variant="outline" 
                        className="w-full border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white group"
                      >
                        Read More
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-[#FF6B35] to-[#E55A2B] rounded-xl p-8 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Stay Ahead of the GTM Game</h3>
              <p className="text-orange-100 mb-6 text-lg">
                Get weekly insights on outbound strategies, startup growth tactics, and go-to-market best practices delivered to your inbox.
              </p>
              <div className="max-w-md mx-auto flex gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900"
                />
                <Button variant="secondary" className="bg-white text-[#FF6B35] hover:bg-gray-100 px-6">
                  Subscribe
                </Button>
              </div>
              <p className="text-orange-200 text-sm mt-4">
                Join 500+ startup founders and growth leaders. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
