import { Check, X, ArrowRight } from "lucide-react";
import { useState } from "react";

interface ProviderCardProps {
  name: string;
  tagline: string;
  price: string;
  pros: string[];
  cons: string[];
  bottomLine: string;
  whenToChoose?: string[];
  whenToSkip?: string[];
  highlight?: boolean;
}

export const ProviderCard = ({
  name,
  tagline,
  price,
  pros,
  cons,
  bottomLine,
  whenToChoose = [],
  whenToSkip = [],
  highlight = false,
}: ProviderCardProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`p-6 rounded-lg shadow-lg transition-all ${
        highlight
          ? "bg-gradient-to-br from-orange-50 to-white dark:from-orange-900/20 dark:to-gray-800 border-2 border-[#FF6B35]"
          : "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
      }`}
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{name}</h3>
          <p className="text-gray-600 dark:text-gray-400 mt-1">{tagline}</p>
        </div>
        {highlight && (
          <span className="bg-[#FF6B35] text-white px-3 py-1 rounded-full text-sm font-medium">
            Best Value
          </span>
        )}
      </div>

      <div className="mb-4">
        <span className="text-3xl font-bold text-[#FF6B35]">{price}</span>
        <span className="text-gray-500 dark:text-gray-400 ml-2">per month</span>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
            <Check className="w-5 h-5 text-green-500" />
            Strengths
          </h4>
          <ul className="space-y-1">
            {pros.map((pro, index) => (
              <li key={index} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                <span className="text-green-500 mt-0.5">•</span>
                {pro}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
            <X className="w-5 h-5 text-red-500" />
            Watch Out For
          </h4>
          <ul className="space-y-1">
            {cons.map((con, index) => (
              <li key={index} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                <span className="text-red-500 mt-0.5">•</span>
                {con}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
        <p className="text-sm font-medium text-gray-900 dark:text-white mb-2">Bottom Line:</p>
        <p className="text-sm text-gray-700 dark:text-gray-300">{bottomLine}</p>
      </div>

      {(whenToChoose.length > 0 || whenToSkip.length > 0) && (
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
            When to Choose This:
          </p>
          
          {whenToChoose.length > 0 && (
            <div className="mb-3">
              <div className="flex items-center gap-2 mb-2">
                <Check className="w-4 h-4 text-green-500" />
                <span className="text-sm font-medium text-gray-900 dark:text-white">Choose {name} if:</span>
              </div>
              <ul className="space-y-1 ml-6">
                {whenToChoose.map((item, index) => (
                  <li key={index} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {whenToSkip.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <X className="w-4 h-4 text-red-500" />
                <span className="text-sm font-medium text-gray-900 dark:text-white">Skip {name} if:</span>
              </div>
              <ul className="space-y-1 ml-6">
                {whenToSkip.map((item, index) => (
                  <li key={index} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                    <span className="text-red-500 mt-0.5">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-4 text-[#FF6B35] hover:text-[#E55A2B] text-sm font-medium flex items-center gap-1 transition-colors"
      >
        {expanded ? "Show less" : "Learn more"}
        <ArrowRight className={`w-4 h-4 transition-transform ${expanded ? "rotate-90" : ""}`} />
      </button>
    </div>
  );
};
