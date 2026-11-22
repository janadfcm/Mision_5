import { CIFRAS } from "../data/contenido.js";
import Boton from "./ui/Boton.jsx";

export default function Hero() {
  return (
    // Degradado de rojo (izquierda) a azul (derecha): la idea de la marca.
    // En oscuro, los mismos colores muy rebajados (/10) para no deslumbrar.
    <section
      id="inicio"
      aria-labelledby="inicio-titulo"
      className="bg-linear-to-r from-ataque-50 via-papel to-defensa-50 dark:from-ataque-600/10 dark:via-tinta-950 dark:to-defensa-600/10"
    >
      {/* Grid: en móvil, una columna (texto y luego terminal);
          desde lg, dos columnas una al lado de la otra. */}
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 md:py-seccion lg:grid-cols-2 lg:px-8">
        {/* motion-safe: solo se anima si el usuario NO ha pedido reducir el
            movimiento en su sistema (prefers-reduced-motion). */}
        <div className="motion-safe:animate-aparecer">
          <p className="inline-flex items-center gap-2 rounded-full border border-purpura-600/30 bg-white/70 px-3 py-1 font-mono text-xs font-semibold text-purpura-700 dark:bg-tinta-800 dark:text-purpura-300">
            <span aria-hidden="true" className="size-2 rounded-full bg-purpura-600 dark:bg-purpura-300" />
            Plazas abiertas · enero 2027
          </p>

          {/* Tamaño de letra mobile-first: 4xl en móvil, 5xl desde sm, 6xl desde lg. */}
          <h1 id="inicio-titulo" className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
            Aprende a <span className="text-ataque-700 dark:text-ataque-300">atacar</span>.
            <br />
            Aprende a <span className="text-defensa-700 dark:text-defensa-300">defender</span>.
          </h1>

          <p className="mt-6 max-w-xl text-lg text-slate-600 dark:text-slate-400">
            we_are_root es una academia de hacking ético con laboratorios propios: practicas ataques reales contra máquinas
            preparadas para ello y ves, en directo, cómo los detecta el equipo de defensa.
          </p>

          {/* Flex con wrap: los botones van en fila y bajan de línea si no caben. */}
          <div className="mt-8 flex flex-wrap gap-3">
            <Boton href="#rutas" variante="ataque">
              Ruta Red Team
            </Boton>
            <Boton href="#rutas" variante="defensa">
              Ruta Blue Team
            </Boton>
          </div>

          {/* Cifras: grid de 3 columnas iguales en todos los tamaños. */}
          <dl className="mt-10 grid max-w-md grid-cols-3 gap-4">
            {CIFRAS.map(({ valor, etiqueta }) => (
              // flex-col + order-first: en el HTML va primero la etiqueta (dt,
              // como manda <dl>), pero en pantalla se ve antes la cifra.
              <div key={etiqueta} className="flex flex-col">
                <dt className="text-sm text-slate-600 dark:text-slate-400">{etiqueta}</dt>
                <dd className="order-first text-2xl font-bold text-slate-900 dark:text-white">{valor}</dd>
              </div>
            ))}
          </dl>
        </div>

        <Terminal />
      </div>
    </section>
  );
}

// Ilustración: la misma acción vista por los dos equipos. Es una imagen
// hecha con texto, así que para el lector de pantalla es role="img" con
// una descripción, en vez de leer línea a línea.
function Terminal() {
  return (
    <div
      role="img"
      aria-label="Terminal de ejemplo: un escaneo de puertos desde el lado de ataque y la alerta que genera en el lado de defensa"
      className="overflow-hidden rounded-tarjeta border border-tinta-700 bg-tinta-950 font-mono text-sm shadow-2xl shadow-purpura-600/20 motion-safe:animate-aparecer-tarde"
    >
      <div className="flex items-center gap-2 border-b border-tinta-700 px-4 py-3">
        <span className="size-3 rounded-full bg-ataque-600" />
        <span className="size-3 rounded-full bg-purpura-600" />
        <span className="size-3 rounded-full bg-defensa-600" />
        <span className="ml-auto text-xs text-slate-400">lab-07 · red interna</span>
      </div>
      <div className="space-y-1 p-5 text-slate-300">
        <p className="text-ataque-300">[ataque] $ nmap -sV 10.10.0.5</p>
        <p>22/tcp open ssh OpenSSH 9.6</p>
        <p>80/tcp open http nginx 1.27</p>
        <p className="pt-3 text-defensa-300">[defensa] SIEM · alerta media</p>
        <p>Escaneo de puertos desde 10.10.0.66</p>
        <p>Regla: 41 conexiones en 3 s → bloqueada</p>
        <p className="pt-3 text-purpura-300">[purple] ¿Qué la habría evitado? → anota y repite</p>
      </div>
    </div>
  );
}
