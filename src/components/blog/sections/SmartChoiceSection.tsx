
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export const SmartChoiceSection = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold text-[#374151] mb-6 flex items-center">
        <TrendingUp className="w-8 h-8 text-[#FF6B35] mr-3" />
        The Smart Choice for Sustainable Growth
      </h2>
      
      <p className="mb-6">
        The traditional model of hiring a standalone internal BDR in the US, plus a manager, is increasingly unsustainable. The cumulative costs of salary, benefits, recruitment, training, management, technology, and inefficient manual messaging create a heavy financial and operational burden.
      </p>

      <p className="mb-6">
        AI-powered BDRs, particularly those enhanced with copywriting expertise, offer a compelling alternative: highly skilled, experienced talent combined with cutting-edge technology at a significantly lower cost, with ideal operational efficiency.
      </p>

      <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-8 rounded-xl mb-8">
        <h3 className="text-2xl font-bold mb-6">Mamut's GTM-Plugin Model Provides:</h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <ul className="space-y-3 text-green-100">
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                Dramatic Cost Savings
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                Access to Top Talent
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                Predictable Pipeline
              </li>
            </ul>
          </div>
          
          <div>
            <ul className="space-y-3 text-green-100">
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                Scalability & Flexibility
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                Superior Effectiveness
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                Integrated Management
              </li>
            </ul>
          </div>
        </div>
      </div>

      <p className="mb-6">
        By choosing Mamut's GTM-plugin model, businesses can bypass the complexities and high costs of building and maintaining an internal BDR team, opting instead for a lean, efficient, and highly effective solution that drives predictable revenue and accelerates growth.
      </p>

      <p className="mb-6">
        It's not just a better option; it's the strategic imperative for modern sales development. As we've explored throughout this series on <Link to="/blog/why-startups-move-beyond-inbound" className="text-[#FF6B35] hover:underline">moving beyond inbound-only strategies</Link>, understanding <Link to="/blog/hidden-costs-internal-bdr" className="text-[#FF6B35] hover:underline">the true costs involved</Link>, and <Link to="/blog/scale-outbound-without-breaking-budget" className="text-[#FF6B35] hover:underline">scaling effectively</Link>, the AI-powered approach represents the optimal solution for most startups.
      </p>

      <Card className="border-0 shadow-xl bg-gradient-to-r from-[#FF6B35] to-[#E55A2B] text-white">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Experience the AI-Powered Advantage?</h3>
          <p className="text-orange-100 mb-6">
            Discover how Mamut's AI-powered, copywriter-backed BDR team can transform your outbound strategy without the complexity and costs of internal hiring.
          </p>
          <Button 
            variant="secondary" 
            className="bg-white text-[#FF6B35] hover:bg-gray-100"
            onClick={() => window.open('https://calendly.com/bruno-leadmamut/30min', '_blank')}
          >
            Book Your Discovery Call
          </Button>
        </CardContent>
      </Card>
    </section>
  );
};
