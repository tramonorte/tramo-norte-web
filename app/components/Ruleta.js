'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const PROYECTOS = [
  { img: 'fan-4', lineas: ['Conjunto de', 'Ecoviviendas y', 'Urbanismo'], href: '/portafolio/ceu' },
  { img: 'exterior', lineas: ['Cocina', 'Pública', 'Calama'] },
  { img: 'fan-3', lineas: ['Conservatorio', 'de Música', 'y Arte'] },
  { img: 'fan-6', lineas: ['Conjunto', 'Habitacional', 'EMPART 5'] },
  { img: 'fan-5', lineas: ['Observatorio', 'Fisiográfico', 'Lomas Rocosas'] },
  { img: 'fan-1', lineas: ['Ecoviviendas', 'y huertos', 'Calama'], href: '/portafolio/ceu' },
]
const CASILLAS = 12 // las seis imágenes se repiten para completar la rueda
const PASO = 360 / CASILLAS

export default function Ruleta() {
  const [paso, setPaso] = useState(0)
  const [pausa, setPausa] = useState(false)

  useEffect(() => {
    if (pausa) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const t = setInterval(() => setPaso((p) => p + 1), 3800)
    return () => clearInterval(t)
  }, [pausa])

  const activa = ((paso % CASILLAS) + CASILLAS) % CASILLAS
  const proyecto = PROYECTOS[activa % PROYECTOS.length]

  // Lleva una casilla al centro por el camino más corto
  const irA = (i) => {
    let d = i - activa
    if (d > CASILLAS / 2) d -= CASILLAS
    if (d < -CASILLAS / 2) d += CASILLAS
    setPaso(paso + d)
  }

  const nombre = proyecto.lineas.map((l, i) => (
    <span key={i}><b>{l[0]}</b>{l.slice(1)}</span>
  ))

  return (
    <div className="ruleta">
      <h1>Cada <b>Tramo</b><br />te acerca a tu <b>Norte.</b></h1>
      <span className="ruleta-aro" />
      <div className="ruleta-rueda" style={{ transform: `rotate(${-paso * PASO}deg)` }}>
        {Array.from({ length: CASILLAS }, (_, i) => {
          const p = PROYECTOS[i % PROYECTOS.length]
          return (
            <button
              key={i}
              type="button"
              className={'ruleta-casilla' + (i === activa ? ' ruleta-activa' : '')}
              style={{ transform: `rotate(${i * PASO}deg) translateX(var(--radio))` }}
              onClick={() => irA(i)}
              aria-label={p.lineas.join(' ')}
              tabIndex={i === activa ? 0 : -1}
            >
              <img src={`/img/${p.img}.webp`} alt="" draggable="false" />
            </button>
          )
        })}
      </div>
      <div
        className="ruleta-info"
        key={activa}
        onMouseEnter={() => setPausa(true)}
        onMouseLeave={() => setPausa(false)}
        onFocus={() => setPausa(true)}
        onBlur={() => setPausa(false)}
      >
        <p className="ruleta-nombre">{nombre}</p>
        {proyecto.href && <Link className="ruleta-ver" href={proyecto.href}>Ver proyecto</Link>}
      </div>
      <div className="ruleta-flechas">
        <button type="button" onClick={() => setPaso(paso - 1)} aria-label="Proyecto anterior">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 15l6-6 6 6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
        <button type="button" onClick={() => setPaso(paso + 1)} aria-label="Proyecto siguiente">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
      </div>
    </div>
  )
}
