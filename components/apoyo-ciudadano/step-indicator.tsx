//components/apoyo-ciudadano/step-indicator.tsx
"use client"

import { Check } from "lucide-react"

interface Step {
  id: number
  title: string
  description: string
}

interface StepIndicatorProps {
  steps: Step[]
  currentStep: number
}

export function StepIndicator({ steps, currentStep }: StepIndicatorProps) {
  return (
    <nav className="apoyo-ciudadano-step-indicator" aria-label="Progreso del formulario">
      <ol className="apoyo-ciudadano-step-list">
        {steps.map((step, index) => {
          const isCompleted = currentStep > step.id
          const isCurrent = currentStep === step.id

          return (
            <li 
              key={step.id} 
              className={`apoyo-ciudadano-step-item ${isCompleted ? "completed" : ""}`}
            >
              <div className="apoyo-ciudadano-step-track">
                <div
                  className={`apoyo-ciudadano-step-number ${isCompleted ? "completed" : ""} ${isCurrent ? "current" : ""}`}
                  aria-current={isCurrent ? "step" : undefined}
                >
                  {isCompleted ? <Check size={16} aria-hidden="true" /> : step.id}
                </div>
                <div className="apoyo-ciudadano-step-label">
                  <p className={`apoyo-ciudadano-step-title ${isCurrent ? "current" : ""} ${isCompleted ? "completed" : ""}`}>
                    {step.title}
                  </p>
                  <p className="apoyo-ciudadano-step-description">
                    {step.description}
                  </p>
                </div>
              </div>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}