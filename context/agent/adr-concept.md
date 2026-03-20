# ADR — Architecture Decision Record

**Status:** Active
**Related:** [ODR-0003](../decisions/odr/0003-adopt-adrs-as-arch-layer-documentation-practice.md) · [ADR-0004](../decisions/adr/0004-adr-format-mueller-dienst.md)

---

## What is an ADR?

An **Architecture Decision Record** documents a decision made about the technical architecture, tooling, or structure of a software project. It captures:

- **What** was decided (the decision itself, stated upfront)
- **Why** it was decided (context and driving forces)
- **What alternatives were rejected** (and why)
- **What consequences** follow from the decision

The defining property is **traceability**: future contributors — human or AI — can understand not just *what* the current rule is, but *why it was chosen* over alternatives. This prevents decisions from becoming invisible conventions that no one questions or can justify.

> *"An architecture decision record is a short text file in a format similar to an Alexandrian pattern. Each record describes a set of forces and a single decision in response to those forces."*
> — Michael Nygard, [Documenting Architecture Decisions](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions) (2011)

---

## Canonical References

| Source | Description |
|---|---|
| [Nygard (2011)](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions) | Original ADR concept — the foundational article by Michael Nygard |
| [adr.github.io](https://adr.github.io/) | Community hub: formats, tools, examples, and the ADR GitHub organization |
| [Müller / Dienst (fiveandahalfstars.ninja)](https://www.fiveandahalfstars.ninja/blog/2017/2017-07-29-ADR) | The format used in OIA: Decision first, mandatory Alternatives table, Easier/Harder consequences |
| [MADR](https://adr.github.io/madr/) | Markdown Architectural Decision Records — an alternative format (not used in OIA) |
| [ADR Tools (Nygard)](https://github.com/npryce/adr-tools) | CLI tooling for Nygard-format ADRs |

---

## ADRs in OIA

OIA uses the **Müller/Dienst format** (not Nygard, not MADR) for the reasons documented in [ADR-0004](../decisions/adr/0004-adr-format-mueller-dienst.md):

1. **Decision first** — the decision is the first thing a reader sees, before any context
2. **Mandatory Alternatives** — the author must explicitly state what was rejected and why
3. **Easier/Harder split** — consequences are separated into what becomes simpler and what requires more discipline

**Governance layer:** ADRs sit at the **Arch layer** of the OIA governance hierarchy (Gov → **Org** → **Arch**). [ODR-0003](../decisions/odr/0003-adopt-adrs-as-arch-layer-documentation-practice.md) is the Org-layer decision that mandates ADR use. ADR-0004 is the Arch-layer decision that specifies the format.

**Bidirectional linking:** Every ADR carries a `**Governed by:**` field pointing to the ODR that mandated it (or `—` if none). This enables upward traversal: Arch → Org.

---

## ADR vs ODR — at a glance

| | ADR | ODR |
|---|---|---|
| **Layer** | Arch | Org |
| **Subject** | Technical structure, tooling, process | Governance, operating model, principles |
| **Binds** | Contributors (and Agents acting on the project) | All participants: Users, Agents, Contributors |
| **Location** | `decisions/adr/` | `decisions/odr/` |
| **Prompt** | `prompts/development/create-adr.md` | `prompts/development/create-odr.md` |
| **Points to ODR** | via `Governed by:` field | — |
| **Points to ADR** | — | via `Implements:` field |

For the full ODR concept, see [context/odr-concept.md](./odr-concept.md).

---

## When to create an ADR

Create an ADR when a decision:
1. Affects project structure, tooling, or technical process
2. Has non-obvious alternatives that were actively rejected
3. Should remain traceable over time — future contributors must understand the rationale

Do **not** create an ADR for:
- Trivial additions (new files that follow existing patterns)
- Temporary workarounds (log in `context/todo.md`)
- Organizational decisions — those belong in ODRs

Use `prompts/development/create-adr.md` to guide the creation process.
