# Decision Records

This directory contains two types of decision records for the OIA project:

| Type | Layer | Subject | Location |
|---|---|---|---|
| **ADR** — Architecture Decision Record | Arch | Technical and structural choices | `decisions/adr/` |
| **ODR** — Organizational Decision Record | Org | Operating model, governance, process principles | `decisions/odr/` |
| **OIA-ODR** — OIA Model Decision Record | Model | OIA layer definitions, element semantics, model governance | `decisions/oia-odr/` |

Both follow the **Decision first** principle (Müller/Dienst). See [`context/agent/odr-concept.md`](../context/agent/odr-concept.md) for the full ODR concept and hierarchy (Gov → Org → Arch).

**Obsolete records** (superseded or deprecated) are stored in [`decisions/_obsolete/`](./_obsolete/README.md). They are never deleted — they remain for historical reference. See `_obsolete/README.md` for the index.

---

## ADR Index

ADR methodology: Ralf D. Müller / Johannes Dienst (fiveandahalfstars.ninja).

| ADR | Title | Status | Type | Date |
|---|---|---|---|---|
| [ADR-0001](./adr/0001-language-and-naming-conventions.md) | Language and Naming Conventions | Accepted (language section superseded by ODR-0004) | DEV | 2026-03-11 |
| [ADR-0002](./adr/0002-biz-dev-separation.md) | BIZ/DEV Separation as Project Rule | Accepted | BOTH | 2026-03-11 |
| [ADR-0003](./adr/0003-github-issues-as-task-tracker.md) | GitHub Issues as Official Task Tracker | Accepted | DEV | 2026-03-11 |
| [ADR-0004](./adr/0004-adr-format-mueller-dienst.md) | ADR Format: Müller/Dienst Methodology | Accepted | DEV | 2026-03-11 |
| [ADR-0005](./adr/0005-conventional-commits-with-content-type.md) | Conventional Commits with Custom Content Type | Accepted | DEV | 2026-03-11 |
| [ADR-0006](./adr/0006-prompt-helper-enforcement.md) | Prompt-Helper Enforcement via CLAUDE.md | Accepted | DEV | 2026-03-11 |
| [ADR-0007](./adr/0007-versioning-scheme.md) | Versioning Scheme — Semantic Versioning for OIA | Accepted | BOTH | 2026-03-13 |
| [ADR-0008](./adr/0008-release-strategy.md) | Release Strategy — GitHub Releases with Manual Trigger | Proposed | DEV | 2026-03-13 |
| [ADR-0009](./adr/0009-repo-as-source-of-truth-for-contributor-documentation.md) | Repo as Source of Truth — Website as Entry Point | Accepted | DEV | 2026-03-12 |
| [ADR-0010](./adr/0010-semantic-anchors-as-vocabulary-layer.md) | Semantic Anchors as Shared Vocabulary Layer | Accepted | DEV | 2026-03-12 |
| ~~[ADR-0011](./_obsolete/0011-english-as-project-language.md)~~ | ~~English as the Sole Project Language~~ | Superseded by ODR-0004 | DEV | 2026-03-13 |
| [ADR-0012](./adr/0012-introduce-odr-governance-layer.md) | Introduce ODR as Governance Documentation Layer | Accepted | BOTH | 2026-03-14 |
| [ADR-0013](./adr/0013-issue-reference-in-commit-subject.md) | Issue Reference in Commit Subject Line | Accepted | DEV | 2026-03-28 |
| [ADR-0014](./adr/0014-feature-branch-release-branch-workflow.md) | Feature-Branch and Release-Branch Development Workflow | Accepted | DEV | 2026-03-28 |
| [ADR-0015](./adr/0015-sprint-based-development-workflow.md) | Sprint-Based Development Workflow | Accepted | DEV | 2026-03-28 |
| [ADR-0016](./adr/0016-agile-semantic-anchors.md) | Agile Process Semantic Anchors | Accepted | DEV | 2026-03-28 |
| [ADR-0017](./adr/0017-agent-skills-skill-md-format.md) | Agent Skills (SKILL.md) as Portable Workflow Format | Proposed | DEV | 2026-03-15 |
| [ADR-0018](./adr/0018-two-layer-model-separation.md) | Two-Layer Model Separation — Semantic Model Layer vs. Presentation / Projection Layer | Proposed | BOTH | 2026-03-20 |

---

## ODR Index

ODRs document organizational decisions at the Org layer of the governance hierarchy. They bind all participants: Users, Agents, and Contributors.

| ODR | Title | Status | Date |
|---|---|---|---|
| [ODR-0000](./odr/0000-commit-to-transparent-governance-documentation.md) | Commit to Transparent Governance Documentation | Accepted | 2026-03-14 |
| [ODR-0001](./odr/0001-oia-ecosystem-type.md) | OIA Ecosystem Type — Community-Driven with Benevolent Dictator | Accepted | 2026-03-14 |
| [ODR-0002](./odr/0002-adopt-agile-principles.md) | Adopt Agile Software Development Principles | Accepted | 2026-03-14 |
| [ODR-0003](./odr/0003-adopt-adrs-as-arch-layer-documentation-practice.md) | Adopt ADRs as Arch-Layer Documentation Practice | Accepted | 2026-03-14 |
| [ODR-0004](./odr/0004-english-as-project-language.md) | English as the Sole Project Language | Accepted | 2026-03-14 |

---

## OIA-ODR Index

OIA-ODRs document model-level decisions — how the OIA model is structured, what its layers mean, and which governance frames apply within the model. They bind Contributors implementing model changes and AI Agents traversing the model.

OIA-ODR numbers are independent of ADR and ODR numbers. The next OIA-ODR number is the current highest in this index + 1.

| OIA-ODR | Title | Status | Date |
|---|---|---|---|
| [OIA-ODR-0001](./oia-odr/0001-system-participants-layer.md) | System Participants Layer | Proposed | 2026-03-15 |
| [OIA-ODR-0002](./oia-odr/0002-oia-maturity-model.md) | OIA Maturity Model — Layer Semantics and Assessment Dimensions | Proposed | 2026-03-29 |

---

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
**Governed by:** ODR-XXXX | — (if no governing ODR applies)

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
