# OIA · Sprint Planning

**Prompt type:** Execution (interactive — contains two explicit checkpoints)
**Domain:** DEV

> Establishes the scope for the next sprint: a list of issues that supports a clearly defined sprint goal. Run after `sprint-retro.md` (or independently when starting a new sprint).

---

## Context

- `sprints/` — sprint notes files; sprint goal from the human is the primary input
- GitHub Issues — open backlog
- `CONVENTIONS.md` §Git Workflow — issue sizing conventions (XS/S/M/L)

---

## Goal

An agreed sprint scope exists: sprint goal, core issues, optional issues, and a handshake to start.

---

## Constraints

- Creates no new issues before Checkpoint 1
- Proposes no issues not connected to the sprint goal
- Does not finalize scope without explicit human confirmation
- **Waits after each checkpoint** — does not proceed autonomously

---

## Steps

### C-0 — Pre-sprint sync gate

Before any planning begins, verify the repository is in a clean, fully-pushed state:

```bash
git status
git log origin/main..HEAD --oneline
```

If **either** check shows uncommitted changes or unpushed commits:

> **STOP — repository not in sync.**
> Please commit and push all pending work to `main` before starting a new sprint.
> Return here once `git status` is clean and `git log origin/main..HEAD` is empty.

Do not proceed to C-1 until the sync gate passes.

---

### C-1 — Capture the sprint goal

The sprint goal is provided as free text together with the prompt.

If none was provided:
> **STOP — input missing.** Please provide the sprint goal: "What should be achieved by the end of the next sprint?"

Paraphrase in one sentence and confirm:
> "I understand the sprint goal as: **[paraphrase]**. Correct?"

If corrected: update and continue.

---

### C-2 — Scan open issues

```bash
gh issue list --state open --limit 100
```

Assign each issue to:

| Bucket | Criterion |
|---|---|
| 🎯 **Direct** | Directly supports the sprint goal |
| 🔗 **Indirect** | Prerequisite for a direct issue, or a sensible addition |
| ⬜ **Not relevant** | No recognizable connection |

Show only 🎯 and 🔗 with one sentence of justification each.

---

### C-3 — Scope proposal + gap analysis

Present 🎯 as core scope, 🔗 as optional. Size per issue:

| Size | Guideline |
|---|---|
| XS | < 15 minutes |
| S | 15–45 minutes |
| M | 45 min – 2 hours |
| L | half a day — splitting recommended |

**Gap analysis:** Are issues missing that would support the goal but don't exist yet? Per gap: one sentence + recommendation (create or not).

---

### ⏸ CHECKPOINT 1 — Scope feedback

> **STOP. Wait for chat reply.**

Ask:
1. Is the scope right (too much / too little / fits)?
2. Should gap issues be created — which ones?
3. Should any issues be removed?

---

### C-4 — Finalize scope

Execute what was confirmed at Checkpoint 1. Create approved gap issues:

```bash
gh issue create \
  --title "<type>(<scope>): <description>" \
  --label "<domain>" \
  --body "<Context + Acceptance criteria>"
```

Output the final scope:

```
Sprint scope — [DATE]
Goal: [sprint goal]

🎯 Core:
  #N  [Title]  [Size]

🔗 Optional:
  #N  [Title]  [Size]
```

---

### C-5 — Create sprint file

Create `sprints/YYYY-MM-DD.md` with the sprint goal, DoD, and issue list.

**Sprint naming rule:** The sprint name is the date of today's planning session — not a future date from planning notes or a previous meeting. Use `date +%Y-%m-%d` to confirm today's date if unsure.

**Duplicate file handling:** If `sprints/YYYY-MM-DD.md` already exists, append a two-digit counter suffix starting at `00`: `YYYY-MM-DD-00.md`, `YYYY-MM-DD-01.md`, etc. Check with `ls sprints/YYYY-MM-DD*.md` before creating.

**Language:** Sprint file content must be in English — per ODR-0004. Goal, DoD, section headers, and notes are all English.

---

### ⏸ CHECKPOINT 2 — Handshake

> **STOP. Wait for chat reply.**

> "Scope is set. Ready to start? — Reply with **'Start'** or give final corrections."

After confirmation:
> "Sprint started. Run `sprint-review.md` at the end."

---

## Decision rules

| Situation | Behaviour |
|---|---|
| No sprint goal provided | STOP — request input |
| Scope > 7 direct issues | Note: "Possibly too large — prioritizing to 5 core issues recommended" |
| Scope = 0 direct issues | Note: "No matching issues — gap analysis shows needed new issues" |
| L issue in scope | Warning: "Issue #N is L — splitting before sprint start recommended" |

---

## Acceptance criteria

- [ ] Sync gate passed: working tree clean, no unpushed commits
- [ ] Sprint goal paraphrased and confirmed
- [ ] Open issues scanned and bucketed
- [ ] Scope proposal with sizes output
- [ ] Gap analysis performed
- [ ] Checkpoint 1: feedback gathered and applied
- [ ] Checkpoint 2: handshake completed
- [ ] Sprint file created at `sprints/YYYY-MM-DD.md`
- [ ] Final scope output in writing

---

## Output

```
sprints/YYYY-MM-DD.md — created
GitHub Issues — new issues if gap analysis confirmed (variable count)
Chat output — final sprint scope
```
