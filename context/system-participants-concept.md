# System Participants — Concept

## What this layer describes

The System Participants layer (`#L9`) defines who initiates actions, who carries them out, and for whom the results are created — and with what accountability.

Classical enterprise architectures define "User" as a human with a login. In a world where agents, automated systems, and humans simultaneously interact with the same knowledge infrastructure, this definition fails. The term "User" is overloaded across UI, security, and business contexts. As soon as non-human entities enter the model, it creates ambiguity that cannot be resolved without an explicit architectural decision.

OIA resolves this with a **triad** and two explicit **spectra**.

---

## The Triad: Initiator → Actor → Beneficiary

The layer is structured around three distinct roles:

### Initiator (Purple — Accountable)

The entity that defines the governance frame: goals, permissions, organizational rules. The Initiator interacts with OIA **constitutively**, not operatively — it sets the conditions under which Actors operate. Accountability always traces back to the Initiator. Always reducible to a human or organization.

### Actor ★ (Teal — Responsible)

The primary interaction entity of OIA. The Actor engages with Capabilities, Features, and the Knowledge Core. **OIA is built from the Actor's perspective.** The Actor can be a Human, an Agent, or a System. The star symbol marks this as the central role in the triad.

### Beneficiary (Amber — Purposive)

The entity for whom the outcome creates value. The Beneficiary legitimizes the action. Feedback flows back into the architecture from the Beneficiary, but the Beneficiary does not control the process. Can be a human, team, or system.

**Visual principle:** Initiator and Beneficiary are rendered with reduced visual weight relative to the Actor, reflecting Actor-centricity without requiring a text label.

---

## Spectrum 1: Autonomy & Decision Space

**Order (less → more): System · Human · Agent**

| Position | Entity | Description |
|---|---|---|
| 1 | **System** (Gray) | Configured · deterministic. No independent decision space — executes what the Initiator configured. |
| 2 | **Human** (Teal) | Guided · contextual judgment. Decides contextually, embedded in hierarchy, political consideration, and cognitive limits. |
| 3 | **Agent** (Teal) | Goal-directed · autonomous. Greater operational reach: parallel processing, continuous availability, no cognitive bias, no organizational embeddedness. |

Between Human and Agent: a dashed connector labeled "converging". Capabilities are approaching. The axis separation remains.

> **The positioning of Agent to the right of Human on this axis is an intentional architectural statement — not a display error.** It will provoke disagreement. That disagreement is the point.

---

## Spectrum 2: Accountability

**Order (less → more): System · Agent · Human** — deliberately inverted relative to Spectrum 1

| Position | Entity | Description |
|---|---|---|
| 1 | **System** (Gray) | Inherits from Initiator. No independent accountability. |
| 2 | **Agent** (Teal) | ODR-bounded · delegated. Accountability is delegated and explicitly bounded by Organizational Decision Records. No legal framework, no societal sanction mechanism. |
| 3 | **Human** (Purple) | Legal · structural · always. Carries accountability through law, socialization, and culture. Permanently at the rightmost position — independent of agent autonomy. |

**The asymmetry of the two spectra is the core architectural statement of this layer.** Autonomy and accountability scale in opposite directions. This is not a temporary limitation — it is a structural characteristic for the foreseeable future.

---

## Key Insight

> **Capabilities converge. Accountability does not.**
> The human remains the legal and structural anchor — independent of agent autonomy.

---

## Consequences for the OIA model

Agents in OIA do not require a capability declaration — that belongs to the Cognitive Capabilities layer. They require a **governance frame**: explicitly defined decision spaces, documented as ODRs.

Without this frame, accountability cannot be assigned. The System Participants layer poses the question. ODRs answer it.

---

## Design notes

- Color system: Purple = Initiator/Accountability anchor, Teal = operative Actor/Human/Agent, Gray = System/neutral, Amber = Beneficiary
- All blocks are clickable — onclick opens further explanation (the OIA-ODR text)
- Typography: Space Mono for labels, DM Sans for body text, dark-mode palette — consistent with OIA V2 diagram
- The "converging" dashed line between Human and Agent on Spectrum 1 is a deliberate signal, not a boundary

---

## Formal governance

This concept is governed by [OIA-ODR-0001](../decisions/oia-odr/0001-system-participants-layer.md).
