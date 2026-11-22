import { PLANES } from "../data/contenido.js";
import Boton from "./ui/Boton.jsx";
import Seccion from "./ui/Seccion.jsx";

export default function Planes() {
  return (
    <Seccion
      id="planes"
      antetitulo="Planes"
      titulo="Empieza gratis, sube cuando quieras"
      className="bg-white dark:bg-tinta-800/40"
    >
      {/* items-start: en escritorio cada tarjeta mide lo que su contenido;
          así la destacada, con su etiqueta, no estira a las demás. */}
      <ul className="grid items-start gap-6 lg:grid-cols-3">
        {PLANES.map((plan) => (
          <li
            key={plan.nombre}
            className={`flex flex-col rounded-tarjeta border p-8 ${
              plan.destacado
                ? "border-purpura-600 bg-purpura-50 ring-2 ring-purpura-600 dark:border-purpura-300 dark:bg-purpura-600/10 dark:ring-purpura-300"
                : "border-slate-200 bg-papel dark:border-tinta-700 dark:bg-tinta-950"
            }`}
          >
            {/* Lo destacado se dice con texto, no solo con el borde de color. */}
            {plan.destacado && (
              <p className="mb-4 w-fit rounded-full bg-purpura-600 px-3 py-1 text-xs font-semibold text-white">
                El más elegido
              </p>
            )}
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">{plan.nombre}</h3>
            <p className="mt-1 text-slate-600 dark:text-slate-400">{plan.descripcion}</p>
            <p className="mt-6 flex items-baseline gap-2">
              <span className="text-4xl font-bold text-slate-900 dark:text-white">{plan.precio}</span>
              <span className="text-slate-600 dark:text-slate-400">{plan.periodo}</span>
            </p>
            <ul className="mt-6 space-y-3">
              {plan.incluye.map((linea) => (
                <li key={linea} className="flex gap-3">
                  <span aria-hidden="true" className="text-purpura-700 dark:text-purpura-300">
                    ✓
                  </span>
                  {linea}
                </li>
              ))}
            </ul>
            <Boton href="#preguntas" variante={plan.destacado ? "purpura" : "contorno"} className="mt-8">
              {plan.boton}
            </Boton>
          </li>
        ))}
      </ul>
    </Seccion>
  );
}
