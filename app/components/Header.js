'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Logo from './Logo'

const LINKS = [
  ['PORTAFOLIO', '/portafolio'],
  ['QUIENES SOMOS', '/#quienes-somos'],
  ['SERVICIOS', '/#servicios'],
  ['ACADEMIA', '/academia'],
]

export default function Header() {
  const [abierto, setAbierto] = useState(false)
  const [bajo, setBajo] = useState(false)
  const cerrar = () => setAbierto(false)
  useEffect(() => {
    const alBajar = () => setBajo(window.scrollY > 24)
    alBajar()
    window.addEventListener('scroll', alBajar, { passive: true })
    return () => window.removeEventListener('scroll', alBajar)
  }, [])
  return (
    <header className={'cab' + (abierto ? ' cab-abierta' : '') + (bajo ? ' cab-bajo' : '')}>
      <Link href="/" className="cab-marca" onClick={cerrar}>
        <Logo className="cab-logo" />
        <span>Tramo Norte</span>
      </Link>
      <nav className="cab-nav">
        {LINKS.map(([t, h]) => (
          <Link key={t} href={h} onClick={cerrar}>{t}</Link>
        ))}
      </nav>
      <Link href="/#contacto" className="cab-cta" onClick={cerrar}>PRESUPUESTO GRATIS</Link>
      <button
        type="button"
        className="cab-menu"
        aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={abierto}
        onClick={() => setAbierto(!abierto)}
      >
        <span /><span /><span />
      </button>
    </header>
  )
}
