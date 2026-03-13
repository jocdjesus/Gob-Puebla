//components/portal/ServiciosDestacados.tsx
'use client'

import { 
  FileText, 
  Car, 
  Home, 
  CreditCard, 
  Calendar, 
  UserCheck,
  Briefcase,
  GraduationCap,
  HeartPulse,
  Scale,
  Building,
  TreePine,
  ArrowRight
} from 'lucide-react'

const servicios = [
  {
    id: 1,
    icon: FileText,
    title: 'Actas del Registro Civil',
    description: 'Solicita actas de nacimiento, matrimonio y defunción en línea.',
    href: '/tramites/registro-civil',
    category: 'Documentos',
    popular: true,
  },
  {
    id: 2,
    icon: Car,
    title: 'Licencias y Vehículos',
    description: 'Trámites de licencia de conducir, tenencia y placas vehiculares.',
    href: '/tramites/vehiculos',
    category: 'Movilidad',
    popular: true,
  },
  {
    id: 3,
    icon: Home,
    title: 'Predial y Catastro',
    description: 'Paga tu predial, consulta avalúos y trámites de propiedad.',
    href: '/tramites/predial',
    category: 'Impuestos',
    popular: true,
  },
  {
    id: 4,
    icon: CreditCard,
    title: 'Pagos en Línea',
    description: 'Realiza pagos de servicios gubernamentales de forma segura.',
    href: '/pagos',
    category: 'Finanzas',
    popular: false,
  },
  {
    id: 5,
    icon: Calendar,
    title: 'Agendar Cita',
    description: 'Programa tu cita para trámites presenciales en oficinas.',
    href: '/citas',
    category: 'Servicios',
    popular: true,
  },
  {
    id: 6,
    icon: UserCheck,
    title: 'Constancias y Certificados',
    description: 'Obtén constancias de no antecedentes penales y más.',
    href: '/tramites/constancias',
    category: 'Documentos',
    popular: false,
  },
  {
    id: 7,
    icon: Briefcase,
    title: 'Empleo y Capacitación',
    description: 'Bolsa de trabajo, capacitación laboral y apoyo al empleo.',
    href: '/tramites/empleo',
    category: 'Empleo',
    popular: false,
  },
  {
    id: 8,
    icon: GraduationCap,
    title: 'Becas y Educación',
    description: 'Solicita becas, inscripciones y servicios educativos.',
    href: '/tramites/educacion',
    category: 'Educación',
    popular: true,
  },
  {
    id: 9,
    icon: HeartPulse,
    title: 'Servicios de Salud',
    description: 'Citas médicas, vacunación y programas de salud pública.',
    href: '/tramites/salud',
    category: 'Salud',
    popular: false,
  },
  {
    id: 10,
    icon: Scale,
    title: 'Asesoría Jurídica',
    description: 'Orientación legal gratuita y servicios de justicia.',
    href: '/tramites/juridico',
    category: 'Legal',
    popular: false,
  },
  {
    id: 11,
    icon: Building,
    title: 'Permisos de Construcción',
    description: 'Licencias, permisos y regulación de obras y construcciones.',
    href: '/tramites/construccion',
    category: 'Construcción',
    popular: false,
  },
  {
    id: 12,
    icon: TreePine,
    title: 'Medio Ambiente',
    description: 'Permisos ambientales, reforestación y cuidado ecológico.',
    href: '/tramites/medio-ambiente',
    category: 'Ambiente',
    popular: false,
  },
]

export function ServiciosDestacados() {
  const serviciosPopulares = servicios.filter(s => s.popular)
  const otrosServicios = servicios.filter(s => !s.popular)

  return (
    <section className="index-servicios-section" aria-labelledby="servicios-title">
      <div className="index-servicios-container">
        <div className="index-servicios-header">
          <h2 id="servicios-title" className="index-servicios-title">
            Trámites y Servicios Destacados
          </h2>
          <p className="index-servicios-subtitle">
            Accede a los servicios más solicitados por los ciudadanos poblanos de manera rápida y segura.
          </p>
        </div>

        <div className="index-popular-grid">
          {serviciosPopulares.map((servicio) => {
            const Icon = servicio.icon
            return (
              <a key={servicio.id} href={servicio.href} className="index-popular-card">
                <div className="index-card-header">
                  <div className="index-card-icon-box">
                    <Icon className="index-card-icon" />
                  </div>
                  <div>
                    <span className="index-card-badge">{servicio.category}</span>
                    <h3 className="index-card-title">{servicio.title}</h3>
                    <p className="index-card-desc">{servicio.description}</p>
                  </div>
                </div>
                <ArrowRight className="index-card-arrow" />
              </a>
            )
          })}
        </div>

        <div className="index-more-services-panel">
          <h3 className="index-more-title">Más Servicios Disponibles</h3>
          <div className="index-more-grid">
            {otrosServicios.map((servicio) => {
              const Icon = servicio.icon
              return (
                <a key={servicio.id} href={servicio.href} className="index-more-item">
                  <div className="index-more-icon-box">
                    <Icon className="index-more-icon" />
                  </div>
                  <span className="index-more-label">{servicio.title}</span>
                </a>
              )
            })}
          </div>
        </div>

        <div className="index-cta-container">
          <a href="/tramites" className="index-btn-primary">
            Ver Catálogo Completo de Trámites
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}