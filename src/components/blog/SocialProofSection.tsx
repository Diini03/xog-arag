import { TrendingUp, Users, Target } from "lucide-react";
import { Link } from "react-router-dom";

export const SocialProofSection = () => {
  return (
    <section id="dont-take-our-word" className="my-16 p-8 bg-gradient-to-br from-green-50 to-white dark:from-green-900/20 dark:to-gray-800 rounded-xl border border-green-200 dark:border-green-800">
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
        Don't Take Our Word For It
      </h2>
      
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
        Here's what happens when companies switch to Mamut's embedded model:
      </p>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center gap-3 mb-4">
            <Target className="w-8 h-8 text-[#FF6B35]" />
            <div>
              <div className="text-sm text-gray-600 dark:text-gray-400">SaaS Startup</div>
              <div className="font-bold text-gray-900 dark:text-white">Compliance Software</div>
            </div>
          </div>
          <div className="space-y-2 text-gray-700 dark:text-gray-300">
            <p className="font-semibold text-[#FF6B35]">38 qualified meetings in 60 days</p>
            <p className="text-sm">9 converted to opportunities ($400K+ pipeline)</p>
            <p className="text-sm italic">"We tried building in-house for 4 months. Mamut delivered more in 60 days than we did in the previous quarter."</p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="w-8 h-8 text-[#FF6B35]" />
            <div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Fintech Company</div>
              <div className="font-bold text-gray-900 dark:text-white">Payment Platform</div>
            </div>
          </div>
          <div className="space-y-2 text-gray-700 dark:text-gray-300">
            <p className="font-semibold text-[#FF6B35]">Cut CAC by 40%</p>
            <p className="text-sm">Switching from 2 in-house BDRs to Mamut</p>
            <p className="text-sm italic">"Same meeting volume, half the cost, zero management headaches. Should have done this 6 months earlier."</p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-8 h-8 text-[#FF6B35]" />
            <div>
              <div className="text-sm text-gray-600 dark:text-gray-400">HR Tech</div>
              <div className="font-bold text-gray-900 dark:text-white">Recruiting Software</div>
            </div>
          </div>
          <div className="space-y-2 text-gray-700 dark:text-gray-300">
            <p className="font-semibold text-[#FF6B35]">First meeting in 11 days</p>
            <p className="text-sm">From kickoff to first qualified conversation</p>
            <p className="text-sm italic">"The speed is unbelievable. We were in market and generating pipeline before our job posting for a BDR even closed."</p>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
        <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-3">
          Typical Results Across Clients:
        </h3>
        <div className="grid md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-3xl font-bold text-[#FF6B35] mb-1">25-35%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Meeting-to-Opp Rate</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#FF6B35] mb-1">11-14</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Days to First Meeting</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#FF6B35] mb-1">$260</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Avg Cost Per Meeting</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#FF6B35] mb-1">50-70%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Cost Savings vs In-House</div>
          </div>
        </div>
      </div>

      <div className="mt-6 text-center">
        <Link
          to="/case-studies"
          className="inline-flex items-center gap-2 text-[#FF6B35] hover:text-[#E55A2B] font-semibold"
        >
          See Full Case Studies →
        </Link>
      </div>
    </section>
  );
};
