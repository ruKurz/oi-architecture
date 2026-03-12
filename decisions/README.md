# Architecture Decision Records

This directory contains Architecture Decision Records (ADRs) for the OIA project.

ADR methodology: Ralf D. Müller / Johannes Dienst (fiveandahalfstars.ninja).
Key principle: **Decision first** — the decision is stated upfront, rationale follows.

## Index

| ADR | Title | Status | Type | Date |
|---|---|---|---|---|
| [ADR-0001](./0001-language-and-naming-conventions.md) | Language and Naming Conventions | Accepted | DEV | 2026-03-11 |
| [ADR-0002](./0002-biz-dev-separation.md) | BIZ/DEV Separation as Project Rule | Accepted | BOTH | 2026-03-11 |
| [ADR-0003](./0003-github-issues-as-task-tracker.md) | GitHub Issues as Official Task Tracker | Accepted | DEV | 2026-03-11 |
| [ADR-0004](./0004-adr-format-mueller-dienst.md) | ADR Format: Müller/Dienst Methodology | Accepted | DEV | 2026-03-11 |
| [ADR-0005](./0005-conventional-commits-with-content-type.md) | Conventional Commits with Custom Content Type | Accepted | DEV | 2026-03-11 |
| [ADR-0006](./0006-prompt-helper-enforcement.md) | Prompt-Helper Enforcement via CLAUDE.md | Accepted | DEV | 2026-03-11 |
| ADR-0007 | *(skipped)* | — | — | — |
| ADR-0008 | *(skipped)* | — | — | — |
| [ADR-0009](./0009-repo-as-source-of-truth-for-contributor-documentation.md) | Repo as Source of Truth — Website as Entry Point | Accepted | DEV | 2026-03-12 |
| [ADR-0010](./0010-semantic-anchors-as-vocabulary-layer.md) | Semantic Anchors as Shared Vocabulary Layer | Proposed | DEV | 2026-03-12 |

## ADR Acceptance Rule

**Only a human maintainer may set an ADR status to `Accepted`.**

- AI-assisted tooling must use `Proposed` when creating new ADRs
- Status changes to `Accepted` require a deliberate manual edit
- The commit message for an acceptance must reference the ADR number (e.g. `docs(decisions): accept ADR-0001 Refs #43`)
- An ADR in `Proposed` state is active and followed — `Proposed` means "awaiting human sign-off", not "not yet in use"

---

## Template

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
