import { useState } from "react";
import { TrendingDown } from "lucide-react";

export const PricingWidget = () => {
  const [timeframe, setTimeframe] = useState<"monthly" | "annual">("monthly");

  const inHouseCost = {
    monthly: 9700, // Single BDR with realistic costs
    annual: 116400,
  };

  const mamutCost = {
    monthly: 6490,
    annual: 77880,
  };

  const savings = {
    monthly: inHouseCost.monthly - mamutCost.monthly,
    annual: inHouseCost.annual - mamutCost.annual,
    percentage: Math.round(((inHouseCost.monthly - mamutCost.monthly) / inHouseCost.monthly) * 100),
  };

  const current = timeframe === "monthly" ? "monthly" : "annual";

  return (
    <div id="roi-calculator" className="my-12 p-8 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border border-green-200 dark:border-green-800">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Real Cost Comparison
        </h3>
        <p className="text-gray-600 dark:text-gray-400">Single in-house BDR vs. Mamut's embedded solution</p>
      </div>

      <div className="flex justify-center gap-2 mb-8">
        <button
          onClick={() => setTimeframe("monthly")}
          className={`px-6 py-2 rounded-lg font-medium transition-all ${
            timeframe === "monthly"
              ? "bg-[#FF6B35] text-white shadow-md"
              : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
          }`}
        >
          Monthly
        </button>
        <button
          onClick={() => setTimeframe("annual")}
          className={`px-6 py-2 rounded-lg font-medium transition-all ${
            timeframe === "annual"
              ? "bg-[#FF6B35] text-white shadow-md"
              : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
          }`}
        >
          Annual
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">In-House BDR (1 Person)</div>
          <div className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            ${inHouseCost[current].toLocaleString()}
          </div>
          <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
            <li>• BDR salary: $5,000/mo</li>
            <li>• Payroll taxes & benefits: $1,200/mo</li>
            <li>• Recruiting & training: $1,000/mo</li>
            <li>• Tools (email, data, dialer): $500/mo</li>
            <li>• Manager time (20%): $2,000/mo</li>
            <li className="font-semibold text-gray-900 dark:text-white pt-2 border-t border-gray-300 dark:border-gray-600">Total: $9,700/mo</li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-orange-100 to-orange-50 dark:from-orange-900/30 dark:to-orange-900/20 rounded-lg p-6 shadow-md border-2 border-[#FF6B35]">
          <div className="text-sm text-[#FF6B35] font-semibold mb-2">Mamut Starter Package</div>
          <div className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            ${mamutCost[current].toLocaleString()}
          </div>
          <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
            <li>✓ 1 Full-time BDR ($5K)</li>
            <li>✓ GTM Engineer ($7K value)</li>
            <li>✓ Email sequencer ($99)</li>
            <li>✓ Data enrichment credits ($760)</li>
            <li>✓ Premium dialer ($350)</li>
            <li>✓ Email infrastructure ($650)</li>
            <li>✓ Multi-channel playbooks</li>
            <li>✓ Live in 7 days, not 2-3 months</li>
            <li className="font-semibold text-[#FF6B35] pt-2 border-t border-orange-300 dark:border-orange-700">$13,859 value for $6,490/mo</li>
          </ul>
        </div>
      </div>

      <div className="bg-green-600 text-white rounded-lg p-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <TrendingDown className="w-6 h-6" />
          <span className="text-sm font-semibold uppercase">Your Savings</span>
        </div>
        <div className="text-4xl font-bold mb-1">
          ${savings[current].toLocaleString()}
        </div>
        <div className="text-green-100">
          {savings.percentage}% cost reduction {timeframe === "annual" ? "per year" : "per month"}
        </div>
      </div>

      <div className="mt-8 space-y-4">
        <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
          <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
            In-House BDR Cost Breakdown (Single BDR):
          </p>
          <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
            <li>• Base Salary: $60K/year = $5,000/mo</li>
            <li>• Payroll Taxes (7.65%): $383/mo</li>
            <li>• Benefits (health, 401k): $800/mo</li>
            <li>• Tools (Outreach, ZoomInfo, LinkedIn Sales Nav): $500/mo</li>
            <li>• Manager Time (20% of $120K salary): $2,000/mo</li>
            <li>• Recruiting + Training (amortized): $1,000/mo</li>
            <li className="font-bold pt-2 border-t border-blue-200 dark:border-blue-700">Total: $9,683/mo (~$9,700)</li>
          </ul>
        </div>
        
        <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border-l-4 border-[#FF6B35]">
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
            <strong>Mamut Starter ($6,490/mo) True Value Breakdown:</strong>
          </p>
          <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1 mb-3">
            <li>• BDR: $5,000</li>
            <li>• GTM Engineer: $7,000</li>
            <li>• Email sequencer: $99</li>
            <li>• Data enrichment tools: $760</li>
            <li>• Dialer: $350</li>
            <li>• Email infrastructure: $650</li>
            <li className="font-bold pt-2 border-t border-orange-200 dark:border-orange-800">Real Value: $13,859/mo</li>
          </ul>
          <p className="text-sm text-gray-900 dark:text-white font-semibold">
            You pay just $6,490 (53% discount) — that's <strong>{savings.percentage}% cheaper</strong> than a bare-bones in-house BDR with none of the infrastructure.
          </p>
        </div>

        <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            <strong>Want to build a 2-person team?</strong> In-house costs jump to $18K+/month. Mamut's Growth package ($10K/mo) delivers comparable or better volume at 45% savings.
          </p>
        </div>
      </div>
    </div>
  );
};
