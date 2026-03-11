# OIA · Parking Lot

> **Parking Lot — offene Einträge als GitHub Issues anlegen vor Arbeitsbeginn.**
> Offizielle Aufgaben → [GitHub Issues](https://github.com/ruKurz/oi-architecture/issues)
> Diese Datei ist kein Issue-Tracker — nur ein Session-Notizbuch.

Beobachtungen, offene Punkte und Ideen, die während der Arbeit auffallen
und nicht sofort umgesetzt werden können.

Format eines Eintrags:
```
**[YYYY-MM-DD] [AKTION] `#kategorie` [S|M|L]** (DEV|BIZ)
→ Betroffener Pfad: Beschreibung
→ Aktion: Was konkret zu tun ist
```

| Symbol | Bedeutung |
|---|---|
| 🔴 | Blocker / kritisch |
| 🟡 | Wichtig, aber nicht dringend |
| 🟢 | Idee / langfristig |

Kategorien: `model` · `renderer` · `prompt` · `architecture` · `infra` · `ux` · `content`

---

## 🔴 High

<!-- Kritische Punkte: Fehler, Blocker, wichtige Architekturentscheidungen -->

---

## 🟡 Medium

<!-- Verbesserungen, neue Features, offene Designfragen -->

---

## 🟢 Low / Later

<!-- Ideen, optionale Erweiterungen, langfristige Ziele -->

---

## ✅ Erledigt

<!-- Abgeschlossene Items hierher verschieben — nicht löschen (dient als Changelog) -->

**[2026-03-11] Sprachstrategie dokumentiert `#architecture` [S]** (DEV)
→ Konvention in `CONVENTIONS.md` §2.2 + ADR-0001 definiert

**[2026-03-11] Leere Prompt-Dateien gelöscht `#prompt` [S]**
→ 5 x 0-byte Dateien entfernt: article-template, diagram-template, linkedin-*.md, context-doc-generator

**[2026-03-11] Hardcoded Pfade in Prompts relativiert `#prompt` [S]**
→ `prompts/development/build-microsite.md` + `prompts/templates/prompt-helper.md`: absolute Pfade entfernt

**[2026-03-11] Doppelte build-microsite.md aufgelöst `#architecture` [S]**
→ Root `build-microsite.md` (alte Version, Phase 0, OneDrive-Pfade) gelöscht — aktive Version: `prompts/development/build-microsite.md`

**[2026-03-11] Tests für router.ts und detail.ts hinzugefügt `#infra` [M]**
→ `tests/router.spec.ts` (9 Tests: Overview render, Zoom, Detail route) + `tests/detail.spec.ts` (8 Tests: Render, Back-Link, Not-Found)
→ Alle 32 Tests grün

**[2026-03-11] ESLint + Prettier + npm audit eingerichtet `#infra` [M]**
→ `eslint.config.js` (flat config, typescript-eslint, prettier-compat) + `.prettierrc`
→ Scripts: `lint`, `lint:fix`, `format`, `format:check`, `typecheck`
→ CI: Security audit + Lint vor Test-Run in `deploy.yml`
→ 0 Lint-Fehler, alle Dateien formatiert, 32 Tests grün
