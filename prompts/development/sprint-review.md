# OIA · Sprint Review

**Prompt type:** Execution (runs through without interruption)
**Domain:** DEV

> Closes completed-but-open sprint issues and verifies acceptance criteria for all sprint issues. Run at the end of a sprint before the retro.

---

## Context

- `sprints/` — sprint notes files (gitignored); contains issue list and sprint goal
- `decisions/adr/0003-github-issues-as-task-tracker.md` — close-verification format
- `decisions/adr/0005-conventional-commits-with-content-type.md` — commit footer conventions
- GitHub CLI (`gh`) and `git` available

---

## Goal

All completed-but-open sprint issues are closed with AC verification. A deviation table is output for use in the retro.

---

## Constraints

- Implements nothing
- Changes no source files
- Closes no issue without a commit reference or explicitly confirmed implementation
- Does not evaluate BIZ content (OIA model layers, terminology)

---

## Steps

### 1 — Load sprint notes

```bash
ls -t sprints/*.md 2>/dev/null | head -1
```

Read the sprint file. Extract: sprint goal, Definition of Done, full issue list (`#N` entries).

**Fallback:** If no sprint file → warning, continue with step 2 using the last 30 commits.

---

### 2 — Find completed-but-open issues

```bash
git log --oneline -30
gh issue list --state open --limit 100
```

Scan commits for `Closes #N` / `Fixes #N` / `Refs #N`. For each referenced issue: is it still open? List candidates with commit hash + message as evidence. Close all confirmed cases:

```bash
gh issue close <N> --comment "Closed: implemented in commit <HASH> — <COMMIT_TITLE>

AC verified:
✅ Criterion A
✅ Criterion B
⚠️ Criterion C (post-deploy): deferred to after deployment"
```

Uncertain cases → comment on the issue: "Possibly done in \<HASH\> — please confirm."

---

### 3 — Acceptance review

For each sprint issue, load the full body:

```bash
gh issue view <N> --json state,title,body
```

Check each AC item against the repo (file exists? contains the element? config implemented?).

Classify:
- ✅ **Complete** — closed, all criteria met
- ⚠️ **Partial** — closed, at least one criterion missing or deferred (post-deploy)
- ❌ **Open** — not yet implemented

---

### 4 — Output deviation table

```
| Issue | Title | Status | Deviation |
|---|---|---|---|
| #N  | Title | ✅/⚠️/❌ | — or brief description |
```

This table is the input for `sprint-retro.md`.

---

## Decision rules

| Situation | Behaviour |
|---|---|
| Commit footer missing but implementation clear | Close + note about missing footer |
| Issue has no AC | Rate as ⚠️ — missing AC = not verifiable |
| `gh` CLI not available | Output results as markdown; do not close issues |
| Post-deploy AC item not yet verified | Mark ⚠️, note as post-deploy deferred — does not block close |

---

## Acceptance criteria

- [ ] Sprint notes loaded (or fallback justified)
- [ ] Completed-but-open sprint issues identified and closed with AC verification
- [ ] All sprint issues checked against their AC
- [ ] Deviation table output (even if empty: "No deviations found")

---

## Output

```
Chat output — deviation table
GitHub Issues — closed (variable count)
```
