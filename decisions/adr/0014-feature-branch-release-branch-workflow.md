# ADR-0014: Feature-Branch and Release-Branch Development Workflow

**Decision:** OIA uses a feature-branch model: every issue is implemented on a dedicated branch, merged to `main` via a pull request with human approval. Releases are prepared on a `release/vX.Y.Z` branch. There is no `develop` branch.
**Status:** Accepted
**Date:** 2026-03-28
**Type:** DEV
**Governed by:** [ODR-0002](../odr/0002-adopt-agile-principles.md)

## Context

Until this decision, all commits went directly to `main`. Push control was enforced informally via a chat-confirmation rule. This worked for a solo early-stage project, but reached its limits as the project moves toward open collaboration.

Key driving forces:
- The project aims to be a collaboration platform — external contributors must have a defined contribution path (branch → PR → review → merge)
- The AI agent (Claude Code) needs an isolated workspace where it can commit and push freely without affecting the production state on `main`
- Every merge to `main` triggers a deployment (GitHub Pages); unreviewed changes should not reach production
- Releases can span multiple sprints — a release-branch provides a stabilization space for multi-sprint work without blocking ongoing feature development

**Commit granularity on branches:** 1 commit = 1 logical unit. Multiple commits per issue are allowed and expected. WIP commits are permitted on feature branches but must be squashed or rebased into clean, logical commits before the PR merge. `main` history must remain readable without WIP noise.

**Branch naming:**
```
feature/#42-add-zoom-constants
fix/#78-deliver-capability
docs/#98-semantic-versioning-adr
release/v0.2.0
```
The issue number directly after the slash makes branches navigable from the issue list.

**Agent autonomy:** The AI agent may push feature branches at any time without human confirmation. The agent opens a PR and notifies the human in chat. The agent does NOT merge to `main` — it waits for human PR approval. Force-push is never executed without explicit instruction.

**PR as the human gate:** The pull request replaces the previous chat-confirmation ritual. The human reviews diff, CI status, and preview deployment before approving. Mid-work checkpoints from the agent happen only when scope uncertainty arises, not as routine.

Quality attributes affected: traceability, contributor experience, deployment safety, agent collaboration model.

## Consequences

**Easier:** Contributors (human and AI) have a defined, isolated workspace per issue. Production (`main`) is protected by PR approval. Preview deployments (see infrastructure setup) allow visual testing before merge. Release preparation is decoupled from ongoing sprint work.

**Harder:** Every issue now requires branch creation and a PR — more steps than direct commits. Squash/rebase discipline is required before merge. The maintainer must actively approve PRs rather than confirming in chat.

**Required adjustments:**
- CONVENTIONS.md: new §Git Workflow section with branch naming, commit granularity, push rules, PR lifecycle
- CLAUDE.md: agent behavior updated — branch-push autonomy, PR-open notification, no-merge-without-approval rule; push-confirmation rule narrowed to `main` merges and force-pushes
- `.github/pull_request_template.md`: created to standardize PR summaries
- ADR-0008 (Release Strategy): updated to reflect release-branch step before tagging

## Alternatives

| Option | Reason rejected |
|---|---|
| Trunk-based development (all commits to main) | No isolation for agent work; every commit immediately deployed; no review gate; not suitable for open collaboration |
| Full GitFlow (main + develop + feature + release + hotfix) | `develop` branch adds merge overhead with no benefit for a solo/small-team project; doubles the number of long-lived branches |
| Feature-flags on main (no branches) | Requires feature-flag infrastructure; adds runtime complexity to a static site renderer; disproportionate to project scale |
