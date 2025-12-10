
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Users, Zap, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export const AIBDREvolutionSection = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold text-[#374151] mb-6 flex items-center">
        <Globe className="w-8 h-8 text-[#FF6B35] mr-3" />
        The Evolution of BDR Teams
      </h2>
      
      <p className="mb-6">
        After learning about <Link to="/blog/why-startups-move-beyond-inbound" className="text-[#FF6B35] hover:underline">why startups are moving beyond inbound-only strategies</Link>, understanding <Link to="/blog/hidden-costs-internal-bdr" className="text-[#FF6B35] hover:underline">the hidden costs of building an internal BDR team</Link>, and exploring <Link to="/blog/scale-outbound-without-breaking-budget" className="text-[#FF6B35] hover:underline">how to scale outbound without breaking your budget</Link>, one question remains: what's the optimal way to implement this strategy?
      </p>
      
      <p className="mb-6">
        This article makes a strong case for AI-powered BDR teams as a superior alternative to internal hires. We'll look at their unique capabilities, significant cost savings, and how Mamut's outbound installation system delivers superior results for startups.
      </p>

      <Card className="border-l-4 border-[#FF6B35] bg-orange-50">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold text-[#374151] mb-3">What are AI-Powered BDR Teams?</h3>
          <p className="text-gray-700">
            AI-powered BDR teams combine human expertise with artificial intelligence to automate lead generation, qualification, and outreach processes. This creates a scalable, efficient, and cost-effective solution for startup sales development.
          </p>
        </CardContent>
      </Card>
    </section>
  );
};
