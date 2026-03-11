export function renderImpressumView(): HTMLElement {
  const view = document.createElement('div')
  view.className = 'page-view'
  view.innerHTML = `
    <div class="page-view__content">

      <div class="page-view__eyebrow">Legal</div>
      <h1 class="page-view__lead">Impressum</h1>

      <div class="page-placeholder">
        ⚠️ Pflichtangaben nach § 5 TMG — vom Autor zu vervollständigen vor Go-Live
      </div>

      <section class="page-view__section">
        <h2 class="page-view__section-title">Angaben gemäß § 5 TMG</h2>
        <p class="page-view__body legal">
          <!-- PFLICHTFELD: Vollständiger Name -->
          Rüdiger Kurz<br>
          <!-- PFLICHTFELD: Vollständige Postanschrift -->
          [Straße und Hausnummer]<br>
          [PLZ Ort]<br>
          Deutschland
        </p>
      </section>

      <section class="page-view__section">
        <h2 class="page-view__section-title">Kontakt</h2>
        <p class="page-view__body legal">
          <!-- PFLICHTFELD: E-Mail (Mindestanforderung nach § 5 TMG) -->
          E-Mail: <a class="page-view__link" href="mailto:kurz@vnc-online">kurz@vnc-online</a><br>
          <!-- OPTIONAL aber empfohlen: Telefon -->
          <!-- Telefon: [Nummer] -->
        </p>
      </section>

      <section class="page-view__section">
        <h2 class="page-view__section-title">Verantwortlich für den Inhalt (§ 55 Abs. 2 RStV)</h2>
        <p class="page-view__body legal">
          <!-- PFLICHTFELD: Name und Anschrift der inhaltlich verantwortlichen Person -->
          Rüdiger Kurz<br>
          [Anschrift wie oben]
        </p>
      </section>

      <section class="page-view__section">
        <h2 class="page-view__section-title">Haftungsausschluss</h2>

        <h3 class="page-view__subsection-title">Haftung für Inhalte</h3>
        <p class="page-view__body legal">
          Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt.
          Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann
          jedoch keine Gewähr übernommen werden. Als Diensteanbieter sind wir gemäß
          § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen
          Gesetzen verantwortlich.
        </p>

        <h3 class="page-view__subsection-title">Haftung für Links</h3>
        <p class="page-view__body legal">
          Diese Website enthält Links zu externen Websites Dritter, auf deren
          Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten
          ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
          Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche
          Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
          Verlinkung nicht erkennbar.
        </p>

        <h3 class="page-view__subsection-title">Urheberrecht</h3>
        <p class="page-view__body legal">
          Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Der Quellcode ist unter
          MIT-Lizenz verfügbar, die Inhalte (Texte, Modelle, Diagramme) unter
          CC BY 4.0 — siehe
          <a class="page-view__link" href="https://github.com/ruKurz/oi-architecture/blob/main/LICENSE-CC-BY-4.0" target="_blank" rel="noopener">LICENSE-CC-BY-4.0</a>.
        </p>
      </section>

    </div>
  `
  return view
}
