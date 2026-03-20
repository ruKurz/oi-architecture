# Working with ADRs and Semantic Anchors in OIA

> **Diátaxis mode:** How-to guide — task-oriented, for contributors and AI agents.
> For conceptual background, see [ADR-0004](../decisions/adr/0004-adr-format-mueller-dienst.md), [ADR-0010](../decisions/adr/0010-semantic-anchors-as-vocabulary-layer.md), and [context/agent/odr-concept.md](../context/agent/odr-concept.md).

---

## What Each Concept Does

| Concept | Layer | Scope | Question it answers |
|---|---|---|---|
| **ODR** | Org | Project-specific governance | *Why does this project operate the way it does?* |
| **ADR** | Arch | Project-specific technical | *Why did we decide X for the architecture/tooling?* |
| **Semantic Anchor** | — | Universal methodology | *What does this methodology mean — precisely?* |

All three are complementary. An ADR may reference a Semantic Anchor as its rationale. An ADR may be mandated by an ODR. ODRs, ADRs, and anchors together form the full knowledge layer for human contributors and AI agents.

**Decision tree — which record type?**

```
Does this decision affect how the project GOVERNS ITSELF?
  (ecosystem model, operating principles, language policy, agent contracts)
  YES → ODR in decisions/odr/
  NO  → Does it affect technical structure, tooling, or process?
          YES → ADR in decisions/adr/
          NO  → Is it a universal methodology (from the Semantic Anchors library)?
                  YES → Semantic Anchor in context/semantic-anchors.md
                  NO  → Add to CONVENTIONS.md or CLAUDE.md directly
```

---

## Organizational Decision Records (ODRs)

### Format

ODRs use a distinct format from ADRs. The template is at `decisions/odr/odr-template.md`:

```markdown
# ODR-NNNN: Noun-phrase title

**Decision:** One or two sentences, active voice.
**Status:** Proposed | Accepted | Deprecated | Superseded by ODR-XXXX
**Date:** YYYY-MM-DD
**Level:** Org
**Binding for:** All | Users | Agents | Contributors
**Derives from:** ODR-XXXX | — (founding record)
**Implements:** ADR-XXXX, ADR-YYYY | —

## Context
## Consequences
**For Users:** ...
**For Agents:** ...
**Easier:** ...
**Harder:** ...
**Required adjustments:** ...

## Alternatives
## Related decisions
```

### Creating a New ODR

Use the prompt: `prompts/development/create-odr.md`

Trigger conditions — create an ODR when:
- A decision affects how the project **governs itself** (not what it builds)
- It binds Users, Agents, or Contributors at the organizational level
- Examples: ecosystem type, operating model, language policy, governance principles

Do NOT create an ODR for:
- Technical choices (those are ADRs)
- Temporary process notes (log in `context/todo.md`)
- Decisions already covered by an existing ODR

### Numbering

Next ODR number = highest number in `decisions/README.md` ODR index + 1. ODR numbers are **independent of ADR numbers**. Never reuse a number.

### Status Lifecycle

```
Proposed  →  Accepted  →  Deprecated
                        ↘  Superseded by ODR-XXXX
```

When superseded: move the file to `decisions/_obsolete/` and update `decisions/README.md` with a struck-through entry.

### The derives-from / implements Chain

ODRs form a derivation chain:
- **`Derives from:`** points to the parent ODR that motivated this decision (upward)
- **`Implements:`** lists the ADRs that are the Arch-layer implementation (downward)
- **`Governed by:`** on the ADR points back to the ODR (upward on the ADR side)

All three fields must be kept in sync. See `context/agent/odr-concept.md` for the full concept.

### Updating the ODR Index

After creating an ODR, add a row to `decisions/README.md` ODR Index:

```markdown
| [ODR-NNNN](./odr/NNNN-title.md) | Short title | Proposed | YYYY-MM-DD |
```

---

## Architecture Decision Records (ADRs)

### Format

This project uses the **Müller/Dienst format** (not Nygard, not MADR):

```markdown
# ADR-NNNN: Noun-phrase title

**Decision:** One or two sentences, active voice. What was decided.
**Status:** Proposed | Accepted | Deprecated | Superseded by ADR-XXXX
**Date:** YYYY-MM-DD
**Type:** DEV | BIZ | BOTH

## Context
Facts that influenced the decision. Neutral language.
Quality attribute affected.

## Consequences
**Easier:** What becomes simpler.
**Harder:** What requires more discipline.
**Required adjustments:** What else must change.

## Alternatives
| Option | Reason rejected |
|---|---|
| Alternative A | Why not chosen |
```

Key principle: **Decision first** — the decision is the first thing a reader sees, not the last.

### Creating a New ADR

Use the prompt: `prompts/development/create-adr.md`

Trigger conditions — create an ADR when:
- A decision affects project structure, process, or tooling in a non-obvious way
- There are real alternatives that were explicitly rejected
- Future contributors (human or AI) need to understand WHY the rule exists

