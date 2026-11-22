import { TESTIMONIOS } from "../data/contenido.js";
import Seccion from "./ui/Seccion.jsx";

// Iniciales para el avatar: "Lucía M." → "LM".
function iniciales(nombre) {
  return nombre
    .split(" ")
    .map((parte) => parte[0])
    .join("");
}

export default function Testimonios() {
  return (
    <Seccion id="testimonios" antetitulo="Testimonios" titulo="Lo que cuentan quienes ya han pasado por aquí">
      <ul className="grid gap-6 md:grid-cols-3">
        {TESTIMONIOS.map(({ texto, nombre, rol }) => (
          <li key={nombre}>
            {/* figure + blockquote + figcaption: la forma semántica de una cita con autor. */}
            <figure className="flex h-full flex-col rounded-tarjeta border border-slate-200 bg-white p-6 dark:border-tinta-700 dark:bg-tinta-800">
              <blockquote className="text-slate-700 dark:text-slate-300">
                <p>«{texto}»</p>
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-3 pt-6">
                <span
                  aria-hidden="true"
                  className="grid size-11 place-items-center rounded-full bg-linear-to-br from-ataque-600 to-defensa-600 font-bold text-white"
                >
                  {iniciales(nombre)}
                </span>
                <span>
                  <span className="block font-semibold text-slate-900 dark:text-white">{nombre}</span>
                  <span className="block text-sm text-slate-600 dark:text-slate-400">{rol}</span>
                </span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </Seccion>
  );
}
