// app/Noticias/page.tsx
'use client'

import { useState, useMemo, useRef, useCallback, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Calendar, 
  ChevronRight,
  ChevronLeft,
  ArrowUpRight,
  Clock,
  User,
  Search,
  FilterX,
  Eye,
  Newspaper,
  Home
} from 'lucide-react'

const noticiasData = [
  {
    "titulo": "Puebla refuerza control sanitario del gusano barrenador del ganado",
    "fecha": "17 de Marzo de 2026",
    "enlace": "https://www.puebla.gob.mx/index.php/noticias/item/22905-puebla-refuerza-control-sanitario-del-gusano-barrenador-del-ganado",
    "resumen": "- En coordinación con el Gobierno de México, para 2026 se destinó una inversión conjunta de 12 MDP, destinada a la sanidad pecuaria. - Se han ins ...",
    "contenido_completo": "- En coordinación con el Gobierno de México, para 2026 se destinó una inversión conjunta de 12 MDP, destinada a la sanidad pecuaria.\n\n- Se han instalado 2 mil trampas para la mosca (Cochliomyia hominivorax) dentro de la entidad.\n\n- Las acciones se refuerzan en la Sierra Negra, además de la presencia en toda la entidad.\n\nCIUDAD DE PUEBLA, Pue.- El Gobierno del Estado de Puebla mantiene una estrategia permanente de prevención y control del Gusano Barrenador del Ganado (GBG), basada en la vigilancia sanitaria, la atención oportuna y el acompañamiento directo al sector pecuario.\n\nA través de la Secretaría de Agricultura y Desarrollo Rural, y en coordinación con el Servicio Nacional de Sanidad, Inocuidad y Calidad Agroalimentaria (SENASICA), el Organismo Internacional Regional de Sanidad Agropecuaria (OIRSA), la Comisión México–Estados Unidos para la Prevención de la Fiebre Aftosa (CPA) y el Comité de Fomento y Salud Animal del Estado de Puebla, se ejecutan acciones permanentes de supervisión, monitoreo y control sanitario.\n\nComo parte de la estrategia de prevención y control se han colocado 2 mil trampas para la mosca (Cochliomyia hominivorax); tres brigadas permanentes integradas por seis elementos, cada una con médicos veterinarios (tres federales y tres estatales); la atención y contención inmediata de casos de GBG; 18 Puntos de Verificación Interna (PVI's); capacitaciones y acciones de información en campo dirigidas a productoras y productores ganaderos sobre medidas preventivas, todo esto en la entidad, con refuerzo en la Sierra Negra del estado.\n\nEn próximos días se instalarán 3 mil trampas adicionales para fortalecer el control de la mosca del Gusano Barrenador del Ganado. Con estas acciones, Puebla es considerado un estado buffer, al funcionar como una zona de contención que contribuye a evitar la dispersión de la plaga hacia otras regiones del país.\n\nEl Gobierno del Estado de Puebla refrenda su compromiso de proteger el patrimonio ganadero y mantener acciones permanentes que garanticen la sanidad animal en todo el territorio estatal.",
    "imagenes": [
      "https://www.puebla.gob.mx/media/k2/items/cache/1b5f7f32bc07dba87d517fa54f333bfe_L.jpg",
      "https://www.puebla.gob.mx/media/k2/attachments/SADR_1703_2_(2).jpeg",
      "https://www.puebla.gob.mx/media/k2/attachments/SADR_1703_2_(3).jpeg",
      "https://www.puebla.gob.mx/media/k2/attachments/SADR_1703_2_(4).jpeg",
      "https://www.puebla.gob.mx/media/k2/attachments/SADR_1703_2_(5).jpeg",
      "https://www.puebla.gob.mx/media/k2/attachments/SADR_1703_2_(6).jpeg",
      "https://www.puebla.gob.mx/media/k2/attachments/SADR_1703_2_(7).jpeg",
      "https://www.puebla.gob.mx/media/k2/attachments/SADR_1703_2_(8).jpeg",
      "https://www.puebla.gob.mx/media/k2/attachments/SADR_1703_2_(9).jpeg",
      "https://www.puebla.gob.mx/media/k2/attachments/SADR_1703_2_(10).jpeg",
      "https://www.puebla.gob.mx/media/k2/attachments/SADR_1703_2_(1).jpeg"
    ],
    "tags": ["Cultura", "Economía", "Salud"],
    "autor": "Redacción Por Amor a Puebla",
    "vistas": 0,
    "lectura_min": 2
  },
  {
    "titulo": "Gobierno de Puebla anuncia nuevas inversiones en infraestructura educativa",
    "fecha": "16 de Marzo de 2026",
    "enlace": "https://www.puebla.gob.mx/index.php/noticias/item/22904-nuevas-inversiones-educativas",
    "resumen": "El gobierno estatal destinará 50 MDP para la rehabilitación de escuelas en 20 municipios, beneficiando a más de 15,000 estudiantes.",
    "contenido_completo": "El gobierno estatal destinará 50 MDP para la rehabilitación de escuelas en 20 municipios, beneficiando a más de 15,000 estudiantes.\n\nCIUDAD DE PUEBLA, Pue.- El Gobernador del Estado anunció un ambicioso plan de inversión en infraestructura educativa que comprende la rehabilitación de 45 planteles educativos en 20 municipios de la entidad.\n\nLa inversión total asciende a 50 millones de pesos y beneficiará directamente a más de 15,000 estudiantes de nivel básico y medio superior.\n\nLas obras incluyen la rehabilitación de aulas, techumbres, instalaciones eléctricas, sanitarias y áreas deportivas, así como la entrega de equipamiento tecnológico y mobiliario escolar.\n\n'La educación es la base del desarrollo de nuestro estado. Por ello, estamos comprometidos en garantizar espacios dignos y seguros para nuestras niñas, niños y jóvenes', expresó el mandatario estatal durante el anuncio.\n\nLos municipios beneficiados incluyen: Tehuacán, Atlixco, San Martín Texmelucan, Huauchinango, Teziutlán, entre otros. Las obras darán inicio en abril y se prevé que estén concluidas antes del inicio del ciclo escolar 2026-2027.",
    "imagenes": [
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800"
    ],
    "tags": ["Educación", "Gobierno", "Infraestructura"],
    "autor": "Secretaría de Educación",
    "vistas": 245,
    "lectura_min": 3
  },
  {
    "titulo": "Puebla sede del Congreso Nacional de Seguridad Pública 2026",
    "fecha": "15 de Marzo de 2026",
    "enlace": "https://www.puebla.gob.mx/index.php/noticias/item/22903-congreso-seguridad-publica",
    "resumen": "Del 20 al 22 de abril, Puebla recibirá a expertos en seguridad de todo el país para intercambiar experiencias y estrategias.",
    "contenido_completo": "Del 20 al 22 de abril, Puebla recibirá a expertos en seguridad de todo el país para intercambiar experiencias y estrategias.\n\nPUEBLA, Pue.- El Secretario de Seguridad Pública estatal anunció que Puebla será sede del Congreso Nacional de Seguridad Pública 2026, evento que reunirá a especialistas, académicos y funcionarios de los tres órdenes de gobierno.\n\nEl congreso tiene como objetivo principal el intercambio de experiencias exitosas y el análisis de nuevas estrategias para combatir la delincuencia y garantizar la paz social.\n\nSe espera la asistencia de más de 500 participantes, incluyendo secretarios de seguridad estatales, mandos policiales, peritos, criminólogos y expertos internacionales.\n\nDurante los tres días del evento se desarrollarán conferencias magistrales, paneles de discusión y talleres prácticos sobre temas como: inteligencia policial, prevención del delito, justicia cívica, violencia de género, ciberseguridad, entre otros.\n\nEl funcionario destacó que la designación de Puebla como sede es un reconocimiento a los avances en materia de seguridad que ha logrado la entidad en los últimos años.",
    "imagenes": [
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800"
    ],
    "tags": ["Seguridad", "Gobierno", "Eventos"],
    "autor": "Secretaría de Seguridad Pública",
    "vistas": 189,
    "lectura_min": 4
  },
  {
    "titulo": "Programa 'Puebla Verde' supera meta de reforestación 2026",
    "fecha": "14 de Marzo de 2026",
    "enlace": "https://www.puebla.gob.mx/index.php/noticias/item/22902-puebla-verde-reforestacion",
    "resumen": "Con la participación de 10 mil voluntarios, se lograron plantar más de 500 mil árboles en 30 municipios durante la temporada 2026.",
    "contenido_completo": "Con la participación de 10 mil voluntarios, se lograron plantar más de 500 mil árboles en 30 municipios durante la temporada 2026.\n\nPUEBLA, Pue.- La Secretaría de Medio Ambiente informó que el programa 'Puebla Verde' ha superado su meta de reforestación para el año 2026, alcanzando la cifra de 520 mil árboles plantados en 30 municipios de la entidad.\n\nEl programa, que inició en 2024, tiene como objetivo recuperar áreas degradadas, proteger cuencas hidrológicas y promover la participación ciudadana en el cuidado del medio ambiente.\n\nEn esta edición participaron más de 10 mil voluntarios, incluyendo estudiantes, organizaciones civiles, empresas y dependencias gubernamentales.\n\nLas especies plantadas fueron seleccionadas por su adaptabilidad a las condiciones climáticas de cada región, incluyendo pinos, encinos, cedros blancos, y árboles frutales como aguacate y tejocote.\n\n'Estamos muy contentos con la respuesta de la ciudadanía. Este programa demuestra que cuando sociedad y gobierno trabajamos juntos, podemos lograr grandes cosas por nuestro medio ambiente', señaló la titular de la dependencia.\n\nPara 2027, se proyecta una meta de 600 mil árboles plantados, incorporando 10 municipios más al programa.",
    "imagenes": [
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b29?w=800",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800"
    ],
    "tags": ["Ambiente", "Participación", "Gobierno"],
    "autor": "Secretaría de Medio Ambiente",
    "vistas": 312,
    "lectura_min": 3
  },
  {
    "titulo": "Inauguran Centro de Salud Materno-Infantil en Tehuacán",
    "fecha": "13 de Marzo de 2026",
    "enlace": "https://www.puebla.gob.mx/index.php/noticias/item/22901-centro-salud-tehuacan",
    "resumen": "Con una inversión de 30 MDP, el nuevo centro atenderá a más de 50 mil mujeres y niños de la región de Tehuacán y municipios aledaños.",
    "contenido_completo": "Con una inversión de 30 MDP, el nuevo centro atenderá a más de 50 mil mujeres y niños de la región de Tehuacán y municipios aledaños.\n\nTEHUACÁN, Pue.- El Gobernador del Estado inauguró el nuevo Centro de Salud Materno-Infantil en Tehuacán, obra que representa una inversión de 30 millones de pesos y beneficiará a más de 50 mil mujeres y niños de la región.\n\nLas instalaciones cuentan con consultorios de medicina general, pediatría, ginecología y obstetricia; área de ultrasonidos, laboratorio clínico, farmacia, sala de espera, y un área de atención a partos de bajo riesgo.\n\nAdemás, el centro ofrecerá servicios de planificación familiar, control prenatal, detección oportuna de cáncer cervicouterino y de mama, y atención a la violencia de género.\n\n'Con esta obra estamos cumpliendo un compromiso con las mujeres y los niños de Tehuacán. Queremos que tengan acceso a servicios de salud de calidad, cerca de sus hogares y con calidez', expresó el mandatario durante el corte de listón.\n\nEl nuevo centro operará de lunes a viernes de 8:00 a 20:00 horas y los sábados de 8:00 a 14:00 horas, con un equipo de 25 profesionales de la salud.",
    "imagenes": [
      "https://images.unsplash.com/photo-1587351021759-3772687fe598?w=800",
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800"
    ],
    "tags": ["Salud", "Mujer", "Infraestructura"],
    "autor": "Secretaría de Salud",
    "vistas": 156,
    "lectura_min": 3
  }
]

