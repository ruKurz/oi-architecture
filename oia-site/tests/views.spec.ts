import { describe, test, expect, beforeAll } from 'vitest'
import { JSDOM } from 'jsdom'

const dom = new JSDOM('<!DOCTYPE html><html><body><div id="app"></div></body></html>')

beforeAll(() => {
  global.document = dom.window.document
  global.window = dom.window as any
})

describe('renderAboutView', () => {
  test('returns an HTMLElement with class page-view', async () => {
    const { renderAboutView } = await import('../src/views/about')
    const el = renderAboutView()
    expect(el).toBeInstanceOf(dom.window.HTMLElement)
    expect(el.className).toBe('page-view')
  })

  test('contains eyebrow label "About"', async () => {
    const { renderAboutView } = await import('../src/views/about')
    const el = renderAboutView()
    expect(el.querySelector('.page-view__eyebrow')?.textContent?.trim()).toBe('About')
  })

  test('contains an h1 heading', async () => {
    const { renderAboutView } = await import('../src/views/about')
    const el = renderAboutView()
    expect(el.querySelector('h1')).not.toBeNull()
  })

  test('contains at least one section with a title', async () => {
    const { renderAboutView } = await import('../src/views/about')
    const el = renderAboutView()
    expect(el.querySelectorAll('.page-view__section').length).toBeGreaterThan(0)
  })
})

describe('renderContributeView', () => {
  test('returns an HTMLElement with class page-view', async () => {
    const { renderContributeView } = await import('../src/views/contribute')
    const el = renderContributeView()
    expect(el).toBeInstanceOf(dom.window.HTMLElement)
    expect(el.className).toBe('page-view')
  })

  test('contains eyebrow label "Contribute"', async () => {
    const { renderContributeView } = await import('../src/views/contribute')
    const el = renderContributeView()
    expect(el.querySelector('.page-view__eyebrow')?.textContent?.trim()).toBe('Contribute')
  })

  test('contains an h1 heading', async () => {
    const { renderContributeView } = await import('../src/views/contribute')
    const el = renderContributeView()
    expect(el.querySelector('h1')).not.toBeNull()
  })

  test('contains a link to the GitHub repository', async () => {
    const { renderContributeView } = await import('../src/views/contribute')
    const el = renderContributeView()
    const links = Array.from(el.querySelectorAll('a[href]'))
    expect(links.some((a) => (a as HTMLAnchorElement).href.includes('github.com'))).toBe(true)
  })

  test('contains navigation link back to motivation', async () => {
    const { renderContributeView } = await import('../src/views/contribute')
    const el = renderContributeView()
    const links = Array.from(el.querySelectorAll('a[href]'))
    expect(
      links.some((a) => (a as HTMLAnchorElement).getAttribute('href') === '#/motivation'),
    ).toBe(true)
  })
})

describe('renderMotivationView', () => {
  test('returns an HTMLElement with class page-view', async () => {
    const { renderMotivationView } = await import('../src/views/motivation')
    const el = renderMotivationView()
    expect(el).toBeInstanceOf(dom.window.HTMLElement)
    expect(el.className).toBe('page-view')
  })

  test('contains eyebrow label "Motivation"', async () => {
    const { renderMotivationView } = await import('../src/views/motivation')
    const el = renderMotivationView()
    expect(el.querySelector('.page-view__eyebrow')?.textContent?.trim()).toBe('Motivation')
  })

  test('contains version number 0.1.0', async () => {
    const { renderMotivationView } = await import('../src/views/motivation')
    const el = renderMotivationView()
    expect(el.innerHTML).toContain('0.1.0')
  })

  test('contains at least one section', async () => {
    const { renderMotivationView } = await import('../src/views/motivation')
    const el = renderMotivationView()
    expect(el.querySelectorAll('.page-view__section').length).toBeGreaterThan(0)
  })
})

describe('renderLegalView', () => {
  test('returns an HTMLElement with class page-view', async () => {
    const { renderLegalView } = await import('../src/views/legal')
    const el = renderLegalView()
    expect(el).toBeInstanceOf(dom.window.HTMLElement)
    expect(el.className).toBe('page-view')
  })

  test('contains eyebrow label "Legal"', async () => {
    const { renderLegalView } = await import('../src/views/legal')
    const el = renderLegalView()
    expect(el.querySelector('.page-view__eyebrow')?.textContent?.trim()).toBe('Legal')
  })

  test('contains h1 heading "Legal Notice"', async () => {
    const { renderLegalView } = await import('../src/views/legal')
    const el = renderLegalView()
    expect(el.querySelector('h1')?.textContent?.trim()).toBe('Legal Notice')
  })

  test('contains an email contact link', async () => {
    const { renderLegalView } = await import('../src/views/legal')
    const el = renderLegalView()
    const mailtoLink = el.querySelector('a[href^="mailto:"]')
    expect(mailtoLink).not.toBeNull()
  })

  test('contains links to MIT and CC BY 4.0 licenses', async () => {
    const { renderLegalView } = await import('../src/views/legal')
    const el = renderLegalView()
    const links = Array.from(el.querySelectorAll('a[href]'))
    expect(links.some((a) => (a as HTMLAnchorElement).href.includes('creativecommons.org'))).toBe(
      true,
    )
    expect(links.some((a) => (a as HTMLAnchorElement).href.includes('LICENSE'))).toBe(true)
  })
})
