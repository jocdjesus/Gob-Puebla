//components/portal/Noticias.tsx
import { Calendar, ArrowRight, Clock } from 'lucide-react'

const noticias = [
  {
    id: 1,
    title: 'Gobierno de Puebla anuncia nuevo programa de becas para estudiantes universitarios',
    excerpt: 'El programa beneficiará a más de 50,000 estudiantes poblanos con apoyo económico para continuar sus estudios superiores.',
    date: '2026-03-10',
    category: 'Educación',
    image: '/images/news-1.jpg',
    featured: true,
  },
  {
    id: 2,
    title: 'Inauguran nueva línea del transporte público en la zona metropolitana',
    excerpt: 'La Secretaría de Movilidad presenta la ampliación del sistema de transporte que conectará 15 municipios.',
    date: '2026-03-09',
    category: 'Movilidad',
    image: '/images/news-2.jpg',
    featured: false,
  },
  {
    id: 3,
    title: 'Programa de reforestación alcanza meta de 1 millón de árboles plantados',
    excerpt: 'El estado de Puebla cumple su objetivo ambiental con la participación de comunidades y voluntarios.',
    date: '2026-03-08',
    category: 'Medio Ambiente',
    image: '/images/news-3.jpg',
    featured: false,
  },
  {
    id: 4,
    title: 'Nueva plataforma digital simplifica trámites vehiculares en línea',
    excerpt: 'Los ciudadanos podrán realizar el 90% de los trámites de vehículos desde casa.',
    date: '2026-03-07',
    category: 'Tecnología',
    image: '/images/news-4.jpg',
    featured: false,
  },
]

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString('es-MX', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}

function getTimeAgo(dateString: string) {
  const date = new Date(dateString)
  const now = new Date()
  const diffDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24))
  
  if (diffDays === 0) return 'Hoy'
  if (diffDays === 1) return 'Ayer'
  if (diffDays < 7) return `Hace ${diffDays} días`
  return formatDate(dateString)
}

export function Noticias() {
  const noticiaDestacada = noticias.find(n => n.featured)
  const otrasNoticias = noticias.filter(n => !n.featured)

  return (
    <section className="index-news-section" aria-labelledby="noticias-title">
      <div className="index-news-container">
        <div className="index-news-header">
          <div>
            <h2 id="noticias-title" className="index-news-title">
              Noticias del Gobierno
            </h2>
            <p className="index-news-subtitle">
              Mantente informado sobre las acciones y programas del Estado de Puebla.
            </p>
          </div>
          <a href="/noticias" className="index-news-cta-btn" style={{ display: 'none' }}>
            Todas las Noticias
            <ArrowRight className="w-4 h-4" />
          </a>
          <style>{`@media (min-width: 768px) { .index-news-cta-btn { display: inline-flex !important; } }`}</style>
        </div>

        <div className="index-news-grid">
          {noticiaDestacada && (
            <a href={`/noticias/${noticiaDestacada.id}`} className="index-news-featured">
              <div className="index-news-overlay">
                <div className="index-news-gradient" />
                <div className="index-news-featured-content">
                  <span className="index-news-badge">
                    {noticiaDestacada.category}
                  </span>
                  <h3 className="index-news-featured-title">
                    {noticiaDestacada.title}
                  </h3>
                  <p className="index-news-excerpt">
                    {noticiaDestacada.excerpt}
                  </p>
                  <div className="index-news-meta">
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      <Calendar className="w-4 h-4" />
                      {formatDate(noticiaDestacada.date)}
                    </span>
                  </div>
                </div>
              </div>
            </a>
          )}

          <div className="index-news-list">
            {otrasNoticias.map((noticia) => (
              <a key={noticia.id} href={`/noticias/${noticia.id}`} className="index-news-item">
                <div className="index-news-thumb">
                  <div className="index-news-thumb-placeholder" />
                </div>
                <div className="index-news-item-content">
                  <span className="index-news-item-cat">
                    {noticia.category}
                  </span>
                  <h3 className="index-news-item-title">
                    {noticia.title}
                  </h3>
                  <div className="index-news-time-box">
                    <Clock className="w-3 h-3" />
                    {getTimeAgo(noticia.date)}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
           <a href="/noticias" className="index-news-cta-btn" style={{ display: 'inline-flex' }}>
              Ver Todas las Noticias
              <ArrowRight className="w-4 h-4" />
            </a>
            <style>{`@media (min-width: 768px) { .index-news-container > div:last-child { display: none !important; } }`}</style>
        </div>
      </div>
    </section>
  )
}