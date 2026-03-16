import type { OIAModel, Container, ParticipantItem } from '../data/types'
import { getItem } from './utils'

const COLOR_CLASS: Record<string, string> = {
  purple: 'sp-color--purple',
  teal: 'sp-color--teal',
  amber: 'sp-color--amber',
  gray: 'sp-color--gray',
}

const RACI_LABEL: Record<string, string> = {
  initiator: 'ACCOUNTABLE · CONSTITUTIVE',
  actor: 'RESPONSIBLE · OPERATIVE',
  beneficiary: 'PURPOSIVE · RECEPTIVE',
}

const TYPE_TAGS: Record<string, string[]> = {
  initiator: ['Human', 'Organization'],
  actor: ['Human', 'Agent', 'System'],
  beneficiary: ['Human', 'Team', 'System'],
}

const TRIAD_DESCRIPTION: Record<string, string> = {
  initiator: 'Sets governance & goals. Defines what actors may do.',
  actor: 'Primary interaction layer. Engages capabilities, features & knowledge core.',
  beneficiary: 'Receives output. Feedback flows back into the architecture.',
}

const ACTOR_CENTRIC_STMT =
  'OIA is actor-centric — governance flows in from the left, value flows out to the right'

function renderTriad(model: OIAModel, triadId: string): string {
  const triad = getItem(model, triadId) as Container | undefined
  if (!triad || triad.type !== 'container') return ''

  const parts: string[] = []
  triad.children.forEach((id, i) => {
    const item = getItem(model, id) as ParticipantItem | undefined
    if (!item) return
    if (i > 0) {
      const prevId = triad.children[i - 1]
      const conn = model.connections.find((c) => c.from === prevId && c.to === id)
      const edgeTitle = conn?.edgeType ? ` title="${conn.edgeType}"` : ''
      parts.push(`<div class="sp-triad__arrow"${edgeTitle}>→</div>`)
    }
    const colorClass = COLOR_CLASS[item.color ?? ''] ?? ''
    const weightClass =
      item.weight === 'primary'
        ? 'sp-triad__item--primary'
        : item.weight === 'secondary'
          ? 'sp-triad__item--secondary'
          : ''
    const primaryTitle = item.primary ? ' title="Primary interaction entity"' : ''
    const starLabel = item.primary ? `${item.label} ★` : item.label
    const raci = item.role ? (RACI_LABEL[item.role] ?? '') : ''
    const tags = item.role
      ? (TYPE_TAGS[item.role] ?? []).map((t) => `<span class="sp-triad__tag">${t}</span>`).join('')
      : ''
    const desc = item.role ? (TRIAD_DESCRIPTION[item.role] ?? '') : ''
    parts.push(`<div class="sp-triad__item ${colorClass} ${weightClass}" data-id="${item.id}"${primaryTitle}>
      <span class="sp-triad__label">${starLabel}</span>
      ${raci ? `<span class="sp-triad__raci">${raci}</span>` : ''}
      ${tags ? `<div class="sp-triad__tags">${tags}</div>` : ''}
      ${desc ? `<span class="sp-triad__desc">${desc}</span>` : ''}
    </div>`)
  })

  return `<div class="sp-triad">${parts.join('')}</div>`
}

export function renderSpectrum(model: OIAModel, spectrumId: string): string {
  const spectrum = getItem(model, spectrumId) as Container | undefined
  if (!spectrum || spectrum.type !== 'container') return ''

  const items = spectrum.children.map((id) => getItem(model, id) as ParticipantItem | undefined)
  const hasConverging = items.some((item) => item?.converging)

  const entities = items
    .map((item) => {
      if (!item) return ''
      const colorClass = COLOR_CLASS[item.color ?? ''] ?? ''
      const convergingClass = item.converging ? ' sp-spectrum__entity--converging' : ''
      // Accountability items navigate to their Autonomy counterpart so both spectra
      // land on the same Actor type detail page (which carries full content).
      const clickId =
        item.spectrumAxis === 'accountability'
          ? (model.elements.find(
              (e): e is ParticipantItem =>
                e.type === 'item' &&
                e.itemType === 'participant' &&
                (e as ParticipantItem).spectrumAxis === 'autonomy' &&
                (e as ParticipantItem).label === item.label,
            )?.id ?? item.id)
          : item.id
      return `<div class="sp-spectrum__entity ${colorClass}${convergingClass}" data-id="${clickId}">
        <span class="sp-spectrum__entity-label">${item.label}</span>
        ${(item.caption ?? item.description) ? `<span class="sp-spectrum__entity-desc">${item.caption ?? item.description}</span>` : ''}
      </div>`
    })
    .join('')

  const convergingOverlay = hasConverging
    ? `<div class="sp-spectrum__converging-overlay"><span class="sp-spectrum__converging-text">↔ capabilities converging</span></div>`
    : ''

  return `<div class="sp-spectrum">
    <div class="sp-spectrum__header">
      <span class="sp-spectrum__title">${spectrum.label}</span>
    </div>
    <div class="sp-spectrum__axis-row">
      <span class="sp-spectrum__range-label">less</span>
      <div class="sp-spectrum__axis-line"></div>
      <span class="sp-spectrum__range-label">more →</span>
    </div>
    <div class="sp-spectrum__entities${hasConverging ? ' sp-spectrum__entities--converging' : ''}">
      ${entities}
      ${convergingOverlay}
    </div>
  </div>`
}

export function renderKeyInsight(model: OIAModel, insightId: string): string {
  const item = getItem(model, insightId) as ParticipantItem | undefined
  if (!item || item.itemType !== 'keyInsight') return ''
  const full = item.text ?? item.label
  const splitIdx = full.indexOf('. The human')
  const primary = splitIdx >= 0 ? full.slice(0, splitIdx + 1) : full
  const secondary = splitIdx >= 0 ? full.slice(splitIdx + 2) : ''
  return `<div class="sp-insight" data-id="${item.id}">
    <p class="sp-insight__primary">${primary}</p>
    ${secondary ? `<p class="sp-insight__secondary">${secondary}</p>` : ''}
  </div>`
}

export function renderSystemParticipants(model: OIAModel, layer: Container): string {
  const [triadId] = layer.children
  return `<div class="sp-layer">
    ${renderTriad(model, triadId)}
  </div>`
}

export function renderSystemParticipantsDetail(model: OIAModel, layer: Container): string {
  const [triadId, spectrum1Id, spectrum2Id, insightId] = layer.children
  return `<div class="sp-layer">
    ${renderTriad(model, triadId)}
    <div class="sp-centric-stmt">${ACTOR_CENTRIC_STMT}</div>
    <div class="sp-spectra-label">Actor types — how they differ</div>
    ${renderSpectrum(model, spectrum1Id)}
    ${renderSpectrum(model, spectrum2Id)}
    ${renderKeyInsight(model, insightId)}
  </div>`
}
