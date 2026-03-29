import { describe, test, expect } from 'vitest'
import type { Container, ContentItem } from '../src/data/types'
import { model } from '../src/data/model'

describe('OIA Model integrity', () => {
  test('all 10 main layers present', () => {
    const ids = model.elements.map((e) => e.id)
    ;['#L1', '#L2', '#L3', '#L4', '#L5', '#L6', '#L7', '#L8', '#L9', '#L10'].forEach((id) => {
      expect(ids, `Missing layer ${id}`).toContain(id)
    })
  })

  test('L10 has 6 outcome items', () => {
    const l10 = model.elements.find((e) => e.id === '#L10') as Container | undefined
    expect(l10).toBeDefined()
    expect(l10!.children).toHaveLength(6)
    l10!.children.forEach((childId) => {
      const child = model.elements.find((e) => e.id === childId) as ContentItem | undefined
      expect(child?.itemType).toBe('outcome')
      expect(Array.isArray(child?.properties?.outcome_category)).toBe(true)
    })
  })

  test('pipeline layer present', () => {
    const ids = model.elements.map((e) => e.id)
    expect(ids).toContain('#C2')
  })

  test('entities concept present', () => {
    const ids = model.elements.map((e) => e.id)
    expect(ids).toContain('#C1')
  })

  test('no duplicate IDs', () => {
    const ids = model.elements.map((e) => e.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  test('L3 is highlighted (Knowledge Core)', () => {
    const l3 = model.elements.find((e) => e.id === '#L3') as Container | undefined
    expect(l3).toBeDefined()
    expect(l3?.meta?.highlighted).toBe(true)
  })

  test('all layer containers have children', () => {
    model.elements
      .filter((e): e is Container => e.type === 'container' && e.containerType === 'layer')
      .forEach((container) => {
        expect(container.children.length, `Layer ${container.id} has no children`).toBeGreaterThan(
          0,
        )
      })
  })

  test('all children IDs resolve to existing elements', () => {
    const allIds = new Set(model.elements.map((e) => e.id))
    model.elements
      .filter((e): e is Container => e.type === 'container')
      .forEach((container) => {
        container.children.forEach((childId) => {
          expect(allIds.has(childId), `Unresolved child ID ${childId} in ${container.id}`).toBe(
            true,
          )
        })
      })
  })

  test('left and right panels present', () => {
    const ids = model.elements.map((e) => e.id)
    expect(ids).toContain('#panel-left')
    expect(ids).toContain('#panel-right')
  })

  test('meta.order present on all layers', () => {
    model.elements
      .filter(
        (e): e is Container =>
          e.type === 'container' && (e.containerType === 'layer' || e.containerType === 'pipeline'),
      )
      .forEach((container) => {
        expect(container.meta?.order, `Missing meta.order on ${container.id}`).toBeDefined()
      })
  })
})
