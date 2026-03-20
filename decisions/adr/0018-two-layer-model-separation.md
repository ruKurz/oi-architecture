# ADR-0018: Separation of Presentation Layer and Semantic Data Layer

**Decision:** The OIA architecture enforces a strict separation between a Presentation Layer (rendering-oriented) and a Semantic Data Layer (structure- and meaning-oriented). These layers are conceptually and structurally independent, must not be unified into a single model, and follow a one-way dependency: Semantic Data → Presentation, never the inverse.
**Status:** Proposed
**Date:** 2026-03-20
**Type:** BOTH
**Governed by:** —

## Context

The OIA aims to model an organization as a semantically structured system — not merely as a visual diagram. This introduces two fundamentally different concerns that evolve under conflicting pressures:

| Concern | Optimized for |
|---|---|
| Presentation | clarity, layout, usability, visual stability |
| Semantic Data | correctness, traceability, expressiveness, extensibility |

**Representation vs. Meaning.** How the architecture is *displayed* and what it *means* are not the same problem. Coupling them forces trade-offs that degrade both sides: visual concerns leak into data structures, semantic structures get distorted by layout needs, and schema evolution becomes constrained by rendering stability.

**Increasing semantic depth.** The OIA is evolving toward explicit semantic structures, ontology derivation, machine-readable relationships, and traceability to source statements. This requires a semantically rich, structurally precise data layer that is independent of any visual representation.

**Future system evolution.** Planned extensions include semantic extraction pipelines, ontology and schema generation, database-backed representations (graph or relational), API-based access to architecture knowledge, and AI-supported reasoning. All of these require a stable, presentation-independent data model. A presentation-coupled model cannot serve as the foundation for any of these without architectural rework.

**Risk of model conflation.** Without an explicit decision, presentation and semantic concerns tend to merge over time: the renderer becomes the de-facto schema owner, UI constructs carry implicit semantic assumptions, and the data model drifts toward serving display rather than meaning. This leads to loss of semantic integrity and blocks the transition to an intelligent organizational knowledge system.

## Consequences

**Easier:**
- Semantic model and presentation layer evolve independently — changes in one do not constrain the other
- Databases (graph, relational) can be introduced without UI constraints
- Clean foundation for APIs and AI integration
- Clear ownership of each layer; responsibilities do not overlap
- Traceability, reasoning, and querying capabilities can be built on a stable, presentation-free data model

**Harder:**
- Explicit transformation between layers is required wherever presentation derives from semantic data
- Multiple representations of the same conceptual elements must be managed
- Identifiers and mapping rules between layers must be explicitly coordinated

**Required adjustments:**
- Defined mapping between semantic entities and visual elements (where they coexist)
- Explicit validation to prevent concern leakage across the layer boundary
- Clear identifier strategy across layers (coordinated vs. independent)
- Ownership assigned per layer: semantic pipeline owns the data layer; renderer pipeline owns the presentation layer

## Alternatives

| Option | Reason rejected |
|---|---|
| Unified model (presentation + data) | Mixes concerns, creates bidirectional coupling, blocks evolution toward semantic and database-backed systems; schema changes for semantic purposes risk breaking rendering |
| Presentation-driven model as sole model | Reduces the architecture to a visualization artifact; loses semantic depth required for reasoning, querying, and AI integration |
| Semantic model as optional extension of presentation model | Prevents consistent evolution; introduces ambiguity about which model is the source of truth; semantic concerns remain subordinate to visual constraints |

## Strategic Impact

This decision establishes the architectural foundation for transforming the OIA from a visual architecture description into a semantically explicit, machine-interpretable organizational knowledge system. It is a prerequisite for ontology-driven architecture, semantic querying, AI-assisted reasoning, and database-backed architecture models.
