import { TrendingDown } from "lucide-react";

export const CostPerMeetingCalculator = () => {
  const providers = [
    {
      name: "Mamut",
      monthlyCost: 6490,
      meetings: 25,
      color: "bg-[#FF6B35]",
    },
    {
      name: "SalesRoads",
      monthlyCost: 9500,
      meetings: 25, // Same volume for fair comparison
      color: "bg-blue-500",
    },
    {
      name: "SalesHive (Multi)",
      monthlyCost: 8000,
      meetings: 25, // Same volume for fair comparison
      color: "bg-purple-500",
    },
    {
      name: "SalesHive (Single)",
      monthlyCost: 4000,
      meetings: 12, // Lower due to single channel limitation
      color: "bg-purple-400",
    },
    {
      name: "Belkins",
      monthlyCost: 10000,
      meetings: 25, // Same volume for fair comparison
      color: "bg-green-500",
    },
    {
      name: "CIENCE",
      monthlyCost: 12000,
      meetings: 25, // Same volume for fair comparison
      color: "bg-indigo-500",
    },
  ];

  const calculateCPM = (cost: number, meetings: number) => {
    return Math.round(cost / meetings);
  };

  return (
    <section className="my-16 p-8 bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/20 dark:to-gray-800 rounded-xl border border-blue-200 dark:border-blue-800">
      <div className="flex items-center gap-3 mb-6">
        <TrendingDown className="w-8 h-8 text-blue-600" />
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          What This Actually Costs Per Meeting
        </h2>
      </div>

      <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
        The real metric that matters: <strong>Cost Per Qualified Meeting (CPM)</strong>. Industry benchmark is $150-300. Here's an apples-to-apples comparison assuming all providers deliver 25 meetings/month (except SalesHive single channel which delivers ~12):
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {providers.map((provider) => {
          const cpm = calculateCPM(provider.monthlyCost, provider.meetings);
          const isLowest = cpm === Math.min(...providers.map(p => calculateCPM(p.monthlyCost, p.meetings)));
          
          return (
            <div
              key={provider.name}
              className={`p-6 rounded-lg ${
                isLowest
                  ? "bg-gradient-to-br from-orange-50 to-white dark:from-orange-900/30 dark:to-gray-800 border-2 border-[#FF6B35]"
                  : "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-gray-900 dark:text-white">
                  {provider.name}
                </h3>
                {isLowest && (
                  <span className="bg-[#FF6B35] text-white px-2 py-1 rounded text-xs font-medium">
                    Lowest CPM
                  </span>
                )}
              </div>
              <div className="text-3xl font-bold text-[#FF6B35] mb-1">
                ${cpm}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                per meeting
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                <div>${provider.monthlyCost.toLocaleString()}/mo</div>
                <div>~{provider.meetings} meetings/mo</div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          <strong>Note:</strong> This comparison assumes 25 qualified meetings/month for full-service providers for apples-to-apples pricing. SalesHive's single-channel plan delivers fewer (~12/month) due to channel limitations. Actual volumes vary by ICP, but this shows true cost efficiency.
        </p>
      </div>
    </section>
  );
};
