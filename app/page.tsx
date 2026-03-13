import { Header } from '@/components/portal/Header'
import { Hero } from '@/components/portal/Hero'
import { ServiciosDestacados } from '@/components/portal/ServiciosDestacados'
import { EstadisticasGobierno } from '@/components/portal/EstadisticasGobierno'
import { ClientLayout } from '@/components/portal/ClientLayout'

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="contenido-principal" tabIndex={-1}>
        <ClientLayout 
          hero={<Hero />}
          servicios={<ServiciosDestacados />}
          estadisticas={<EstadisticasGobierno />}
        />
      </main>
    </>
  )
}