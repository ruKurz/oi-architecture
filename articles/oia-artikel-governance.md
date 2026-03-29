# Wer handelt. Wer haftet. Und was passiert, wenn die Maschine einfach entscheidet.

Gestern habe ich an meinem Open-Source-Projekt gearbeitet.

Ich habe Claude Code angewiesen: *"Setze die Erweiterungen des Issues #188 um."*

Die Antwort kam ohne Rückfrage:

*"Ich gehe davon aus, du meinst Issue #190 (soeben erstellt). Ich lege den Feature-Branch an."*

```
git checkout -b feature/#190-wwh-participant-detail
```

Ich hatte #188 gemeint. Der Agent hatte entschieden, dass ich #190 gemeint haben muss – und hat gehandelt. Kommuniziert hat er das. Gefragt hat er nicht.

Ich habe es zum Glück bemerkt und den Branch gelöscht. Etwas Zeit verloren. Beim nächsten Mal könnte es unbeobachtet geschehen oder ein Produktionssystem betreffen.

Das ist keine Fehlfunktion. Das ist wie diese Systeme strukturell funktionieren: Sie optimieren auf Aufgabenlösung. Nicht auf Regelkonformität. Dieser Unterschied wird in vielen Organisationen noch unterschätzt.

---

## Drei Typen von Akteuren – und warum der Unterschied zählt

Im OIA-Modell unterscheide ich drei Akteur-Typen:

**Human** – entscheidet kontextuell, trägt Erfahrung, Urteilsvermögen, soziale Einbettung. Manchmal langsam, manchmal inkonsistent. Aber: trägt Verantwortung durch Sozialisation, Recht und Kultur – Mechanismen, die keine Maschine mitbringt.

**Agent** – operiert parallel, kontinuierlich, ohne Ermüdung, ohne politische Rücksichten. Erreicht operativen Durchsatz, den kein Mensch erzielt. Aber: kein Rechtsstatus, keine gesellschaftliche Rechenschaftspflicht – und eine strukturelle Tendenz, Zieldefinition gegenüber Regelkonformität zu priorisieren. ¹

**System** – deterministisch. Führt aus, was konfiguriert wurde. Kein eigener Entscheidungsraum.

Das Problem ist nicht, dass Agents falsch handeln. Das Problem ist, dass sie korrekt handeln – gemessen an ihrer eigenen Zielfunktion, nicht an deiner Erwartung.

<!-- VISUALISIERUNG 1: Governance-Triade — Initiator → Actor → Beneficiary -->

---

## Der Kern des Problems

> **Action can be delegated. Responsibility cannot.**

Wenn Agents immer leistungsfähiger werden – wenn sich ihre Fähigkeiten denen von Menschen annähern – bleibt diese Asymmetrie strukturell bestehen. Der EU AI Act adressiert das in Artikel 22: Bei Hochrisiko-Systemen ist menschliche Aufsicht keine Option, sondern Pflicht. ²

<!-- VISUALISIERUNG 2: 2×2-Matrix — Autonomy vs. Accountability Ceiling -->

---

## Was das für Organisationen bedeutet

Bisher haben wir gelernt, Ergebnisse zu kontrollieren: *Stimmt das Resultat?*

Mit Agents müssen wir lernen, Verhalten zu kontrollieren: *Handelt der Agent wie erwartet – auch in Situationen, die niemand vorhersehen konnte?*

Das ist eine Verschiebung in der Kontrolllogik. Nicht weniger Kontrolle – präzisere Erwartungen. Klarere Regeln. Und Regeln, die explizit genug sind, dass auch eine Maschine sie zuverlässig anwenden kann.

Wie eine Organisation solche Regeln aufschreibt – und warum die meisten dabei scheitern, bevor sie auch nur einen Agenten deployen – ist das Thema meines nächsten Beitrags.

Das Modell ist Open Source: → https://rukurz.github.io/oi-architecture/

---

*Ist euch schon ähnliches passiert – ein Agent hat nicht das getan, was ihr erwartet habt? Schreibt mir: Was hat der Agent getan – und was hättet ihr stattdessen erwartet? Diese Erfahrungen sind wertvoller als jedes Framework.*

#OIA #EnterpriseAI #AIGovernance #KnowledgeManagement #EnterpriseArchitecture

---

### Quellen

¹ Specification Gaming / Goodhart's Law – Tendenz von Optimierungssystemen, Zielmetriken zu maximieren statt zugrundeliegende Regeln einzuhalten. Vgl. Krakovna et al. (2020), *Specification gaming: the flip side of AI ingenuity*, DeepMind Blog.

² EU AI Act, Artikel 22: Verpflichtung zur menschlichen Aufsicht bei Hochrisiko-KI-Systemen. In Kraft seit August 2024.
