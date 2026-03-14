import type { OIAModel, Container } from '../data/types'
import { getItem } from './utils'

function resolveChildren(model: OIAModel, ids: string[]): string {
  return ids
    .map((id) => {
      const element = getItem(model, id)
      if (!element) return ''
      if (element.type === 'item') {
        return `<div class="side-item">${element.label}</div>`
      }
      if (element.type === 'container') {
        const isQualityGates = element.meta?.variant === 'highlight'
        const blockClass = isQualityGates ? ' side-block--highlight' : ''
        const itemClass = isQualityGates ? ' side-item--highlight' : ''
        const items = element.children
          .map((cid) => {
            const child = getItem(model, cid)
            return child ? `<div class="side-item${itemClass}">${child.label}</div>` : ''
          })
          .join('')
        return `<div class="side-block${blockClass}" data-id="${element.id}">
  <div class="side-block-title">${element.label}</div>
  ${items}
</div>`
      }
      return ''
    })
    .join('\n')
}

export function renderPanel(model: OIAModel, panel: Container): HTMLElement {
  const div = document.createElement('div')
  div.className = 'side-panel' + (panel.meta?.variant === 'right' ? ' right-panel' : '')
  div.innerHTML = `
    <div class="side-label">${panel.label}</div>
    ${resolveChildren(model, panel.children)}
  `
  return div
}
