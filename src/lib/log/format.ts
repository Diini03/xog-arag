export function logged(date: string) {
  return date;
}

export function longDate(date: string) {
  return new Date(date + "T00:00:00Z").toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function readTime(body: string) {
  const words = body.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 220));
}

export function paragraphs(body: string) {
  return body.split(/\n{2,}/).map((p) => p.trim()).filter(Boolean);
}
