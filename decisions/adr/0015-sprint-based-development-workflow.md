# ADR-0015: Sprint-Based Development Workflow

**Decision:** OIA uses a sprint-based development workflow: work is organized in timeboxed iterations (sprints) with a defined goal, a set of issues, and a fixed process cycle of Refinement → Planning → Implementation → Review → Retrospective.
**Status:** Accepted
**Date:** 2026-03-28
**Type:** DEV
**Governed by:** [ODR-0002](../odr/0002-adopt-agile-principles.md)

## Context

ODR-0002 establishes agile principles as the operating model for OIA. This ADR specifies the concrete process that implements those principles at the Arch layer.

OIA has used sprint-based development from the start, but without a formal definition. This meant:
- Sprint scope was not explicitly agreed at the start
- No mandatory refinement step before implementation
- Review and retro were bundled into one prompt without distinct phases
- No definition of what "sprint-ready" means for an issue

With the introduction of modular sprint prompts (issue #97) and the formal process for refinement, the sprint workflow is now complete enough to document as an ADR.

**Adopted cycle:**

```
Refinement (pre-sprint): issues are sharpened — expected result, risks, AC, size
Planning (Checkpoint 1 + 2): sprint goal agreed, scope confirmed, sprint started
Implementation: issues implemented on feature branches, merged via PR
Review: completed-but-open issues closed, AC verified, deviation table produced
Retrospective: chat + issue deviations analyzed, human observations collected, max 3 measures
```

Each phase is independently executable via `prompts/development/sprint-change.md`.

**Definition of Done (issue level):** An issue is done when:
1. All AC items are verified (or marked post-deploy and deferred)
2. The implementation is on `main` (merged via PR)
3. The issue is closed with an AC verification comment

**Sprint cadence:** Sprints are named by their start date (`YYYY-MM-DD`). Duration is flexible — typically 1–2 weeks. A sprint ends when its goal is met or explicitly deferred, not on a fixed calendar date.

**Scope change protocol:** Mid-sprint scope changes are handled via `sprint-scope-change.md`. No issue is added to or removed from a sprint without documenting the impact on the sprint goal.

Quality attributes affected: traceability, process discipline, team/agent alignment.

## Consequences

**Easier:** Work is organized into coherent batches with a shared goal. Review and retro surface process problems systematically. Refinement reduces mid-implementation surprises.

**Harder:** Process overhead for a solo maintainer: every sprint requires planning, review, and retro. The benefit only accumulates if the cycle is maintained consistently. Skipping phases produces invisible technical process debt.

**Required adjustments:**
- `prompts/development/sprint-change.md` — orchestrator for the full cycle
- `prompts/development/sprint-review.md`, `sprint-retro.md`, `sprint-planning.md`, `sprint-refinement.md`, `sprint-scope-change.md` — individual phase prompts
- `sprints/YYYY-MM-DD.md` — sprint notes file (gitignored; created by sprint-planning.md)

## Alternatives

| Option | Reason rejected |
|---|---|
| Continuous / ad-hoc development | No forcing function for reflection or scope control. Issues are implemented in arbitrary order without a shared goal. Process problems are never surfaced. |
| Fixed-length sprints (e.g. exactly 2 weeks) | Solo project reality: sprint length depends on issue size and available time. A fixed calendar sprint boundary creates artificial pressure without benefit. |
| Kanban (no sprints, continuous flow) | Kanban's continuous flow lacks the sprint goal that gives a set of issues a shared direction. Retros are less natural without a sprint boundary. Sprint cadence is retained as a forcing function. |
| Full Scrum ceremonies | Scrum roles (Scrum Master, Product Owner, Dev Team) don't map to a single-maintainer + AI-agent setting without distortion. Principles over framework. |
