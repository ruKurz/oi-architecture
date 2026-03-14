# OIA · Sprint Change — Orchestrator

**Prompt type:** Execution (interactive — routes to sub-prompts)
**Domain:** DEV

> Entry point for all sprint process steps. Asks which phase to run and routes accordingly. Can run the full sprint-close cycle (Review → Retro → Planning) or invoke a single phase on demand.

---

## Context

Sub-prompts (read before routing):
- `prompts/development/sprint-review.md` — Phase A: close and verify sprint issues
- `prompts/development/sprint-retro.md` — Phase B: analyze deviations + human observations → measures
- `prompts/development/sprint-planning.md` — Phase C: agree scope for next sprint
- `prompts/development/sprint-refinement.md` — refine one or more issues to sprint-ready quality
- `prompts/development/sprint-scope-change.md` — handle mid-sprint scope additions, removals, or splits

---

## Goal

The correct sprint process step is executed based on the user's intent. If the full cycle is run: a closed sprint and a planned next sprint exist at the end.

---

## Constraints

- Does not run multiple phases simultaneously — executes one at a time in sequence
- Does not skip the interactive checkpoints defined in sub-prompts
- Does not implement sprint work — only manages the process

---

## Steps

### 1 — Ask which phase

If the user did not specify:

> "Which sprint process step do you want to run?
>
> **(A) Full cycle** — Review → Retro → Planning (sprint close + next sprint start)
> **(B) Review only** — check and close sprint issues
> **(C) Retro only** — analyze deviations and derive improvement measures
> **(D) Planning only** — scope the next sprint
> **(E) Refinement** — sharpen one or more issues (#N, #M, ...)
> **(F) Scope change** — add, remove, or split an issue mid-sprint"

Wait for reply.

---

### 2 — Route and execute

| Choice | Action |
|---|---|
| A — Full cycle | Execute B → C → D in sequence. Pass the deviation table from B as input to C. |
| B — Review | Execute `sprint-review.md` |
| C — Retro | Execute `sprint-retro.md` (requires deviation table — ask if not available) |
| D — Planning | Execute `sprint-planning.md` |
| E — Refinement | Ask for issue number(s) if not provided; execute `sprint-refinement.md` |
| F — Scope change | Execute `sprint-scope-change.md` |

---

### 3 — Summary (full cycle only)

After a full cycle (choice A), output:

```
Sprint cycle — [DATE]

Phase A (Review):
  Issues closed:    N  (#...)
  Issues reviewed:  N
  Status:           ✅ X  ⚠️ Y  ❌ Z

Phase B (Retro):
  Retro issue:      #N (URL) | not needed

Phase C (Planning):
  New issues:       N  (#...)
  Sprint scope:     N core, N optional
  Sprint goal:      [one sentence]
```

---

## Decision rules

| Situation | Behaviour |
|---|---|
| User provides a sprint goal directly | Route to D (Planning) using the provided goal — skip the phase selection question |
| User says "retro" without context | Ask: "Do you have a deviation table from the review, or should I run the review first?" |
| User says "Start" | Route to D (Planning) — "Start" signals readiness to begin sprint work |

---

## Acceptance criteria

- [ ] Phase selection is explicit — not inferred silently
- [ ] The correct sub-prompt is executed based on the selection
- [ ] Sub-prompt checkpoints are not bypassed
- [ ] Full cycle summary output (if choice A)

---

## Output

```
Delegates to sub-prompts — see each sub-prompt's Output section.
Chat output — routing confirmation + summary (full cycle only)
```
