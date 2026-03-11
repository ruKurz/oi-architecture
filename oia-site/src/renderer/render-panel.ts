import type { OIAModel, Container } from '../data/types'
import { getItem } from './utils'

function resolveChildren(model: OIAModel, ids: string[]): string {
  return ids
    .map((id) => {
      const el = getItem(model, id)
      if (!el) return ''
      if (el.type === 'item') {
        return `<div class="side-item">${el.label}</div>`
      }
      if (el.type === 'container') {
        const isQualityGates = el.meta?.variant === 'highlight'
        const style = isQualityGates ? ' style="border-color:rgba(44,242,194,0.25);"' : ''
        const titleStyle = isQualityGates ? ' style="color:var(--accent2)"' : ''
        const itemStyle = isQualityGates ? ' style="border-color:rgba(44,242,194,0.2)"' : ''
        const items = el.children
          .map((cid) => {
            const child = getItem(model, cid)
            return child ? `<div class="side-item"${itemStyle}>${child.label}</div>` : ''
          })
          .join('')
        return `<div class="side-block" data-id="${el.id}"${style}>
  <div class="side-block-title"${titleStyle}>${el.label}</div>
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
