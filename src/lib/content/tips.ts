import { Tip } from "./types";

export const TIPS: Tip[] = [
  {
    id: "t-pandas-groupby-transform",
    title: "groupby().transform() keeps the original row count",
    explanation:
      "agg() collapses each group into one row. transform() returns a value for every original row, which is what you want when you need a group statistic side by side with the raw data — for example a per-customer average next to each order.",
    example: "df['order_vs_customer_avg'] = df['amount'] / df.groupby('customer_id')['amount'].transform('mean')",
    category: "data",
    difficulty: "intermediate",
    source: { publication: "pandas documentation", url: "https://pandas.pydata.org/docs/reference/api/pandas.core.groupby.DataFrameGroupBy.transform.html" },
  },
  {
    id: "t-sql-window-running",
    title: "A running total is a window function, not a self-join",
    explanation:
      "SUM(...) OVER (PARTITION BY ... ORDER BY ...) computes a cumulative value per row without collapsing the result set. It replaces correlated subqueries that scan the table once per row.",
    example: "SELECT day, revenue,\n       SUM(revenue) OVER (PARTITION BY region ORDER BY day) AS running_revenue\nFROM sales;",
    category: "data",
    difficulty: "intermediate",
    source: { publication: "PostgreSQL documentation", url: "https://www.postgresql.org/docs/current/tutorial-window.html" },
  },
  {
    id: "t-sql-count-null",
    title: "COUNT(column) silently skips NULLs",
    explanation:
      "COUNT(*) counts rows; COUNT(col) counts non-NULL values in that column. The gap between the two is a free null-audit of any column, no CASE expression needed.",
    example: "SELECT COUNT(*) AS rows, COUNT(email) AS with_email FROM users;",
    category: "data",
    difficulty: "beginner",
    source: { publication: "PostgreSQL documentation", url: "https://www.postgresql.org/docs/current/functions-aggregate.html" },
  },
  {
    id: "t-stats-median-skew",
    title: "Report the median when the distribution has a tail",
    explanation:
      "Revenue, session length and salary are usually right-skewed, so a handful of large values pull the mean above the typical case. Publish the median with an interquartile range and the mean stops misleading the reader.",
    category: "statistics",
    difficulty: "beginner",
  },
  {
    id: "t-viz-truncated-axis",
    title: "Truncate the y-axis on lines, never on bars",
    explanation:
      "A bar encodes value through its length, so cutting the axis multiplies apparent differences. A line encodes change through slope, so a zoomed axis is legitimate — just label it clearly.",
    category: "visualization",
    difficulty: "beginner",
    source: { publication: "Financial Times Visual Vocabulary", url: "https://github.com/Financial-Times/chart-doctor" },
  },
  {
    id: "t-python-enumerate-zip",
    title: "Stop indexing lists by hand",
    explanation:
      "enumerate() gives you index and value together, and zip() walks two sequences in step. Both read better than range(len(x)) and both stop at the shortest sequence instead of raising IndexError.",
    example: "for i, (name, score) in enumerate(zip(names, scores), start=1):\n    print(i, name, score)",
    category: "programming",
    difficulty: "beginner",
    source: { publication: "Python documentation", url: "https://docs.python.org/3/library/functions.html#enumerate" },
  },
  {
    id: "t-ml-leakage-split",
    title: "Fit the scaler after the split, not before",
    explanation:
      "Scaling on the full dataset leaks test-set statistics into training and inflates your validation score. Fit transformations inside a Pipeline so cross-validation refits them on each fold.",
    example: "pipe = make_pipeline(StandardScaler(), LogisticRegression())\ncross_val_score(pipe, X, y, cv=5)",
    category: "ml",
    difficulty: "intermediate",
    source: { publication: "scikit-learn user guide", url: "https://scikit-learn.org/stable/common_pitfalls.html#data-leakage" },
  },
  {
    id: "t-excel-xlookup",
    title: "XLOOKUP removes the fragile column index",
    explanation:
      "VLOOKUP breaks when someone inserts a column because the third argument is a position. XLOOKUP takes a lookup range and a return range, and has a built-in not-found argument instead of IFERROR wrapping.",
    example: "=XLOOKUP(A2, Products[SKU], Products[Price], \"missing\")",
    category: "data",
    difficulty: "beginner",
    source: { publication: "Microsoft Support", url: "https://support.microsoft.com/en-us/office/xlookup-function-b7fd680e-6d10-43e6-84f9-88eae8bf5929" },
  },
  {
    id: "t-git-switch-restore",
    title: "git switch and git restore split what checkout overloaded",
    explanation:
      "git checkout changed branches and discarded file changes with almost the same syntax. git switch handles branches and git restore handles files, so a typo no longer wipes your working tree.",
    example: "git switch -c feature/labs\ngit restore --staged src/index.css",
    category: "programming",
    difficulty: "beginner",
    source: { publication: "Git documentation", url: "https://git-scm.com/docs/git-switch" },
  },
  {
    id: "t-powerbi-measure-column",
    title: "Prefer a measure over a calculated column in Power BI",
    explanation:
      "A calculated column is materialised for every row and grows the model. A measure is evaluated at query time in the current filter context, so it stays correct when the user slices differently.",
    example: "Revenue YoY % = DIVIDE([Revenue] - [Revenue LY], [Revenue LY])",
    category: "data",
    difficulty: "intermediate",
    source: { publication: "Microsoft Learn", url: "https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-calculated-columns" },
  },
  {
    id: "t-cleaning-dtype",
    title: "Check dtypes before you trust a numeric summary",
    explanation:
      "One stray value such as \"1,240\" or \"N/A\" turns a whole column into object dtype, and describe() then reports counts instead of means. Convert explicitly with errors='coerce' and count the NaNs it produces.",
    example: "df['amount'] = pd.to_numeric(df['amount'], errors='coerce')\nprint(df['amount'].isna().sum(), 'unparsable values')",
    category: "data",
    difficulty: "beginner",
  },
  {
    id: "t-career-portfolio",
    title: "One finished analysis beats five started notebooks",
    explanation:
      "Hiring managers skim for a question, a method and a conclusion. A short project with a stated question, a documented decision and one clear chart signals more than a long notebook that stops at df.head().",
    category: "career",
    difficulty: "beginner",
  },
  {
    id: "t-ab-peeking",
    title: "Peeking at an A/B test inflates false positives",
    explanation:
      "Checking significance repeatedly and stopping at the first p < 0.05 makes the real error rate far higher than 5%. Fix the sample size in advance, or use a sequential test designed for continuous monitoring.",
    category: "statistics",
    difficulty: "advanced",
  },
  {
    id: "t-embeddings-cosine",
    title: "Cosine similarity ignores magnitude, and that is usually the point",
    explanation:
      "Embedding vectors encode meaning in direction. Cosine similarity compares angle only, so a long document and a short sentence about the same topic can still score highly.",
    category: "ai",
    difficulty: "intermediate",
  },
];
