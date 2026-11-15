'use client';

import { useState } from 'react';

const WHATSAPP = '56921995196';

const PROYECTOS = [
  {
    id: '01',
    nombre: 'Cocina pública',
    lugar: 'Calama',
    img: '/img/proyecto-01.jpg',
    texto: [
      'El proyecto tiene como sentido ser el centro articulador de necesidades por los programas y usuarios de su contexto próximo. La propuesta, en la población Arturo Prat de la ciudad de Calama, responde a un marco donde se realizan actividades sociales, tanto de autogestión de los vecinos como de la municipalidad, con entregas de insumos básicos.',
      'Con estos antecedentes se da propósito de lugar convocante a un terreno eriazo, en un barrio con problemáticas de sustentabilidad de recursos. La cocina pública funciona como una centralidad en respuesta a estas necesidades, y desde ahí se proyecta el uso del material y su funcionamiento.',
    ],
  },
  {
    id: '02',
    nombre: 'Centro de talleres de agricultores (CTAC)',
    lugar: 'Calama',
    img: '/img/proyecto-02.jpg',
    texto: [
      'El proyecto se emplaza en el borde del Río Loa, en la ciudad de Calama, reconociéndolo como un elemento esencial para el desarrollo del programa de agricultura. El gesto transversal y de mayor pregnancia hacia el río se caracteriza por un desarrollo progresivo: primero la extracción y sanitización del agua, luego el espacio de agricultura mediante invernaderos y talleres, y finalmente una respuesta de futuro a la agricultura urbana colectiva.',
    ],
  },
  {
    id: '03',
    nombre: 'Conservatorio de Música y Arte (CONMUART)',
    lugar: 'Casco histórico',
    img: '/img/proyecto-03.jpg',
    texto: [
      'La intervención propone la rehabilitación de tres manzanas del casco histórico de la ciudad con el proyecto “Paseo de los artistas”, nombre que surge de la propuesta urbana del conservatorio de artes y música para la zona norte del país. Ubicado en la manzana 3, rescata el programa del teatro de la ciudad y reformula los programas que conviven con el edificio.',
      'La propuesta dialoga con la geomorfología a través de su escalaridad: enlaza los edificios patrimoniales hoy dispersos mediante el reconocimiento de los vacíos que guían un recorrido en la vertical, que remata en una contención generada por los volúmenes del conservatorio. El recorrido genera plataformas para la permanencia y recorridos perimetrales con conexiones visuales.',
    ],
  },
  {
    id: '04',
    nombre: 'Conjunto habitacional EMPART 5',
    lugar: '',
    img: '/img/proyecto-04.jpg',
    texto: [],
  },
  {
    id: '05',
    nombre: 'Observatorio Fisiográfico Lomas Rocosas',
    lugar: 'Pan de Azúcar',
    img: '/img/proyecto-05.jpg',
    texto: [
      'El proyecto nace desde el reconocimiento del lugar patrimonial “Salitrera Chacabuco”, precisamente en la zona industrial, donde la propuesta se orienta según el recorrido de los carriles de madera en los que se transportaban los vagones con salitre.',
      'La propuesta arquitectónica, en su gesto y programa de pabellón expositivo, tiene el rol de valorizar y resaltar las preexistencias y narrar la historia a través de su recorrido.',
    ],
  },
  {
    id: '06',
    nombre: 'Conjunto de Ecoviviendas y Urbanismo (CEU)',
    lugar: 'Calama',
    img: '/img/proyecto-06.jpg',
    texto: [
      'El proyecto de eco viviendas y usos mixtos agropecuarios, titulado “Reconfiguración de borde agro urbano, vinculador de flujos ceremoniales y productivos”, se emplaza en el sector poniente de Likantatay, en la ciudad de Calama. Surge como respuesta a dos problemáticas del territorio: el déficit habitacional y la degradación de los suelos agrícolas causada por la expansión urbana e industrial.',
      'La idea central se organiza a partir del concepto de ayllu, una forma de agrupación comunitaria que vincula a la familia y la vida colectiva en torno a un centro común. El proyecto incorpora un eje ceremonial que reconoce prácticas locales como la limpia de canales y que culmina en un mirador elevado hacia el volcán Licancabur.',
      'Las eco viviendas integran la agricultura como parte esencial de su funcionamiento: cultivos por anegación en la planta baja e invernaderos o sistemas hidropónicos verticales en los niveles superiores. Se suma una estrategia de riego en cascada y reciclaje de agua, arquitectura pasiva, paneles móviles de madera como segunda piel, cubiertas fotovoltaicas y estructura de madera laminada que libera el primer nivel para usos públicos y comunitarios.',
    ],
  },
];

