//app/layout.tsx
import type { Metadata, Viewport } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import '../styles/index.css'
import '../styles/noticias.css'
import '../styles/noticias-slug.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const geistMono = Geist_Mono({ 
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Portal Ciudadano del Estado de Puebla | Gobierno de Puebla',
  description: 'Portal oficial del Gobierno del Estado de Puebla. Realiza trámites, consulta servicios digitales, reporta problemas urbanos y accede a información institucional.',
  keywords: ['Puebla', 'gobierno', 'trámites', 'servicios ciudadanos', 'portal ciudadano', 'México'],
  authors: [{ name: 'Gobierno del Estado de Puebla' }],
  creator: 'Gobierno del Estado de Puebla',
  publisher: 'Gobierno del Estado de Puebla',
  robots: 'index, follow',
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🏛️</text></svg>",
        type: "image/svg+xml",
      },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: 'https://puebla.gob.mx',
    siteName: 'Portal Ciudadano de Puebla',
    title: 'Portal Ciudadano del Estado de Puebla',
    description: 'Accede a todos los servicios digitales del Gobierno del Estado de Puebla',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portal Ciudadano del Estado de Puebla',
    description: 'Accede a todos los servicios digitales del Gobierno del Estado de Puebla',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#1e3a5f' },
    { media: '(prefers-color-scheme: dark)', color: '#0f1729' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        {children}
        <Analytics debug={false} />
      </body>
    </html>
  )
}