export default function Footer() {
  return (
    <footer className="w-full py-section-padding px-gutter flex flex-col md:flex-row justify-between items-center gap-base bg-primary-container dark:bg-primary-container text-on-primary-fixed dark:text-on-primary-fixed">
      <div className="flex flex-col items-center md:items-start gap-4">
        <span className="font-headline-md text-headline-md text-surface-container-lowest font-bold">
          DEPORTE CENTRAL
        </span>
        <p className="font-body-md text-body-md text-secondary-fixed-dim max-w-sm text-center md:text-left">
          © 2024 Deporte Central. Todos los derechos reservados.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        <a
          className="text-secondary-fixed-dim hover:text-tertiary-fixed transition-colors font-body-md text-body-md"
          href="#"
        >
          Liga FUTVE
        </a>
        <a
          className="text-secondary-fixed-dim hover:text-tertiary-fixed transition-colors font-body-md text-body-md"
          href="#"
        >
          LVBP
        </a>
        <a
          className="text-secondary-fixed-dim hover:text-tertiary-fixed transition-colors font-body-md text-body-md"
          href="#"
        >
          Radio En Vivo
        </a>
        <a
          className="text-secondary-fixed-dim hover:text-tertiary-fixed transition-colors font-body-md text-body-md"
          href="#"
        >
          Contacto
        </a>
        <a
          className="text-secondary-fixed-dim hover:text-tertiary-fixed transition-colors font-body-md text-body-md"
          href="#"
        >
          Privacidad
        </a>
      </div>
      <div className="flex gap-4">
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
