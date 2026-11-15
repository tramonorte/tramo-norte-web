import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = { title: 'Portafolio — Tramo Norte' }

export default function Portafolio() {
  return (
    <main className="degradado portafolio">
      <Header />
      <div className="abanico">
        <h1>Cada <b>Tramo</b><br />te acerca a tu <b>Norte.</b></h1>
        <span className="abanico-circulo" />
        <img className="ab ab-a" src="/img/fan-1.webp" alt="Proyecto de Tramo Norte" />
        <img className="ab ab-b" src="/img/fan-2.webp" alt="Proyecto de Tramo Norte" />
        <img className="ab ab-c" src="/img/fan-3.webp" alt="Proyecto de Tramo Norte" />
        <img className="ab ab-f" src="/img/fan-6.webp" alt="Proyecto de Tramo Norte" />
        <img className="ab ab-e" src="/img/fan-5.webp" alt="Proyecto de Tramo Norte" />
        <Link className="abanico-centro" href="/portafolio/ceu">
          <img className="ab ab-d" src="/img/fan-4.webp" alt="Conjunto de Ecoviviendas y Urbanismo" />
          <span className="abanico-nombre"><b>C</b>onjunto de<br /><b>E</b>coviviendas y<br /><b>U</b>rbanismo</span>
        </Link>
      </div>
      <Footer />
    </main>
  )
}
