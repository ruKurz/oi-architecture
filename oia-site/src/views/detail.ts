import type { OIAModel, OIAElement, Container, ParticipantItem } from '../data/types'
import { renderSystemParticipantsDetail } from '../renderer/render-system-participants'

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

function renderBreadcrumb(model: OIAModel, id: string): string {
  const ancestors = buildAncestors(model, id)
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

function renderParticipantContext(model: OIAModel, el: ParticipantItem): string {
  if (!el.role) return ''
  const outgoing = model.connections.filter((c) => c.from === el.id && c.edgeType)
  const incoming = model.connections.filter((c) => c.to === el.id && c.edgeType)
  if (outgoing.length === 0 && incoming.length === 0) return ''
  const rows: string[] = []
  incoming.forEach((conn) => {
    const from = model.elements.find((e) => e.id === conn.from)
    if (!from) return
    rows.push(
      `<div class="detail-flow__row"><a class="detail-flow__node" href="#/detail/${encodeURIComponent(from.id)}">${from.label}</a><span class="detail-flow__edge">${conn.edgeType}</span><span class="detail-flow__node detail-flow__node--current">${el.label}</span></div>`,
    )
  })
  outgoing.forEach((conn) => {
    const to = model.elements.find((e) => e.id === conn.to)
    if (!to) return
    rows.push(
      `<div class="detail-flow__row"><span class="detail-flow__node detail-flow__node--current">${el.label}</span><span class="detail-flow__edge">${conn.edgeType}</span><a class="detail-flow__node" href="#/detail/${encodeURIComponent(to.id)}">${to.label}</a></div>`,
    )
  })
  return `<div class="detail-flow"><div class="detail-flow__label">Governance flow</div>${rows.join('')}</div>`
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

  const participantContext =
    el.type === 'item' && el.itemType === 'participant'
      ? renderParticipantContext(model, el as ParticipantItem)
      : ''

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
    ${childrenHtml}
    ${related}
  `
  return view
}
