export default function Hero() {
  return (
    <section className="relative w-full h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-primary-container/40 z-10"></div>
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-1000 hover:scale-105"
          data-alt="A cinematic, high-speed action shot of a professional football match in a grand stadium under bright floodlights. The camera captures a player in mid-air during a dynamic strike, with a subtle motion blur effect emphasizing the intensity of the game. The lighting is dramatic, highlighting the textures of the jersey and the grass. The overall atmosphere is prestigious and energetic, dominated by deep navy blues and sharp contrasts of light."
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCFzpF6mTctzFKbARIJZMJr8pbcCJcrmXdkvQwmzo_-sz6Un-YZGpnlB--Y42XkDEdFhLhzBxJ2hy0vGj5xixC-5O3GhhcaVikYX7BLk5t4cdj7KJDxIQKwZjBeIF58Xhc9zFxeFqT0AtGZPiguFGJm40_8FLYrG_YzmQKTeA4PVdgl9JaklqhgbEQwO-rFqDGh_Zr24a2I33KzStk4e1pm1sqcbNlofObC4O2GSXcvRXqie-BKMkca6g')",
          }}
        ></div>
      </div>
      <div className="relative z-20 px-gutter container mx-auto text-white">
        <div className="max-w-3xl">
          <span className="inline-block px-3 py-1 bg-on-tertiary-container text-white font-label-bold rounded-lg mb-6 tracking-wider uppercase text-label-sm">
            Noticias de última hora
          </span>
          <h1 className="font-display-lg text-display-lg text-shadow-strong mb-6 leading-tight">
            Deporte Central: El Corazón del Deporte
          </h1>
          <p className="font-body-lg text-body-lg text-shadow-strong mb-8 opacity-90">
            Análisis riguroso, cobertura en vivo y la pasión del deporte
            venezolano e internacional en un solo lugar.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              className="px-8 py-4 bg-white text-primary-container font-label-bold rounded-lg hover:bg-opacity-90 transition-all flex items-center gap-2"
              href="#coberturas"
            >
              Explorar Coberturas
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
            <a
              className="px-8 py-4 border-2 border-white text-white font-label-bold rounded-lg hover:bg-white hover:text-primary-container transition-all flex items-center gap-2"
              href="#radio"
            >
              <span className="material-symbols-outlined">radio</span>
              Escuchar Radio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
