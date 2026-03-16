# OIA · Create Release

**Prompt type:** Execution (manual trigger only)
**Domain:** DEV

---

## Context

Governs the manual release process for OIA. Read before execution:
- `decisions/adr/0008-release-strategy.md` — release process and branch convention
- `decisions/adr/0007-versioning-scheme.md` — version bump rules and consistency locations
- `CHANGELOG.md` — existing format (new entry is prepended)

Affected files: `CHANGELOG.md` · `README.md` · `oia-site/src/data/oia-model.json` (version check only)

---

## Goal

A tagged GitHub Release exists for the target version, with `CHANGELOG.md` updated with all closed issues since the last release (deduplicated), `README.md` version references updated, and a generated narrative release description published on the GitHub Release page.

---

## Inputs

Provided by the maintainer before execution:
- Target version string (e.g. `0.4.0`)
- Optional: release theme or one-liner (e.g. `"Accountability, rendered"`)
- GitHub Issue number that authorised this release (for commit footer)

Read from repository:
- `CHANGELOG.md` — last release entry: version and date
- `oia-site/src/data/oia-model.json` → `meta.version`
- `README.md` — version references
- `decisions/adr/0007-versioning-scheme.md` — all version string locations

---

## Constraints

- Release is always triggered manually — never automatically
- Tag format: `vX.Y.Z` (annotated)
- Narrative description must be generated from closed GitHub issues since the last tag — not invented
- `CHANGELOG.md` entries must not duplicate issues already listed in previous entries
- **Do NOT merge the release branch back to `main`** — that step is the maintainer's responsibility
  _(Note: ADR-0008 Step 5 specifies a merge; this prompt intentionally omits it. Update ADR-0008 if adopted as permanent policy.)_
- If version strings are inconsistent across files: **STOP and report** — do not proceed
- Humor is welcome in the narrative description; the issue list must be accurate and complete

---

## Steps

### Step 1 — Verify version consistency

Check `meta.version` in `oia-site/src/data/oia-model.json` against the target version.
Check all other locations per ADR-0007: website pages (Motivation, Contribute), `README.md`.

If any location is inconsistent: **STOP.** Report all mismatches. Do not proceed.

---

### Step 2 — Create release branch

```bash
git checkout main && git pull
git checkout -b release/v{version}
git push -u origin release/v{version}
```

---

### Step 3 — Collect closed issues since last release

```bash
# Find the date of the last release tag
git log --tags --simplify-by-decoration --pretty="format:%D %ai" | grep "tag:" | head -2

# Collect closed issues
gh issue list --state closed --limit 200 --json number,title,labels,closedAt
```

Filter: issues closed **after** the date of the last Git tag.

Group by label:
- `domain:biz` → **Model & Content**
- `domain:dev` + `renderer` or `ux` → **Renderer & UX**
- `domain:dev` + `infra`, `prompt`, or `architecture` → **Infrastructure & Governance**

**Deduplication:** Extract issue numbers already listed in previous `CHANGELOG.md` entries.
Remove any duplicates from the collected list. Note each skipped issue in output.

---

### Step 4 — Generate release description

Write a short narrative (3–5 sentences) summarising what this release achieves.
Tone: confident, slightly self-aware; a touch of humor is welcome.
Opening examples: `"v0.4.0 arrives with opinions."` / `"This release knows what it is."`

Append the grouped issue list:

```
**Model & Content**
- #N Title

**Renderer & UX**
- #N Title

**Infrastructure & Governance**
- #N Title
```

---

### Step 5 — Update CHANGELOG.md

Prepend a new entry in the existing format:

```markdown
## [X.Y.Z] — YYYY-MM-DD

<narrative summary — same text as Step 4>

### Model & Content
- #N Title

### Renderer & UX
- #N Title

### Infrastructure & Governance
- #N Title
```

⚠️ **Irreversible:** file is modified. Verify the new entry before committing.

---

### Step 6 — Update README.md

Find all version references (badge URL, status line) and update to the target version.

---

### Step 7 — Commit

```
docs(release): prepare v{version} release notes (#N)

Refs #N
```

Where `#N` is the GitHub Issue that authorised this release.

---

### Step 8 — Tag and push

```bash
git tag -a v{version} -m "Release v{version}"
git push origin v{version}
```

⚠️ **Irreversible:** tag pushed to remote. Verify the CHANGELOG entry and version before tagging.

---

### Step 9 — Create GitHub Release

```bash
gh release create v{version} \
  --title "v{version} — {optional theme}" \
  --notes "{narrative + grouped issue list from Step 4}" \
  --prerelease   # remove this flag for v1.0.0 and above
```

---

### Step 10 — Report

Output the GitHub Release URL to the maintainer.
The maintainer reviews and publishes manually if created as draft.

> **Note:** Merging `release/v{version}` back to `main` is the maintainer's responsibility.
> This prompt does not execute the merge (see ADR-0008 Step 5 — known deviation).

---

## Decision rules

| Situation | Behaviour |
|---|---|
| Version strings inconsistent | STOP — report all mismatches, do not proceed |
| Issue already in a previous CHANGELOG entry | Skip it — note the skip in output |
| No closed issues found since last release | Note "no closed issues found" — proceed with empty lists |
| `gh` not available | STOP — report, do not proceed |
| No theme provided | Use version number only in release title |

---

## Acceptance criteria

- [ ] `meta.version` consistent across all files before proceeding
- [ ] `CHANGELOG.md` updated with all closed issues since last release tag
- [ ] No issues duplicated from previous `CHANGELOG.md` entries
- [ ] `README.md` version references updated
- [ ] Git tag `vX.Y.Z` pushed to origin
- [ ] GitHub Release created (draft or published per maintainer choice)
- [ ] Release description contains narrative + grouped issues
- [ ] No merge executed — maintainer handles merge separately

---

## Output

```
prompts/development/create-release.md — this file (reference only, not modified during execution)
CHANGELOG.md — changed
README.md — changed
Git tag vX.Y.Z — created
GitHub Release vX.Y.Z — created
```
