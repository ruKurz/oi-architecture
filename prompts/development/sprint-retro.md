# OIA · Sprint Retrospective

**Prompt type:** Execution (interactive — contains an explicit checkpoint)
**Domain:** DEV

> Analyzes what did not go well in the sprint — from both the issue history and the chat/collaboration experience — and derives at most 3 improvement measures. Run after `sprint-review.md`. Requires the deviation table from the review.

---

## Context

- Deviation table from `sprint-review.md` (passed in as input or retrieved from the review session)
- `decisions/arch/0003-github-issues-as-task-tracker.md` — issue format and close conventions
- Chat history of the sprint session (agent evaluates it as part of B-0)

---

## Goal

At most 3 improvement measures are agreed between agent and human, and exist as a single GitHub Issue.

---

## Constraints

- Only run if the review produced deviations (⚠️ or ❌) OR the agent identifies qualitative issues in B-0
- Combines all measures in a single issue — not separate issues
- Does not create a retro issue without checking for duplicates first
- **Does not skip the interactive checkpoint** — the agent must wait for the human's observations before deriving measures

---

## Steps

### B-0 — Chat history analysis

Before looking at issue deviations: analyze the sprint's chat/collaboration history.

Identify and briefly note (1 sentence each):
- **Communicative detours** — repeated back-and-forth, clarifications that should have been clear upfront
- **Scope changes** — moments where the plan changed mid-sprint and why
- **Process bypasses** — established prompts or rules not followed (e.g. integrate-concept.md skipped)
- **Revisions** — outputs that had to be redone, and what triggered the rework

Output a short "Chat observations" list (max 5 items). If nothing notable: "No significant chat observations."

---

### B-1 — Issue deviation analysis

Use the deviation table from the review. For each ⚠️ or ❌:
- Brief root cause hypothesis (one sentence)
- Category: AC too vague | scope creep | missing commit footer | issue too large | no review | other

---

### ⏸ CHECKPOINT — Human observations

> **STOP. Output the combined analysis (B-0 + B-1) to the user. Then ask:**

"These are my observations from the sprint. What did you notice? What felt wrong, slow, or avoidable — from your side?"

**Wait for the human's reply before continuing.**

---

### B-2 — Combine and prioritize measures

Merge the agent's analysis (B-0 + B-1) with the human's observations. Identify overlaps and unique points.

Evaluate each candidate measure by: **benefit · effort · sustainability**.

Select **at most 3 measures**. For each: one concrete, actionable statement (max 2 sentences).

---

### B-3 — Duplicate check

```bash
gh issue list --state open --limit 100
```

Skip any measure that already exists as an open issue.

---

### B-4 — Create retro issue

```bash
gh issue create \
  --title "chore(process): sprint retro improvements — <DATE>" \
  --label "domain:dev" \
  --body "<body>"
```

Body format:
```markdown
## Context
Sprint retro <DATE>. Review produced N deviations. Chat analysis identified M observations.

## Chat observations
- [observation 1]

## Issue deviations
- #N: [description]

## Root causes
- [cause] → [affected issues/observations]

## Measures (max 3, prioritized)

### 1. [Measure title]
[Concrete implementation, max 2 sentences. Where it will be anchored: CONVENTIONS.md / prompt / ADR / CLAUDE.md]

### 2. [Measure title]
[...]

### 3. [Measure title]
[...]

## Acceptance criteria
- [ ] Measure 1 implemented and anchored
- [ ] Measure 2 implemented
- [ ] Measure 3 implemented
```

---

## Decision rules

| Situation | Behaviour |
|---|---|
| No deviations AND no chat observations | Skip — output: "No issues found. Retro skipped." |
| Deviation is trivial | Note as observation in the issue; no separate measure |
| Fewer than 3 improvements needed | Use 1–2 measures; adjust title |
| Human and agent observations conflict | Note both; let the human decide which takes priority |

---

## Acceptance criteria

- [ ] Chat history analyzed (B-0) before issue deviations
- [ ] Combined analysis presented to human before measures are derived
- [ ] Human observations collected at the checkpoint
- [ ] Retro issue created (if issues found) or absence explicitly confirmed
- [ ] Retro issue contains max 3 measures

---

## Output

```
Chat output — combined analysis (B-0 + B-1)
Chat output — measure proposals
GitHub Issue — 1 retro issue (if issues found)
```
