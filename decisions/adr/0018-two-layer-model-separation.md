# ADR-0018: Two-Layer Model Separation — Rendering vs. Documentation

**Decision:** The OIA data layer is split into two distinct models: OIAModel (rendering) drives the visual diagram; OIADocumentModel (documentation) holds structural ground truth with full section traceability. The two models are never merged into a single schema.
**Status:** Proposed
**Date:** 2026-03-20
**Type:** BOTH
**Governed by:** —

## Context

The OIA project maintains two data artifacts that serve fundamentally different purposes:

**OIAModel** (`oia-site/src/data/oia-model.json`, v0.3) is a rendering model. Its schema is designed around visual layout concerns: layers, containers, items, panels, badges, and connections that drive the diagram renderer. Eight renderer modules in `oia-site/src/renderer/` depend on this schema. Stability is critical — schema changes break rendering.

**model-v3-full-mapping.json** is a documentation model developed separately. It maps the OIA source documents into a structured representation with `source_documents`, `elements`, `sections`, and `raw_text` fields. Its schema follows `schema_version = "v3"` with `mapping_mode = "strict_mechanical"`. It serves as structural ground truth for semantic analysis, not for rendering.

These two models solve different problems, have different change drivers, and have different consumers. A single unified schema would couple the renderer's stability requirements to the documentation model's evolution — or vice versa. The documentation model's section-level granularity and raw text fields have no meaning in a rendering context.

A decision is needed to formally establish this separation before implementation, so that future contributors understand the boundary and do not conflate the two concerns.

## Consequences

**Easier:**
- Renderer is fully isolated from documentation model changes — a documentation schema update never risks breaking visual output
- Documentation model can evolve freely (new sections, schema refinements, semantic annotations) without renderer review
- Clear ownership: renderer pipeline owns OIAModel; semantic extraction pipeline owns OIADocumentModel
- Type safety enforced per layer: `types.ts` for OIAModel, `types-v3.ts` for OIADocumentModel

**Harder:**
- Two model files and two type definitions to maintain
- Element ID coordination between layers must be explicitly decided and documented (independent IDs vs. coordinated IDs)
- Consumers of both models must know which export to use (`model` vs. `documentModel` from `model.ts`)

**Required adjustments:**
- `oia-site/src/data/types-v3.ts` — new type file for OIADocumentModel
- `oia-site/src/data/oia-model-v3.json` — documentation model as committed repo artifact
- `oia-site/src/data/model.ts` — extended with a second export (`documentModel`) alongside the existing `model` export
- Concept document defining boundary rules between both layers (see #215)

## Alternatives

| Option | Reason rejected |
|---|---|
| Single unified model | Schema complexity grows unmanageable; renderer couples to documentation semantics (e.g. `raw_text`, `sections`); a schema change for semantic purposes risks breaking visual output |
| Adapter / projection layer | Adds indirection without structural isolation; the adapter itself still requires a second schema internally; increases cognitive overhead without reducing coupling |
| Keep documentation model local only (never commit) | Blocks semantic extraction from being reproducible and version-controlled; prevents collaboration and CI integration |
