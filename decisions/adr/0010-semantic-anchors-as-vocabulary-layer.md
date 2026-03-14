# ADR-0010: Semantic Anchors as Shared Vocabulary Layer

**Decision:** The OIA project adopts Semantic Anchors (https://llm-coding.github.io/Semantic-Anchors/) as a shared vocabulary layer for AI-assisted development. The active anchor set is maintained in `context/semantic-anchors.md` and referenced by `CLAUDE.md`. Anchors are invoked in prompts and CLAUDE.md to activate established knowledge domains in the AI assistant without re-explaining them from scratch.
**Status:** Proposed
**Date:** 2026-03-12
**Type:** DEV
**Governed by:** —

## Context

The OIA project uses ADRs as "architecture contracts for the agent" — rules the AI must follow. ADRs are project-specific: they capture decisions made in this particular context with this particular rationale.

A second communication problem exists alongside ADR compliance: vocabulary alignment. When prompting the AI assistant to "structure the article clearly" or "ensure the layers don't overlap," the instruction is interpreted differently depending on which mental model the AI applies. Without an explicit vocabulary contract, the assistant uses whatever heuristic seems reasonable — and that heuristic drifts across conversations.

Semantic Anchors solve this by invoking named, well-documented methodologies from the AI's training data. Instead of explaining "layers should be mutually exclusive and together cover all cases," invoking "MECE Principle (Minto)" activates the full body of knowledge — the definition, the test, the common failure modes — in a single phrase.

ADRs and Semantic Anchors serve complementary roles:

| Concept | Scope | Purpose |
|---|---|---|
| ADR | Project-specific | Documents WHY a decision was made in this project |
| Semantic Anchor | Universal (library) | Establishes WHAT a methodology means — shared vocabulary |

An ADR may *reference* a Semantic Anchor as its rationale (e.g. ADR-0005 references Conventional Commits). A Semantic Anchor may *trigger* an ADR when the project decides to adopt it formally (as this ADR does).

Quality attribute affected: communicability (prompts become shorter and more precise), consistency (same anchor = same conceptual activation across sessions), maintainability (anchor library evolves independently of project ADRs).

## Consequences

**Easier:** Prompts and CLAUDE.md instructions become shorter — one anchor phrase replaces paragraphs of explanation; the AI activates the correct methodology immediately; new contributors (human or AI) get shared vocabulary without onboarding overhead.

**Harder:** The active anchor set must be maintained in `context/semantic-anchors.md`; when the upstream library adds or renames anchors, the project's active set may need updating; team members must know what anchors are active.

**Required adjustments:** `context/semantic-anchors.md` must define the active anchor set with domain (BIZ/DEV) and application context; `CLAUDE.md` must reference the anchor file and specify when each anchor applies; `CONVENTIONS.md` must document the Semantic Anchor convention in §2.11.

## Alternatives

| Option | Reason rejected |
|---|---|
| Inline re-explanation per prompt | Status quo — verbose, inconsistent across sessions, drifts with conversation context |
| Custom project-specific glossary only | Loses the benefit of the AI's existing trained knowledge; requires explaining from scratch what established methodologies already cover |
| No vocabulary layer (rely on ADRs alone) | ADRs capture project decisions, not methodology definitions — they are complementary, not substitutes |
| Use a different anchor library | llm-coding.github.io/Semantic-Anchors is the only structured, maintained, open library with explicit quality criteria and AsciiDoc format; no comparable alternative exists at time of writing |
