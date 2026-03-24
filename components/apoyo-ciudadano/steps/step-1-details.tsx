//components/apoyo-ciudadano/steps/step-1-details.tsx
"use client"

import { UseFormReturn } from "react-hook-form"
import { FormData } from "@/lib/apoyo-ciudadano/types"
import { RequestTypeSelector } from "../request-type-selector"
import { UrgencySelector } from "../urgency-selector"

interface Step1Props {
  form: UseFormReturn<FormData>
}

export function Step1Details({ form }: Step1Props) {
  const description = form.watch("description") || ""
  const maxLength = 2000

  return (
    <div className="apoyo-ciudadano-form-fields">
      <div className="apoyo-ciudadano-field-group">
        <RequestTypeSelector
          value={form.watch("requestType")}
          onChange={(value) => form.setValue("requestType", value as any)}
          error={form.formState.errors.requestType?.message}
        />
      </div>

      <div className="apoyo-ciudadano-field-group">
        <UrgencySelector
          value={form.watch("urgencyLevel")}
          onChange={(value) => form.setValue("urgencyLevel", value as any)}
          error={form.formState.errors.urgencyLevel?.message}
        />
      </div>

      <div className="apoyo-ciudadano-field-group">
        <label htmlFor="description" className="apoyo-ciudadano-field-label">
          Descripcion del Caso <span className="apoyo-ciudadano-field-label-required">*</span>
        </label>
        <textarea
          id="description"
          placeholder="Describe la situacion con el mayor detalle posible. Incluye nombres, lugares, fechas y cualquier informacion relevante."
          className={`apoyo-ciudadano-textarea ${form.formState.errors.description ? "error" : ""}`}
          value={description}
          onChange={(e) => form.setValue("description", e.target.value)}
          aria-describedby={form.formState.errors.description ? "description-error" : undefined}
          aria-invalid={!!form.formState.errors.description}
        />
        <div className="apoyo-ciudadano-char-counter">
          {form.formState.errors.description && (
            <span id="description-error" className="apoyo-ciudadano-field-error" role="alert">
              {form.formState.errors.description.message}
            </span>
          )}
          <span>
            {description.length}/{maxLength} caracteres
          </span>
        </div>
      </div>

      <div className="apoyo-ciudadano-field-group">
        <label htmlFor="particularSigns" className="apoyo-ciudadano-field-label">
          Senas Particulares (Opcional)
        </label>
        <p className="apoyo-ciudadano-field-description" id="particularSigns-hint">
          Describe caracteristicas fisicas distintivas, ropa, o cualquier detalle que ayude a identificar
        </p>
        <textarea
          id="particularSigns"
          placeholder="Ejemplo: Cicatriz en la frente, tatuaje en el brazo derecho, vestia camiseta roja..."
          className="apoyo-ciudadano-textarea"
          value={form.watch("particularSigns")}
          onChange={(e) => form.setValue("particularSigns", e.target.value)}
          aria-describedby="particularSigns-hint"
        />
      </div>

      <div className="apoyo-ciudadano-field-group">
        <label htmlFor="incidentDate" className="apoyo-ciudadano-field-label">
          Fecha del Incidente <span className="apoyo-ciudadano-field-label-required">*</span>
        </label>
        <input
          id="incidentDate"
          type="date"
          className={`apoyo-ciudadano-input ${form.formState.errors.incidentDate ? "error" : ""}`}
          value={form.watch("incidentDate")}
          onChange={(e) => form.setValue("incidentDate", e.target.value)}
          max={new Date().toISOString().split("T")[0]}
          aria-describedby={form.formState.errors.incidentDate ? "incidentDate-error" : undefined}
          aria-invalid={!!form.formState.errors.incidentDate}
        />
        {form.formState.errors.incidentDate && (
          <p id="incidentDate-error" className="apoyo-ciudadano-field-error" role="alert">
            {form.formState.errors.incidentDate.message}
          </p>
        )}
      </div>
    </div>
  )
}