import Cabecera from "./components/Cabecera.jsx";
import Hero from "./components/Hero.jsx";
import Laboratorios from "./components/Laboratorios.jsx";
import Metodo from "./components/Metodo.jsx";
import Planes from "./components/Planes.jsx";
import Rutas from "./components/Rutas.jsx";

export default function App() {
  return (
    <>
      {/* Enlace para saltar la navegación con el teclado: invisible hasta
          que recibe el foco (sr-only → focus:not-sr-only). */}
      <a
        href="#contenido"
        className="sr-only z-50 rounded-lg bg-purpura-600 px-4 py-2 text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Saltar al contenido
      </a>
      <Cabecera />
      <main id="contenido">
        <Hero />
        <Rutas />
        <Metodo />
        <Laboratorios />
        <Planes />
      </main>
    </>
  );
}
