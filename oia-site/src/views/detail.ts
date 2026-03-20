import type { OIAModel, OIAElement, Container, ContentItem, ParticipantItem } from '../data/types'
import type { LayerProjection } from '../data/doc/projection'
import {
  renderSystemParticipantsDetail,
  renderSpectrum,
  renderKeyInsight,
} from '../renderer/render-system-participants'
import type { TriadRole } from '../renderer/render-eu-ai-act-overlay'
import { renderEuAiActOverlay } from '../renderer/render-eu-ai-act-overlay'
import { renderInfoBadge, renderInfoOverlay, attachInfoBadgeHandlers } from './info-badge'

function findParent(model: OIAModel, id: string): Container | undefined {
  return model.elements.find(
    (e): e is Container => e.type === 'container' && e.children.includes(id),
  )
}

function buildAncestors(model: OIAModel, id: string): Container[] {
  const ancestors: Container[] = []
  let current = id
  while (true) {
    const parent = findParent(model, current)
    if (!parent) break
    ancestors.unshift(parent)
    current = parent.id
  }
  return ancestors
}

// Container types that are structural groupings — not shown as breadcrumb segments
const BREADCRUMB_SKIP_TYPES = new Set(['frame', 'spectrum'])

function renderBreadcrumb(model: OIAModel, id: string): string {
  const ancestors = buildAncestors(model, id).filter(
    (a) => !BREADCRUMB_SKIP_TYPES.has(a.containerType) && a.navigationVisible !== false,
  )
  const el = model.elements.find((e) => e.id === id)
  // Inject explicit parent element between container ancestors and current item.
  // Used by Actor type items (Human/Agent/System) to show "… › Actor › Human".
  const explicitParentId = el?.type === 'item' ? (el as ContentItem).parent : undefined
  const explicitParent = explicitParentId
    ? model.elements.find((e) => e.id === explicitParentId)
    : undefined
  const parts: string[] = [`<a class="detail-breadcrumb__item" href="#/">OIA</a>`]
  ancestors.forEach((anc) => {
    parts.push(
      `<span class="detail-breadcrumb__sep">›</span><a class="detail-breadcrumb__item" href="#/detail/${encodeURIComponent(anc.id)}">${anc.label}</a>`,
    )
  })
  if (explicitParent) {
    parts.push(
      `<span class="detail-breadcrumb__sep">›</span><a class="detail-breadcrumb__item" href="#/detail/${encodeURIComponent(explicitParent.id)}">${explicitParent.label}</a>`,
    )
  }
  if (el) {
    parts.push(
      `<span class="detail-breadcrumb__sep">›</span><span class="detail-breadcrumb__item detail-breadcrumb__item--current">${el.label}</span>`,
    )
  }
  return `<nav class="detail-breadcrumb">${parts.join('')}</nav>`
}

function renderRelated(model: OIAModel, id: string): string {
  const parent = findParent(model, id)
  if (!parent) return ''
  const siblings = parent.children.filter((sibId) => sibId !== id)
  if (siblings.length === 0) return ''
  const items = siblings
    .map((sibId) => {
      const sib = model.elements.find((e) => e.id === sibId)
      if (!sib) return ''
      return `<a class="detail-related__item" href="#/detail/${encodeURIComponent(sibId)}">${sib.label}</a>`
    })
    .filter(Boolean)
    .join('')
  return `<div class="detail-related"><span class="detail-related__label">Related:</span>${items}</div>`
}

// Semantic badge and tooltip for each triad edge type
const EDGE_BADGE: Record<string, string> = {
  'defines frame for': 'governs',
  'creates value for': 'produces',
}
const EDGE_TOOLTIP: Record<string, string> = {
  'defines frame for':
    'The Initiator sets goals, permissions and ODRs under which the Actor operates. No action without a governance frame.',
  'creates value for':
    "The Actor's work produces outcomes that flow to the Beneficiary. Value creation is the purpose of action.",
}

