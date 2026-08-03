export default function CoveragesSection() {
  return (
    <section className="py-section-padding bg-white px-gutter" id="coberturas">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline-xl text-headline-xl mb-4">
            Nuestras Coberturas
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Seguimos de cerca el pulso de las competiciones más importantes de
            Venezuela y Sudamérica con profesionalismo y detalle técnico.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-card-gap">
          {/* Liga FUTVE Card */}
          <div className="group relative bg-white border border-outline-variant rounded-lg overflow-hidden flex flex-col h-[500px]">
            <div className="relative h-2/3 overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: "url('/DSC_1252.jpg.jpeg')",
                }}
              ></div>
              <div className="absolute top-4 left-4">
                <span className="bg-primary-container text-white px-3 py-1 font-label-bold text-label-sm rounded uppercase">
                  Fútbol Profesional
                </span>
              </div>
            </div>
            <div className="p-8 flex flex-col justify-center h-1/3">
              <h3 className="font-headline-lg text-headline-lg mb-2">Liga FUTVE</h3>
              <p className="text-on-surface-variant line-clamp-2">
                Cobertura integral de la primera división de Venezuela. Resultados,
                tablas de posiciones y análisis táctico de cada jornada.
              </p>
              <a
                className="mt-4 flex items-center gap-2 text-primary-container font-label-bold group-hover:gap-4 transition-all"
                href="#"
              >
                Ver todas las noticias{" "}
                <span className="material-symbols-outlined">chevron_right</span>
              </a>
            </div>
          </div>
          
          {/* Copa Libertadores Card */}
          <div className="group relative bg-white border border-outline-variant rounded-lg overflow-hidden flex flex-col h-[500px]">
            <div className="relative h-2/3 overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: "url('/DSC_1477.jpg.jpeg')",
                }}
              ></div>
              <div className="absolute top-4 left-4">
                <span className="bg-primary-container text-white px-3 py-1 font-label-bold text-label-sm rounded uppercase">
                  Conmebol
                </span>
              </div>
            </div>
            <div className="p-8 flex flex-col justify-center h-1/3">
              <h3 className="font-headline-lg text-headline-lg mb-2">Copa Libertadores</h3>
              <p className="text-on-surface-variant line-clamp-2">
                El torneo más prestigioso de Sudamérica. Análisis de los equipos venezolanos y el camino hacia la gloria continental.
              </p>
              <a
                className="mt-4 flex items-center gap-2 text-primary-container font-label-bold group-hover:gap-4 transition-all"
                href="#"
              >
                Ver todas las noticias{" "}
                <span className="material-symbols-outlined">chevron_right</span>
              </a>
            </div>
          </div>

          {/* Copa Sudamericana Card */}
          <div className="group relative bg-white border border-outline-variant rounded-lg overflow-hidden flex flex-col h-[500px]">
            <div className="relative h-2/3 overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: "url('/DSC_1542.jpg.jpeg')",
                }}
              ></div>
              <div className="absolute top-4 left-4">
                <span className="bg-primary-container text-white px-3 py-1 font-label-bold text-label-sm rounded uppercase">
                  Conmebol
                </span>
              </div>
            </div>
            <div className="p-8 flex flex-col justify-center h-1/3">
              <h3 className="font-headline-lg text-headline-lg mb-2">Copa Sudamericana</h3>
              <p className="text-on-surface-variant line-clamp-2">
                Sigue cada fase de la Gran Conquista. Toda la información de los clubes en su búsqueda del trofeo continental.
              </p>
              <a
                className="mt-4 flex items-center gap-2 text-primary-container font-label-bold group-hover:gap-4 transition-all"
                href="#"
              >
                Ver todas las noticias{" "}
                <span className="material-symbols-outlined">chevron_right</span>
              </a>
            </div>
          </div>

          {/* LVBP Card */}
          <div className="group relative bg-white border border-outline-variant rounded-lg overflow-hidden flex flex-col h-[500px]">
            <div className="relative h-2/3 overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDkBkoz5_YUC7UL6sXJGSi5Uie6vYThp-T5fkkigzY4Lqernqn5nn16HbbdgOU6y_Tt8mEQnuQjsn1uaroW_m4WxzphiZJ7VFnJb7qC1h7I9hn9W3XlMqQiGkNIziKEWq0yLzlG8rha_vZGYww8GrAteacC_kqo3dKrwgUwDXyuzr-YDYwcqqzt9GhuW1dcL-U42xfZgTls9yOD1WHVTcXxT6JT1kwQ-LQf8C5A95Tw8gdx-mg-vy_EWg')",
                }}
              ></div>
              <div className="absolute top-4 left-4">
                <span className="bg-primary-container text-white px-3 py-1 font-label-bold text-label-sm rounded uppercase">
                  Béisbol Profesional
                </span>
              </div>
            </div>
            <div className="p-8 flex flex-col justify-center h-1/3">
              <h3 className="font-headline-lg text-headline-lg mb-2">LVBP</h3>
              <p className="text-on-surface-variant line-clamp-2">
                La emoción del diamante venezolano. Seguimiento detallado de la
                pelota invernal, rosters, estadísticas y cronogramas de juegos.
              </p>
              <a
                className="mt-4 flex items-center gap-2 text-primary-container font-label-bold group-hover:gap-4 transition-all"
                href="#"
              >
                Ver todas las noticias{" "}
                <span className="material-symbols-outlined">chevron_right</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
