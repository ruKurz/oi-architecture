# OIA · Session Initialization

**Prompt type:** Execution (autonomous — no checkpoints, read-only)
**Domain:** DEV

> Optional session warm-up. Run at the start of a working session to load and
> verify the full binding project context. Does not replace CLAUDE.md — enforces it.
>
> No files are modified. No git operations are performed.

---

## Context

- `CLAUDE.md` — agent instructions and scope rules
- `context/oia-context.md` — stable project anchor and terminology
- `CONVENTIONS.md` — binding rules for commits, naming, BIZ/DEV separation
- `context/semantic-anchors.md` — active vocabulary layer
- `decisions/README.md` — ADR/ODR index
- `decisions/adr/*.md` — Architecture Decision Records (all Accepted + Proposed)
- `decisions/odr/*.md` — Organizational Decision Records (all)
- `.local/sprints/` — sprint files (local only, gitignored)

---

## Goal

The agent has read and internalized the full binding project context and reports a
structured session brief — before any work begins.

---

## Constraints

- Does not modify any file
- Does not create issues, commits, or branches
- Does not replace or skip reading CLAUDE.md
- Does not summarize ADRs from the index only — must read the actual files

---

## Steps

### S-1 — Load binding agent instructions

Read in order:
1. `CLAUDE.md`
2. `context/oia-context.md`
3. `CONVENTIONS.md`
4. `context/semantic-anchors.md`

### S-2 — Load all active decisions

Read `decisions/README.md` to get the full ADR and ODR index.

Then read **every file** listed in:
- `decisions/adr/` — all ADRs with status `Accepted` or `Proposed`
- `decisions/odr/` — all ODRs (all statuses)

Skip only: `_obsolete/`, `README.md`, template files (`adr-template.md`, `odr-template.md`).

### S-3 — Detect active sprint

List `.local/sprints/` and identify the most recent file (by filename date).
Read it and extract: sprint goal, issue list, DoD.

If no sprint file exists: note "No active sprint found" and continue.

### S-4 — Check branch sync

```bash
git status
git log origin/main..HEAD --oneline
```

Report: clean / dirty / N commits ahead of origin.

### S-5 — Check open sprint issues

```bash
gh issue list --state open --limit 50
```

Cross-reference with sprint issue list. Report which sprint issues are still open.

### S-6 — Flag blockers

From the sprint file and open issues: identify items marked as blocked or deferred.
List them, or report "none".

### S-7 — Output session brief

Print a structured brief:

```
Session brief — [DATE]

Context loaded:
  ✓ CLAUDE.md, oia-context.md, CONVENTIONS.md, semantic-anchors.md
  ✓ [N] ADRs read (Accepted: X, Proposed: Y)
  ✓ [N] ODRs read

Sprint: [goal] | Issues open: #N, #N, ...
Branch: [clean | N commits ahead | dirty]
Blockers: [list or "none"]

Ready.
```

---

## Decision rules

| Situation | Behaviour |
|---|---|
| ADR/ODR file unreadable | Note filename, continue loading others |
| No sprint file found | Note "No active sprint" — do not block |
| Branch is dirty or ahead | Report in brief — do not auto-fix |
| Session domain unclear | Load all ADRs regardless of type |

---

## Acceptance criteria

- [ ] CLAUDE.md, oia-context.md, CONVENTIONS.md, semantic-anchors.md read
- [ ] All Accepted + Proposed ADR files read (not index only)
- [ ] All ODR files read
- [ ] Sprint state reported (or absent noted)
- [ ] Branch sync status reported
- [ ] Open sprint issues listed
- [ ] Blockers flagged or confirmed absent
- [ ] No files modified, no git operations performed

---

## Output

```
Chat output — session brief
No files created or changed
```
