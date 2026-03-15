export interface OIAModel {
  meta: ModelMeta
  elements: OIAElement[]
  connections: Connection[]
  badges: Badge[]
  views: View[]
  legend: { show: boolean; position: string }
}

export interface ModelMeta {
  version: string
  title: string
  subtitle: string
  created: string
}

export type OIAElement = Container | ContentItem | ParticipantItem

export interface Container {
  id: string
  type: 'container'
  containerType: 'layer' | 'frame' | 'box' | 'pipeline' | 'panel' | 'spectrum'
  label: string
  description?: string
  children: string[]
  badges?: string[]
  meta?: {
    order?: number
    highlighted?: boolean
    view_level?: string
    icon?: string
    variant?: string
  }
}

export interface ContentItem {
  id: string
  type: 'item'
  itemType: ItemType
  label: string
  description?: string
  icon?: string
  badges?: string[]
  properties?: Record<string, string | number | boolean | string[]>
}

export type ItemType =
  | 'actor'
  | 'situation'
  | 'usecase'
  | 'solution'
  | 'capability'
  | 'feature'
  | 'infrastructure'
  | 'processingstep'
  | 'datasource'
  | 'concept'
  | 'outcome'
  | 'participant'
  | 'keyInsight'

export interface ParticipantItem extends ContentItem {
  itemType: 'participant' | 'keyInsight'
  role?: 'initiator' | 'actor' | 'beneficiary'
  triadPosition?: number
  weight?: 'primary' | 'secondary'
  primary?: boolean
  color?: 'purple' | 'teal' | 'amber' | 'gray'
  spectrumAxis?: 'autonomy' | 'accountability'
  position?: number
  converging?: boolean
  caption?: string
  text?: string
}

export interface Connection {
  id: string
  from: string
  to: string
  connectionType: 'flow' | 'depends-on' | 'uses' | 'produces' | 'feedback' | 'generic'
  label?: string
  direction: 'forward' | 'backward' | 'bidirectional'
  edgeType?: string
}

export interface Badge {
  id: string
  icon: string
  label: string
  description: string
}

export interface View {
  id: string
  type: 'overview' | 'detail'
  label: string
  include?: string[]
  root?: string
  depth?: number
}
