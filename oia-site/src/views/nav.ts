type NavRoute = '/' | '/motivation' | '/mitmachen' | '/about' | '/impressum'

interface NavLink {
  href: string
  label: string
  route: NavRoute
}

const NAV_LINKS: NavLink[] = [
  { href: '#/', label: 'OIA', route: '/' },
  { href: '#/motivation', label: 'Motivation', route: '/motivation' },
  { href: '#/mitmachen', label: 'Mitmachen', route: '/mitmachen' },
  { href: '#/about', label: 'About', route: '/about' },
  { href: '#/impressum', label: 'Impressum', route: '/impressum' },
]

function activeRoute(hash: string): NavRoute {
  if (hash.startsWith('#/motivation')) return '/motivation'
  if (hash.startsWith('#/mitmachen')) return '/mitmachen'
  if (hash.startsWith('#/about')) return '/about'
  if (hash.startsWith('#/impressum')) return '/impressum'
  return '/'
}

export function renderNav(navElement: HTMLElement): void {
  const current = activeRoute(window.location.hash || '#/')
  navElement.innerHTML = `
    <div class="site-nav__inner">
      <a class="site-nav__brand" href="#/">OIA</a>
      <ul class="site-nav__links">
        ${NAV_LINKS.map(
          (link) => `
          <li>
            <a
              class="site-nav__link${current === link.route ? ' site-nav__link--active' : ''}"
              href="${link.href}"
            >${link.label}</a>
          </li>`,
        ).join('')}
      </ul>
    </div>
  `
}
