//components/apoyo-ciudadano/trust-header.tsx
import { HeartHandshake, Shield } from "lucide-react"

export function TrustHeader() {
  return (
    <header className="apoyo-ciudadano-trust-header">
      <div className="apoyo-ciudadano-header-content">
        <div className="apoyo-ciudadano-header-inner">
          <div className="apoyo-ciudadano-header-icon">
            <HeartHandshake aria-hidden="true" />
          </div>
          <div>
            <h1 className="apoyo-ciudadano-header-title">
              Red de Apoyo Ciudadano
            </h1>
            <p className="apoyo-ciudadano-header-subtitle">
              <Shield aria-hidden="true" />
              Tu informacion esta protegida y sera tratada con confidencialidad
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}