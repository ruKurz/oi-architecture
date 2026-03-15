import type { OIAModel, OIAElement, Container } from '../data/types'
import { renderSystemParticipantsDetail } from '../renderer/render-system-participants'

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

  if (el.id === '#L9' && el.type === 'container') {
    view.innerHTML = `
      <a class="detail-back" href="#/">← Back to Overview</a>
      <div class="detail-id">${el.id}</div>
      <div class="detail-title">${el.label}</div>
      ${description ? `<div class="detail-desc">${description}</div>` : ''}
      ${renderSystemParticipantsDetail(model, el as Container)}
    `
    return view
  }

  const childrenHtml =
    children.length > 0
      ? `<div class="detail-items">${renderChildren(model, children)}</div>`
      : description
        ? ''
        : '<div class="detail-items"><div class="detail-item detail-item--empty">No sub-elements</div></div>'

  view.innerHTML = `
    <a class="detail-back" href="#/">← Back to Overview</a>
    <div class="detail-id">${el.id}</div>
    <div class="detail-title">${el.label}</div>
    ${description ? `<div class="detail-desc">${description}</div>` : ''}
    ${childrenHtml}
  `
  return view
}
