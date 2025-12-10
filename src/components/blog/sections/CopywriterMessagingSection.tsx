
import { Card, CardContent } from "@/components/ui/card";

export const CopywriterMessagingSection = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold text-[#374151] mb-6">Copywriter-Backed Messaging: The Human Touch at Scale</h2>
      
      <p className="mb-6">
        Even with advanced AI, persuasive communication is paramount. Mamut integrates dedicated copywriting expertise to ensure all outbound messaging is personalized, impactful, and human.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-l-4 border-blue-500">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-[#374151] mb-3">Strategic Messaging</h3>
            <p className="text-gray-600">
              A dedicated copywriter ensures messages deeply understand the target audience's daily life and challenges, going beyond simple personalization.
            </p>
          </CardContent>
        </Card>
        
        <Card className="border-l-4 border-green-500">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-[#374151] mb-3">Building Trust & Credibility</h3>
            <p className="text-gray-600">
              Effective copywriting educates, not just sells. By embedding valuable insights, the sender becomes an expert, fostering reciprocity and trust.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-l-4 border-purple-500">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-[#374151] mb-3">Brevity & Impact</h3>
            <p className="text-gray-600">
              Copywriters craft concise, direct messages that cut through inbox clutter and deliver core value quickly using "insider language" that resonates.
            </p>
          </CardContent>
        </Card>
        
        <Card className="border-l-4 border-orange-500">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-[#374151] mb-3">Iterative Refinement</h3>
            <p className="text-gray-600">
              Dedicated copywriters continuously refine messaging based on performance data for optimal engagement and conversion rates.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-semibold text-blue-800 mb-4">The Perfect Combination</h3>
        <p className="text-blue-700">
          The combo of AI for scale and a copywriter for quality ensures every outbound touchpoint is highly personalized, relevant, and persuasive. This transforms time-intensive, generic outreach into high-impact, conversion-driving communication.
        </p>
      </div>
    </section>
  );
};
