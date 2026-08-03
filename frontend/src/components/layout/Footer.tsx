import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-section-padding px-gutter flex flex-col md:flex-row justify-between items-center gap-base bg-primary-container dark:bg-black text-on-primary-fixed dark:text-on-primary-fixed">
      <div className="flex flex-col items-center md:items-start gap-4">
        <span className="font-headline-md text-headline-md text-surface-container-lowest font-bold">
          DEPORTE CENTRAL
        </span>
        <p className="font-body-md text-body-md text-secondary-fixed-dim max-w-sm text-center md:text-left">
          © 2024 Deporte Central. Todos los derechos reservados.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        <Link
          className="text-secondary-fixed-dim hover:text-tertiary-fixed transition-colors font-body-md text-body-md"
          href="/#coberturas"
        >
          Liga FUTVE
        </Link>
        <Link
          className="text-secondary-fixed-dim hover:text-tertiary-fixed transition-colors font-body-md text-body-md"
          href="/#coberturas"
        >
          LVBP
        </Link>
        <Link
          className="text-secondary-fixed-dim hover:text-tertiary-fixed transition-colors font-body-md text-body-md"
          href="/#radio"
        >
          Radio En Vivo
        </Link>
        <Link
          className="text-secondary-fixed-dim hover:text-tertiary-fixed transition-colors font-body-md text-body-md"
          href="/nosotros"
        >
          Nosotros
        </Link>
      </div>
      <div className="flex gap-4">
        <a 
          href="https://www.instagram.com/dctv.ve/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full border border-secondary-fixed-dim flex items-center justify-center text-surface-container-lowest hover:border-tertiary-fixed hover:text-tertiary-fixed transition-all cursor-pointer"
          title="Instagram"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
        </a>
        <button className="w-10 h-10 rounded-full border border-secondary-fixed-dim flex items-center justify-center text-surface-container-lowest hover:border-tertiary-fixed hover:text-tertiary-fixed transition-all cursor-pointer">
          <span className="material-symbols-outlined text-lg">public</span>
        </button>
        <button className="w-10 h-10 rounded-full border border-secondary-fixed-dim flex items-center justify-center text-surface-container-lowest hover:border-tertiary-fixed hover:text-tertiary-fixed transition-all cursor-pointer">
          <span className="material-symbols-outlined text-lg">mail</span>
        </button>
      </div>
    </footer>
  );
}
