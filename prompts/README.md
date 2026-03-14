# prompts/

This folder contains AI prompt templates used by the project author with [Claude Code](https://claude.ai/claude-code).

## What these prompts do

| File | Purpose |
|---|---|
| `templates/prompt-helper.md` | Guided process for creating new prompts |
| `development/create-issue.md` | Create a GitHub Issue following ADR-0003 |
| `development/create-adr.md` | Create an Architecture Decision Record |
| `development/integrate-concept.md` | Integrate a concept as a binding project contract |
| `development/introduce-conventions.md` | Set up project conventions from scratch |
| `development/evolve-model.md` | Evolve the OIA data model (JSON-driven) |
| `development/build-microsite.md` | Build the OIA interactive diagram site |
| `development/project-review.md` | Internal compliance scan (ADR violations, code quality) |
| `development/oss-readiness-review.md` | External OSS readiness review across 10 dimensions |
| `development/sprint-change.md` | Sprint process orchestrator — routes to all sprint sub-prompts |
| `development/sprint-review.md` | Phase A: close and verify sprint issues, produce deviation table |
| `development/sprint-retro.md` | Phase B: analyze deviations and derive improvement measures |
| `development/sprint-planning.md` | Phase C: agree sprint goal and scope for next sprint |
| `development/sprint-refinement.md` | Sharpen one or more issues to sprint-ready quality |
| `development/sprint-scope-change.md` | Handle mid-sprint scope additions, removals, or splits |
| `diagrams/generate-diagram.md` | Image generation prompt for the OIA architecture diagram |

> `development/setup-todo-command.md` — **deprecated** (one-time setup, already executed)

## For contributors without Claude Code

**You do not need these prompts to contribute.**

All contribution rules, conventions, and workflows are documented in human-readable form in:
- [`CONTRIBUTING.md`](../CONTRIBUTING.md) — how to contribute
- [`CONVENTIONS.md`](../CONVENTIONS.md) — naming, commits, BIZ/DEV separation
- [`decisions/`](../decisions/) — Architecture Decision Records

The prompts are optional tooling that automate repetitive tasks for the project author.
Contributors using other editors, other AI tools, or no AI at all are equally welcome.
