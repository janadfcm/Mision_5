import { RUTAS } from "../data/contenido.js";
import Seccion from "./ui/Seccion.jsx";

// ¡Ojo! Tailwind solo genera las clases que encuentra ESCRITAS ENTERAS en
// el código. `bg-${color}-600` no existiría en el CSS final. Por eso cada
// color tiene aquí sus clases completas.
const ESTILO = {
  ataque: {
    barra: "border-t-ataque-600",
    texto: "text-ataque-700 dark:text-ataque-300",
    fondo: "bg-ataque-50 dark:bg-ataque-600/15",
  },
  defensa: {
    barra: "border-t-defensa-600",
    texto: "text-defensa-700 dark:text-defensa-300",
    fondo: "bg-defensa-50 dark:bg-defensa-600/15",
  },
  purpura: {
    barra: "border-t-purpura-600",
    texto: "text-purpura-700 dark:text-purpura-300",
    fondo: "bg-purpura-50 dark:bg-purpura-600/15",
  },
};

export default function Rutas() {
  return (
    <Seccion
      id="rutas"
      antetitulo="Rutas de aprendizaje"
      titulo="Elige bando. Luego aprende el otro."
      intro="Tres rutas de 12 semanas. Cada una tiene su color, pero también lo dice con texto: el color nunca es la única pista."
    >
      {/* Grid de tarjetas: 1 columna en móvil, 2 desde md, 3 desde lg.
          Grid y no flex porque son tarjetas en filas Y columnas que deben
          alinearse entre sí. */}
      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {RUTAS.map((ruta) => {
          const estilo = ESTILO[ruta.color];
          return (
            <li key={ruta.id}>
              {/* h-full + flex-col: todas las tarjetas igual de altas y el
                  pie siempre abajo, aunque el texto sea más corto. */}
              <article
                className={`flex h-full flex-col rounded-tarjeta border border-t-4 border-slate-200 bg-white p-6 shadow-sm dark:border-tinta-700 dark:bg-tinta-800 ${estilo.barra}`}
              >
                <p className={`w-fit rounded-full px-3 py-1 font-mono text-xs font-semibold ${estilo.fondo} ${estilo.texto}`}>
                  {ruta.equipo}
                </p>
                <h3 className="mt-4 text-2xl font-bold text-slate-900 dark:text-white">{ruta.nombre}</h3>
                <p className="mt-2 text-slate-600 dark:text-slate-400">{ruta.descripcion}</p>

                <ul className="mt-5 space-y-2 text-sm">
                  {ruta.temas.map((tema) => (
                    <li key={tema} className="flex gap-2">
                      <span aria-hidden="true" className={estilo.texto}>
                        ▸
                      </span>
                      {tema}
                    </li>
                  ))}
                </ul>

                {/* mt-auto empuja este bloque al fondo de la tarjeta. */}
                <dl className="mt-auto grid grid-cols-2 gap-4 border-t border-slate-200 pt-5 text-sm dark:border-tinta-700">
                  <div>
                    <dt className="text-slate-600 dark:text-slate-400">Duración</dt>
                    <dd className="font-semibold text-slate-900 dark:text-white">{ruta.duracion}</dd>
                  </div>
                  <div>
                    <dt className="text-slate-600 dark:text-slate-400">Nivel</dt>
                    <dd className="font-semibold text-slate-900 dark:text-white">{ruta.nivel}</dd>
                  </div>
                </dl>
              </article>
            </li>
          );
        })}
      </ul>
    </Seccion>
  );
}
