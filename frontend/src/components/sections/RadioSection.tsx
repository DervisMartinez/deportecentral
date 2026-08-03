import Image from "next/image";

export default function RadioSection() {
  return (
    <section className="py-section-padding bg-surface-container-low px-gutter" id="radio">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12 bg-white rounded-xl overflow-hidden border border-outline-variant p-8 md:p-12">
          <div className="w-full md:w-1/3">
            <div className="relative group rounded-lg overflow-hidden aspect-square border border-outline-variant">
              <Image
                src="/BEYOND RADIO PORTADA.png"
                alt="Beyond Radio Portada"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-white/90 p-2 rounded-lg shadow-sm">
                <Image 
                  src="/BEYOND RADIO logo.png" 
                  alt="Beyond Radio Logo" 
                  width={60} 
                  height={60} 
                  className="object-contain" 
                />
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/3 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-error opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-error"></span>
              </span>
              <span className="text-error font-label-bold uppercase tracking-widest text-label-sm">
                Transmitiendo En Vivo
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-lg mb-4">
              Beyond Radio Vzla
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
              Sintoniza nuestra transmisión oficial para el mejor análisis
              deportivo, entrevistas exclusivas y narraciones apasionadas. No te
              pierdas ni un minuto de la acción, escuchanos directamente aquí.
            </p>
            
            <div className="w-full mt-2 rounded-lg overflow-hidden shadow-sm border border-outline-variant bg-surface">
              <iframe 
                src="https://zeno.fm/player/beyond-radio-vzla" 
                width="100%" 
                height="200" 
                frameBorder="0" 
                scrolling="no"
                title="Reproductor Beyond Radio Vzla"
                className="w-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
