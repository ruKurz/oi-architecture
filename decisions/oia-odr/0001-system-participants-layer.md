# OIA-ODR-0001: System Participants Layer

**Decision:** The OIA model layer `#L9` is named **System Participants** and structured as a triad (Initiator / Actor / Beneficiary) with two explicit spectra (Autonomy & Decision Space · Accountability). The term "Actor" is freed from the layer name and reserved for the operative role within the triad.
**Status:** Proposed
**Date:** 2026-03-15
**Governs:** `#L9` System Participants layer · all child elements of `#L9`
**Implements:** OIA model v0.2.0

---

## Context

Classical enterprise architectures define "User" as a human with a login. In a world where agents, automated systems, and humans simultaneously interact with the same knowledge infrastructure, this definition falls short.

The term "User" is overloaded — it carries meaning in UI contexts, security contexts, and business contexts simultaneously. As soon as non-human entities enter the model, it creates ambiguity that cannot be resolved without an explicit architectural decision.

OIA requires a layer that explicitly describes: who acts, with what responsibility, and for whom. This layer must be legible to both human readers and agents consuming the architecture as governance input.

**Prior state:** Layer `#L9` was labeled "Actors" with two simple frames: Users (human) and Agents (AI). This structure did not distinguish accountability from autonomy, and did not make the governance relationship between Initiator and Actor explicit.

---

## Decision

The layer is renamed from **Actors** to **System Participants**. This frees the term "Actor" for the operative role within the triad.

The layer is structured as a **triad**: Initiator → Actor → Beneficiary.

### The Actor is the primary interaction entity of OIA

The Actor is the entity that engages with Capabilities, Features, and the Knowledge Core. OIA is built from the Actor's perspective. Initiator and Beneficiary have a qualitatively different relationship to the architecture:

- The **Initiator** interacts not operatively, but constitutively. It defines the governance frame — goals, permissions, ODRs. It sets the conditions under which Actors operate. Accountability always traces back here.
- The **Beneficiary** receives outcomes and thereby legitimizes the action. Feedback flows back into the architecture, but the Beneficiary does not control the process.

This asymmetry is intentional and is reflected visually: Initiator and Beneficiary are rendered with reduced visual weight relative to the Actor.

---

## Two spectra instead of categories

System, Human, and Agent are not positioned as equivalent categories. They are placed on two axes. This is the most consequential design decision in this layer.

### Spectrum 1: Autonomy & Decision Space
**System → Human → Agent** (less → more)

An Agent does not surpass the human in judgment. It surpasses the human in operational reach: parallel processing, continuous availability, no cognitive bias, no organizational embeddedness. A human in an organization filters before deciding — through hierarchy, political consideration, and cognitive limits. An Agent operates without these filters.

**The positioning of Agent to the right of Human on this axis is an intentional architectural statement — not a display error.** It will provoke disagreement. That disagreement is the point.

Between Human and Agent: a dashed connector labeled "converging". Capabilities are approaching. The axis separation remains.

### Spectrum 2: Accountability
**System → Agent → Human** (less → more) — deliberately inverted relative to Spectrum 1

The order is deliberately inverted relative to Spectrum 1. The human moves to the rightmost position on this axis — permanently.

An Agent operates within a decision space defined by ODRs. Accountability is delegated and explicitly bounded. There is no legal framework, no societal sanction mechanism. This is not a temporary limitation — it is a structural characteristic for the foreseeable future.

The human carries accountability through socialization, law, and culture — mechanisms no machine brings and that cannot be delegated.

---

## Key Insight

> Capabilities converge. Accountability does not.
> The human remains the legal and structural anchor — independent of agent autonomy.

---

## Consequences

**Easier:** The governance relationship between Initiator, Actor, and Beneficiary is explicit. Agents can be assigned decision spaces via ODRs without ambiguity. The accountability question has a structural answer, not just a policy answer.

**Harder:** The layer requires a custom renderer — the standard OIA layer renderer does not support the triad + spectrum + key insight layout. Addressed in issue #161.

**Required adjustments:** All references to the "Actors" layer name in documentation, prompts, and context files must be updated to "System Participants". The version bump to `0.2.0` is required (renamed layer = breaking change per ADR-0007).

For the full narrative depth, EU AI Act mapping, and Actor type definitions, see [context/concepts/system-participants.md](../../context/concepts/system-participants.md).

---

## Alternatives

| Option | Reason rejected |
|---|---|
| Keep "Actors" as layer name | Overloads the term — "Actor" is needed for the operative role in the triad |
| "Users & Agents" (two-frame structure) | Does not distinguish accountability from autonomy; does not model the Initiator-Actor-Beneficiary governance relationship |
| Single flat list of entity types | Loses the structural insight that autonomy and accountability scale in opposite directions |
| "Stakeholders" | Too generic; carries management consulting connotations; does not reflect the operative/constitutive distinction |

---

## Relations

**Governs:** `#L9` and all child elements (`#L9-triad-*`, `#L9-spectrum-*`)
**Related:** ODR-002 (Agent Governance Framework — future) · ODR-003 (Knowledge Core Access Control — future)
**Implemented by:** `oia-site/src/data/oia-model.json` `#L9` · `context/concepts/system-participants.md`
