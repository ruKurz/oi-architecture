# OIA · Project Conventions

> Decision Log for Future Me — binding rules for all new files and commits.
> Existing files are not retroactively adjusted. New files follow these conventions immediately.

---

## 2.1 BIZ / DEV Separation

Two distinct domains. A commit touches exactly one.

| Domain | Meaning | Commit Types | Folders / Files |
|---|---|---|---|
| **DEV** | Technical implementation: Renderer, Tooling, Tests, Build, CI | `feat:` `fix:` `chore:` `refactor:` `test:` `style:` | `oia-site/` `.github/` `prompts/` + root files: `CLAUDE.md` `CONVENTIONS.md` `README.md` `CHANGELOG.md` `SECURITY.md` `CODE_OF_CONDUCT.md` `.gitmessage` |
| **BIZ** | Domain content: OIA model, articles, diagram content, architecture decisions | `content:` `docs:` | `context/` `articles/` `diagrams/` `decisions/` `notes/` |

**Rule:** A single commit touches either BIZ or DEV — never both. If both are needed: two separate commits.

**Root-file rule:** Root-level files (`CLAUDE.md`, `CONVENTIONS.md`, `README.md`, etc.) are DEV. A commit that updates `decisions/` (BIZ) must not also update `CLAUDE.md` or `README.md` — that requires a second DEV commit.

**Rule:** No commit without a referenced GitHub Issue (except: `chore: initial setup` for new files).

See [ADR-0002](decisions/arch/0002-biz-dev-separation.md) for rationale.

---

## 2.2 Language

**Rule:** All project artifacts are written in English. The only exception is LinkedIn articles, which remain in German for a German-speaking audience.

| Context | Language | Examples |
|---|---|---|
| Code, comments, commits, filenames | English | `renderLayerAsHtml()`, `feat: add zoom constants` |
| Types, interfaces, JSON keys | English | `ContentItem`, `itemType`, `containerType` |
| ADRs | English | `ADR-0011: English as the Sole Project Language` |
| Prompts | English | `prompts/development/integrate-concept.md` |
| Context files, notes, documentation | English | `context/oia-context.md`, `docs/` |
| LinkedIn articles | German | Author's choice for German-speaking audience |

Existing German files in `context/`, `notes/`, and `prompts/` are known exceptions — not retroactively translated; follow English on creation or next significant edit.

See [ODR-0004](decisions/org/0004-english-as-project-language.md) for rationale.

---

## 2.3 Conventional Commits

Format:
```
<type>[optional scope]: <imperative description> (#N)

[optional body, wrapped at 72 chars]

Closes #N   ← closes the GitHub Issue
Refs #N     ← references without closing (for partial work)
```

The `(#N)` suffix in the subject line makes the issue reference visible in `git log --oneline`. The footer `Closes #N` is kept alongside it — it is needed for GitHub auto-close and changelog tooling. See [ADR-0013](decisions/arch/0013-issue-reference-in-commit-subject.md) for rationale.

Allowed types:

| Type | Usage |
|---|---|
| `feat` | New feature in renderer or tooling |
| `fix` | Bug fix |
| `content` | New OIA content, article, model addition (BIZ) |
| `docs` | Documentation, ADRs, CONVENTIONS.md |
| `refactor` | Code restructuring without behavior change |
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
- Max 50 characters for subject line (the `(#N)` suffix counts toward this)
- No period at end
- `(#N)` suffix in subject line — always (except initial commits)
- GitHub Issue in footer — always (except initial commits)
- Before `Closes #N`: all acceptance criteria of the issue must be verified — see §2.4 Close-Verifikation

See [ADR-0005](decisions/arch/0005-conventional-commits-with-content-type.md) for rationale.

---

## 2.4 Issue Tracking

