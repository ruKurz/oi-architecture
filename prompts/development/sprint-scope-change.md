# OIA · Sprint Scope Change

**Prompt type:** Execution (interactive — one checkpoint)
**Domain:** DEV

> Handles mid-sprint scope adjustments: adding an issue to the current sprint, removing one, or splitting an in-progress issue. Run when the sprint scope changes after the planning handshake.

---

## Context

- `sprints/` — current sprint file (sprint goal, current scope)
- GitHub Issues — the issue being added, removed, or split
- `CONVENTIONS.md` §2.4 — issue sizing, AC quality

---

## Goal

The sprint scope is updated: the sprint file reflects the change, the affected issues are labeled or closed appropriately, and the sprint goal is assessed for impact.

---

## Constraints

- Does not implement the added issue — only adds it to scope
- Does not remove work that is already in progress without human confirmation
- Does not change the sprint goal unilaterally — notes the impact and asks

---

## Steps

### S-1 — Identify the change type

Ask if not provided:
> "What is the scope change? Options: (A) Add an issue, (B) Remove an issue, (C) Split an in-progress issue."

---

### S-2 — Assess sprint goal impact

Describe in one sentence how the change affects the sprint goal:
- **Add:** "This adds [X] to the scope. The sprint goal [is unchanged / is extended to include Y]."
- **Remove:** "Removing #N means [impact on goal]."
- **Split:** "Splitting #N creates [N sub-issues]. The original issue will be [closed / reduced in scope]."

---

### S-3 — Refine if needed (Add only)

For a newly added issue: run a quick refinement (expected result, risks, AC, size). If the issue is already well-defined, skip.

---

### ⏸ CHECKPOINT — Confirm change

> **STOP. Present:**
- Change type and affected issue(s)
- Sprint goal impact
- Required actions (sprint file update, new issues, labels)

Ask: "Confirm this scope change?"

**Wait for reply.**

---

### S-4 — Execute

On confirmation:

**Add:** Update sprint file; label issue with sprint label if used.

**Remove:** Update sprint file; add comment to removed issue explaining deferral:
```bash
gh issue comment <N> --body "Deferred from sprint [DATE]: [reason]. Will be reconsidered in the next sprint."
```

**Split:** Create sub-issues; close or update the original:
```bash
gh issue create --title "..." --body "..."
gh issue comment <N> --body "Split into #X and #Y. Original scope reduced to: [description]."
```

---

## Decision rules

| Situation | Behaviour |
|---|---|
| Added issue is L or larger | Recommend refinement first before adding |
| Removed issue is in progress | Warning: "This issue has an open branch/PR — confirm removal." |
| Sprint goal becomes invalid after change | Note: "The sprint goal may need to be updated." — present revised goal for confirmation |

---

## Acceptance criteria

- [ ] Change type identified (add / remove / split)
- [ ] Sprint goal impact assessed
- [ ] Checkpoint confirmed before changes applied
- [ ] Sprint file updated
- [ ] Affected issues updated (comments, new sub-issues, or labels)

---

## Output

```
sprints/YYYY-MM-DD.md — updated
GitHub Issues — comments or new issues (variable)
Chat output — change summary
```
