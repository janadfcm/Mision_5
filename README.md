# Atalaya · Academia de hacking ético

## Descripción

Landing page de **Atalaya**, una academia de hacking ético inventada. Está hecha con **React 19 + Vite** y **Tailwind CSS v4**: se adapta del móvil al escritorio, tiene modo oscuro y su sistema de diseño está definido en `@theme`.

La idea visual sale del propio tema: **rojo para el ataque (Red Team), azul para la defensa (Blue Team) y púrpura donde los dos se encuentran (Purple Team)**. Esos tres colores son la marca: el logo es un escudo partido en rojo y azul, el degradado del *hero* va de rojo a azul, y el morado se usa para todo lo que no es de ningún bando (el foco del teclado, los antetítulos, el plan destacado). La tipografía es *Space Grotesk* para el texto y *JetBrains Mono* para los detalles «de terminal».

Secciones de la página:
- cabecera fija con menú móvil y botón de tema;
- *hero* con una terminal de ejemplo;
- tres rutas de aprendizaje;
- método en cuatro pasos;
- seis laboratorios;
- tres planes;
- testimonios y preguntas frecuentes;
- llamada final y pie.

### Estructura

```
index.html                  fuentes, script del tema (sin parpadeo) y clases del <body>
vite.config.js              plugin @tailwindcss/vite (no hay tailwind.config.js)
src/
├── index.css               @import "tailwindcss", @custom-variant dark, @theme y estilos base
├── main.jsx
├── App.jsx                 orden de las secciones y enlace «Saltar al contenido»
├── data/contenido.js       textos de la landing (las secciones los pintan con .map())
├── hooks/useTema.js        tema claro/oscuro sincronizado con <html> y localStorage
├── lib/cn.js               cn() = clsx + tailwind-merge
└── components/
    ├── ui/Boton.jsx        botón con variantes (ataque, defensa, purpura, claro, contorno)
    ├── ui/Seccion.jsx      ancho, márgenes y py-seccion comunes a todas las secciones
    ├── Cabecera.jsx        flex, menú móvil con aria-expanded
    ├── BotonTema.jsx       botón de icono con aria-label
    ├── Logo.jsx            escudo SVG rojo/azul
    ├── Hero.jsx            grid 1 → 2 columnas, terminal y animación de entrada
    ├── Rutas.jsx           grid 1 → 2 → 3 tarjetas
    ├── Metodo.jsx          <ol> en grid 1 → 2 → 4
    ├── Laboratorios.jsx    tarjetas con group-hover y dificultad en texto
    ├── Planes.jsx          grid de 3 desde lg con el plan destacado
    ├── Testimonios.jsx     figure/blockquote
    ├── Preguntas.jsx       details/summary con group-open
    ├── LlamadaFinal.jsx    banda con el degradado de marca
    └── Pie.jsx
```

## Cómo ejecutarlo

Requisitos: Node 22 LTS (o superior) y un navegador moderno (Tailwind v4 pide Chrome 111+, Safari 16.4+ o Firefox 128+).

```bash
npm install
npm run dev
```

Otros comandos:
- `npm run build`: versión de producción en `dist/`.
- `npm run preview`: sirve esa versión para probarla.
- `npm run lint`: revisa el código con oxlint.

## Tailwind v4 y el sistema de diseño

**Configuración CSS-first.** Para instalarlo bastan el plugin `@tailwindcss/vite` y una línea en `src/index.css`, `@import "tailwindcss";`. No hay `tailwind.config.js`: toda la configuración vive en el CSS.

**Tokens en `@theme`.** Cada uno genera utilidades y además queda como variable CSS:

| Token | Utilidades que genera |
|---|---|
| `--color-ataque-{50,300,600,700}` | `bg-ataque-600`, `text-ataque-700`, `border-t-ataque-600`… |
| `--color-defensa-…`, `--color-purpura-…` | lo mismo para la defensa y el púrpura |
| `--color-papel`, `--color-tinta-{700,800,950}` | fondos del tema claro (papel) y del oscuro (tinta) |
| `--font-display`, `--font-mono` | `font-display`, `font-mono` (cargadas desde Google Fonts) |
| `--spacing-seccion` | `py-seccion`: la misma separación entre todas las secciones |
| `--radius-tarjeta` | `rounded-tarjeta`: el mismo radio en todas las tarjetas |
| `--animate-aparecer`, `--animate-aparecer-tarde` + `@keyframes aparecer` | `animate-aparecer` (bonus) |

