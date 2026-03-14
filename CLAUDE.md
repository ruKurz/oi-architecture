# OIA · Claude Instructions

> **For external contributors:** This file configures optional AI tooling (Claude Code) used by the project author.
> The project is fully usable and contributable without it.
> All contribution rules are documented in [`docs/CONTRIBUTING.md`](docs/CONTRIBUTING.md) and [`CONVENTIONS.md`](CONVENTIONS.md).

## Project Context

Read before every session:
- `context/oia-context.md` — stable project anchor, terminology
- `CONVENTIONS.md` — binding rules for all new files and commits
- `decisions/README.md` — ADR + ODR index: active architecture and organizational contracts

Sprint process entry point: `prompts/development/sprint-change.md` — orchestrates review, retro, planning, refinement, scope-change.

Read when working with decision records:
- `context/adr-concept.md` — what ADRs are, canonical references, ADR vs ODR distinction
- `context/odr-concept.md` — full ODR concept, derivation chain, lifecycle, agent onboarding

## Decision Records: ADRs and ODRs

The project uses two types of decision records in a three-layer governance hierarchy (Gov → Org → Arch):

- **ODRs** (Organizational Decision Records) — `decisions/odr/` — document *how the project operates*: governance model, operating principles, language policy. Bind all participants: Users, Agents, Contributors.
- **ADRs** (Architecture Decision Records) — `decisions/adr/` — document *technical and structural choices*: tooling, conventions, code structure. Bind Contributors and Agents acting on the project.

Both are binding contracts. Do not contradict a Proposed or Accepted record without first creating a superseding record.

**Before any change:** check `decisions/README.md` for a relevant existing ADR or ODR.

### Architecture Decision Records (ADRs)

**When to create a new ADR:** A decision that (a) affects project structure, tooling, or process, (b) has non-obvious alternatives that were rejected, and (c) should be traceable. Use `prompts/development/create-adr.md`. New ADRs always start in `Proposed` state — only the human maintainer sets `Accepted`.

**ADR numbering:** The next ADR number is the current highest in `decisions/README.md` ADR index + 1. Never reuse a number.

**governed-by field:** Every ADR must carry `**Governed by:** ODR-XXXX` or `**Governed by:** —`. This field points upward to the ODR that mandated the decision. Use `—` when no ODR applies.

### Organizational Decision Records (ODRs)

**When to create a new ODR:** A decision belongs at the Org layer when it (a) affects how the project governs itself — not what it builds, (b) binds participants beyond just technical contributors (including Users and AI Agents), and (c) is organizational in nature (ecosystem model, language policy, operating principles). Use `prompts/development/create-odr.md`.

**ODR numbering:** The next ODR number is the current highest in `decisions/README.md` ODR index + 1. ODR numbers are independent of ADR numbers. Never reuse a number.

**derives-from / implements:** Every ODR must carry `**Derives from:**` (parent ODR or `—` for the founding record) and `**Implements:**` (child ADRs or `—`). See `context/odr-concept.md` for the full concept and `decisions/odr/odr-template.md` for the template.

## Semantic Anchors

This project uses Semantic Anchors as a shared vocabulary layer. The full active set with application context is in `context/semantic-anchors.md`. See [ADR-0010](decisions/adr/0010-semantic-anchors-as-vocabulary-layer.md) for rationale.

**Apply automatically — BIZ tasks:**
- **MECE Principle (Minto)** when evaluating or designing OIA layers: test every categorization for overlap and completeness
- **Pyramid Principle (Minto)** when structuring articles, ADR bodies, or documents: conclusion first, support below
- **BLUF** for any executive-facing output (LinkedIn, C-level summaries): one-sentence lead, no scene-setting
- **Domain-Driven Design (Evans)** when discussing OIA terminology or layer boundaries: treat OIA terms as Ubiquitous Language