function renderParticipantContext(model: OIAModel, el: ParticipantItem): string {
  if (!el.role) return ''
  // Collect triad edges: connections between participant items that carry an edgeType
  const triadEdges = model.connections.filter((c) => {
    if (!c.edgeType) return false
    const from = model.elements.find((e) => e.id === c.from)
    const to = model.elements.find((e) => e.id === c.to)
    return (
      from?.type === 'item' &&
      (from as ParticipantItem).role !== undefined &&
      to?.type === 'item' &&
      (to as ParticipantItem).role !== undefined
    )
  })
  if (triadEdges.length === 0) return ''

  // Build ordered chain (walk from the node with no incoming edge)
  const targets = new Set(triadEdges.map((c) => c.to))
  const sources = new Set(triadEdges.map((c) => c.from))
  const allNodes = new Set([...sources, ...targets])
  const firstId = [...allNodes].find((id) => !targets.has(id))
  if (!firstId) return ''

  const chain: string[] = [firstId]
  const edgeData: Array<{ label: string; badge: string; tooltip: string }> = []
  let current = firstId
  while (true) {
    const next = triadEdges.find((c) => c.from === current)
    if (!next) break
    const label = next.edgeType!
    edgeData.push({ label, badge: EDGE_BADGE[label] ?? '', tooltip: EDGE_TOOLTIP[label] ?? '' })
    chain.push(next.to)
    current = next.to
  }

  // Render single horizontal row
  const parts: string[] = []
  chain.forEach((nodeId, i) => {
    if (i > 0) {
      const { label, badge, tooltip } = edgeData[i - 1]
      parts.push(`<div class="detail-flow__edge" title="${tooltip}">
        ${badge ? `<span class="detail-flow__edge-badge">${badge}</span>` : ''}
        <span class="detail-flow__edge-arrow">→</span>
        <span class="detail-flow__edge-label">${label}</span>
      </div>`)
    }
    const node = model.elements.find((e) => e.id === nodeId)
    if (!node) return
    const isActive = nodeId === el.id
    const color = isActive ? (el.color ?? '') : ((node as ParticipantItem).color ?? '')
    const colorClass = isActive && color ? ` detail-flow__node--${color}` : ''
    const inactiveClass = isActive ? '' : ' detail-flow__node--inactive'
    if (isActive) {
      parts.push(
        `<span class="detail-flow__node detail-flow__node--current${colorClass}">${node.label}</span>`,
      )
    } else {
      parts.push(
        `<a class="detail-flow__node${inactiveClass}" href="#/detail/${encodeURIComponent(nodeId)}">${node.label}</a>`,
      )
    }
  })

  return `<div class="detail-flow"><div class="detail-flow__label">Governance flow</div><div class="detail-flow__row">${parts.join('')}</div></div>`
}

function renderActorSpectraContext(model: OIAModel, el: ParticipantItem): string {
  if (!el.role) return ''
  // Walk up to the grandparent layer (el → triad container → layer)
  const triad = model.elements.find(
    (e): e is Container => e.type === 'container' && e.children.includes(el.id),
  )
  if (!triad) return ''
  const layer = model.elements.find(
    (e): e is Container => e.type === 'container' && e.children.includes(triad.id),
  )
  if (!layer) return ''
  // layer.children = [triadId, spectrum1Id, spectrum2Id, insightId]
  const [, spectrum1Id, spectrum2Id, insightId] = layer.children
  if (!spectrum1Id) return ''
  return `<div class="detail-actor-context">
    ${renderSpectrum(model, spectrum1Id)}
    ${renderSpectrum(model, spectrum2Id)}
    ${insightId ? renderKeyInsight(model, insightId) : ''}
  </div>`
}

