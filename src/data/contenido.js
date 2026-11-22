// Contenido de la landing, separado de la maquetación: los componentes
// pintan con .map() y aquí solo hay datos.

export const ENLACES = [
  { href: "#rutas", texto: "Rutas" },
  { href: "#metodo", texto: "Método" },
  { href: "#laboratorios", texto: "Laboratorios" },
  { href: "#planes", texto: "Planes" },
  { href: "#preguntas", texto: "Preguntas" },
];

export const CIFRAS = [
  { valor: "40+", etiqueta: "laboratorios" },
  { valor: "1.200", etiqueta: "alumnos" },
  { valor: "100 %", etiqueta: "legal" },
];

// color: una de las claves de ESTILO en Rutas.jsx (ataque, defensa, purpura).
export const RUTAS = [
  {
    id: "red",
    equipo: "Ataque · Red Team",
    nombre: "Red Team",
    color: "ataque",
    descripcion: "Piensa como quien ataca: encuentra la puerta abierta antes que nadie y documenta cómo cerrarla.",
    temas: ["Reconocimiento y enumeración", "Explotación web (OWASP Top 10)", "Escalada de privilegios", "Informe de pentesting"],
    duracion: "12 semanas",
    nivel: "Intermedio",
  },
  {
    id: "blue",
    equipo: "Defensa · Blue Team",
    nombre: "Blue Team",
    color: "defensa",
    descripcion: "Vigila, detecta y responde: convierte los registros del sistema en alertas que de verdad importan.",
    temas: ["Monitorización con SIEM", "Análisis de registros", "Respuesta a incidentes", "Bastionado de sistemas"],
    duracion: "12 semanas",
    nivel: "Inicial",
  },
  {
    id: "purple",
    equipo: "Ataque + Defensa · Purple Team",
    nombre: "Purple Team",
    color: "purpura",
    descripcion: "Los dos equipos en la misma sala: cada ataque se repite hasta que la defensa lo detecta.",
    temas: ["Emulación de adversarios (MITRE ATT&CK)", "Reglas de detección", "Ejercicios conjuntos", "Mejora continua"],
    duracion: "12 semanas",
    nivel: "Avanzado",
  },
];
