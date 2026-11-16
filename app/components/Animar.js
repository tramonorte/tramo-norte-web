'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

// Muestra con una transición suave los elementos .anim cuando entran en pantalla.
export default function Animar() {
  const ruta = usePathname()
  useEffect(() => {
    const els = document.querySelectorAll('.anim:not(.visto)')
    if (!('IntersectionObserver' in window)) {
      els.forEach((e) => e.classList.add('visto'))
      return
    }
    const io = new IntersectionObserver(
      (entradas) =>
        entradas.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visto')
            io.unobserve(e.target)
          }
        }),
      { threshold: 0.1, rootMargin: '0px 0px -5% 0px' }
    )
    els.forEach((e) => io.observe(e))
    return () => io.disconnect()
  }, [ruta])
  return null
}
