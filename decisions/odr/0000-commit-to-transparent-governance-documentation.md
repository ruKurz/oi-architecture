# ODR-0000: Commit to Transparent Governance Documentation

**Decision:** OIA commits to making all organizational and architectural decisions explicitly visible, traceable, and machine-readable — through ODRs at the Org layer and ADRs at the Arch layer. Implicit governance is rejected: every binding decision must exist as a versioned artifact.
**Status:** Accepted
**Date:** 2026-03-14
**Level:** Org
**Binding for:** All
**Derives from:** — (founding ODR — no parent; derives from OIA's core thesis that organizational decisions must be made operational and navigable)
**Implements:** [ADR-0004](../adr/0004-adr-format-mueller-dienst.md), [ADR-0012](../adr/0012-introduce-odr-governance-layer.md)

## Context

OIA's founding thesis is that organizations fail not because they lack knowledge, but because their knowledge is not operational — not visible, not traceable, not navigable by human or machine participants.

A project that argues for transparent organizational intelligence while governing itself implicitly would contradict its own thesis. OIA must demonstrate what it documents.

This creates a requirement: every binding decision — whether organizational (how the project governs itself) or architectural (what tools and structures it uses) — must be recorded as a first-class artifact. The record must be:

- **Versioned:** stored in the repository alongside the artifacts it governs
- **Traceable:** linked to the decision that motivated it (upward) and the decisions that implement it (downward)
- **Binding:** not advisory — participants (Users, Agents, Contributors) are required to act in accordance with it
- **Machine-readable:** structured so that AI tooling can consume and enforce it without human interpretation at runtime

This ODR is the founding charter of that commitment. It is its own first instance: a decision about how decisions are recorded.

**Bootstrapping note:** ODR-0000 is the only ODR that has no `derives-from` parent — it derives directly from OIA's founding intellectual premise, not from a prior formal record. All subsequent ODRs must carry a `derives-from` field pointing to this record or to another ODR in the chain.

## Consequences

**For Users:** Every governance decision affecting their participation in OIA is documented and findable. No binding rule can be applied without a traceable record.

**For Agents:** AI systems acting within OIA can consume the full decision stack (Gov → Org → Arch) as structured artifacts. No governance is locked inside prose, org charts, or committee minutes.

**Easier:** New decisions have a clear home and format. The governance structure is self-documenting — the hierarchy is readable from the files themselves.

**Harder:** Every binding decision requires a record. Informal decisions, ad-hoc rules, and verbal agreements have no standing until they are formalized as an ODR or ADR. This creates discipline overhead that must be maintained consistently.

**Required adjustments:**
- [ADR-0012](../adr/0012-introduce-odr-governance-layer.md) — the architectural implementation: introduces the ODR layer, subdirectory, template, and README index
- [ADR-0004](../adr/0004-adr-format-mueller-dienst.md) — the Arch-layer mechanism this ODR extends upward: ADR format as the Müller/Dienst methodology
- All ODRs created under this commitment carry `derives-from: ODR-0000` (directly or via chain)

## Alternatives

| Option | Reason rejected |
|---|---|
| Informal governance (prose in README, verbal agreements) | No traceability, no machine-readability, no ability to audit or improve. Contradicts OIA's thesis. |
| Governance-as-committee (Chief Governance Officer, review boards) | Governance locked in organizational roles, not artifacts. Agents cannot consume it. Decisions disappear when role-holders leave. Anti-pattern: "AI Theater." |
| Governance via external framework only (TOGAF, COBIT) | External frameworks impose terminology that does not align with OIA's Ubiquitous Language. They also do not provide artifact-level machine-readability at the granularity ODRs offer. |
| ADRs only — extend scope to cover organizational decisions | Conflates two abstraction levels. ADRs (Müller/Dienst) are designed for technical decisions. Org-layer decisions require a distinct format with distinct binding scope and derivation semantics. |

## Related decisions

| Record | Relationship |
|---|---|
| [ADR-0004](../adr/0004-adr-format-mueller-dienst.md) | Arch-layer mechanism this ODR mandates — ADR format as the decision-documentation method |
| [ADR-0012](../adr/0012-introduce-odr-governance-layer.md) | Arch-layer implementation — introduces the ODR layer itself |
| [ODR-0001](./0001-oia-ecosystem-type.md) | Derives from this ODR — establishes the community-driven governance model |
| [ODR-0002](./0002-adopt-agile-principles.md) | Derives from this ODR — establishes agile as OIA's development operating model |