**Apply automatically — DEV tasks:**
- **Conventional Commits** for every commit message (CONVENTIONS.md §2.3, ADR-0005)
- **Diátaxis Framework** when creating new `docs/` content: declare the mode (Tutorial / How-to / Reference / Explanation) and do not mix modes
- **Semantic Versioning** whenever a version number is mentioned or changed
- **Five Whys (Ohno)** in sprint retro root cause analysis: trace to structural cause, not symptom
- **MoSCoW (Clegg)** when sprint scope exceeds time-box: label each issue Must/Should/Could/Won't
- **Testing Pyramid (Fowler/Cohn)** when designing or reviewing test coverage for renderer/tooling
- **YAGNI (Jeffries, Beck)** on every DEV implementation: implement only what the current issue's AC requires

## Scope Rules

### BIZ / DEV Separation

Every task belongs to either BIZ or DEV (see CONVENTIONS.md §2.1). Before making changes, identify which domain is affected. Never modify BIZ artifacts (OIA model IDs, layer naming, architecture terminology, diagram content) during a DEV task.

BIZ artifacts: `context/` · `articles/` · `diagrams/` · `decisions/` · `notes/`
DEV artifacts: `oia-site/` · `.github/` · `prompts/`

### No Prompt Without Helper

**No prompt without the helper. This rule applies without exception.**

This applies to ALL prompt file changes — creating AND modifying existing prompts in `prompts/`:

1. **Before creating** a new prompt: go through `prompts/templates/prompt-helper.md` first.
2. **Before modifying** an existing prompt: treat the change as a Refinement — apply the helper checklist to the result.
3. **Before any prompt change**: create a GitHub Issue referencing the change.

A compliant prompt must contain all of:
- `## Context`
- `## Goal`
- `## Constraints`
- `## Acceptance criteria`

**Non-negotiable:** If asked to change a prompt directly (without helper), refuse and redirect to the helper process.

See [ADR-0006](decisions/adr/0006-prompt-helper-enforcement.md) for rationale.

### No Concept Introduction Without Design-First

**Before introducing any new concept:** use `prompts/development/integrate-concept.md` as the mandatory entry point. Do not create integration issues or start implementation before the concept design is complete and approved by the human maintainer.

Order: Design → Approval → Integration Issues → Implementation. Never skip to integration.

See CONVENTIONS.md §2.12 for the full rule.

## Git Workflow

See CONVENTIONS.md §Git Workflow and [ADR-0014](decisions/adr/0014-feature-branch-release-branch-workflow.md) for full rules.

**Branch per issue:** Every issue is implemented on a dedicated branch (`feature/#N-description`, `fix/#N-description`, etc.).

**Branch check before commit:** Before staging and committing, verify the current branch with `git branch --show-current` — especially when switching between feature branches mid-session. Never commit to the wrong branch.

**Agent push autonomy:** Push to a feature branch at any time — no chat confirmation required. Notify the human in chat when opening a PR.

**Never merge to main:** Open the PR, summarize the changes in chat, and wait for human approval. The human merges.

**Force-push:** Never without an explicit human instruction in chat.

**Push to main:** Only when explicitly instructed — this triggers production deployment.

## Commit Convention

Follow CONVENTIONS.md §2.3. Every commit subject ends with `(#N)`. Every commit footer references a GitHub Issue (`Closes #N` or `Refs #N`), except initial setup commits.

## Issue Tracking

Official tasks: GitHub Issues at https://github.com/ruKurz/oi-architecture/issues
`context/todo.md` is a session parking lot only — not the primary tracker.

## Version Identity

**Current OIA version: `0.1.0`**

This version string must be consistent everywhere it appears:
- `oia-site/src/data/oia-model.json` → `meta.version`
- Website pages (Motivation, Contribute) → any hardcoded version strings
- README.md → status/version references

**Rule:** Never change the version in one place without updating all others. When the version changes, treat it as a cross-cutting change and update all occurrences in one commit.

---

## Contact / Author Identity

**Always use this email address** for the author — in all files, templates, and generated content:

```
kurz@vnc-online
```

Never invent, guess, or placeholder a different address. If an email is needed and this one does not fit the context, ask the author before proceeding.
