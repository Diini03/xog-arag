import { Concept, Fact } from "./types";

export const FACTS: Fact[] = [
  {
    id: "f-anscombe",
    text: "Anscombe's quartet is four datasets with nearly identical mean, variance, correlation and regression line — and four completely different scatter plots. It is the standard argument for plotting before summarising.",
    category: "statistics",
    source: { publication: "Graphs in Statistical Analysis, The American Statistician (1973)", url: "https://www.tandfonline.com/doi/abs/10.1080/00031305.1973.10478966" },
  },
  {
    id: "f-birthday",
    text: "In a room of 23 people the chance that two share a birthday passes 50%. The count of possible pairs, 253, grows far faster than the count of people.",
    category: "statistics",
  },
  {
    id: "f-float",
    text: "0.1 + 0.2 does not equal 0.3 in IEEE 754 binary floating point, because 0.1 has no exact binary representation. This is why money is stored in integers or decimals, not floats.",
    category: "programming",
    source: { publication: "IEEE 754 standard overview", url: "https://en.wikipedia.org/wiki/IEEE_754" },
  },
  {
    id: "f-transformer",
    text: "The transformer architecture behind modern language models was introduced in a 2017 paper whose central claim was subtractive: recurrence and convolution could both be removed and attention alone was enough.",
    category: "ai",
    source: { publication: "Attention Is All You Need, arXiv", url: "https://arxiv.org/abs/1706.03762" },
  },
  {
    id: "f-benford",
    text: "In many naturally occurring datasets the leading digit is 1 about 30% of the time and 9 less than 5% of the time. Auditors use this Benford pattern to flag fabricated figures.",
    category: "statistics",
    source: { publication: "Benford's law overview", url: "https://mathworld.wolfram.com/BenfordsLaw.html" },
  },
  {
    id: "f-csv-spec",
    text: "CSV had no formal specification for its first three decades. RFC 4180 arrived in 2005 and is still only informational, which is why quoting and line endings differ between tools.",
    category: "data",
    source: { publication: "RFC 4180", url: "https://www.rfc-editor.org/rfc/rfc4180" },
  },
  {
    id: "f-gene-excel",
    text: "Excel silently converted gene names such as SEPT2 into dates so often that in 2020 the HUGO Gene Nomenclature Committee renamed the genes rather than fight the spreadsheet.",
    category: "data",
    source: { publication: "Nature news", url: "https://www.nature.com/articles/d41586-020-02211-w" },
  },
  {
    id: "f-curse-dimensionality",
    text: "In high dimensions almost all pairs of random points sit at roughly the same distance from each other, which is why nearest-neighbour methods degrade as feature counts grow.",
    category: "ml",
  },
  {
    id: "f-postgres-index",
    text: "A Postgres index can make a query slower. If the planner estimates that a large share of rows match, a sequential scan reads fewer pages than an index scan plus heap fetches.",
    category: "data",
    source: { publication: "PostgreSQL documentation", url: "https://www.postgresql.org/docs/current/indexes-examine.html" },
  },
  {
    id: "f-simpson",
    text: "Simpson's paradox: a trend can appear in every subgroup and reverse when the groups are pooled. A famous 1973 Berkeley admissions analysis showed an apparent bias that disappeared department by department.",
    category: "statistics",
    source: { publication: "Sex Bias in Graduate Admissions, Science (1975)", url: "https://www.science.org/doi/10.1126/science.187.4175.398" },
  },
];

export const CONCEPTS: Concept[] = [
  {
    id: "c-overfitting",
    term: "Overfitting",
    definition: "A model has learned noise specific to the training sample rather than structure that generalises to new data.",
    why: "It looks like success — training error keeps falling — while test error rises. Holdout evaluation is the only way to see it.",
    category: "ml",
    source: { publication: "scikit-learn user guide", url: "https://scikit-learn.org/stable/modules/cross_validation.html" },
  },
  {
    id: "c-precision-recall",
    term: "Precision and recall",
    definition: "Precision is the share of positive predictions that were correct. Recall is the share of actual positives the model found.",
    why: "They move in opposite directions as you change the decision threshold, so a single accuracy number hides the trade-off you are actually making.",
    category: "ml",
  },
  {
    id: "c-idempotency",
    term: "Idempotency",
    definition: "An operation is idempotent when running it twice has the same effect as running it once.",
    why: "Pipelines get retried. An idempotent load can be re-run after a failure without double-counting rows.",
    category: "programming",
  },
  {
    id: "c-normalization",
    term: "Normalisation (databases)",
    definition: "Organising tables so each fact is stored once, with relationships expressed through keys instead of repetition.",
    why: "Repeated facts drift apart. Normalisation trades a few joins for the guarantee that there is one place to update.",
    category: "data",
  },
  {
    id: "c-rag",
    term: "Retrieval-augmented generation",
    definition: "The system retrieves relevant documents first and passes them to the model as context, instead of relying on parametric memory.",
    why: "It makes answers checkable: every claim can be traced to a retrieved passage, which is what makes citations possible.",
    category: "ai",
  },
  {
    id: "c-confidence-interval",
    term: "Confidence interval",
    definition: "A range produced by a procedure that would contain the true parameter in a stated share of repeated samples.",
    why: "It communicates precision. A point estimate of 12% means something very different at ±1 point than at ±9 points.",
    category: "statistics",
  },
  {
    id: "c-vector-db",
    term: "Vector database",
    definition: "A store optimised for approximate nearest-neighbour search over high-dimensional embedding vectors.",
    why: "Semantic search needs similarity, not equality. Exact search over millions of vectors is too slow, so these systems trade a little recall for large speed gains.",
    category: "ai",
  },
  {
    id: "c-slowly-changing",
    term: "Slowly changing dimension",
    definition: "A warehouse pattern for attributes that change over time, such as a customer moving to a new region.",
    why: "Type 1 overwrites history and Type 2 keeps versioned rows. Choosing wrong makes last year's report irreproducible.",
    category: "data",
  },
];
