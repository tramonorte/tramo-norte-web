'use client'
import { useState } from 'react'
import Link from 'next/link'
import Header from './components/Header'
import Footer from './components/Footer'

const WHATSAPP = '56921995196'

const SERVICIOS = [
  {
    n: '01.',
    nombre: 'Arquitectura',
    items: [
      'Tramitaciones municipales',
      'Permisos de Obra Menor',
      'Remodelaciones y Ampliaciones',
      'Anteproyectos/Proyectos',
      'Diseño Residencial y Comercial e Industrial',
    ],
  },
  {
    n: '02.',
    nombre: 'BIM & Digitalización',
    items: ['Modelado', 'Coordinación', 'Scan to BIM', 'Gestión BIM'],
  },
  {
    n: '03.',
    nombre: 'Académia & Innovación',
    items: ['Cursos BIM', 'Capacitación Corporativa', 'Apoyo a estudiantes y profesionales'],
  },
]

const OPCIONES = ['TRAMITACIONES', 'DISEÑO', 'BIM', 'OTROS']

export default function Home() {
  const [form, setForm] = useState({ nombre: '', correo: '', telefono: '', mensaje: '' })
  const [servicios, setServicios] = useState([])
  const campo = (k) => (e) => setForm({ ...form, [k]: e.target.value })
  const alternar = (s) =>
    setServicios(servicios.includes(s) ? servicios.filter((x) => x !== s) : [...servicios, s])

  const enviar = (e) => {
    e.preventDefault()
    const lineas = [
      'Hola Tramo Norte, quiero cotizar.',
      `Nombre: ${form.nombre}`,
      form.correo && `Correo: ${form.correo}`,
      form.telefono && `Teléfono: ${form.telefono}`,
      servicios.length > 0 && `Servicio: ${servicios.join(', ')}`,
      form.mensaje && `Mensaje: ${form.mensaje}`,
    ].filter(Boolean)
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(lineas.join('\n'))}`, '_blank')
  }

  return (
    <main className="inicio">
      <section className="hero">
        <img src="/img/hero.webp" alt="Proyecto de Tramo Norte" />
        <Header />
        <h1>Cada <b>Tramo</b> te acerca a tu <b>Norte.</b></h1>
      </section>

      <section className="somos" id="quienes-somos">
        <h2>Somos un estudio de <b>Arquitectura y soluciones BIM</b> con sede en Antofagasta, Chile.</h2>
        <div>
          <p>En Tramo Norte entendemos que cada proyecto es un camino. Nuestro trabajo es ayudarte a recorrerlo con claridad, confianza y dirección.</p>
          <a className="boton" href="#contacto">Hablenos</a>
        </div>
      </section>

      <section className="muestras">
        <div className="muestras-fila">
          <figure><img src="/img/exterior.webp" alt="Vista exterior" loading="lazy" /><figcaption>exterior</figcaption></figure>
          <figure><img src="/img/semi-interior.webp" alt="Vista semi interior" loading="lazy" /><figcaption>semi interior</figcaption></figure>
          <figure><img src="/img/interior.webp" alt="Vista interior" loading="lazy" /><figcaption>interior</figcaption></figure>
        </div>
        <Link className="boton muestras-mas" href="/portafolio">Ver Más</Link>
      </section>

      <section className="servicios" id="servicios">
        <h2>Servicios</h2>
        <div className="servicios-fila">
          {SERVICIOS.map((s) => (
            <article key={s.n}>
              <span className="servicios-n">{s.n}</span>
              <h3>{s.nombre}</h3>
              <ul>{s.items.map((i) => <li key={i}>{i}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className="contacto" id="contacto">
        <p className="contacto-etiqueta">PRESUPUESTO GRATIS</p>
        <div className="contacto-texto">
          <h2>Cotiza con nosotros<br />rellenando el formulario</h2>
          <p>
            Cada proyecto comienza con una conversación.<br />
            Comparte <b>tu idea, necesidad o desafío</b> y trabajaremos contigo para transformarlo en una
            solución concreta, eficiente y adaptada a tus objetivos.<br />
            Completa el formulario y da el primer paso hacia tu norte.
          </p>
        </div>
        <form className="formulario" onSubmit={enviar}>
          <label className="campo"><b>Nombre:</b><input required value={form.nombre} onChange={campo('nombre')} placeholder="Tu nombre" autoComplete="name" /></label>
          <label className="campo"><b>correo:</b><input type="email" value={form.correo} onChange={campo('correo')} placeholder="tucorreo@ejemplo.cl" autoComplete="email" /></label>
          <label className="campo"><b>teléfono:</b><input type="tel" value={form.telefono} onChange={campo('telefono')} placeholder="+56 9 1234 5678" autoComplete="tel" /></label>
          <fieldset className="opciones">
            <legend>¿Qué servicio necesitas?</legend>
            {OPCIONES.map((o) => (
              <label key={o}>
                <span>{o}</span>
                <input type="checkbox" checked={servicios.includes(o)} onChange={() => alternar(o)} />
                <i />
              </label>
            ))}
          </fieldset>
          <textarea value={form.mensaje} onChange={campo('mensaje')} placeholder="Mensaje" aria-label="Mensaje" />
          <button className="boton" type="submit">Enviar</button>
        </form>
      </section>

      <Footer />
    </main>
  )
}
