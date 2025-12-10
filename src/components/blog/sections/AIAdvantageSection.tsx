
import { Card, CardContent } from "@/components/ui/card";
import { Users, Zap, CheckCircle } from "lucide-react";

export const AIAdvantageSection = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold text-[#374151] mb-6">Understanding the AI-Powered BDR Advantage</h2>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-[#374151] mb-4">Expert Talent Pool</h3>
            <p className="text-gray-600 mb-4">
              AI-powered BDR teams leverage experienced professionals enhanced by cutting-edge technology. These aren't just recent grads – they're seasoned experts with proven track records.
            </p>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>• Extensive B2B sales experience</li>
              <li>• SaaS product expertise</li>
              <li>• Data-driven approach</li>
              <li>• Continuous AI optimization</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-[#374151] mb-4">AI Enhancement</h3>
            <p className="text-gray-600 mb-4">
              Our AI-powered approach combines human intelligence with machine learning to deliver personalized outreach at unprecedented scale and accuracy.
            </p>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>• Intelligent lead scoring</li>
              <li>• Personalized messaging at scale</li>
              <li>• Predictive analytics</li>
              <li>• Automated follow-up sequences</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-semibold text-green-800 mb-4 flex items-center">
          <CheckCircle className="w-6 h-6 mr-2" />
          The Quality Reality
        </h3>
        <p className="text-green-700 mb-4">
          You're accessing the best AI-enhanced BDR talent at a fraction of the cost of building an internal team. The combination of human expertise and AI amplification creates unprecedented efficiency and effectiveness.
        </p>
        <p className="text-green-700">
          This approach eliminates the guesswork and trial-and-error phases typical of internal BDR hiring, delivering immediate value and consistent results.
        </p>
      </div>
    </section>
  );
};
