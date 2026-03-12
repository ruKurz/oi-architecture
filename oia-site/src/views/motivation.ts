export function renderMotivationView(): HTMLElement {
  const view = document.createElement('div')
  view.className = 'page-view'
  view.innerHTML = `
    <div class="page-view__content">

      <div class="page-view__eyebrow">Motivation</div>

      <h1 class="page-view__lead">
        Help Shape the Architecture<br>of Organizational Intelligence
      </h1>

      <div class="page-view__intro">
        <p>OIA is not a finished framework.</p>
        <p>
          It is the beginning of a conversation about how organizations can build
          <strong>systems for thinking, learning and acting with knowledge</strong>.
        </p>
        <p>
          Version <strong>0.1.0</strong> is intentionally early.<br>
          The goal is to evolve the Organizational Intelligence Architecture together
          with practitioners who face these challenges every day.
        </p>
        <div class="page-view__audience">
          <span class="page-view__audience-item">Enterprise architects.</span>
          <span class="page-view__audience-item">Knowledge management leaders.</span>
          <span class="page-view__audience-item">AI engineers.</span>
          <span class="page-view__audience-item">Digital transformation teams.</span>
        </div>
        <p class="page-view__audience-cta">
          If you work at the intersection of <strong>knowledge, AI and enterprise systems</strong>,
          your perspective is valuable.
        </p>
      </div>

      <section class="page-view__section">
        <h2 class="page-view__section-title">Ways to Contribute</h2>
        <p class="page-view__body" style="margin-bottom: 24px;">
          You don't need to start with a big contribution. Even small inputs help evolve the architecture.
        </p>

        <div class="page-view__cards">
          <div class="page-view__card">
            <div class="page-view__card-title">Share feedback</div>
            <ul class="page-view__card-list">
              <li>Does the model reflect the reality of your organization?</li>
              <li>What layers or capabilities are missing?</li>
              <li>Where do you see architectural gaps?</li>
            </ul>
          </div>
          <div class="page-view__card">
            <div class="page-view__card-title">Contribute use cases</div>
            <ul class="page-view__card-list">
              <li>Real-world scenarios where organizational knowledge must become action</li>
              <li>Decision support systems</li>
              <li>AI assistants grounded in enterprise knowledge</li>
            </ul>
          </div>
          <div class="page-view__card">
            <div class="page-view__card-title">Extend the architecture</div>
            <ul class="page-view__card-list">
              <li>Additional capability layers</li>
              <li>Reference patterns</li>
              <li>Implementation approaches</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="page-view__section">
        <h2 class="page-view__section-title">The Vision</h2>
        <p class="page-view__body" style="margin-bottom: 20px;">
          The long-term goal is to evolve OIA from:
        </p>
        <div class="page-view__flow page-view__flow--vertical">
          <span class="page-view__flow-step">Reference Architecture</span>
          <span class="page-view__flow-arrow">→</span>
          <span class="page-view__flow-step">Architectural Patterns</span>
          <span class="page-view__flow-arrow">→</span>
          <span class="page-view__flow-step">Reference Implementations</span>
          <span class="page-view__flow-arrow">→</span>
          <span class="page-view__flow-step accent3">Operational Organizational Intelligence Systems</span>
        </div>
        <p class="page-view__body page-view__manifesto">
          This can only emerge through collaboration across disciplines.<br><br>
          Architecture is not invented in isolation.<br>
          It is discovered through practice.
        </p>
      </section>

      <section class="page-view__section">
        <h2 class="page-view__section-title">Join the Conversation</h2>
        <p class="page-view__body" style="margin-bottom: 24px;">
          If the idea of <strong>organizational intelligence as an architectural system</strong> resonates with you:
        </p>
        <div class="page-view__join-steps">
          <div class="page-view__join-step">
            <span class="page-view__step-num">01</span>
            <span>Explore the architecture</span>
          </div>
          <div class="page-view__join-step">
            <span class="page-view__step-num">02</span>
            <span>Share your perspective</span>
          </div>
          <div class="page-view__join-step">
            <span class="page-view__step-num">03</span>
            <span>Help evolve the model</span>
          </div>
        </div>
        <p class="page-view__body" style="margin-top: 20px; font-style: italic; color: var(--text-muted);">
          This project is intentionally open.<br>
          The architecture improves with every discussion.
        </p>
      </section>

      <div class="page-view__cta">
        <a class="page-view__cta-link" href="#/">← Zum Architekturdiagramm</a>
        <a class="page-view__cta-link primary" href="#/mitmachen">Mitmachen →</a>
      </div>

      <div class="page-view__charter">
        <em>Organizational Intelligence Architecture (OIA)</em><br>
        <em>An open model for how organizations turn knowledge into action.</em>
      </div>

    </div>
  `
  return view
}
