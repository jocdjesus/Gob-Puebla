//components/apoyo-ciudadano/citizen-support-form.tsx
"use client"

import { useState, useCallback } from "react"
import { ChevronLeft, ChevronRight, Send, AlertTriangle } from "lucide-react"
import { StepIndicator } from "./step-indicator"
import { Step1Details } from "./steps/step-1-details"
import { Step2Evidence } from "./steps/step-2-evidence"
import { Step3Contact } from "./steps/step-3-contact"
import { SuccessScreen } from "./success-screen"

const steps = [
  { id: 1, title: "Detalles", description: "Informacion del caso" },
  { id: 2, title: "Evidencia", description: "Ubicacion y fotos" },
  { id: 3, title: "Contacto", description: "Datos de contacto" },
]

const step1Fields = ["requestType", "urgencyLevel", "description", "incidentDate"]
const step2Fields = ["location"]
const step3Fields = ["contactPhone"]

function generateFolio(): string {
  const prefix = "RAC"
  const timestamp = Date.now().toString(36).toUpperCase()
  const random = Math.random().toString(36).substring(2, 6).toUpperCase()
  return `${prefix}-${timestamp}-${random}`
}

export function CitizenSupportForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [folioNumber, setFolioNumber] = useState("")
  const [showConfirmDialog, setShowConfirmDialog] = useState(false)
  const [formData, setFormData] = useState({
    requestType: "",
    urgencyLevel: "",
    description: "",
    particularSigns: "",
    incidentDate: "",
    location: "",
    coordinates: undefined,
    evidence: [],
    contactName: "",
    contactPhone: "",
    contactEmail: "",
    allowContact: true,
    isAnonymous: false,
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateStep = useCallback(async (step: number) => {
    let fieldsToValidate: string[] = []
    const newErrors: Record<string, string> = {}

    switch (step) {
      case 1:
        fieldsToValidate = step1Fields
        if (!formData.requestType) newErrors.requestType = "Selecciona un tipo de solicitud"
        if (!formData.urgencyLevel) newErrors.urgencyLevel = "Selecciona el nivel de urgencia"
        if (!formData.description || formData.description.length < 20) newErrors.description = "La descripcion debe tener al menos 20 caracteres"
        if (!formData.incidentDate) newErrors.incidentDate = "La fecha del incidente es requerida"
        break
      case 2:
        fieldsToValidate = step2Fields
        if (!formData.location || formData.location.length < 5) newErrors.location = "La ubicacion es requerida"
        break
      case 3:
        fieldsToValidate = step3Fields
        if (!formData.contactPhone || formData.contactPhone.length < 10) newErrors.contactPhone = "El telefono debe tener al menos 10 digitos"
        break
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }, [formData])

  const handleNext = useCallback(async () => {
    const isValid = await validateStep(currentStep)
    if (isValid && currentStep < 3) {
      setCurrentStep((prev) => prev + 1)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }, [currentStep, validateStep])

  const handlePrev = useCallback(() => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }, [currentStep])

  const handleSubmit = useCallback(async () => {
    const isValid = await validateStep(3)
    if (!isValid) return
    setShowConfirmDialog(true)
  }, [validateStep])

  const confirmSubmit = useCallback(async () => {
    setShowConfirmDialog(false)
    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 2000))

    const folio = generateFolio()
    setFolioNumber(folio)
    setIsSubmitted(true)
    setIsSubmitting(false)
  }, [])

  const updateField = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[field]
        return newErrors
      })
    }
  }

  if (isSubmitted) {
    return <SuccessScreen folioNumber={folioNumber} />
  }

  return (
    <div className="apoyo-ciudadano-form-container">
      <StepIndicator steps={steps} currentStep={currentStep} />

      <div className="apoyo-ciudadano-form-card">
        <div className="apoyo-ciudadano-card-content">
          <div className="apoyo-ciudadano-form">
            <div className="apoyo-ciudadano-form-step">
              {currentStep === 1 && (
                <Step1Details 
                  form={{
                    watch: (field: string) => formData[field as keyof typeof formData],
                    setValue: updateField,
                    formState: { errors }
                  } as any}
                />
              )}
              {currentStep === 2 && (
                <Step2Evidence 
                  form={{
                    watch: (field: string) => formData[field as keyof typeof formData],
                    setValue: updateField,
                    formState: { errors }
                  } as any}
                />
              )}
              {currentStep === 3 && (
                <Step3Contact 
                  form={{
                    watch: (field: string) => formData[field as keyof typeof formData],
                    setValue: updateField,
                    formState: { errors }
                  } as any}
                />
              )}
            </div>

            <div className="apoyo-ciudadano-form-actions">
              <button
                type="button"
                onClick={handlePrev}
                disabled={currentStep === 1}
                className="apoyo-ciudadano-btn-outline"
              >
                <ChevronLeft className="apoyo-ciudadano-btn-icon" />
                Anterior
              </button>

              {currentStep < 3 ? (
                <button type="button" onClick={handleNext} className="apoyo-ciudadano-btn-primary">
                  Siguiente
                  <ChevronRight className="apoyo-ciudadano-btn-icon" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="apoyo-ciudadano-btn-primary"
                >
                  {isSubmitting ? (
                    <>
                      <span className="apoyo-ciudadano-spinner"></span>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="apoyo-ciudadano-btn-icon" />
                      Enviar Solicitud
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <p className="apoyo-ciudadano-autosave-hint">
        Tus datos se guardan automaticamente. Puedes continuar mas tarde.
      </p>

      {showConfirmDialog && (
        <>
          <div className="apoyo-ciudadano-dialog-overlay" onClick={() => setShowConfirmDialog(false)} />
          <div className="apoyo-ciudadano-dialog">
            <div className="apoyo-ciudadano-dialog-content">
              <div className="apoyo-ciudadano-dialog-header">
                <h3 className="apoyo-ciudadano-dialog-title">
                  <AlertTriangle />
                  Confirmar Envio
                </h3>
                <p className="apoyo-ciudadano-dialog-description">
                  Estas a punto de enviar tu solicitud. Por favor, verifica que toda la
                  informacion proporcionada sea correcta y veridica. Una vez enviada, no
                  podras modificarla.
                </p>
              </div>
              <div className="apoyo-ciudadano-dialog-footer">
                <button onClick={() => setShowConfirmDialog(false)} className="apoyo-ciudadano-dialog-cancel">
                  Revisar
                </button>
                <button onClick={confirmSubmit} className="apoyo-ciudadano-dialog-confirm">
                  Confirmar y Enviar
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}