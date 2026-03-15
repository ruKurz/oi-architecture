import type { OIAModel, OIAElement, Container, ParticipantItem } from '../data/types'
import {
  renderSystemParticipantsDetail,
  renderSpectrum,
  renderKeyInsight,
} from '../renderer/render-system-participants'

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
    (a) => !BREADCRUMB_SKIP_TYPES.has(a.containerType),
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
  const actorSpectra = participantEl ? renderActorSpectraContext(model, participantEl) : ''

  const childrenHtml =
    children.length > 0
      ? `<div class="detail-items">${renderChildren(model, children)}</div>`
      : description
        ? ''
        : '<div class="detail-items"><div class="detail-item detail-item--empty">No sub-elements</div></div>'

  view.innerHTML = `
    ${breadcrumb}
    <div class="detail-id">${el.id}</div>
    <div class="detail-title">${el.label}</div>
    ${description ? `<div class="detail-desc">${description}</div>` : ''}
    ${participantContext}
    ${actorSpectra}
    ${childrenHtml}
    ${related}
  `
  return view
}
