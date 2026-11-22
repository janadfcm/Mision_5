import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// Tailwind v4 se integra con Vite mediante su plugin oficial:
// no hay tailwind.config.js ni postcss.config.js.
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
