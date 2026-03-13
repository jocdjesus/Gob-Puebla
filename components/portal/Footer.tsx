//components/portal/Footer.tsx
import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

const footerLinks = {
  tramites: {
    title: 'Trámites y Servicios',
    links: [
      { label: 'Catálogo de Trámites', href: '/tramites' },
      { label: 'Trámites en Línea', href: '/tramites/en-linea' },
      { label: 'Agendar Cita', href: '/citas' },
      { label: 'Pagos en Línea', href: '/pagos' },
      { label: 'Consulta de Estatus', href: '/consulta' },
    ]
  },
  gobierno: {
    title: 'Gobierno',
    links: [
      { label: 'Gobernador', href: '/gobierno/gobernador' },
      { label: 'Secretarías', href: '/gobierno/secretarias' },
      { label: 'Directorio', href: '/gobierno/directorio' },
      { label: 'Organigrama', href: '/gobierno/organigrama' },
      { label: 'Agenda', href: '/gobierno/agenda' },
    ]
  },
  transparencia: {
    title: 'Transparencia',
    links: [
      { label: 'Portal de Transparencia', href: '/transparencia' },
      { label: 'Rendición de Cuentas', href: '/transparencia/rendicion' },
      { label: 'Datos Abiertos', href: '/datos-abiertos' },
      { label: 'Anticorrupción', href: '/anticorrupcion' },
      { label: 'Solicitud de Información', href: '/transparencia/solicitud' },
    ]
  },
  ayuda: {
    title: 'Ayuda',
    links: [
      { label: 'Centro de Ayuda', href: '/ayuda' },
      { label: 'Preguntas Frecuentes', href: '/faq' },
      { label: 'Contacto', href: '/contacto' },
      { label: 'Accesibilidad', href: '/accesibilidad' },
      { label: 'Mapa del Sitio', href: '/mapa-sitio' },
    ]
  }
}

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com/gobiernopuebla', label: 'Facebook' },
  { icon: Twitter, href: 'https://twitter.com/gobiernopuebla', label: 'Twitter' },
  { icon: Instagram, href: 'https://instagram.com/gobiernopuebla', label: 'Instagram' },
  { icon: Youtube, href: 'https://youtube.com/gobiernopuebla', label: 'YouTube' },
]

export function Footer() {
  return (
    <footer className="index-footer-wrapper" role="contentinfo">
      <div className="index-footer-container">
        <div className="index-footer-grid">
          <div className="index-footer-brand-col">
            <Link href="/" className="index-footer-logo-link">
              <div className="index-footer-logo-box">
                <span className="index-footer-logo-p">P</span>
              </div>
              <div>
                <p className="index-footer-brand-title">Gobierno del Estado</p>
                <p className="index-footer-brand-state">de Puebla</p>
              </div>
            </Link>
            
            <address className="index-footer-address">
              <div className="index-footer-contact-item">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" aria-hidden="true" />
                <span>Palacio de Gobierno, 5 Oriente 3, Centro Histórico, Puebla, Pue. C.P. 72000</span>
              </div>
              <div className="index-footer-contact-item">
                <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
                <a href="tel:2222131313" className="index-footer-contact-link">222 213 1313</a>
              </div>
              <div className="index-footer-contact-item">
                <Mail className="w-4 h-4 shrink-0" aria-hidden="true" />
                <a href="mailto:atencion@puebla.gob.mx" className="index-footer-contact-link">atencion@puebla.gob.mx</a>
              </div>
            </address>

            <div className="index-footer-socials">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="index-social-icon-btn"
                    aria-label={`Síguenos en ${social.label}`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {Object.values(footerLinks).map((section) => (
            <nav key={section.title} aria-label={section.title}>
              <h3 className="index-footer-nav-title">{section.title}</h3>
              <ul className="index-footer-nav-list">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="index-footer-nav-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      <div className="index-footer-bottom">
        <div className="index-footer-bottom-inner">
          <p>© {new Date().getFullYear()} Gobierno del Estado de Puebla. Todos los derechos reservados.</p>
          <div className="index-footer-legal-links">
            <Link href="/aviso-privacidad" className="index-footer-legal-link">
              Aviso de Privacidad
            </Link>
            <Link href="/terminos-uso" className="index-footer-legal-link">
              Términos de Uso
            </Link>
            <Link href="/politica-cookies" className="index-footer-legal-link">
              Política de Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}