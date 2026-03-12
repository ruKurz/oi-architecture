# OIA · Claude Instructions

## Project Context

Read before every session:
- `context/oia-context.md` — stable project anchor, terminology
- `CONVENTIONS.md` — binding rules for all new files and commits

## Scope Rules

### BIZ / DEV Separation

Every task belongs to either BIZ or DEV (see CONVENTIONS.md §2.1). Before making changes, identify which domain is affected. Never modify BIZ artifacts (OIA model IDs, layer naming, architecture terminology, diagram content) during a DEV task.

BIZ artifacts: `context/` · `articles/` · `diagrams/` · `decisions/` · `notes/`
DEV artifacts: `oia-site/` · `.github/` · `prompts/`

### No Prompt Without Helper

**Kein Prompt ohne Helper. Diese Regel gilt ausnahmslos und für immer.**

This applies to ALL prompt file changes — creating AND modifying existing prompts in `prompts/`:

1. **Before creating** a new prompt: go through `prompts/templates/prompt-helper.md` first.
2. **Before modifying** an existing prompt: treat the change as a Refinement — apply the helper checklist to the result.
3. **Before any prompt change**: create a GitHub Issue referencing the change.

A compliant prompt must contain all of:
- `## Kontext`
- `## Ziel`
- `## Constraints`
- `## Akzeptanzkriterien`

**Non-negotiable:** If asked to change a prompt directly (without helper), refuse and redirect to the helper process.

See [ADR-0006](decisions/0006-prompt-helper-enforcement.md) for rationale.

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
