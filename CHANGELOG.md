# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

## [0.3.0] — 2026-03-16 — *Capabilities Converge. Accountability Does Not.*

### Added

**System Participants layer** — new conceptual layer replacing the previous Actors layer
- OIA-ODR-0001: System Participants layer — triad, spectra, and governance frame — [#160](https://github.com/ruKurz/oi-architecture/issues/160)
- `context/system-participants-concept.md` — full concept document: triad, spectra, key insight, Actor types, EU AI Act mapping — [#160](https://github.com/ruKurz/oi-architecture/issues/160), [#186](https://github.com/ruKurz/oi-architecture/issues/186)
- `decisions/oia-odr/` — new namespace for OIA Model Decision Records (OIA-ODRs) — [#160](https://github.com/ruKurz/oi-architecture/issues/160)
- AI Agents positioned as knowledge consumers in concept and model — [#31](https://github.com/ruKurz/oi-architecture/issues/31)
- Description text on all 9 System Participants boxes (triad + spectra) — [#167](https://github.com/ruKurz/oi-architecture/issues/167)

**Renderer — System Participants**
- Custom renderer component for the System Participants layer with triad, spectra, and key insight — [#161](https://github.com/ruKurz/oi-architecture/issues/161)
- Spectra and key insight moved to detail view; overview shows triad only — [#173](https://github.com/ruKurz/oi-architecture/issues/173)
- Governance flow (horizontal), breadcrumb navigation, edge type labels — [#180](https://github.com/ruKurz/oi-architecture/issues/180), [#182](https://github.com/ruKurz/oi-architecture/issues/182), [#185](https://github.com/ruKurz/oi-architecture/issues/185)
- EU AI Act info badge and overlay on all participant detail views — [#188](https://github.com/ruKurz/oi-architecture/issues/188)
- What / Why / How sections on Initiator, Actor, and Beneficiary detail views — [#190](https://github.com/ruKurz/oi-architecture/issues/190)
- What / Why / How narrative sections on Human, Agent, and System detail pages — [#194](https://github.com/ruKurz/oi-architecture/issues/194)

**Process & Tooling**
- Skill `oia-issue-implementieren` — progressive disclosure implementation workflow — [#174](https://github.com/ruKurz/oi-architecture/issues/174)
- ADR-0017: Agent Skills (SKILL.md) as portable, triggerable workflow format — [#176](https://github.com/ruKurz/oi-architecture/issues/176)
- `sprint-refinement.md`: visual spec artifact requirement and model+renderer design decision step — [#170](https://github.com/ruKurz/oi-architecture/issues/170)
- `prompts/development/create-release.md` — manual release execution prompt — [#204](https://github.com/ruKurz/oi-architecture/issues/204)
- README hero section: version/status/CI badges top-right, three-section CTA button — [#202](https://github.com/ruKurz/oi-architecture/issues/202)

### Changed

- `oia-model.json`: Actors layer replaced by System Participants triad + spectra + key insight structure — [#34](https://github.com/ruKurz/oi-architecture/issues/34)
- Spectrum 2 label updated from "ODR-bounded" to "Governance-bounded" — [#192](https://github.com/ruKurz/oi-architecture/issues/192)
- `CLAUDE.md`: agent push autonomy extended to `feature/*`, `fix/*`, and `chore/*` branches — [#170](https://github.com/ruKurz/oi-architecture/issues/170)
- Model version bumped to `0.3.0` in `oia-model.json`, Motivation page, Contribute page, README — [#188](https://github.com/ruKurz/oi-architecture/issues/188)

### Fixed

- Accountability spectrum items not clickable on participant detail pages — [#196](https://github.com/ruKurz/oi-architecture/issues/196)
- Breadcrumb missing Actor intermediate level on participant detail pages — [#197](https://github.com/ruKurz/oi-architecture/issues/197)
- Missing `ContentItem` import causing TypeScript build error after #194 merge — [#197](https://github.com/ruKurz/oi-architecture/issues/197)
- Font-weight and border inconsistencies causing layout shift on governance flow nodes — [#188](https://github.com/ruKurz/oi-architecture/issues/188)

### Security

- Patched high-severity `undici` vulnerability; `npm audit --audit-level=moderate` added to PR Check — [#171](https://github.com/ruKurz/oi-architecture/issues/171)

---

## [0.2.0] — 2026-03-15

### Added

**Organizational Decision Records (ODRs)** — new governance layer introduced in sprint 2026-03-14
- ODR-0000: Commit to Transparent Governance Documentation — founding charter — [#78](https://github.com/ruKurz/oi-architecture/issues/78)
- ODR-0001: OIA Ecosystem Type — Community-Driven with Benevolent Dictator — [#78](https://github.com/ruKurz/oi-architecture/issues/78)
- ODR-0002: Adopt Agile Software Development Principles — [#78](https://github.com/ruKurz/oi-architecture/issues/78)
- ODR-0003: Adopt ADRs as Arch-Layer Documentation Practice — [#84](https://github.com/ruKurz/oi-architecture/issues/84)
- ODR-0004: English as the Sole Project Language (supersedes ADR-0011) — [#85](https://github.com/ruKurz/oi-architecture/issues/85)

**Architecture Decisions**
- ADR-0007: Semantic Versioning (SemVer) as the versioning scheme for OIA model + site — [#36](https://github.com/ruKurz/oi-architecture/issues/36)
- ADR-0008: GitHub Releases with manual trigger as release strategy — [#37](https://github.com/ruKurz/oi-architecture/issues/37)
- ADR-0010: Semantic Anchors as shared vocabulary layer for AI prompts — [#66](https://github.com/ruKurz/oi-architecture/issues/66)
- ADR-0012: Introduce ODR as Governance Documentation Layer — [#78](https://github.com/ruKurz/oi-architecture/issues/78)

**Project Governance**
- `decisions/` restructured into `arch/`, `org/`, `_obsolete/` subfolders — [#85](https://github.com/ruKurz/oi-architecture/issues/85)
- `GOVERNANCE.md` — benevolent dictator model, maintainer identity, ADR-based decision process, evolution path — [#40](https://github.com/ruKurz/oi-architecture/issues/40)
- `_archive/` directory for superseded file versions — [#16](https://github.com/ruKurz/oi-architecture/issues/16)
- `diagrams/README.md` — documents active visualization and relationship to renderer — [#5](https://github.com/ruKurz/oi-architecture/issues/5)
- `drafts/README.md` — documents WIP lifecycle (drafts → articles or discard) — [#8](https://github.com/ruKurz/oi-architecture/issues/8)
- `context/semantic-anchors.md` — active semantic anchor registry (MECE, Pyramid Principle, BLUF, DDD, Conventional Commits, Diátaxis, SemVer)

**CI/CD**
- PR check: typecheck step (`tsc --noEmit`) — [#69](https://github.com/ruKurz/oi-architecture/issues/69)
- PR check: ADR-0006 prompt compliance validator — checks all prompts for required sections — [#70](https://github.com/ruKurz/oi-architecture/issues/70)
- PR check: ODR compliance validator — checks all ODRs for required fields and sections — [#92](https://github.com/ruKurz/oi-architecture/issues/92)
- PR check: ADR `governed-by` field validator — ensures all ADRs carry the field — [#92](https://github.com/ruKurz/oi-architecture/issues/92)

**Tests**
- 18 new tests in `tests/views.spec.ts` covering all 4 view functions (About, Contribute, Motivation, Legal) — 50 tests total — [#71](https://github.com/ruKurz/oi-architecture/issues/71)

### Changed

- `CONVENTIONS.md` §2.1: root-level files (`CLAUDE.md`, `README.md`, `CONVENTIONS.md`, etc.) explicitly classified as DEV — [#74](https://github.com/ruKurz/oi-architecture/issues/74)
- `CONVENTIONS.md` §2.3: AC verification requirement added before `Closes #N` — [#44](https://github.com/ruKurz/oi-architecture/issues/44)
- `prompts/development/create-issue.md`: dependency check and AC verifiability check added to Step 4 — [#44](https://github.com/ruKurz/oi-architecture/issues/44)
- All prompts in `prompts/`: overhauled to English, unified structure, section headings renamed to English — [#68](https://github.com/ruKurz/oi-architecture/issues/68)
- `README.md`: added Legacy & Archived Content section and Governance link — [#16](https://github.com/ruKurz/oi-architecture/issues/16), [#40](https://github.com/ruKurz/oi-architecture/issues/40)
- `CLAUDE.md`: ADR enforcement and Semantic Anchors integrated into agent contracts

### Fixed

- Renderer: hardcoded `rgba(44,242,194,...)` inline styles replaced with CSS variables (`--accent2-subtle`, `--accent2-dim`, `--accent2-mid`, `--accent2-high`) — [#2](https://github.com/ruKurz/oi-architecture/issues/2)

## [0.1.0] — 2026-03-12

### Added

**OIA Model**
- 7-layer conceptual architecture: Situation Layer, Use Cases, Solutions & Applications, Cognitive Capabilities, Features & APIs, AI & Cognitive Infrastructure, Data Layer
- Cross-cutting dimensions: System Development & Interaction (left), Data Sources & Processing Pipeline (right)
- Data-driven model in `oia-site/src/data/oia-model.json` as single source of truth

**Interactive Diagram Site** (`oia-site/`) — [#18](https://github.com/ruKurz/oi-architecture/issues/18)
- TypeScript + Vite renderer, fully data-driven from `oia-model.json`
- Zoom controls, detail panel on layer item click, hash-based SPA routing
- SPA navigation structure for GitHub Pages — [#45](https://github.com/ruKurz/oi-architecture/issues/45)
- Subpages: Motivation, Contribute, About — [#47](https://github.com/ruKurz/oi-architecture/issues/47)
- Legal Notice page — [#48](https://github.com/ruKurz/oi-architecture/issues/48), [#64](https://github.com/ruKurz/oi-architecture/issues/64)
- GitHub contribution FAB and nav icon — [#46](https://github.com/ruKurz/oi-architecture/issues/46)
- Dual license display (MIT + CC BY 4.0) — [#38](https://github.com/ruKurz/oi-architecture/issues/38)
- Deployed via GitHub Pages — [#49](https://github.com/ruKurz/oi-architecture/issues/49)
- Screenshot of diagram added to README — [#51](https://github.com/ruKurz/oi-architecture/issues/51)

**Project Governance**
- `CONTRIBUTING.md` — contribution workflow, BIZ/DEV separation, commit format — [#39](https://github.com/ruKurz/oi-architecture/issues/39), [#41](https://github.com/ruKurz/oi-architecture/issues/41)
- `ARCHITECTURE.md` — codebase structure and rendering architecture
- `MODEL_GUIDE.md` — OIA model layers, terminology, how to contribute
- `GOOD_FIRST_ISSUES.md` — curated entry points for new contributors
- `CODE_OF_CONDUCT.md` — Contributor Covenant 2.1 — [#52](https://github.com/ruKurz/oi-architecture/issues/52)
- `SECURITY.md` — vulnerability reporting process — [#26](https://github.com/ruKurz/oi-architecture/issues/26)
- `CHANGELOG.md` — versioned release notes (Keep a Changelog) — [#55](https://github.com/ruKurz/oi-architecture/issues/55)
- `CONVENTIONS.md` — naming, commits, BIZ/DEV rules, issue tracking, closing verification — [#19](https://github.com/ruKurz/oi-architecture/issues/19), [#62](https://github.com/ruKurz/oi-architecture/issues/62)
- `CLAUDE.md` — optional AI tooling configuration, clarified for external contributors — [#60](https://github.com/ruKurz/oi-architecture/issues/60)
- `prompts/README.md` — index of optional Claude prompts — [#60](https://github.com/ruKurz/oi-architecture/issues/60)
- GitHub issue labels (domain:dev, domain:biz, category labels) — [#54](https://github.com/ruKurz/oi-architecture/issues/54)
- GitHub PR template with type/domain/test checklist — [#57](https://github.com/ruKurz/oi-architecture/issues/57)
- GitHub issue templates (bug report, feature request, model contribution) — [#57](https://github.com/ruKurz/oi-architecture/issues/57)
- README rewritten in English — [#53](https://github.com/ruKurz/oi-architecture/issues/53)
- ADRs 0001–0009 covering language, domain separation, issue tracking, ADR format, commits, prompt helper, versioning, release strategy, and repo-as-source-of-truth
- ADRs 0001–0006 and 0009 set to Accepted by human maintainer — [#65](https://github.com/ruKurz/oi-architecture/issues/65)
- OSS readiness review prompt (`prompts/development/oss-readiness-review.md`) — [#61](https://github.com/ruKurz/oi-architecture/issues/61)
- Sprint retro prompt improvements (AC close verification, blocked-by rules) — [#62](https://github.com/ruKurz/oi-architecture/issues/62)
- OSS Readiness Review completed — project rated Level 3 (Open Source Ready) — [#63](https://github.com/ruKurz/oi-architecture/issues/63)

**CI/CD**
- GitHub Actions deploy workflow (lint → test → build → GitHub Pages) — [#49](https://github.com/ruKurz/oi-architecture/issues/49)
- GitHub Actions PR check workflow (lint → test on every PR) — [#58](https://github.com/ruKurz/oi-architecture/issues/58)
- Dependabot for weekly npm dependency updates — [#59](https://github.com/ruKurz/oi-architecture/issues/59)

**Tooling**
- Husky pre-commit hooks with lint-staged — [#7](https://github.com/ruKurz/oi-architecture/issues/7)
- ESLint + Prettier + TypeScript strict mode
- 32 tests across model integrity, renderer, detail panel, and routing
- `/todo` slash command and session parking lot (`context/todo.md`) — [#20](https://github.com/ruKurz/oi-architecture/issues/20)
- Prompt naming conventions harmonized — [#24](https://github.com/ruKurz/oi-architecture/issues/24)

### Changed

- `package.json` version set to 0.1.0 — [#56](https://github.com/ruKurz/oi-architecture/issues/56)
- Impressum renamed to Legal Notice (route, view, nav label) — [#64](https://github.com/ruKurz/oi-architecture/issues/64)

### Refactored

- Zoom constants centralized — [#3](https://github.com/ruKurz/oi-architecture/issues/3)
- Duplicate `getItem()` utility centralized — [#4](https://github.com/ruKurz/oi-architecture/issues/4)
- Abbreviated variable names replaced (`el`, `appEl`) — [#10](https://github.com/ruKurz/oi-architecture/issues/10)
- Test files: removed implicit `any` types — [#13](https://github.com/ruKurz/oi-architecture/issues/13)
- Test files: improved JSON model import typing — [#14](https://github.com/ruKurz/oi-architecture/issues/14)

[0.3.0]: https://github.com/ruKurz/oi-architecture/releases/tag/v0.3.0
[0.2.0]: https://github.com/ruKurz/oi-architecture/compare/v0.1.0...v0.3.0
[0.1.0]: https://github.com/ruKurz/oi-architecture/releases/tag/v0.1.0
