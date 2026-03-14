//app/gobierno.tsx
import Link from 'next/link'

export default function HomePage() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui' }}>
      <section>
        <h1>Bienvenido al Portal Gob-Puebla</h1>
        <p>Sistema de gestión y servicios digitales.</p>
      </section>

      <nav style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
        <Link 
          href="/tramites" 
          style={{ 
            padding: '0.5rem 1rem', 
            backgroundColor: '#003366', 
            color: 'white', 
            borderRadius: '4px',
            textDecoration: 'none'
          }}
        >
          Ver Trámites
        </Link>
        <Link 
          href="/contacto" 
          style={{ 
            padding: '0.5rem 1rem', 
            border: '1px solid #ccc', 
            borderRadius: '4px',
            textDecoration: 'none'
          }}
        >
          Contacto
        </Link>
      </nav>
    </main>
  )
}