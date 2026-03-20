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

## Contribution Workflow

1. **Open or find a GitHub Issue** — every change starts with an issue.
2. **Create a feature branch** from `main`:
   ```bash
   git checkout -b feature/#42-your-change-description
   ```
   Branch naming: `feature/#<issue-number>-<short-description>` (see [CONVENTIONS.md](CONVENTIONS.md)).
3. **Implement** your change on the branch.
4. **Commit** using Conventional Commits (see below).
5. **Push** and open a **Pull Request** against `main`.
6. **Check the preview deployment** — Netlify builds a preview for each PR. The URL appears in the PR checks. Verify your change renders correctly before requesting review.
7. **Review and merge** — a maintainer reviews and merges to `main`.

---

## Commit Format

We follow [Conventional Commits](CONVENTIONS.md#23-conventional-commits).
Every commit subject ends with the issue reference in parentheses:

```
<type>(<scope>): <imperative description> (#N)

Closes #N   ← closes the issue
Refs #N     ← references without closing
```

Examples:

```
feat(renderer): add outcome layer highlighting (#42)
content(model): improve Cognitive Capabilities description (#67)
docs(views): update Motivation page intro (#88)
```

Allowed types: `feat` · `fix` · `content` · `docs` · `refactor` · `test` · `chore` · `style`

---

## BIZ / DEV Separation

Every change belongs to either **BIZ** (model, content, decisions) or **DEV** (code, tooling, infrastructure). A single commit touches exactly one domain.

| Domain | Folders |
|---|---|
| DEV | `oia-site/` · `.github/` · `prompts/` |
| BIZ | `context/` · `articles/` · `diagrams/` · `decisions/` · `notes/` |

## Decision Records

Significant decisions are documented in two formats:

- **ADR** (Architecture Decision Record) — for technical and structural choices. Stored in `decisions/adr/`. Use `prompts/development/create-adr.md`.
- **ODR** (Organizational Decision Record) — for governance and operating model decisions (ecosystem type, language policy, process principles). Stored in `decisions/odr/`. Use `prompts/development/create-odr.md`.

If your contribution changes how the project operates or governs itself — not just what it builds — it may warrant an ODR. See [`decisions/README.md`](decisions/README.md) for the full index and [`context/agent/odr-concept.md`](context/agent/odr-concept.md) for the concept.

---

## Pull Request

Use the PR template — it is pre-filled when you open a PR on GitHub. Fill in:

- **Linked issue** — the `#N` reference
- **AC verification** — confirm each acceptance criterion from the issue
- **Preview deployment** — paste the Netlify preview URL so the reviewer can verify rendering

Keep PRs focused — one change per PR. A small, well-explained PR is reviewed faster than a large one.

---

## Releases

OIA releases are published on GitHub as GitHub Releases with curated release notes. A release is not the same as a sprint end — releases are explicit, tagged events.

To follow releases: watch the repository on GitHub and enable "Releases" notifications.
To read release notes: see the [Releases page](https://github.com/ruKurz/oi-architecture/releases) on GitHub.

---

## What We Value

- **Lessons from real systems** — including what did not work.
- **Concrete gaps** between the model and implementation reality.
- **Clarity over completeness** — a sharp definition beats a long list.
- **Small, focused changes** that improve one thing well.

See [docs/GOOD_FIRST_ISSUES.md](docs/GOOD_FIRST_ISSUES.md) for a curated list of entry points.

---

## Questions

Open an issue or start a discussion on GitHub.
If you want to discuss architectural ideas, reach out on [LinkedIn](https://www.linkedin.com/in/r%C3%BCdiger-kurz).
