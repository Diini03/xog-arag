
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Zap, Shield, TrendingUp } from "lucide-react";

export const MamutDifferenceSection = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold text-[#374151] mb-6 flex items-center">
        <Shield className="w-8 h-8 text-[#FF6B35] mr-3" />
        The Mamut Difference: Why We're the #1 Outbound Installation System for Startups
      </h2>
      
      <p className="mb-6">
        While other AI-powered BDR services exist, Mamut's integrated approach sets us apart through our comprehensive GTM-plugin model that addresses all aspects of your outbound sales engine.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <Target className="w-8 h-8 text-[#FF6B35] mr-3" />
              <h3 className="text-xl font-semibold text-[#374151]">Dedicated GTM Engineer</h3>
            </div>
            <p className="text-gray-700">
              Every client gets a dedicated go-to-market engineer who understands your business, optimizes campaigns, and ensures continuous improvement of your outbound strategy.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <Users className="w-8 h-8 text-[#FF6B35] mr-3" />
              <h3 className="text-xl font-semibold text-[#374151]">Specialized BDR Teams</h3>
            </div>
            <p className="text-gray-700">
              Our BDR professionals are specifically trained in startup sales cycles, understand your unique challenges, and adapt their approach based on your market and product.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <Zap className="w-8 h-8 text-[#FF6B35] mr-3" />
              <h3 className="text-xl font-semibold text-[#374151]">AI-Enhanced Personalization</h3>
            </div>
            <p className="text-gray-700">
              Our proprietary AI system analyzes prospect behavior, company intelligence, and timing signals to create hyper-personalized outreach that resonates with decision-makers.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <TrendingUp className="w-8 h-8 text-[#FF6B35] mr-3" />
              <h3 className="text-xl font-semibold text-[#374151]">Integrated Technology Stack</h3>
            </div>
            <p className="text-gray-700">
              Complete plug-and-play solution with seamless CRM integration, automated workflows, and comprehensive analytics that provide full visibility into your pipeline.
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="border-l-4 border-[#FF6B35] bg-orange-50">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold text-[#374151] mb-3">
            The Result: 3x Faster Scaling with 60% Cost Reduction
          </h3>
          <p className="text-gray-700">
            Mamut clients typically see qualified leads within 2-3 weeks and achieve predictable pipeline growth that scales with their business needs, all while maintaining the agility and cost-efficiency that startups require.
          </p>
        </CardContent>
      </Card>
    </section>
  );
};
