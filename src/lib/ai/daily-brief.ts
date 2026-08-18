import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Category, Difficulty, Question } from "@/lib/content/types";
import { todayKey } from "@/lib/daily";

export interface DailyBrief {
  day: string;
  focus: string;
  briefing: string;
  questions: {
    prompt: string;
    options: string[];
    answerIndex: number;
    explanation: string;
    category: Category;
    difficulty: Difficulty;
  }[];
  tip: { title: string; explanation: string; example?: string; category: Category; difficulty: Difficulty };
  quote: { text: string };
  task: { title: string; brief: string; steps: string[] };
}

async function fetchDailyBrief(): Promise<DailyBrief> {
  const { data, error } = await supabase.functions.invoke("daily-brief", { body: {} });
  if (error) throw error;
  if (!data || (data as { error?: string }).error) {
    throw new Error((data as { error?: string })?.error ?? "Today's drop is not available.");
  }
  return data as DailyBrief;
}

/** Today's AI-written drop. Generated once per UTC day and cached in the database for everyone. */
export function useDailyBrief() {
  return useQuery({
    queryKey: ["daily-brief", todayKey()],
    queryFn: fetchDailyBrief,
    staleTime: 60 * 60 * 1000,
    retry: 1,
  });
}

/** Turns AI questions into the same shape the static question components use. */
export function briefQuestions(brief: DailyBrief | undefined): Question[] {
  if (!brief) return [];
  return brief.questions.map((q, i) => ({
    id: `ai-${brief.day}-${i}`,
    prompt: q.prompt,
    options: q.options,
    answerIndex: q.answerIndex,
    explanation: q.explanation,
    category: q.category,
    difficulty: q.difficulty,
  }));
}
