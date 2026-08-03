"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 flex justify-between items-center px-gutter w-full h-16 bg-surface border-b border-outline-variant dark:border-outline transition-shadow ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="flex items-center gap-4">
        <Image
          alt="Deporte Central Logo"
          className="h-10 w-10 object-contain"
          src="/DC-removebg.png"
          width={40}
          height={40}
        />
        <span className="font-headline-md text-headline-md font-bold text-primary dark:text-primary">
          DEPORTE CENTRAL
        </span>
      </div>
      <nav className="hidden md:flex gap-8 items-center h-full">
        <a
          className="text-primary dark:text-primary border-b-2 border-primary pb-1 font-label-bold text-label-bold"
          href="#"
        >
          Inicio
        </a>
        <a
          className="text-secondary dark:text-secondary-fixed hover:text-primary-container transition-colors font-label-bold text-label-bold"
          href="#coberturas"
        >
          Coberturas
        </a>
        <a
          className="text-secondary dark:text-secondary-fixed hover:text-primary-container transition-colors font-label-bold text-label-bold"
          href="#radio"
        >
          Radio
        </a>
        <a
          className="text-secondary dark:text-secondary-fixed hover:text-primary-container transition-colors font-label-bold text-label-bold"
          href="#nosotros"
        >
          Nosotros
        </a>
      </nav>
      <div className="flex items-center gap-4">
        <button className="material-symbols-outlined text-primary cursor-pointer active:opacity-80">
          search
        </button>
        <button className="md:hidden material-symbols-outlined text-primary cursor-pointer active:opacity-80">
          menu
        </button>
      </div>
    </header>
  );
}