Para los grises de texto y bordes uso la escala `slate` de Tailwind, sin redefinirla. El espaciado es siempre el de la escala (`gap-6`, `p-8`…). El único valor arbitrario es el que oculta el triángulo de `<summary>` en Safari (`[&::-webkit-details-marker]:hidden`).

## Responsive (mobile-first)

Las clases sin prefijo son las del móvil, y `sm:`, `md:` y `lg:` añaden cambios **a partir de** ese ancho:

| Ancho | Cabecera | *Hero* | Rutas | Laboratorios | Planes |
|---|---|---|---|---|---|
| 360px | logo + tema + menú (☰) | 1 columna | 1 | 1 | 1 |
| 768px (`md:`) | enlaces visibles | 1 columna | 2 | 2 | 1 |
| 1280px (`lg:` y más) | enlaces + botón | 2 columnas | 3 | 3 | 3 |

Lo comprobé metiendo la página en un `iframe` de 360, 768 y 1280 px. En los tres anchos medí el número de columnas de cada rejilla, confirmé que ningún elemento se sale por la derecha y que no aparece barra de scroll horizontal.

**Flex o grid:**
- **Flexbox** para lo que es **una fila** que se alinea o se reparte: la cabecera (`justify-between`), los botones del *hero* (`flex-wrap`), el pie (`flex-col md:flex-row`) y el interior de cada tarjeta (`flex-col` + `mt-auto` para dejar el pie abajo).
- **Grid** para lo que son **filas y columnas que deben alinearse entre sí**: las tarjetas de rutas, laboratorios, planes y testimonios, los pasos del método y las dos columnas del *hero*.
- No hay `absolute` para maquetar; solo `sticky` en la cabecera.

## Modo oscuro

- `@custom-variant dark (&:where(.dark, .dark *));` hace que `dark:` dependa de la clase `dark` en `<html>`, y no solo de la preferencia del sistema. Así el botón de tema puede cambiarlo.
- **Sin parpadeo:** un `<script>` pequeño en `index.html` pone la clase **antes de pintar**. Usa la elección guardada en `localStorage` o, si no hay ninguna, `prefers-color-scheme`. Después, `useTema` la mantiene sincronizada.
- Cada color tiene su pareja `dark:`. En claro, el texto de color va en los tonos **700** sobre papel; en oscuro, en los tonos **300** sobre tinta.

**Contraste (WCAG AA).** Lo calculé con la fórmula de luminancia relativa de la U5:

| Par | Ratio |
|---|---|
| blanco sobre `ataque-600` / `defensa-600` / `purpura-600` (botones) | 5,29 / 5,82 / 6,30 |
| `ataque-700` / `defensa-700` / `purpura-700` sobre papel | 6,78 / 7,20 / 7,61 |
| `ataque-300` / `defensa-300` / `purpura-300` sobre tinta-950 | 9,58 / 9,94 / 9,61 |
| `slate-600` sobre papel (texto secundario en claro) | 6,95 |
| `slate-400` sobre tinta-800 (texto secundario en oscuro) | 6,90 |
| foco `purpura-600` sobre papel / `purpura-300` sobre tinta | 5,78 / 9,61 |

Todos superan 4,5:1. La banda final tiene texto blanco sobre un degradado que va de `ataque-600` a `defensa-600`, y ningún punto baja de 5,29:1.

## Accesibilidad visual

- **Foco visible** en todo lo interactivo con `:focus-visible` (solo aparece al usar el teclado), en morado y con contraste en los dos temas.
- **El color nunca va solo:** la dificultad de los laboratorios se dice con texto y puntos (●●○), cada ruta lleva su equipo escrito («Ataque · Red Team») y el plan destacado tiene la etiqueta «El más elegido».
- **Botones de icono con nombre:** el de tema lleva `aria-label`, y el de menú, `sr-only` y `aria-expanded`.
- **Objetivos de 44 px** (`size-11`) en los botones de icono.
- **Animación solo con `motion-safe:`**: si el sistema pide reducir el movimiento, no se anima. El `scroll-behavior: smooth` también se desactiva en ese caso.
- Enlace **«Saltar al contenido»**, HTML semántico (`header`, `nav`, `main`, `section` con `aria-labelledby`, `ol`, `dl`, `figure`, `details`) y la terminal del *hero* como `role="img"` con su descripción.

