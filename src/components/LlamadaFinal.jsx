import Boton from "./ui/Boton.jsx";

export default function LlamadaFinal() {
  return (
    <section aria-labelledby="final-titulo" className="px-4 py-16 sm:px-6 md:py-seccion lg:px-8">
      {/* Banda de marca: rojo → púrpura → azul. Texto blanco sobre los tres
          tonos 600: contraste ≥ 5,3:1 en cualquier punto del degradado.
          Es igual en los dos temas: ya es oscura. */}
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 rounded-tarjeta bg-linear-to-r from-ataque-600 via-purpura-600 to-defensa-600 p-8 text-white md:flex-row md:items-center md:justify-between md:p-12">
        <div className="max-w-xl">
          <h2 id="final-titulo" className="text-3xl font-bold tracking-tight md:text-4xl">
            La mejor defensa es entender el ataque.
          </h2>
          <p className="mt-3 text-lg text-white/90">Empieza con los cinco laboratorios gratuitos. Sin tarjeta.</p>
        </div>
        <Boton href="#planes" variante="claro" className="shrink-0">
          Crear cuenta gratis
        </Boton>
      </div>
    </section>
  );
}
