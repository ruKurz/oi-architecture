# ADR-0012: Introduce ODR as Governance Documentation Layer

**Decision:** The project introduces Organizational Decision Records (ODRs) as a distinct documentation layer for organizational decisions, sitting above the existing ADR layer in the governance hierarchy Gov → Org → Arch.
**Status:** Accepted
**Date:** 2026-03-14
**Type:** BOTH
**Governed by:** [ODR-0000](../odr/0000-commit-to-transparent-governance-documentation.md)

## Context

The project uses ADRs (Architecture Decision Records) to document technical and structural choices. This works well for decisions about tooling, conventions, and code structure.

However, a category of decisions exists that ADRs do not cover well: organizational decisions — choices about how the project operates, governs itself, and structures its processes. Examples include: whether to adopt agile principles, what ecosystem model to use (vendor vs. community-driven), or how to handle contributor governance.

These decisions are organizational in nature. They bind not only technical contributors but all system participants — Users, Agents, and Contributors. They belong to a higher layer of abstraction than ADRs.

The Organizational Intelligence Architecture (OIA) framework — which this project both documents and demonstrates — argues explicitly that organizational decisions must be made visible and traceable, just as technical decisions are. Applying ADRs only to the Arch layer while leaving the Org layer implicit contradicts the core thesis of the project.

The full concept, hierarchy definition, and template are documented in `context/agent/odr-concept.md`.

## Consequences

**Easier:** Organizational operating decisions become traceable, auditable, and improvable. Contributors (human and AI) can navigate the full decision hierarchy from Gov to Arch. The project demonstrates OIA principles by living them.

**Harder:** The decisions directory now has two distinct namespaces (ADRs and ODRs) that must be kept organized. Contributors must learn to distinguish which type of decision warrants an ODR vs. an ADR.

**Required adjustments:**
- New subdirectory `decisions/odr/` for ODR files
- `decisions/README.md` extended with an ODR section and index
- CLAUDE.md updated to reference ODRs alongside ADRs
- The ODR template (`decisions/odr/odr-template.md`) is the canonical starting point for all new ODRs

## Alternatives

| Option | Reason rejected |
|---|---|
| Extend ADR scope to cover organizational decisions | Conflates two distinct abstraction levels; ADRs are designed for technical decisions (Müller/Dienst methodology). Mixing layers reduces clarity. |
| Document organizational decisions informally in `notes/` | No traceability, no status tracking, no binding authority. Contradicts the project's commitment to explicit, navigable decisions. |
| Use a third-party governance framework | External frameworks impose terminology and structure that may not fit OIA's vocabulary. ODRs are designed to align with OIA's own concepts (Ubiquitous Language, ADR-0001). |

## Related decisions

| Record | Relationship |
|---|---|
| [ADR-0004](./0004-adr-format-mueller-dienst.md) | ADR methodology this decision extends (not replaces) |
| [ADR-0002](./0002-biz-dev-separation.md) | BIZ/DEV separation — ODRs belong to BIZ artifacts |
| [ODR-0001](../odr/0001-oia-ecosystem-type.md) | First ODR created under this framework |
| [ODR-0002](../odr/0002-adopt-agile-principles.md) | Second ODR created under this framework |
| [ODR-0003](../odr/0003-adopt-adrs-as-arch-layer-documentation-practice.md) | Third ODR — closes the bootstrapping gap for ADR adoption |
| [ODR-0004](../odr/0004-english-as-project-language.md) | Fourth ODR — language policy elevated from ADR-0011 |
