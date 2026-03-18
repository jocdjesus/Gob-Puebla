//components/portal/Noticias.tsx
'use client'

import { Calendar, ArrowRight, Clock } from 'lucide-react'
import Image from 'next/image'

const noticiasData = [
  {
    "titulo": "Orquesta Educares alista concierto didáctico con músicos del conservatorio",
    "fecha": "18 de Marzo de 2026",
    "resumen": "- Se llevará a cabo el viernes 20 de marzo, a partir de las 18:00 horas, con el objetivo de acercar al público en general a la música clásica, esp ...",
    "imagenes": [
      "https://www.puebla.gob.mx/media/k2/items/cache/f5b558dc035964ac096bebcf53c5d622_L.jpg"
    ],
    "tags": ["Cultura"],
    "featured": true
  },
  {
    "titulo": "Puebla forma parte de la fiesta mundialista, recibe trofeo internacional",
    "fecha": "18 de Marzo de 2026",
    "resumen": "Comunicado AA 269/2026 - El gobernador Alejandro Armenta Mier, reafirmó que Puebla es el Latido de México...",
    "imagenes": [
      "https://www.puebla.gob.mx/media/k2/items/cache/636b1c27a208d57ed918667d0384c0ea_L.jpg"
    ],
    "tags": ["Deportes"],
    "featured": false
  },
  {
    "titulo": "Gobierno de México entrega en Puebla más de 6 mil apoyos por Tormenta Jerry",
    "fecha": "18 de Marzo de 2026",
    "resumen": "Comunicado AA 268/2026 -Los apoyos incluyen refrigeradores, estufas, licuadoras y baterías...",
    "imagenes": [
      "https://www.puebla.gob.mx/media/k2/items/cache/224e866315db54e16c4912c3785b74c4_L.jpg"
    ],
    "tags": ["Bienestar"],
    "featured": false
  }
]

function generateSlug(title: string): string {
  return title.toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

export function Noticias() {
  const noticiaDestacada = noticiasData.find(n => n.featured)
  const otrasNoticias = noticiasData.filter(n => !n.featured)

  return (
    <section className="index-news-section" aria-labelledby="noticias-title">
      <div className="index-news-container">
        <div className="index-news-header">
          <div>
            <h2 id="noticias-title" className="index-news-title">
              Noticias del Gobierno
            </h2>
            <p className="index-news-subtitle">
              Acciones y programas relevantes para la ciudadanía poblana.
            </p>
          </div>
          <a href="/Noticias" className="index-news-cta-btn" style={{ display: 'none' }}>
            Todas las Noticias
            <ArrowRight className="w-4 h-4" />
          </a>
          <style>{`@media (min-width: 768px) { .index-news-cta-btn { display: inline-flex !important; } }`}</style>
        </div>

        <div className="index-news-grid">
          {noticiaDestacada && (
            <a href={`/Noticias/${generateSlug(noticiaDestacada.titulo)}`} className="index-news-featured">
              <div className="index-news-overlay">
                <Image 
                  src={noticiaDestacada.imagenes[0]}
                  alt={noticiaDestacada.titulo}
                  fill
                  className="object-cover"
                />
                <div className="index-news-gradient" />
                <div className="index-news-featured-content">
                  <span className="index-news-badge">
                    {noticiaDestacada.tags[0]}
                  </span>
                  <h3 className="index-news-featured-title">
                    {noticiaDestacada.titulo}
                  </h3>
                  <p className="index-news-excerpt">
                    {noticiaDestacada.resumen}
                  </p>
                  <div className="index-news-meta">
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      <Calendar className="w-4 h-4" />
                      {noticiaDestacada.fecha}
                    </span>
                  </div>
                </div>
              </div>
            </a>
          )}

          <div className="index-news-list">
            {otrasNoticias.map((noticia) => (
              <a key={generateSlug(noticia.titulo)} href={`/Noticias/${generateSlug(noticia.titulo)}`} className="index-news-item">
                <div className="index-news-thumb" style={{ position: 'relative', overflow: 'hidden' }}>
                  {noticia.imagenes && noticia.imagenes[0] ? (
                    <Image 
                      src={noticia.imagenes[0]}
                      alt={noticia.titulo}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="index-news-thumb-placeholder" />
                  )}
                </div>
                <div className="index-news-item-content">
                  <span className="index-news-item-cat">
                    {noticia.tags[0]}
                  </span>
                  <h3 className="index-news-item-title">
                    {noticia.titulo}
                  </h3>
                  <div className="index-news-time-box">
                    <Clock className="w-3 h-3" />
                    <span>Reciente</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <a href="/Noticias" className="index-news-cta-btn" style={{ display: 'inline-flex' }}>
            Ver Todas las Noticias
            <ArrowRight className="w-4 h-4" />
          </a>
          <style>{`@media (min-width: 768px) { .index-news-container > div:last-child { display: none !important; } }`}</style>
        </div>
      </div>
    </section>
  )
}