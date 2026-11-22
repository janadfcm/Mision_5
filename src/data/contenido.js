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

export const PASOS = [
  {
    titulo: "Firma el código ético",
    texto: "Antes de tocar nada: solo se ataca lo que es tuyo o tienes permiso por escrito para atacar. Sin excepciones.",
  },
  {
    titulo: "Aprende la técnica",
    texto: "Clases cortas en directo y en diferido, con el porqué de cada ataque y de cada defensa.",
  },
  {
    titulo: "Rómpelo en el laboratorio",
    texto: "Máquinas virtuales aisladas, preparadas para ser atacadas. Si se rompen, se restauran con un clic.",
  },
  {
    titulo: "Explica cómo lo arreglarías",
    texto: "Cada laboratorio acaba en un informe: qué encontraste, qué riesgo tiene y cómo se corrige.",
  },
];

// dificultad: 1 (fácil), 2 (media) o 3 (difícil).
export const LABORATORIOS = [
  { id: "lab-01", categoria: "Web", nombre: "Tienda vulnerable", texto: "Inyección SQL en un buscador de productos y cómo lo evita una consulta parametrizada.", dificultad: 1 },
  { id: "lab-04", categoria: "Red", nombre: "Oficina en apuros", texto: "Enumera una red pequeña, encuentra el servicio olvidado y ciérralo.", dificultad: 1 },
  { id: "lab-07", categoria: "Detección", nombre: "Alerta en el SIEM", texto: "Escribe la regla que detecta un escaneo de puertos sin ahogar al equipo en falsos positivos.", dificultad: 2 },
  { id: "lab-12", categoria: "Sistemas", nombre: "De usuario a root", texto: "Un permiso mal puesto, una escalada de privilegios y el bastionado que la habría frenado.", dificultad: 2 },
  { id: "lab-19", categoria: "Forense", nombre: "La noche del incidente", texto: "Reconstruye qué pasó a partir de registros y una imagen de disco.", dificultad: 3 },
  { id: "lab-23", categoria: "IA", nombre: "Agente engañado", texto: "Inyección de instrucciones indirecta contra un asistente con herramientas, y sus defensas.", dificultad: 3 },
];

export const PLANES = [
  {
    nombre: "Recluta",
    precio: "0 €",
    periodo: "para siempre",
    descripcion: "Para probar si esto es lo tuyo.",
    incluye: ["5 laboratorios de iniciación", "Clases grabadas de introducción", "Comunidad en el foro"],
    boton: "Empieza gratis",
    destacado: false,
  },
  {
    nombre: "Operativo",
    precio: "29 €",
    periodo: "al mes",
    descripcion: "Una ruta completa con tutoría.",
    incluye: ["Todos los laboratorios", "Una ruta a elegir (Red, Blue o Purple)", "Corrección de informes", "Certificado al terminar"],
    boton: "Elegir Operativo",
    destacado: true,
  },
  {
    nombre: "Escuadra",
    precio: "A medida",
    periodo: "para equipos",
    descripcion: "Para empresas y universidades.",
    incluye: ["Laboratorios privados", "Ejercicios Red vs Blue en vivo", "Panel de progreso del equipo"],
    boton: "Hablemos",
    destacado: false,
  },
];
