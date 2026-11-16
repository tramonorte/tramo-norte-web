import './globals.css'
import Animar from './components/Animar'

export const metadata = {
  title: 'Tramo Norte — Arquitectura y soluciones BIM',
  description: 'Estudio de Arquitectura y soluciones BIM con sede en Antofagasta, Chile. Cada Tramo te acerca a tu Norte.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
        <Animar />
      </body>
    </html>
  )
}
