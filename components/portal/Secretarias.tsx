//components/portal/Secretarias.tsx
'use client'

import { useState } from 'react'
import { ExternalLink, ChevronLeft, ChevronRight, Users } from 'lucide-react'

const secretarias = [
  { id: 1, nombre: 'Secretaría de Movilidad y Transporte', titular: 'Silvia Tanús Osorio', cargo: 'Secretaria', abreviatura: 'smt' },
  { id: 2, nombre: 'Secretaría de las Mujeres', titular: 'Yadira Lira Navarro', cargo: 'Secretaria', abreviatura: 'sm' },
  { id: 3, nombre: 'Secretaría de Medio Ambiente, Desarrollo Sustentable y Ordenamiento Territorial', titular: 'Mayra Lizeth Orellana Caballero', cargo: 'Secretaria', abreviatura: 'smadsot' },
  { id: 4, nombre: 'Secretaría de Agricultura y Desarrollo Rural', titular: 'Ana Laura Altamirano Pérez', cargo: 'Secretaria', abreviatura: 'sadr' },
  { id: 5, nombre: 'Secretaría de Planeación, Finanzas y Administración', titular: 'Daniela Stephanie Pérez Calderón', cargo: 'Secretaria', abreviatura: 'spfa' },
  { id: 6, nombre: 'Secretaría de Desarrollo Turístico', titular: 'Carla López Malo', cargo: 'Secretaria', abreviatura: 'sectur' },
  { id: 7, nombre: 'Secretaría de Deporte y Juventud', titular: 'Gabriela Sánchez Saavedra', cargo: 'Secretaria', abreviatura: 'sedeju' },
  { id: 8, nombre: 'Secretaría de Ciencia, Humanidades, Tecnología e Innovación', titular: 'Miryam Aquino Mena', cargo: 'Secretaria', abreviatura: 'secihti' },
  { id: 9, nombre: 'Secretaría de Arte y Cultura', titular: 'Fritz Glockner Corte', cargo: 'Secretario', abreviatura: 'sayc' },
  { id: 10, nombre: 'Secretaría de Gobernación', titular: 'Samuel Aguilar Pala', cargo: 'Secretario', abreviatura: 'sg' },
  { id: 11, nombre: 'Secretaría de Seguridad Pública', titular: 'Vicealmirante Francisco Sánchez González', cargo: 'Secretario', abreviatura: 'ssp' },
  { id: 12, nombre: 'Secretaría del Bienestar', titular: 'Laura Artemisa García', cargo: 'Secretaria', abreviatura: 'sb' },
  { id: 13, nombre: 'Secretaría de Educación Pública', titular: 'Manuel Viveros Narciso', cargo: 'Secretario', abreviatura: 'sep' },
  { id: 14, nombre: 'Secretaría de Anticorrupción y Buen Gobierno', titular: 'Alejandro Espidio Reyes', cargo: 'Secretario', abreviatura: 'sabg' },
  { id: 15, nombre: 'Secretaría de Salud', titular: 'Justino Joaquín Espidio Camarillo', cargo: 'Secretario', abreviatura: 'ss' },
  { id: 16, nombre: 'Secretaría de Desarrollo Económico y Trabajo', titular: 'Víctor Gerardo Gabriel Chedarui', cargo: 'Secretario', abreviatura: 'sedetra' },
  { id: 17, nombre: 'Secretaría de Infraestructura', titular: 'José Manuel Contreras de los Santos', cargo: 'Secretario', abreviatura: 'si' },
]

const organosAuxiliares = [
  { id: 1, nombre: 'Coordinación General de Gabinete', titular: 'José Luis García Parra', cargo: 'Coordinador General', abreviatura: 'cgg' },
  { id: 2, nombre: 'Consejería Jurídica del Poder Ejecutivo', titular: 'Raúl Pineda Zepeda', cargo: 'Consejero Jurídico', abreviatura: 'cj' },
  { id: 3, nombre: 'Coordinación General de Comunicación y Agenda Digital', titular: 'Claudia Hernández Medina', cargo: 'Coordinadora General', abreviatura: 'cgcad' },
]

export function Secretarias() {
  const [currentPage, setCurrentPage] = useState(0)
  const itemsPerPage = 6
  const totalPages = Math.ceil(secretarias.length / itemsPerPage)
  
  const currentSecretarias = secretarias.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  )

  const getUrl = (abr: string) => `https://${abr.toLowerCase()}.puebla.gob.mx/`

  return (
    <section className="index-sec-section" aria-labelledby="secretarias-title">
      <div className="index-sec-container">
        <div className="index-sec-header">
          <span className="index-sec-badge">Estructura de Gobierno</span>
          <h2 id="secretarias-title" className="index-sec-title">Secretarías del Estado de Puebla</h2>
          <p className="index-sec-subtitle">Conoce a las y los titulares y accede a los portales oficiales de cada dependencia.</p>
        </div>

        <div className="index-sec-grid">
          {currentSecretarias.map((sec) => (
            <article key={sec.id} className="index-sec-card">
              <div className="index-sec-photo-placeholder">
                <div className="index-sec-abreviatura-box">
                  <span className="uppercase">{sec.abreviatura}</span>
                </div>
              </div>
              <div className="index-sec-card-content">
                <p className="index-sec-cargo">{sec.cargo}</p>
                <h3 className="index-sec-titular">{sec.titular}</h3>
                <p className="index-sec-nombre">{sec.nombre}</p>
                <a 
                  href={getUrl(sec.abreviatura)} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="index-sec-link"
                >
                  Ir al sitio oficial
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="index-sec-pagination">
          <button 
            className="index-sec-btn-nav"
            onClick={() => setCurrentPage(p => Math.max(0, p - 1))}
            disabled={currentPage === 0}
            aria-label="Ir a la página anterior"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span style={{ fontSize: '0.875rem', color: '#64748b' }} aria-live="polite">
            Página {currentPage + 1} de {totalPages}
          </span>
          <button 
            className="index-sec-btn-nav"
            onClick={() => setCurrentPage(p => Math.min(totalPages - 1, p + 1))}
            disabled={currentPage === totalPages - 1}
            aria-label="Ir a la página siguiente"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="index-sec-aux-panel">
          <div className="index-sec-aux-header">
            <div className="index-sec-aux-icon">
              <Users className="w-5 h-5" />
            </div>
            <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 700 }}>Órganos Auxiliares del Gobernador</h3>
          </div>
          
          <div className="index-sec-aux-grid">
            {organosAuxiliares.map((organo) => (
              <a 
                key={organo.id} 
                href={getUrl(organo.abreviatura)} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="index-sec-aux-card"
              >
                <div className="index-sec-aux-abreviatura">
                  <span className="uppercase">{organo.abreviatura}</span>
                </div>
                <div style={{ flex: 1 }}>
                  <p className="index-sec-cargo">{organo.cargo}</p>
                  <h4 className="index-sec-titular" style={{ fontSize: '1rem' }}>{organo.titular}</h4>
                  <p className="index-sec-nombre">{organo.nombre}</p>
                </div>
                <ExternalLink className="w-4 h-4 opacity-50" />
              </a>
            ))}
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <a href="https://www.puebla.gob.mx/index.php/gobierno" className="index-btn-rep-outline">
            Ver Directorio General
          </a>
        </div>
      </div>
    </section>
  )
}