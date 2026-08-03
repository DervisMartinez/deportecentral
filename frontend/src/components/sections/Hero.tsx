"use client";
import { useState, useEffect } from "react";

const carouselImages = [
  "/carrusel/1.jpeg",
  "/carrusel/2.jpeg",
  "/carrusel/3.jpeg",
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Background carousel */}
        {carouselImages.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out ${
              index === currentImage ? "opacity-100 scale-105" : "opacity-0 scale-100"
            }`}
            style={{ backgroundImage: `url('${src}')` }}
          />
        ))}
        {/* Blue gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-container/80 via-primary-container/40 to-transparent z-10"></div>
      </div>
      <div className="relative z-20 px-gutter container mx-auto text-white">
        <div className="max-w-3xl">
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
