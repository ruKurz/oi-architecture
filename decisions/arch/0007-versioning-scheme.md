# ADR-0007: Versioning Scheme — Semantic Versioning for OIA

**Decision:** OIA uses Semantic Versioning (SemVer, semver.org) with the scheme `MAJOR.MINOR.PATCH` across all versioned artifacts: the OIA model + site (coupled, one version), and concept files in `context/` (each versioned independently).
**Status:** Proposed
**Date:** 2026-03-13
**Type:** BOTH
**Governed by:** —

## Context

The OIA project combines a conceptual architecture model (`oia-model.json`) with an interactive reference site (the `oia-site` microsite). Before going public, a conscious versioning decision is needed: what does a version number mean for an architecture model + reference site, and what are the consumer expectations it creates?

**Versioning patterns considered:**

| Pattern | Form | Used by |
|---|---|---|
| **Semantic Versioning (SemVer)** | X.Y.Z — major.minor.patch | npm, most OSS libraries, GitHub releases |
| **Calendar Versioning (CalVer)** | YYYY.MM.DD or YYYY.MM | Ubuntu, pip, some data projects |
| **Sequential / integer** | v1, v2, v3 | Simple tools, internal tools |
| **Named releases** | Codenames (Focal, Jammy) | Ubuntu, Debian |
| **Hybrid** | major + CalVer minor | Python (3.12.0) |

SemVer is the dominant choice for open-source frameworks and reference models because:
- It communicates **compatibility intent** to consumers: a major bump signals breaking changes
- It integrates naturally with GitHub Releases, npm, and conventional commit tooling
- It is universally understood by developers and architects

CalVer would be appropriate if the project were primarily content-driven (like a newsletter or dataset). OIA has a model schema and renderer that can break in ways a date-stamp does not capture.

Sequential versioning is too coarse — it says nothing about compatibility.

**OIA-specific challenge:** the project has two artifacts: (1) the model schema + content (`oia-model.json`) and (2) the site rendering that schema. These are tightly coupled — the renderer is purpose-built for the model. Decoupled versioning would add complexity with no benefit at this stage.

**Quality attribute affected:** communicability (external contributors understand the stability signal), maintainability (one version to update, not two).

## Consequences

**Easier:** Contributors and consumers have a clear signal for breaking changes. GitHub Releases align with version tags. `oia-model.json` meta.version is the single authoritative source.

**Harder:** Requires discipline to bump the version consistently before every release. Major bumps must be deliberate — not used for cosmetic reasons.

**Required adjustments:** All locations that reference a version string must be updated in a single commit when the version changes: `oia-model.json` → `meta.version`, website pages (Motivation, Contribute), `README.md`.

## OIA Version Semantics

| Bump | Trigger examples |
|---|---|
| **MAJOR** (breaking) | Renamed or removed layer, changed layer ID (`#L5` → `#L5b`), removed content section, renderer API change that breaks forks |
| **MINOR** (additive) | New layer added, new content section, new diagram element, new site page, new feature that does not break existing content |
| **PATCH** (fix) | Typo correction, diagram label fix, CSS bugfix, renderer bugfix that does not change visual output |

**Pre-release (v0.x.y):** All `0.x.y` versions are pre-release by convention — the public API / model schema is not yet stable. A `MAJOR` bump to `1.0.0` signals that the model is stable and backwards-incompatible changes will be rare and deliberate.

## Concept File Versioning

Concept files in `context/` evolve independently of the OIA model. Each carries its own `**Version:**` field using the same SemVer scheme:

| Bump | When |
|---|---|
| **PATCH** | Typo corrections, clarifications that do not change meaning |
| **MINOR** | New sections, expanded explanations, new examples |
| **MAJOR** | Structural rethink, renamed sections, breaking change to how the concept is used |

Concept file versions are independent of each other and of the model version. They are not released as a bundle — each file is versioned on its own evolution timeline.

See CONVENTIONS.md §Concept File Versioning for the active versioned file list and update rules.

## Alternatives

| Option | Reason rejected |
|---|---|
| Calendar Versioning (CalVer) | Does not communicate compatibility intent; model schema changes are not date-driven |
| Decoupled model + site versions | Adds complexity (two version strings to maintain) with no current benefit — model and renderer are always released together |
| Sequential integer (v1, v2) | Too coarse; does not distinguish breaking changes from minor additions |
| Named releases | Adds overhead with no clarity benefit for a technical reference model |
