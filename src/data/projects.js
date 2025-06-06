export const projects = [
  {
    id: 1,
    title: "Coffee Shop",
    description: "Tienda en línea con gestión de usuarios y empleados",
    longDescription:
      "Plataforma completa de comercio electrónico para una cafetería. Permite a los administradores gestionar productos, inventario, pedidos, usuarios y empleados, con autenticación segura. El panel incluye filtros, notificaciones en tiempo real y rutas protegidas. Diseñado con un enfoque profesional y escalable.",
    image: "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg",
    technologies: [
      "ReactJS",
      "ReactQuery",
      "Context API",
      "Express.js",
      "Node.js",
      "Zod",
      "JWT",
      "TypeScript",
      "PostgreSQL",
    ],
    type: "Full-stack",
    duration: "3 semanas",
    collaborative: true,
    featured: true,
    gallery: [
      "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg",
      "https://images.pexels.com/photos/5466810/pexels-photo-5466810.jpeg",
      "https://images.pexels.com/photos/93599/pexels-photo-93599.jpeg",
    ],
    demoUrl: "https://demo-ecommerce.com",
    repoUrl: "https://github.com/agustin/ecommerce-dashboard",
    features: [
      "Gestión de productos, pedidos, clientes y empleados",
      "Filtrado y paginación de productos",
      "Gestión de inventario y notificaciones",
      "Autenticación y autorización con JWT",
      "Rutas protegidas para usuarios y administradores",
    ],
  },
  {
    id: 2,
    title: "WorkShow - Red Social Freelance",
    description: "Una red social para mostrar y descubrir proyectos freelance",
    longDescription:
      "Plataforma tipo red social donde freelancers pueden publicar sus proyectos, seguir a otros usuarios y guardar trabajos como inspiración. Cada usuario tiene un perfil personalizado con seguidores, proyectos propios y favoritos. Incluye filtros por categorías, autenticación segura y sistema de notificaciones.",
    image: "https://images.pexels.com/photos/6804581/pexels-photo-6804581.jpeg",
    technologies: [
      "ReactJS",
      "ReactQuery",
      "Context API",
      "Express.js",
      "NodeMailer",
      "Node.js",
      "Zod",
      "JWT",
      "TypeScript",
      "Prisma ORM",
      "PostgreSQL",
    ],
    type: "Full-stack",
    duration: "3 semanas",
    collaborative: true,
    gallery: [
      "https://images.pexels.com/photos/6804581/pexels-photo-6804581.jpeg",
      "https://images.pexels.com/photos/3770612/pexels-photo-3770612.jpeg",
      "https://images.pexels.com/photos/5989925/pexels-photo-5989925.jpeg",
    ],
    demoUrl: "https://workshow-demo.com",
    repoUrl: "https://github.com/agustin/workshow-social",
    features: [
      "Creación y edición de proyectos",
      "Guardar favoritos y seguir usuarios",
      "Notificaciones en tiempo real",
      "Filtros por categoría y búsqueda avanzada",
      "Autenticación con JWT y perfiles personalizados",
    ],
  },
  {
    id: 3,
    title: "MediaGallery",
    description: "Galería multimedia interactiva con favoritos y descargas.",
    longDescription:
      "MediaGallery es una aplicación full-stack que permite a los usuarios explorar, guardar, compartir y descargar imágenes de alta calidad. Incluye autenticación segura, guardado de favoritos y una experiencia visual moderna. Usa una API REST personalizada y React Query para un manejo eficiente del estado asíncrono.",
    image: "https://images.pexels.com/photos/7681551/pexels-photo-7681551.jpeg",
    technologies: [
      "ReactJS",
      "ReactQuery",
      "Context API",
      "Express.js",
      "Node.js",
      "JWT",
      "TypeScript",
      "Prisma ORM",
      "PostgreSQL",
    ],
    type: "Full-stack",
    duration: "2 meses",
    collaborative: false,
    gallery: [
      "https://images.pexels.com/photos/7681551/pexels-photo-7681551.jpeg",
      "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg",
      "https://images.pexels.com/photos/5483071/pexels-photo-5483071.jpeg",
    ],
    demoUrl: "https://media-gallery-demo.com",
    repoUrl: "https://github.com/agustin/media-gallery",
    features: [
      "Guardar imágenes favoritas en perfil",
      "Compartir y descargar imágenes con un clic",
      "Interfaz moderna y responsive",
      "Autenticación JWT y rutas protegidas",
      "API REST robusta y segura",
    ],
  },
  {
    id: 4,
    title: "NewsRadar",
    description: "Sitio de noticias actualizadas con filtros inteligentes.",
    longDescription:
      "NewsRadar es un portal de noticias responsive construido con NextJS, que consume una API externa para mostrar noticias en tiempo real. Los usuarios pueden buscar por tema, guardar sus artículos favoritos en localStorage y disfrutar una experiencia visual moderna con modo oscuro.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg",
    technologies: ["React", "NextJS", "JavaScript", "CSS Modules", "Axios"],
    type: "Frontend",
    duration: "1 mes",
    collaborative: false,
    gallery: [
      "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg",
      "https://images.pexels.com/photos/2448749/pexels-photo-2448749.jpeg",
      "https://images.pexels.com/photos/1089168/pexels-photo-1089168.jpeg",
    ],
    demoUrl: "https://news-radar-demo.com",
    repoUrl: "https://github.com/agustin/news-radar",
    features: [
      "Búsqueda de noticias por palabra clave",
      "Modo oscuro automático",
      "Guardado de favoritos en localStorage",
      "Diseño responsive y moderno",
      "Consumo de noticias desde API externa",
    ],
  },
  {
    id: 5,
    title: "CineScope",
    description: "Buscador de películas con detalles e interfaz elegante.",
    longDescription:
      "CineScope permite explorar películas usando la API de TMDB. Los usuarios pueden buscar por nombre, ver detalles, trailers e información relacionada. Incluye modo oscuro, navegación SPA y animaciones sutiles.",
    image: "https://images.pexels.com/photos/7991312/pexels-photo-7991312.jpeg",
    technologies: [
      "React",
      "Axios",
      "React Router",
      "TailwindCSS",
      "Framer Motion",
    ],
    type: "Frontend",
    duration: "2 semanas",
    collaborative: false,
    gallery: [
      "https://images.pexels.com/photos/7991312/pexels-photo-7991312.jpeg",
      "https://images.pexels.com/photos/7991372/pexels-photo-7991372.jpeg",
    ],
    demoUrl: "https://cine-scope-demo.com",
    repoUrl: "https://github.com/agustin/cine-scope",
    features: [
      "Búsqueda por título",
      "Modo oscuro persistente",
      "Detalles de películas con trailers",
      "Animaciones suaves con Framer Motion",
    ],
  },
  {
    id: 6,
    title: "ColorCraft",
    description: "Generador de paletas de colores armónicas.",
    longDescription:
      "ColorCraft es una herramienta para diseñadores que permite generar paletas cromáticas automáticamente o manualmente. Incluye bloqueo de colores, copia de código HEX, historial y descarga.",
    image: "https://images.pexels.com/photos/1414652/pexels-photo-1414652.jpeg",
    technologies: ["React", "TailwindCSS", "Zustand", "Vite"],
    type: "Frontend",
    duration: "1 semana",
    collaborative: false,
    gallery: [
      "https://images.pexels.com/photos/1414652/pexels-photo-1414652.jpeg",
      "https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg",
    ],
    demoUrl: "https://color-craft-demo.com",
    repoUrl: "https://github.com/agustin/color-craft",
    features: [
      "Generación aleatoria de paletas armónicas",
      "Copia de códigos HEX",
      "Historial en LocalStorage",
      "Modo oscuro integrado",
    ],
  },
  {
    id: 7,
    title: "DesignShowcase",
    description: "Inspiración visual tipo Dribbble con guardado de favoritos.",
    longDescription:
      "DesignShowcase muestra diseños inspiradores por categorías como UI, branding e ilustraciones. Los usuarios pueden guardar sus favoritos en localStorage, explorar animaciones y ver detalles de cada diseño.",
    image: "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg",
    technologies: ["React", "TailwindCSS", "Framer Motion", "React Router"],
    type: "Frontend",
    duration: "2 semanas",
    collaborative: false,
    gallery: [
      "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg",
      "https://images.pexels.com/photos/4348405/pexels-photo-4348405.jpeg",
    ],
    demoUrl: "https://design-showcase-demo.com",
    repoUrl: "https://github.com/agustin/design-showcase",
    features: [
      "Exploración por categoría",
      "Animaciones suaves con Framer Motion",
      "Guardado en localStorage",
      "Diseño responsive tipo Dribbble",
    ],
  },
];