Do NOT create an ADR for:
- Trivial file additions
- Decisions fully explained by an existing ADR or CONVENTIONS.md entry
- Temporary workarounds (log these in `context/todo.md` instead)

### Numbering

Next ADR number = highest number in `decisions/README.md` index + 1. Check the index before creating. Never reuse a number.

Note: ADR-0007 and ADR-0008 were skipped during an early session. This is intentional — numbers are not reassigned.

### Status Lifecycle

```
Proposed  →  Accepted  →  Deprecated
                        ↘  Superseded by ADR-XXXX
```

- **Proposed:** Active and followed. Awaiting human sign-off. AI agents create ADRs in this state.
- **Accepted:** Human maintainer has explicitly set this status.
- **Deprecated / Superseded:** No longer binding. The superseding ADR references this one.

**Rule:** Only the human maintainer sets `Accepted`. An AI agent that changes status to `Accepted` is violating ADR-0004.

### Updating the ADR Index

After creating a new ADR file, update `decisions/README.md`:

```markdown
| [ADR-NNNN](./adr/NNNN-title.md) | Short title | Proposed | DEV | YYYY-MM-DD |
```

### Referencing ADRs

- In CONVENTIONS.md: `See [ADR-XXXX](decisions/adr/XXXX-title.md) for rationale.`
- In CLAUDE.md: inline reference `[ADR-XXXX](decisions/adr/XXXX-title.md)` in the relevant rule
- In commit messages: `Refs #N` (via the GitHub Issue, not directly to the ADR file)

---

## Semantic Anchors

### What They Are

A Semantic Anchor is a named, well-documented methodology that the AI assistant recognizes from training data. Invoking it precisely activates the full associated knowledge domain — definitions, proponents, applications, failure modes — without re-explaining it in the prompt.

Quality criteria (from the library):
- **Precise** — references a specific body of knowledge with clear boundaries
- **Rich** — activates multiple interconnected concepts
- **Consistent** — different users get similar activation
- **Attributable** — traceable to key proponents or documented standards

### Active Anchors

Maintained in `context/semantic-anchors.md`. Read it before using anchors in prompts.

### Using an Anchor in a Prompt

Invoke verbatim — use the exact anchor name as defined in the active anchor file:

```
Apply MECE Principle (Minto) to evaluate whether the OIA layers have any overlaps or gaps.
```

```
Structure this article following Pyramid Principle (Minto): state the key insight first,
then provide supporting arguments in decreasing importance.
```

```
This documentation follows the Diátaxis Framework — this is a How-to guide.
Keep it task-oriented and avoid mixing in explanatory content.
```

The anchor name in parentheses (e.g. `(Minto)`, `(Evans)`) disambiguates anchors with similar names.

### Decision Tree: ADR or Anchor?

```
Is this about a methodology that exists in the Semantic Anchors library?
  YES → Use the anchor (invoke it in the prompt or add it to CLAUDE.md)
        If adopting it as a project standard → also create an ADR referencing it
  NO  → Is this a project-specific decision with alternatives?
          YES → Create an ADR
          NO  → Add to CONVENTIONS.md or CLAUDE.md directly
```

### Adding a New Anchor

1. Check the library: https://llm-coding.github.io/Semantic-Anchors/
2. Verify quality criteria (see above)
3. Create a GitHub Issue: "Add [anchor name] to active semantic anchors"
4. Add the entry to `context/semantic-anchors.md` following the entry format
5. If the anchor should be automatically applied by the agent, add it to the CLAUDE.md Semantic Anchors section
6. Commit: `content(context): add [anchor name] to active semantic anchors` + `Closes #N`

For a significant adoption decision (e.g. a new BIZ methodology that frames the OIA model), also create an ADR.

### Anchor vs. ADR — Side by Side Example

**Scenario:** The project decides to apply Pyramid Principle to all OIA articles.

- **Semantic Anchor entry** in `context/semantic-anchors.md`:
  Defines what Pyramid Principle is, what it activates, and how it applies to OIA articles.

- **CLAUDE.md rule:**
  `Apply **Pyramid Principle (Minto)** when structuring articles or documents.`

- **ADR (optional):** Only needed if the decision has non-obvious alternatives and needs permanent rationale. For Pyramid Principle, the rationale (CIO/EA audience reads top-down) is self-evident — no ADR required.

---

## Quick Reference

| Action | Tool | File |
|---|---|---|
| Record an organizational governance decision | ODR | `decisions/odr/NNNN-title.md` |
| Record a technical/structural decision | ADR | `decisions/adr/NNNN-title.md` |
| Define shared methodology vocabulary | Semantic Anchor | `context/semantic-anchors.md` |
| Enforce a rule on the AI agent | ADR/ODR + CLAUDE.md | `CLAUDE.md` |
| Document a binding convention | Either | `CONVENTIONS.md` |
| Park a temporary observation | Neither | `context/todo.md` |
| Track a task | GitHub Issue | https://github.com/ruKurz/oi-architecture/issues |
