//hooks/use-autosave.ts
"use client"

import { useEffect, useCallback } from "react"

const STORAGE_KEY = "apoyo-ciudadano-form-draft"

export function useAutosave(form: any) {
  useEffect(() => {
    if (typeof window === "undefined") return

    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        const parsed = JSON.parse(saved)
        Object.keys(parsed).forEach((key) => {
          const value = parsed[key]
          if (value !== undefined && value !== null && value !== "") {
            form.setValue(key, value, { shouldValidate: false })
          }
        })
      }
    } catch {
      // Silently fail if localStorage is not available
    }
  }, [form])

  // Save form data on change
  useEffect(() => {
    if (typeof window === "undefined") return

    const interval = setInterval(() => {
      try {
        const formValues = form.getValues()
        if (formValues && Object.keys(formValues).length > 0) {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(formValues))
        }
      } catch {
        // Silently fail
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [form])

  const clearSavedData = useCallback(() => {
    if (typeof window === "undefined") return
    try {
      localStorage.removeItem(STORAGE_KEY)
    } catch {
      // Silently fail
    }
  }, [])

  const hasSavedData = useCallback(() => {
    if (typeof window === "undefined") return false
    try {
      return !!localStorage.getItem(STORAGE_KEY)
    } catch {
      return false
    }
  }, [])

  return { clearSavedData, hasSavedData }
}