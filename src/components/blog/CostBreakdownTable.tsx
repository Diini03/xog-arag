
import { Card, CardContent } from "@/components/ui/card";

export const CostBreakdownTable = () => {
  return (
    <Card className="border-0 shadow-lg mb-8">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-[#374151] mb-6">Annual Cost Breakdown: Internal BDR vs GTM-Plugin</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-[#374151]">Cost Component</th>
                <th className="text-right py-3 px-4 font-semibold text-red-600">Internal BDR</th>
                <th className="text-right py-3 px-4 font-semibold text-green-600">GTM-Plugin</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4">Base Salary & OTE</td>
                <td className="text-right py-3 px-4 text-red-600">$91,000</td>
                <td className="text-right py-3 px-4 text-green-600">$0</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4">Benefits (15%)</td>
                <td className="text-right py-3 px-4 text-red-600">$13,650</td>
                <td className="text-right py-3 px-4 text-green-600">$0</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4">Hiring & Onboarding</td>
                <td className="text-right py-3 px-4 text-red-600">$18,200</td>
                <td className="text-right py-3 px-4 text-green-600">$0</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4">Training & Development</td>
                <td className="text-right py-3 px-4 text-red-600">$1,200</td>
                <td className="text-right py-3 px-4 text-green-600">$0</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4">Management (12.5%)</td>
                <td className="text-right py-3 px-4 text-red-600">$10,625</td>
                <td className="text-right py-3 px-4 text-green-600">$0</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4">Tech Stack & Tools</td>
                <td className="text-right py-3 px-4 text-red-600">$16,800</td>
                <td className="text-right py-3 px-4 text-green-600">Included</td>
              </tr>
              <tr className="border-b-2 border-gray-200 bg-gray-50">
                <td className="py-4 px-4 font-bold text-[#374151]">Total Annual Cost</td>
                <td className="text-right py-4 px-4 font-bold text-red-600 text-lg">$151,475</td>
                <td className="text-right py-4 px-4 font-bold text-green-600 text-lg">$45,000-$72,000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500 mt-4">
          * GTM-Plugin costs vary based on scope and requirements. Includes dedicated BDR, tools, and management.
        </p>
      </CardContent>
    </Card>
  );
};
