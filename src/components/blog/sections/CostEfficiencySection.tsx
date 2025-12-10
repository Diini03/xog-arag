
import { Card, CardContent } from "@/components/ui/card";

export const CostEfficiencySection = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold text-[#374151] mb-6">Significant Cost Efficiencies: Beyond Just Salaries</h2>
      
      <p className="mb-6">
        AI-powered BDR teams offer massive financial benefits beyond lower salaries. Partnering with an AI-enhanced BDR team can save 50% to 70% on total costs compared to internal hires.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <Card className="border-0 shadow-lg bg-red-50">
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">50-70%</div>
            <h3 className="text-lg font-semibold text-[#374151] mb-2">Total Cost Savings</h3>
            <p className="text-gray-600 text-sm">Compared to internal BDR teams</p>
          </CardContent>
        </Card>
        
        <Card className="border-0 shadow-lg bg-blue-50">
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">$0</div>
            <h3 className="text-lg font-semibold text-[#374151] mb-2">Hidden Costs</h3>
            <p className="text-gray-600 text-sm">No hiring, training, or management overhead</p>
          </CardContent>
        </Card>
        
        <Card className="border-0 shadow-lg bg-green-50">
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
            <h3 className="text-lg font-semibold text-[#374151] mb-2">AI Operations</h3>
            <p className="text-gray-600 text-sm">Continuous lead qualification and outreach</p>
          </CardContent>
        </Card>
      </div>

      <p className="mb-6">
        When you engage an AI-powered BDR partner like Mamut, all operational expenses are covered. Our GTM engineer provides direct management and optimization, eliminating the need for internal sales management resources.
      </p>

      <p className="mb-6">
        This transforms unpredictable operational costs into predictable monthly investments, providing tremendous financial agility for growing startups.
      </p>
    </section>
  );
};
