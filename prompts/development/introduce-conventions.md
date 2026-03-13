# OIA · Introduce Project Conventions

**Prompt type:** Execution
**Domain:** DEV — Technical Infrastructure

---

## Kontext

Read before execution:
- `context/oia-context.md` — project overview, terminology
- `context/todo.md` — current task state

Scan the existing structure:
- Project root: all files at the top level
- `oia-site/` — Vite/TypeScript app
- `prompts/`, `context/`, `articles/`, `decisions/` (if present)

---

## Ziel

At the end, a `CONVENTIONS.md` exists in the project root that defines all project conventions as binding rules. Conventions apply immediately to new files — existing files are not retroactively adjusted.

---

## Constraints

- **Do not touch BIZ content**: diagram content, OIA model IDs, layer naming, and architecture terminology are BIZ decisions and are not defined in `CONVENTIONS.md`
- **No renaming of existing files** as part of this prompt — conventions apply to new files
- **No refactoring of existing code** — only documentation, todo format, and git template
- The document is written as a "Decision Log for Future Me" — not as a contributor onboarding guide

---

## Inputs

- `context/todo.md` — header updated (GitHub Issues note)
- `README.md` — conventions section added
- `context/oia-context.md` — terminology reference (do not change)
- Convention content: fully defined in Step 2 of this prompt

---

## Schritte

### Step 1 — Create `decisions/` folder

Create `decisions/` in the project root with:
- `decisions/README.md` — ADR index and template
- `decisions/0001-language-and-naming-conventions.md` — first ADR (this convention documented as a decision)

ADR template (Müller/Dienst format — Decision first, Alternatives mandatory):
```markdown
# ADR-NNNN: Noun-phrase title

**Decision:** One or two sentences, active voice. What was decided.
**Status:** Proposed | Accepted | Deprecated | Superseded by ADR-XXXX
**Date:** YYYY-MM-DD
**Type:** DEV | BIZ | BOTH

## Context

Facts that influenced the decision. Neutral language — no judgement yet.
Quality attribute affected (e.g. maintainability, portability, security).

## Consequences

**Easier:** What becomes simpler as a result.
**Harder:** What becomes more difficult or requires more discipline.
**Required adjustments:** What else must change to make this decision work.

## Alternatives

| Option | Reason rejected |
|---|---|
| Alternative A | Why not chosen |
| Alternative B | Why not chosen |
```

---

### Step 2 — Create `CONVENTIONS.md` in the project root

Document structure (all sections are mandatory):

#### 2.1 BIZ / DEV Separation (primary rule)

Define two domains:

| Domain | Meaning | Commit types | Folders |
|---|---|---|---|
| **DEV** | Technical implementation: Renderer, Tooling, Tests, Build, CI | `feat:` `fix:` `chore:` `refactor:` `test:` `style:` | `oia-site/` `.github/` `prompts/` |
| **BIZ** | Domain content: OIA model, articles, diagram content, architecture decisions | `content:` `docs:` | `context/` `articles/` `diagrams/` `decisions/` `notes/` |

Rule: **A single commit touches either BIZ or DEV — never both.** If both are needed: two separate commits.

Rule: **No commit without a referenced GitHub Issue** (except: `chore: initial setup` for new files).

---

#### 2.2 Language

**Rule:** All project artifacts are written in English. The only exception is LinkedIn articles, which remain in German for a German-speaking audience.

| Context | Language | Examples |
|---|---|---|
| Code, comments, commits, filenames | English | `renderLayerAsHtml()`, `feat: add zoom constants` |
| Types, interfaces, JSON keys | English | `ContentItem`, `itemType`, `containerType` |
| ADRs | English | `ADR-0001: Language and Naming Conventions` |
| Prompts | English | `prompts/development/integrate-concept.md` |
| Context files, notes, documentation | English | `context/oia-context.md`, `docs/` |
| LinkedIn articles | German | Author's choice for German-speaking audience |

Existing German files are known exceptions — not retroactively translated; follow English on creation or next significant edit.

See [ADR-0011](decisions/0011-english-as-project-language.md) for rationale.

---

#### 2.3 Conventional Commits

Format:
```
<type>[optional scope]: <imperative description>

[optional body, wrapped at 72 chars]

Closes #N   ← closes the GitHub Issue
Refs #N     ← references without closing (for partial work)
```

Allowed types:

| Type | Usage |
|---|---|
| `feat` | New feature in renderer or tooling |
| `fix` | Bug fix |
| `content` | New OIA content, article, model addition (BIZ) |
| `docs` | Documentation, ADRs, CONVENTIONS.md |
| `refactor` | Code restructuring without behaviour change |
| `test` | Tests added or adjusted |
| `chore` | Build, CI/CD, dependencies, tooling |
| `style` | Formatting (no logic change) |

Scopes (optional, in parentheses):
```
feat(renderer): add outcome layer rendering
content(model): add business outcome items to L10
chore(ci): add npm audit to deploy pipeline
```

Rules:
- Imperative: "add" not "added", "fix" not "fixes"
- Max. 50 characters for the subject line
- No trailing period
- GitHub Issue in footer — always (except initial commits)

---

#### 2.4 Issue tracking