const SERVICIOS = [
  {
    num: '01.',
    nombre: 'Arquitectura',
    items: [
      'Tramitaciones municipales',
      'Permisos de Obra Menor',
      'Remodelaciones y Ampliaciones',
      'Anteproyectos y Proyectos',
      'Diseño Residencial, Comercial e Industrial',
    ],
  },
  {
    num: '02.',
    nombre: 'BIM & Digitalización',
    items: ['Modelado', 'Coordinación', 'Scan to BIM', 'Gestión BIM'],
  },
  {
    num: '03.',
    nombre: 'Academia & Innovación',
    items: ['Cursos BIM', 'Capacitación Corporativa', 'Apoyo a estudiantes y profesionales'],
  },
];

function ocultarImagen(e) {
  e.currentTarget.style.display = 'none';
}

export default function Home() {
  const [abierto, setAbierto] = useState(null);
  const [form, setForm] = useState({ nombre: '', email: '', telefono: '', servicio: '', mensaje: '' });

  const proyecto = PROYECTOS.find((p) => p.id === abierto);
  const cambiar = (campo) => (e) => setForm({ ...form, [campo]: e.target.value });

  const enviar = (e) => {
    e.preventDefault();
    const lineas = [
      'Hola Tramo Norte, quiero cotizar.',
      `Nombre: ${form.nombre}`,
      form.email && `Correo: ${form.email}`,
      form.telefono && `Teléfono: ${form.telefono}`,
      form.servicio && `Servicio: ${form.servicio}`,
      form.mensaje && `Mensaje: ${form.mensaje}`,
    ].filter(Boolean);
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(lineas.join('\n'))}`, '_blank', 'noopener');
  };

  return (
    <>
      <nav className="nav">
        <a href="/" className="nav-logo">
          <div className="nav-logo-box">
            <span>TRAMO<br />NORTE</span>
          </div>
        </a>
        <ul className="nav-links">
          <li><a href="#proyectos">Portafolio</a></li>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#about">Quiénes somos</a></li>
          <li><a href="#contacto" className="nav-btn">Presupuesto gratis</a></li>
        </ul>
      </nav>

      <section className="hero">
        <img className="hero-img" src="/img/portada.jpg" alt="" onError={ocultarImagen} />
        <div className="hero-overlay" />
        <div className="hero-content">
          <div>
            <h1 className="hero-title">TRAMO<br />NORTE</h1>
            <p className="hero-lema">Cada Tramo te acerca a tu Norte.</p>
          </div>
          <a href="#contacto" className="hero-cta">Escríbenos <span className="hero-arrow">↓</span></a>
        </div>
      </section>

      <section className="about" id="about">
        <div className="container">
          <div className="about-grid">
            <div>
              <h2 className="about-heading">Somos un estudio de<br />Arquitectura y soluciones BIM<br />con sede en Antofagasta, Chile</h2>
            </div>
            <div className="about-right">
              <p className="about-text">En Tramo Norte entendemos que cada proyecto es un camino. Nuestro trabajo es ayudarte a recorrerlo con claridad, confianza y dirección.</p>
              <a href="#contacto" className="about-link">Háblenos →</a>
            </div>
          </div>
        </div>
      </section>

      <section className="projects" id="proyectos">
        <div className="container">
          <div className="projects-grid">
            {PROYECTOS.map((p) => (
              <button
                key={p.id}
                type="button"
                className={`project-card${abierto === p.id ? ' is-open' : ''}`}
                onClick={() => setAbierto(abierto === p.id ? null : p.id)}
                aria-expanded={abierto === p.id}
              >
                <img src={p.img} alt={p.nombre} loading="lazy" onError={ocultarImagen} />
                <div className="project-label">
                  <div className="project-num">{p.id}</div>
                  <div className="project-name">{p.nombre}</div>
                  {p.lugar && <div className="project-place">{p.lugar}</div>}
                </div>
              </button>
            ))}
          </div>
          {proyecto && (
            <div className="project-detail">
              <div className="project-detail-head">
                <h3>{proyecto.nombre}</h3>
                <button type="button" className="project-close" onClick={() => setAbierto(null)}>Cerrar ×</button>
              </div>
              {proyecto.lugar && <div className="project-place">{proyecto.lugar}</div>}
              {proyecto.texto.map((t, i) => <p key={i}>{t}</p>)}
            </div>
          )}
        </div>
      </section>

      <section className="services" id="servicios">
        <div className="container">
          <h2 className="services-title">Servicios</h2>
          <div className="services-grid">
            {SERVICIOS.map((s) => (
              <div className="service-card" key={s.num}>
                <div className="service-num">{s.num}</div>
                <div className="service-name">{s.nombre}</div>
                <ul className="service-list">
                  {s.items.map((i) => <li key={i}>{i}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact" id="contacto">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-left">
              <h2>Cotiza con nosotros<br />rellenando el formulario</h2>
              <p>Cada proyecto comienza con una conversación. Comparte tu idea, necesidad o desafío y trabajaremos contigo para transformarlo en una solución concreta, eficiente y adaptada a tus objetivos.</p>
              <div className="contact-info">
                <div className="contact-info-item">Av. Argentina N 2214<br />Antofagasta</div>
                <div className="contact-info-item">Lunes a Viernes<br />09:00 a 18:00</div>
                <div className="contact-info-item">
                  <a href="tel:+56921995196">+56 9 2199 5196</a><br />
                  <a href="tel:+56935432291">+56 9 3543 2291</a>
                </div>
                <div className="contact-info-item"><a href="mailto:tramonorte.contacto@gmail.com">tramonorte.contacto@gmail.com</a></div>
              </div>
            </div>
            <form className="contact-form" onSubmit={enviar}>
              <input type="text" placeholder="Nombre" required value={form.nombre} onChange={cambiar('nombre')} />
              <input type="email" placeholder="Correo" value={form.email} onChange={cambiar('email')} />
              <input type="tel" placeholder="Teléfono" value={form.telefono} onChange={cambiar('telefono')} />
              <select value={form.servicio} onChange={cambiar('servicio')} aria-label="¿Qué servicio necesitas?">
                <option value="">¿Qué servicio necesitas?</option>
                <option>Tramitaciones</option>
                <option>Diseño</option>
                <option>BIM</option>
                <option>Otros</option>
              </select>
              <textarea placeholder="Mensaje" required value={form.mensaje} onChange={cambiar('mensaje')}></textarea>
              <button type="submit" className="form-btn">Enviar por WhatsApp</button>
            </form>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-grid">
          <div className="footer-col">
            <div className="footer-col-title">Ubicación</div>
            <p>Av. Argentina N 2214</p>
            <p>Antofagasta</p>
            <br />
            <a href="tel:+56921995196">+56 9 2199 5196</a>
            <a href="tel:+56935432291">+56 9 3543 2291</a>
            <a href="mailto:tramonorte.contacto@gmail.com">tramonorte.contacto@gmail.com</a>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">Horario de oficina</div>
            <p>Lunes a Viernes</p>
            <p>09:00 a 18:00</p>
          </div>
          <div className="footer-col" style={{display:'flex', flexDirection:'column', alignItems:'flex-end'}}>
            <div className="footer-logo">
              <div className="footer-logo-box">
                <span>TRAMO<br />NORTE</span>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">© {new Date().getFullYear()} Tramo Norte SpA · Antofagasta, Chile</div>
      </footer>
    </>
  )
}
