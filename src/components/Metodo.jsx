import { PASOS } from "../data/contenido.js";
import Seccion from "./ui/Seccion.jsx";

export default function Metodo() {
  return (
    <Seccion
      id="metodo"
      antetitulo="Método"
      titulo="Cuatro pasos, siempre en este orden"
      className="bg-white dark:bg-tinta-800/40"
    >
      {/* <ol>: el orden importa. Grid de 1, 2 (sm) o 4 (lg) columnas. */}
      <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {PASOS.map(({ titulo, texto }, i) => (
          <li key={titulo} className="border-l-2 border-purpura-600 pl-5 dark:border-purpura-300">
            <p className="font-mono text-sm font-semibold text-purpura-700 dark:text-purpura-300">
              Paso {String(i + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-2 text-xl font-bold text-slate-900 dark:text-white">{titulo}</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-400">{texto}</p>
          </li>
        ))}
      </ol>
    </Seccion>
  );
}
