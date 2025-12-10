import { List } from "lucide-react";

export const TableOfContents = () => {
  const sections = [
    { id: "quick-comparison", title: "Quick Comparison Table" },
    { id: "cost-per-meeting", title: "What This Costs Per Meeting" },
    { id: "provider-deep-dives", title: "Provider Deep-Dives" },
    { id: "roi-calculator", title: "Real Cost Comparison" },
    { id: "mamut-difference", title: "The Mamut Difference" },
    { id: "dont-take-our-word", title: "Client Results & Social Proof" },
    { id: "decision-tree", title: "Decision Framework" },
    { id: "faq", title: "Frequently Asked Questions" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="my-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-2 mb-4">
        <List className="w-5 h-5 text-[#FF6B35]" />
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          Table of Contents
        </h2>
      </div>
      <ul className="space-y-2">
        {sections.map((section, index) => (
          <li key={section.id}>
            <button
              onClick={() => scrollToSection(section.id)}
              className="text-left text-gray-700 dark:text-gray-300 hover:text-[#FF6B35] dark:hover:text-[#FF6B35] transition-colors"
            >
              <span className="text-[#FF6B35] font-medium mr-2">
                {index + 1}.
              </span>
              {section.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
