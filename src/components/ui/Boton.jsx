import { cn } from "../../lib/cn.js";

// Botón reutilizable (patrón de la U5 §10): las clases se escriben UNA vez
// aquí y cada uso elige su variante por props, en vez de repetir 10 clases
// o usar @apply.
const BASE =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-5 py-3 font-semibold transition-colors cursor-pointer";

const VARIANTES = {
  ataque: "bg-ataque-600 text-white hover:bg-ataque-700",
  defensa: "bg-defensa-600 text-white hover:bg-defensa-700",
  purpura: "bg-purpura-600 text-white hover:bg-purpura-700",
  // Para usar sobre fondos de color (la banda final).
  claro: "bg-white text-purpura-700 hover:bg-purpura-50",
  contorno:
    "border border-slate-300 text-slate-800 hover:border-slate-500 dark:border-tinta-700 dark:text-slate-100 dark:hover:border-slate-400",
};

// Con href es un enlace (<a>) con aspecto de botón: lleva a otra parte de
// la página. Sin href es un <button> de verdad.
export default function Boton({ href, variante = "purpura", className, children, ...props }) {
  // cn: el className de fuera va el ÚLTIMO y gana en los conflictos
  // (hidden frente a inline-flex, px-4 frente a px-5…).
  const clases = cn(BASE, VARIANTES[variante], className);
  if (href) {
    return (
      <a href={href} className={clases} {...props}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" className={clases} {...props}>
      {children}
    </button>
  );
}
