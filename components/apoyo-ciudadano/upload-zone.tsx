//components/apoyo-ciudadano/upload-zone.tsx
"use client"

import { useState, useCallback, useRef } from "react"
import { Upload, X, Image as ImageIcon } from "lucide-react"

interface UploadZoneProps {
  value: string[]
  onChange: (files: string[]) => void
  maxFiles?: number
}

export function UploadZone({ value = [], onChange, maxFiles = 5 }: UploadZoneProps) {
  const [isDragging, setIsDragging] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const uploadId = "evidence-upload"
  const hintId = "upload-hint"

  const handleFiles = useCallback(
    (files: FileList | null) => {
      if (!files) return

      const newFiles: string[] = []
      const remainingSlots = maxFiles - value.length

      Array.from(files)
        .slice(0, remainingSlots)
        .forEach((file) => {
          if (file.type.startsWith("image/")) {
            const reader = new FileReader()
            reader.onload = (e) => {
              const result = e.target?.result as string
              if (result && !value.includes(result)) {
                newFiles.push(result)
                if (newFiles.length === Math.min(files.length, remainingSlots)) {
                  onChange([...value, ...newFiles])
                }
              }
            }
            reader.readAsDataURL(file)
          }
        })
    },
    [value, onChange, maxFiles]
  )

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      setIsDragging(false)
      handleFiles(e.dataTransfer.files)
    },
    [handleFiles]
  )

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }, [])

  const removeFile = useCallback(
    (index: number) => {
      const newFiles = [...value]
      newFiles.splice(index, 1)
      onChange(newFiles)
    },
    [value, onChange]
  )

  return (
    <div className="apoyo-ciudadano-upload-container">
      <label htmlFor={uploadId} className="apoyo-ciudadano-field-label">
        Evidencia / Fotografias (Opcional)
      </label>

      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={() => inputRef.current?.click()}
        className={`apoyo-ciudadano-upload-zone ${isDragging ? "dragging" : ""}`}
        role="button"
        tabIndex={0}
        aria-label="Subir imagenes de evidencia"
        aria-describedby={hintId}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault()
            inputRef.current?.click()
          }
        }}
      >
        <Upload
          className={`apoyo-ciudadano-upload-icon ${isDragging ? "dragging" : ""}`}
          aria-hidden="true"
        />
        <div className="apoyo-ciudadano-upload-text">
          <p className="apoyo-ciudadano-upload-title">
            Arrastra imagenes aqui o haz clic para seleccionar
          </p>
          <p id={hintId} className="apoyo-ciudadano-upload-hint">
            PNG, JPG hasta 10MB ({value.length}/{maxFiles} imagenes)
          </p>
        </div>
        <input
          ref={inputRef}
          id={uploadId}
          type="file"
          accept="image/*"
          multiple
          onChange={(e) => handleFiles(e.target.files)}
          className="apoyo-ciudadano-upload-input"
          aria-label="Seleccionar archivos de imagen"
        />
      </div>

      {value.length > 0 && (
        <div className="apoyo-ciudadano-image-grid" role="list" aria-label="Imagenes subidas">
          {value.map((file, index) => (
            <div key={index} className="apoyo-ciudadano-image-item" role="listitem">
              <img src={file} alt={`Evidencia ${index + 1}`} className="apoyo-ciudadano-image" />
              <button
                type="button"
                className="apoyo-ciudadano-image-delete"
                onClick={(e) => {
                  e.stopPropagation()
                  removeFile(index)
                }}
                aria-label={`Eliminar imagen ${index + 1}`}
              >
                <X className="apoyo-ciudadano-delete-icon" aria-hidden="true" />
              </button>
              <div className="apoyo-ciudadano-image-badge" aria-hidden="true">
                <div className="apoyo-ciudadano-image-badge-inner">
                  <ImageIcon aria-hidden="true" />
                  <span>Imagen {index + 1}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}