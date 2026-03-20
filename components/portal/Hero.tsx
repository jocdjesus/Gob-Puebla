//components/portal/Hero.tsx
'use client'

import { useState, useEffect, useRef } from 'react'
import { Search, Sparkles, X, ArrowRight } from 'lucide-react'
import { HeroWalkthrough } from '../portal/HeroWalkthrough'

const iaData = [
  {
    "tag": "Canje de placas de circulación de vehículos de servicio particular extemporáneo",
    "category": "Secretaría de Planeación, Finanzas y Administración",
    "patterns": ["canje", "placas", "vehiculos", "particular", "extemporaneo"],
    "responses": [
      "DESCRIPCIÓN: Están obligados al canje de placas extemporáneo los vehículos que no cuente con las placas de circulación con el último diseño autorizado por la Secretaría de Comunicaciones y Transportes (placas diferentes a las que contienen la imagen institucional de la administración 2019-2026)",
      "REQUISITOS: 1. Folio impreso de cita agendada. 2. Documento que ampare la propiedad del vehículo (Factura o CFDI). 3. Identificación Oficial vigente con fotografía. 4. Comprobante de domicilio en el Estado de Puebla. 5. Placas de circulación anteriores (delantera y trasera).",
      "COSTO: $1,275.00 Placas para automóvil, camión, autobús, ecológicos, antiguos y para personas con discapacidad. $970.00 Placas para remolques. $540.00 Placas para Motocicletas. $700.00 Expedición de tarjeta de circulación."
    ],
    "source_url": "https://ventanilla.puebla.gob.mx/web/fichaAsunto.do?opcion=0&asas_ide_asu=1596&ruta=/web/asuntosMasUsuales.do?opcion=0&periodo=0"
  }
]

export function Hero() {
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearching, setIsSearching] = useState(false)
  const [iaFullText, setIaFullText] = useState('')
  const [displayedText, setDisplayedText] = useState('')
  const [currentCategory, setCurrentCategory] = useState('')
  const [currentLink, setCurrentLink] = useState('')
  const [suggestions, setSuggestions] = useState<typeof iaData>([])
  const searchRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (iaFullText && isSearching) {
      setDisplayedText('')
      let index = 0
      const words = iaFullText.split(' ')
      const interval = setInterval(() => {
        if (index < words.length) {
          const wordToAdd = words[index]
          if (wordToAdd !== undefined) {
            setDisplayedText((prev) => prev + (index === 0 ? '' : ' ') + wordToAdd)
          }
          index++
        } else {
          clearInterval(interval)
        }
      }, 20)
      return () => clearInterval(interval)
    }
  }, [iaFullText, isSearching])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearching(false)
        setSuggestions([])
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const formatIAContent = (text: string) => {
    return text
      .replace(/(\d+\.)\s/g, '\n$1 ')
      .replace(/REQUISITOS:/g, '\nREQUISITOS:')
      .replace(/COSTO:/g, '\nCOSTO:')
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchQuery(value)
    if (isSearching) setIsSearching(false)

    if (value.trim().length >= 2) {
      const filtered = iaData.filter(item =>
        item.tag.toLowerCase().includes(value.toLowerCase()) ||
        item.patterns.some(p => value.toLowerCase().includes(p))
      )
      setSuggestions(filtered)
    } else {
      setSuggestions([])
    }
  }

  const activateIA = (item: typeof iaData[0]) => {
    const desc = item.responses.find(r => r.startsWith('DESCRIPCIÓN:')) || ""
    const reqs = item.responses.find(r => r.startsWith('REQUISITOS:')) || ""
    const cost = item.responses.find(r => r.startsWith('COSTO:')) || ""

    const combinedResponse = `${desc}\n\n${formatIAContent(reqs)}\n\n${formatIAContent(cost)}`

    setIaFullText(combinedResponse)
    setCurrentCategory(item.category)
    setCurrentLink(item.source_url)
    setSuggestions([])
    setIsSearching(true)
  }

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!searchQuery.trim()) return

    const lowerText = searchQuery.toLowerCase()
    const match = iaData.find(item =>
      item.patterns.some(p => lowerText.includes(p)) ||
      item.tag.toLowerCase().includes(lowerText)
    )

    if (match) {
      activateIA(match)
    } else {
      window.location.href = `/buscar?q=${encodeURIComponent(searchQuery)}`
    }
  }

  return (
    <section className="index-hero-section" style={{ zIndex: (isSearching || suggestions.length > 0) ? 50 : 10 }}>
      <HeroWalkthrough />
      <div className="index-hero-container">
        <div className="index-hero-text-center">
          <h1 className="index-hero-title">Bienvenido al Portal Ciudadano de Puebla</h1>
          <p className="index-hero-description">
            Realiza trámites de manera fácil y segura con asistencia inteligente.
          </p>

          <div className="index-search-form" ref={searchRef}>
            <form onSubmit={handleSearchSubmit} className="index-search-input-wrapper">
              <Search className="index-search-icon" />
              <input
                type="search"
                value={searchQuery}
                onChange={handleInputChange}
                placeholder="Busca trámites (ej: canje de placas)..."
                className="index-search-input"
                autoComplete="off"
              />
              <button type="submit" className="index-search-button">Buscar</button>

              {suggestions.length > 0 && !isSearching && (
                <div className="index-search-results-overlay">
                  <div className="index-suggestions-list">
                    <p className="index-suggestions-label">Trámites sugeridos:</p>
                    {suggestions.map((item, idx) => (
                      <button
                        key={idx}
                        type="button"
                        className="index-suggestion-item"
                        onClick={() => activateIA(item)}
                      >
                        <Search size={14} className="index-text-muted" />
                        <span>{item.tag}</span>
                        <ArrowRight size={14} className="index-suggestion-arrow" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {isSearching && displayedText && (
                <div className="index-search-results-overlay">
                  <div className="index-ia-answer-box">
                    <div className="index-ia-header">
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Sparkles className="index-ia-icon-spark" size={16} />
                        <span className="index-ia-badge">Respuesta Oficial IA</span>
                      </div>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation()
                          setIsSearching(false)
                          setIaFullText('')
                          setDisplayedText('')
                        }}
                        className="index-ia-close-btn"
                      >
                        <X size={16} />
                      </button>
                    </div>
                    <div className="index-ia-content">
                      <div className="index-ia-a-box">
                        <p className="index-ia-a-text" style={{ whiteSpace: 'pre-wrap' }}>
                          {displayedText}
                          <span className="index-ia-cursor">|</span>
                        </p>
                      </div>
                      <div style={{ marginTop: '1.25rem' }}>
                        <a href={currentLink} className="index-ia-link" target="_blank" rel="noopener noreferrer">
                          Consultar trámite oficial
                          <ArrowRight size={14} />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="index-ia-footer">
                    Fuente: {currentCategory}
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}