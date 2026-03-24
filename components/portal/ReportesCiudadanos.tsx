//components/portal/ReportesCiudadanos.tsx
'use client'

import { useState } from 'react'
import { 
  AlertTriangle, 
  Lightbulb, 
  Trash2, 
  Construction, 
  ShieldAlert, 
  TreePine,
  Droplets,
  Bus,
  ArrowRight,
  CheckCircle2,
  Clock,
  Users,
  HeartHandshake,
  PlusCircle
} from 'lucide-react'

const categorias = [
  { icon: AlertTriangle, label: 'Baches y Vialidades', color: '#fee2e2', textColor: '#b91c1c' },
  { icon: Lightbulb, label: 'Luminarias', color: '#fef9c3', textColor: '#a16207' },
  { icon: Trash2, label: 'Limpieza Urbana', color: '#dcfce7', textColor: '#15803d' },
  { icon: Construction, label: 'Obras Públicas', color: '#ffedd5', textColor: '#c2410c' },
  { icon: ShieldAlert, label: 'Seguridad', color: '#dbeafe', textColor: '#1d4ed8' },
  { icon: TreePine, label: 'Parques y Jardines', color: '#ecfdf5', textColor: '#047857' },
  { icon: Droplets, label: 'Agua y Drenaje', color: '#cffafe', textColor: '#0e7490' },
  { icon: Bus, label: 'Transporte', color: '#f3e8ff', textColor: '#7e22ce' },
]

const estadisticas = [
  { value: '15,847', label: 'Reportes este mes', icon: Users },
  { value: '89%', label: 'Tasa de resolución', icon: CheckCircle2 },
  { value: '48 hrs', label: 'Tiempo promedio', icon: Clock },
]

export function ReportesCiudadanos() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)

  return (
    <section className="index-rep-section" aria-labelledby="reportes-title">
      <div className="index-rep-container">
        <div className="index-rep-grid-main">
          <div>
            <span className="index-rep-badge">Participación Ciudadana</span>
            <h2 id="reportes-title" className="index-rep-title">
              Centro de Reportes Ciudadanos
            </h2>
            <p className="index-rep-description">
              Reporta problemas en tu comunidad y da seguimiento a su solución. Tu voz es importante para mejorar Puebla.
            </p>

            <div className="index-rep-stats-grid">
              {estadisticas.map((stat) => {
                const Icon = stat.icon
                return (
                  <div key={stat.label} className="index-rep-stat-card">
                    <Icon className="index-rep-stat-icon" aria-hidden="true" />
                    <p className="index-rep-stat-value">{stat.value}</p>
                    <p className="index-rep-stat-label">{stat.label}</p>
                  </div>
                )
              })}
            </div>

            <div className="index-rep-support-banner">
              <div className="index-rep-support-content">
                <div className="index-rep-support-icon-wrapper">
                  <HeartHandshake className="w-6 h-6 text-rose-600" />
                </div>
                <div>
                  <h4 className="index-rep-support-title">Red de Apoyo Ciudadano</h4>
                  <p className="index-rep-support-text">Reporte de personas desaparecidas, ayuda comunitaria urgente, justicia para quienes no tienen voz y acción inmediata donde otros no llegan.</p>
                </div>
              </div>
              <a href="/apoyo-ciudadano/nueva-solicitud" className="index-btn-support">
                <PlusCircle className="w-4 h-4" style={{ marginRight: '0.5rem' }} />
                Crear Solicitud
              </a>
            </div>

            <div className="index-rep-actions">
              <a href="/reportes/nuevo" className="index-btn-rep-primary">
                Crear Nuevo Reporte
                <ArrowRight className="w-4 h-4" style={{ marginLeft: '0.5rem' }} />
              </a>
              <a href="/reportes/consultar" className="index-btn-rep-outline">
                Consultar Mi Reporte
              </a>
            </div>
          </div>

          <div className="index-rep-categories-panel">
            <h3 className="index-rep-cat-title">Categorías de Reporte</h3>
            <div className="index-rep-cat-grid">
              {categorias.map((cat) => {
                const Icon = cat.icon
                const isHovered = hoveredCategory === cat.label
                return (
                  <a
                    key={cat.label}
                    href={`/reportes/nuevo?categoria=${encodeURIComponent(cat.label)}`}
                    className="index-rep-cat-card"
                    style={isHovered ? { transform: 'scale(1.05)' } : {}}
                    onMouseEnter={() => setHoveredCategory(cat.label)}
                    onMouseLeave={() => setHoveredCategory(null)}
                  >
                    <div 
                      className="index-rep-cat-icon-box" 
                      style={{ backgroundColor: cat.color, color: cat.textColor }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="index-rep-cat-label">{cat.label}</span>
                  </a>
                )
              })}
            </div>
            
            <p className="index-rep-cat-footer">
              Selecciona una categoría para iniciar tu reporte o{' '}
              <a href="/reportes" className="index-rep-link-text">
                ver todos los reportes activos
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}