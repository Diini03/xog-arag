import { GameMeta, LabMeta, SearchEntry } from "./types";
import { QUOTES } from "./quotes";
import { TIPS } from "./tips";
import { CONCEPTS, FACTS } from "./facts";
import { QUESTIONS } from "./questions";
import { CURATED_NEWS } from "./news";

export const LABS: LabMeta[] = [
  {
    id: "correlation",
    title: "Correlation Lab",
    description: "Drag the correlation and noise sliders and watch a cloud of points turn into a line.",
    category: "statistics",
    difficulty: "beginner",
    tags: ["correlation", "scatter", "pearson", "noise"],
  },
  {
    id: "regression",
    title: "Regression Lab",
    description: "Set slope, intercept and noise, then compare your line against the least-squares fit and R².",
    category: "statistics",
    difficulty: "intermediate",
    tags: ["linear regression", "r squared", "residuals", "least squares"],
  },
  {
    id: "distribution",
    title: "Distribution Lab",
    description: "Shift the mean and spread of a normal curve and read off the area inside any interval.",
    category: "statistics",
    difficulty: "beginner",
    tags: ["normal", "gaussian", "standard deviation", "probability"],
  },
  {
    id: "sampling",
    title: "Sampling Lab",
    description: "Draw repeated samples from a skewed population and watch the sampling distribution turn normal.",
    category: "statistics",
    difficulty: "intermediate",
    tags: ["central limit theorem", "sample size", "standard error"],
  },
  {
    id: "outliers",
    title: "Outlier Lab",
    description: "Compare z-score and IQR rules on the same data and see which points each method flags.",
    category: "data",
    difficulty: "beginner",
    tags: ["outliers", "iqr", "z-score", "cleaning"],
  },
  {
    id: "kmeans",
    title: "K-Means Lab",
    description: "Step through k-means one iteration at a time and watch centroids move to convergence.",
    category: "ml",
    difficulty: "intermediate",
    tags: ["clustering", "kmeans", "unsupervised", "centroids"],
  },
  {
    id: "confusion",
    title: "Confusion Matrix Lab",
    description: "Move the decision threshold and see precision, recall and F1 trade against each other in real time.",
    category: "ml",
    difficulty: "intermediate",
    tags: ["precision", "recall", "threshold", "classification", "f1"],
  },
  {
    id: "abtest",
    title: "A/B Testing Lab",
    description: "Set conversion rates and sample size, then see the observed lift, interval and how often you would be fooled.",
    category: "statistics",
    difficulty: "advanced",
    tags: ["ab test", "experiment", "significance", "power"],
  },
];

export const GAMES: GameMeta[] = [
  {
    id: "guess-correlation",
    title: "Guess the Correlation",
    description: "A scatter plot appears. Estimate r before the answer is revealed.",
    category: "statistics",
    difficulty: "intermediate",
    rounds: 6,
  },
  {
    id: "spot-outlier",
    title: "Spot the Outlier",
    description: "One point does not belong. Click it before you talk yourself out of it.",
    category: "data",
    difficulty: "beginner",
    rounds: 6,
  },
  {
    id: "which-chart",
    title: "Which Chart?",
    description: "Read the question a stakeholder asked and choose the chart that answers it.",
    category: "visualization",
    difficulty: "beginner",
    rounds: 6,
  },
  {
    id: "quiz",
    title: "Concept Challenge",
    description: "Mixed questions on SQL, Python, statistics and machine learning, with explanations.",
    category: "programming",
    difficulty: "intermediate",
    rounds: 8,
  },
  {
    id: "data-or-noise",
    title: "Data or Noise?",
    description: "Two series. One has a real trend, one is a random walk. Pick the real one.",
    category: "statistics",
    difficulty: "advanced",
    rounds: 6,
  },
];

export const SEARCH_INDEX: SearchEntry[] = [
  ...QUOTES.map<SearchEntry>((q) => ({
    id: q.id, kind: "quote", title: q.text.slice(0, 80), body: q.author, href: `/explore?kind=quote#${q.id}`, category: q.category,
  })),
  ...TIPS.map<SearchEntry>((t) => ({
    id: t.id, kind: "tip", title: t.title, body: t.explanation, href: `/explore?kind=tip#${t.id}`, category: t.category,
  })),
  ...FACTS.map<SearchEntry>((f) => ({
    id: f.id, kind: "fact", title: f.text.slice(0, 80), body: f.text, href: `/explore?kind=fact#${f.id}`, category: f.category,
  })),
  ...CONCEPTS.map<SearchEntry>((c) => ({
    id: c.id, kind: "concept", title: c.term, body: c.definition, href: `/explore?kind=concept#${c.id}`, category: c.category,
  })),
  ...QUESTIONS.map<SearchEntry>((q) => ({
    id: q.id, kind: "question", title: q.prompt, body: q.explanation, href: `/game/quiz`, category: q.category,
  })),
  ...LABS.map<SearchEntry>((l) => ({
    id: l.id, kind: "lab", title: l.title, body: `${l.description} ${l.tags.join(" ")}`, href: `/lab/${l.id}`, category: l.category,
  })),
  ...GAMES.map<SearchEntry>((g) => ({
    id: g.id, kind: "game", title: g.title, body: g.description, href: `/game/${g.id}`, category: g.category,
  })),
  ...CURATED_NEWS.map<SearchEntry>((n) => ({
    id: n.id, kind: "news", title: n.title, body: `${n.summary} ${n.publication}`, href: `/news/${n.id}`, category: n.category,
  })),
];

export function searchContent(query: string, limit = 24): SearchEntry[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const terms = q.split(/\s+/);
  return SEARCH_INDEX.map((e) => {
    const hay = `${e.title} ${e.body} ${e.kind} ${e.category}`.toLowerCase();
    let score = 0;
    for (const t of terms) {
      if (!hay.includes(t)) return { e, score: -1 };
      score += e.title.toLowerCase().includes(t) ? 3 : 1;
    }
    return { e, score };
  })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((r) => r.e);
}