**Official tasks → GitHub Issues** (https://github.com/<owner>/oi-architecture/issues)

`context/todo.md` remains a **session parking lot** — things that come up during work and are not yet prioritised. Before starting work: convert open parking lot entries to GitHub Issues or consciously discard them.

Parking lot entry format (in `context/todo.md`):
```
**[2026-MM-DD] [ACTION] `#category` [S|M|L]** (DEV|BIZ)
→ Affected path: description
→ Action: what specifically needs to be done
```

Categories: `model` · `renderer` · `prompt` · `architecture` · `infra` · `ux` · `content`

---

#### 2.5 TypeScript naming

| Element | Convention | Example |
|---|---|---|
| Variables | camelCase, semantically complete | `currentZoomValue`, `diagramWrapperElement` |
| Functions | camelCase, verb first, semantically complete | `renderLayerAsHtml()`, `findElementById()`, `resolveChildrenForContainer()` |
| Booleans | `is`/`has` prefix | `isHighlighted`, `hasChildren`, `isDetailView` |
| Event handlers | `on`/`handle` prefix | `onHashChange`, `handleZoomInput` |
| Types/Interfaces | PascalCase, no `I`/`T` prefix | `OIAModel`, `ContentItem`, `LayerContainer` |
| Enums (name) | PascalCase | `ContainerType` |
| Enum values | SCREAMING_SNAKE_CASE | `SITUATION_LAYER`, `DATA_SOURCE` |
| Module-level constants | SCREAMING_SNAKE_CASE | `DEFAULT_ZOOM`, `ZOOM_LEVELS` |
| No type info in names | | `userString` ❌ → `userName` ✓ |
| No abbreviations | | `el` ❌ → `element` ✓, `btn` ❌ → `button` ✓ |

---

#### 2.6 File and folder naming

| Type | Convention | Example |
|---|---|---|
| TypeScript modules | kebab-case | `render-layer.ts`, `oia-model.json` |
| Test files | `<name>.spec.ts` | `render-layer.spec.ts` |
| Directories | kebab-case, English | `src/renderer/`, `src/data/` |
| Markdown content | kebab-case, English | `naming-conventions.md` |
| Prompts | kebab-case, English | `introduce-conventions.md` |

---

#### 2.7 CSS classes

kebab-case, BEM-lite (Block--Element only when the hierarchy is semantically meaningful):

```css
.detail-view          /* Block */
.detail-view__title   /* Element (only when hierarchy is semantically relevant) */
.zoom-controls        /* simple block */
.layer-core           /* modifier built into the block name */
```

No inline styles for recurring values — always use a CSS variable or class.

---

#### 2.8 JSON data model (DEV structure)

Keys: camelCase (JavaScript idiomatic):
```json
{ "itemType": "outcome", "containerType": "layer", "isHighlighted": true }
```

IDs: existing `#L1`–`#L10` are not changed. Schema for new items: BIZ context decides.

---

#### 2.9 Tests

```typescript
describe('<FunctionName>', () => {
  test('<verb> + <expected result>', ...)
  // Examples:
  test('returns element with class detail-view', ...)
  test('shows not-found message for unknown id', ...)
  test('renders badge icons on tagged layers', ...)
})
```

---

### Step 3 — Update `context/todo.md`

Read `context/todo.md`. Add the new format standard to the header (see §2.4):
- Replace the numbering guide with the GitHub Issues note
- Add a note at the top: "Parking Lot — convert open entries to GitHub Issues before starting work"
- Existing entries remain unchanged (no numbering needed — they migrate to the tracker as issues)

---

### Step 4 — Create git commit message template

Create `.gitmessage` in the project root:

```
# <type>[scope]: <imperative description> (max 50 chars)
# Types: feat fix content docs refactor test chore style
# Scopes (optional): renderer model ci infra ux content

# Body (optional, wrap at 72 chars):


# Footer — REQUIRED (except initial commits):
Closes #N
# or: Refs #N  (if issue stays open after this commit)
```

Activate the template for the repository:
```bash
git config commit.template .gitmessage
```

> ⚠️ **Irreversible at system level:** This command writes to the local `.git/config`. Undo with: `git config --unset commit.template`

---

### Step 5 — Update `README.md`

Add a short note in the "Contributing" section (create it if not present):
```markdown
## Conventions
See [CONVENTIONS.md](./CONVENTIONS.md) for naming, commit, and BIZ/DEV separation rules.
Architecture decisions are documented in [decisions/](./decisions/).
```

---

## Entscheidungsregeln

- If a convention conflicts with an existing code state → document in `CONVENTIONS.md` under "Known Exceptions", do not fix immediately
- If BIZ vs. DEV is unclear → BIZ doubt applies: do not include in a DEV commit
- If a parking lot entry is too small for a GitHub Issue → keep in `context/todo.md`, no issue needed

---

## Akzeptanzkriterien

- [ ] `CONVENTIONS.md` exists in the project root and is readable without prior context
- [ ] `decisions/README.md` and `decisions/0001-...md` exist
- [ ] `context/todo.md` has the GitHub Issues note in the header
- [ ] `.gitmessage` exists, `git config commit.template` is set
- [ ] `README.md` references `CONVENTIONS.md` and `decisions/`
- [ ] No existing code was changed

---

## Output

| File | Action |
|---|---|
| `CONVENTIONS.md` | created |
| `decisions/README.md` | created |
| `decisions/0001-language-and-naming-conventions.md` | created |
| `context/todo.md` | changed (header: GitHub Issues note) |
| `.gitmessage` | created |
| `README.md` | changed (conventions section) |
