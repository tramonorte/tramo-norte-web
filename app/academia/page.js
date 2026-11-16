import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = { title: 'Academia — Tramo Norte' }

export default function Academia() {
  return (
    <main className="academia">
      <section className="aca-hero">
        <img src="/img/academia.webp" alt="Dibujo de arquitectura" />
        <Header />
        <span className="aca-pildora aca-titulo">CURSO REVIT</span>
      </section>
      <section className="aca-cursos">
        <h1 className="aca-pildora anim">CURSOS REVIT TRAMO NORTE</h1>
        <div className="aca-fila">
          {[1, 2, 3].map((n) => (
            <article key={n} className="anim" style={{ '--d': `${(n - 1) * 0.15}s` }}>
              <div className="aca-tarjeta" />
              <p>Estamos preparando nuestros cursos de Revit. Muy pronto publicaremos aquí el contenido, las fechas y la forma de inscribirse.</p>
            </article>
          ))}
        </div>
        <Link className="boton" href="/#contacto">Quiero que me avisen</Link>
      </section>
      <Footer />
    </main>
  )
}
