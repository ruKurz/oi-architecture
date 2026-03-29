# Concept: OIA Maturity Model

**Status:** Active — Approved in founding session 2026-03-29
**Implements:** Issue #239
**Precondition for:** #240 (layer definitions), #247 (Maturity Rubric v1)

---

## Purpose

**Tagline:**
> The OIA Maturity Model evaluates a project's contribution to transforming an organization into a more intelligent one and supports the development of necessary capabilities.

**Full purpose statement:**
> The OIA Maturity Model evaluates a project's contribution to developing a more intelligent, AI-supported organization and makes necessary capabilities visible. It accompanies implementation with clear checkpoints to consistently translate identified potential into change. Its goal is to align projects so that they measurably contribute to the transformation of the organization.

---

## Assessment Object

The model assesses a **Vorhaben** (project, system, or product initiative) — not the organization as a whole.

However, every layer score can be translated into an organizational statement. This translation is the bridge between developer feedback and management decision-making. See [Organizational Reading](#organizational-reading) below.

---

## 5-Star Scale

| Stars | Name | Core characteristic |
|---|---|---|
| ★☆☆☆☆ | **Absent** | The layer does not exist or exists only by accident |
| ★★☆☆☆ | **Implicit** | Present but undocumented — person-dependent, not institutionalized |
| ★★★☆☆ | **Defined** | Named, documented, owner present |
| ★★★★☆ | **Connected** | Integrated into the OIA flow — input/output to neighboring layers explicit |
| ★★★★★ | **Optimized** | Feedback loop active — the layer improves without external trigger |

**Design rationale:** 5 levels. 4 would be psychologically unfavorable (no clear midpoint). 3 too coarse. 5 is the right resolution.

---

## Assessment Output Format (per layer)

The value lies not in the score — but in what is done with it. Each layer assessment produces the following structured output:

```
Layer: [Name]
Current state: ★★★☆☆ Defined

What this means:
  Symptoms and characteristics at this level — concrete, recognizable.

Next step: ★★★★☆ Connected

  What you gain:
    Business benefit — concrete, measurably formulated.

  What needs to be done:
    1. Action (concrete, actionable)
    2. Action
    3. Action

  How to measure progress:
    Leading KPI:  What shows up first
    Lagging KPI:  What is measurable at the end

  Priority: High / Medium / Low
    Rationale: Why now — or why wait
```

**Three design principles:**
- **Always only the next step** — not all 5 levels at once
- **Leading + Lagging KPIs separated** — Lagging metrics arrive late and demotivate; Leading metrics show early whether you are on the right track
- **Priority with rationale** — derived from the Priority Guidance Model, not from intuition

---

## Priority Guidance Model — Three Zones

A Stop-Gate model: each zone must reach its threshold before the next zone is meaningful to address.

```
ZONE 1 — Foundation (gates must be open)
  Data Sources (L2)           ≥ ★★★ required
  AI & Cognitive Infra (L1)   ≥ ★★★ required
          ↓ only if both ≥ ★★★

ZONE 2 — Capabilities (core value is created here)
  Knowledge Core (L3)         target: ★★★★
  Cognitive Capabilities (L5) target: ★★★★
  Features & APIs (L4)        target: ★★★★
  Situation & Context (L8)    target: ★★★
          ↓ only if Zone 2 ≥ ★★★

ZONE 3 — Impact (where business value becomes visible)
  Solutions & Applications (L6) target: ★★★★
  System Participants (L9)      target: ★★★
  Use Cases (L7)                target: ★★★★
  Business Outcome (L10)        target: ★★★★
```

**Core rule:** A layer cannot sustainably reach ★★★★ if the layer below it is at ★★. That is pseudo-maturity.

**Decision-maker statements per gate:**

| Zone threshold not met | What it means |
|---|---|
| Zone 1 < ★★★ | No viable data foundation. Every AI initiative is built on sand. |
| Zone 2 < ★★★ | Data available, but no operational intelligence. Retrieval without strategy. |
| Zone 3 < ★★★ | Capabilities present, but not connected to user reality and business outcome. ROI remains invisible. |

---

## Organizational Reading

Two mechanisms translate a Vorhaben score into an organizational statement.

### Mechanism 1 — Per-Layer Translation Template

| Score | What it says about the organization |
|---|---|
| ★☆☆☆☆ | The capability does not exist as a structural competency. What exists is person-dependent and not reproducible. |
| ★★☆☆☆ | Experiential knowledge of individuals — not institutionalized, lost when staff changes. |
| ★★★☆☆ | Conscious competency. Documented and transferable. |
| ★★★★☆ | Part of operational practice. Generates demonstrable value — not just within the project. |
| ★★★★★ | Systematic learning. Improves without external trigger. |

### Mechanism 2 — Pattern Library

Four recurring organizational patterns that emerge from typical score combinations. The library is open: every real assessment may add a new pattern.

**Pattern A — "Data-Rich, Context-Poor"**
Data Sources ★★★★ / Situation & Context ★★ / Cognitive Capabilities ★★★
Diagnosis: Complete data, irrelevant results. IT-driven, without business unit involvement.

**Pattern B — "Capability Without Foundation"**
Data Sources ★★ / AI Infrastructure ★★ / Solutions ★★★★
Diagnosis: Pseudo-maturity. Looks good, collapses under load. Typical: demo-data projects.

**Pattern C — "Technology Without Business"**
Cognitive Capabilities ★★★★ / Features ★★★★ / Business Outcome ★★ / Use Cases ★★
Diagnosis: Technically excellent, commercially invisible. Engineering without decision-maker connection.

**Pattern D — "Governed Intelligence"** *(the target pattern)*
System Participants ★★★★ / Situation & Context ★★★★ / Data Sources ★★★★ / Business Outcome ★★★
Diagnosis: Governance, context, and data aligned. The rarest pattern — and the most desirable.

---

## Relationship to Other Concepts

- **OIA Layers (L1–L10):** each layer is an independent assessment dimension
- **C1 Organizational Entities / C2 Data Pipeline:** cross-cutting concepts, not assessed as standalone layers — they are assessed through the layers they serve (L2, L3)
- **ADR/ODR decisions:** this concept does not contradict any active decision record; it adds a new assessment dimension above the architectural model
