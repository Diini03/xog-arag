# First-visit guide

## Goal
Give every new visitor a short, focused introduction to Xog-arag before they begin reading. The guide appears once per browser, dims and blurs the page behind it, and can be skipped at any time.

## Experience
1. **Welcome** — explain that Xog-arag is a working field log about data analysis, data science, machine learning, and AI.
2. **Find your way** — introduce the side index and the different entry collections.
3. **Read deeper** — explain quote flipping, entry pages, tags, and the quick finder.
4. **Make it yours** — explain “keep” and the recently read trail.
5. **Begin** — close the guide and return focus to the page.

## Interaction details
- Show only when this browser has not completed or skipped the guide.
- Include Back, Next, Skip, and final “Open the log” controls with clear progress.
- Support Escape to skip and left/right arrow keys to navigate.
- Lock background scrolling while open and restore it afterward.
- Keep the dialog accessible with focus placement, modal semantics, and readable mobile sizing.
- Add a small “guide” control in the side index and mobile index so it can always be reopened.
- Preserve the current black-and-white visual language and reduced-motion behavior.

## Technical details
- Add a self-contained onboarding component using local browser storage and a custom reopen event.
- Mount it once in the shared shell so it works across every page.
- Extend the side index with the permanent guide trigger.
- Verify first visit, completion persistence, manual reopening, keyboard controls, mobile layout, and light/dark modes.
