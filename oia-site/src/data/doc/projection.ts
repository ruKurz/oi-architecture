// Projection Pipeline — the only legal contact point between Semantic Model Layer and renderer.
// See: decisions/adr/0018-two-layer-model-separation.md
//      context/concepts/two-layer-separation.md §2.1
//
// Owned by: renderer pipeline
// Imports: Semantic Model Layer (read-only, internal)
// Exports: presentation-side view model types + projectLayer function
//
// No type from this file's imports (OIADocumentModel, types-doc.ts) may be re-exported or
// passed as a parameter to any renderer module. The view model types below are presentation types.

import { documentModel } from './document-model'

// Scoped mapping: Presentation Layer IDs → Semantic Layer element_ids
// Identity Strategy: scoped mapping (ADR-0018 §4 / concept §4)
const layerIdMap: Record<string, string> = {
  '#L1': 'l1_infrastructure',
  '#L2': 'l2_data_sources',
  '#L3': 'l3_knowledge_core',
  '#L4': 'l4_features_in_apis',
  '#L5': 'l5_capabilities',
  '#L6': 'l6_applications_tools_solutions',
  '#L7': 'l7_use_cases_challenges',
  '#L8': 'l8_situation_context',
  '#L9': 'l9_system_participants',
  '#L10': 'l10_business_outcome',
}

// Presentation-side view model types — not semantic types.
// These live in the Projection Pipeline and are safe for renderer consumption.
export interface ProjectedSection {
  sectionId: string
  title: string
  rawText: string
  sectionType: string
  headerLevel: number
  parentSectionId: string | null
}

export interface LayerProjection {
  elementId: string
  sections: ProjectedSection[]
}

/**
 * Projects a Presentation Layer element ID to a semantic view model.
 * Returns null if no mapping exists or no sections with content are found.
 * All 10 layer elements (L1–L10) are handled consistently — no exceptions.
 */
export function projectLayer(presentationId: string): LayerProjection | null {
  const semanticId = layerIdMap[presentationId]
  if (!semanticId) return null

  const sections: ProjectedSection[] = documentModel.sections
    .filter((s) => s.element_id === semanticId && s.header_level >= 2 && s.raw_text !== '')
    .sort((a, b) => a.document_index - b.document_index)
    .map((s) => ({
      sectionId: s.section_id,
      title: s.title,
      rawText: s.raw_text,
      sectionType: s.section_type,
      headerLevel: s.header_level,
      parentSectionId: s.parent_section_id,
    }))

  if (sections.length === 0) return null

  return { elementId: semanticId, sections }
}
