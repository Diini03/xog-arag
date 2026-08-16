import { Quote } from "./types";

/**
 * Attributed quotes are only included when a public, checkable source exists.
 * Everything else is labelled as an original XogArag thought instead of being
 * put in someone else's mouth.
 */
export const QUOTES: Quote[] = [
  {
    id: "q-box-models",
    text: "All models are wrong, but some are useful.",
    author: "George E. P. Box",
    attributed: true,
    category: "statistics",
    source: { publication: "Science and Statistics, Journal of the American Statistical Association (1976)", url: "https://www.tandfonline.com/doi/abs/10.1080/01621459.1976.10480949" },
  },
  {
    id: "q-tukey-approximate",
    text: "Far better an approximate answer to the right question than an exact answer to the wrong question.",
    author: "John W. Tukey",
    attributed: true,
    category: "statistics",
    source: { publication: "The Future of Data Analysis, Annals of Mathematical Statistics (1962)", url: "https://projecteuclid.org/journals/annals-of-mathematical-statistics/volume-33/issue-1/The-Future-of-Data-Analysis/10.1214/aoms/1177704711.full" },
  },
  {
    id: "q-knuth-optimization",
    text: "Premature optimization is the root of all evil.",
    author: "Donald Knuth",
    attributed: true,
    category: "programming",
    source: { publication: "Structured Programming with go to Statements, ACM Computing Surveys (1974)", url: "https://dl.acm.org/doi/10.1145/356635.356640" },
  },
  {
    id: "q-tufte-graphical",
    text: "Graphical excellence is that which gives to the viewer the greatest number of ideas in the shortest time with the least ink in the smallest space.",
    author: "Edward Tufte",
    attributed: true,
    category: "visualization",
    source: { publication: "The Visual Display of Quantitative Information (1983)", url: "https://www.edwardtufte.com/book/the-visual-display-of-quantitative-information/" },
  },
  {
    id: "q-hamming-purpose",
    text: "The purpose of computing is insight, not numbers.",
    author: "Richard Hamming",
    attributed: true,
    category: "data",
    source: { publication: "Numerical Methods for Scientists and Engineers (1962)", url: "https://archive.org/details/numericalmethods0000hamm" },
  },
  {
    id: "q-mcilroy-unix",
    text: "Write programs that do one thing and do it well. Write programs to work together.",
    author: "Doug McIlroy",
    attributed: true,
    category: "programming",
    source: { publication: "Bell System Technical Journal, UNIX Time-Sharing System (1978)", url: "https://archive.org/details/bstj57-6-1899" },
  },
  {
    id: "q-original-baseline",
    text: "A model without a baseline is a claim without a control group.",
    author: "XogArag",
    attributed: false,
    category: "ml",
  },
  {
    id: "q-original-cleaning",
    text: "Cleaning data is not preparation for the analysis. It is the first half of the analysis, and it is where most of the wrong answers are prevented.",
    author: "XogArag",
    attributed: false,
    category: "data",
  },
  {
    id: "q-original-dashboard",
    text: "A dashboard nobody argues with is a dashboard nobody reads.",
    author: "XogArag",
    attributed: false,
    category: "visualization",
  },
  {
    id: "q-original-pvalue",
    text: "The p-value tells you how surprising your data would be if nothing were going on. It never tells you how much is going on.",
    author: "XogArag",
    attributed: false,
    category: "statistics",
  },
  {
    id: "q-original-llm",
    text: "A language model is a very confident intern who has read everything and verified nothing.",
    author: "XogArag",
    attributed: false,
    category: "ai",
  },
  {
    id: "q-original-career",
    text: "The analyst who can explain a result to the finance team is worth three who can only produce it.",
    author: "XogArag",
    attributed: false,
    category: "career",
  },
];
