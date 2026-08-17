import { Link } from "react-router-dom";
import { Layout } from "@/components/site/Layout";

export default function NotFound() {
  return (
    <Layout>
      <div className="mx-auto max-w-xl py-16 text-center">
        <div className="font-mono text-[12px] uppercase tracking-[0.18em] text-muted-foreground">404</div>
        <h1 className="mt-3 font-display text-[clamp(2rem,6vw,3.25rem)] font-extrabold leading-[0.98]">
          Nothing here. Yet.
        </h1>
        <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
          That page does not exist. The interesting stuff is one click away.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-2">
          <Link to="/" className="rounded-md bg-primary px-4 py-2 text-[14px] font-semibold text-primary-foreground">Home</Link>
          <Link to="/today" className="rounded-md border border-border px-4 py-2 text-[14px] font-semibold">Today's picks</Link>
          <Link to="/labs" className="rounded-md border border-border px-4 py-2 text-[14px] font-semibold">Labs</Link>
        </div>
      </div>
    </Layout>
  );
}
