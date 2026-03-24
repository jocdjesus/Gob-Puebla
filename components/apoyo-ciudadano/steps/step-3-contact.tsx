//components/apoyo-ciudadano/steps/step-3-contact.tsx
"use client"

import { UseFormReturn } from "react-hook-form"
import { FormData } from "@/lib/apoyo-ciudadano/types"
import { Info, ShieldCheck } from "lucide-react"

interface Step3Props {
  form: UseFormReturn<FormData>
}

export function Step3Contact({ form }: Step3Props) {
  const isAnonymous = form.watch("isAnonymous")

  return (
    <div className="apoyo-ciudadano-form-fields">
      <div className="apoyo-ciudadano-alert" role="status">
        <div className="apoyo-ciudadano-alert-icon" aria-hidden="true">
          <ShieldCheck />
        </div>
        <div className="apoyo-ciudadano-alert-content">
          Tu informacion de contacto solo sera utilizada para dar seguimiento a tu caso.
          Nunca sera compartida con terceros.
        </div>
      </div>

      <div className="apoyo-ciudadano-checkbox-item">
        <div className="apoyo-ciudadano-checkbox">
          <input
            id="isAnonymous"
            type="checkbox"
            checked={form.watch("isAnonymous")}
            onChange={(e) => form.setValue("isAnonymous", e.target.checked)}
            aria-describedby="isAnonymous-description"
          />
        </div>
        <div>
          <label htmlFor="isAnonymous" className="apoyo-ciudadano-checkbox-label">
            Deseo mantener mi identidad anonima
          </label>
          <p id="isAnonymous-description" className="apoyo-ciudadano-checkbox-description">
            Aun asi necesitamos un medio de contacto para informarte sobre el seguimiento
          </p>
        </div>
      </div>

      {!isAnonymous && (
        <div className="apoyo-ciudadano-field-group">
          <label htmlFor="contactName" className="apoyo-ciudadano-field-label">
            Nombre Completo <span className="apoyo-ciudadano-field-label-required">*</span>
          </label>
          <input
            id="contactName"
            type="text"
            placeholder="Tu nombre completo"
            className={`apoyo-ciudadano-input ${form.formState.errors.contactName ? "error" : ""}`}
            value={form.watch("contactName")}
            onChange={(e) => form.setValue("contactName", e.target.value)}
            aria-describedby={form.formState.errors.contactName ? "contactName-error" : undefined}
            aria-invalid={!!form.formState.errors.contactName}
          />
          {form.formState.errors.contactName && (
            <p id="contactName-error" className="apoyo-ciudadano-field-error" role="alert">
              {form.formState.errors.contactName.message}
            </p>
          )}
        </div>
      )}

      <div className="apoyo-ciudadano-field-group">
        <label htmlFor="contactPhone" className="apoyo-ciudadano-field-label">
          Telefono de Contacto <span className="apoyo-ciudadano-field-label-required">*</span>
        </label>
        <input
          id="contactPhone"
          type="tel"
          placeholder="Ej: 55 1234 5678"
          className={`apoyo-ciudadano-input ${form.formState.errors.contactPhone ? "error" : ""}`}
          value={form.watch("contactPhone")}
          onChange={(e) => form.setValue("contactPhone", e.target.value)}
          aria-describedby={form.formState.errors.contactPhone ? "contactPhone-error" : "contactPhone-hint"}
          aria-invalid={!!form.formState.errors.contactPhone}
        />
        {form.formState.errors.contactPhone && (
          <p id="contactPhone-error" className="apoyo-ciudadano-field-error" role="alert">
            {form.formState.errors.contactPhone.message}
          </p>
        )}
      </div>

      <div className="apoyo-ciudadano-field-group">
        <label htmlFor="contactEmail" className="apoyo-ciudadano-field-label">
          Correo Electronico (Opcional)
        </label>
        <input
          id="contactEmail"
          type="email"
          placeholder="tu@email.com"
          className={`apoyo-ciudadano-input ${form.formState.errors.contactEmail ? "error" : ""}`}
          value={form.watch("contactEmail")}
          onChange={(e) => form.setValue("contactEmail", e.target.value)}
          aria-describedby={form.formState.errors.contactEmail ? "contactEmail-error" : undefined}
          aria-invalid={!!form.formState.errors.contactEmail}
        />
        {form.formState.errors.contactEmail && (
          <p id="contactEmail-error" className="apoyo-ciudadano-field-error" role="alert">
            {form.formState.errors.contactEmail.message}
          </p>
        )}
      </div>

      <div className="apoyo-ciudadano-checkbox-item">
        <div className="apoyo-ciudadano-checkbox">
          <input
            id="allowContact"
            type="checkbox"
            checked={form.watch("allowContact")}
            onChange={(e) => form.setValue("allowContact", e.target.checked)}
            aria-describedby="allowContact-description"
          />
        </div>
        <div>
          <label htmlFor="allowContact" className="apoyo-ciudadano-checkbox-label">
            Autorizo ser contactado para dar seguimiento al caso
          </label>
          <p id="allowContact-description" className="apoyo-ciudadano-checkbox-description">
            Podemos llamarte o enviarte mensajes para actualizarte sobre el estado de tu solicitud
          </p>
        </div>
      </div>

      <div className="apoyo-ciudadano-alert" role="alert">
        <div className="apoyo-ciudadano-alert-icon" aria-hidden="true">
          <Info />
        </div>
        <div className="apoyo-ciudadano-alert-content">
          Al enviar este formulario, confirmas que la informacion proporcionada es verdadera
          y entiendes que proporcionar informacion falsa puede tener consecuencias legales.
        </div>
      </div>
    </div>
  )
}