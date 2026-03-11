# ADR-0002: BIZ/DEV Separation as Project Rule

**Decision:** Every file, commit, and prompt in the OIA project is classified as either BIZ (OIA architecture content: model, articles, diagrams, architecture decisions) or DEV (technical implementation: renderer, tooling, tests, CI). A single commit must never touch both domains simultaneously.
**Status:** Proposed
**Date:** 2026-03-11
**Type:** BOTH

## Context

The OIA project serves two distinct purposes: (1) publishing OIA architectural thought leadership (BIZ) and (2) building the technical microsite that renders the model (DEV). These concerns have different change frequencies, different reviewers, and different risk profiles. Without separation, a technical fix and a content update would appear in the same commit, making history unreadable and rollbacks dangerous.

The BIZ/DEV boundary also prevents scope creep: an AI assistant helping with DEV tasks must not modify OIA model IDs, layer names, or architectural terminology — those are BIZ decisions owned by the author.

Quality attribute affected: maintainability, traceability, separation of concerns.

## Consequences

**Easier:** Git history is readable by concern; content changes can be rolled back without touching renderer code; AI assistance is scoped to one domain at a time; commit types unambiguously signal intent (`feat:` = DEV, `content:` = BIZ).
**Harder:** Some tasks genuinely touch both (e.g., adding a new model field requires both JSON data change and renderer update) — these require two separate commits with a cross-reference.
**Required adjustments:** Conventional Commits `content:` type must be added (see ADR-0005); `CONVENTIONS.md` must document folder-to-domain mapping; prompts must declare their domain context.

## Alternatives

| Option | Reason rejected |
|---|---|
| No separation (single workflow) | Status quo — BIZ content and DEV code were interleaved in commits; author had to mentally filter scope for AI assistance |
| Separate git branches per domain | Too much overhead for a solo project; branch switching interrupts flow more than separate commits |
| Separate repositories | Hard dependency between model JSON (BIZ) and renderer (DEV) makes separate repos impractical without a publish/subscribe mechanism |
