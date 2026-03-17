//components/portal/Gobernador.tsx
import { ExternalLink, Quote } from 'lucide-react'

export function Gobernador() {
  return (
    <section className="index-gob-section" aria-labelledby="gobernador-title">
      <div className="index-gob-container">
        <div className="index-gob-grid">
          <div className="index-gob-photo-wrapper">
            <div className="index-gob-aspect">
              <div className="index-gob-photo-content">
                <div>
                  <div className="index-gob-avatar-placeholder">
                    <span>AAM</span>
                  </div>
                  <p style={{ fontSize: '0.875rem', color: '#94a3b8' }}>Fotografía Institucional</p>
                </div>
              </div>
            </div>
            <div className="index-gob-blur-blue" />
            <div className="index-gob-blur-amber" />
          </div>

          <div className="index-gob-info-wrapper">
            <span className="index-gob-badge">Poder Ejecutivo</span>
            <h2 id="gobernador-title" className="index-gob-name">
              Alejandro Armenta Mier
            </h2>
            <p className="index-gob-role">
              Gobernador Constitucional del Estado de Puebla
            </p>

            <blockquote className="index-gob-quote">
              <Quote className="index-gob-quote-icon" aria-hidden="true" />
              <p className="index-gob-quote-text">
                "Trabajamos cada día para construir un Puebla más justo, próspero y con oportunidades para todas y todos. El compromiso con la ciudadanía es nuestra guía."
              </p>
            </blockquote>

            <p className="index-gob-description">
              Alejandro Armenta Mier asumió el cargo de Gobernador Constitucional del Estado de Puebla 
              comprometido con transformar la entidad a través de políticas públicas enfocadas en el 
              bienestar social, el desarrollo económico sustentable y el fortalecimiento de las instituciones.
            </p>

            <div className="index-gob-actions">
              <a href="/gobierno/gobernador" className="index-btn-white-solid">
                Conocer más sobre el Gobernador
              </a>
              
              <a 
                href="https://puebla.gob.mx" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="index-btn-outline-custom"
              >
                Sitio Web Oficial
                <ExternalLink className="w-4 h-4" style={{ marginLeft: '0.5rem' }} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}