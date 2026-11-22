// Envoltorio común a todas las secciones: mismo ancho máximo, mismos
// márgenes laterales y la misma separación vertical (token py-seccion
// desde md; en móvil, py-16, que ocupa menos alto).
export default function Seccion({ id, antetitulo, titulo, intro, className = "", children }) {
  const idTitulo = `${id}-titulo`;
  return (
    <section id={id} aria-labelledby={idTitulo} className={className}>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-seccion lg:px-8">
        <header className="mb-10 max-w-2xl md:mb-14">
          <p className="font-mono text-sm font-semibold tracking-wider text-purpura-700 uppercase dark:text-purpura-300">
            {antetitulo}
          </p>
          <h2 id={idTitulo} className="mt-2 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl dark:text-white">
            {titulo}
          </h2>
          {intro && <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">{intro}</p>}
        </header>
        {children}
      </div>
    </section>
  );
}
