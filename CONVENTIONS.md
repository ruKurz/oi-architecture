# OIA · Project Conventions

> Decision Log for Future Me — binding rules for all new files and commits.
> Existing files are not retroactively adjusted. New files follow these conventions immediately.

---

## 2.1 BIZ / DEV Separation

Two distinct domains. A commit touches exactly one.

| Domain | Meaning | Commit Types | Folders / Files |
|---|---|---|---|
| **DEV** | Technical implementation: Renderer, Tooling, Tests, Build, CI | `feat:` `fix:` `chore:` `refactor:` `test:` `style:` | `oia-site/` `.github/` `prompts/` + root files: `CLAUDE.md` `CONVENTIONS.md` `README.md` `CHANGELOG.md` `SECURITY.md` `CODE_OF_CONDUCT.md` `.gitmessage` |
| **BIZ** | Domain content: OIA model, articles, diagram content, architecture decisions | `content:` `docs:` | `context/` `articles/` `diagrams/` `decisions/` `.local/notes/` |

**Rule:** A single commit touches either BIZ or DEV — never both. If both are needed: two separate commits.

**Root-file rule:** Root-level files (`CLAUDE.md`, `CONVENTIONS.md`, `README.md`, etc.) are DEV. A commit that updates `decisions/` (BIZ) must not also update `CLAUDE.md` or `README.md` — that requires a second DEV commit.

**Rule:** No commit without a referenced GitHub Issue (except: `chore: initial setup` for new files).

See [ADR-0002](decisions/adr/0002-biz-dev-separation.md) for rationale.

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

See [ODR-0004](decisions/odr/0004-english-as-project-language.md) for rationale.

---

## 2.3 Conventional Commits

Format:
```
<type>[optional scope]: <imperative description> (#N)

[optional body, wrapped at 72 chars]

Closes #N   ← closes the GitHub Issue
Refs #N     ← references without closing (for partial work)
```

The `(#N)` suffix in the subject line makes the issue reference visible in `git log --oneline`. The footer `Closes #N` is kept alongside it — it is needed for GitHub auto-close and changelog tooling. See [ADR-0013](decisions/adr/0013-issue-reference-in-commit-subject.md) for rationale.

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

See [ADR-0005](decisions/adr/0005-conventional-commits-with-content-type.md) for rationale.

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

See [ADR-0003](decisions/adr/0003-github-issues-as-task-tracker.md) for rationale.

### No-Duplicate Rule

**Every workflow that creates GitHub Issues must run the duplicate check first — without exception.**

This applies to all prompts, scripts, and AI-assisted workflows:

1. Load open issues: `gh issue list --state open --limit 100`
2. Check for overlap by **title keywords** and **affected file/component**.
3. Clear overlap → **do not create** — reference the existing issue instead.
4. Uncertain → create the issue and add `possibly related to #N` in the body.

This rule is authoritative here. All prompts that create issues must reference it by name (`CONVENTIONS.md §2.4 No-Duplicate Rule`) rather than repeating the procedure inline. See [ADR-0003](decisions/adr/0003-github-issues-as-task-tracker.md) for the original definition and rationale.

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

**Post-deploy AC items:** AC items that require a deployed environment (visual layout checks, live-site verification) must be marked `(post-deploy)` explicitly. They may be verified after the PR is merged and deployment is complete — they do not block the PR merge.

Example:
```
✅ Criterion A
✅ Criterion B
⚠️ Criterion C (post-deploy): visual layout check — verify after deployment
```

**Cross-cutting concept checklist:** When creating an issue for a new concept introduction (a new ADR category, a new documentation format, a new convention), the AC list must include an explicit review of all standard integration points. Either each point is covered in the issue, or explicitly excluded with a reason:

| Integration point | Typical artifact |
|---|---|
| Agent instructions | `CLAUDE.md` |
| Binding rules | `CONVENTIONS.md` |
| Process prompts | `prompts/development/` |
| CI validation | `.github/workflows/pr-check.yml` |
| User-facing docs | `docs/` |
| Repository entry points | `README.md`, `CONTRIBUTING.md` |
| Change history | `CHANGELOG.md` |

See [ADR-0014](decisions/adr/0014-feature-branch-release-branch-workflow.md) and sprint retro 2026-03-14 for rationale.

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

**Browser-environment defaults:** When implementing logic that depends on browser properties (e.g. `window.innerWidth`, `window.innerHeight`), note the JSDOM default before writing tests (`innerWidth` defaults to `1024`, `innerHeight` to `768`) and confirm that test setup matches the implementation assumption.

