//components/portal/Secretarias.tsx
'use client'

import { useState } from 'react'
import { ExternalLink, ChevronLeft, ChevronRight, Users } from 'lucide-react'

const secretarias = [
  { id: 1, nombre: 'Secretaría de Movilidad y Transporte', titular: 'Silvia Tanús Osorio', cargo: 'Secretaria', abreviatura: 'SMT' },
  { id: 2, nombre: 'Secretaría de las Mujeres', titular: 'Yadira Lira Navarro', cargo: 'Secretaria', abreviatura: 'SM' },
  { id: 3, nombre: 'Secretaría de Medio Ambiente, Desarrollo Sustentable y Ordenamiento Territorial', titular: 'Mayra Lizeth Orellana Caballero', cargo: 'Secretaria', abreviatura: 'SMADSOT' },
  { id: 4, nombre: 'Secretaría de Agricultura y Desarrollo Rural', titular: 'Ana Laura Altamirano Pérez', cargo: 'Secretaria', abreviatura: 'SADR' },
  { id: 5, nombre: 'Secretaría de Planeación, Finanzas y Administración', titular: 'Daniela Stephanie Pérez Calderón', cargo: 'Secretaria', abreviatura: 'SPFA' },
  { id: 6, nombre: 'Secretaría de Desarrollo Turístico', titular: 'Carla López Malo', cargo: 'Secretaria', abreviatura: 'SDT' },
  { id: 7, nombre: 'Secretaría de Deporte y Juventud', titular: 'Gabriela Sánchez Saavedra', cargo: 'Secretaria', abreviatura: 'SDJ' },
  { id: 8, nombre: 'Secretaría de Ciencia, Humanidades, Tecnología e Innovación', titular: 'Miryam Aquino Mena', cargo: 'Secretaria', abreviatura: 'SCHTI' },
  { id: 9, nombre: 'Secretaría de Arte y Cultura', titular: 'Fritz Glockner Corte', cargo: 'Secretario', abreviatura: 'SAC' },
  { id: 10, nombre: 'Secretaría de Gobernación', titular: 'Samuel Aguilar Pala', cargo: 'Secretario', abreviatura: 'SG' },
  { id: 11, nombre: 'Secretaría de Seguridad Pública', titular: 'Vicealmirante Francisco Sánchez González', cargo: 'Secretario', abreviatura: 'SSP' },
  { id: 12, nombre: 'Secretaría del Bienestar', titular: 'Laura Artemisa García', cargo: 'Secretaria', abreviatura: 'SB' },
  { id: 13, nombre: 'Secretaría de Educación Pública', titular: 'Manuel Viveros Narciso', cargo: 'Secretario', abreviatura: 'SEP' },
  { id: 14, nombre: 'Secretaría de Anticorrupción y Buen Gobierno', titular: 'Alejandro Espidio Reyes', cargo: 'Secretario', abreviatura: 'SABG' },
  { id: 15, nombre: 'Secretaría de Salud', titular: 'Justino Joaquín Espidio Camarillo', cargo: 'Secretario', abreviatura: 'SS' },
  { id: 16, nombre: 'Secretaría de Desarrollo Económico y Trabajo', titular: 'Víctor Gerardo Gabriel Chedarui', cargo: 'Secretario', abreviatura: 'SDET' },
  { id: 17, nombre: 'Secretaría de Infraestructura', titular: 'José Manuel Contreras de los Santos', cargo: 'Secretario', abreviatura: 'SI' },
]

const organosAuxiliares = [
  { id: 1, nombre: 'Coordinación General de Gabinete', titular: 'Gabriel Biestro Medinilla', cargo: 'Coordinador General', abreviatura: 'CGG' },
  { id: 2, nombre: 'Consejería Jurídica del Poder Ejecutivo', titular: 'Jesús Ángel Carretero Domínguez', cargo: 'Consejero Jurídico', abreviatura: 'CJ' },
  { id: 3, nombre: 'Coordinación General de Comunicación y Agenda Digital', titular: 'Fátima Henestrosa Dávila', cargo: 'Coordinadora General', abreviatura: 'CGCAD' },
]

export function Secretarias() {
  const [currentPage, setCurrentPage] = useState(0)
  const itemsPerPage = 6
  const totalPages = Math.ceil(secretarias.length / itemsPerPage)
  
  const currentSecretarias = secretarias.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  )

  return (
    <section className="index-sec-section" aria-labelledby="secretarias-title">
      <div className="index-sec-container">
        <div className="index-sec-header">
          <span className="index-sec-badge">Estructura de Gobierno</span>
          <h2 id="secretarias-title" className="index-sec-title">Secretarías del Estado de Puebla</h2>
          <p className="index-sec-subtitle">Conoce a las y los titulares de las dependencias que conforman el Gobierno del Estado.</p>
        </div>

        <div className="index-sec-grid">
          {currentSecretarias.map((sec) => (
            <article key={sec.id} className="index-sec-card">
              <div className="index-sec-photo-placeholder">
                <div className="index-sec-abreviatura-box">
                  <span>{sec.abreviatura}</span>
                </div>
              </div>
              <div className="index-sec-card-content">
                <p className="index-sec-cargo">{sec.cargo}</p>
                <h3 className="index-sec-titular">{sec.titular}</h3>
                <p className="index-sec-nombre">{sec.nombre}</p>
                <a href={`/gobierno/secretarias/${sec.id}`} className="index-sec-link">
                  Ver más información
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
              <a key={organo.id} href={`/gobierno/organos-auxiliares/${organo.id}`} className="index-sec-aux-card">
                <div className="index-sec-aux-abreviatura">
                  <span>{organo.abreviatura}</span>
                </div>
                <p className="index-sec-cargo">{organo.cargo}</p>
                <h4 className="index-sec-titular" style={{ fontSize: '1rem' }}>{organo.titular}</h4>
                <p className="index-sec-nombre">{organo.nombre}</p>
              </a>
            ))}
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <a href="/gobierno/secretarias" className="index-btn-rep-outline">
            Ver Directorio Completo
          </a>
        </div>
      </div>
    </section>
  )
}