// Was / Warum / Wie narrative content per participant role
const WWH_CONTENT: Record<string, { was: string; warum: string; wie: string }> = {
  initiator: {
    was: `The Initiator is the entity that legitimises an action before it takes place. It sets the governance frame: goals, permissions, rules, and the boundaries within which Actors operate. The Initiator interacts with OIA constitutively — not operatively. It appears before the process, not within it. Accountability always traces back to the Initiator. Always reducible to a human or organisation.`,
    warum: `Organisations fail at AI not because of bad Agents. They fail because no one explicitly defined who the Initiator is. When the governance frame is absent — which data may an Agent use, which goals may it pursue, which decisions may it make autonomously — Agents operate in a vacuum. They optimise without knowing what for. The Initiator is the answer to the question: who is responsible?`,
    wie: `In RACI terms: <strong>Accountable.</strong> The party that ultimately stands behind the outcome — not the executor.<br><br>In EU AI Act terms: <strong>Deployer.</strong> The entity that puts an AI system into operation within a specific context and bears responsibility for that context. The Deployer has a contract with the Provider (external to OIA) that defines obligations and their limits.`,
  },
  actor: {
    was: `The Actor is the primary interaction entity of OIA. It engages with Capabilities, Features, and the Knowledge Core. OIA is built from the Actor's perspective. The Actor can be a Human, an Agent, or a System — three distinct types of organisational asset.`,
    warum: `Without an Actor, the governance frame of the Initiator has no effect. The Actor is the entity that translates intent into action. In a world where Agents increasingly operate alongside humans, making Actor types explicit is an architectural necessity — not a theoretical exercise.`,
    wie: `The three Actor types differ in how they are governed:<div class="detail-wwh__actor-types"><div class="detail-wwh__actor-card"><div class="detail-wwh__actor-type">Human</div><div class="detail-wwh__actor-asset">Employee</div><div class="detail-wwh__actor-frame">Employment contract — rights, duties, labour law</div></div><div class="detail-wwh__actor-card"><div class="detail-wwh__actor-type">Agent</div><div class="detail-wwh__actor-asset">AI workforce</div><div class="detail-wwh__actor-frame">Governance document — scope, limits, termination</div></div><div class="detail-wwh__actor-card"><div class="detail-wwh__actor-type">System</div><div class="detail-wwh__actor-asset">Production asset</div><div class="detail-wwh__actor-frame">Service / maintenance contract</div></div></div><p class="detail-wwh__note">The EU AI Act assigns no independent role to AI Agents as actors. When an Agent acts, accountability defaults to the Deployer — which maps to the OIA Initiator. This is the structural basis for the key insight: <strong>Capabilities converge. Accountability does not.</strong></p>`,
  },
  beneficiary: {
    was: `The Beneficiary is the entity for whom the outcome creates value. It legitimises the action — without a Beneficiary, there is no purpose. The Beneficiary receives output but does not control the process. Feedback from the Beneficiary flows back into the architecture.`,
    warum: `The Beneficiary is often the invisible party in AI implementations. Systems are built, Actors are trained, governance is defined — but the question "for whom, and with what outcome?" is answered too late. Making the Beneficiary explicit forces the question before implementation begins.`,
    wie: `In RACI terms: <strong>Informed.</strong> Receives the result, provides feedback.<br><br>In EU AI Act terms: <strong>Affected person / end user.</strong> Subject to transparency and notification rights under Art. 50 — must be informed when interacting with AI systems.`,
  },
}

function renderParticipantWWH(el: ParticipantItem): string {
  if (!el.role) return ''
  const content = WWH_CONTENT[el.role]
  if (!content) return ''
  const section = (label: string, body: string) => `
    <div class="detail-wwh__section">
      <div class="detail-wwh__label">${label}</div>
      <div class="detail-wwh__body">${body}</div>
    </div>`
  return `<div class="detail-wwh">
    ${section('What', content.was)}
    ${section('Why', content.warum)}
    ${section('How', content.wie)}
  </div>`
}

// What / Why / How narrative content per Actor type item (by element ID)
const ACTOR_TYPE_WWH: Record<string, { what: string; why: string; how: string }> = {
  '#L9-sa-human': {
    what: `The Human Actor decides contextually, drawing on experience, judgment, and organisational knowledge. Embedded in hierarchy and social context — which constrains and enriches decisions simultaneously.`,
    why: `The Human brings something no Agent has: accountability. Not just legal accountability — but the lived understanding of consequences. A Human Actor filters through values, relationships, and experience before acting. That friction is not a weakness. It is governance in practice.`,
    how: `Organisational asset: <strong>Employee.</strong> Governance frame: Employment contract — rights, duties, governed by labour law.<br><br>On the Autonomy spectrum: middle position. More decision space than a System, less operational throughput than an Agent.<br>On the Accountability spectrum: rightmost position — always, regardless of Agent capabilities.`,
  },
  '#L9-sa-agent': {
    what: `The Agent Actor operates goal-directed and autonomously within a defined governance frame. It processes information in parallel, runs continuously, and applies consistent logic without cognitive bias or organisational embeddedness.`,
    why: `Agents do not replace humans — they extend organisational reach into tasks that exceed human throughput: continuous monitoring, parallel processing, pattern recognition at scale. Their value is precisely what makes them require governance: they act without the friction that humans provide naturally.`,
    how: `Organisational asset: <strong>AI workforce.</strong> Governance frame: Governance document — scope, limits, termination. No legal status, no independent accountability.<br><br>On the Autonomy spectrum: rightmost position.<br>On the Accountability spectrum: middle position — accountability defaults to the Initiator.`,
  },
  '#L9-sa-system': {
    what: `The System Actor executes deterministically within fixed parameters. It does not decide — it processes. Configurable, maintainable, replaceable.`,
    why: `Systems are the stable foundation on which Agents and Humans operate. They provide consistency, auditability, and scalability — without the variability of human judgment or the autonomy of Agents. Their predictability is their value.`,
    how: `Organisational asset: <strong>Production asset.</strong> Governance frame: Service / maintenance contract.<br><br>On the Autonomy spectrum: leftmost position — no independent decision space.<br>On the Accountability spectrum: leftmost position — inherits accountability from the Initiator.`,
  },
}

