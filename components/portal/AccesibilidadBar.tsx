//components/portal/AccesibilidadBar.tsx
'use client'

import { useState, useEffect } from 'react'
import { Eye, Type, Sun, Moon, X, Settings, HelpCircle, RefreshCw } from 'lucide-react'

export function AccesibilidadBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [fontSize, setFontSize] = useState(100)
  const [highContrast, setHighContrast] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}%`
  }, [fontSize])

  useEffect(() => {
    if (highContrast) {
      document.documentElement.classList.add('high-contrast')
    } else {
      document.documentElement.classList.remove('high-contrast')
    }
  }, [highContrast])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const increaseFontSize = () => {
    if (fontSize < 150) setFontSize(f => f + 10)
  }

  const decreaseFontSize = () => {
    if (fontSize > 80) setFontSize(f => f - 10)
  }

  const resetSettings = () => {
    setFontSize(100)
    setHighContrast(false)
    setDarkMode(false)
  }

  const restartTutorial = () => {
    localStorage.removeItem('hero-tour-completed')
    window.location.reload()
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="index-acc-fab"
        aria-label="Abrir configuración"
        aria-expanded={isOpen}
      >
        <Settings className="w-6 h-6" />
      </button>

      {isOpen && (
        <div 
          className="index-acc-panel"
          role="dialog"
          aria-label="Panel de configuración"
        >
          <div className="index-acc-header">
            <h2 className="index-acc-title">Configuración</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="index-acc-close"
              aria-label="Cerrar panel"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="index-acc-body">
            <div className="index-acc-group">
              <label className="index-acc-label">
                <Type className="w-4 h-4" />
                Tamaño de texto
              </label>
              <div className="index-acc-controls">
                <button
                  className="index-acc-btn-outline"
                  onClick={decreaseFontSize}
                  disabled={fontSize <= 80}
                  aria-label="Reducir tamaño de texto"
                >
                  A-
                </button>
                <span className="index-acc-value-display">
                  {fontSize}%
                </span>
                <button
                  className="index-acc-btn-outline"
                  onClick={increaseFontSize}
                  disabled={fontSize >= 150}
                  aria-label="Aumentar tamaño de texto"
                >
                  A+
                </button>
              </div>
            </div>

            <div className="index-acc-row">
              <label className="index-acc-label">
                <Eye className="w-4 h-4" />
                Alto contraste
              </label>
              <button
                onClick={() => setHighContrast(!highContrast)}
                className={`index-acc-switch ${highContrast ? 'index-acc-switch-on' : 'index-acc-switch-off'}`}
                role="switch"
                aria-checked={highContrast}
                aria-label="Activar alto contraste"
              >
                <span className={`index-acc-thumb ${highContrast ? 'index-acc-thumb-active' : ''}`} />
              </button>
            </div>

            <div className="index-acc-row">
              <label className="index-acc-label">
                {darkMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                Modo oscuro
              </label>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`index-acc-switch ${darkMode ? 'index-acc-switch-on' : 'index-acc-switch-off'}`}
                role="switch"
                aria-checked={darkMode}
                aria-label="Activar modo oscuro"
              >
                <span className={`index-acc-thumb ${darkMode ? 'index-acc-thumb-active' : ''}`} />
              </button>
            </div>

            <div style={{ margin: '1rem 0', borderTop: '1px solid var(--index-border)', paddingTop: '1rem' }}>
              <button
                className="index-acc-reset"
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  gap: '0.5rem',
                  backgroundColor: 'var(--index-primary)',
                  color: 'white',
                  marginBottom: '0.5rem'
                }}
                onClick={restartTutorial}
              >
                <HelpCircle className="w-4 h-4" />
                Volver a ver tutorial
              </button>
              
              <button
                className="index-acc-reset"
                onClick={resetSettings}
              >
                <RefreshCw className="w-3 h-3" />
                Restablecer configuración
              </button>
            </div>
          </div>

          <div className="index-acc-footer">
            <p className="index-acc-compliance">
              Este portal cumple con WCAG 2.1 nivel AA
            </p>
          </div>
        </div>
      )}
    </>
  )
}