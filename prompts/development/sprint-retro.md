# OIA · Sprint Review, Retro & Planning

**Prompt type:** Execution (interactive — contains explicit checkpoints)
**Domain:** DEV

> A complete sprint close in three phases: **Review** (what was actually done?), **Retro** (what did not go well, what do we improve?), **Planning** (what do we do next?). Run when the current sprint is to be closed.

---

## Kontext

Read before execution:
- `decisions/0003-github-issues-as-task-tracker.md` — binding issue format and close conventions
- `decisions/0005-conventional-commits-with-content-type.md` — `Closes #N` / `Refs #N` footer convention

Active repository: determined via `git remote get-url origin`.

---

---

# PHASE A — Review

> Runs fully through without interruption.

## Ziel (Phase A)

All completed-but-open sprint issues are closed. The acceptance criteria of all sprint issues have been checked against the repo. A deviation list is present.

## Constraints (Phase A)

- **Implements nothing**
- **Changes no source files**
- **Closes no issue without evidence** (commit reference or explicitly confirmed implementation)
- **Does not evaluate BIZ content** (OIA model layers, terminology)

---

## Schritte (Phase A)

### A-0 — Load sprint notes

Find the most recent sprint file:

```bash
ls -t sprints/*.md 2>/dev/null | head -1
```

Read the file. Extract:
1. **Sprint goal** — baseline for Phase C
2. **Definition of Done** — if present, used as the standard for Phase A-2
3. **Issue list** — all `#N` entries under "Core" and "Optional"

```bash
grep -oE '#[0-9]+' sprints/<FILENAME>.md
```

Store the issue numbers internally — they replace the "last 10 closed issues" in A-2.

**Fallback:** If no sprint file exists → output a brief warning, continue with A-1 (A-2 then uses the last 10 closed issues).

---

### A-1 — Issue hygiene: find completed-but-open issues

```bash
git log --oneline -30
gh issue list --state open --limit 100
```

1. Scan the last 30 commits for `Closes #N`, `Fixes #N`, `Refs #N` footers.
2. For each referenced issue number: is the issue still open?
3. Also check: are there open issues whose **title or scope** is clearly covered by a more recent commit — even without an explicit footer?
4. List all candidates with justification (commit hash + commit message as evidence).
5. Close all confirmed cases:

```bash
gh issue close <N> --comment "Closed: implemented in commit <HASH> — <COMMIT_TITLE>"
```

> **Decision rule:** Uncertain cases → do not close; instead add a comment to the issue: "Possibly done in <HASH> — please confirm."

---

### A-2 — Acceptance review: sprint issues

Use the issue list from A-0. Load the complete body for each issue number:

```bash
gh issue view <N> --json state,title,body
```

For each sprint issue:

1. Read the complete issue body (acceptance criteria).
2. Check **state**: still `open` → rate as ❌, unless currently in progress.
3. Check in the repo whether each acceptance criterion is actually met:
   - Does the named file exist?
   - Does it contain the described element?
   - Was a named command / label / configuration implemented?
4. Classify:
   - ✅ **Complete** — closed, all criteria met
   - ⚠️ **Partial** — closed, but at least one criterion missing or deviating
   - ❌ **Open** — not yet implemented or core statement missing

**Output:** Tabular list of all sprint issues with status + deviation description (max. 1 sentence).

---

## Entscheidungsregeln (Phase A)

| Situation | Behaviour |
|---|---|
| Commit footer missing but implementation clearly recognisable | Close issue + note about missing footer |
| Issue has no acceptance criteria | Rate as ⚠️ — missing AC = not verifiable |
| `gh` CLI not available | Output results as markdown, do not close issues |

---

## Akzeptanzkriterien (Phase A)

- [ ] Sprint notes loaded (or fallback justified)
- [ ] Completed-but-open sprint issues identified and closed (or justifiably not closed)
- [ ] All sprint issues checked against their AC
- [ ] Deviation list output (even if empty)

---

---

# PHASE B — Retro

> Runs fully through without interruption. Based on the deviation list from Phase A.

## Ziel (Phase B)

The 3 most impactful process improvements from the sprint exist as a single GitHub Issue.

## Constraints (Phase B)

- **Only run** if Phase A produced deviations (⚠️ or ❌)
- Combines the **3 measures** in a single issue — not 3 separate issues
- **Creates no issue without prior duplicate check**

---

## Schritte (Phase B)

### B-1 — Root cause analysis

For each deviation from Phase A: brief hypothesis. Categories:

| Category | Example |
|---|---|
| **Acceptance criteria too vague** | "File exists" instead of "File exists with sections X, Y, Z" |
| **Scope creep** | Issue partially done, rest forgotten |
| **No commit footer** | Issue not linked → gets forgotten |
| **Issue too large** | Multiple tasks in one issue → only part done |
| **No review** | No check after commit whether AC actually met |

### B-2 — Develop and prioritise measures

Maximum one concrete measure per root-cause category. Evaluate by: **benefit · effort · sustainability**. Choose the **3 best**.

### B-3 — Duplicate check

```bash
gh issue list --state open --limit 100
```

### B-4 — Create retro issue

```bash
gh issue create \
  --title "chore(process): implement sprint retro improvements (<DATE>)" \
  --label "domain:dev,infra" \
  --body "<Body>"
```

Body format:
```markdown
## Context
Sprint retro from <DATE>. Review of the last 10 issues produced <N> deviations.

## Findings (deviations)
- Issue #X: [description]

## Root causes
- [cause] → [affected issues]

## Action — 3 measures (prioritised)

### 1. [Measure]
[Concrete implementation, max. 2 sentences]

### 2. [Measure]
[Concrete implementation, max. 2 sentences]

### 3. [Measure]
[Concrete implementation, max. 2 sentences]

## Acceptance criteria
- [ ] Measure 1 implemented and anchored (CONVENTIONS.md / Prompt / ADR)
- [ ] Measure 2 implemented
- [ ] Measure 3 implemented
- [ ] Next sprint retro shows a reduction in deviation rate
```

