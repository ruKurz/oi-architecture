# OIA · Create GitHub Issue

**Prompt type:** Execution
**Domain:** DEV | BIZ (depends on the issue)

---

## Context

Read before execution:
- `decisions/0003-github-issues-as-task-tracker.md` — binding format, labels, no-duplicate rule
- `CONVENTIONS.md` §2.1 — BIZ/DEV assignment for labels
- `CONVENTIONS.md` §2.3 — commit types as reference for issue titles

Active repository: determined via `git remote get-url origin` — not hardcoded.

---

## Goal

A new GitHub Issue exists that fully complies with ADR-0003: correct title, at least 2 labels, complete body (Context / Action / Acceptance criteria), no duplicate of an existing issue.

---

## Inputs

Provided informally by the user — as "kernels of truth":
- What is the problem / task? (1–3 sentences)
- Which file(s) are affected?
- DEV or BIZ?
- Category: `renderer` · `model` · `infra` · `ux` · `prompt` · `architecture` · `content`

If inputs are missing: ask before creating anything.

---

## Constraints

- **No issue without duplicate check** — load open issues first
- **No issue for BIZ content** (OIA model IDs, layer names) without explicit user confirmation
- **No vague title** — must follow Conventional Commits format
- **At least 2 labels** — domain + category
- **Do not implement** — the issue describes work that is still pending; do not execute anything

---

## Steps

### Step 1 — Duplicate check

```bash
gh issue list --state open --limit 100
```

Compare titles and affected files against the user input:
- Clear overlap → **abort**, name the existing issue number
- Uncertain → create the issue with a note `possibly related to #N` in the body

### Step 2 — Draft the title

Format: `<type>(<scope>): <imperative description>`

Allowed types: `feat` `fix` `content` `docs` `refactor` `test` `chore` `style`
Scopes (examples): `renderer` `model` `ci` `infra` `ux` `content` `decisions` `prompt`

Rules: imperative · max. 70 characters · no trailing period

### Step 3 — Determine labels

| Required | Values |
|---|---|
| Domain | `domain:dev` or `domain:biz` |
| Category | `renderer` · `model` · `infra` · `ux` · `prompt` · `architecture` · `content` |

### Step 4 — Write the body

```markdown
## Context
[File(s) + specific observation + why it is a problem]

## Action
[What exactly needs to be done — specific enough for someone without prior knowledge]

## Acceptance criteria
- [ ] [Measurable criterion]
- [ ] All tests still green (if DEV)
```

**On dependencies:** If an AC item can only be fulfilled after another issue is closed → use `blocked by #N` instead of a standalone criterion. Example: `- [ ] Labels deployed — blocked by #54`.

### Step 5 — Create the issue

```bash
gh issue create \
  --title "<title>" \
  --label "<domain>,<category>" \
  --body "<body>"
```

Output the created issue URL.

---

## Decision rules

| Situation | Behaviour |
|---|---|
| Duplicate found | Abort — name the existing issue number |
| BIZ/DEV unclear | Ask — do not guess |
| Category label missing | Ask — no issue without a category |
| `gh` not available | Add entry to `context/todo.md` as fallback, with a note |
| More than one problem in the input | One issue per problem — do not combine |
| AC item depends on another open issue | Mark as `blocked by #N` — not as a standalone criterion |

---

## Acceptance criteria

- [ ] Duplicate check was performed (result briefly noted)
- [ ] Title follows Conventional Commits format
- [ ] At least 2 labels set (domain + category)
- [ ] Body contains all 3 sections (Context, Action, Acceptance criteria)
- [ ] Issue URL was output
- [ ] Nothing was implemented

---

## Output

```
GitHub Issue — created (URL in output)
```
