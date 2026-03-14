# OIA · Claude Instructions

> **For external contributors:** This file configures optional AI tooling (Claude Code) used by the project author.
> The project is fully usable and contributable without it.
> All contribution rules are documented in [`docs/CONTRIBUTING.md`](docs/CONTRIBUTING.md) and [`CONVENTIONS.md`](CONVENTIONS.md).

## Project Context

Read before every session:
- `context/oia-context.md` — stable project anchor, terminology
- `CONVENTIONS.md` — binding rules for all new files and commits
- `decisions/README.md` — ADR index: active architecture contracts

## Architecture Decision Records (ADRs)

ADRs in `decisions/` are binding contracts — they document WHY a rule exists. Do not contradict a Proposed or Accepted ADR without first creating a superseding ADR.

**Before any structural or architectural change:** check `decisions/README.md` for a relevant existing decision.

**When to create a new ADR:** A new ADR is needed when you make a decision that (a) affects project structure, tooling, or process, (b) has non-obvious alternatives that were rejected, and (c) should be traceable in the future. Use `prompts/development/create-adr.md`. New ADRs always start in `Proposed` state — only the human maintainer sets `Accepted`.

**ADR numbering:** The next ADR number is the current highest in `decisions/README.md` + 1. Never reuse a number.

## Semantic Anchors

This project uses Semantic Anchors as a shared vocabulary layer. The full active set with application context is in `context/semantic-anchors.md`. See [ADR-0010](decisions/arch/0010-semantic-anchors-as-vocabulary-layer.md) for rationale.

**Apply automatically — BIZ tasks:**
- **MECE Principle (Minto)** when evaluating or designing OIA layers: test every categorization for overlap and completeness
- **Pyramid Principle (Minto)** when structuring articles, ADR bodies, or documents: conclusion first, support below
- **BLUF** for any executive-facing output (LinkedIn, C-level summaries): one-sentence lead, no scene-setting
- **Domain-Driven Design (Evans)** when discussing OIA terminology or layer boundaries: treat OIA terms as Ubiquitous Language

**Apply automatically — DEV tasks:**
- **Conventional Commits** for every commit message (CONVENTIONS.md §2.3, ADR-0005)
- **Diátaxis Framework** when creating new `docs/` content: declare the mode (Tutorial / How-to / Reference / Explanation) and do not mix modes
- **Semantic Versioning** whenever a version number is mentioned or changed

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

See [ADR-0006](decisions/arch/0006-prompt-helper-enforcement.md) for rationale.

## Commit Convention

Follow CONVENTIONS.md §2.3. Every commit references a GitHub Issue in the footer (`Closes #N` or `Refs #N`), except initial setup commits.

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
