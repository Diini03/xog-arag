
import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, Users, AlertCircle, TrendingUp } from "lucide-react";

export const CostCards = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <Card className="border-0 shadow-lg">
        <CardContent className="p-6 text-center">
          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <DollarSign className="w-6 h-6 text-red-600" />
          </div>
          <h3 className="text-lg font-semibold text-[#374151] mb-2">Salary & Benefits</h3>
          <p className="text-gray-600 text-sm">$91K+ average total pay plus 15% benefits overhead</p>
        </CardContent>
      </Card>
      
      <Card className="border-0 shadow-lg">
        <CardContent className="p-6 text-center">
          <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="w-6 h-6 text-orange-600" />
          </div>
          <h3 className="text-lg font-semibold text-[#374151] mb-2">Hiring & Training</h3>
          <p className="text-gray-600 text-sm">12-22% of salary for recruitment plus ongoing training costs</p>
        </CardContent>
      </Card>
      
      <Card className="border-0 shadow-lg">
        <CardContent className="p-6 text-center">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertCircle className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-lg font-semibold text-[#374151] mb-2">High Turnover</h3>
          <p className="text-gray-600 text-sm">34%+ average turnover means constant rehiring cycles</p>
        </CardContent>
      </Card>
      
      <Card className="border-0 shadow-lg">
        <CardContent className="p-6 text-center">
          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <TrendingUp className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="text-lg font-semibold text-[#374151] mb-2">Tech Stack</h3>
          <p className="text-gray-600 text-sm">$1,400+ monthly per BDR for tools and infrastructure</p>
        </CardContent>
      </Card>
    </div>
  );
};
