//components/apoyo-ciudadano/emergency-exit-button.tsx
"use client"

import { useCallback, useState } from "react"
import { X } from "lucide-react"

const STORAGE_KEY = "apoyo-ciudadano-form-draft"

export function EmergencyExitButton() {
  const [showDialog, setShowDialog] = useState(false)

  const handleExit = useCallback(() => {
    if (typeof window !== "undefined") {
      try {
        localStorage.removeItem(STORAGE_KEY)
      } catch {
        // Silently fail
      }
    }
    window.location.href = "https://www.google.com"
  }, [])

  return (
    <>
      <button
        onClick={() => setShowDialog(true)}
        className="apoyo-ciudadano-emergency-btn"
        aria-label="Salida rapida"
      >
        <X />
      </button>

      {showDialog && (
        <>
          <div className="apoyo-ciudadano-dialog-overlay" onClick={() => setShowDialog(false)} />
          <div className="apoyo-ciudadano-dialog">
            <div className="apoyo-ciudadano-dialog-content">
              <div className="apoyo-ciudadano-dialog-header">
                <h3 className="apoyo-ciudadano-dialog-title">Salida Rapida</h3>
                <p className="apoyo-ciudadano-dialog-description">
                  Esta accion borrara todo el progreso guardado y te redirigira a una pagina segura.
                  ¿Estas seguro de que deseas continuar?
                </p>
              </div>
              <div className="apoyo-ciudadano-dialog-footer">
                <button onClick={() => setShowDialog(false)} className="apoyo-ciudadano-dialog-cancel">
                  Cancelar
                </button>
                <button onClick={handleExit} className="apoyo-ciudadano-dialog-confirm">
                  Salir Ahora
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}