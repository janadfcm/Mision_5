import { ENLACES } from "../data/contenido.js";
import Logo from "./Logo.jsx";

export default function Pie() {
  return (
    <footer className="border-t border-slate-200 dark:border-tinta-700">
      {/* Flex en columna en móvil y en fila desde md. */}
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 md:flex-row md:justify-between lg:px-8">
        <div className="max-w-xs">
          <Logo />
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
            Academia de hacking ético. Solo en entornos propios o con autorización por escrito.
          </p>
        </div>
        <nav aria-label="Pie de página">
          <ul className="grid grid-cols-2 gap-x-10 gap-y-3 text-sm">
            {ENLACES.map(({ href, texto }) => (
              <li key={href}>
                <a href={href} className="rounded hover:text-purpura-700 hover:underline dark:hover:text-purpura-300">
                  {texto}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <p className="border-t border-slate-200 px-4 py-6 text-center text-sm text-slate-600 dark:border-tinta-700 dark:text-slate-400">
        we_are_root es un producto inventado: landing de la Misión 5 de Programación Web I (U-tad, 2026-27).
      </p>
    </footer>
  );
}
