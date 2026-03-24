//components/apoyo-ciudadano/urgency-selector.tsx
"use client"

import { urgencyLevels } from "@/lib/apoyo-ciudadano/types"

interface UrgencySelectorProps {
  value: string | undefined
  onChange: (value: string) => void
  error?: string
}

export function UrgencySelector({ value, onChange, error }: UrgencySelectorProps) {
  return (
    <div className="apoyo-ciudadano-field-group">
      <label className="apoyo-ciudadano-field-label">
        Nivel de Urgencia <span className="apoyo-ciudadano-field-label-required">*</span>
      </label>
      <div className="apoyo-ciudadano-urgency-group">
        {urgencyLevels.map((level) => {
          const isSelected = value === level.id

          return (
            <button
              key={level.id}
              type="button"
              onClick={() => onChange(level.id)}
              className={`apoyo-ciudadano-urgency-btn ${isSelected ? "selected" : ""}`}
              aria-pressed={isSelected}
            >
              <span className={`apoyo-ciudadano-urgency-dot ${level.id}`} aria-hidden="true" />
              <span className={isSelected ? `apoyo-ciudadano-urgency-text selected-${level.id}` : "apoyo-ciudadano-urgency-text"}>
                {level.label}
              </span>
            </button>
          )
        })}
      </div>
      {error && <p className="apoyo-ciudadano-field-error">{error}</p>}
    </div>
  )
}