function renderActorTypeWWH(el: ParticipantItem): string {
  const content = ACTOR_TYPE_WWH[el.id]
  if (!content) return ''
  const section = (label: string, body: string) => `
    <div class="detail-wwh__section">
      <div class="detail-wwh__label">${label}</div>
      <div class="detail-wwh__body">${body}</div>
    </div>`
  return `<div class="detail-wwh">
    ${section('What', content.what)}
    ${section('Why', content.why)}
    ${section('How', content.how)}
  </div>`
}

function renderChildren(model: OIAModel, ids: string[], depth = 0): string {
  if (depth > 3) return ''
  return ids
    .map((id) => {
      const el = model.elements.find((e) => e.id === id)
      if (!el) return ''
      const indent = depth > 0 ? ` style="margin-left:${depth * 16}px"` : ''
      if (el.type === 'container') {
        const sub =
          el.children.length > 0
            ? `<div class="detail-children">${renderChildren(model, el.children, depth + 1)}</div>`
            : ''
        return `<div class="detail-item"${indent}>
        <span class="detail-item-label">${el.label}</span>
        <span class="detail-item__meta">${el.containerType}</span>
        ${sub}
      </div>`
      }
      return `<div class="detail-item"${indent}>
      <span class="detail-item-label">${el.icon ? el.icon + ' ' : ''}${el.label}</span>
      <span class="detail-item__meta">${el.itemType}</span>
    </div>`
    })
    .join('')
}

function processRawText(text: string): string {
  return (
    text
      // horizontal rules
      .replace(/---\n?/g, '<hr class="sem__hr">')
      // bold
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      // double newline → paragraph break
      .split(/\n\n+/)
      .map((para) => para.replace(/\n/g, '<br>').trim())
      .filter(Boolean)
      .map((para) => `<p class="sem__para">${para}</p>`)
      .join('')
  )
}

function renderSemanticSections(projection: LayerProjection): string {
  const sections = projection.sections
  if (sections.length === 0) return ''

  const firstId = sections[0].sectionId

  const navItems = sections
    .map((s) => {
      const isSubsection = s.headerLevel > 2
      const subsClass = isSubsection ? ' sem__nav-item--sub' : ''
      const activeClass = s.sectionId === firstId ? ' sem__nav-item--active' : ''
      return `<button class="sem__nav-item${subsClass}${activeClass}" data-sem-nav="${s.sectionId}" aria-pressed="${s.sectionId === firstId}">${s.title}</button>`
    })
    .join('')

  const panels = sections
    .map((s) => {
      const hidden = s.sectionId !== firstId ? ' hidden' : ''
      return `<div class="sem__panel${s.sectionId === firstId ? ' sem__panel--active' : ''}" data-sem-panel="${s.sectionId}"${hidden}>
        <div class="sem__panel-title">${s.title}</div>
        <div class="sem__panel-body">${processRawText(s.rawText)}</div>
      </div>`
    })
    .join('')

  return `<div class="sem">
    <div class="sem__header">
      <span class="sem__label">Documentation</span>
      <span class="sem__count">${sections.length} sections</span>
    </div>
    <div class="sem__body">
      <nav class="sem__nav" aria-label="Semantic sections">${navItems}</nav>
      <div class="sem__content">${panels}</div>
    </div>
  </div>`
}

