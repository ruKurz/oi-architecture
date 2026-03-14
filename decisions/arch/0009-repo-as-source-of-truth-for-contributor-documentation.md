# ADR-0009: Repo as Source of Truth — Website as Entry Point

**Decision:** The GitHub repository is the single source of truth for all operational contributor documentation (CONTRIBUTING.md, ARCHITECTURE.md, MODEL_GUIDE.md). The OIA website (GitHub Pages) serves as a strategic entry point — it explains the project's purpose and directs visitors to the repo. Operational details (dev setup, contribution workflow, file maps) live exclusively in the repo.
**Status:** Accepted
**Date:** 2026-03-12
**Type:** DEV

## Context

As the OIA project grows toward community participation, two documentation surfaces exist in parallel: the OIA website (GitHub Pages) and the repository. The Contribute page on the website currently contains detailed dev instructions (bash commands, file map table, PR workflow) that will also appear in `CONTRIBUTING.md`. This creates a double-maintenance burden — the same information would need to be updated in two places whenever the tooling or process changes.

The core tension: the website provides a high-quality visual experience that should not be degraded; the repo provides the canonical, versionable, contributor-facing documentation that should not be duplicated.

The deciding insight is **separation by change rate and audience**:

| Content type | Changes | Audience | Surface |
|---|---|---|---|
| Why OIA exists, project vision | Rarely | Everyone | Website |
| Who is behind OIA, origin story | Rarely | Everyone | Website |
| Call to join — high level | Rarely | Everyone | Website |
| Contribution workflow, dev setup | With tooling changes | Contributors | Repo |
| Codebase structure | With refactoring | Developers | Repo |
| OIA model explanation | With model changes | Architects | Repo |

The Contribute page becomes a motivational bridge — it explains *why* to contribute and *who* should, then links to `CONTRIBUTING.md` for the *how*. No content is duplicated across surfaces.

`CONTRIBUTING.md` stays at the repository root because GitHub recognizes it there and auto-links it from the "Contribute" flow on GitHub.com. Deeper docs (`ARCHITECTURE.md`, `MODEL_GUIDE.md`) go into `docs/` for future versionability and optional GitHub Pages / tool integration.

Quality attribute affected: maintainability (single point of update), contributor experience (clear navigation path), scalability (docs/ structure enables future tooling without structural change).

## Consequences

**Easier:** Any change to the contribution workflow requires exactly one file update (`CONTRIBUTING.md`); the website never needs updating when dev tooling changes; the `docs/` folder is extensible without affecting the site; the project reads as a serious open-source project with standard GitHub conventions.

**Harder:** The Contribute page becomes deliberately thinner — some visitors may expect more detail on the website and need to follow the link to the repo; requires discipline to not add operational details back to the website over time.

**Required adjustments:** The Contribute page must be slimmed — bash commands and file map table removed, replaced with a clear link to `CONTRIBUTING.md`. `README.md` must gain a Documentation section linking all contributor docs. `GOOD_FIRST_ISSUES.md` stays at repo root for GitHub discoverability.

## Alternatives

| Option | Reason rejected |
|---|---|
| Full content duplication (website + repo both have all details) | Double maintenance; content will diverge; website becomes stale after tooling changes |
| Website as primary docs, repo has minimal README | Website not versionable with code; breaks GitHub contributor conventions (`CONTRIBUTING.md` expected at root); worse developer experience |
| Markdown-to-site auto-rendering (VitePress, MkDocs, Docusaurus) | Eliminates redundancy elegantly but introduces significant build complexity; premature for v0.1.0; can be introduced as ADR-0010 when community justifies the investment |
| Keep detailed dev instructions only on Contribute page | Violates GitHub conventions; contributors expect `CONTRIBUTING.md`; not discoverable via GitHub UI |
