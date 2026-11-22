// Botón reutilizable (patrón de la U5 §10): las clases se escriben UNA vez
// aquí y cada uso elige su variante por props, en vez de repetir 10 clases
// o usar @apply.
const BASE =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 font-semibold transition-colors cursor-pointer";

const VARIANTES = {
  ataque: "bg-ataque-600 text-white hover:bg-ataque-700",
  defensa: "bg-defensa-600 text-white hover:bg-defensa-700",
  purpura: "bg-purpura-600 text-white hover:bg-purpura-700",
  contorno:
    "border border-slate-300 text-slate-800 hover:border-slate-500 dark:border-tinta-700 dark:text-slate-100 dark:hover:border-slate-400",
};

// Con href es un enlace (<a>) con aspecto de botón: lleva a otra parte de
// la página. Sin href es un <button> de verdad.
export default function Boton({ href, variante = "purpura", className = "", children, ...props }) {
  const clases = `${BASE} ${VARIANTES[variante]} ${className}`;
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
