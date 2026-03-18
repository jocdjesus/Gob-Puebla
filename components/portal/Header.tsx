//components/portal/Header.tsx  
'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import { Menu, X, Search, User, ChevronDown, Phone, Mail, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navItems = [
  { 
    label: 'Trámites y Servicios', 
    href: '/tramites',
    submenu: [
      { label: 'Catálogo de Trámites', href: '/tramites' },
      { label: 'Trámites en Línea', href: '/tramites/en-linea' },
      { label: 'Citas', href: '/citas' },
      { label: 'Pagos', href: '/pagos' },
    ]
  },
  { 
    label: 'Gobierno', 
    href: '/gobierno',
    submenu: [
      { label: 'Gobernador', href: '/gobierno/gobernador' },
      { label: 'Secretarías', href: '/gobierno/secretarias' },
      { label: 'Órganos Auxiliares', href: '/gobierno/organos-auxiliares' },
      { label: 'Directorio', href: '/gobierno/directorio' },
    ]
  },
  { 
    label: 'Puebla Ciudadana', 
    href: '/puebla-ciudadana',
    submenu: [
      { label: 'Apps del Gobierno', href: '/puebla-ciudadana' },
      { label: 'Reportes Ciudadanos', href: '/reportes' },
      { label: 'Participación', href: '/participacion' },
    ]
  },
  { label: 'Noticias', href: '/Noticias' },
  { label: 'Transparencia', href: '/transparencia' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setActiveSubmenu(label)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveSubmenu(null)
    }, 150)
  }

  return (
    <header className="index-header-wrapper">
      <div className="index-top-bar">
        <div className="index-top-bar-container">
          <div className="index-contact-info">
            <a href="tel:2222131313" className="index-top-link">
              <Phone className="w-4 h-4" />
              <span>222 213 1313</span>
            </a>
            <a href="mailto:atencion@puebla.gob.mx" className="index-top-link">
              <Mail className="w-4 h-4" />
              <span>atencion@puebla.gob.mx</span>
            </a>
          </div>
          <div className="index-utility-nav">
            <button className="index-top-link" aria-label="Cambiar idioma">
              <Globe className="w-4 h-4" />
              <span>ES</span>
            </button>
            <Link href="/accesibilidad" className="index-top-link">
              Accesibilidad
            </Link>
          </div>
        </div>
      </div>

      <nav className="index-main-navbar">
        <div className="index-nav-inner">
          <div className="index-nav-flex">
            <Link href="/" className="index-brand-logo" aria-label="Inicio - Gobierno de Puebla">
              <div className="index-logo-icon">
                <span className="index-logo-p">P</span>
              </div>
              <div className="index-brand-text">
                <p className="index-text-gov">Gobierno del Estado</p>
                <p className="index-text-state">de Puebla</p>
              </div>
            </Link>

            <div className="index-desktop-links">
              {navItems.map((item) => (
                <div 
                  key={item.label}
                  className="index-nav-item relative h-full flex items-center"
                  onMouseEnter={() => item.submenu && handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link href={item.href} className="index-nav-anchor">
                    {item.label}
                    {item.submenu && <ChevronDown className="w-4 h-4" />}
                  </Link>
                  
                  {item.submenu && activeSubmenu === item.label && (
                    <div className="index-dropdown">
                      {item.submenu.map((subitem) => (
                        <Link key={subitem.label} href={subitem.href} className="index-dropdown-link">
                          {subitem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="index-actions-group">
              <Button 
                variant="ghost" 
                size="icon" 
                className="md:flex hidden"
                aria-label="Buscar en el portal"
              >
                <Search className="w-5 h-5" />
              </Button>
              <Button variant="outline" className="md:flex hidden items-center gap-2">
                <User className="w-4 h-4" />
                <span>Mi Cuenta</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="index-mobile-panel">
            <div className="index-mobile-inner">
              {navItems.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    className="index-mobile-main-link"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.submenu && (
                    <div className="index-mobile-sub-container">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.label}
                          href={subitem.href}
                          className="index-mobile-sub-link"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subitem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}