import type { OIAModel, OIAElement, Container, ParticipantItem } from '../data/types'
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
  const parts: string[] = [`<a class="detail-breadcrumb__item" href="#/">OIA</a>`]
  ancestors.forEach((anc) => {
    parts.push(
      `<span class="detail-breadcrumb__sep">›</span><a class="detail-breadcrumb__item" href="#/detail/${encodeURIComponent(anc.id)}">${anc.label}</a>`,
    )
  })
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

export function renderDetailView(model: OIAModel, id: string): HTMLElement {
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
      ${renderSystemParticipantsDetail(model, el as Container)}
      ${related}
    `
    return view
  }

  const participantEl =
    el.type === 'item' && el.itemType === 'participant' ? (el as ParticipantItem) : null
  const participantContext = participantEl ? renderParticipantContext(model, participantEl) : ''
  const participantWWH = participantEl ? renderParticipantWWH(participantEl) : ''
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
    ${actorSpectra}
    ${childrenHtml}
    ${related}
  `

  if (participantEl?.role) attachInfoBadgeHandlers(view)

  return view
}
