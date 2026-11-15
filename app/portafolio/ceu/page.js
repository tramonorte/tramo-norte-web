import Header from '../../components/Header'
import Footer from '../../components/Footer'
import textos from './textos.json'

export const metadata = { title: 'CEU · Conjunto de Ecoviviendas y Urbanismo — Tramo Norte' }

// Posiciones tomadas del diseño (lienzo de 1366 de ancho): x, y, ancho, alto
const BLOQUES = [
  { img: 'contexto', alt: 'Contexto del proyecto en Calama', c: [42, 845, 800, 455] },
  { txt: 0, c: [858, 850, 477, 445] },
  { txt: 1, c: [42, 1319, 578, 447] },
  { img: 'ayllu', alt: 'Concepto de ayllu', c: [642, 1315, 682, 464] },
  { img: 'flujos', alt: 'Flujos ceremoniales y productivos', c: [54, 1811, 1252, 536] },
  { txt: 2, c: [52, 2369, 1254, 187] },
  { img: 'cultivo', alt: 'Sistema de cultivo', c: [42, 2595, 1295, 368] },
  { img: 'poblacion', alt: 'Población', c: [39, 3001, 399, 421] },
  { txt: 3, c: [456, 3001, 879, 421] },
  { img: 'emplazamiento', alt: 'Emplazamiento', c: [34, 3493, 1279, 703] },
  { img: 'plano-general', alt: 'Planta general', c: [38, 4247, 1272, 701] },
  { txt: 4, c: [34, 4999, 1284, 396] },
  { img: 'cortes', alt: 'Cortes', c: [31, 5461, 633, 356] },
  { img: 'interior', alt: 'Vista interior', c: [676, 5461, 636, 358] },
  { txt: 5, c: [51, 5889, 1284, 396] },
  { img: 'axonometrica', alt: 'Axonométrica', c: [85, 6327, 354, 459], suelta: true },
  { img: 'modulos', alt: 'Módulos de vivienda', c: [481, 6413, 844, 255], suelta: true },
  { img: 'anfiteatro', alt: 'Anfiteatro y espacio comunitario', c: [45, 6852, 1279, 593] },
]

export default function Ceu() {
  return (
    <main className="degradado ceu">
      <Header />
      <section className="ceu-hero">
        <img src="/img/ceu/hero.webp" alt="Conjunto de Ecoviviendas y Urbanismo" />
        <h1>CEU<span>Conjunto de Ecoviviendas<br />y Urbanismo</span></h1>
      </section>
      <div className="ceu-lienzo">
        {BLOQUES.map((b, i) => {
          const [x, y, w, h] = b.c
          const style = { '--x': x, '--y': y - 845, '--w': w, '--h': h }
          return b.img ? (
            <img key={i} className={'ceu-b ceu-img' + (b.suelta ? ' ceu-suelta' : '')} style={style} src={`/img/ceu/${b.img}.webp`} alt={b.alt} loading="lazy" />
          ) : (
            <div key={i} className="ceu-b ceu-txt" style={style}>
              {textos[b.txt].map((p, j) => <p key={j}>{p}</p>)}
            </div>
          )
        })}
      </div>
      <Footer />
    </main>
  )
}