function attachSemanticHandlers(root: HTMLElement): void {
  const nav = root.querySelector<HTMLElement>('.sem__nav')
  const content = root.querySelector<HTMLElement>('.sem__content')
  if (!nav || !content) return

  const navEl = nav
  const contentEl = content

  let pinnedId: string | null =
    (root.querySelector('.sem__nav-item--active') as HTMLElement | null)?.dataset.semNav ?? null

  function showPanel(id: string, isActive: boolean) {
    contentEl.querySelectorAll('.sem__panel').forEach((panel) => {
      const el = panel as HTMLElement
      const match = el.dataset.semPanel === id
      el.hidden = !match
      el.classList.toggle('sem__panel--active', match)
    })
    navEl.querySelectorAll('.sem__nav-item').forEach((btn) => {
      const el = btn as HTMLElement
      el.classList.toggle('sem__nav-item--active', isActive && el.dataset.semNav === id)
      el.setAttribute('aria-pressed', String(isActive && el.dataset.semNav === id))
    })
  }

  navEl.querySelectorAll('.sem__nav-item').forEach((btn) => {
    const el = btn as HTMLElement
    const id = el.dataset.semNav!

    el.addEventListener('mouseenter', () => {
      showPanel(id, id === pinnedId)
    })

    el.addEventListener('mouseleave', () => {
      if (pinnedId) showPanel(pinnedId, true)
    })

    el.addEventListener('click', () => {
      pinnedId = id
      showPanel(id, true)
    })
  })
}

export function renderDetailView(
  model: OIAModel,
  id: string,
  layerProjection: LayerProjection | null = null,
): HTMLElement {
  const el: OIAElement | undefined = model.elements.find((e) => e.id === id)

  const view = document.createElement('div')
  view.className = 'detail-view'

  if (!el) {
    view.innerHTML = `
      <a class="detail-back" href="#/">← Back</a>
      <div class="detail-title">Element not found: ${id}</div>
    `
    return view
  }

  const children = el.type === 'container' ? el.children : []
  const description = el.description || ''
  const breadcrumb = renderBreadcrumb(model, id)
  const related = renderRelated(model, id)

  if (el.id === '#L9' && el.type === 'container') {
    view.innerHTML = `
      ${breadcrumb}
      <div class="detail-id">${el.id}</div>
      <div class="detail-title">${el.label}</div>
      ${description ? `<div class="detail-desc">${description}</div>` : ''}
      ${layerProjection ? renderSemanticSections(layerProjection) : ''}
      ${renderSystemParticipantsDetail(model, el as Container)}
      ${related}
    `
    if (layerProjection) attachSemanticHandlers(view)
    return view
  }

  const participantEl =
    el.type === 'item' && el.itemType === 'participant' ? (el as ParticipantItem) : null
  const participantContext = participantEl ? renderParticipantContext(model, participantEl) : ''
  const participantWWH = participantEl ? renderParticipantWWH(participantEl) : ''
  const actorTypeWWH = participantEl ? renderActorTypeWWH(participantEl) : ''
  const actorSpectra = participantEl ? renderActorSpectraContext(model, participantEl) : ''

  const childrenHtml =
    children.length > 0
      ? `<div class="detail-items">${renderChildren(model, children)}</div>`
      : description
        ? ''
        : '<div class="detail-items"><div class="detail-item detail-item--empty">No sub-elements</div></div>'

  // InfoBadge + EU AI Act overlay for participant detail views
  const euAiActBadge = participantEl?.role
    ? renderInfoBadge('EU AI Act context', 'overlay-eu-ai-act')
    : ''
  const euAiActOverlay = participantEl?.role
    ? renderInfoOverlay('overlay-eu-ai-act', renderEuAiActOverlay(participantEl.role as TriadRole))
    : ''

  view.innerHTML = `
    ${breadcrumb}
    <div class="detail-header">
      <div>
        <div class="detail-id">${el.id}</div>
        <div class="detail-title">${el.label}</div>
      </div>
      ${euAiActBadge}
    </div>
    ${euAiActOverlay}
    ${description ? `<div class="detail-desc">${description}</div>` : ''}
    ${participantContext}
    ${participantWWH}
    ${actorTypeWWH}
    ${actorSpectra}
    ${layerProjection ? renderSemanticSections(layerProjection) : ''}
    ${childrenHtml}
    ${related}
  `

  if (participantEl?.role) attachInfoBadgeHandlers(view)
  if (layerProjection) attachSemanticHandlers(view)

  return view
}
