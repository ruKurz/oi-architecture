# ODR-NNNN: Noun-phrase title

**Decision:** One or two sentences, active voice. What was decided and why — upfront.
**Status:** Proposed
**Date:** YYYY-MM-DD
**Level:** Org
**Binding for:** All | Users | Agents | Contributors
**Derives from:** ODR-XXXX | Gov constraint (e.g. GDPR) | — (if no parent)
**Implements:** ADR-XXXX, ADR-YYYY | — (if no direct Arch-layer implementation yet)

> **Field note:** ODRs do NOT carry a `governed-by` field. That field belongs on ADRs — it points upward from an architectural decision to the ODR that mandated it. ODRs point downward via `implements`. The directionality is asymmetric by design: ODR → ADR via `implements`; ADR → ODR via `governed-by`.

## Context

Facts that made this decision necessary. Neutral language — no judgement yet.

What organizational situation, external constraint (Gov layer), or strategic goal prompted this choice?
Reference any higher-level norm or regulation that applies.

## Consequences

**For Users:** What this means for humans acting within this organization or project.
**For Agents:** What this means for AI systems and automated workflows acting within the system.
**Easier:** What becomes simpler or clearer as a result of this decision.
**Harder:** What requires more discipline or creates overhead.
**Required adjustments:** What else must change — related ADRs, processes, or documents.

## Alternatives

| Option | Reason rejected |
|---|---|
| Alternative A | Why not chosen |
| Alternative B | Why not chosen |

## Related decisions

| Record | Relationship |
|---|---|
| ODR-XXXX | Derives from (parent organizational decision) |
| ADR-XXXX | Implements this ODR at the architectural layer |
