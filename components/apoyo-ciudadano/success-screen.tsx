//components/apoyo-ciudadano/success-screen.tsx
"use client"

import { CheckCircle, Phone, Mail, Clock, FileText } from "lucide-react"

interface SuccessScreenProps {
  folioNumber: string
}

export function SuccessScreen({ folioNumber }: SuccessScreenProps) {
  return (
    <div className="apoyo-ciudadano-success-container">
      <div className="apoyo-ciudadano-success-content">
        <div className="apoyo-ciudadano-success-icon">
          <div className="apoyo-ciudadano-success-icon-inner">
            <CheckCircle aria-hidden="true" />
          </div>
        </div>

        <div>
          <h2 className="apoyo-ciudadano-success-title">
            Tu solicitud ha sido recibida
          </h2>
          <p className="apoyo-ciudadano-success-message">
            Hemos registrado tu caso y un equipo especializado lo revisara a la brevedad.
            Tu seguridad es nuestra prioridad.
          </p>
        </div>

        <div className="apoyo-ciudadano-folio-card">
          <div className="apoyo-ciudadano-folio-content">
            <div className="apoyo-ciudadano-folio-label">
              <FileText />
              <span>Numero de Folio</span>
            </div>
            <p className="apoyo-ciudadano-folio-number">
              {folioNumber}
            </p>
            <p className="apoyo-ciudadano-folio-hint">
              Guarda este numero para dar seguimiento a tu caso
            </p>
          </div>
        </div>

        <div className="apoyo-ciudadano-steps-card">
          <h3 className="apoyo-ciudadano-steps-title">Proximos pasos:</h3>
          <ul className="apoyo-ciudadano-steps-list">
            <li>
              <Clock />
              <span>Revisaremos tu caso en las proximas 24-48 horas</span>
            </li>
            <li>
              <Phone />
              <span>Te contactaremos al numero proporcionado</span>
            </li>
            <li>
              <Mail />
              <span>Recibiras actualizaciones por correo (si proporcionaste uno)</span>
            </li>
          </ul>
        </div>

        <div className="apoyo-ciudadano-success-actions">
          <a href="/apoyo-ciudadano/nueva-solicitud" className="apoyo-ciudadano-btn-outline-large">
            Crear otra solicitud
          </a>
          <a href="/" className="apoyo-ciudadano-btn-primary-large">
            Volver al inicio
          </a>
        </div>

        <p className="apoyo-ciudadano-emergency-text">
          Si tienes una emergencia inmediata, llama al <strong>911</strong>
        </p>
      </div>
    </div>
  )
}