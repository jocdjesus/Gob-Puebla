//lib/apoyo-ciudadano/types.ts
export const requestTypes = [
  {
    id: "persona-no-localizada",
    label: "Persona No Localizada",
    description: "Reportar una persona desaparecida o sin contacto",
    icon: "UserSearch",
  },
  {
    id: "apoyo-comunitario",
    label: "Apoyo Comunitario Urgente",
    description: "Solicitar ayuda para una emergencia comunitaria",
    icon: "HelpingHand",
  },
  {
    id: "denuncia",
    label: "Solicitud de Justicia / Denuncia",
    description: "Reportar una injusticia o situación irregular",
    icon: "Scale",
  },
] as const

export const urgencyLevels = [
  { id: "critico", label: "Critico", color: "bg-red-500", textColor: "text-red-600" },
  { id: "alto", label: "Alto", color: "bg-orange-500", textColor: "text-orange-600" },
  { id: "medio", label: "Medio", color: "bg-yellow-500", textColor: "text-yellow-600" },
] as const

export interface FormData {
  requestType?: string
  urgencyLevel?: string
  description: string
  particularSigns?: string
  incidentDate: string
  location: string
  coordinates?: { lat: number; lng: number }
  evidence?: string[]
  contactName: string
  contactPhone: string
  contactEmail?: string
  allowContact: boolean
  isAnonymous: boolean
}