# Concept: Two-Layer Model Separation

**Status:** Active
**Implements:** [ADR-0018](../../decisions/adr/0018-two-layer-model-separation.md)
**Guides:** #216 (implementation)
**Date:** 2026-03-20

---

## 1. Purpose

This document formalizes the boundary between the two distinct model layers established by ADR-0018. It does not re-argue the decision — it translates that decision into explicit, actionable rules that govern implementation.

ADR-0018 decides *that* the layers must be separated and *why*. This document decides *how* that separation is enforced: which layer owns what, where the boundary is drawn, and what the contracts between layers look like. It is the reference point for any implementation that touches either model layer.

Without this document, the risk identified in ADR-0018 — that presentation and semantic concerns silently merge over time — cannot be systematically prevented.

---

## 2. Layer Descriptions

| Aspect | Presentation / Projection Layer | Semantic Model Layer |
|---|---|---|
| **Role** | Derived rendering artifact | Source of truth |
| **Purpose** | Drive the visual renderer; control layout, structure, and display behavior | Capture organizational meaning, structure, and traceability to source documents |
| **Authority** | None over semantic content — purely projective | Sole authority over organizational structure and meaning |
| **Schema reference** | `oia-site/src/data/types.ts` | `oia-site/src/data/types-doc.ts` (to be introduced in #216) |
| **File reference** | `oia-site/src/data/oia-model.json` | `model-v3-full-mapping.json` (current structural base) |
| **Owner** | Renderer pipeline | Semantic extraction pipeline |
| **Change policy** | Changes only when the visual architecture evolves | Changes only when source documents or organizational meaning changes |
| **Evolution pressure** | Visual stability, layout clarity | Semantic correctness, traceability, expressiveness |

The asymmetry is foundational: the Semantic Model Layer exists independently of any rendering concern. The Presentation / Projection Layer cannot exist without deriving from the Semantic Model Layer. This dependency is strictly one-directional and must not be reversed.

### 2.1 Projection Pipeline

The Projection Pipeline is the explicit third element in this architecture. It is not a layer — it is the transformation stage that sits between the two layers and produces the Presentation / Projection Layer from the Semantic Model Layer.

| Aspect | Projection Pipeline |
|---|---|
| **Role** | Transformation stage — not a storage layer |
| **Input** | Semantic Model Layer (read-only) |
| **Output** | Presentation / Projection Layer (write) |
| **Owner** | Renderer pipeline (same ownership as Presentation / Projection Layer) |
| **Location** | `oia-site/src/data/` — projection logic co-located with the loader it feeds |
| **Responsibility** | ID mapping (scoped mapping), structural transformation, field selection |

The Projection Pipeline is the only place where the two layers are in contact. No other module, file, or pipeline stage may read from the Semantic Model Layer and write to the Presentation / Projection Layer simultaneously. Cross-layer access outside the Projection Pipeline is an architectural violation.

---

## 3. Boundary Rules

These rules are explicit architectural constraints, not guidelines.

### 3.1 Cross-Cutting Ownership

Cross-cutting concepts (e.g. elements that appear in multiple contexts, such as C1/C2 categories) are **owned exclusively by the Semantic Model Layer**.

The Presentation / Projection Layer may render cross-cutting concepts as visual constructs, but it does not define, interpret, or constrain them. Any attribute that carries semantic meaning — including classification, category membership, or relationship type — is defined in the Semantic Model Layer.

### 3.2 Renderer Access

The renderer **must not access Semantic Model Layer fields directly**. It operates only on projected structures — those defined in `types.ts` and loaded via the Presentation / Projection Layer's designated loader.

No renderer module may import from the Semantic Model Layer's schema or data file. If a semantic concept must be rendered, it is first projected into a presentation structure; the renderer then operates on that projection.

### 3.3 Schema Separation

No TypeScript type, interface, or schema may serve both layers. A type defined in `types.ts` is a presentation type. A type defined in `types-doc.ts` is a semantic type. They are never merged, extended across the boundary, or used interchangeably.

Shared primitive types (e.g. `string`, `boolean`) are not layer constructs and are not subject to this rule. The constraint applies to domain types that carry structural or semantic meaning.

### 3.4 Semantic Authority

Only the Semantic Model Layer defines what an OIA element *means*. This includes:

- what type an element is (layer, capability, actor, etc.)
- what relationships between elements signify
- what the source basis for any structural claim is

The Presentation / Projection Layer may assign visual properties (layout, color, icon, order) but must not encode, override, or imply semantic meaning through those assignments.

### 3.5 Dependency Direction

The dependency between layers is **strictly one-directional**: Semantic Model Layer → Presentation / Projection Layer.

Any data flow, import, or structural reference that runs from the Presentation / Projection Layer toward the Semantic Model Layer is an architectural violation. Projections derive from the semantic model; the semantic model is never shaped by projection requirements.

### 3.6 Enforcement

The boundary rules above are verifiable constraints — not conventions that rely on discipline alone. The following mechanisms enforce them:

**Folder boundary:** Semantic Model Layer artifacts (`types-doc.ts`, `document-model.ts`) are placed in a dedicated subfolder (e.g. `oia-site/src/data/doc/`). Renderer modules in `oia-site/src/renderer/` have no structural reason to reach into that subfolder; any such import is immediately visible as a boundary violation during code review.

**Import guard (ESLint rule):** A `no-restricted-imports` rule configured in `eslint.config.ts` prohibits imports from the semantic layer's schema and loader files in renderer modules. This makes boundary violations a lint error, not a review finding.

**Loader separation:** `model.ts` and `document-model.ts` are separate files with no shared imports. A renderer that only knows `model.ts` cannot accidentally access semantic structures — there is no shared entry point.

**Type opacity:** No renderer function accepts `OIADocumentModel` or any type from `types-doc.ts` as a parameter. TypeScript's structural type system would allow accidental substitution; named types from separate schema files prevent silent coupling.

These mechanisms are complementary. Folder boundaries are visible; lint rules are automatic; loader separation is structural; type opacity is enforced by the compiler.

---

## 4. Identity Strategy

### Options

**Coordinated IDs** — semantic entities and their projections share the same identifier. A projected element carries the same `id` as the semantic entity it represents.

**Independent IDs** — each layer manages its own identifier space. No structural relationship between IDs across layers is assumed or enforced.

**Scoped mapping** — IDs are independent, but an explicit mapping layer maintains a stable relationship between semantic entities and their projections.

### Evaluation

Coordinated IDs introduce implicit coupling: any change to semantic entity identity propagates directly to the presentation layer, creating a dependency in the wrong direction. The rendering stability of the Presentation / Projection Layer becomes tied to the identity model of the Semantic Model Layer.

Independent IDs fully decouple the layers but require an explicit mapping to relate them — which is effectively scoped mapping with no documented contract.

Scoped mapping makes the relationship explicit and controlled without requiring identity alignment. Each layer manages its own IDs; a defined mapping table — part of the Projection Pipeline — maintains the correspondence. The mapping lives in the Projection Pipeline's transformation stage (`oia-site/src/data/doc/projection.ts` or equivalent), not in either source layer. It is owned by the renderer pipeline.

### Decision: Scoped Mapping

The system uses **scoped mapping**. Semantic entities and projected elements carry independent identifiers. The projection mechanism defines and owns the mapping between them.

**Rationale:**
- Semantic entity identity can evolve without breaking presentation stability
- Projection identity can evolve (e.g. visual refactoring) without affecting semantic structure
- The mapping is explicit, auditable, and owned by a defined pipeline stage
- Consistent with the foundational principle that projections derive from the semantic model but are not structurally identical to it

---

## 5. Export Contract

### Options

**Single export point (`model.ts`)** — one file exports both the Presentation / Projection Layer model and the Semantic Model Layer model. Consumers import from one location.

**Separate loaders** — each layer has its own loader file. `model.ts` exports only the presentation model; a separate `document-model.ts` (or equivalent) exports the semantic model.

### Decision: Separate Loaders

Each layer is exported from its own loader file:

- `model.ts` — exports only the Presentation / Projection Layer (`OIAModel`)
- `document-model.ts` (to be introduced in #216) — exports only the Semantic Model Layer (`OIADocumentModel`)

**Rationale:**
- Ownership is unambiguous: a single file cannot be the loader for two structurally independent layers without coupling their lifecycle
- Import paths enforce the boundary — a renderer importing from `model.ts` cannot accidentally access semantic structures
- Each loader evolves independently; future extensions (e.g. async loading, database-backed loading) can be applied to one layer without affecting the other
- Consistent with ADR-0018's requirement that ownership is assigned per layer

`model.ts` is not modified to serve as a combined entry point. It remains exclusively the presentation model loader.

---

## 6. Constraints from ADR-0018

The following constraints from [ADR-0018](../../decisions/adr/0018-two-layer-model-separation.md) are binding on all implementation work. They are referenced here, not restated.

### No Unified Schema

ADR-0018: *"The system must not introduce any schema that combines semantic and presentation concerns."*

**Implication for development:** Any type considered for shared use across layers must instead be duplicated with layer-specific definitions, or the concept must be re-examined to determine which layer it truly belongs to.

**Implication for validation:** A type appearing in both `types.ts` and `types-doc.ts` with the same shape is a code smell, not a solution. Shape similarity does not imply shared ownership.

### Semantic Layer as Source of Truth

ADR-0018: *"The Semantic Model Layer is the sole source of truth for organizational structure and meaning."*

**Implication for future extensions:** Any new structural claim about the OIA — a new element type, a new relationship, a new layer — must originate in the Semantic Model Layer. It may subsequently be projected into the Presentation / Projection Layer, but it cannot originate there.

### One-Directional Dependency

ADR-0018: *"The dependency direction is strictly asymmetric: Semantic Model → Projection; any reversal is an architectural violation."*

**Implication for validation:** Static analysis or import guards should be used to verify that no renderer module imports from the semantic layer's schema or data file. This constraint is verifiable and must be enforced programmatically where possible.

### Projection Has No Semantic Authority

ADR-0018: *"Presentation artifacts derived from the semantic model are projections — they have no authority to define or constrain semantic structure."*

**Implication for future extensions:** If a rendering requirement cannot be satisfied without changing the semantic model, the correct response is to examine whether the semantic model is incomplete — not to add rendering properties to it. Semantic model changes driven by rendering needs are a violation of this constraint.
