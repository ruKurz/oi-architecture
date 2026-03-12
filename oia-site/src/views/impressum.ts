export function renderImpressumView(): HTMLElement {
  const view = document.createElement('div')
  view.className = 'page-view'
  view.innerHTML = `
    <div class="page-view__content">

      <div class="page-view__eyebrow">Legal</div>
      <h1 class="page-view__lead">Impressum</h1>

      <section class="page-view__section">
        <h2 class="page-view__section-title">Angaben gemäß § 5 TMG</h2>
        <div class="page-view__contact">
          <div class="page-view__contact-row">
            <span class="page-view__contact-label">Name</span>
            <span class="page-view__body">Rüdiger Kurz</span>
          </div>
          <div class="page-view__contact-row">
            <span class="page-view__contact-label">Anschrift</span>
            <span class="page-view__body">
              [Straße und Hausnummer]<br>
              [PLZ Ort]<br>
              Deutschland
            </span>
          </div>
          <div class="page-view__contact-row">
            <span class="page-view__contact-label">E-Mail</span>
            <a class="page-view__link" href="mailto:kurz@vnc-online">kurz@vnc-online</a>
          </div>
        </div>
      </section>

      <section class="page-view__section">
        <h2 class="page-view__section-title">Verantwortlich für den Inhalt</h2>
        <p class="page-view__body">
          Rüdiger Kurz, Anschrift wie oben.<br>
          <span style="color: var(--text-muted); font-size: 12px;">§ 55 Abs. 2 RStV</span>
        </p>
      </section>

      <section class="page-view__section">
        <h2 class="page-view__section-title">Lizenz</h2>
        <p class="page-view__body" style="margin-bottom: 16px;">
          Diese Seite veröffentlicht das <strong>Organizational Intelligence Architecture (OIA)</strong> Modell
          unter einer dualen Lizenz:
        </p>
        <div class="page-view__card">
          <ul class="page-view__card-list">
            <li>
              <strong>Quellcode</strong> (<code>oia-site/</code>) —
              <a class="page-view__link" href="https://github.com/ruKurz/oi-architecture/blob/main/LICENSE" target="_blank" rel="noopener">MIT License</a>
            </li>
            <li>
              <strong>Inhalte</strong> (Modell, Texte, Diagramme, Entscheidungen) —
              <a class="page-view__link" href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener">CC BY 4.0</a>
            </li>
          </ul>
        </div>
        <p class="page-view__body" style="margin-top: 16px; font-size: 13px; color: var(--text-muted);">
          CC BY 4.0: Weitergabe und Bearbeitung erlaubt, solange der Urheber (Rüdiger Kurz)
          und die Quelle (<a class="page-view__link" href="https://github.com/ruKurz/oi-architecture" target="_blank" rel="noopener">github.com/ruKurz/oi-architecture</a>) genannt werden.
        </p>
      </section>

      <section class="page-view__section">
        <h2 class="page-view__section-title">Datenschutz</h2>
        <p class="page-view__body" style="color: var(--text-muted);">
          Diese Seite verwendet keine Cookies, kein Tracking und keine Analyse-Werkzeuge.
          Es werden keine personenbezogenen Daten erhoben oder gespeichert.<br>
          Hosting: GitHub Pages.
          <a class="page-view__link" href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener">GitHub Privacy Statement →</a>
        </p>
      </section>

    </div>
  `
  return view
}
