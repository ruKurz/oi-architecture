---
name: oia-issue-implementieren
description: >-
  Implement a GitHub Issue from the oi-architecture tracker.
  Use when given an issue number or URL to implement.
  Covers BIZ and DEV tasks, branch workflow, commit conventions,
  and PR creation per project rules.
  Trigger explicitly with: "use skill oia-issue-implementieren for #N"
  or implicitly when asked to implement a specific issue number.
---

# oia-issue-implementieren

Workflow for implementing a GitHub Issue in the oi-architecture project.
Execute the following steps in order.

---

## 1. Pre-flight

1. Read the issue: `gh issue view #N`
2. Identify domain: **BIZ** or **DEV** — see `references/CONVENTIONS.md` §2.1
   - BIZ: `context/` `articles/` `diagrams/` `decisions/` `.local/notes/`
   - DEV: `oia-site/` `.github/` `prompts/` + root files
3. Check for blocked-by dependencies in the issue body. Stop and notify
   the human if a blocking issue is not yet resolved.
4. Confirm current branch: `git branch --show-current`
   Switch to `main` and pull before branching.

---

## 2. Branch

```
git checkout main && git pull
git checkout -b feature/#N-short-description
```

Branch prefix rules (from ADR-0014):
- `feature/#N-` — new functionality
- `fix/#N-` — bug fix
- `chore/#N-` — maintenance, dependency updates
- `docs/#N-` — documentation only
- `content/#N-` — BIZ content changes

---

## 3. Implement

- **YAGNI:** implement only what the Acceptance Criteria require.
- **BIZ/DEV boundary:** a single commit touches either BIZ or DEV — never both.
  If both are needed: two separate commits.
- **Never** touch BIZ artifacts (`context/`, `decisions/`, `diagrams/`) during a DEV task.
- **Prompts:** any change to `prompts/` requires the prompt-helper process
  (see CLAUDE.md §No Prompt Without Helper). Refuse and redirect if skipped.

Check `references/decisions-README.md` if an ADR or ODR is relevant to the
change — do not contradict an Accepted record without a superseding record.

---

## 4. Commit

Format: `type(scope): description (#N)`

```
git add <specific files>
git commit -m "$(cat <<'EOF'
type(scope): short description (#N)

Longer explanation if needed.

Closes #N
EOF
)"
```

- Subject line ≤ 72 characters
- Footer: `Closes #N` (if the commit fully resolves the issue)
  or `Refs #N` (partial progress)
- Commit type must match domain: BIZ → `content:` / `docs:`, DEV → `feat:` / `fix:` / `chore:` etc.
- Full type list and scope examples: `references/CONVENTIONS.md` §2.3

---

## 5. PR

1. Push the branch (notify human in chat first — per project push rules):
   ```
   git push -u origin feature/#N-short-description
   ```
2. Open PR:
   ```
   gh pr create --title "type(scope): description (#N)" --body "..."
   ```
3. Summarize the PR in chat and **wait for human approval** before merging.
   Never merge to `main` directly.
