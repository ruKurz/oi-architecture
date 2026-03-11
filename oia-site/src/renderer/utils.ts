import type { OIAModel, Container, ContentItem } from '../data/types'

export function getItem(model: OIAModel, id: string): ContentItem | Container | undefined {
  return model.elements.find((e) => e.id === id)
}
