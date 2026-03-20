// Semantic Model Layer — independent schema
// Do NOT import from types.ts. No shared domain types across layers.
// See: decisions/adr/0018-two-layer-model-separation.md
//      context/concepts/two-layer-separation.md

export interface OIADocumentModel {
  model: DocumentModelMeta
  source_documents: SourceDocument[]
  elements: DocumentElement[]
  sections: DocumentSection[]
  documentation_semantic: Record<string, unknown>
}

export interface DocumentModelMeta {
  name: string
  short_name: string
  version: string
  schema_version: string
  mapping_mode: string
}

export interface SourceDocument {
  document_id: string
  filename: string
  element_id: string
  document_type: string
  source_of_truth: boolean
  document_order: number
}

export interface DocumentElement {
  element_id: string
  element_type: string
  name: string
  source_document_id: string
  root_section_ids: string[]
  section_count: number
}

export interface DocumentSection {
  section_id: string
  element_id: string
  source_document_id: string
  parent_section_id: string | null
  child_section_ids: string[]
  order_index: number
  document_index: number
  header_level: number
  title: string
  section_type: string
  raw_text: string
  is_dual_structure_member: boolean
  dual_structure_group: string | null
  source_anchor: SourceAnchor
  section_path: string[]
}

export interface SourceAnchor {
  filename: string
  element_id: string
  section_title: string
  header_level: number
  document_index: number
  path_string: string
  line_start: number | null
  line_end: number | null
}
