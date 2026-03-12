# Working with ADRs and Semantic Anchors in OIA

> **Diátaxis mode:** How-to guide — task-oriented, for contributors and AI agents.
> For conceptual background, see [ADR-0004](../decisions/0004-adr-format-mueller-dienst.md) and [ADR-0010](../decisions/0010-semantic-anchors-as-vocabulary-layer.md).

---

## What Each Concept Does

| Concept | Scope | Question it answers |
|---|---|---|
| **ADR** | Project-specific | *Why did we decide X in this project?* |
| **Semantic Anchor** | Universal methodology | *What does this methodology mean — precisely?* |

They are complementary, not competing. An ADR may *reference* a Semantic Anchor as its rationale. A new anchor adoption is itself recorded as an ADR.

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
| [ADR-NNNN](./NNNN-title.md) | Short title | Proposed | DEV | YYYY-MM-DD |
```

### Referencing ADRs

- In CONVENTIONS.md: `See [ADR-XXXX](decisions/XXXX-title.md) for rationale.`
- In CLAUDE.md: inline reference `[ADR-XXXX](decisions/XXXX-title.md)` in the relevant rule
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
| Record a project decision with alternatives | ADR | `decisions/NNNN-title.md` |
| Define shared methodology vocabulary | Semantic Anchor | `context/semantic-anchors.md` |
| Enforce a rule on the AI agent | Both | `CLAUDE.md` |
| Document a binding convention | Either | `CONVENTIONS.md` |
| Park a temporary observation | Neither | `context/todo.md` |
| Track a task | GitHub Issue | https://github.com/ruKurz/oi-architecture/issues |
