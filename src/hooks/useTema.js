import { useEffect, useState } from "react";

// Tema claro/oscuro. El valor inicial lo ha puesto ya el script de
// index.html en <html class="dark">, así que aquí solo se LEE.
export function useTema() {
  const [oscuro, setOscuro] = useState(() => document.documentElement.classList.contains("dark"));

  // Sincroniza React con algo de FUERA de React (la clase de <html> y
  // localStorage): para eso sirve useEffect.
  useEffect(() => {
    document.documentElement.classList.toggle("dark", oscuro);
    try {
      localStorage.setItem("tema", oscuro ? "oscuro" : "claro");
    } catch {
      /* modo privado o almacenamiento bloqueado: el tema no se recuerda */
    }
  }, [oscuro]);

  const alternar = () => setOscuro((actual) => !actual);
  return { oscuro, alternar };
}
