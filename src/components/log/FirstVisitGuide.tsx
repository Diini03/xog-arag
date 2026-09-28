import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const OPEN_GUIDE_EVENT = "xogarag:open-guide";

const STORAGE_KEY = "xogarag:guide-complete";

const STEPS = [
  {
    index: "01",
    label: "welcome",
    title: "This is a field log, not a finished answer.",
    body: "Xog-arag collects working notes, quotations, concerns and project lessons from data analysis, data science, machine learning and AI.",
    detail: "Start anywhere. Each entry keeps its date, context and uncertainty visible.",
  },
  {
    index: "02",
    label: "find your way",
    title: "Use the index to follow a line of thought.",
    body: "Notes hold observations. Quotes preserve useful language. Concerns question the field. The data diary records what happened while building real projects.",
    detail: "The archive puts every entry in one chronological index.",
  },
  {
    index: "03",
    label: "read deeper",
    title: "The useful paths continue beneath each entry.",
    body: "Open a permalink for the full entry, select a tag to follow the same subject, or flip a quote to read why it mattered.",
    detail: "Press / or Ctrl/Command-K at any time to search the complete log.",
  },
  {
    index: "04",
    label: "make it yours",
    title: "Keep what deserves a second reading.",
    body: "Choose keep beneath any entry and it will appear on your kept page. Entries you open also form a private, recently read trail on the first page.",
    detail: "Both lists stay only in this browser.",
  },
  {
    index: "05",
    label: "begin",
    title: "Read slowly. Leave with one useful question.",
    body: "There is no feed to finish and no algorithm deciding what comes next. Browse by subject, return to a saved thought, or search for the problem already on your mind.",
    detail: "You can reopen this guide from the index whenever you need it.",
  },
] as const;

export function openFirstVisitGuide() {
  window.dispatchEvent(new Event(OPEN_GUIDE_EVENT));
}

export function FirstVisitGuide() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const dialogRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  const finish = useCallback(() => {
    localStorage.setItem(STORAGE_KEY, "true");
    setOpen(false);
  }, []);

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY) !== "true") setOpen(true);

    const reopen = () => {
      setStep(0);
      setOpen(true);
    };
    window.addEventListener(OPEN_GUIDE_EVENT, reopen);
    return () => window.removeEventListener(OPEN_GUIDE_EVENT, reopen);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => headingRef.current?.focus());

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") finish();
      if (event.key === "ArrowRight") setStep((value) => Math.min(value + 1, STEPS.length - 1));
      if (event.key === "ArrowLeft") setStep((value) => Math.max(value - 1, 0));

      if (event.key === "Tab" && dialogRef.current) {
        const focusable = Array.from(
          dialogRef.current.querySelectorAll<HTMLElement>(
            'button:not([disabled]), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
          ),
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [finish, open]);

  if (!open) return null;

  const current = STEPS[step];
  const last = step === STEPS.length - 1;

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center bg-background/75 p-3 backdrop-blur-md sm:items-center sm:p-6">
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="guide-title"
        aria-describedby="guide-description"
        className="w-full max-w-[700px] border border-rule-strong bg-background text-foreground"
      >
        <div className="flex items-center justify-between border-b border-rule px-5 py-4 sm:px-7">
          <p className="meta text-foreground">a short guide to xog-arag</p>
          <Button variant="ghost" size="sm" onClick={finish} className="meta h-auto px-2 py-1">
            skip
          </Button>
        </div>

        <div className="grid min-h-[365px] sm:grid-cols-[116px_1fr]">
          <div className="hidden border-r border-rule p-5 sm:block">
            <p className="font-display text-[44px] font-bold leading-none">{current.index}</p>
            <p className="meta mt-3">of {String(STEPS.length).padStart(2, "0")}</p>
          </div>

          <div className="flex flex-col justify-between p-6 sm:p-8">
            <div key={step} className="animate-fade-in">
              <div className="mb-6 flex items-center justify-between sm:block">
                <p className="meta text-foreground">{current.label}</p>
                <p className="meta sm:hidden">{current.index} / {String(STEPS.length).padStart(2, "0")}</p>
              </div>
              <h2
                id="guide-title"
                ref={headingRef}
                tabIndex={-1}
                className="max-w-[16ch] font-display text-[clamp(2rem,6vw,3.1rem)] font-bold leading-[1.02] outline-none text-balance"
              >
                {current.title}
              </h2>
              <p id="guide-description" className="mt-6 max-w-[54ch] text-[17px] leading-relaxed">
                {current.body}
              </p>
              <p className="meta mt-5 max-w-[56ch] normal-case leading-relaxed tracking-normal">
                {current.detail}
              </p>
            </div>

            <div className="mt-10 flex items-center justify-between gap-4 border-t border-rule pt-5">
              <div className="flex gap-1.5" aria-label={`Step ${step + 1} of ${STEPS.length}`}>
                {STEPS.map((item, index) => (
                  <span
                    key={item.index}
                    className={cn("h-1.5 w-7 bg-rule", index <= step && "bg-foreground")}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <div className="flex gap-2">
                {step > 0 && (
                  <Button variant="outline" onClick={() => setStep((value) => value - 1)}>
                    Back
                  </Button>
                )}
                <Button onClick={() => (last ? finish() : setStep((value) => value + 1))}>
                  {last ? "Open the log" : "Next"}
                  <span aria-hidden="true">→</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}