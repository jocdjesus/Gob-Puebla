// app/Noticias/[slug]/page.tsx
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { 
  Calendar, 
  Share2, 
  ArrowLeft, 
  ExternalLink,
  ChevronRight,
  Twitter,
  Facebook,
  Instagram,
  Image as ImageIcon,
  Newspaper,
  Trophy,
  Shield,
  Building2,
  Leaf,
  GraduationCap,
  Heart,
  Target
} from 'lucide-react'
import GaleriaImagenes from './GaleriaImagenes'

const noticias = [
  {
    "titulo": "Puebla refuerza control sanitario del gusano barrenador del ganado",
    "fecha": "17 de Marzo de 2026",
    "enlace": "https://www.puebla.gob.mx/index.php/noticias/item/22905-puebla-refuerza-control-sanitario-del-gusano-barrenador-del-ganado",
    "resumen": "- En coordinación con el Gobierno de México, para 2026 se destinó una inversión conjunta de 12 MDP, destinada a la sanidad pecuaria. - Se han ins ...",
    "contenido_completo": "- En coordinación con el Gobierno de México, para 2026 se destinó una inversión conjunta de 12 MDP, destinada a la sanidad pecuaria.\n\n- Se han instalado 2 mil trampas para la mosca (Cochliomyia hominivorax) dentro de la entidad.\n\n- Las acciones se refuerzan en la Sierra Negra, además de la presencia en toda la entidad.\n\nCIUDAD DE PUEBLA, Pue.- El Gobierno del Estado de Puebla mantiene una estrategia permanente de prevención y control del Gusano Barrenador del Ganado (GBG), basada en la vigilancia sanitaria, la atención oportuna y el acompañamiento directo al sector pecuario.\n\nA través de la Secretaría de Agricultura y Desarrollo Rural, y en coordinación con el Servicio Nacional de Sanidad, Inocuidad y Calidad Agroalimentaria (SENASICA), el Organismo Internacional Regional de Sanidad Agropecuaria (OIRSA), la Comisión México–Estados Unidos para la Prevención de la Fiebre Aftosa (CPA) y el Comité de Fomento y Salud Animal del Estado de Puebla, se ejecutan acciones permanentes de supervisión, monitoreo y control sanitario.\n\nComo parte de la estrategia de prevención y control se han colocado 2 mil trampas para la mosca (Cochliomyia hominivorax); tres brigadas permanentes integradas por seis elementos, cada una con médicos veterinarios (tres federales y tres estatales); la atención y contención inmediata de casos de GBG; 18 Puntos de Verificación Interna (PVI’s); capacitaciones y acciones de información en campo dirigidas a productoras y productores ganaderos sobre medidas preventivas, todo esto en la entidad, con refuerzo en la Sierra Negra del estado.\n\nEn próximos días se instalarán 3 mil trampas adicionales para fortalecer el control de la mosca del Gusano Barrenador del Ganado. Con estas acciones, Puebla es considerado un estado buffer, al funcionar como una zona de contención que contribuye a evitar la dispersión de la plaga hacia otras regiones del país.\n\nEl Gobierno del Estado de Puebla refrenda su compromiso de proteger el patrimonio ganadero y mantener acciones permanentes que garanticen la sanidad animal en todo el territorio estatal.",
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
    "tags": [
      "Cultura",
      "Economía",
      "Salud"
    ],
    "autor": "Redacción Por Amor a Puebla",
    "vistas": 0,
    "lectura_min": 2
  },
]

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[áäàâ]/g, 'a')
    .replace(/[éëèê]/g, 'e')
    .replace(/[íïìî]/g, 'i')
    .replace(/[óöòô]/g, 'o')
    .replace(/[úüùû]/g, 'u')
    .replace(/[ñ]/g, 'n')
    .replace(/:/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

function extractComunicado(texto: string): string | null {
  const match = texto.match(/(Comunicado\s+[A-Z]+\s+\d+\/\d+)/i)
  return match ? match[1] : null
}

function getNoticiaIcon(titulo: string, contenido: string) {
  const texto = (titulo + ' ' + contenido).toLowerCase()
  if (texto.includes('deporte')) return <Trophy className="noticia-slug-icon noticia-slug-icon-yellow" />
  if (texto.includes('seguridad')) return <Shield className="noticia-slug-icon noticia-slug-icon-blue" />
  if (texto.includes('educación')) return <GraduationCap className="noticia-slug-icon noticia-slug-icon-green" />
  if (texto.includes('ambiente')) return <Leaf className="noticia-slug-icon noticia-slug-icon-emerald" />
  if (texto.includes('gobierno')) return <Building2 className="noticia-slug-icon noticia-slug-icon-purple" />
  if (texto.includes('mujer')) return <Heart className="noticia-slug-icon noticia-slug-icon-pink" />
  return <Newspaper className="noticia-slug-icon noticia-slug-icon-blue" />
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const noticia = noticias.find(n => generateSlug(n.titulo) === slug)
  if (!noticia) return { title: 'Noticia no encontrada' }
  return { 
    title: noticia.titulo, 
    description: noticia.resumen 
  }
}

export async function generateStaticParams() {
  return noticias.map((noticia) => ({ 
    slug: generateSlug(noticia.titulo) 
  }))
}

export default async function NoticiaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const noticia = noticias.find(n => generateSlug(n.titulo) === slug)

  if (!noticia) notFound()

  const [imagenPrincipal, ...imagenesSecundarias] = noticia.imagenes || []
  const comunicado = extractComunicado(noticia.contenido_completo)
  const icono = getNoticiaIcon(noticia.titulo, noticia.contenido_completo)
  const todasLasImagenes = [imagenPrincipal, ...imagenesSecundarias].filter(Boolean)

  const noticiasRelacionadas = noticias
    .filter(n => n.titulo !== noticia.titulo)
    .filter(n => n.fecha === noticia.fecha)
    .slice(0, 3)

  return (
    <div className="noticia-slug-page-wrapper">
      <header className="noticia-slug-header">
        <div className="noticia-slug-header-container">
          <Link href="/" className="noticia-slug-logo">
            <Newspaper className="noticia-slug-icon" /> Puebla Noticias
          </Link>
          <nav className="noticia-slug-nav hidden md-flex">
            <Link href="/" className="noticia-slug-nav-link">Inicio</Link>
            <Link href="/Noticias" className="noticia-slug-nav-link">Noticias</Link>
          </nav>
        </div>
      </header>

      <main className="noticia-slug-main">
        <div className="noticia-slug-content-max">
          <Link href="/Noticias" className="noticia-slug-back-btn">
            <ArrowLeft className="noticia-slug-back-icon" />
            Volver a noticias
          </Link>

          <div className="noticia-slug-intro">
            <div className="noticia-slug-badge-row">
              {icono}
              <span className="noticia-slug-badge">
                {comunicado || 'Comunicado Oficial'}
              </span>
            </div>
            <h1 className="noticia-slug-title">
              {noticia.titulo}
            </h1>
            <div className="noticia-slug-meta-row">
              <div className="noticia-slug-date">
                <Calendar className="noticia-slug-date-icon" /> <span>{noticia.fecha}</span>
              </div>
              <div className="noticia-slug-actions">
                <button className="noticia-slug-share-btn">
                  <Share2 className="noticia-slug-share-icon" /> Compartir
                </button>
              </div>
            </div>
          </div>

          {imagenPrincipal && (
            <div className="noticia-slug-hero-image-container">
              <div className="noticia-slug-hero-image-aspect">
                <Image 
                  src={imagenPrincipal} 
                  alt={noticia.titulo} 
                  fill 
                  className="noticia-slug-image" 
                  priority 
                />
              </div>
            </div>
          )}

          <div className="noticia-slug-grid">
            <div className="noticia-slug-body-col">
              <article className="noticia-slug-article">
                <div className="noticia-slug-prose">
                  {noticia.contenido_completo.split('\n\n').map((parrafo, index) => (
                    <p key={index} className="noticia-slug-paragraph">
                      {parrafo}
                    </p>
                  ))}
                </div>
                <div className="noticia-slug-source-link-box">
                  <a 
                    href={noticia.enlace} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="noticia-slug-source-link"
                  >
                    Ver fuente original <ExternalLink className="noticia-slug-source-icon" />
                  </a>
                </div>
              </article>
            </div>

            <div className="noticia-slug-sidebar">
              {imagenesSecundarias.length > 0 && (
                <GaleriaImagenes 
                  imagenes={todasLasImagenes} 
                  titulo={noticia.titulo}
                />
              )}

              <div className="noticia-slug-summary-card">
                <h3 className="noticia-slug-summary-title">
                  <Target className="noticia-slug-summary-icon" /> Resumen
                </h3>
                <p className="noticia-slug-summary-text"> {noticia.resumen} </p>
                <div className="noticia-slug-summary-footer">
                  <p className="noticia-slug-official-text">
                    <ChevronRight className="noticia-slug-official-icon" />
                    {comunicado || 'Comunicado oficial del Gobierno de Puebla'}
                  </p>
                </div>
              </div>

              {noticiasRelacionadas.length > 0 && (
                <div className="noticia-slug-related-box">
                  <h3 className="noticia-slug-related-title">Relacionadas</h3>
                  <div className="noticia-slug-related-list">
                    {noticiasRelacionadas.map((relacionada, index) => (
                      <div key={index} className="noticia-slug-related-item">
                        <Link 
                          href={`/Noticias/${generateSlug(relacionada.titulo)}`} 
                          className="noticia-slug-related-link"
                        >
                          <ChevronRight className="noticia-slug-related-icon" />
                          <span>{relacionada.titulo}</span>
                        </Link>
                        <p className="noticia-slug-related-date">
                          <Calendar className="noticia-slug-related-date-icon" /> {relacionada.fecha}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <footer className="noticia-slug-footer">
        <div className="noticia-slug-footer-container">
          <div className="noticia-slug-footer-grid">
            <div className="noticia-slug-footer-info">
              <h4 className="noticia-slug-footer-title">
                <Newspaper className="noticia-slug-footer-title-icon" /> Puebla Noticias
              </h4>
              <p className="noticia-slug-footer-description"> 
                Sala de prensa oficial con toda la información gubernamental del Estado de Puebla. 
              </p>
            </div>
            <div className="noticia-slug-footer-links">
              <h4 className="noticia-slug-footer-heading">Gobierno</h4>
              <ul className="noticia-slug-footer-ul">
                <li><Link href="#" className="noticia-slug-footer-link">Puebla.gob.mx</Link></li>
                <li><Link href="#" className="noticia-slug-footer-link">Ventanilla Digital</Link></li>
              </ul>
            </div>
            <div className="noticia-slug-footer-social">
              <h4 className="noticia-slug-footer-heading">Síguenos</h4>
              <div className="noticia-slug-social-icons">
                <Link href="#" className="noticia-slug-social-link">
                  <Twitter className="noticia-slug-social-icon" />
                </Link>
                <Link href="#" className="noticia-slug-social-link">
                  <Facebook className="noticia-slug-social-icon" />
                </Link>
                <Link href="#" className="noticia-slug-social-link">
                  <Instagram className="noticia-slug-social-icon" />
                </Link>
              </div>
            </div>
          </div>
          <div className="noticia-slug-footer-bottom">
            © 2026 Puebla Noticias. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}