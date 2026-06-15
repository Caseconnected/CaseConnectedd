'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="cc-header">
      <div className="cc-container cc-navbar">

        <Link href="/" className="cc-logo" onClick={() => setMenuOpen(false)}>
          <Image src="/logo.png" alt="CaseConnected" width={150} height={40} priority />
        </Link>

        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          className={`cc-mobile-toggle${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span />
        </button>

        <nav className={`cc-nav${menuOpen ? ' open' : ''}`}>
          {links.map(({ href, label }) => {
            const isAnchor = href.startsWith('#')
            const isActive = !isAnchor && pathname === href
            const linkProps = {
              className: `nav-link${isActive ? ' active' : ''}`,
              onClick: () => setMenuOpen(false),
            }
            if (isAnchor) {
              return (
                <a key={href} {...linkProps} href={href}>
                  {label}
                </a>
              )
            }
            return (
              <Link key={href} {...linkProps} href={href}>
                {label}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}