function generateSlug(title: string): string {
  return title.toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

interface Noticia {
  titulo: string;
  fecha: string;
  enlace: string;
  resumen: string;
  contenido_completo: string;
  imagenes: string[];
  tags: string[];
  autor: string;
  vistas: number;
  lectura_min: number;
}

export default function NoticiasPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeTag, setActiveTag] = useState('Todos')
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [showScrollButtons, setShowScrollButtons] = useState({ left: false, right: false })

  const allTags = useMemo(() => {
    const tags = new Set(['Todos'])
    noticiasData.forEach((n: Noticia) => n.tags.forEach(t => tags.add(t)))
    return Array.from(tags)
  }, [])

  const checkScroll = useCallback(() => {
    const container = scrollContainerRef.current
    if (container) {
      const { scrollLeft, scrollWidth, clientWidth } = container
      setShowScrollButtons({
        left: scrollLeft > 10,
        right: scrollLeft < scrollWidth - clientWidth - 10,
      })
    }
  }, [])

  useEffect(() => {
    const container = scrollContainerRef.current
    if (container) {
      checkScroll()
      container.addEventListener('scroll', checkScroll)
      window.addEventListener('resize', checkScroll)
      return () => {
        container.removeEventListener('scroll', checkScroll)
        window.removeEventListener('resize', checkScroll)
      }
    }
  }, [checkScroll, allTags])

  const scroll = useCallback((direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { scrollLeft } = scrollContainerRef.current
      const scrollTo = direction === 'left' ? scrollLeft - 200 : scrollLeft + 200
      scrollContainerRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
    }
  }, [])

  const noticiasFiltradas = useMemo(() => {
    return noticiasData.filter((n: Noticia) => {
      const matchesSearch = n.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           n.resumen.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesTag = activeTag === 'Todos' || n.tags.includes(activeTag)
      return matchesSearch && matchesTag
    })
  }, [searchTerm, activeTag])

  return (
    <div className="noticias-page-wrapper">
      <header className="noticias-header-sticky">
        <div className="noticias-header-container">
          <div className="noticias-top-row">
            <div className="noticias-brand">
              <h1 className="noticias-main-title">
                Puebla<span className="noticias-title-accent">Informa.</span>
              </h1>
              <p className="noticias-subtitle">Sala de Prensa Gubernamental</p>
            </div>

            <Link 
              href="/" 
              className="noticias-home-button"
              aria-label="Ir al inicio"
              title="Ir al inicio"
            >
              <Home className="w-5 h-5" aria-hidden="true" />
              <span>Inicio</span>
            </Link>

            <div className="noticias-search-box">
              <Search className="noticias-search-icon" aria-hidden="true" />
              <input 
                type="text" 
                placeholder="Buscar boletín por título o contenido..."
                className="noticias-search-input"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                aria-label="Buscar boletines por título o contenido"
              />
              {searchTerm && (
                <button 
                  className="noticias-clear-search"
                  onClick={() => setSearchTerm('')}
                  aria-label="Limpiar búsqueda"
                >
                  ×
                </button>
              )}
            </div>
          </div>

          <nav className="noticias-filter-nav" aria-label="Categorías de noticias">
            {showScrollButtons.left && (
              <button 
                onClick={() => scroll('left')}
                className="noticias-scroll-btn noticias-btn-left"
                aria-label="Desplazar categorías a la izquierda"
              >
                <ChevronLeft className="w-4 h-4" aria-hidden="true" />
              </button>
            )}
            
            <div 
              ref={scrollContainerRef}
              className="noticias-tags-container"
              role="tablist"
              aria-label="Filtros por categoría"
            >
              {allTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  className={`noticias-tag-pill ${activeTag === tag ? 'noticias-tag-active' : ''}`}
                  role="tab"
                  aria-selected={activeTag === tag}
                  aria-controls="noticias-grid"
                >
                  {tag}
                </button>
              ))}
            </div>

            {showScrollButtons.right && (
              <button 
                onClick={() => scroll('right')}
                className="noticias-scroll-btn noticias-btn-right"
                aria-label="Desplazar categorías a la derecha"
              >
                <ChevronRight className="w-4 h-4" aria-hidden="true" />
              </button>
            )}
          </nav>

          {(activeTag !== 'Todos' || searchTerm) && (
            <div className="noticias-active-filters">
              <span className="noticias-filter-label">Filtros activos:</span>
              {activeTag !== 'Todos' && (
                <span className="noticias-active-tag">
                  Categoría: {activeTag}
                  <button onClick={() => setActiveTag('Todos')}>×</button>
                </span>
              )}
              {searchTerm && (
                <span className="noticias-active-tag">
                  Búsqueda: "{searchTerm}"
                  <button onClick={() => setSearchTerm('')}>×</button>
                </span>
              )}
            </div>
          )}
        </div>
      </header>

      <main id="contenido-principal" className="noticias-main-content">
        {noticiasFiltradas.length > 0 ? (
          <>
            <div className="noticias-results-count">
              Mostrando {noticiasFiltradas.length} {noticiasFiltradas.length === 1 ? 'resultado' : 'resultados'}
            </div>

            <div id="noticias-grid" className="noticias-grid">
              {noticiasFiltradas.map((noticia: Noticia, index: number) => (
                <Link 
                  key={generateSlug(noticia.titulo)}
                  href={`/Noticias/${generateSlug(noticia.titulo)}`} 
                  className="noticias-card"
                  aria-label={`Leer noticia: ${noticia.titulo}`}
                  title={noticia.titulo}
                >
                  <div className="noticias-image-container">
                    {noticia.imagenes && noticia.imagenes.length > 0 ? (
                      <Image 
                        src={noticia.imagenes[0]} 
                        alt="" 
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="noticias-img-thumb" 
                        aria-hidden="true"
                        loading={index < 4 ? "eager" : "lazy"}
                      />
                    ) : (
                      <div className="noticias-no-image">
                        <Newspaper className="w-12 h-12 text-gray-300" />
                      </div>
                    )}
                    
                    <div className="noticias-metrics-overlay" aria-hidden="true">
                      <div className="noticias-metric-badge">
                        <Eye className="w-3.5 h-3.5 noticias-icon-blue" /> 
                        <span>{noticia.vistas}</span>
                      </div>
                      <div className="noticias-metric-badge">
                        <Clock className="w-3.5 h-3.5 noticias-icon-green" /> 
                        <span>{noticia.lectura_min} MIN</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="noticias-card-body">
                    <div className="noticias-card-tags">
                      {noticia.tags.map((t, i) => (
                        <span key={i} className="noticias-card-tag-item">
                          {t}
                        </span>
                      ))}
                    </div>

                    <h2 className="noticias-card-title">{noticia.titulo}</h2>

                    <p className="noticias-card-excerpt">
                      {noticia.resumen}
                    </p>

                    <div className="noticias-card-footer">
                      <div className="noticias-meta-data">
                        <span className="noticias-date">
                          <Calendar className="w-3 h-3" aria-hidden="true" /> 
                          <time dateTime={noticia.fecha}>{noticia.fecha}</time>
                        </span>
                        <span className="noticias-author">
                          <User className="w-3 h-3 noticias-icon-accent" aria-hidden="true" /> 
                          {noticia.autor}
                        </span>
                      </div>
                      <div className="noticias-action-icon" aria-hidden="true">
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </>
        ) : (
          <div className="noticias-empty-state">
            <FilterX className="noticias-empty-icon" aria-hidden="true" />
            <p className="noticias-empty-text">No se encontraron boletines con los filtros seleccionados.</p>
            <button 
              className="noticias-clear-filters-btn"
              onClick={() => {
                setSearchTerm('')
                setActiveTag('Todos')
              }}
            >
              Limpiar filtros
            </button>
          </div>
        )}
      </main>

      <footer className="noticias-footer">
        <div className="noticias-footer-container">
          <p>© 2026 Puebla Noticias. Sala de Prensa Gubernamental.</p>
        </div>
      </footer>
    </div>
  )
}