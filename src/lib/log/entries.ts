import { Entry } from "./types";

/**
 * The log. One unified content model — a quote, a 40-word note, a long essay
 * and a project write-up differ only by `type`.
 */
export const ENTRIES: Entry[] = [
  {
    id: "n-metric-drift",
    type: "note",
    date: "2026-08-21",
    register: "signal",
    mood: "critical",
    tags: ["metrics", "practice"],
    body:
      "Every dashboard I have inherited had at least one metric nobody could define out loud. The fastest audit is not SQL — it is asking three people in the room what the number means and writing down the three different answers.",
  },
  {
    id: "q-box",
    type: "quote",
    date: "2026-08-20",
    source: "George E. P. Box",
    sourceUrl: "https://en.wikipedia.org/wiki/All_models_are_wrong",
    tags: ["modelling", "statistics"],
    annotation:
      "Quoted to death, understood rarely. The useful half is the second clause: usefulness is a judgement about a decision, not a property of the model. So the question in review should be 'useful for which decision?' — not 'what is the accuracy?'.",
    body: "All models are wrong, but some are useful.",
  },
  {
    id: "c-model-vs-product",
    type: "concern",
    date: "2026-08-18",
    title: "A good model is not a product, and the gap is where projects die",
    confidence: "observed in practice",
    mood: "concerned",
    tags: ["AI", "delivery", "MLOps"],
    body:
      "The most expensive misunderstanding I keep meeting is the belief that a model with strong offline metrics is most of the work. In practice the model is the cheap part. The expensive parts are the ones nobody demos: who owns the data contract, what happens on the day the upstream schema changes silently, who is accountable when a prediction is wrong in a way that costs someone money.\n\nA model answers a question. A product absorbs the consequences of answering it. Those are different engineering problems and often different teams.\n\nWhat I now insist on before any modelling starts: name the decision the output changes, name the person who makes that decision, and name what they do today without the model. If any of the three is missing, the work is a study, not a product — and it should be scoped and priced as a study.",
  },
  {
    id: "p-kulmid",
    type: "project",
    date: "2026-07-02",
    title: "Kulmid",
    status: "ongoing",
    tags: ["product", "Somalia", "data"],
    relatedProjectUrl: "https://github.com/Diini03",
    body:
      "The question: can a locally-built platform make scattered community and service data usable by the people it describes, rather than by a distant reporting cycle?\n\nWhat I found: the hard constraint was never modelling — it was collection reliability and the fact that identifiers are inconsistent between sources. Most of the value came from a boring canonicalisation layer.\n\nWhat I would do differently: design the ingest contract before the interface. I built screens first and paid for it later.",
  },
  {
    id: "n-sql-window",
    type: "note",
    date: "2026-07-28",
    register: "noise",
    mood: "curious",
    tags: ["SQL"],
    body:
      "Window functions replaced roughly a third of the subqueries I used to write. The other two thirds were questions I should not have been asking.",
  },
  {
    id: "q-tukey",
    type: "quote",
    date: "2026-07-15",
    source: "John Tukey",
    tags: ["statistics", "analysis"],
    annotation:
      "This is the sentence I read before starting any analysis. It gives permission to work on a vague but real question instead of a crisp but irrelevant one — which is most of what applied analysis actually is.",
    body:
      "Far better an approximate answer to the right question, which is often vague, than an exact answer to the wrong question, which can always be made precise.",
  },
  {
    id: "c-african-data-context",
    type: "concern",
    date: "2026-07-10",
    title: "Benchmarks are not neutral, and neither is the data they are built on",
    confidence: "still updating my view",
    mood: "critical",
    tags: ["AI", "bias", "Somalia"],
    body:
      "Most published model evaluation assumes an environment I do not work in: dense, well-labelled, English-first data, stable connectivity, and institutions that already digitised their records. When those assumptions fail, the failure is quietly attributed to the local context rather than to the benchmark.\n\nWorking with Somali data, the recurring pattern is not that models are biased in the dramatic sense — it is that they are confidently out of distribution and no metric on the dashboard says so. A displacement dataset with irregular reporting periods will produce a beautiful trend line that is mostly an artefact of who filed a report that month.\n\nI am still forming a view on what the right response is. So far the honest one is smaller claims: report coverage alongside every figure, refuse to smooth gaps into a trend, and treat missingness as a finding rather than a nuisance to impute away.",
  },
  {
    id: "p-displacement",
    type: "project",
    date: "2026-06-19",
    title: "Somalia displacement dashboard — Power BI",
    status: "shipped",
    tags: ["Power BI", "humanitarian", "Somalia"],
    relatedProjectUrl: "https://github.com/Diini03",
    body:
      "The question: where and when do displacement movements concentrate, and can that be read at a glance by someone who is not an analyst?\n\nWhat I found: reporting frequency varied more than the underlying movement. Half of the apparent seasonality was collection behaviour. The dashboard needed a coverage indicator more than it needed another chart.\n\nWhat I would do differently: put the data-quality panel on the first page, not the last. Nobody reaches page three.",
  },
  {
    id: "n-notebook-discipline",
    type: "note",
    date: "2026-06-11",
    register: "signal",
    mood: "neutral",
    tags: ["practice", "python"],
    body:
      "A notebook that cannot be run top to bottom is not analysis, it is a transcript of your confusion. I restart the kernel before I believe any number I intend to send to someone else.",
  },
  {
    id: "p-churn",
    type: "project",
    date: "2026-05-30",
    title: "Customer churn model",
    status: "archived",
    tags: ["ML", "classification"],
    relatedProjectUrl: "https://github.com/Diini03",
    body:
      "The question: which customers are about to leave, and early enough to act?\n\nWhat I found: the strongest features were operational leakage — support-ticket recency essentially encoded a decision that had already been made. Removing the leakage cut headline performance by a lot and made the model honest.\n\nWhat I would do differently: build the leakage audit into the feature pipeline from day one rather than discovering it in review.",
  },
  {
    id: "q-original-ledger",
    type: "quote",
    date: "2026-05-22",
    tags: ["practice"],
    annotation:
      "Mine. Written after a week of reconciling two reports that disagreed by four percent and finding that both were right under their own definitions.",
    body: "A number without its definition attached is a rumour with a decimal point.",
  },
  {
    id: "p-covid",
    type: "project",
    date: "2026-04-14",
    title: "COVID-19 tracking dashboard",
    status: "archived",
    tags: ["dashboard", "public health"],
    relatedProjectUrl: "https://github.com/Diini03",
    body:
      "The question: could a single view keep pace with daily case reporting without misleading through smoothing?\n\nWhat I found: the reporting calendar dominated everything. Weekday effects were larger than most real signals in short windows.\n\nWhat I would do differently: publish the raw and adjusted series side by side rather than choosing for the reader.",
  },
  {
    id: "n-hype-cycle",
    type: "note",
    date: "2026-04-02",
    register: "noise",
    mood: "critical",
    tags: ["AI", "hype"],
    body:
      "Two thirds of what is announced as an AI capability this month is a prompt, a retry loop and a very confident screenshot.",
  },
  {
    id: "p-armyworm",
    type: "project",
    date: "2026-03-08",
    title: "Fall armyworm detection — CNN",
    status: "shipped",
    tags: ["deep learning", "agriculture", "computer vision"],
    relatedProjectUrl: "https://github.com/Diini03",
    body:
      "The question: can a small convolutional model identify infestation from field photographs taken on ordinary phones?\n\nWhat I found: accuracy on clean training images was never the constraint. Lighting, focus and the angle farmers actually shoot at were. Augmentation designed around real capture conditions mattered more than depth.\n\nWhat I would do differently: collect a hundred genuinely bad photographs before training anything.",
  },
  {
    id: "p-netflix-eda",
    type: "project",
    date: "2026-02-11",
    title: "Netflix catalogue — exploratory analysis",
    status: "archived",
    tags: ["EDA", "python"],
    relatedProjectUrl: "https://github.com/Diini03",
    body:
      "The question: what does the catalogue's composition say about acquisition strategy over time?\n\nWhat I found: the date fields describe when a title was added, not when it was made — most published charts of this dataset quietly conflate the two.\n\nWhat I would do differently: less charting, more time on the column dictionary.",
  },
  {
    id: "c-honest-uncertainty",
    type: "concern",
    date: "2026-01-25",
    title: "The profession rewards confidence and penalises calibration",
    confidence: "speculative",
    mood: "concerned",
    tags: ["AI", "communication", "careers"],
    body:
      "An analyst who says 'between eight and fourteen percent, and here is why the range is wide' is often perceived as less competent than one who says 'eleven percent'. This is a cultural problem, not a technical one, and it is getting worse as generated text makes fluent certainty free to produce.\n\nI suspect — and I am labelling this speculative deliberately — that the differentiating skill of the next few years is not modelling but the ability to publish uncertainty in a form a decision-maker can act on. Not error bars buried in an appendix: a stated range, a stated assumption, and a stated condition under which you would change your mind.\n\nThis log is partly an exercise in that. Every concern here carries a marker saying how much weight it should carry.",
  },
];

export const SORTED_ENTRIES = [...ENTRIES].sort((a, b) => b.date.localeCompare(a.date));

export const byType = (type: Entry["type"]) => SORTED_ENTRIES.filter((e) => e.type === type);

export const ALL_TAGS = Array.from(new Set(ENTRIES.flatMap((e) => e.tags))).sort((a, b) =>
  a.localeCompare(b),
);
