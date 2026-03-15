export type TriadRole = 'initiator' | 'actor' | 'beneficiary'

export function renderEuAiActOverlay(activeRole: TriadRole): string {
  const active = (role: TriadRole) =>
    role === activeRole ? ' euai-node--active' : ' euai-node--inactive'

  return `
    <div class="euai-overlay__header">
      <h3 class="euai-overlay__title">EU AI Act — accountability in context</h3>
      <p class="euai-overlay__subtitle">OIA describes what happens inside an organisation. The EU AI Act additionally defines a supply chain outside it.</p>
    </div>

    <div class="euai-zone euai-zone--outside">
      <span class="euai-zone__label">Outside OIA</span>
      <div class="euai-node">
        <span class="euai-node__name">Provider</span>
        <span class="euai-node__act">EU AI Act: Provider</span>
        <span class="euai-node__desc">Builds and places AI system on market. Has a contract with the Initiator that defines obligations and their limits.</span>
      </div>
    </div>

    <div class="euai-arrow">↓ contract / service terms ↓</div>

    <div class="euai-boundary">
      <span class="euai-boundary__label">OIA boundary</span>
    </div>

    <div class="euai-zone euai-zone--inside">
      <span class="euai-zone__label">Inside OIA</span>

      <div class="euai-node${active('initiator')}">
        <span class="euai-node__name">Initiator = Deployer</span>
        <span class="euai-node__act">EU AI Act: Deployer</span>
        <span class="euai-node__desc">Accountable for all actions within OIA including Agents. Defines usage policy for Actors.</span>
      </div>

      <div class="euai-arrow">↓ delegates to ↓</div>

      <div class="euai-node${active('actor')}">
        <span class="euai-node__name">Actor (Human · Agent · System)</span>
        <span class="euai-node__act">EU AI Act: Actor (no independent role assigned to Agents)</span>
        <span class="euai-node__desc">Executes within governance frame. When Actor is an Agent, accountability stays with Initiator.</span>
        <div class="euai-actor-types">
          <div class="euai-actor-card">
            <span class="euai-actor-card__type">Human</span>
            <span class="euai-actor-card__asset">Employee</span>
            <span class="euai-actor-card__frame">Employment contract</span>
            <span class="euai-actor-card__desc">Rights, duties, labour law</span>
          </div>
          <div class="euai-actor-card">
            <span class="euai-actor-card__type">Agent</span>
            <span class="euai-actor-card__asset">AI workforce</span>
            <span class="euai-actor-card__frame">Governance document — scope, limits, termination</span>
            <span class="euai-actor-card__desc">No legal status, accountability at Initiator</span>
          </div>
          <div class="euai-actor-card">
            <span class="euai-actor-card__type">System</span>
            <span class="euai-actor-card__asset">Production asset</span>
            <span class="euai-actor-card__frame">Service / maintenance contract</span>
            <span class="euai-actor-card__desc">Configurable, maintainable, replaceable</span>
          </div>
        </div>
      </div>

      <div class="euai-arrow">↓ produces value for ↓</div>

      <div class="euai-node${active('beneficiary')}">
        <span class="euai-node__name">Beneficiary</span>
        <span class="euai-node__act">EU AI Act: affected person / end user</span>
        <span class="euai-node__desc">Subject to transparency rights Art. 50.</span>
      </div>
    </div>

    <div class="euai-insight">
      The EU AI Act assigns no independent role to AI Agents. Accountability defaults to the Deployer — the OIA Initiator. This is the structural basis for: <em>Capabilities converge. Accountability does not.</em>
    </div>
  `
}
