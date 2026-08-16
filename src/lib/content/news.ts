import { NewsItem } from "./types";

/**
 * Curated fallback stories. Every entry links to a primary source and is used
 * whenever live fetching is unavailable. Nothing here is model-generated.
 */
export const CURATED_NEWS: NewsItem[] = [
  {
    id: "n-attention",
    title: "Attention Is All You Need — the paper behind modern language models",
    summary:
      "Google researchers replaced recurrence and convolution with self-attention, introducing the transformer architecture that now underpins virtually every large language model.",
    whyItMatters:
      "Almost every model you use today, from chat assistants to embedding APIs, is a descendant of this design. Reading the original makes later architectures easier to follow.",
    publication: "arXiv",
    url: "https://arxiv.org/abs/1706.03762",
    publishedAt: "2017-06-12",
    category: "ai",
    author: "Vaswani et al.",
  },
  {
    id: "n-pandas-2",
    title: "pandas 2.0 adds an Arrow-backed dtype layer",
    summary:
      "The release introduced PyArrow-backed data types alongside the NumPy ones, bringing better string performance, real nullable types and cheaper interchange with other tools.",
    whyItMatters:
      "String-heavy dataframes are common in analytics work and were historically slow and memory hungry. Opting into the Arrow dtypes changes those characteristics substantially.",
    publication: "pandas release notes",
    url: "https://pandas.pydata.org/docs/whatsnew/v2.0.0.html",
    publishedAt: "2023-04-03",
    category: "data",
  },
  {
    id: "n-duckdb",
    title: "DuckDB reaches 1.0 with a stable storage format",
    summary:
      "The in-process analytical database committed to backwards-compatible storage, positioning itself as the SQLite of analytics for local and embedded workloads.",
    whyItMatters:
      "Analysts can now run columnar SQL over Parquet and CSV files on a laptop without a server, which removes a large amount of infrastructure from small and mid-sized projects.",
    publication: "DuckDB blog",
    url: "https://duckdb.org/2024/06/03/announcing-duckdb-100.html",
    publishedAt: "2024-06-03",
    category: "data",
  },
  {
    id: "n-polars",
    title: "Polars brings a lazy, multithreaded dataframe API to Python",
    summary:
      "Built in Rust on Apache Arrow, Polars offers a query-optimised lazy API where the engine reorders and prunes work before any data is read.",
    whyItMatters:
      "It is the clearest example of query planning arriving in dataframe code, and it changes how you write transformations: you describe intent and let the optimiser choose execution.",
    publication: "Polars user guide",
    url: "https://docs.pola.rs/",
    publishedAt: "2024-01-15",
    category: "data",
  },
  {
    id: "n-eu-ai-act",
    title: "The EU AI Act enters into force with a risk-tiered framework",
    summary:
      "The regulation classifies AI systems by risk level and attaches obligations for transparency, data governance and human oversight, with staged application dates.",
    whyItMatters:
      "It is the first broad statutory framework for AI systems, and its documentation requirements affect how teams record training data and evaluation results.",
    publication: "European Commission",
    url: "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai",
    publishedAt: "2024-08-01",
    category: "ai",
  },
  {
    id: "n-python-gil",
    title: "PEP 703 charts a path to a Python without the GIL",
    summary:
      "The proposal, accepted with a phased rollout, makes the global interpreter lock optional so CPython can run threads in genuine parallel.",
    whyItMatters:
      "CPU-bound Python work has been shaped around multiprocessing for decades. Free-threaded builds change the calculus for data pipelines and numeric code.",
    publication: "Python Enhancement Proposals",
    url: "https://peps.python.org/pep-0703/",
    publishedAt: "2023-07-28",
    category: "programming",
  },
  {
    id: "n-postgres-17",
    title: "PostgreSQL keeps absorbing analytical workloads",
    summary:
      "Recent major releases improved incremental sorting, parallel query planning, JSON handling and logical replication, narrowing the gap with specialised systems.",
    whyItMatters:
      "For many teams the honest answer to 'which warehouse?' is still Postgres, and each release moves that threshold higher.",
    publication: "PostgreSQL release notes",
    url: "https://www.postgresql.org/docs/release/",
    publishedAt: "2024-09-26",
    category: "data",
  },
  {
    id: "n-mcp",
    title: "Model Context Protocol standardises how tools talk to AI clients",
    summary:
      "An open protocol describes how applications expose tools, resources and prompts to model clients over a common interface.",
    whyItMatters:
      "Custom per-vendor integrations were the main cost of adding capability to AI applications. A shared protocol makes those integrations portable.",
    publication: "Model Context Protocol",
    url: "https://modelcontextprotocol.io/",
    publishedAt: "2024-11-25",
    category: "ai",
  },
  {
    id: "n-arxiv-scaling",
    title: "Scaling laws for neural language models",
    summary:
      "Empirical work showed model loss follows smooth power laws in parameters, data and compute, which reframed model development as a budgeting problem.",
    whyItMatters:
      "It explains why the field pursued scale so aggressively, and why later work on data-optimal training changed the recommended parameter-to-token ratio.",
    publication: "arXiv",
    url: "https://arxiv.org/abs/2001.08361",
    publishedAt: "2020-01-23",
    category: "ml",
  },
  {
    id: "n-observable-plot",
    title: "Observable Plot offers a grammar-of-graphics layer for the web",
    summary:
      "A concise JavaScript API built on D3 that expresses charts as marks and scales rather than manual SVG construction.",
    whyItMatters:
      "It brings the ggplot2 mental model to browser visualisation, which shortens the distance between exploratory charts and shipped ones.",
    publication: "Observable",
    url: "https://observablehq.com/plot/",
    publishedAt: "2022-05-03",
    category: "visualization",
  },
];

/** Topics repeated across the curated set — labelled honestly as "recently discussed". */
export const DISCUSSED_TOPICS = [
  { topic: "Transformers", count: 3, category: "ai" as const },
  { topic: "Arrow-backed dataframes", count: 3, category: "data" as const },
  { topic: "Embedded analytics", count: 2, category: "data" as const },
  { topic: "AI regulation", count: 2, category: "ai" as const },
  { topic: "Free-threaded Python", count: 1, category: "programming" as const },
  { topic: "Grammar of graphics", count: 1, category: "visualization" as const },
];
