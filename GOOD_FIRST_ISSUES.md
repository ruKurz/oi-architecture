# Good First Issues — OIA Contributor Onboarding

## Goal

A visitor clicks through from the OIA site to GitHub — finds a task immediately — understands it — completes it in 30–60 minutes — opens their first PR.

```
OIA Website
   ↓
Contribute Page
   ↓
GitHub Repo → Label: good-first-issue
   ↓
Self-explanatory issue
   ↓
PR in under one hour
```

**The issue must be fully self-explanatory.**
The contributor must not need to understand the full architecture to get started.

---

## Label System

Set up these labels in the repository:

| Label              | Meaning                         |
|--------------------|----------------------------------|
| `good-first-issue` | ideal entry point                |
| `documentation`    | docs / text improvements         |
| `model`            | changes to the OIA model data    |
| `renderer`         | UI and diagram rendering         |
| `site`             | website content and pages        |
| `discussion`       | architecture discussion          |

Minimum required: `good-first-issue`, `documentation`, `model`, `site`

---

## Issue Template

File: `.github/ISSUE_TEMPLATE/good-first-issue.md`

```markdown
---
name: Good First Issue
about: A well-scoped task for new contributors
labels: good-first-issue
---

## Context

[Describe the relevant part of the OIA model or site — 2–3 sentences.
No prior knowledge of the full architecture required.]

---

## Task

[What specifically needs to be done — concrete, bounded, unambiguous.]

---

## Where to change it

```
[file path]
```

Find: `[section or key]`

Change: [what and how]

---

## Local Development

```bash
git clone https://github.com/ruKurz/oi-architecture.git
cd oi-architecture/oia-site && npm install && npm run dev
```

Open: `http://localhost:5173/oi-architecture/`

Changes update automatically via Hot Reload.

---

## Requirements

- Keep changes focused and minimal
- Avoid marketing language
- Ensure lint and tests pass before committing:

```bash
npm run lint && npm test
```

---

## Submitting

1. Fork the repository
2. Create a branch: `git checkout -b your-change-description`
3. Commit your change (see [CONVENTIONS.md](../CONVENTIONS.md) for commit format)
4. Open a Pull Request — CI verifies lint, tests, and build

---

**Estimated time:** 30–60 minutes
```

---

## Good First Issue Ideas

### Model improvements (highest strategic value)

When contributors improve the model, they read it, understand it, and sharpen it —
that is exactly how OIA matures.

```
Improve description of the "Cognitive Capabilities" layer
Improve description of "Organizational Knowledge Core"
Add example use case for the "Maintenance Assistant" scenario
Suggest an additional capability for the Cognitive Capabilities layer
Clarify the distinction between Solutions and Cognitive Capabilities
```

### Site improvements

```
Improve readability of the Motivation page
Add alt text to the architecture diagram
Improve mobile layout for the architecture view
Fix a typo or improve phrasing on any page
```

### Architecture discussions

```
Discussion: Should "Agents" be a separate layer?
Discussion: How does the Situation Layer relate to context injection in LLMs?
```

---

## README Badge Section

Add to `README.md`:

```markdown
## Good First Issues

New contributors are welcome.

Look for issues labeled **[good-first-issue](https://github.com/ruKurz/oi-architecture/labels/good-first-issue)**.

These tasks are designed to be completed in under one hour.
```

---

## Key Principles

**Small scope beats ambitious scope.**
A focused issue that can be completed in 30 minutes creates more contributors than a complex one that nobody finishes.

**Include the estimated time.**
The single sentence `Estimated time: 30–60 minutes` significantly lowers the barrier to starting.

**Model issues over code issues.**
Contributors who improve model descriptions learn the architecture while improving it.
That is the flywheel: contributor engagement → model clarity → better architecture.
