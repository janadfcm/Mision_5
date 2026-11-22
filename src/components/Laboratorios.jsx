import { LABORATORIOS } from "../data/contenido.js";
import Seccion from "./ui/Seccion.jsx";

// La dificultad se dice con TEXTO y con puntos (●●○), no solo con color.
const DIFICULTAD = {
  1: { texto: "Fácil", clases: "bg-defensa-50 text-defensa-700 dark:bg-defensa-600/15 dark:text-defensa-300" },
  2: { texto: "Media", clases: "bg-purpura-50 text-purpura-700 dark:bg-purpura-600/15 dark:text-purpura-300" },
  3: { texto: "Difícil", clases: "bg-ataque-50 text-ataque-700 dark:bg-ataque-600/15 dark:text-ataque-300" },
};

export default function Laboratorios() {
  return (
    <Seccion
      id="laboratorios"
      antetitulo="Laboratorios"
      titulo="Máquinas hechas para romperse"
      intro="Cada laboratorio es un entorno aislado y autorizado. Aquí puedes atacar sin miedo; fuera, solo con permiso."
    >
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {LABORATORIOS.map((lab) => {
          const nivel = DIFICULTAD[lab.dificultad];
          return (
            <li key={lab.id}>
              {/* group: al pasar el ratón (o llegar con Tab) por TODA la
                  tarjeta, la flecha de dentro se mueve (group-hover /
                  group-focus-visible). */}
              <a
                href="#planes"
                className="group flex h-full flex-col rounded-tarjeta border border-slate-200 bg-white p-6 transition-shadow hover:shadow-lg dark:border-tinta-700 dark:bg-tinta-800"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-xs text-slate-600 dark:text-slate-400">
                    {lab.id} · {lab.categoria}
                  </span>
                  <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${nivel.clases}`}>
                    <span aria-hidden="true">{"●".repeat(lab.dificultad) + "○".repeat(3 - lab.dificultad)} </span>
                    {nivel.texto}
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-bold text-slate-900 dark:text-white">{lab.nombre}</h3>
                <p className="mt-2 text-slate-600 dark:text-slate-400">{lab.texto}</p>
                <span className="mt-auto pt-6 font-semibold text-purpura-700 dark:text-purpura-300">
                  Probar laboratorio{" "}
                  <span
                    aria-hidden="true"
                    className="inline-block transition-transform group-hover:translate-x-1 group-focus-visible:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </Seccion>
  );
}
