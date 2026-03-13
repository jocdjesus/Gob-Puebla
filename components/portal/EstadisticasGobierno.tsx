//components/portal/EstadisticasGobierno.tsx
import { Users, FileText, Building2, MapPin, TrendingUp, CheckCircle } from 'lucide-react'

const estadisticas = [
  {
    icon: Users,
    valor: '6.5M+',
    label: 'Ciudadanos Poblanos',
    descripcion: 'Población del estado',
  },
  {
    icon: FileText,
    valor: '2.3M',
    label: 'Trámites Digitales',
    descripcion: 'Realizados este año',
  },
  {
    icon: Building2,
    valor: '217',
    label: 'Municipios',
    descripcion: 'Conectados al portal',
  },
  {
    icon: MapPin,
    valor: '850+',
    label: 'Oficinas de Atención',
    descripcion: 'En todo el estado',
  },
  {
    icon: TrendingUp,
    valor: '95%',
    label: 'Satisfacción',
    descripcion: 'De los ciudadanos',
  },
  {
    icon: CheckCircle,
    valor: '98%',
    label: 'Disponibilidad',
    descripcion: 'Del portal 24/7',
  },
]

export function EstadisticasGobierno() {
  return (
    <section className="index-stats-section" aria-labelledby="estadisticas-title">
      <div className="index-stats-container">
        <h2 id="estadisticas-title" className="index-sr-only">
          Estadísticas del Gobierno de Puebla
        </h2>
        <div className="index-stats-grid">
          {estadisticas.map((stat) => {
            const Icon = stat.icon
            return (
              <div key={stat.label} className="index-stat-item">
                <div className="index-stat-icon-wrapper">
                  <Icon className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <p className="index-stat-value">
                  {stat.valor}
                </p>
                <p className="index-stat-label">
                  {stat.label}
                </p>
                <p className="index-stat-desc">
                  {stat.descripcion}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}