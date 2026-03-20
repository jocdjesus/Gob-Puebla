'use client'

import { 
  FileText, 
  Car, 
  CreditCard, 
  GraduationCap,
  ArrowRight,
  ClipboardCheck,
  ShieldCheck,
  RefreshCcw,
  BadgePercent,
  UserCog,
  LucideIcon
} from 'lucide-react'

const serviciosData = [
  {
    "id": "1602",
    "nombre": "Pago de Tenencia y Control Vehicular",
    "enlace": "https://ventanilla.puebla.gob.mx/web/inicioWebc.do?opcion=noreg&entidad=&redirige=d2ViL2ZpY2hhQXN1bnRvLmRvP29wY2lvbj0wJmFzYXNfaWRlX2FzdT0xNjAyJnJ1dGE9L3dlYi9hc3VudG9zTWFzVXN1YWxlcy5kbz9vcGNpb249MCFwZXJpb2RvPTA="
  },
  {
    "id": "1898",
    "nombre": "Preinscripción de Educación Básica y Media Superior",
    "enlace": "https://ventanilla.puebla.gob.mx/web/inicioWebc.do?opcion=noreg&entidad=&redirige=d2ViL2ZpY2hhQXN1bnRvLmRvP29wY2lvbj0wJmFzYXNfaWRlX2FzdT0xODk4JnJ1dGE9L3dlYi9hc3VudG9zTWFzVXN1YWxlcy5kbz9vcGNpb249MCFwZXJpb2RvPTA="
  },
  {
    "id": "1697",
    "nombre": "Actas certificadas en línea",
    "enlace": "https://ventanilla.puebla.gob.mx/web/inicioWebc.do?opcion=noreg&entidad=&redirige=d2ViL2ZpY2hhQXN1bnRvLmRvP29wY2lvbj0wJmFzYXNfaWRlX2FzdT0xNjk3JnJ1dGE9L3dlYi9hc3VudG9zTWFzVXN1YWxlcy5kbz9vcGNpb249MCFwZXJpb2RvPTA="
  },
  {
    "id": "1787",
    "nombre": "Constancia de no inhabilitado para el desempeño de un empleo, cargo o comisión en el servicio público",
    "enlace": "https://ventanilla.puebla.gob.mx/web/inicioWebc.do?opcion=noreg&entidad=&redirige=d2ViL2ZpY2hhQXN1bnRvLmRvP29wY2lvbj0wJmFzYXNfaWRlX2FzdT0xNzg3JnJ1dGE9L3dlYi9hc3VudG9zTWFzVXN1YWxlcy5kbz9vcGNpb249MCFwZXJpb2RvPTA="
  },
  {
    "id": "1949",
    "nombre": "Expedición de Licencia para Conducir de automovilista, motociclista o chofer particular",
    "enlace": "https://ventanilla.puebla.gob.mx/web/inicioWebc.do?opcion=noreg&entidad=&redirige=d2ViL2ZpY2hhQXN1bnRvLmRvP29wY2lvbj0wJmFzYXNfaWRlX2FzdT0xOTQ5JnJ1dGE9L3dlYi9hc3VudG9zTWFzVXN1YWxlcy5kbz9vcGNpb249MCFwZXJpb2RvPTA="
  },
  {
    "id": "2348",
    "nombre": "Constancia de no antecedentes penales presencial",
    "enlace": "https://ventanilla.puebla.gob.mx/web/inicioWebc.do?opcion=noreg&entidad=&redirige=d2ViL2ZpY2hhQXN1bnRvLmRvP29wY2lvbj0wJmFzYXNfaWRlX2FzdT0yMzQ4JnJ1dGE9L3dlYi9hc3VudG9zTWFzVXN1YWxlcy5kbz9vcGNpb249MCFwZXJpb2RvPTA="
  },
  {
    "id": "1591",
    "nombre": "Alta de vehículos nuevos de servicio particular",
    "enlace": "https://ventanilla.puebla.gob.mx/web/inicioWebc.do?opcion=noreg&entidad=&redirige=d2ViL2ZpY2hhQXN1bnRvLmRvP29wY2lvbj0wJmFzYXNfaWRlX2FzdT0xNTkxJnJ1dGE9L3dlYi9hc3VudG9zTWFzVXN1YWxlcy5kbz9vcGNpb249MCFwZXJpb2RvPTA="
  },
  {
    "id": "1986",
    "nombre": "Renovación de licencia para conducir de automovilista, motociclista o chofer particular",
    "enlace": "https://ventanilla.puebla.gob.mx/web/inicioWebc.do?opcion=noreg&entidad=&redirige=d2ViL2ZpY2hhQXN1bnRvLmRvP29wY2lvbj0wJmFzYXNfaWRlX2FzdT0xOTg2JnJ1dGE9L3dlYi9hc3VudG9zTWFzVXN1YWxlcy5kbz9vcGNpb249MCFwZXJpb2RvPTA="
  },
  {
    "id": "2057",
    "nombre": "Apoyo del 100% en el pago de la Tenencia",
    "enlace": "https://ventanilla.puebla.gob.mx/web/inicioWebc.do?opcion=noreg&entidad=&redirige=d2ViL2ZpY2hhQXN1bnRvLmRvP29wY2lvbj0wJmFzYXNfaWRlX2FzdT0yMDU3JnJ1dGE9L3dlYi9hc3VudG9zTWFzVXN1YWxlcy5kbz9vcGNpb249MCFwZXJpb2RvPTA="
  },
  {
    "id": "1595",
    "nombre": "Cambio de propietario",
    "enlace": "https://ventanilla.puebla.gob.mx/web/inicioWebc.do?opcion=noreg&entidad=&redirige=d2ViL2ZpY2hhQXN1bnRvLmRvP29wY2lvbj0wJmFzYXNfaWRlX2FzdT0xNTk1JnJ1dGE9L3dlYi9hc3VudG9zTWFzVXN1YWxlcy5kbz9vcGNpb249MCFwZXJpb2RvPTA="
  }
]

