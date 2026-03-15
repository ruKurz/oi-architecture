---
name: oia-issue-implementieren
description: >-
  Implement a GitHub Issue from the oi-architecture tracker.
  Use when given an issue number or URL to implement.
  Covers BIZ and DEV tasks, branch workflow, commit conventions,
  and PR creation per project rules.
  Trigger: "use skill oia-issue-implementieren for #N"
  or when asked to implement a specific issue number.
---

# oia-issue-implementieren

Workflow for implementing a GitHub Issue in the oi-architecture project.
Execute the following steps in order.

---

## 1. Pre-flight

1. Read the issue: `gh issue view #N`
2. Identify domain — read `CONVENTIONS.md §2.1` if unclear:
   - **BIZ:** `context/` `articles/` `diagrams/` `decisions/` `.local/notes/`
   - **DEV:** `oia-site/` `.github/` `prompts/` + root files
3. Check for blocked-by dependencies in the issue body. If a blocking
   issue is not resolved: stop and notify the human.
4. Verify current branch: `git branch --show-current`
   Switch to `main` and pull before branching.

---

## 2. Branch

```
git checkout main && git pull
git checkout -b <type>/#N-short-description
```

Branch prefix by issue type — read `CONVENTIONS.md §Git Workflow` for
the full list: `feature/` · `fix/` · `docs/` · `chore/` · `content/`

---

## 3. Implement

- **YAGNI:** implement only what the Acceptance Criteria require.
- **BIZ/DEV boundary:** one commit touches either BIZ or DEV — never both.
  If both are needed: two separate commits.
- **Never** touch BIZ artifacts during a DEV task.
- **Prompts:** any change to `prompts/` requires the prompt-helper process
  — read `CLAUDE.md §No Prompt Without Helper` before proceeding.
- Check `decisions/README.md` if an ADR or ODR is relevant — do not
  contradict an Accepted or Proposed record without a superseding record.

---

## 4. Commit

Format — read `CONVENTIONS.md §2.3` for full rules:

```
type(scope): short description (#N)

Closes #N
```

- Subject ≤ 72 characters including `(#N)` suffix
- Imperative: "add" not "added"
- Footer: `Closes #N` if the commit fully resolves the issue,
  `Refs #N` for partial progress

---

## 5. PR

Summarize the planned push in chat and wait for human confirmation,
then:

```
git push -u origin <branch>
gh pr create --title "type(scope): description (#N)" --body "..."
```

Notify the human in chat when the PR is open.
**Never merge to `main` directly** — human approval via PR only.
