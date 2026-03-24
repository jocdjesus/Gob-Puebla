//components/apoyo-ciudadano/steps/step-2-evidence.tsx
"use client"

import { UseFormReturn } from "react-hook-form"
import { FormData } from "@/lib/apoyo-ciudadano/types"
import { UploadZone } from "../upload-zone"
import { MapSelector } from "../map-selector"

interface Step2Props {
  form: UseFormReturn<FormData>
}

export function Step2Evidence({ form }: Step2Props) {
  return (
    <div className="apoyo-ciudadano-form-fields">
      <MapSelector
        value={form.watch("location")}
        onChange={(value) => form.setValue("location", value)}
        coordinates={form.watch("coordinates")}
        onCoordinatesChange={(coords) => form.setValue("coordinates", coords)}
        error={form.formState.errors.location?.message}
      />

      <UploadZone
        value={form.watch("evidence") || []}
        onChange={(files) => form.setValue("evidence", files)}
        maxFiles={5}
      />
    </div>
  )
}