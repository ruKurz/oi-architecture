# OIA-ODR-0002: OIA Maturity Model — Layer Semantics and Assessment Dimensions

**Decision:** The OIA model layers L1–L10 are formalized as independent assessment dimensions of the OIA Maturity Model, evaluated on a 5-star scale (Absent / Implicit / Defined / Connected / Optimized) with a 3-zone Stop-Gate progression model (Foundation / Capabilities / Impact).
**Status:** Proposed
**Date:** 2026-03-29
**Governs:** Maturity assessment dimensions for all OIA layers (L1–L10) · 5-star scale semantics · Stop-Gate zone thresholds · layer evaluation criteria used in the rubric
**Implements:** OIA model v0.4.0

---

## Context

The OIA architecture describes how organizations turn knowledge into action. As the model matures, there is a practical need to assess how well a specific project or initiative contributes to building an intelligent organization along these dimensions.

Without a formal, binding definition of what each layer means as an assessment dimension — what constitutes ★★★ on Data Sources, what distinguishes ★★★★ from ★★★ on AI Infrastructure — different assessors will produce incomparable results. The rubric also introduces a governance mechanism (Stop-Gate zones) that must be formally defined so that agents applying it do so consistently.

Prior state: Layer definitions existed informally in `context/oia-context.md` and `oia-model.json`. No formal MECE boundary definitions. No binding assessment criteria. No Stop-Gate governance.

---

## Decision

### 1. Assessment Object

The unit of assessment is a **Vorhaben** (project, system, or product initiative) — not the organization as a whole. Each layer of the Vorhaben is scored independently. Layer scores are translatable into organizational capability statements via the Organizational Reading mechanism.

### 2. 5-Star Scale

The following scale applies uniformly to all OIA layers as assessment dimensions:

| Level | Name | Binding definition |
|---|---|---|
| ★☆☆☆☆ | **Absent** | The layer does not exist or exists only by accident within the Vorhaben |
| ★★☆☆☆ | **Implicit** | Present but undocumented — person-dependent, not institutionalized |
| ★★★☆☆ | **Defined** | Named, documented, owner present — reproducible without tribal knowledge |
| ★★★★☆ | **Connected** | Integrated into the OIA flow — input/output contracts to neighboring layers explicit |
| ★★★★★ | **Optimized** | Feedback loop active — the layer improves without external trigger |

### 3. Stop-Gate Zone Architecture

Layers are organized into three zones. Each zone must reach its threshold before the next zone yields sustainable value.

**Zone 1 — Foundation (gate threshold: ≥ ★★★ on both)**
- L1 AI & Cognitive Infrastructure
- L2 Data Sources

**Zone 2 — Capabilities (gate threshold: ≥ ★★★ on all)**
- L3 Knowledge Core
- L4 Features & APIs
- L5 Cognitive Capabilities
- L8 Situation & Context

**Zone 3 — Impact (gate threshold: ≥ ★★★ on all)**
- L6 Solutions & Applications
- L7 Use Cases & Challenges
- L9 System Participants
- L10 Business Outcome

**Architectural principle:** A layer cannot sustainably reach ★★★★ if the layer it depends on is at ★★. Investment in a higher zone before the lower zone gate is open produces pseudo-maturity — impressive in isolation, fragile in production.

### 4. MECE Layer Boundaries

Each layer is a mutually exclusive, collectively exhaustive assessment dimension. Formal in/out criteria and MECE boundaries are specified in `context/concepts/oia-layer-definitions.md`. This OIA-ODR makes those definitions binding for assessment purposes.

No element of a Vorhaben may be scored under two layers simultaneously. When an element spans layers (e.g., a system that provides both infrastructure and features), it is assessed at the layer corresponding to its primary function.

### 5. Cross-Cutting Concepts

C1 (Organizational Entities) and C2 (Data Processing Pipeline) are not standalone assessment dimensions. They are assessed through the layers they serve:
- C2 pipeline quality is reflected in L2 (source readiness) and L3 (knowledge quality)
- C1 entity coverage is reflected in L3 (entity model completeness)

### 6. Rubric

The binding assessment rubric is maintained in `context/concepts/oia-maturity-rubric.md`. The rubric defines per-layer level descriptions, transition output blocks, KPIs, and Stop-Gate summaries. When the rubric and this OIA-ODR conflict, this OIA-ODR governs.

---

## Consequences

- AI Agents performing maturity assessments must use the 5-star scale defined in §2 without modification
- Stop-Gate zone thresholds defined in §3 are mandatory — agents must not recommend Zone 2 or Zone 3 investment when Zone 1 gate is not open
- Layer boundaries defined in `context/concepts/oia-layer-definitions.md` (referenced in §4) are binding for all assessment activities
- Future rubric additions (Zone 2, Zone 3) must conform to the format template established in `context/concepts/oia-maturity-rubric.md`
- New layers or structural changes to the OIA model that affect assessment dimensions require a superseding OIA-ODR

---

## Alternatives Considered

**Single flat scale without zones:** A flat 5-level scale for all 10 dimensions without Stop-Gate logic. Rejected because it produces no sequencing guidance — organizations would invest in Zone 3 while Zone 1 is fragile, producing the pseudo-maturity patterns documented in the Maturity Model concept.

**Organization-level assessment:** Assessing the organization rather than a specific Vorhaben. Rejected because it is already well-served by existing frameworks (Gartner, MITRE, IBM). OIA's distinctive contribution is initiative-level assessment — see `context/concepts/oia-maturity-model.md §Comparison`.

**6-level scale:** Adding a ★★★★★★ "Autonomous" level. Rejected: 5 levels provides the right resolution. ★★★★★ (Optimized) already captures the self-improving state. A 6th level would be speculative and untestable.
