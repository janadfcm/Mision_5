// Escudo partido: mitad roja (ataque) y mitad azul (defensa).
export default function Logo() {
  return (
    <a href="#inicio" className="flex items-center gap-2 rounded-lg font-bold tracking-tight text-slate-900 dark:text-white">
      <svg aria-hidden="true" viewBox="0 0 32 32" className="size-8">
        <path d="M16 2 4 6.5v8.2C4 22 9.2 27.6 16 30Z" className="fill-ataque-600" />
        <path d="M16 2l12 4.5v8.2C28 22 22.8 27.6 16 30Z" className="fill-defensa-600" />
        <path d="M11 16.5l3.5 3.5L21 12.5" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
      <span className="text-xl">Atalaya</span>
    </a>
  );
}
