import { useTema } from "../hooks/useTema.js";

// Botón de solo icono: sin texto visible, así que lleva aria-label
// (si no, el lector de pantalla diría solo «botón»).
export default function BotonTema() {
  const { oscuro, alternar } = useTema();

  return (
    <button
      type="button"
      onClick={alternar}
      aria-label={oscuro ? "Activar modo claro" : "Activar modo oscuro"}
      className="grid size-11 cursor-pointer place-items-center rounded-full border border-slate-300 text-slate-700 transition-colors hover:bg-slate-200 dark:border-tinta-700 dark:text-slate-300 dark:hover:bg-tinta-800"
    >
      {oscuro ? (
        // Sol
        <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      ) : (
        // Luna
        <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
        </svg>
      )}
    </button>
  );
}
