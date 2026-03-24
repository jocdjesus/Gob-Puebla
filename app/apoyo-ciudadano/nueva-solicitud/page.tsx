//app/apoyo-ciudadano/nueva-solicitud/page.tsx
import { Metadata } from "next"
import { TrustHeader } from "@/components/apoyo-ciudadano/trust-header"
import { CitizenSupportForm } from "@/components/apoyo-ciudadano/citizen-support-form"
import { EmergencyExitButton } from "@/components/apoyo-ciudadano/emergency-exit-button"

export const metadata: Metadata = {
  title: "Nueva Solicitud | Red de Apoyo Ciudadano",
  description:
    "Formulario seguro para reportar personas desaparecidas, solicitar apoyo comunitario o denunciar injusticias. Tu informacion esta protegida.",
}

export default function NuevaSolicitudPage() {
  return (
    <div className="apoyo-ciudadano-container">
      <TrustHeader />
      <main>
        <CitizenSupportForm />
      </main>
      <EmergencyExitButton />
    </div>
  )
}