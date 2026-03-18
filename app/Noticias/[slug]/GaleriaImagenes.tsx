// app/Noticias/[slug]/GaleriaImagenes.tsx
'use client'

import Image from 'next/image'
import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight, X, Image as ImageIcon } from 'lucide-react'

export default function GaleriaImagenes({ imagenes, titulo }: { imagenes: string[], titulo: string }) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openLightbox = (index: number) => {
    setCurrentIndex(index)
    setLightboxOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = 'unset'
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? imagenes.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === imagenes.length - 1 ? 0 : prev + 1))
  }

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!lightboxOpen) return
    if (e.key === 'Escape') closeLightbox()
    if (e.key === 'ArrowLeft') goToPrevious()
    if (e.key === 'ArrowRight') goToNext()
  }, [lightboxOpen])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [handleKeyDown])

  return (
    <>
      <div className="noticia-slug-gallery-card">
        <h2 className="noticia-slug-gallery-title">
          <ImageIcon className="noticia-slug-gallery-icon" /> Galería ({imagenes.length})
        </h2>
        <div className="noticia-slug-gallery-grid">
          {imagenes.map((imagen, index) => (
            <div 
              key={index} 
              className="noticia-slug-gallery-item"
              onClick={() => openLightbox(index)}
            >
              <Image 
                src={imagen} 
                alt={`${titulo} - Imagen ${index + 1}`} 
                fill 
                className="noticia-slug-image" 
              />
            </div>
          ))}
        </div>
      </div>

      {lightboxOpen && (
        <div className="noticia-slug-lightbox" onClick={closeLightbox}>
          <div className="noticia-slug-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="noticia-slug-lightbox-close" onClick={closeLightbox}>
              <X className="noticia-slug-lightbox-icon" />
            </button>
            
            <button 
              className="noticia-slug-lightbox-nav noticia-slug-lightbox-prev" 
              onClick={goToPrevious}
              aria-label="Imagen anterior"
            >
              <ChevronLeft className="noticia-slug-lightbox-nav-icon" />
            </button>
            
            <div className="noticia-slug-lightbox-image-container">
              <Image
                src={imagenes[currentIndex]}
                alt={`${titulo} - Imagen ${currentIndex + 1}`}
                fill
                className="noticia-slug-lightbox-image"
                priority
              />
            </div>
            
            <button 
              className="noticia-slug-lightbox-nav noticia-slug-lightbox-next" 
              onClick={goToNext}
              aria-label="Imagen siguiente"
            >
              <ChevronRight className="noticia-slug-lightbox-nav-icon" />
            </button>
            
            <div className="noticia-slug-lightbox-counter">
              {currentIndex + 1} / {imagenes.length}
            </div>
          </div>
        </div>
      )}
    </>
  )
}