---

## 2.10 Prompts

Every new prompt file in `prompts/` must be created through the `prompts/templates/prompt-helper.md` process. Prompts without the required sections (`## Context`, `## Goal`, `## Constraints`, `## Acceptance criteria`) are non-compliant.

See [ADR-0006](decisions/adr/0006-prompt-helper-enforcement.md) for rationale.

---

## 2.14 Agent Skills (SKILL.md)

Reusable AI agent workflows are defined as Agent Skills following the SKILL.md format (agentskills.io). See [ADR-0017](decisions/adr/0017-agent-skills-skill-md-format.md) for rationale.

**Location:** `prompts/skills/<skill-name>/SKILL.md`

**SKILL.md structure:**

```yaml
---
name: skill-name          # kebab-case, unique within the project
description: >-           # max 1024 characters; describes when to trigger
  ...
---
```

Body: workflow steps in sequence. Loaded only when the skill is triggered (~2000 tokens max).

**Reference convention:** The SKILL.md body references project files by **path only** — never as copies. Example:

```
Read CONVENTIONS.md §2.1 to determine BIZ vs DEV.
Read decisions/README.md to check ADR/ODR compliance.
```

Copying `CONVENTIONS.md` or `decisions/README.md` into a `references/` directory is **not allowed** — copies go stale immediately and create a maintenance trap.

**Authoring rule:** Creating or modifying a skill file still requires the `prompts/templates/prompt-helper.md` process for workflow design (ADR-0006). The output is a SKILL.md file, not a standard prompt with Context/Goal/Constraints/AC sections.

**Naming:** skill directories are kebab-case, English.

---

## 2.12 Concept Introduction

When introducing a new concept into the project (a new documentation format, a new process, a new architectural pattern), the following order is mandatory:

**Step 1 — Design first.** The concept must be fully designed and validated in collaboration with the human maintainer before any integration issues are created. The entry point is `prompts/development/integrate-concept.md`.

**Step 2 — Create integration issues.** Only after the concept is stable: create GitHub Issues for each integration point (CONVENTIONS.md, CLAUDE.md, prompts, CI, docs, README, CHANGELOG, ...).

**Step 3 — Implement integration.** Execute the issues in dependency order.

**Rule:** Never start integration work before the concept design is complete. Starting integration on an unstable concept creates rework across all integration points.

**Mandatory entry point:** `prompts/development/integrate-concept.md` — use it for every new concept introduction, without exception.

---

## 2.13 New Public Artifacts

Before creating new top-level directories, new root-level files, or any other repository artifact that becomes public content, verify that an ADR or ODR covers the decision. If none exists: raise the question with the human maintainer first and block implementation until confirmed.

**Rule:** Do not create public repository artifacts without a decision record authorizing them. If uncertain whether a record exists, check `decisions/README.md` first.

---

## ADR Format

See [decisions/README.md](decisions/README.md) for the full ADR template and index.

Methodology: Ralf D. Müller / Johannes Dienst — Decision first, Alternatives mandatory.

**Location:** `decisions/adr/NNNN-kebab-case-title.md`

**Required fields:** `Decision` · `Status` · `Date` · `Type` · `Governed by`

**Governed by field:** Every ADR carries `**Governed by:** ODR-XXXX` pointing to the ODR that mandated it, or `**Governed by:** —` when no ODR applies. This field enables upward traversal from Arch → Org layer.

**ADR Acceptance Rule:** Only a human maintainer may set an ADR status to `Accepted`. AI-assisted tooling must use `Proposed` when creating new ADRs. An ADR in `Proposed` state is active and followed — `Proposed` means "awaiting human sign-off", not "not yet in use".

See [ADR-0004](decisions/adr/0004-adr-format-mueller-dienst.md) and [ODR-0003](decisions/odr/0003-adopt-adrs-as-arch-layer-documentation-practice.md) for rationale.

---

## ODR Format

ODRs document organizational decisions at the Org layer of the governance hierarchy (Gov → Org → Arch). See [decisions/README.md](decisions/README.md) for the ODR index and [decisions/odr/odr-template.md](decisions/odr/odr-template.md) for the template.

**Location:** `decisions/odr/NNNN-kebab-case-title.md`

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

**Commit type:** ODR changes use `docs(decisions):` — ODRs are BIZ artifacts stored in `decisions/odr/`.

**Supersession:** When an ODR is superseded, move it to `decisions/_obsolete/` and update its status to `Superseded by ODR-XXXX`. Update the ODR index in `decisions/README.md` with a strikethrough entry.

