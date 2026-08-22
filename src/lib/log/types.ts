export type EntryType = "note" | "quote" | "concern" | "project";

export type Mood = "concerned" | "curious" | "critical" | "neutral";

/** Honesty marker used on concern entries. */
export type Confidence = "speculative" | "observed in practice" | "still updating my view";

/** Editorial weight used by the signal/noise filter on /notes. */
export type Register = "signal" | "noise";

export type ProjectStatus = "shipped" | "ongoing" | "archived";

export interface Entry {
  id: string;
  type: EntryType;
  title?: string;
  /** Plain-text / light markdown body. Blank lines separate paragraphs. */
  body: string;
  /** Quotes: who said it. */
  source?: string;
  sourceUrl?: string;
  /** Your annotation on a quote — shown on the flipped card. */
  annotation?: string;
  tags: string[];
  /** ISO date the entry was logged. */
  date: string;
  mood?: Mood;
  confidence?: Confidence;
  register?: Register;
  status?: ProjectStatus;
  relatedProjectUrl?: string;
}

export const TYPE_PATH: Record<EntryType, string> = {
  note: "/notes",
  quote: "/quotes",
  concern: "/concerns",
  project: "/data-diary",
};

export const TYPE_LABEL: Record<EntryType, string> = {
  note: "note",
  quote: "quote",
  concern: "concern",
  project: "field entry",
};
