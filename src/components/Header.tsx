import { useState } from 'react'

const nav = [
  { href: '#diensten', label: 'Diensten' },
  { href: '#voor-wie', label: 'Voor wie' },
  { href: '#aanpak', label: 'Aanpak' },
  { href: '#contact', label: 'Contact' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <a className="skip-link" href="#main">
        Naar inhoud
      </a>
      <header className="site-header">
        <div className="site-header__inner">
          <a className="logo" href="#">
            Geen Flauw <span>IT</span>
          </a>
          <nav className="nav-desktop" aria-label="Hoofdmenu">
            {nav.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
            <a className="nav-cta" href="#contact">
              Kennismaken
            </a>
          </nav>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Menu sluiten' : 'Menu openen'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </header>
      <div
        id="mobile-nav"
        className={`nav-mobile${open ? ' is-open' : ''}`}
        hidden={!open}
      >
        {nav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </a>
        ))}
        <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>
          Kennismaken
        </a>
      </div>
    </>
  )
}