---

## Entscheidungsregeln (Phase B)

| Situation | Behaviour |
|---|---|
| No deviations in Phase A | Skip Phase B — output a brief confirmation |
| Deviation is trivial | Note as observation in the issue, no separate measure |
| Fewer than 3 deviations | Only 1–2 measures, adjust title |
| More than 5 deviations | Top 5 by impact, rest as "further observations" |

---

## Akzeptanzkriterien (Phase B)

- [ ] Retro issue created (if deviations) or absence confirmed
- [ ] Retro issue contains max. 3 measures

---

---

# PHASE C — Sprint Planning

> Interactive — contains two explicit checkpoints that wait for a chat reply.

## Ziel (Phase C)

An agreed sprint scope exists: a list of issues that best support a sprint goal — neither too much nor too little — and a handshake to start.

## Constraints (Phase C)

- **Creates no new issues** before Checkpoint 1
- **Proposes no issues** that are not thematically connected to the sprint goal
- **Does not finalise scope** without explicit confirmation
- **Waits** after each checkpoint for a chat reply — does not proceed autonomously

---

## Schritte (Phase C)

### C-1 — Capture the sprint goal

The sprint goal is provided by the user as free text together with the prompt.

If none was provided:
> **STOP — input missing.** Please provide the sprint goal as free text: "What should be achieved by the end of the next sprint?"

Paraphrase the goal in one sentence:
> "I understand the sprint goal as: **[paraphrase]**. Correct?"

If corrected: update the sprint goal, then continue.

---

### C-2 — Issue scan: find thematically relevant issues

```bash
gh issue list --state open --limit 100
```

Assign each open issue to one of three buckets:

| Bucket | Criterion |
|---|---|
| 🎯 **Direct** | Issue directly supports the sprint goal |
| 🔗 **Indirect** | Prerequisite for a direct issue or a sensible addition |
| ⬜ **Not relevant** | No recognisable connection |

Show only 🎯 and 🔗 issues with one sentence of justification each.

---

### C-3 — Scope proposal + gap analysis

**Proposed sprint scope:**

Present 🎯 as core scope, 🔗 as optional. Size estimate per issue:

| Size | Guideline |
|---|---|
| S | < 30 minutes |
| M | 30 min – 2 hours |
| L | half a day |
| XL | multiple days → splitting recommended |

**Gap analysis:** Are there issues missing that would support the goal well but do not yet exist? Per gap: one sentence + recommendation (create or not).

---

### ⏸ CHECKPOINT 1 — Scope feedback

> **STOP — output to user. Wait for chat reply.**

Ask explicitly:
1. Is the scope right (too much / too little / fits)?
2. Should issues from the gap analysis be created — which ones?
3. Should issues be removed from the scope?

**Do not continue until a chat reply is received.**

---

### C-4 — Finalise scope

Execute what was confirmed in Checkpoint 1:

- Create new issues (if confirmed):

```bash
gh issue create \
  --title "<type>(<scope>): <description>" \
  --label "<domain>,<category>" \
  --body "<Context + Action + Acceptance criteria>"
```

Show the final scope:

```
Sprint scope — [DATE]
Goal: [sprint goal]

🎯 Core:
  #N  [Title]  [Size]

🔗 Optional (if time allows):
  #N  [Title]  [Size]

Total core: [sum]
```

---

### ⏸ CHECKPOINT 2 — Handshake

> **STOP — output to user. Wait for chat reply.**

> "Scope is set. Ready to start? — Reply with **'Start'** or give final corrections."

After confirmation:
> "Sprint started. Good luck. When closing the sprint: run this prompt again."

---

## Entscheidungsregeln (Phase C)

| Situation | Behaviour |
|---|---|
| No sprint goal | STOP — request input |
| Scope > 5 direct issues | Note: "Possibly too large — prioritising to 3–5 core issues recommended" |
| Scope = 0 direct issues | Note: "No matching issues — gap analysis shows needed new issues" |
| XL issue in scope | Warning: "Issue #N is XL — splitting before sprint start recommended" |
| User confirms without changes | Go directly to Checkpoint 2 |

---

## Akzeptanzkriterien (Phase C)

- [ ] Sprint goal paraphrased and confirmed
- [ ] All open issues scanned and evaluated
- [ ] Scope proposal with sizes output
- [ ] Gap analysis performed
- [ ] Checkpoint 1: feedback gathered and implemented
- [ ] Checkpoint 2: handshake completed
- [ ] Final scope output in writing

---

---

# Summary at end of full run

Show after Phase C:

```
Sprint close — [DATE]
Sprint notes:       sprints/[FILE] | no sprint (fallback)

Phase A (Review):
  Issues closed:    N  (#...)
  Issues reviewed:  N  (sprint issues)
  Status:           ✅ X  ⚠️ Y  ❌ Z
  Deviation rate:   X%

Phase B (Retro):
  Retro issue:      #N (URL) | not needed

Phase C (Planning):
  New issues:       N  (#...)
  Sprint scope:     N core issues, N optional
  Sprint goal:      [one sentence]
```

---

## Output

```
Phase A: GitHub Issues — closed (variable count)
Phase B: GitHub Issue — 1 retro issue (if deviations)
Phase C: GitHub Issues — new issues if any (gap analysis)
         Chat output — final sprint scope as list
```
