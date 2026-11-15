import Logo from './Logo'

const Pin = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" /></svg>
)
const WhatsApp = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 1.8a8.2 8.2 0 1 1-4.2 15.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 0 1 12 3.800Zm-3.500 4.300c-.2 0-.5.1-.7.4-.3.3-1 1-1 2.300s1 2.700 1.100 2.900c.1.2 2 3.100 4.900 4.200 2.400 1 2.900.8 3.400.7.500-.1 1.700-.7 1.900-1.400.2-.700.2-1.200.200-1.400-.100-.100-.300-.200-.600-.400l-2-.9c-.300-.100-.500-.200-.700.100l-.900 1.200c-.200.200-.300.200-.600.100-.300-.200-1.200-.500-2.300-1.400-.900-.800-1.400-1.700-1.600-2-.200-.300 0-.500.100-.600l.400-.500c.200-.200.200-.300.300-.500.100-.200 0-.400 0-.500l-.900-2.200c-.200-.500-.500-.500-.700-.500h-.300Z" /></svg>
)
const Facebook = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M13.500 21v-7.500h2.500l.400-3h-2.900V8.600c0-.900.200-1.500 1.500-1.500h1.500V4.400c-.300 0-1.200-.100-2.200-.100-2.200 0-3.700 1.300-3.700 3.800v2.400H8v3h2.600V21h2.900Z" /></svg>
)
const Instagram = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="4.500" fill="none" stroke="currentColor" strokeWidth="1.700" /><circle cx="12" cy="12" r="3.700" fill="none" stroke="currentColor" strokeWidth="1.700" /><circle cx="16.700" cy="7.300" r="1.100" fill="currentColor" /></svg>
)
const TikTok = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M14.200 4h2.500c.200 1.800 1.300 3 3.100 3.200v2.600c-1.200 0-2.200-.300-3.100-.900v5.600a5.200 5.200 0 1 1-5.200-5.200c.300 0 .500 0 .800.100v2.700a2.600 2.600 0 1 0 1.900 2.500V4Z" /></svg>
)

export default function Footer() {
  return (
    <footer className="pie">
      <div className="pie-caja">
        <div className="pie-contacto">
          <p className="pie-dir"><Pin />Av. Argentina N 2214, Antofagasta</p>
          <div className="pie-tel">
            <a className="pie-wa" href="https://wa.me/56921995196" target="_blank" rel="noreferrer" aria-label="WhatsApp"><WhatsApp /></a>
            <div>
              <a href="tel:+56921995196">(56) 921995196</a>
              <a href="tel:+56935432291">(56) 935432291</a>
            </div>
          </div>
          <a className="pie-mail" href="mailto:tramonorte.contacto@gmail.com">Tramonorte.contacto@gmail.com</a>
        </div>
        <div className="pie-horario">
          <p className="pie-h">Horario de oficina</p>
          <p>Lunes a Viernes<br />09:00 am - 18:00 pm</p>
        </div>
        <div className="pie-redes">
          <p>¡SIGUENOS EN NUESTRAS REDES SOCIALES!</p>
          <div>
            <span className="pie-red" title="Facebook"><Facebook /></span>
            <span className="pie-red" title="Instagram"><Instagram /></span>
            <span className="pie-red" title="TikTok"><TikTok /></span>
          </div>
        </div>
        <div className="pie-marca">
          <Logo className="pie-logo" />
          <span>Tramo Norte</span>
        </div>
      </div>
    </footer>
  )
}
