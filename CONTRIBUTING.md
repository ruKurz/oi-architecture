# Contributing to OIA

OIA improves through shared experience — from people who actually build systems where knowledge must become action.

Contributions do not have to be large. A comment on an issue, a challenge to an assumption, or a small improvement to a model description is a contribution.

---

## Quick Start

**Estimated time to first contribution: 20–30 minutes.**

### Prerequisites

- Node.js 20+
- Git
- A GitHub account

### 1 — Fork and clone

```bash
git clone https://github.com/<your-fork>/oi-architecture.git
cd oi-architecture/oia-site
npm install
```

### 2 — Start the dev server

```bash
npm run dev
# → http://localhost:5173/oi-architecture/
```

Changes update automatically via Hot Reload.

### 3 — Run tests

```bash
npm test
# All tests must stay green before you commit
```

### 4 — Lint

```bash
npm run lint
```

---

## Finding the Right Place

| What you want to change | Where to look |
|---|---|
| OIA model (layers, items, labels) | `oia-site/src/data/oia-model.json` |
| Diagram rendering | `oia-site/src/renderer/` |
| Detail panel | `oia-site/src/renderer/render-panel.ts` |
| Navigation & routing | `oia-site/src/router.ts` |
| Website pages (Motivation, About…) | `oia-site/src/views/` |
| Colors, layout, design tokens | `oia-site/src/styles/` |
| Constants & zoom levels | `oia-site/src/constants.ts` |

For OIA model concepts and layer definitions, see [docs/MODEL_GUIDE.md](docs/MODEL_GUIDE.md).

For codebase architecture and technical design, see [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md).

---

## Making a Change

Before you start:

- Read [CONVENTIONS.md](CONVENTIONS.md) — naming, BIZ/DEV separation, commit format.
- Open or find a GitHub Issue for your change. Every commit references an issue.

After your change:

```bash
npm run lint && npm test
```

Both must pass before committing.

---

## Commit Format

We follow [Conventional Commits](CONVENTIONS.md#23-conventional-commits):

```
<type>(<scope>): <imperative description>

Closes #N   ← closes the issue
Refs #N     ← references without closing
```

Examples:

```
feat(renderer): add outcome layer highlighting
content(model): improve Cognitive Capabilities description
docs(views): update Motivation page intro
```

Allowed types: `feat` · `fix` · `content` · `docs` · `refactor` · `test` · `chore` · `style`

---

## BIZ / DEV Separation

Every change belongs to either **BIZ** (model, content, decisions) or **DEV** (code, tooling, infrastructure). A single commit touches exactly one domain.

| Domain | Folders |
|---|---|
| DEV | `oia-site/` · `.github/` · `prompts/` |
| BIZ | `context/` · `articles/` · `diagrams/` · `decisions/` · `notes/` |

---

## Pull Request

1. Create a branch: `git checkout -b feat/your-change-description`
2. Commit your change with a Conventional Commit message.
3. Push and open a Pull Request against `main`.
4. CI verifies lint, tests, and build automatically.

Keep PRs focused — one change per PR. A small, well-explained PR is reviewed faster than a large one.

---

## What We Value

- **Lessons from real systems** — including what did not work.
- **Concrete gaps** between the model and implementation reality.
- **Clarity over completeness** — a sharp definition beats a long list.
- **Small, focused changes** that improve one thing well.

See [GOOD_FIRST_ISSUES.md](GOOD_FIRST_ISSUES.md) for a curated list of entry points.

---

## Questions

Open an issue or start a discussion on GitHub.
If you want to discuss architectural ideas, reach out on [LinkedIn](https://www.linkedin.com/in/r%C3%BCdiger-kurz).
