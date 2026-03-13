//components/portal/ClientLayout.tsx
'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const ReportesCiudadanos = dynamic(() => import('./ReportesCiudadanos').then(mod => ({ default: mod.ReportesCiudadanos })), {
  loading: () => <div className="index-layout-skeleton index-h-96 index-bg-muted" />,
  ssr: false
})

const Noticias = dynamic(() => import('./Noticias').then(mod => ({ default: mod.Noticias })), {
  loading: () => <div className="index-layout-skeleton index-h-96 index-bg-muted" />,
  ssr: false
})

const Gobernador = dynamic(() => import('./Gobernador').then(mod => ({ default: mod.Gobernador })), {
  loading: () => <div className="index-layout-skeleton index-h-96 index-bg-secondary" />,
  ssr: false
})

const Secretarias = dynamic(() => import('./Secretarias').then(mod => ({ default: mod.Secretarias })), {
  loading: () => <div className="index-layout-skeleton index-h-96 index-bg-background" />,
  ssr: false
})

const EcosistemaDigital = dynamic(() => import('./EcosistemaDigital').then(mod => ({ default: mod.EcosistemaDigital })), {
  loading: () => <div className="index-layout-skeleton index-h-96 index-bg-muted" />,
  ssr: false
})

const Footer = dynamic(() => import('./Footer').then(mod => ({ default: mod.Footer })), {
  loading: () => <div className="index-layout-skeleton index-h-64 index-bg-secondary" />,
  ssr: false
})

const AccesibilidadBar = dynamic(() => import('./AccesibilidadBar').then(mod => ({ default: mod.AccesibilidadBar })), {
  ssr: false
})

const ChatWidget = dynamic(() => import('./ChatWidget').then(mod => ({ default: mod.ChatWidget })), {
  ssr: false
})

interface ClientLayoutProps {
  hero: React.ReactNode
  servicios: React.ReactNode
  estadisticas: React.ReactNode
}

export function ClientLayout({ hero, servicios, estadisticas }: ClientLayoutProps) {
  return (
    <>
      {hero}
      {servicios}
      {estadisticas}
      <Suspense fallback={<div className="index-layout-skeleton index-h-96 index-bg-muted" />}>
        <ReportesCiudadanos />
      </Suspense>
      <Suspense fallback={<div className="index-layout-skeleton index-h-96 index-bg-muted" />}>
        <Noticias />
      </Suspense>
      <Suspense fallback={<div className="index-layout-skeleton index-h-96 index-bg-secondary" />}>
        <Gobernador />
      </Suspense>
      <Suspense fallback={<div className="index-layout-skeleton index-h-96 index-bg-background" />}>
        <Secretarias />
      </Suspense>
      <Suspense fallback={<div className="index-layout-skeleton index-h-96 index-bg-muted" />}>
        <EcosistemaDigital />
      </Suspense>
      <Suspense fallback={<div className="index-layout-skeleton index-h-64 index-bg-secondary" />}>
        <Footer />
      </Suspense>
      <AccesibilidadBar />
      <ChatWidget />
    </>
  )
}