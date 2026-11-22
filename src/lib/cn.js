import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// cn() = clsx + tailwind-merge (U5 §10).
// - clsx junta clases y descarta las falsas: cn("a", activo && "b").
// - twMerge resuelve conflictos de Tailwind: si llegan "inline-flex" (de la
//   base del componente) y "hidden" (de fuera), deja solo la ÚLTIMA.
//   Sin esto, gana la que Tailwind escriba más abajo en el CSS, no la que
//   pasaste: así salía el botón «Empieza gratis» en móvil.
export function cn(...clases) {
  return twMerge(clsx(clases));
}
