export default function Home() {
  return (
    <>
      <nav className="nav">
        <a href="/" className="nav-logo">
          <div className="nav-logo-box">
            <span>TRAMO<br />NORTE</span>
          </div>
        </a>
        <ul className="nav-links">
          <li><a href="#proyectos">Proyectos</a></li>
          <li><a href="#proyectos">Archivo</a></li>
          <li><a href="#about">Info</a></li>
          <li><a href="#contacto" className="nav-btn">Contacto</a></li>
        </ul>
      </nav>

      <section className="hero">
        <img className="hero-img" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1800&q=80" alt="Arquitectura Tramo Norte" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1 className="hero-title">TRAMO<br />NORTE</h1>
          <a href="#contacto" className="hero-cta">Escríbenos <span className="hero-arrow">↓</span></a>
        </div>
      </section>

      <section className="about" id="about">
        <div className="container">
          <div className="about-grid">
            <div>
              <h2 className="about-heading">Somos un estudio de<br />arquitectura y construcción<br />con sede en Antofagasta de Chile</h2>
            </div>
            <div className="about-right">
              <p className="about-text">Desarrollamos proyectos en distintas escalas, abordando cada encargo con una mirada clara y contextual, creando o transformando espacios con coherencia, integrando proyecto y obra desde el contexto, el uso y la ejecución.</p>
              <a href="#contacto" className="about-link">Háblenos →</a>
            </div>
          </div>
        </div>
      </section>

      <section className="projects" id="proyectos">
        <div className="container">
          <div className="projects-grid">
            <div className="project-card">
              <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=75" alt="Proyecto 01" />
              <div className="project-label"><div className="project-name">Proyecto 01</div></div>
            </div>
            <div className="project-card">
              <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=75" alt="Proyecto 02" />
              <div className="project-label"><div className="project-name">Proyecto 02</div></div>
            </div>
            <div className="project-card">
              <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=75" alt="Proyecto 03" />
              <div className="project-label"><div className="project-name">Proyecto 03</div></div>
            </div>
          </div>
          <div className="projects-footer">
            <a href="#proyectos" className="ver-mas">Ver Más →</a>
          </div>
        </div>
      </section>

      <section className="services" id="servicios">
        <div className="container">
          <h2 className="services-title">Servicios</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-num">01.</div>
              <div className="service-name">Arquitectura</div>
              <p className="service-desc">Diseñamos, coordinamos y gestionamos proyectos de arquitectura en distintas escalas y programas. Trabajamos bajo la metodología BIM, lo que nos permite visualizar, coordinar y definir el proyecto desde etapas tempranas de desarrollo.</p>
            </div>
            <div className="service-card">
              <div className="service-num">02.</div>
              <div className="service-name">Construcción</div>
              <p className="service-desc">Construimos y gestionamos nuestros propios proyectos, integrando arquitectura, diseño y obra en un solo proceso. Este enfoque nos permite asegurar coherencia entre lo proyectado y lo construido, junto con un control permanente durante la ejecución.</p>
            </div>
            <div className="service-card">
              <div className="service-num">03.</div>
              <div className="service-name">Remodelaciones</div>
              <p className="service-desc">Remodelamos y ampliamos espacios interiores y exteriores a partir de un proceso de diseño adaptado a cada encargo. Abordamos cada intervención considerando funcionalidad, uso y relación con lo existente, asegurando un desarrollo continuo y bien coordinado.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contacto">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-left">
              <h2>Cotiza con nosotros<br />rellenando el formulario</h2>
              <p>Déjanos tus datos y te contactaremos para coordinar una primera conversación sobre tus objetivos y requerimientos.</p>
              <div className="contact-info">
                <div className="contact-info-item">Av. Argentina N 2214, 1271719<br />Antofagasta</div>
                <div className="contact-info-item">Lunes a Viernes<br />9:00 am to 6:00 pm</div>
                <div className="contact-info-item">(123) 456-7890</div>
                <div className="contact-info-item"><a href="mailto:Tramonorte.contacto@gmail.com">Tramonorte.contacto@gmail.com</a></div>
              </div>
            </div>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Nombre" />
              <input type="email" placeholder="Email" />
              <input type="tel" placeholder="Teléfono" />
              <textarea placeholder="Mensaje"></textarea>
              <button type="submit" className="form-btn">Enviar</button>
            </form>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-grid">
          <div className="footer-col">
            <div className="footer-col-title">Ubicación</div>
            <p>Av. Argentina N 2214, 1271719</p>
            <p>Antofagasta</p>
            <br />
            <a href="tel:+561234567890">(123) 456-7890</a>
            <a href="mailto:Tramonorte.contacto@gmail.com">Tramonorte.contacto@gmail.com</a>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">Horario de oficina</div>
            <p>Lunes a Viernes</p>
            <p>9:00 am to 6:00 pm</p>
          </div>
          <div className="footer-col" style={{display:'flex', flexDirection:'column', alignItems:'flex-end'}}>
            <div className="footer-col-title">Redes sociales</div>
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
            <div className="footer-logo" style={{marginT
