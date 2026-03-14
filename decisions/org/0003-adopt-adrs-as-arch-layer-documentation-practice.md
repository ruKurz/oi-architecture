# ODR-0003: Adopt ADRs as Arch-Layer Documentation Practice

**Decision:** OIA uses Architecture Decision Records (ADRs) as the authoritative method for documenting all binding technical and structural decisions at the Arch layer of the governance hierarchy. Every architectural choice with non-obvious alternatives must exist as a versioned ADR.
**Status:** Proposed
**Date:** 2026-03-14
**Level:** Org
**Binding for:** All
**Derives from:** [ODR-0000](./0000-commit-to-transparent-governance-documentation.md)
**Implements:** [ADR-0004](../0004-adr-format-mueller-dienst.md)

## Context

ODR-0000 establishes that all binding decisions must be explicitly documented and machine-readable. This applies to both the Org layer (ODRs) and the Arch layer. A documentation method for the Arch layer must be chosen.

ADRs (Architecture Decision Records) are an established practice originating with Michael Nygard (2011). The format has been refined by multiple practitioners. For OIA, the relevant question is not *whether* to use ADRs — that is mandated by ODR-0000 — but *which ADR format* to adopt and what scope ADRs cover within the project.

This ODR answers the first question (adopt ADRs for the Arch layer). [ADR-0004](../0004-adr-format-mueller-dienst.md) answers the second (the Müller/Dienst format).

**Scope of ADRs in OIA:** ADRs cover decisions that (a) affect project structure, tooling, or technical process, (b) have non-obvious alternatives that were actively rejected, and (c) should remain traceable over time. Organizational decisions (governance model, operating principles) belong to the ODR layer, not ADRs.

## Consequences

**For Users:** All technical choices affecting how they interact with OIA tooling or content structure are documented and findable in `decisions/`.

**For Agents:** AI systems can consume the full Arch-layer decision stack as structured artifacts. No technical binding rule is locked inside prose or tacit knowledge.

**Easier:** New technical decisions have a clear home and format. The distinction between Org-layer decisions (ODRs) and Arch-layer decisions (ADRs) provides a principled boundary for where a decision lives.

**Harder:** Every binding technical decision requires a record. The discipline of creating ADRs adds time per decision. This overhead is accepted as the cost of traceability.

**Required adjustments:**
- [ADR-0004](../0004-adr-format-mueller-dienst.md) governs the specific format to be used — carries `governed-by: ODR-0003`
- `decisions/README.md` serves as the ADR index — all ADRs must be registered there
- `prompts/development/create-adr.md` provides the guided creation workflow

## Alternatives

| Option | Reason rejected |
|---|---|
| No formal Arch-layer records (prose decisions in README or notes/) | No traceability, no binding authority, no machine-readability. Contradicts ODR-0000. |
| Decision log (flat list without structured format) | No alternatives section, no status tracking, no enforceability. Insufficient for a project committed to navigable governance. |
| Use ODRs for all layers (no separate Arch layer) | Conflates two abstraction levels with different scopes and binding parties. The Gov → Org → Arch hierarchy requires distinct artifact types at each layer. |
| Lightweight RFC process | RFC processes are designed for proposals in multi-team environments. OIA's single-maintainer context does not justify RFC overhead; the ADR format is more appropriate. |

## Related decisions

| Record | Relationship |
|---|---|
| [ODR-0000](./0000-commit-to-transparent-governance-documentation.md) | Derives from — founding charter that mandates explicit decision documentation |
| [ADR-0004](../0004-adr-format-mueller-dienst.md) | Implements this ODR — specifies the Müller/Dienst format for ADRs |
| [ADR-0012](../0012-introduce-odr-governance-layer.md) | Sibling decision — introduces ODRs as the Org-layer counterpart to ADRs |
