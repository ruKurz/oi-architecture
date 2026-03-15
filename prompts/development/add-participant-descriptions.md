## Context

The System Participants layer (`#L9`) contains 9 clickable participant blocks.
Clicking any block navigates to the detail view via `#/detail/<id>`.
The detail view (`detail.ts`) already renders `el.description` for all elements.

Affected files:
- `oia-site/src/data/oia-model.json` — `#L9` participant items
- `oia-site/src/data/types.ts` — `ParticipantItem` interface
- `oia-site/src/renderer/render-system-participants.ts` — spectrum caption rendering
- `oia-site/src/views/detail.ts` — renders `description` (no change expected)
- `context/system-participants-concept.md` — source of truth for all content

## Goal

All 9 participant blocks show a context-rich description in the detail view when clicked, while in-spectrum taglines remain short and visually unaffected.

## Constraints

- Does not change the visual appearance of the spectrum in the diagram
- Does not modify `detail.ts` rendering logic unless the current logic is insufficient
- Does not touch any layer other than `#L9`
- Does not introduce inline `style=` attributes
- BIZ/DEV: content changes (`oia-model.json`, `context/`) are committed separately from code changes (`types.ts`, renderer)

## Inputs

- `oia-site/src/data/oia-model.json` — current `#L9` structure (read before editing)
- `oia-site/src/data/types.ts` — `ParticipantItem` interface
- `oia-site/src/renderer/render-system-participants.ts` — spectrum entity rendering
- `context/system-participants-concept.md` — source for all description text
- GitHub Issue #167 — full description content table

## Steps

**Phase 1 — Type extension (DEV)**

1. Read `oia-site/src/data/types.ts`
2. Add `caption?: string` to `ParticipantItem` — this separates the short in-spectrum tagline from the rich detail-view description

**Phase 2 — Renderer update (DEV)**

3. Read `oia-site/src/renderer/render-system-participants.ts`
4. In `renderSpectrum`, update the entity caption to use `item.caption ?? item.description` instead of `item.description`
   — this ensures existing short taglines continue to render if `caption` is absent

**Phase 3 — Model content (BIZ)**

5. Read `oia-site/src/data/oia-model.json` — locate all 9 `#L9-*` participant items
6. For spectrum items: rename the current `description` value to `caption`; add new `description` with rich text per Issue #167
7. For triad items: add `description` field with rich text per Issue #167
   — triad items have no visual caption, so no `caption` field is needed

**Phase 4 — Verify**

8. Run `npm test` — all tests must pass
9. Run `npm run build` — must be clean
10. Open `#/detail/#L9-t-initiator` in browser and confirm description appears

## Decision rules

- If `caption` vs `description` distinction causes confusion elsewhere in the codebase: check all usages of `item.description` in renderers before proceeding — do not silently break other layers
- If the description text in Issue #167 conflicts with `context/system-participants-concept.md`: use the concept doc as the authoritative source; flag the conflict in a PR comment

## Acceptance criteria

- [ ] `ParticipantItem` in `types.ts` has `caption?: string`
- [ ] Spectrum renderer uses `item.caption ?? item.description` for visual tagline
- [ ] All 3 triad items have `description` in `oia-model.json`
- [ ] All 6 spectrum items have `caption` + `description` in `oia-model.json`
- [ ] Detail view shows rich description when clicking any of the 9 blocks
- [ ] In-spectrum taglines unchanged visually
- [ ] `npm test` passes · `npm run build` clean

## Output

- `oia-site/src/data/types.ts` — changed
- `oia-site/src/renderer/render-system-participants.ts` — changed
- `oia-site/src/data/oia-model.json` — changed
