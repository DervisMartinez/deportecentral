"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
      className={`fixed top-0 z-50 flex justify-between items-center px-gutter w-full h-16 bg-surface dark:bg-surface-container border-b border-outline-variant dark:border-outline transition-shadow ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <Link href="/" className="flex items-center gap-4">
        <Image
          alt="Deporte Central Logo"
          className="h-10 w-10 object-contain"
          src="/DC-removebg.png"
          width={40}
          height={40}
        />
        <span className="font-headline-md text-headline-md font-bold text-primary dark:text-on-surface">
          DEPORTE CENTRAL
        </span>
      </Link>
      <nav className="hidden md:flex gap-8 items-center h-full">
        <Link
          className="text-primary dark:text-on-surface hover:text-primary-container dark:hover:text-primary-fixed transition-colors font-label-bold text-label-bold"
          href="/"
        >
          Inicio
        </Link>
        <Link
          className="text-secondary dark:text-secondary-fixed hover:text-primary-container dark:hover:text-primary-fixed transition-colors font-label-bold text-label-bold"
          href="/#coberturas"
        >
          Coberturas
        </Link>
        <Link
          className="text-secondary dark:text-secondary-fixed hover:text-primary-container dark:hover:text-primary-fixed transition-colors font-label-bold text-label-bold"
          href="/#radio"
        >
          Radio
        </Link>
        <Link
          className="text-secondary dark:text-secondary-fixed hover:text-primary-container dark:hover:text-primary-fixed transition-colors font-label-bold text-label-bold"
          href="/nosotros"
        >
          Nosotros
        </Link>
      </nav>
      <div className="flex items-center gap-4">
        <a 
          href="https://www.instagram.com/dctv.ve/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-primary dark:text-on-surface cursor-pointer hover:opacity-80 flex items-center"
          title="Síguenos en Instagram"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
        </a>
        <button className="material-symbols-outlined text-primary dark:text-on-surface cursor-pointer active:opacity-80">
          search
        </button>
        <button className="md:hidden material-symbols-outlined text-primary dark:text-on-surface cursor-pointer active:opacity-80">
          menu
        </button>
      </div>
    </header>
  );
}
