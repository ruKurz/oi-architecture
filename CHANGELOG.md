# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

## [0.1.0] — 2026-03-12

### Added

**OIA Model**
- 7-layer conceptual architecture: Situation Layer, Use Cases, Solutions & Applications, Cognitive Capabilities, Features & APIs, AI & Cognitive Infrastructure, Data Layer
- Cross-cutting dimensions: System Development & Interaction (left), Data Sources & Processing Pipeline (right)
- Data-driven model in `oia-site/src/data/oia-model.json` as single source of truth

**Interactive Diagram Site** (`oia-site/`)
- TypeScript + Vite renderer, fully data-driven from `oia-model.json`
- Zoom controls, detail panel on layer item click, hash-based SPA routing
- Subpages: Motivation, Contribute, About, Legal Notice
- GitHub contribution FAB and nav icon
- Dual license display (MIT + CC BY 4.0)
- Deployed via GitHub Pages

**Project Governance**
- `CONTRIBUTING.md` — contribution workflow, BIZ/DEV separation, commit format
- `ARCHITECTURE.md` — codebase structure and rendering architecture
- `MODEL_GUIDE.md` — OIA model layers, terminology, how to contribute
- `GOOD_FIRST_ISSUES.md` — curated entry points for new contributors
- `CODE_OF_CONDUCT.md` — Contributor Covenant 2.1
- `SECURITY.md` — vulnerability reporting process
- `CONVENTIONS.md` — naming, commits, BIZ/DEV rules
- ADRs 0001–0009 covering language, domain separation, issue tracking, ADR format, commits, prompt helper, versioning, release strategy, and repo-as-source-of-truth

**CI/CD**
- GitHub Actions deploy workflow (lint → test → build → GitHub Pages)
- Dependabot for weekly npm dependency updates

**Tooling**
- Husky pre-commit hooks with lint-staged
- ESLint + Prettier + TypeScript strict mode
- 32 tests across model integrity, renderer, detail panel, and routing

[0.1.0]: https://github.com/ruKurz/oi-architecture/releases/tag/v0.1.0
