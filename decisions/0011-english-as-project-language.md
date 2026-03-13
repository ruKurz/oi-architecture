# ADR-0011: English as the Sole Project Language

**Decision:** All project artifacts are written in English. The only exception is LinkedIn articles, which remain in German as an author choice for a German-speaking audience. This supersedes the language section of ADR-0001.
**Status:** Proposed
**Date:** 2026-03-13
**Type:** DEV

## Context

ADR-0001 established English for code and technical artifacts but left prompts and OIA content files (articles, notes, context files) in German. As the project moved toward open source, two problems surfaced:

1. **Mixed-language prompts**: German-language prompts in `prompts/` were inconsistent with English ADRs, code, and documentation. International contributors — human or agent — could not fully navigate the project without German.
2. **Denglish drift**: Partial German in diagrams, posts, and configuration created a professionally unprofessional appearance and raised the cognitive load for every reader switching contexts.

Quality attributes affected: portability, maintainability, professionalism (open-source readiness).

## Consequences

**Easier:** Single mental model for all contributors — no per-file language decision; agent instructions, conventions, and prompts are consistent; onboarding cost for non-German contributors drops to zero.
**Harder:** Existing German files in `context/`, `notes/`, and `prompts/` are known exceptions — they are not retroactively translated; new files follow the convention strictly.
**Required adjustments:** `CONVENTIONS.md` §2.2 updated; `prompts/` directory migrated to English over time; `context/` and `notes/` files follow English on creation or next significant edit.

## Alternatives

| Option | Reason rejected |
|---|---|
| Keep German for all content artifacts | Open-source audience is international; German-only content limits reach and contribution |
| Keep German only for prompts | Prompts are agent contracts — inconsistency with English ADRs creates ambiguity for the agent |
| Translate LinkedIn articles to English | Target audience on LinkedIn is German-speaking; translation would reduce quality and authenticity |
| Per-artifact decision (no blanket rule) | Reintroduces the Denglish drift this decision is meant to eliminate |
