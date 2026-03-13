# OIA · OSS Readiness Review

**Prompt type:** Generation
**Domain:** DEV

---

## Kontext

Read before execution:
- `README.md` — first impression, target audience, quick start
- `docs/CONTRIBUTING.md` — contributor experience
- `CONVENTIONS.md` — project rules and BIZ/DEV separation
- `CLAUDE.md` — scope rules, AI tooling configuration
- `.github/` — workflows, templates (if present)
- `oia-site/` — production code, tests, CI configuration
- `decisions/` — ADRs and governance documents

Active repository: determined via `git remote get-url origin`.

---

## Ziel

At the end, a complete review document exists at `reviews/oss-readiness-review-YYYY-MM-DD.md`, evaluating the project's strengths, weaknesses, and missing elements from three external perspectives — as a basis for targeted improvements before public release.

---

## Constraints

- **Changes no project files**
- **Creates no GitHub Issues** (that is the task of `project-review.md` as a follow-up step)
- **Does not evaluate BIZ decisions** (OIA layer structure, terminology)
- **Does not recommend fundamental architecture reorientations** — only OSS readiness
- **Does not touch** `node_modules`, `.git`, `dist`, `build`
- This review **does not replace** the internal compliance check (`project-review.md`)

---

## Perspektiven

The analysis is conducted simultaneously from three external perspectives:

1. **External developer** (first-time contributor)
2. **Experienced OSS maintainer** (critical reviewer)
3. **Critical user** (evaluating an adoption decision)

---

## Schritte

### 1 · First impression

Analyse what a visitor understands on first contact with the repository — and what remains unclear:
- What is immediately understandable?
- What is unclear or confusing?
- Would an external developer try the project? Why (not)?

### 2 · README & documentation review

Evaluate:
- Clarity of problem statement and target audience
- Quick-start usability (does it work without prior knowledge?)
- What is missing: screenshots, live URL, examples
- Language and consistency (is the target audience clearly addressed?)

List specific weaknesses with location (file, section).

### 3 · Contributor experience

Analyse from the perspective of an external contributor:
- Is the project structure understandable?
- Is it clear where to start?
- Are coding conventions recognisable?
- Are there smooth entry points (Good First Issues, labels, onboarding)?

Name friction points explicitly.

### 4 · Codebase & architecture

Evaluate (without explaining fundamental concepts):
- Modularity and separation of concerns
- Naming consistency
- Technical debt signals (DRY violations, hardcoding, untested paths)
- Architecture risks for future contributors

### 5 · Project governance & open source readiness

Check presence and quality:

| Artefact | Status | Quality |
|---|---|---|
| LICENSE | ? | ? |
| CONTRIBUTING.md | ? | ? |
| CODE_OF_CONDUCT.md | ? | ? |
| SECURITY.md | ? | ? |
| CHANGELOG.md | ? | ? |
| Issue templates | ? | ? |
| PR template | ? | ? |
| dependabot.yml | ? | ? |
| Roadmap (findable) | ? | ? |

Explain what is missing or insufficient.

### 6 · Testing & quality signals

Evaluate:
- Presence and structure of tests
- CI automation and coverage
- Risks for future maintainability

### 7 · Critical questions before release

Formulate at least 10 uncomfortable questions that a critical public will ask — questions the project does not yet have a clear answer to.

### 8 · Top 10 improvements before open source release

Rank the 10 most impactful improvements by impact:

| # | Improvement | Impact |
|---|---|---|
| 1 | … | … |
| … | … | … |

Focus: what increases credibility and usability most?

### 9 · Open source maturity assessment

Evaluate on this scale:

- **Level 1** – Experimental
- **Level 2** – Usable
- **Level 3** – Open Source Ready
- **Level 4** – Mature OSS

Justify the rating with concrete findings.

### 10 · Final honest verdict

Answer honestly: if you discover this project online, would you:

- Ignore it
- Watch it
- Try it
- Adopt it

Explain why. Focus: does the answer help the project survive public scrutiny?

---

## Entscheidungsregeln

| Situation | Behaviour |
|---|---|
| Finding could be intentional (e.g. deliberate bilingualism) | Name it anyway — external perception counts, not author intention |
| Governance artefact missing | Enter as ❌ Missing in the §5 table, rank in §8 if relevant |
| Code quality problem without OSS relevance | Mention only if it directly affects contributor experience |
| BIZ content affected (OIA model, layer structure) | Out of scope — do not evaluate |

---

## Akzeptanzkriterien

- [ ] All 10 sections are present and filled in
- [ ] §8 (Top 10) is ranked by impact, not alphabetically
- [ ] §9 (Maturity) contains a concrete level rating with justification
- [ ] §10 (Verdict) contains one of the four options (Ignore / Watch / Try / Adopt)
- [ ] No project file was changed
- [ ] Review saved at `reviews/oss-readiness-review-YYYY-MM-DD.md`

---

## Output

```
reviews/oss-readiness-review-YYYY-MM-DD.md — created
```
