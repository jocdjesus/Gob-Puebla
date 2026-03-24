//components/apoyo-ciudadano/map-selector.tsx
"use client"

import { useState, useCallback } from "react"
import { MapPin, Navigation, Loader2 } from "lucide-react"

interface Coordinates {
  lat: number
  lng: number
}

interface MapSelectorProps {
  value: string
  onChange: (value: string) => void
  coordinates: Coordinates | undefined
  onCoordinatesChange: (coords: Coordinates | undefined) => void
  error?: string
}

export function MapSelector({
  value,
  onChange,
  coordinates,
  onCoordinatesChange,
  error,
}: MapSelectorProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [geoError, setGeoError] = useState<string | null>(null)

  const detectLocation = useCallback(() => {
    if (!navigator.geolocation) {
      setGeoError("Tu navegador no soporta geolocalizacion")
      return
    }

    setIsLoading(true)
    setGeoError(null)

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords
        onCoordinatesChange({ lat: latitude, lng: longitude })

        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`,
            {
              headers: {
                "Accept-Language": "es",
              },
            }
          )
          const data = await response.json()
          if (data.display_name) {
            onChange(data.display_name)
          } else {
            onChange(`${latitude.toFixed(6)}, ${longitude.toFixed(6)}`)
          }
        } catch {
          onChange(`${latitude.toFixed(6)}, ${longitude.toFixed(6)}`)
        }

        setIsLoading(false)
      },
      (err) => {
        setIsLoading(false)
        switch (err.code) {
          case err.PERMISSION_DENIED:
            setGeoError("Permiso de ubicacion denegado")
            break
          case err.POSITION_UNAVAILABLE:
            setGeoError("Ubicacion no disponible")
            break
          case err.TIMEOUT:
            setGeoError("Tiempo de espera agotado")
            break
          default:
            setGeoError("Error al obtener ubicacion")
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    )
  }, [onChange, onCoordinatesChange])

  const inputId = "location"
  const errorId = "location-error"
  const hintId = "location-hint"

  return (
    <div className="apoyo-ciudadano-map-container">
      <label htmlFor={inputId} className="apoyo-ciudadano-field-label">
        Ubicacion del Incidente <span className="apoyo-ciudadano-field-label-required">*</span>
      </label>

      <div className="apoyo-ciudadano-map-input-group">
        <div className="apoyo-ciudadano-map-input">
          <MapPin className="apoyo-ciudadano-map-input-icon" aria-hidden="true" />
          <input
            id={inputId}
            type="text"
            placeholder="Direccion, colonia, municipio..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={`apoyo-ciudadano-map-input-field ${error || geoError ? "error" : ""}`}
            aria-describedby={`${error || geoError ? errorId : ""} ${hintId}`.trim() || undefined}
            aria-invalid={!!error || !!geoError}
          />
        </div>
        <button
          type="button"
          onClick={detectLocation}
          disabled={isLoading}
          className="apoyo-ciudadano-map-button"
          aria-label="Detectar mi ubicacion actual"
        >
          {isLoading ? (
            <Loader2 className="apoyo-ciudadano-map-button-icon apoyo-ciudadano-spinner" aria-hidden="true" />
          ) : (
            <Navigation className="apoyo-ciudadano-map-button-icon" aria-hidden="true" />
          )}
          <span className="apoyo-ciudadano-map-button-text">Detectar</span>
        </button>
      </div>

      {(error || geoError) && (
        <p id={errorId} className="apoyo-ciudadano-field-error" role="alert">
          {error || geoError}
        </p>
      )}

      {coordinates && (
        <div className="apoyo-ciudadano-map-preview">
          <div className="apoyo-ciudadano-map-frame">
            <iframe
              title="Mapa de ubicacion del incidente"
              className="apoyo-ciudadano-map-iframe"
              loading="lazy"
              src={`https://www.openstreetmap.org/export/embed.html?bbox=${coordinates.lng - 0.01}%2C${coordinates.lat - 0.01}%2C${coordinates.lng + 0.01}%2C${coordinates.lat + 0.01}&layer=mapnik&marker=${coordinates.lat}%2C${coordinates.lng}`}
            />
          </div>
          <div className="apoyo-ciudadano-map-coords">
            <MapPin aria-hidden="true" />
            <span>
              {coordinates.lat.toFixed(6)}, {coordinates.lng.toFixed(6)}
            </span>
          </div>
        </div>
      )}

      <p id={hintId} className="apoyo-ciudadano-map-hint">
        Puedes escribir la direccion manualmente o usar el boton para detectar tu ubicacion actual
      </p>
    </div>
  )
}