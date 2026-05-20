export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      
      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center px-6 text-center border-b border-zinc-200">
        
        <p className="tracking-[0.3em] uppercase text-sm text-zinc-500 mb-6">
          Arquitectura · BIM · Visualización
        </p>

        <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-6">
          TRAMO <span className="font-semibold">NORTE</span>
        </h1>

        <p className="max-w-2xl text-zinc-600 text-lg leading-relaxed mb-10">
          Estudio de arquitectura contemporánea enfocado en diseño,
          visualización arquitectónica, BIM y digitalización técnica.
        </p>

        <div className="flex gap-4 flex-wrap justify-center">
          <button className="px-8 py-4 rounded-2xl bg-black text-white hover:opacity-80 transition">
            Ver Proyectos
          </button>

          <button className="px-8 py-4 rounded-2xl border border-zinc-300 hover:bg-zinc-100 transition">
            Contacto
          </button>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        
        <div className="mb-20">
          <p className="uppercase tracking-[0.3em] text-sm text-zinc-500 mb-4">
            Servicios
          </p>

          <h2 className="text-5xl font-light tracking-tight">
            Soluciones técnicas y visuales
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="p-10 rounded-[2rem] border border-zinc-200">
            <h3 className="text-2xl mb-6">Modelado BIM</h3>

            <p className="text-zinc-600 leading-relaxed">
              Desarrollo de modelos BIM en Revit,
              documentación técnica y coordinación multidisciplinaria.
            </p>
          </div>

          <div className="p-10 rounded-[2rem] border border-zinc-200">
            <h3 className="text-2xl mb-6">
              Visualización Arquitectónica
            </h3>

            <p className="text-zinc-600 leading-relaxed">
              Renderizado hiperrealista, animación 3D y representación visual.
            </p>
          </div>

          <div className="p-10 rounded-[2rem] border border-zinc-200">
            <h3 className="text-2xl mb-6">
              As-Built & Escaneo 3D
            </h3>

            <p className="text-zinc-600 leading-relaxed">
              Levantamientos técnicos, nubes de puntos y digitalización industrial.
            </p>
          </div>

        </div>
      </section>

      {/* PROYECTOS */}
      <section className="bg-zinc-100 py-32 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="mb-20">
            <p className="uppercase tracking-[0.3em] text-sm text-zinc-500 mb-4">
              Proyectos
            </p>

            <h2 className="text-5xl font-light tracking-tight">
              Arquitectura contemporánea
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-zinc-300">
              <img
                src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1600&auto=format&fit=crop"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-zinc-300">
              <img
                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-zinc-300">
              <img
                src="https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop"
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section className="bg-black text-white py-32 px-6 text-center">

        <p className="uppercase tracking-[0.3em] text-sm text-zinc-500 mb-6">
          Contacto
        </p>

        <h2 className="text-5xl font-light tracking-tight mb-8">
          Construyamos algo juntos.
        </h2>

        <p className="max-w-2xl mx-auto text-zinc-400 leading-relaxed mb-10">
          Disponible para colaboración en arquitectura,
          BIM, visualización y proyectos técnicos.
        </p>

        <div className="space-y-3 text-zinc-300">
          <p>contacto@tramonorte.cl</p>
          <p>Antofagasta · Chile</p>
        </div>

      </section>

    </main>
  )
}
