
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { BlogArticleLayout } from "@/components/blog/BlogArticleLayout";
import { AIBDREvolutionSection } from "@/components/blog/sections/AIBDREvolutionSection";
import { AIAdvantageSection } from "@/components/blog/sections/AIAdvantageSection";
import { CostEfficiencySection } from "@/components/blog/sections/CostEfficiencySection";
import { MamutDifferenceSection } from "@/components/blog/sections/LeadMamutDifferenceSection";
import { CopywriterMessagingSection } from "@/components/blog/sections/CopywriterMessagingSection";
import { SmartChoiceSection } from "@/components/blog/sections/SmartChoiceSection";

const NearshoreBDRsSmartChoice = () => {
  const currentUrl = window.location.href;
  const title = "AI-Powered BDR Teams: The Smart Choice Over Internal Hires";
  const description = "Startups need strong BDRs for leads, but internal hires bring big challenges. Discover why AI-powered BDR teams offer a superior strategic advantage for scaling your outbound sales.";

  return (
    <BlogArticleLayout currentUrl={currentUrl} title={title} description={description}>
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
                June 5, 2024
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                8 min read
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#374151] leading-tight">
              AI-Powered BDR Teams: The Smart Choice Over Internal Hires
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Startups need strong BDRs for leads, but internal hires bring big financial and operational challenges. Here's why AI-powered BDR teams offer a superior strategic advantage for scaling your outbound sales.
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg prose-gray">

            <div className="text-gray-700 leading-relaxed space-y-8 text-lg">
              <AIBDREvolutionSection />
              <AIAdvantageSection />
              <CostEfficiencySection />
              <MamutDifferenceSection />
              <CopywriterMessagingSection />
              <SmartChoiceSection />
            </div>
          </div>
        </div>
      </article>
    </BlogArticleLayout>
  );
};

export default NearshoreBDRsSmartChoice;
