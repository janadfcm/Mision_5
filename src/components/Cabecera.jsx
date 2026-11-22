import { useState } from "react";
import { ENLACES } from "../data/contenido.js";
import BotonTema from "./BotonTema.jsx";
import Logo from "./Logo.jsx";
import Boton from "./ui/Boton.jsx";

export default function Cabecera() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const cerrarMenu = () => setMenuAbierto(false);

  return (
    // sticky top-0: se queda arriba al hacer scroll. Fondo semitransparente
    // (/85) + backdrop-blur: se intuye el contenido que pasa por debajo.
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-papel/85 backdrop-blur dark:border-tinta-700 dark:bg-tinta-950/85">
      {/* Flexbox: es UNA fila (logo | enlaces | acciones) alineada en vertical. */}
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Logo />

        {/* Enlaces: ocultos en móvil (hidden) y en fila desde tablet (md:flex). */}
        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex gap-6 text-sm font-medium">
            {ENLACES.map(({ href, texto }) => (
              <li key={href}>
                <a href={href} className="rounded transition-colors hover:text-purpura-700 dark:hover:text-purpura-300">
                  {texto}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <BotonTema />
          {/* La llamada a la acción solo cabe a partir de sm. */}
          <Boton href="#planes" variante="purpura" className="hidden px-4 py-2 text-sm sm:inline-flex">
            Empieza gratis
          </Boton>
          {/* Botón de menú: solo en móvil. aria-expanded dice si está abierto. */}
          <button
            type="button"
            onClick={() => setMenuAbierto((abierto) => !abierto)}
            aria-expanded={menuAbierto}
            aria-controls="menu-movil"
            className="grid size-11 cursor-pointer place-items-center rounded-full border border-slate-300 md:hidden dark:border-tinta-700"
          >
            <span className="sr-only">{menuAbierto ? "Cerrar menú" : "Abrir menú"}</span>
            <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2">
              {menuAbierto ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Menú móvil: en columna, solo cuando está abierto y solo por debajo de md. */}
      {menuAbierto && (
        <nav id="menu-movil" aria-label="Principal (móvil)" className="border-t border-slate-200 md:hidden dark:border-tinta-700">
          <ul className="mx-auto flex max-w-6xl flex-col px-4 py-2 sm:px-6">
            {ENLACES.map(({ href, texto }) => (
              <li key={href}>
                <a href={href} onClick={cerrarMenu} className="block rounded py-3 font-medium">
                  {texto}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
