import { Check, X } from "lucide-react";

interface Provider {
  name: string;
  price: string;
  priceValue: number;
  setup: string;
  channels: string[];
  whatYouGet: string;
  bestFor: string;
  commitment: string;
  volume: string;
  rating: number;
}

const providers: Provider[] = [
  {
    name: "Mamut",
    price: "$6,490/mo",
    priceValue: 6490,
    setup: "7 days",
    channels: ["Email", "Phone", "LinkedIn"],
    whatYouGet: "1 dedicated BDR + AI operator + all tools + CRM integration + daily Slack sync",
    bestFor: "Startups & scale-ups needing speed + embedded team",
    commitment: "Month-to-month (30 days notice)",
    volume: "~25 meetings/mo",
    rating: 5,
  },
  {
    name: "SalesRoads",
    price: "$9,500+/mo",
    priceValue: 9500,
    setup: "2-3 weeks",
    channels: ["Email", "Phone"],
    whatYouGet: "Dedicated team + ops support + training (proven playbooks)",
    bestFor: "Enterprise clients with proven playbooks",
    commitment: "3-6 months minimum",
    volume: "~30 meetings/mo",
    rating: 4.5,
  },
  {
    name: "SalesHive",
    price: "$4,000/mo",
    priceValue: 4000,
    setup: "2-3 weeks",
    channels: ["Email OR Phone (choose 1)"],
    whatYouGet: "$4K = ONE channel only (email OR phone). Must upgrade to $8K for multi-channel",
    bestFor: "Testing single channel on budget",
    commitment: "Month-to-month",
    volume: "$4K: ~12 meetings/mo",
    rating: 4,
  },
  {
    name: "Belkins",
    price: "$5,000-15,000/mo",
    priceValue: 10000,
    setup: "2 weeks",
    channels: ["Email", "Phone", "LinkedIn", "Ads"],
    whatYouGet: "Campaign management + offshore team (not dedicated single BDR)",
    bestFor: "Volume-focused teams wanting max touchpoints",
    commitment: "3 months minimum",
    volume: "~35 meetings/mo (at $10K tier)",
    rating: 4.5,
  },
  {
    name: "CIENCE",
    price: "$5,000+/mo",
    priceValue: 5000,
    setup: "3-4 weeks",
    channels: ["Email", "Phone", "LinkedIn"],
    whatYouGet: "Campaign management + data science (NO dedicated BDR included)",
    bestFor: "Enterprise needing data science + global scale",
    commitment: "3-6 months minimum",
    volume: "~40 meetings/mo (at $12K tier)",
    rating: 4,
  },
  {
    name: "Bandalier",
    price: "$8,000/mo",
    priceValue: 8000,
    setup: "2-3 weeks",
    channels: ["Phone", "Email"],
    whatYouGet: "US-based SDR pod (100+ calls/day guaranteed)",
    bestFor: "Phone-first outbound strategies",
    commitment: "Month-to-month",
    volume: "~20 meetings/mo",
    rating: 4,
  },
];

const getPriceColor = (providerName: string) => {
  // Only highlight Mamut's price in brand orange
  if (providerName === "Mamut") return "text-[#FF6B35] dark:text-[#FF6B35]";
  return "text-gray-900 dark:text-white";
};

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {[1, 2, 3, 4, 5].map((star) => (
      <span key={star} className={star <= rating ? "text-[#FF6B35]" : "text-gray-300"}>
        ★
      </span>
    ))}
  </div>
);

export const ComparisonTable = () => {
  return (
    <div id="quick-comparison" className="my-12">
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
        Quick Comparison Table
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gradient-to-r from-[#FF6B35] to-[#E55A2B] text-white">
              <th className="p-4 text-left font-semibold">Provider</th>
              <th className="p-4 text-left font-semibold">Price</th>
              <th className="p-4 text-left font-semibold">Setup</th>
              <th className="p-4 text-left font-semibold">What You Get</th>
              <th className="p-4 text-left font-semibold">Volume</th>
              <th className="p-4 text-left font-semibold">Commitment</th>
              <th className="p-4 text-left font-semibold">Rating</th>
            </tr>
          </thead>
          <tbody>
            {providers.map((provider, index) => (
              <tr
                key={provider.name}
                className={`border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
                  provider.name === "Mamut" ? "bg-orange-50 dark:bg-orange-900/20" : ""
                }`}
              >
                <td className="p-4">
                  <div className="font-bold text-gray-900 dark:text-white">
                    {provider.name}
                  </div>
                  <StarRating rating={provider.rating} />
                </td>
                <td className={`p-4 font-semibold ${getPriceColor(provider.name)}`}>
                  {provider.price}
                </td>
                <td className="p-4 text-gray-700 dark:text-gray-300">{provider.setup}</td>
                <td className="p-4">
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    {provider.whatYouGet}
                  </div>
                </td>
                <td className="p-4 text-gray-700 dark:text-gray-300 text-sm">{provider.volume}</td>
                <td className="p-4 text-gray-700 dark:text-gray-300 text-sm">{provider.commitment}</td>
                <td className="p-4">
                  <div className="flex flex-wrap gap-1">
                    {provider.channels.map((channel) => (
                      <span
                        key={channel}
                        className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded"
                      >
                        {channel}
                      </span>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile-friendly cards for smaller screens */}
      <div className="md:hidden space-y-4 mt-6">
        {providers.map((provider) => (
          <div
            key={provider.name}
            className={`p-4 rounded-lg shadow-md ${
              provider.name === "Mamut"
                ? "bg-orange-50 dark:bg-orange-900/20 border-2 border-[#FF6B35]"
                : "bg-white dark:bg-gray-800"
            }`}
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white">{provider.name}</h3>
                <StarRating rating={provider.rating} />
              </div>
              <span className={`text-lg font-bold ${getPriceColor(provider.name)}`}>
                {provider.price}
              </span>
            </div>
            <div className="space-y-2 text-sm">
              <div>
                <span className="text-gray-500 dark:text-gray-400">What you get:</span>{" "}
                <span className="text-gray-900 dark:text-white font-medium">{provider.whatYouGet}</span>
              </div>
              <div>
                <span className="text-gray-500 dark:text-gray-400">Setup:</span>{" "}
                <span className="text-gray-900 dark:text-white">{provider.setup}</span>
              </div>
              <div>
                <span className="text-gray-500 dark:text-gray-400">Volume:</span>{" "}
                <span className="text-gray-900 dark:text-white">{provider.volume}</span>
              </div>
              <div>
                <span className="text-gray-500 dark:text-gray-400">Commitment:</span>{" "}
                <span className="text-gray-900 dark:text-white">{provider.commitment}</span>
              </div>
              <div className="flex flex-wrap gap-1 mt-2">
                {provider.channels.map((channel) => (
                  <span
                    key={channel}
                    className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded"
                  >
                    {channel}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
