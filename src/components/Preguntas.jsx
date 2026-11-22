import { PREGUNTAS } from "../data/contenido.js";
import Seccion from "./ui/Seccion.jsx";

export default function Preguntas() {
  return (
    <Seccion
      id="preguntas"
      antetitulo="Preguntas frecuentes"
      titulo="Antes de que lo preguntes"
      className="bg-white dark:bg-tinta-800/40"
    >
      {/* <details>/<summary>: un desplegable nativo, accesible con teclado
          sin escribir JavaScript. max-w-3xl: líneas de lectura cómodas. */}
      <div className="max-w-3xl divide-y divide-slate-200 dark:divide-tinta-700">
        {PREGUNTAS.map(({ pregunta, respuesta }) => (
          <details key={pregunta} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded text-lg font-semibold text-slate-900 dark:text-white [&::-webkit-details-marker]:hidden">
              {pregunta}
              {/* group-open: el + gira y se convierte en × al abrir. */}
              <span
                aria-hidden="true"
                className="text-2xl text-purpura-700 transition-transform group-open:rotate-45 dark:text-purpura-300"
              >
                +
              </span>
            </summary>
            <p className="mt-3 text-slate-600 dark:text-slate-400">{respuesta}</p>
          </details>
        ))}
      </div>
    </Seccion>
  );
}