## Bonus: animación de entrada en `@theme`

```css
@theme {
  --animate-aparecer: aparecer 0.7s ease-out both;
  --animate-aparecer-tarde: aparecer 0.7s ease-out 0.25s both;
  @keyframes aparecer {
    from { opacity: 0; transform: translateY(1.5rem); }
    to   { opacity: 1; transform: translateY(0); }
  }
}
```

Los tokens `--animate-*` generan las utilidades `animate-aparecer` y `animate-aparecer-tarde`. El texto del *hero* entra primero y la terminal, 0,25 s después. Se usan como `motion-safe:animate-aparecer`, y en el CSS generado quedan dentro de `@media (prefers-reduced-motion: no-preference)`.

## Uso de IA

**Herramienta:** Claude Code (en la terminal, sobre el repositorio).

**Qué delegué:** la IA escribió el código (componentes, `@theme`, modo oscuro, animación) y este README. Yo elegí el tema entre varias tandas de propuestas (quería algo de ciberseguridad), la idea de Red Team / Blue Team y la carpeta del proyecto. Después repasé el código con la IA por partes.

**Prompts reales:**
- «me gustaria que fuese algo relacionado con la ciberseguridad», y de las propuestas elegí la academia de hacking ético.
- «si ahí, hazla tú como la M4»

**Cómo lo verifiqué:**
- `npm run lint` sin avisos y `npm run build` sin errores.
- Busqué en el CSS generado que existieran las utilidades de mis tokens (`bg-papel`, `py-seccion`), la variante `dark:` con `:where(.dark, .dark *)` y la animación dentro de `prefers-reduced-motion: no-preference`.
- Contrastes calculados con la fórmula WCAG antes de fijar los colores (tabla de arriba).
- En Chrome, a 360, 768 y 1280 px dentro de un `iframe` (ver «Responsive»):
  - el botón de tema cambia la clase, el `aria-label` y lo guarda en `localStorage`;
  - el menú móvil abre (`aria-expanded="true"`) y se cierra al elegir un enlace.
- **Un fallo que salió así:** a 360 px aparecía el botón «Empieza gratis» de la cabecera, que debía estar oculto (`hidden sm:inline-flex`). `Boton` ya traía `inline-flex` en su base, y entre `inline-flex` y `hidden` no gana la que pasas tú, sino la que Tailwind escribe más abajo en el CSS. Se arregló con `cn()` = `clsx` + `tailwind-merge`, que deja solo la última clase en conflicto.

## Autopsia

1. **Modo oscuro con clase en vez de dejarlo solo en `prefers-color-scheme`.** Con la variante por defecto no hace falta JavaScript, pero el usuario no puede elegir. Con la clase hacen falta tres piezas: `@custom-variant`, el script de `index.html` contra el parpadeo y `useTema`. Es más código y más cosas que pueden fallar (por ejemplo, si `localStorage` está bloqueado, el tema no se recuerda). *Alternativa descartada:* no tener botón y depender solo del sistema. Es más simple, pero no se puede probar el modo oscuro sin cambiar el sistema operativo.
2. **Pocos tonos propios (50, 300, 600, 700) en vez de rampas completas del 50 al 950.** Solo definí los tonos que uso, y cada uno tiene un papel: 50 para fondos suaves, 300 para texto en oscuro, 600 para botones y 700 para texto en claro. Así el sistema es pequeño y cada contraste está comprobado. *Alternativa descartada:* copiar las rampas `red` y `blue` de Tailwind, que ya existen. Habría más opciones, pero la marca no tendría color propio, y es fácil acabar usando un 400 o un 500 como texto, que es donde suspende el contraste. El coste es que, si un diseño nuevo necesita un 400, hay que añadirlo y comprobarlo.
