//app/page.tsx
import { Header } from '@/components/portal/Header'
import { Hero } from '@/components/portal/Hero'
import { ServiciosDestacados } from '@/components/portal/ServiciosDestacados'
import { EstadisticasGobierno } from '@/components/portal/EstadisticasGobierno'
import { ClientLayout } from '@/components/portal/ClientLayout'

export default function HomePage() {
  return (
    <>
      <Header />
      {/* Añadimos overflow-visible para asegurar que la IA no se corte */}
      <main id="contenido-principal" className="index-main-wrapper" style={{ overflow: 'visible' }}>
        <ClientLayout 
          hero={<Hero />}
          servicios={<ServiciosDestacados />}
          estadisticas={<EstadisticasGobierno />}
        />
      </main>
    </>
  )
}