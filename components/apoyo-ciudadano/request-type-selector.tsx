//components/apoyo-ciudadano/request-type-selector.tsx
"use client"

import { UserSearch, HandHelping, Scale } from "lucide-react"
import { requestTypes } from "@/lib/apoyo-ciudadano/types"

interface RequestTypeSelectorProps {
  value: string | undefined
  onChange: (value: string) => void
  error?: string
}

const iconMap = {
  UserSearch: UserSearch,
  HelpingHand: HandHelping,
  Scale: Scale,
}

export function RequestTypeSelector({ value, onChange, error }: RequestTypeSelectorProps) {
  return (
    <div className="apoyo-ciudadano-field-group">
      <label className="apoyo-ciudadano-field-label">
        Tipo de Solicitud <span className="apoyo-ciudadano-field-label-required">*</span>
      </label>
      <div className="apoyo-ciudadano-request-grid">
        {requestTypes.map((type) => {
          const Icon = iconMap[type.icon as keyof typeof iconMap]
          const isSelected = value === type.id

          return (
            <button
              key={type.id}
              type="button"
              onClick={() => onChange(type.id)}
              className={`apoyo-ciudadano-request-card ${isSelected ? "selected" : ""}`}
              aria-pressed={isSelected}
            >
              <div className={`apoyo-ciudadano-request-icon ${isSelected ? "selected" : ""}`}>
                <Icon aria-hidden="true" />
              </div>
              <div>
                <p className="apoyo-ciudadano-request-title">{type.label}</p>
                <p className="apoyo-ciudadano-request-description">{type.description}</p>
              </div>
            </button>
          )
        })}
      </div>
      {error && <p className="apoyo-ciudadano-field-error">{error}</p>}
    </div>
  )
}