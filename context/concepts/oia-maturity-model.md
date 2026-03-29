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

## Comparison with Existing Maturity Models

*Research conducted 2026-03-29. Seven frameworks reviewed: CMMI, Gartner AI Maturity Model, Microsoft AI/Agentic Maturity Models, DAMA DMBoK/DMM, IBM AI Ladder, MITRE AI Maturity Model, Siemens KMMM.*

### Coverage Map

| OIA Dimension | Closest existing coverage |
|---|---|
| AI & Cognitive Infrastructure | MITRE "Technology Enablers", IBM AI Ladder "Collect/Organize", Gartner "Engineering" |
| Data Sources | DAMA DMBoK (11 knowledge areas), IBM "Collect", MITRE "Data" |
| Knowledge Core | IBM "Organize" (partial), DAMA "Metadata/Content" (partial) |
| Features & APIs | Gartner "Engineering" (partial), MITRE "Technology Enablers" (partial) |
| Cognitive Capabilities | Gartner Analytics levels (Predictive/Prescriptive/Cognitive) |
| Solutions & Applications | IBM AI Ladder "Infuse", MITRE "Performance and Application" (abstract) |
| Use Cases | KMM "Strategy & Knowledge Goals" (indirect) |
| **Situation & Context** | **No meaningful coverage in any model reviewed** |
| System Participants | KMM "People & Competencies", Microsoft Agentic "Org Readiness" |
| Business Outcome | Gartner "Transformational" (implicit only) |

### OIA's Distinctive Contribution

Four claims that no reviewed model makes:

1. **Initiative as assessment object.** Every existing model assesses an organization's overall posture. OIA assesses a specific Vorhaben on its contribution to building organizational intelligence — a different unit of analysis that enables portfolio-level governance.

2. **Situation/Context as a scored dimension.** Not one of the seven models treats context awareness (user, domain, task, time, language, access) as an architectural assessment dimension. OIA's thesis that intelligence is always situated is structurally unique.

3. **Stop-Gate Zone Architecture.** Existing models use flat five-level scales. OIA introduces explicit quality gates — Zone 1 must reach ★★★ before Zone 2 is meaningful. This enforces foundation-first sequencing, not just level progression.

4. **Translation to organizational capability statements.** OIA converts initiative scores into capability claims about the organization. No reviewed model produces capability inventory contributions — they produce maturity levels or readiness indices.

### What OIA Borrows from Existing Models

- **MITRE:** Spider/radar visualization per dimension; single-question-per-dimension scoring format — proven, low-overhead
- **Gartner Analytics Maturity:** The Descriptive → Cognitive sub-scale as a reference for scoring the Cognitive Capabilities dimension
- **IBM AI Ladder:** Collect → Organize → Analyze → Infuse as a sequential dependency illustration — directly supports the Stop-Gate rationale
- **Microsoft Agentic MM:** "Value Realization" pillar structure as a template for the Business Outcome dimension scoring rubric
- **DAMA DMBoK:** Per-dimension sub-scoring (Activity, Tools, Standards, People separately) as an enrichment path for future rubric versions

### Right to Exist

Yes — on three defensible grounds:

1. **Gap in unit of analysis.** No public model answers: *Does this specific initiative advance our journey toward an intelligent organization?* This gap is real and practically significant for CIOs managing AI portfolios.

2. **Architectural completeness as criterion.** Existing models assess adoption posture or process maturity. OIA assesses whether an initiative contributes to a coherent, connected intelligence stack — a structurally different evaluation criterion.

3. **Full Knowledge → Action chain.** OIA is the only framework that models the complete chain from raw data to business outcome across all architectural layers and translates scores into organizational capability statements. IBM's AI Ladder covers four of the ten layers and produces no capability statements.

**Positioning caveat:** OIA must not position itself as a competing organizational AI readiness model — Gartner, MITRE, and Microsoft have strong incumbency there. The correct positioning is as a complementary *initiative-level architectural completeness assessment* for a gap the incumbents explicitly do not fill.

---

## Relationship to Other Concepts

- **OIA Layers (L1–L10):** each layer is an independent assessment dimension
- **C1 Organizational Entities / C2 Data Pipeline:** cross-cutting concepts, not assessed as standalone layers — they are assessed through the layers they serve (L2, L3)
- **ADR/ODR decisions:** this concept does not contradict any active decision record; it adds a new assessment dimension above the architectural model
