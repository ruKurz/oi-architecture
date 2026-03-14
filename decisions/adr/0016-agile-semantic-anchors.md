# ADR-0016: Agile Process Semantic Anchors

**Decision:** Four agile methodology anchors are added to the OIA active anchor set: Five Whys (Ohno), MoSCoW (Clegg), Testing Pyramid (Fowler/Cohn), and YAGNI (Jeffries/Beck). Each anchor maps to a specific, already-practised OIA process step and must be applied automatically by AI tooling in that context.
**Status:** Proposed
**Date:** 2026-03-28
**Type:** DEV
**Governed by:** [ADR-0010](./0010-semantic-anchors-as-vocabulary-layer.md)

## Context

ADR-0010 established Semantic Anchors as the shared vocabulary layer for OIA. Sprint 2026-03-28 introduced formal agile process practices (ODR-0002, ADR-0014, ADR-0015) that create concrete, recurring process steps where AI tooling must apply consistent methodology knowledge.

Without anchors, the AI agent receives no signal to apply the correct methodology at each step — it must either be re-explained each time or the specific application context is underspecified. Anchors solve this by mapping a methodology name to a defined application context in OIA.

**Selection criteria (all four meet all criteria):**
1. Already practised in OIA — not aspirational or speculative
2. Precise: the anchor activates a specific methodology, not a vague concept
3. Rich: the anchor unlocks substantial prior knowledge (proponents, practices, failure modes)
4. Attributable: has a canonical source (named author / framework)
5. Available in the Semantic Anchors library (https://llm-coding.github.io/Semantic-Anchors/)

**Anchors selected:**

| Anchor | Author | Activates in | OIA step |
|---|---|---|---|
| Five Whys | Taiichi Ohno | Sprint retro B-1 | Root cause analysis of deviations — stop at structural cause, not symptoms |
| MoSCoW | Dai Clegg | Sprint planning C-3 | Prioritization when sprint scope exceeds time-box — explicit Must/Should/Could/Won't labeling |
| Testing Pyramid | Mike Cohn / Martin Fowler | DEV test strategy | Unit (many) → integration (fewer) → E2E (few) — anti-pattern: inverted pyramid |
| YAGNI | Ron Jeffries / Kent Beck | Every DEV implementation task | Scope discipline — implement only what is needed now, avoid premature abstraction |

Quality attribute affected: process consistency, AI tooling alignment, methodology traceability.

## Consequences

**Easier:** AI agents apply the correct methodology at each process step without re-explanation. Retrospectives produce structural improvement measures (not symptom fixes). Sprint planning trade-offs are explicit and documented. Test strategy follows a consistent pyramid shape. Implementation scope is held to the minimum needed.

**Harder:** Prompt authors must know which anchors apply to their context. The anchor set grows with each new process practice — the catalog in `context/semantic-anchors.md` must be kept current.

**Required adjustments:**
- `context/semantic-anchors.md` — four new entries under "DEV Anchors — Agile Process" section (version bumped to 2.0.0)
- `CLAUDE.md` — four new auto-apply rules in the DEV Anchors section
- `prompts/development/sprint-retro.md` — B-1 step references Five Whys by name
- `prompts/development/sprint-planning.md` — C-3 step references MoSCoW by name

## Alternatives

| Option | Reason rejected |
|---|---|
| Add anchors ad-hoc without ADR | No traceability for why an anchor was chosen. Future maintainers cannot evaluate whether the anchor is still appropriate. ADR-0010 requires an ADR or Issue for anchor additions. |
| Use different anchors for the same concepts | DSDM/MoSCoW, Toyota/Five Whys, and XP/YAGNI are canonical, widely-known, and in the library. Alternative framings (e.g., "prioritization matrix", "root cause tree") are less precise and less activating. |
| Omit the Testing Pyramid (OIA has minimal tests) | The Testing Pyramid applies at the strategy level — it prevents the inverted pyramid anti-pattern from forming as DEV features grow. Relevant now, not only when the test suite is larger. |
| Add all anchors from the library | Anchor overload degrades signal quality. Only anchors that map to a specific, currently-practised OIA step are added. |
