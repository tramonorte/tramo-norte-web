import Header from '../components/Header'
import Footer from '../components/Footer'
import Ruleta from '../components/Ruleta'

export const metadata = { title: 'Portafolio — Tramo Norte' }

export default function Portafolio() {
  return (
    <main className="degradado portafolio">
      <Header />
      <Ruleta />
      <Footer />
    </main>
  )
}
