import { DollarSign, Zap, Users, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const priorities = [
  {
    icon: Zap,
    title: "Speed to Results",
    description: "Need pipeline this quarter?",
    recommendation: "Mamut",
    reason: "Live in 7 days with proven playbooks",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: DollarSign,
    title: "Budget Optimization",
    description: "Testing outbound affordably?",
    recommendation: "SalesHive Starter",
    reason: "Lowest entry at $4K/mo (single channel)",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Users,
    title: "Deep Integration",
    description: "Want a team that feels in-house?",
    recommendation: "Mamut or Bandalier",
    reason: "Embedded approach with tight collaboration",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: TrendingUp,
    title: "Maximum Volume",
    description: "Need to flood the funnel?",
    recommendation: "Belkins or CIENCE",
    reason: "Massive scale with omnichannel reach",
    color: "from-purple-500 to-pink-500",
  },
];

export const DecisionTree = () => {
  return (
    <div className="my-12 p-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl">
      <h2 className="text-3xl font-bold text-center mb-3 text-gray-900 dark:text-white">
        Choose Based on Your Priority
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
        Start with what matters most to your business right now
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {priorities.map((priority) => {
          const Icon = priority.icon;
          return (
            <div
              key={priority.title}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg bg-gradient-to-br ${priority.color}`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {priority.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {priority.description}
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">
                        Recommended
                      </span>
                    </div>
                    <p className="font-bold text-[#FF6B35] mb-1">{priority.recommendation}</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{priority.reason}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Still not sure? Calculate your potential savings:
        </p>
        <Link
          to="/#roi-calculator"
          className="inline-flex items-center gap-2 bg-[#FF6B35] hover:bg-[#E55A2B] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Try ROI Calculator
        </Link>
      </div>
    </div>
  );
};
