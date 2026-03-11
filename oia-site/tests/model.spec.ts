import { describe, test, expect } from 'vitest'
import model from '../src/data/oia-model.json'

describe('OIA Model integrity', () => {
  test('all 10 main layers present', () => {
    const ids = model.elements.map((e: any) => e.id)
    ;['#L1', '#L2', '#L3', '#L4', '#L5', '#L6', '#L7', '#L8', '#L9', '#L10'].forEach((id) => {
      expect(ids, `Missing layer ${id}`).toContain(id)
    })
  })

  test('L10 has 6 outcome items', () => {
    const l10 = model.elements.find((e: any) => e.id === '#L10') as any
    expect(l10).toBeDefined()
    expect(l10.children).toHaveLength(6)
    l10.children.forEach((childId: string) => {
      const child = model.elements.find((e: any) => e.id === childId) as any
      expect(child?.itemType).toBe('outcome')
      expect(Array.isArray(child?.properties?.outcome_category)).toBe(true)
    })
  })

  test('pipeline layer present', () => {
    const ids = model.elements.map((e: any) => e.id)
    expect(ids).toContain('#L1b')
  })

  test('no duplicate IDs', () => {
    const ids = model.elements.map((e: any) => e.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  test('L3 is highlighted (Knowledge Core)', () => {
    const l3 = model.elements.find((e: any) => e.id === '#L3')
    expect(l3).toBeDefined()
    expect((l3 as any)?.meta?.highlighted).toBe(true)
  })

  test('all layer containers have children', () => {
    model.elements
      .filter((e: any) => e.type === 'container' && e.containerType === 'layer')
      .forEach((c: any) => {
        expect(c.children.length, `Layer ${c.id} has no children`).toBeGreaterThan(0)
      })
  })

  test('all children IDs resolve to existing elements', () => {
    const allIds = new Set(model.elements.map((e: any) => e.id))
    model.elements
      .filter((e: any) => e.type === 'container')
      .forEach((c: any) => {
        c.children.forEach((childId: string) => {
          expect(allIds.has(childId), `Unresolved child ID ${childId} in ${c.id}`).toBe(true)
        })
      })
  })

  test('left and right panels present', () => {
    const ids = model.elements.map((e: any) => e.id)
    expect(ids).toContain('#panel-left')
    expect(ids).toContain('#panel-right')
  })

  test('meta.order present on all layers', () => {
    model.elements
      .filter(
        (e: any) =>
          e.type === 'container' && (e.containerType === 'layer' || e.containerType === 'pipeline'),
      )
      .forEach((c: any) => {
        expect(c.meta?.order, `Missing meta.order on ${c.id}`).toBeDefined()
      })
  })
})
