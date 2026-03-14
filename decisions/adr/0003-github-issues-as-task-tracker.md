# ADR-0003: GitHub Issues as Official Task Tracker

**Decision:** GitHub Issues is the single source of truth for all actionable tasks in the OIA project. The file `context/todo.md` is retained as a session parking lot only — unstructured observations captured during work sessions, converted to GitHub Issues before the next work session begins.
**Status:** Accepted
**Date:** 2026-03-11
**Type:** DEV
**Governed by:** [ODR-0002](../odr/0002-adopt-agile-principles.md)

## Context

The project used `context/todo.md` as the primary task list. While sufficient for a solo project in early stages, this approach had limitations: no linkability from commits, no filtering by priority/domain, no milestone grouping, and no community visibility as the project grows toward publication.

GitHub Issues provides commit references (`Closes #N`), labels for BIZ/DEV separation, milestone grouping, and a standard interface familiar to any collaborator.

Quality attribute affected: traceability, maintainability, portability (if contributors join later).

## Consequences

**Easier:** Every commit references a concrete issue; work is prioritized and visible; parking-lot items are explicitly promoted or discarded before work begins; Conventional Commits footer `Closes #N` / `Refs #N` becomes meaningful.
**Harder:** Overhead of issue creation for small items; must maintain discipline to convert parking-lot entries before starting work; `context/todo.md` and GitHub Issues must not become duplicate sources of truth.
**Required adjustments:** `context/todo.md` header must be updated to reflect its parking-lot role; commit convention must mandate issue references in footer (except initial commits); CONVENTIONS.md must document this rule.

## Issue Format

Every GitHub Issue must follow this structure:

**Title:** Conventional Commits format — `<type>(<scope>): <imperative description>`
Example: `refactor(renderer): centralize zoom constants`

**Labels:** At minimum two labels:
- Domain: `domain:dev` or `domain:biz`
- Category: `renderer` · `model` · `infra` · `ux` · `prompt` · `architecture` · `content`

**Body:**
```markdown
## Context
[File(s) + concrete observation + why it is a problem]

## Action
[What specifically to do — specific enough for someone without context to start]

## Acceptance criteria
- [ ] [Measurable criterion]
- [ ] All tests still green (if DEV)
```

## No-Duplicate Rule

Before creating any issue, the existing open issues must be checked for duplicates:

1. Load open issues: `gh issue list --state open --limit 100`
2. Check for overlap by **title keywords** and **affected file/component**.
3. If a clear overlap exists: **do not create** — reference the existing issue instead.
4. If uncertain: create the issue and add `possibly related to #N` in the body.

This rule applies to all automated issue creation (prompts, scripts, AI assistants) and manual creation alike.

**Operational rule:** The authoritative, named statement of this rule is in `CONVENTIONS.md §2.4 No-Duplicate Rule`. Prompts reference it there — not inline.

## Alternatives

| Option | Reason rejected |
|---|---|
| `context/todo.md` as primary tracker | No commit linkage; not filterable; disappears in git history; not community-ready |
| Linear / Notion / Jira | External dependency for a personal project; overkill; not integrated with git commits |
| GitHub Projects (board view) | Additive on top of Issues — can be introduced later without changing this decision |
