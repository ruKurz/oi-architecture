# ADR-0008: Release Strategy — GitHub Releases with Manual Trigger

**Decision:** OIA uses GitHub Releases as the primary release mechanism. Releases are triggered manually by the maintainer via a git tag + `gh release create`. Release notes are drawn from `CHANGELOG.md`. No external release tooling is introduced.
**Status:** Proposed
**Date:** 2026-03-13
**Type:** DEV
**Governed by:** —

## Context

The OIA project needs a repeatable, low-friction release process before going public. A release marks a stable snapshot of the model and site — it is the primary artifact community users reference.

Key constraints:
- Stay 100% within the GitHub ecosystem
- Release notes must be human-readable, not a raw commit dump
- Must be compatible with SemVer (ADR-0007) and Conventional Commits (ADR-0005)
- Must not require complex CI until the project is ready for it

**What GitHub Releases provides:**
- Tagged releases tied to a git commit (immutable snapshot)
- Human-readable release notes (written or auto-generated)
- Asset attachments (diagram exports, PDFs if needed)
- Visibility on the GitHub repo front page (community-facing)
- Integration point for future automation (GitHub Actions triggered by `v*` tags)

**CHANGELOG.md role:** `CHANGELOG.md` already exists in the repo and is the human-maintained narrative changelog. GitHub Releases link to or excerpt from it — they do not replace it. This separation keeps the release notes focused (community-facing highlight reel) while the changelog retains the full technical history.

**Quality attributes affected:** contributor experience (clear release visibility), reproducibility (immutable release snapshots), maintainability (no external tooling dependencies).

## Release Process

### Step 1 — Update version string

Update all version locations in a single `chore(release): bump version to vX.Y.Z` commit:
- `oia-site/src/data/oia-model.json` → `meta.version`
- Website pages containing hardcoded version strings (Motivation, Contribute)
- `README.md` version references

### Step 2 — Update CHANGELOG.md

Add a dated entry for the new version. Format:
```markdown
## [X.Y.Z] — YYYY-MM-DD
### Added
### Changed
### Fixed
```

### Step 3 — Create git tag

```bash
git tag -a vX.Y.Z -m "Release vX.Y.Z"
git push origin vX.Y.Z
```

### Step 4 — Create GitHub Release

```bash
gh release create vX.Y.Z \
  --title "vX.Y.Z — <one-line highlight>" \
  --notes "$(cat <<'EOF'
<excerpt from CHANGELOG.md entry for this version>

Full changelog: CHANGELOG.md
EOF
)"
```

For pre-releases (v0.x.y):
```bash
gh release create vX.Y.Z --prerelease ...
```

### Step 5 — Verify GitHub Pages deployment

Confirm the live site reflects the new version after the Pages workflow completes.

## Pre-release Convention

All `v0.x.y` releases are created as **pre-releases** (`--prerelease` flag) in GitHub Releases. This signals to external users that the model schema is not yet stable. The first stable release is `v1.0.0`.

## Consequences

**Easier:** Releases are visible and discoverable on the GitHub repo page. The process is reproducible without special tooling. Release notes are human-curated from the existing CHANGELOG. Future automation (GitHub Actions on `v*` tag) is a drop-in addition.

**Harder:** Version bumping requires updating multiple files in a single commit (enforced by CLAUDE.md Version Identity rule). The maintainer must remember to create the release manually after pushing the tag.

**Required adjustments:** Existing `CHANGELOG.md` must be reviewed to ensure it follows the format above. The `pr-check.yml` CI workflow does not need changes — it validates code quality, not releases.

## Alternatives

| Option | Reason rejected |
|---|---|
| Automated release via GitHub Actions (semantic-release, release-please) | Premature complexity for a solo project; adds tooling dependencies; reduces maintainer control over release notes |
| Only git tags, no GitHub Releases | Tags are not community-facing; GitHub Releases provide the visible release history and asset attachment capability |
| CHANGELOG as sole release artifact | No GitHub Release page means no discoverability via the repo's "Releases" section; contributors expect GitHub Releases for OSS projects |
| External platforms (npm publish, Docker Hub) | Not applicable — OIA has no installable package; GitHub Pages handles the public site |