See [ODR-0000](decisions/odr/0000-commit-to-transparent-governance-documentation.md) and [context/agent/odr-concept.md](context/agent/odr-concept.md) for rationale and full concept.

---

## 2.11 Semantic Anchors

Semantic Anchors are named methodologies invoked verbatim in prompts and CLAUDE.md to activate established knowledge domains in AI assistants. They complement ADRs: an ADR documents a project-specific decision, an anchor establishes shared vocabulary for a universal methodology.

**Active anchor set:** `context/semantic-anchors.md`
**Decision:** [ADR-0010](decisions/adr/0010-semantic-anchors-as-vocabulary-layer.md)

Rules:
- Anchors are invoked **verbatim** — "MECE Principle (Minto)", not "MECE" or "mutually exclusive"
- New anchors must exist in the library at https://llm-coding.github.io/Semantic-Anchors/ or meet the same quality criteria (precise, rich, consistent, attributable)
- Adding or removing an anchor requires a GitHub Issue and a `content(context):` commit
- Project-specific rules belong in ADRs. Universal methodology vocabulary belongs in Semantic Anchors. Do not put methodology explanations in ADRs — reference the anchor instead

---

## 2.15 Two-Layer Model Separation

The OIA data architecture separates into two structurally independent layers. See [ADR-0018](decisions/adr/0018-two-layer-model-separation.md) and [context/concepts/two-layer-separation.md](context/concepts/two-layer-separation.md) for full rationale and boundary rules.

| Layer | Schema file | Loader file | Owner |
|---|---|---|---|
| **Semantic Model Layer** (source of truth) | `oia-site/src/data/types-doc.ts` | `oia-site/src/data/document-model.ts` | Semantic extraction pipeline |
| **Presentation / Projection Layer** (derived) | `oia-site/src/data/types.ts` | `oia-site/src/data/model.ts` | Renderer pipeline |

**Rules:**

- **No unified schema.** No TypeScript type may serve both layers. Shape similarity does not imply shared ownership — duplicate with layer-specific definitions when needed; clarify layer ownership when uncertain.
- **Dependency direction.** Semantic Model Layer → Presentation / Projection Layer, never the inverse. Renderer modules must not import from `types-doc.ts` or `document-model.ts`.
- **Folder boundary.** Semantic Model Layer artifacts live in `oia-site/src/data/doc/`. Renderer modules in `oia-site/src/renderer/` must not reach into this subfolder — any such import is a boundary violation.
- **Projection Pipeline.** Cross-layer transformation lives exclusively in the Projection Pipeline (`oia-site/src/data/doc/projection.ts` or equivalent). No other module may read from the Semantic Model Layer and write to the Presentation / Projection Layer simultaneously.
- **Change policy.** Presentation / Projection Layer: changes only when visual architecture evolves. Semantic Model Layer: changes only when source documents or organizational meaning changes. These are independent change cycles and must not be conflated.
- **Enforcement.** An ESLint `no-restricted-imports` rule must be configured to prevent renderer imports from semantic layer files (see #216). Folder boundary and loader separation are the structural enforcement layer; the lint rule is the automated enforcement layer.

---

## Document Versioning

**No document-internal version annotations.** Individual files do not carry a `**Version:**` field or version subtitle. Versioning is via Git history exclusively — `git log -- <file>` is the authoritative change record.

**Exception:** `oia-site/src/data/oia-model.json → meta.version` — this is the OIA model's release version, consumed by the UI and tied to the project's SemVer release cycle (ADR-0007). It must not be removed.
| `context/agent/oia-project-instruction-prompt.md` | 1.0.0 |

Update the version field and this table when making significant changes to a concept file.

---

## Git Workflow

See [ADR-0014](decisions/adr/0014-feature-branch-release-branch-workflow.md) for rationale.

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

See [ADR-0008](decisions/adr/0008-release-strategy.md) for the full release process including branch, tag, and GitHub Release steps.

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
| `oia-site/src/views/detail.ts:9` | Dynamic `margin-left:${depth * 16}px` — computed indentation, not replaceable by a static class | [#148](https://github.com/ruKurz/oi-architecture/issues/148) |
| `diagrams/oia-diagram-v2.html` | Version suffix in file name (predates ADR-0007 file name rule) — not renamed due to active references in prompts | [ADR-0007](decisions/adr/0007-versioning-scheme.md) |
| `images/oia-model-v1.png` | Version suffix in file name (predates ADR-0007 file name rule) — historical image, no active references | [ADR-0007](decisions/adr/0007-versioning-scheme.md) |
