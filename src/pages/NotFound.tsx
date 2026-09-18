import { Link } from "react-router-dom";
import { Shell } from "@/components/log/Shell";

export default function NotFound() {
  return (
    <Shell>
      <div className="max-w-[54ch] py-10">
        <p className="meta">404 · no such entry</p>
        <h1 className="mt-3 font-display text-[clamp(1.9rem,5vw,2.9rem)] font-semibold leading-tight">
          That page was never logged.
        </h1>
        <p className="mt-4 text-[17.5px] leading-relaxed text-muted-foreground">
          Either it has not been written yet, or the reference is wrong. The index has everything
          that exists.
        </p>
        <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2">
          <Link to="/" className="meta text-foreground link-draw">back to the log</Link>
          <Link to="/archive" className="meta hover:text-foreground">archive</Link>
        </div>
      </div>
    </Shell>
  );
}
