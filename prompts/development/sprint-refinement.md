# OIA · Sprint Refinement

**Prompt type:** Execution (interactive — one checkpoint per issue)
**Domain:** DEV

> Sharpens one or more issues to sprint-ready quality: clear expected result, identified risks, complete AC. Run after sprint goal agreement and before sprint start — or at any time during the sprint when an issue needs sharpening.

---

## Context

- GitHub Issues — the issue(s) to be refined (passed as input: `#N` or list of `#N`)
- `CONVENTIONS.md` §2.4 — AC quality rules, post-deploy marker, cross-cutting checklist
- `CONVENTIONS.md` §2.3 — issue sizing conventions (XS/S/M/L)

---

## Goal

Each refined issue has: a clear expected result, evaluated risks, complete and verifiable AC, and a confirmed size estimate.

---

## Constraints

- Does not implement anything
- Does not change source files
- May create new sub-issues if the issue is too large or has hidden sub-tasks
- Best-try approach: flag missing information rather than blocking
- One checkpoint per issue — does not finalize refinement without human confirmation

---

## Steps

### For each issue to be refined:

#### R-1 — Load issue

```bash
gh issue view <N> --json title,body,labels
```

Read the full issue body. Identify: context, action/goal, acceptance criteria.

---

#### R-2 — Clarify expected result

Answer: "What does 'done' look like for this issue?" — one concrete sentence.

If the issue body does not make this clear: draft a result statement and present it.

---

#### R-3 — Risk evaluation

Identify up to 3 risks:
- **Scope risk:** Is the issue clearly bounded? Could it expand?
- **Dependency risk:** Does it depend on another open issue or external decision?
- **AC risk:** Are there AC items that are not verifiable before a deployment? Mark them `(post-deploy)`.

---

#### R-4 — AC completeness check

For each existing AC item:
- Is it verifiable? (If not: rewrite or mark as post-deploy)
- Is it specific enough? (File/section/command must be named)

If AC is missing: draft AC items and present them.

If the issue is a cross-cutting concept: check the integration point checklist (CONVENTIONS.md §2.4).

---

#### R-4.1 — Renderer / visual scope (if applicable)

Skip if the issue has no renderer or visual output.

**Visual spec requirement:** Before this issue can be sprint-ready, one of the following must exist:
- An annotated screenshot or annotated HTML prototype attached to the issue, OR
- An explicit CSS spec block (property + value + selector), OR
- A link to a rendered preview that defines the expected visual state

If no artifact exists: draft a minimal spec inline in the issue body, or flag the issue as not sprint-ready.

**Model + renderer design decision:** If the issue touches both model types (`types.ts`, `oia-model.json`) and renderer logic:
- Field names (new properties on model items) must be decided now — not mid-implementation
- Visual vocabulary (class names, element structure) must be agreed before coding begins
- Document these as a `## Design notes` block in the issue body before marking sprint-ready

---

#### R-5 — Size estimate

Confirm or revise the size:

| Size | Guideline |
|---|---|
| XS | < 15 minutes |
| S | 15–45 minutes |
| M | 45 min – 2 hours |
| L | half a day — splitting recommended |

If L: recommend splitting into sub-issues and offer to create them.

---

#### ⏸ CHECKPOINT — Confirm refinement

> **STOP. Present the refinement result for this issue:**

```
Issue #N — [Title]
Expected result: [one sentence]
Risks: [list]
AC (revised): [list]
Size: [XS/S/M/L]
New sub-issues: [list or "none"]
```

Ask: "Does this look right? Any corrections before I update the issue?"

**Wait for reply.**

---

#### R-6 — Update issue

If confirmed: update the issue body with the refined AC.

```bash
gh issue edit <N> --body "<updated body>"
```

If sub-issues were approved: create them.

---

## Decision rules

| Situation | Behaviour |
|---|---|
| Issue is already well-defined | Confirm quickly: "This issue is already sprint-ready" — skip to checkpoint |
| Issue depends on an unresolved decision | Flag as `blocked by #N` in AC — do not refine further |
| Issue is XL (multi-day) | Always recommend splitting — do not mark as sprint-ready |
| AC item cannot be verified pre-deploy | Mark `(post-deploy)` — still valid, does not block close |
| Renderer / visual issue — no artifact | Block sprint-ready — create or draft spec artifact first |
| Model + renderer issue — no design notes | Block sprint-ready — document field names and visual vocabulary in issue body first |

---

## Acceptance criteria

- [ ] Each refined issue has a clear expected result (one sentence)
- [ ] Risks identified (or explicitly "none")
- [ ] AC items are specific and verifiable (or marked post-deploy)
- [ ] Size confirmed
- [ ] Issue body updated in GitHub
- [ ] Sub-issues created if needed and approved
- [ ] Renderer / visual issues: reference artifact confirmed or noted in issue body
- [ ] Model + renderer issues: design decisions documented in issue body (`## Design notes`)

---

## Output

```
GitHub Issues — updated bodies (one per refined issue)
GitHub Issues — new sub-issues if created (variable count)
Chat output — refinement summary per issue
```
