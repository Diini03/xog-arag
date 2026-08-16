export type Category =
  | "data" | "ai" | "ml" | "programming" | "statistics" | "career" | "tech" | "visualization";

export const CATEGORY_LABEL: Record<Category, string> = {
  data: "Data analysis",
  ai: "Artificial intelligence",
  ml: "Machine learning",
  programming: "Programming",
  statistics: "Statistics",
  career: "Careers",
  tech: "Technology",
  visualization: "Visualization",
};

export type Difficulty = "beginner" | "intermediate" | "advanced";

export interface Source {
  publication: string;
  url: string;
  author?: string;
}

export interface Quote {
  id: string;
  text: string;
  author: string;
  /** When absent, the quote is presented as an original XogArag thought, never attributed. */
  source?: Source;
  attributed: boolean;
  category: Category;
}

export interface Tip {
  id: string;
  title: string;
  explanation: string;
  example?: string;
  category: Category;
  difficulty: Difficulty;
  source?: Source;
}

export interface Fact {
  id: string;
  text: string;
  category: Category;
  source?: Source;
}

export interface Question {
  id: string;
  prompt: string;
  code?: string;
  options: string[];
  answerIndex: number;
  explanation: string;
  category: Category;
  difficulty: Difficulty;
}

export interface Challenge {
  id: string;
  title: string;
  brief: string;
  steps: string[];
  category: Category;
  difficulty: Difficulty;
}

export interface Concept {
  id: string;
  term: string;
  definition: string;
  why: string;
  category: Category;
  source?: Source;
}

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  whyItMatters: string;
  publication: string;
  url: string;
  publishedAt: string; // ISO date
  category: Category;
  author?: string;
}

export interface LabMeta {
  id: string;
  title: string;
  description: string;
  category: Category;
  difficulty: Difficulty;
  tags: string[];
}

export interface GameMeta {
  id: string;
  title: string;
  description: string;
  category: Category;
  difficulty: Difficulty;
  rounds: number;
}

export type DiscoveryKind = "quote" | "tip" | "fact" | "question" | "concept" | "lab" | "game" | "news";

export interface SearchEntry {
  id: string;
  kind: DiscoveryKind;
  title: string;
  body: string;
  href: string;
  category: Category;
}
