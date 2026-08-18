import { createClient } from "https://esm.sh/@supabase/supabase-js@2.58.0";

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
};

const MODEL = "google/gemini-3.5-flash";

const SCHEMA = {
  type: "object",
  additionalProperties: false,
  required: ["focus", "briefing", "questions", "tip", "quote", "task"],
  properties: {
    focus: { type: "string", description: "Short topic label, 2-4 words, e.g. 'Window functions'" },
    briefing: { type: "string", description: "Two sentences explaining what to learn today and why it matters at work." },
    questions: {
      type: "array",
      minItems: 3,
      maxItems: 3,
      items: {
        type: "object",
        additionalProperties: false,
        required: ["prompt", "options", "answerIndex", "explanation", "category", "difficulty"],
        properties: {
          prompt: { type: "string" },
          options: { type: "array", minItems: 4, maxItems: 4, items: { type: "string" } },
          answerIndex: { type: "integer", minimum: 0, maximum: 3 },
          explanation: { type: "string" },
          category: { type: "string", enum: ["data", "ai", "ml", "programming", "statistics", "career", "tech", "visualization"] },
          difficulty: { type: "string", enum: ["beginner", "intermediate", "advanced"] },
        },
      },
    },
    tip: {
      type: "object",
      additionalProperties: false,
      required: ["title", "explanation", "example", "category", "difficulty"],
      properties: {
        title: { type: "string" },
        explanation: { type: "string" },
        example: { type: "string", description: "Short code or query snippet. Empty string if none." },
        category: { type: "string", enum: ["data", "ai", "ml", "programming", "statistics", "career", "tech", "visualization"] },
        difficulty: { type: "string", enum: ["beginner", "intermediate", "advanced"] },
      },
    },
    quote: {
      type: "object",
      additionalProperties: false,
      required: ["text"],
      properties: { text: { type: "string", description: "One original sentence about working with data. Do not attribute it to a real person." } },
    },
    task: {
      type: "object",
      additionalProperties: false,
      required: ["title", "brief", "steps"],
      properties: {
        title: { type: "string" },
        brief: { type: "string" },
        steps: { type: "array", minItems: 3, maxItems: 5, items: { type: "string" } },
      },
    },
  },
} as const;

const PROMPT = `You write the daily practice drop for XogArag, a learning lab for data analysts, data scientists, ML and AI practitioners.

Rules:
- Everything must be technically correct and checkable. Never invent statistics, benchmarks, or quotes from real people.
- Questions must be genuinely tricky for a working practitioner: real pitfalls in SQL, pandas, statistics, ML evaluation, or LLM behaviour. Exactly one correct option; distractors must be plausible.
- The tip must be immediately usable today, with a concrete snippet when relevant.
- The quote is an original line, never attributed to anyone.
- The task should take under 20 minutes on a dataset the reader already has.
- Vary the topic day to day. Today's date is {DATE} — use it as a variety seed, do not mention it.`;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: cors });

  try {
    const day = new Date().toISOString().slice(0, 10);
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    const { data: existing } = await supabase
      .from("daily_drops")
      .select("day, payload")
      .eq("day", day)
      .maybeSingle();

    if (existing) {
      return new Response(JSON.stringify({ day, cached: true, ...existing.payload }), {
        headers: { ...cors, "Content-Type": "application/json" },
      });
    }

    const key = Deno.env.get("LOVABLE_API_KEY");
    if (!key) {
      return new Response(JSON.stringify({ error: "AI is not configured on this deployment." }), {
        status: 500,
        headers: { ...cors, "Content-Type": "application/json" },
      });
    }

    const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Lovable-API-Key": key },
      body: JSON.stringify({
        model: MODEL,
        messages: [
          { role: "system", content: PROMPT.replace("{DATE}", day) },
          { role: "user", content: "Generate today's drop as JSON." },
        ],
        response_format: {
          type: "json_schema",
          json_schema: { name: "daily_drop", strict: true, schema: SCHEMA },
        },
      }),
    });

    if (!res.ok) {
      const body = await res.text();
      const message =
        res.status === 429
          ? "Too many requests right now — today's drop will appear shortly."
          : res.status === 402
            ? "AI credits are exhausted for this workspace."
            : `AI request failed (${res.status}).`;
      console.error("gateway error", res.status, body.slice(0, 500));
      return new Response(JSON.stringify({ error: message }), {
        status: res.status,
        headers: { ...cors, "Content-Type": "application/json" },
      });
    }

    const json = await res.json();
    const raw = json.choices?.[0]?.message?.content;
    if (!raw) throw new Error("Empty AI response");
    const payload = JSON.parse(raw);

    await supabase.from("daily_drops").upsert({ day, payload }, { onConflict: "day" });

    return new Response(JSON.stringify({ day, cached: false, ...payload }), {
      headers: { ...cors, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("daily-brief failed", e);
    return new Response(JSON.stringify({ error: "Could not build today's drop." }), {
      status: 500,
      headers: { ...cors, "Content-Type": "application/json" },
    });
  }
});
