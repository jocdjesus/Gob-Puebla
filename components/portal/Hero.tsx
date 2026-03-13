//components/portal/Hero.tsx
'use client'

import { useState } from 'react'
import { Search, FileText, Car, Building2, HeartPulse, GraduationCap, Shield } from 'lucide-react'

const quickServices = [
  { icon: FileText, label: 'Actas de Nacimiento', href: '/tramites/actas-nacimiento' },
  { icon: Car, label: 'Licencias de Conducir', href: '/tramites/licencias' },
  { icon: Building2, label: 'Predial', href: '/tramites/predial' },
  { icon: HeartPulse, label: 'Servicios de Salud', href: '/tramites/salud' },
  { icon: GraduationCap, label: 'Becas y Educación', href: '/tramites/educacion' },
  { icon: Shield, label: 'Seguridad', href: '/tramites/seguridad' },
]

const popularSearches = [
  'Cita para licencia de conducir',
  'Pago de tenencia vehicular',
  'Acta de nacimiento en línea',
  'Registro civil',
  'Becas Puebla',
]

export function Hero() {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = `/buscar?q=${encodeURIComponent(searchQuery)}`
    }
  }

  return (
    <section className="index-hero-section" aria-labelledby="hero-title">
      <div className="index-hero-pattern">
        <div className="index-hero-blob-1" />
        <div className="index-hero-blob-2" />
      </div>

      <div className="index-hero-container">
        <div className="index-hero-text-center">
          <h1 id="hero-title" className="index-hero-title">
            Bienvenido al Portal Ciudadano de Puebla
          </h1>
          <p className="index-hero-description">
            Realiza trámites, consulta servicios y conecta con tu gobierno de manera fácil y segura.
          </p>

          <form onSubmit={handleSearch} className="index-search-form" role="search">
            <div className="index-search-input-wrapper">
              <Search className="index-search-icon" aria-hidden="true" />
              <input
                id="search-tramites"
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Busca trámites, servicios, dependencias..."
                className="index-search-input"
                autoComplete="off"
              />
              <button type="submit" className="index-search-button">
                Buscar
              </button>
            </div>
          </form>

          <div className="index-popular-tags">
            <span className="index-tag-label">Búsquedas populares:</span>
            {popularSearches.map((search) => (
              <button
                key={search}
                onClick={() => setSearchQuery(search)}
                className="index-tag-button"
              >
                {search}
              </button>
            ))}
          </div>
        </div>

        <div className="index-quick-services-grid">
          {quickServices.map((service) => {
            const Icon = service.icon
            return (
              <a key={service.label} href={service.href} className="index-service-card">
                <div className="index-service-icon-box">
                  <Icon className="w-6 h-6 md:w-7 md:h-7" />
                </div>
                <span className="index-service-label">{service.label}</span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}