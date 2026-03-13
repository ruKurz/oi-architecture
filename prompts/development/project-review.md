# OIA · Project Review

**Prompt type:** Execution
**Domain:** DEV

---

## Kontext

Read before execution:
- `CONVENTIONS.md` — binding rules
- `CLAUDE.md` — scope rules (BIZ/DEV)
- `decisions/README.md` — all active ADRs (loaded dynamically in Step 0)

Project root: current working directory.

---

## Ziel

All new findings (convention violations, ADR breaches, structural problems) are created as GitHub Issues — without duplicates, without implementation.

---

## Constraints

- **Implements nothing** — analysis and issue creation only
- **Changes no source files**
- **Creates no issue without prior duplicate check**
- **Does not evaluate BIZ content** (OIA layer structure, model IDs, architecture terminology)
- **Does not touch** `node_modules`, `.git`, `dist`, `build`
- **No vague issues** ("improve code") — every issue needs a concrete action

---

## Schritte

### Step 0 — Discovery

Determine autonomously:

1. **Project structure**: all files and folders in root (one level deep).
2. **Source directory** (`src/`, `lib/`, etc.), **test directory**, **style directory**, **CI/CD configuration**.
3. **ADR directory**: scan `decisions/` for all `*.md` files except `README.md`. For each ADR: read the `**Decision:**` and `**Type:**` lines — these define what is checked.
4. **Open GitHub Issues**: load the current issue list (`gh issue list --state open --limit 100`). Store titles and numbers internally — used for duplicate checking in Step 3.

Briefly show the detected structure and found ADRs (3–7 lines) before starting the analysis.

---

### Step 1 — Analysis: 7 dimensions

For every finding: name it concretely (file + line where possible), note the priority.

#### Dimension 1 · Project structure & folder organisation
- Files in root that belong in a subdirectory?
- Duplicate files with similar names in different locations?
- Folder names inconsistent (mixed languages)?
- Archive/draft areas clearly separated from active content?
- Files referenced nowhere (orphaned)?

#### Dimension 2 · Data model & type system
- Primary model file (JSON/YAML/schema): IDs consistent? Mandatory fields complete?
- TypeScript types: `any` types without comment? Type casts without justification?
- Fields in the model not reflected in the type system (or vice versa)?

#### Dimension 3 · Source code & architecture
- Files > 150 lines → split candidates?
- Identical/similar code blocks (DRY violations)?
- Hardcoded values that should come from the data model?
- Unused exports, imports, or dead code paths?

#### Dimension 4 · Styling
- Magic numbers (colours, sizes) that should be design tokens?
- CSS classes not used in HTML/JS code?
- Inline styles for recurring values (instead of CSS variables)?

#### Dimension 5 · Tests
- Source files without a corresponding test file?
- Critical user flows (routing, navigation, interaction) without test coverage?
- Tests checking implementation details rather than behaviour?

#### Dimension 6 · Tooling & automation
- Missing scripts (lint, format, typecheck, audit)?
- CI/CD: does it cover build, test, and deploy? Manual steps that could be automated?
- Dev-dependencies clearly separated from prod-dependencies?

#### Dimension 7 · Documentation & prompts
- README.md up to date (reflects current project structure)?
- Prompts missing the 4 required sections (`## Kontext`, `## Ziel`, `## Constraints`, `## Akzeptanzkriterien`)?
- Prompts with hardcoded paths that may be outdated?
- Documentation that no longer matches the code?

---

### Step 1b — ADR compliance check

For each ADR found in Step 0:

1. Read the complete ADR.
2. Derive: **which concrete properties must the project fulfil?**
   - Example ADR-0001 (language): all TS variables/functions must be English → scan source code for German identifiers.
   - Example ADR-0002 (BIZ/DEV): no commit may touch both domains → check git log for mixed commits.
   - Example ADR-0005 (commits): footer must contain `Closes #N` or `Refs #N` → check last 10 commits.
   - Example ADR-0006 (prompt helper): all `prompts/**/*.md` must have 4 required sections → check all prompt files.
3. Record violations as findings (with file + line).

---

### Step 2 — Prioritise

Assign each finding:
- 🔴 Blocker or inconsistency that produces downstream errors
- 🟡 Improvement with clear medium-term benefit
- 🟢 Nice-to-have, long-term or optional

---

### Step 3 — Duplicate check & issue creation

For each finding from Step 1 + 1b:

#### 3.1 Duplicate check
Compare the finding against the issue list loaded in Step 0:
- Search for overlaps in **title** and **affected file/component**.
- Clear overlap: **skip**, note as "already open: #N" in the summary.
- Uncertain: create the issue with a note "possibly related to #N".

#### 3.2 Create the issue

For new findings without a duplicate:

```bash
gh issue create \
  --title "<type>(<scope>): <imperative description>" \
  --label "<domain:dev|domain:biz>,<category>" \
  --body "<Context + Action + Acceptance criteria>"
```

Issue body format:
```markdown
## Context
[File(s) + specific observation + why it is a problem]

## Action
[What exactly needs to be done — specific enough that someone without context can start]

## Acceptance criteria
- [ ] [Measurable criterion]
- [ ] All tests still green (if DEV)
```

Labels: use `domain:dev` or `domain:biz` + at least one category label (`renderer`, `model`, `infra`, `ux`, `prompt`, `architecture`, `content`).

#### 3.3 Too small for an issue?
If a finding is smaller than S (under 30 minutes, trivial): add it to `context/todo.md` under the appropriate section instead of creating an issue.

---

### Step 4 — Output summary

Show after completion:
- Number of new issues created (with numbers)
- Number skipped (duplicates, with issue numbers)
- Number added to `context/todo.md` (too small for an issue)
- Which dimension / ADR produced the most findings?
- Recommended first step and why

---

## Entscheidungsregeln

| Situation | Behaviour |
|---|---|
| Finding is unclear or could be intentional | Create as 🟢 issue with "Investigate whether..." in the title |
| Two findings describe the same problem | Merge into one issue |
| Open GitHub Issue already covers the finding | Skip — note in summary |
| File or folder not found | Note in summary as "not checked: [what]" |
| More than 5 findings in one dimension | Select top 5 by impact |
| BIZ content affected (model IDs, layer names) | Do not create issue — BIZ decision, out of scope |
| `gh` CLI not available | Add findings to `context/todo.md` as fallback |

---

## Akzeptanzkriterien

- [ ] Step 0 executed: discovery + ADR list + open issues loaded
- [ ] All 7 dimensions + all found ADRs checked
- [ ] No issue created without prior duplicate check
- [ ] Every new issue has: title in Conventional Commits format, at least 2 labels, concrete body
- [ ] Nothing was implemented
- [ ] Summary with recommended first step was output

---

## Output

```
GitHub Issues — new issues created (numbers in summary)
context/todo.md — optional: new entries for trivial findings (< 30 min)
```