const iconMap: Record<string, LucideIcon> = {
  "1602": CreditCard,      // Pago Tenencia
  "1898": GraduationCap,   // Preinscripción
  "1697": FileText,        // Actas
  "1787": ClipboardCheck,  // No inhabilitado
  "1949": Car,             // Licencia
  "2348": ShieldCheck,     // Antecedentes penales
  "1591": Car,             // Alta vehículo
  "1986": RefreshCcw,      // Renovación licencia
  "2057": BadgePercent,    // Apoyo 100%
  "1595": UserCog,         // Cambio propietario
}

export function ServiciosDestacados() {
  return (
    <section className="index-servicios-section" aria-labelledby="servicios-title">
      <div className="index-servicios-container">
        <div className="index-servicios-header">
          <h2 id="servicios-title" className="index-servicios-title">
            Los más Destacados
          </h2>
          <p className="index-servicios-subtitle">
            Accede directamente a los trámites con mayor demanda en el Estado de Puebla.
          </p>
        </div>

        <div className="index-popular-grid">
          {serviciosData.map((servicio) => {
            const Icon = iconMap[servicio.id] || FileText
            return (
              <a 
                key={servicio.id} 
                href={servicio.enlace} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="index-popular-card"
              >
                <div className="index-card-header">
                  <div className="index-card-icon-box">
                    <Icon className="index-card-icon" />
                  </div>
                  <div className="index-card-content">
                    <h3 className="index-card-title">{servicio.nombre}</h3>
                  </div>
                </div>
                <ArrowRight className="index-card-arrow" />
              </a>
            )
          })}
        </div>

        <div className="index-cta-container">
          <a href="https://ventanilladigital.puebla.gob.mx/" className="index-btn-primary">
            Ver Catálogo Completo de Trámites
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}