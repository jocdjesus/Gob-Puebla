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
    "titulo": "Orquesta Educares alista concierto didáctico con músicos del conservatorio",
    "fecha": "18 de Marzo de 2026",
    "enlace": "https://www.puebla.gob.mx/index.php/noticias/item/22927-orquesta-educares-alista-concierto-didactico-con-musicos-del-conservatorio",
    "resumen": "- Se llevará a cabo el viernes 20 de marzo, a partir de las 18:00 horas, con el objetivo de acercar al público en general a la música clásica, esp ...",
    "contenido_completo": "- Se llevará a cabo el viernes 20 de marzo, a partir de las 18:00 horas, con el objetivo de acercar al público en general a la música clásica, especialmente niñas, niños y jóvenes.\n\nCIUDAD DE PUEBLA, Pue. – La Orquesta Educares, en conjunto con la Secretaría de Arte y Cultura, realizará un concierto didáctico de música de cámara en el que participarán alumnas y alumnos del Benemérito Conservatorio de Música del Estado de Puebla, el encuentro es el próximo viernes 20 de marzo, a partir de las 18:00 horas.\n\nEsta iniciativa es propuesta por un grupo de docentes con más de 25 años de experiencia, encabezados por los directores generales Miguel Ángel López Castro y Andrés Rosas Nieto, quienes identificaron la necesidad de que las familias acerquen a sus hijas e hijos a la cultura musical, así como generar espacios para las y los artistas locales, a fin de educar a las nuevas generaciones de una manera asequible y dinámica y contribuir a la reconstrucción del tejido social.\n\nEl evento consta de una puesta en escena que narra el reencuentro de dos jóvenes en un café, quienes comparten sus experiencias tras asistir a un concierto de orquesta. A partir de esta historia, se desarrollará la trama que permitirá transmitir, de forma clara y amena, los elementos básicos de la música clásica y el comportamiento adecuado en este tipo de presentaciones.\n\nEl programa dispondrá de una versión de mano digital al que el público podrá acceder mediante un código QR durante el encuentro, donde se incluirá información sobre la orquesta, las piezas a interpretar y los músicos participantes, con el propósito de incentivar así a las y los jóvenes a continuar su formación profesional. Previo al espectáculo llevará a cabo una misa en el Santuario de la Virgen de Guadalupe, conocido como “La Villita”, para celebrar este emprendimiento cultural.\n\nCon el respaldo del gobernador Alejandro Armenta Mier, la Orquesta Educares y la Secretaría de Arte y Cultura impulsa este tipo de proyectos para generar un círculo virtuoso que acerque las manifestaciones culturales y artísticas a la comunidad, al tiempo que fortalece el proceso formativo. A su vez, la organización hace un llamado a instituciones educativas de nivel preescolar, primaria, y secundaria a colaborar pen las labores en pro de estos objetivos.",
    "imagenes": [
      "https://www.puebla.gob.mx/media/k2/items/cache/f5b558dc035964ac096bebcf53c5d622_L.jpg",
      "https://www.puebla.gob.mx/media/k2/attachments/SAC_1803_(1).jpeg",
      "https://www.puebla.gob.mx/media/k2/attachments/SAC_1803_(2).jpeg",
      "https://www.puebla.gob.mx/media/k2/attachments/SAC_1803_(3).jpeg",
      "https://www.puebla.gob.mx/media/k2/attachments/SAC_1803_(4).jpeg"
    ],
    "tags": [
      "Cultura"
    ],
    "autor": "Redacción Por Amor a Puebla",
    "vistas": 0,
    "lectura_min": 2
  },
  {
    "titulo": "Puebla forma parte de la fiesta mundialista, recibe trofeo internacional",
    "fecha": "18 de Marzo de 2026",
    "enlace": "https://www.puebla.gob.mx/index.php/noticias/item/22925-puebla-forma-parte-de-la-fiesta-mundialista-recibe-trofeo-internacional",
    "resumen": "Comunicado AA 269/2026 - El gobernador Alejandro Armenta Mier, reafirmó que Puebla es el Latido de México, donde se impulsa el deporte como motor d ...",
    "contenido_completo": "Comunicado AA 269/2026\n\n- El gobernador Alejandro Armenta Mier, reafirmó que Puebla es el Latido de México, donde se impulsa el deporte como motor de desarrollo y transformación.\n\nCIUDAD DE PUEBLA, Pue.- Durante los días 18 y 19 de marzo, Puebla se convierte en el epicentro del fútbol mundial con la presentación del trofeo del torneo más importante de esta disciplina. Al recibirlo, el gobernador Alejandro Armenta Mier, destacó que el deporte une a las familias, por lo que se impulsa como una política de Estado.\n\nAcompañado por su esposa, la presidenta del Patronato del Sistema Estatal DIF, Ceci Arellano, el gobernador Armenta Mier, subrayó que Puebla forma parte del evento de fútbol más grande, gracias a la coordinación con la presidenta de México, Claudia Sheinbaum.\n\n“Cuidar el medio ambiente es cuidar el planeta, y el fútbol nos une en esta causa”, afirmó Armenta Mier, al destacar que trabajarán de manera conjunta con Grupo Femsa en iniciativas enfocadas a la protección ambiental, así como en eventos navideños.\n\nEsta pieza visitará diez ciudades del país entre el 27 de febrero y el 22 de marzo. Las y los aficionados podrán recorrer espacios inmersivos, conocer momentos históricos y tomarse una fotografía con el trofeo original.\n\nEl presidente municipal, José Chedraui, sostuvo que Puebla capital está lista para vivir la emoción del fútbol y recibir a turistas. Afirmó que, hoy más que nunca, el deporte es impulsado tanto por el gobierno federal, como por el estatal y es una herramienta para construir la paz, así como para detonar el desarrollo comunitario. “El mundial llega a México en un capítulo decisivo de nuestra historia, uno donde se ha dado el mayor impulso al deporte para abrir oportunidades a las y los jóvenes”, indicó.\n\nEl vicepresidente de Asuntos Públicos, Comunicaciones y Sustentabilidad de Grupo Femsa, Patricio Caso, indicó que no existe mejor lugar para que el trofeo esté que en los corazones de México, como Puebla. Invitó a las y los aficionados a que disfruten de la intensidad del evento más importante del mundo.\n\nEl director de Asuntos Públicos de Femsa, Aldo Castrejón, señaló que este evento tiene como objetivo acercar el fútbol a las familias. Destacó que la empresa trabaja de manera coordinada con las autoridades estatales en proyectos enfocados al cuidado del agua, el reciclaje y el desarrollo comunitario. En ese sentido, precisó que han impulsado la instalación de sistemas de captación de agua de lluvia en centros educativos, así como iniciativas de economía circular. Concluyó al informar que recientemente, en colaboración con el Sistema Estatal DIF, se entregaron 54 equipos de cómputo.\n\nCabe mencionar que durante el evento estuvo presente el ex futbolista y campeón mundial en 2010 con la Selección de España, Fernando Llorente, quien recordó que el campeonato logrado en Sudáfrica unió a su país. El jugador internacional llamó a la niñez poblana a siempre luchar por sus sueños.",
    "imagenes": [
      "https://www.puebla.gob.mx/media/k2/items/cache/636b1c27a208d57ed918667d0384c0ea_L.jpg",
      "https://www.puebla.gob.mx/media/k2/attachments/AA_1803_4_(1).jpeg",
      "https://www.puebla.gob.mx/media/k2/attachments/AA_1803_4_(2).jpeg",
      "https://www.puebla.gob.mx/media/k2/attachments/AA_1803_4_(3).jpeg",
      "https://www.puebla.gob.mx/media/k2/attachments/AA_1803_4_(4).jpeg",
      "https://www.puebla.gob.mx/media/k2/attachments/AA_1803_4_(5).jpeg",
      "https://www.puebla.gob.mx/media/k2/attachments/AA_1803_4_(6).jpeg",
      "https://www.puebla.gob.mx/media/k2/attachments/AA_1803_4_(7).jpeg",
      "https://www.puebla.gob.mx/media/k2/attachments/AA_1803_4_(8).jpeg",
      "https://www.puebla.gob.mx/media/k2/attachments/AA_1803_4_(9).jpeg",
      "https://www.puebla.gob.mx/media/k2/attachments/AA_1803_4_(10).jpeg",
      "https://www.puebla.gob.mx/media/k2/attachments/AA_1803_4_(11).jpeg",
      "https://www.puebla.gob.mx/media/k2/attachments/AA_1803_4_(12).jpeg",
      "https://www.puebla.gob.mx/media/k2/attachments/AA_1803_4_(13).jpeg",
      "https://www.puebla.gob.mx/media/k2/attachments/AA_1803_4_(14).jpeg",
      "https://www.puebla.gob.mx/media/k2/attachments/AA_1803_4_(15).jpeg"
    ],
    "tags": [
      "Cultura",
      "Economía",
      "Deportes",
      "Medio Ambiente"
    ],
    "autor": "Redacción Por Amor a Puebla",
    "vistas": 0,
    "lectura_min": 3
  },
  {
    "titulo": "Gobierno de México entrega en Puebla más de 6 mil apoyos por Tormenta Jerry",
    "fecha": "18 de Marzo de 2026",
    "enlace": "https://www.puebla.gob.mx/index.php/noticias/item/22924-gobierno-de-mexico-entrega-en-puebla-mas-de-6-mil-apoyos-por-tormenta-jerry",
    "resumen": "Comunicado AA 268/2026 -Los apoyos incluyen refrigeradores, estufas, licuadoras y baterías, y contribuyeron a la recuperación de las condiciones de ...",
    "contenido_completo": "Comunicado AA 268/2026\n\n-Los apoyos incluyen refrigeradores, estufas, licuadoras y baterías, y contribuyeron a la recuperación de las condiciones de vida de las familias.\n\nCIUDAD DE PUEBLA, PUE. – Durante los meses de febrero y marzo del presente, la Secretaría de la Defensa Nacional (DEFENSA) y la Guardia Nacional (GN), en coordinación con la Secretaría de Bienestar, entregaron más de 6 mil apoyos a afectados por la Tormenta Jerry, registrada en 2025 en la Sierra Norte de Puebla.\n\nComo parte de estas acciones, se entregaron 2 mil 949 colchones y 3 mil 186 paquetes en beneficio de habitantes de 37 municipios afectados por el fenómeno meteorológico.\n\nLos municipios atendidos fueron: Juan Galindo, Xicotepec, Naupan, Tlacuilotepec, Jopala, Honey, Pahuatlán, Huauchinango, Venustiano Carranza, Francisco Z. Mena, Chignahuapan, Tetela de Ocampo, Jalpan, Zihuateutla, Zacatlán, Ixtacamaxtitlán, Huehuetla y Hermenegildo Galeana.\n\nAdemás: Tlaola, Jonotla, Nauzontla, Zongozotla, Ahuacatlán, Tenampulco, Tlaxco, Pantepec, Tlapacoya, Chiconcuautla, Ayotoxco de Guerrero, Tepango de Rodríguez, Zapotitlán de Méndez, Xochitlán de Vicente Suárez, Olintla, Tlatlauquitepec, Zacapoaxtla y Hueyapan.\n\nCabe destacar que además de colchones, los paquetes incluyen refrigeradores, estufas, licuadoras y baterías, contribuyendo a la recuperación de las condiciones de vida de las familias afectadas.\n\nCon estas acciones, se refrenda el compromiso de brindar atención oportuna y apoyo solidario a la población en situación de emergencia, bajo la coordinación del gobernador Alejandro Armenta Mier.",
    "imagenes": [
      "https://www.puebla.gob.mx/media/k2/items/cache/224e866315db54e16c4912c3785b74c4_L.jpg",
      "https://www.puebla.gob.mx/media/k2/attachments/AA_1803_3_(1).jpeg",
      "https://www.puebla.gob.mx/media/k2/attachments/AA_1803_3_(2).jpeg",
      "https://www.puebla.gob.mx/media/k2/attachments/AA_1803_3_(3).jpeg",
      "https://www.puebla.gob.mx/media/k2/attachments/AA_1803_3_(4).jpeg",
      "https://www.puebla.gob.mx/media/k2/attachments/AA_1803_3_(5).jpeg",
      "https://www.puebla.gob.mx/media/k2/attachments/AA_1803_3_(6).jpeg",
      "https://www.puebla.gob.mx/media/k2/attachments/AA_1803_3_(7).jpeg",
      "https://www.puebla.gob.mx/media/k2/attachments/AA_1803_3_(8).jpeg"
    ],
    "tags": [
      "Cultura"
    ],
    "autor": "Redacción Por Amor a Puebla",
    "vistas": 0,
    "lectura_min": 2
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