# ADR-0004: ADR Format: Müller/Dienst Methodology

**Decision:** Architecture Decision Records follow the Ralf D. Müller / Johannes Dienst format: Decision statement first (active voice), followed by Status, Context, Consequences (Easier/Harder/Required adjustments), and a mandatory Alternatives table. ADRs are written in English and stored in `decisions/` as `NNNN-kebab-case-noun-phrase.md`.
**Status:** Accepted
**Date:** 2026-03-11
**Type:** DEV
**Governed by:** [ODR-0003](./org/0003-adopt-adrs-as-arch-layer-documentation-practice.md)

## Context

Multiple ADR formats exist (Nygard, MADR, Müller/Dienst, Y-Statements). The project needed a format that: (1) surfaces the decision immediately without forcing the reader to scan through context first, (2) mandates alternatives to prove the decision was not made by default, and (3) separates positive and negative consequences explicitly.

The Müller/Dienst format satisfies all three. The author has a personal connection to Ralf Müller, and the format is well-documented at fiveandahalfstars.ninja.

The "Kernels of Truth" input approach (user provides raw observations, AI synthesizes into structured ADR) reduces the friction of ADR creation during active development sessions.

Quality attribute affected: maintainability, traceability (decision rationale preserved over time).

## Consequences

**Easier:** Decisions are immediately readable without reading the full document; alternatives prove intent; the mandatory structure prevents low-quality ADRs ("we used X because we always use X").
**Harder:** Mandatory alternatives section requires deliberate effort — the author must articulate what was rejected and why; this adds time per ADR but prevents decision amnesia.
**Required adjustments:** A `create-adr.md` prompt must exist to guide ADR creation; `decisions/README.md` serves as the index; CONVENTIONS.md must reference the template.

## Alternatives

| Option | Reason rejected |
|---|---|
| Nygard format (original ADR) | No mandatory alternatives; consequences not split into Easier/Harder |
| MADR (Markdown Architectural Decision Records) | More verbose; options table less clear than the Müller two-column format |
| No formal ADR format (prose decisions) | Inconsistent structure; hard to scan; no enforcement possible |
| Y-Statements only | Single sentence format too compressed for complex decisions with multiple trade-offs |