**Official tasks → GitHub Issues** (https://github.com/ruedigerk/oi-architecture/issues)

Benefits: community-ready, filterable, linkable in commits, milestone-capable.

`context/todo.md` remains as **Session Parking Lot** — observations captured during work that are not yet prioritized. Before starting work: convert open parking-lot entries to GitHub Issues or explicitly discard them.

Parking-lot entry format (in `context/todo.md`):
```
**[YYYY-MM-DD] [ACTION] `#category` [S|M|L]** (DEV|BIZ)
→ Affected path: Description
→ Action: What specifically to do
```

Categories: `model` · `renderer` · `prompt` · `architecture` · `infra` · `ux` · `content`

See [ADR-0003](decisions/arch/0003-github-issues-as-task-tracker.md) for rationale.

### Issue closing rules

**Close-Verifikation:** When closing an issue, the close comment must verify each AC item explicitly:

```
gh issue close <N> --comment "Closed: implemented in commit <HASH> — <COMMIT_TITLE>

AC verified:
✅ Criterion A
✅ Criterion B
⚠️ Criterion C: deferred to #M"
```

**AC-Update bei Scope-Änderung:** If scope changes during implementation (e.g. a file path changes, a feature is split), update the issue's Acceptance criteria before closing — not after.

**Externe Abhängigkeiten:** AC items that depend on another open issue must be marked `blocked by #N` in the AC list, not listed as standalone criteria. This prevents false-negative reviews at close time.

---

## 2.5 TypeScript Naming

| Element | Convention | Example |
|---|---|---|
| Variables | camelCase, semantically complete | `currentZoomValue`, `diagramWrapperElement` |
| Functions | camelCase, verb first, semantically complete | `renderLayerAsHtml()`, `findElementById()`, `resolveChildrenForContainer()` |
| Booleans | `is`/`has` prefix | `isHighlighted`, `hasChildren`, `isDetailView` |
| Event handlers | `on`/`handle` prefix | `onHashChange`, `handleZoomInput` |
| Types/Interfaces | PascalCase, no `I`/`T` prefix | `OIAModel`, `ContentItem`, `LayerContainer` |
| Enums (name) | PascalCase | `ContainerType` |
| Enum values | SCREAMING_SNAKE_CASE | `SITUATION_LAYER`, `DATA_SOURCE` |
| Constants (module-level) | SCREAMING_SNAKE_CASE | `DEFAULT_ZOOM`, `ZOOM_LEVELS` |
| No type info in name | | `userString` ❌ → `userName` ✓ |
| No abbreviations | | `el` ❌ → `element` ✓, `btn` ❌ → `button` ✓ |

---

## 2.6 File and Folder Naming

| Type | Convention | Example |
|---|---|---|
| TypeScript modules | kebab-case | `render-layer.ts`, `oia-model.json` |
| Test files | `<name>.spec.ts` | `render-layer.spec.ts` |
| Directories | kebab-case, English | `src/renderer/`, `src/data/` |
| Markdown content | kebab-case, English | `naming-conventions.md` |
| Prompts | kebab-case, English | `introduce-conventions.md` |

---

## 2.7 CSS Classes

kebab-case, BEM-lite (Block__Element only when hierarchy is semantically meaningful):

```css
.detail-view          /* Block */
.detail-view__title   /* Element (only when hierarchy is semantically relevant) */
.zoom-controls        /* simple block */
.layer-core           /* modifier embedded in block name */
```

No inline styles for recurring values — always use CSS variable or class.

---

## 2.8 JSON Data Model (DEV structure)

Keys: camelCase (JavaScript-idiomatic):
```json
{ "itemType": "outcome", "containerType": "layer", "isHighlighted": true }
```

IDs: Existing `#L1`–`#L10` are not changed. Schema for new items: BIZ decision (not defined here).

---

## 2.9 Tests

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

## 2.10 Prompts

Every new prompt file in `prompts/` must be created through the `prompts/templates/prompt-helper.md` process. Prompts without the required sections (`## Context`, `## Goal`, `## Constraints`, `## Acceptance criteria`) are non-compliant.

See [ADR-0006](decisions/arch/0006-prompt-helper-enforcement.md) for rationale.

---

## ADR Format

See [decisions/README.md](decisions/README.md) for the full ADR template and index.

Methodology: Ralf D. Müller / Johannes Dienst — Decision first, Alternatives mandatory.

**Location:** `decisions/arch/NNNN-kebab-case-title.md`

**Required fields:** `Decision` · `Status` · `Date` · `Type` · `Governed by`

**Governed by field:** Every ADR carries `**Governed by:** ODR-XXXX` pointing to the ODR that mandated it, or `**Governed by:** —` when no ODR applies. This field enables upward traversal from Arch → Org layer.

**ADR Acceptance Rule:** Only a human maintainer may set an ADR status to `Accepted`. AI-assisted tooling must use `Proposed` when creating new ADRs. An ADR in `Proposed` state is active and followed — `Proposed` means "awaiting human sign-off", not "not yet in use".

See [ADR-0004](decisions/arch/0004-adr-format-mueller-dienst.md) and [ODR-0003](decisions/org/0003-adopt-adrs-as-arch-layer-documentation-practice.md) for rationale.

---

## ODR Format

ODRs document organizational decisions at the Org layer of the governance hierarchy (Gov → Org → Arch). See [decisions/README.md](decisions/README.md) for the ODR index and [decisions/org/odr-template.md](decisions/org/odr-template.md) for the template.

**Location:** `decisions/org/NNNN-kebab-case-title.md`

**Numbering:** ODR numbers are independent of ADR numbers. The next ODR number = current highest in the ODR index + 1. Never reuse a number.

**Required fields:**

| Field | Values | Purpose |
|---|---|---|
| `Decision` | One or two sentences, active voice | What was decided and why — upfront |
| `Status` | `Proposed` · `Accepted` · `Deprecated` · `Superseded by ODR-XXXX` | Lifecycle state |
| `Date` | `YYYY-MM-DD` | Date created |
| `Level` | Always `Org` | Governance layer |
| `Binding for` | `All` · `Users` · `Agents` · `Contributors` | Explicit scope |
| `Derives from` | `ODR-XXXX` · `—` | Parent ODR in the derivation chain |
| `Implements` | `ADR-XXXX, ADR-YYYY` · `—` | Arch-layer records that implement this ODR |

**Bidirectional linking rule:**
- ODR → ADR: via `Implements` field on the ODR
- ADR → ODR: via `Governed by` field on the ADR
- These two fields must be kept in sync when creating either record.

**ODR Acceptance Rule:** Same as ADRs — only a human maintainer sets `Accepted`. AI tooling uses `Proposed`.

**Commit type:** ODR changes use `docs(decisions):` — ODRs are BIZ artifacts stored in `decisions/org/`.

**Supersession:** When an ODR is superseded, move it to `decisions/_obsolete/` and update its status to `Superseded by ODR-XXXX`. Update the ODR index in `decisions/README.md` with a strikethrough entry.

See [ODR-0000](decisions/org/0000-commit-to-transparent-governance-documentation.md) and [context/odr-concept.md](context/odr-concept.md) for rationale and full concept.

---

## 2.11 Semantic Anchors

Semantic Anchors are named methodologies invoked verbatim in prompts and CLAUDE.md to activate established knowledge domains in AI assistants. They complement ADRs: an ADR documents a project-specific decision, an anchor establishes shared vocabulary for a universal methodology.

**Active anchor set:** `context/semantic-anchors.md`
**Decision:** [ADR-0010](decisions/arch/0010-semantic-anchors-as-vocabulary-layer.md)

Rules:
- Anchors are invoked **verbatim** — "MECE Principle (Minto)", not "MECE" or "mutually exclusive"
- New anchors must exist in the library at https://llm-coding.github.io/Semantic-Anchors/ or meet the same quality criteria (precise, rich, consistent, attributable)
- Adding or removing an anchor requires a GitHub Issue and a `content(context):` commit
- Project-specific rules belong in ADRs. Universal methodology vocabulary belongs in Semantic Anchors. Do not put methodology explanations in ADRs — reference the anchor instead

---

## Concept File Versioning

Concept files in `context/` that evolve over time carry a `**Version:**` field following SemVer (`MAJOR.MINOR.PATCH`), independent of the OIA model version (ADR-0007).

| Bump | When |
|---|---|
| **PATCH** | Typo corrections, clarifications that don't change meaning |
| **MINOR** | New sections, expanded explanations, new examples |
| **MAJOR** | Structural rethink, renamed sections, breaking change to how the concept is used |

**Active versioned concept files:**

| File | Current version |
|---|---|
| `context/odr-concept.md` | 1.3.0 |
| `context/oia-context.md` | 1.0.0 |
| `context/adr-concept.md` | 1.0.0 |

Update the version field and this table when making significant changes to a concept file.

---

## Git Workflow

See [ADR-0014](decisions/arch/0014-feature-branch-release-branch-workflow.md) for rationale.

### Branch Strategy

Feature-branch per issue. No `develop` branch. Release branches for release preparation only.

**Branch naming:**
```
feature/#42-add-zoom-constants
fix/#78-deliver-capability
docs/#98-semantic-versioning-adr
release/v0.2.0
```
Pattern: `<type>/#<issue-number>-<kebab-description>`

### Commit Granularity

1 commit = 1 logical unit. Multiple commits per issue are expected. WIP commits are allowed on feature branches and must be squashed or rebased into clean commits before the PR merge. `main` history must be readable without WIP noise.

### Push Rules

| Action | Rule |
|---|---|
| Push to feature branch | Free — no confirmation required |
| Open PR | Agent opens PR and notifies human in chat |
| Merge to `main` | Human approval via PR only — agent never merges |
| Force-push | Never without explicit human instruction |

### PR Lifecycle

```
1. Create branch: feature/#N-description
2. Implement: commit (logical units, (#N) suffix)
3. Push branch
4. Open PR → notify human in chat
5. Human: review diff + CI + preview deployment
6. Human: approve + merge
7. Close issue with AC verification
```

### Release Process

See [ADR-0008](decisions/arch/0008-release-strategy.md) for the full release process including branch, tag, and GitHub Release steps.

**Short form:**
1. Create `release/vX.Y.Z` branch from `main`
2. Bump version + update CHANGELOG on branch
3. Tag on release branch: `git tag -a vX.Y.Z`
4. Create GitHub Release with curated release notes
5. Merge release branch back to `main`

---

## Known Exceptions

Existing code that pre-dates these conventions is not retroactively fixed. Violations are tracked as GitHub Issues when encountered during active work.

| File | Violation | Issue |
|---|---|---|
| `oia-site/src/renderer/render-layer.ts:154–173` | 13 hardcoded `if (layer.id === '#Lx')` instead of map | TBD |
| `oia-site/src/renderer/render-layer.ts:88,139` | RGBA colors as inline style instead of CSS vars | TBD |
| `oia-site/src/router.ts:14,47,58` | Zoom values hardcoded instead of constants | TBD |
| `oia-site/src/renderer/render-layer.ts` + `render-panel.ts` | Duplicate `getItem()` function | TBD |
