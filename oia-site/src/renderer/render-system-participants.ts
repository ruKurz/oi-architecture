import type { OIAModel, Container, ParticipantItem } from '../data/types'
import { getItem } from './utils'

const COLOR_CLASS: Record<string, string> = {
  purple: 'sp-color--purple',
  teal: 'sp-color--teal',
  amber: 'sp-color--amber',
  gray: 'sp-color--gray',
}

const TRIAD_DESCRIPTOR: Record<string, string> = {
  initiator: 'Accountable',
  actor: 'Responsible',
  beneficiary: 'Purposive',
}

function renderTriad(model: OIAModel, triadId: string): string {
  const triad = getItem(model, triadId) as Container | undefined
  if (!triad || triad.type !== 'container') return ''

  const items = triad.children
    .map((id) => {
      const item = getItem(model, id) as ParticipantItem | undefined
      if (!item) return ''
      const colorClass = COLOR_CLASS[item.color ?? ''] ?? ''
      const weightClass = item.weight === 'secondary' ? 'sp-triad__item--secondary' : ''
      const starLabel = item.primary ? `${item.label} ★` : item.label
      const descriptor = item.role ? (TRIAD_DESCRIPTOR[item.role] ?? '') : ''
      return `<div class="sp-triad__item ${colorClass} ${weightClass}" data-id="${item.id}">
        <span class="sp-triad__label">${starLabel}</span>
        ${descriptor ? `<span class="sp-triad__descriptor">${descriptor}</span>` : ''}
      </div>`
    })
    .join('')

  return `<div class="sp-triad">${items}</div>`
}

function renderSpectrum(model: OIAModel, spectrumId: string): string {
  const spectrum = getItem(model, spectrumId) as Container | undefined
  if (!spectrum || spectrum.type !== 'container') return ''

  const items = spectrum.children.map((id) => getItem(model, id) as ParticipantItem | undefined)

  const axisItems = items
    .map((item, i) => {
      if (!item) return ''
      const colorClass = COLOR_CLASS[item.color ?? ''] ?? ''
      const connector =
        i > 0
          ? item.converging
            ? `<div class="sp-spectrum__converging">
                <span class="sp-spectrum__converging-line"></span>
                <span class="sp-spectrum__converging-label">converging</span>
               </div>`
            : `<div class="sp-spectrum__arrow">→</div>`
          : ''
      return `${connector}<div class="sp-spectrum__entity ${colorClass}" data-id="${item.id}">
        <span class="sp-spectrum__entity-label">${item.label}</span>
        ${item.description ? `<span class="sp-spectrum__entity-desc">${item.description}</span>` : ''}
      </div>`
    })
    .join('')

  return `<div class="sp-spectrum">
    <div class="sp-spectrum__header">
      <span class="sp-spectrum__title">${spectrum.label}</span>
      <span class="sp-spectrum__range"><span>less</span><span>more →</span></span>
    </div>
    <div class="sp-spectrum__axis">${axisItems}</div>
  </div>`
}

function renderKeyInsight(model: OIAModel, insightId: string): string {
  const item = getItem(model, insightId) as ParticipantItem | undefined
  if (!item || item.itemType !== 'keyInsight') return ''
  return `<div class="sp-insight" data-id="${item.id}">
    <p class="sp-insight__text">${item.text ?? item.label}</p>
  </div>`
}

export function renderSystemParticipants(model: OIAModel, layer: Container): string {
  const [triadId, spectrum1Id, spectrum2Id, insightId] = layer.children
  return `<div class="sp-layer">
    ${renderTriad(model, triadId)}
    ${renderSpectrum(model, spectrum1Id)}
    ${renderSpectrum(model, spectrum2Id)}
    ${renderKeyInsight(model, insightId)}
  </div>`
}
