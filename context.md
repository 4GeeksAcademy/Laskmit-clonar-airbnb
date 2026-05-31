# Descripción de los componentes de StayShare

Implementación de tres vistas de la experiencia de StayShare (inspirada en Airbnb) en Next.js usando componentes de React: la página de inicio (Home), la página de catálogo (resultados de búsqueda) y la vista de detalle de una propiedad.

# Condiciones generales:
- **Enfoque Mobile-First:** El diseño se optimiza primero para 375px y se adapta a escritorio a partir de 768px.
- **Identidad Visual:** Uso del sistema de diseño "Atmospheric Hospitality".
    - **Color Primario:** #FF385C (Rausch).
    - **Tipografía:** Plus Jakarta Sans.
    - **Estilo:** Soft UI (radios de 8px-12px), uso intensivo de espacios en blanco y efectos de desenfoque (backdrop-blur) en barras de navegación.

# Stack Tecnológico:
- Next.js 16
- React 19
- TypeScript 5
- TailwindCSS 4
- ESLint 9

# Descripción de cada página:

## 1. Home (Página de Inicio)
Página principal enfocada en la exploración y descubrimiento visual.  Esta página muestra de una vez la oferta de propiedades activas en la empresa.
- **Componentes clave:**
    - `TopNavBar`: Con búsqueda integrada "Dónde, Cuándo, Quién".
    - `CategoryCarousel`: Iconos interactivos para filtrar por tipo de propiedad (Cabañas, Piscinas, etc.).
    - `PropertyGrid`: Feed de tarjetas con imágenes de alta resolución, calificación y distintivos de "Favorito entre huéspedes".
    - `BottomNavBar`: Navegación rápida para dispositivos móviles (Explorar, Favoritos, Viajes, etc.).

## 2. Catálogo (Resultados de Búsqueda)
Vista comparativa para facilitar la toma de decisiones basada en ubicación y precio.  Aparecen las propiedades basadas  en lo que el usuario llena en el filtro con sus preferencias.
- **Componentes clave:**
    - `SplitViewLayout`: Panel izquierdo con lista de propiedades y panel derecho con mapa interactivo.
    - `MapInterface`: Mapa dinámico con marcadores de precio por noche.
    - `FilterBar`: Filtros rápidos (Precio, Tipo de alojamiento, Cancelación gratuita).
    - `PropertyCard`: Versión compacta con carrusel de imágenes interno.

## 3. Detalle de Propiedad
Vista de conversión diseñada para generar confianza y facilitar la reserva.  Muestra el detalle de la propiedad, una vez que el usuario selecciona una dando click en el catálogo
- **Componentes clave:**
    - `ImageGallery`: Rejilla inmersiva de 5 imágenes.
    - `HostPassport`: Componente biográfico que humaniza al anfitrión (antigüedad, profesión, datos curiosos).
    - `BookingWidget`: Tarjeta pegajosa (sticky) con selector de fechas, desglose de costos y botón de reserva.
    - `ReviewsSection`: Sistema de valoraciones detallado con búsqueda interna.

## Navegación:
La navegación entre vistas se realiza mediante el sistema de rutas de Next.js, garantizando una transición fluida sin recarga completa del navegador.

# Especificaciones funcionales y reglas de calidad (Checklist)

## Página de inicio (/)
- Barra de navegación superior: logo, campo de búsqueda y menú de usuario.
- Campo de búsqueda debe usar useState para filtrar tarjetas en tiempo real.
- Fila horizontal de filtros por categoría debajo de la navbar (usa useState para guardar categoría activa).
- Cuadrícula responsiva de tarjetas de alojamiento (placeholder de foto, título, precio, rating).
- Simular carga de datos con useEffect y setTimeout (estado de carga true/false).
- Indicador de carga mientras los datos no estén disponibles.
- Cuadrícula: una sola columna en móvil, varias en escritorio.

## Página de catálogo (/catalog)
- Cabecera de resultados: número de resultados y control de ordenación (asc/desc por precio, usa useState).
- Reutiliza PropertyCard de la Home.
- Área de mapa a la derecha (escritorio) o debajo (móvil). Placeholder visual por defecto.
- Reto opcional: (EJECUTADO) usar react-leaflet o Google Maps para mapa real. 

## Página de detalle (/stays/[id])
- useEffect para cargar datos según id de la URL (simular carga con setTimeout).
- Estado de carga mientras los datos no estén disponibles.
- Galería de fotos en la parte superior. useState para índice de foto actual y navegación.
- Cabecera: título, ubicación, estrellas, número de reseñas.
- Fila de anfitrión: avatar, nombre, años como anfitrión.
- Lista de servicios (amenities) como cuadrícula de pares icono+etiqueta.
- Tarjeta de reserva: precio por noche, contador de huéspedes (useState para sumar/restar).
- Reto opcional: (EJECUTADO) campos funcionales de fecha de entrada/salida con date picker y cálculo de precio total.

## Navegación
- Al hacer clic en una tarjeta, navegar a la página de detalle (usar Link de Next.js).
- Breadcrumb en la página de detalle para volver a catálogo.
- Nunca usar <a href="..."> plano para navegación interna.

## Calidad de código
- Cada componente en su propio archivo dentro de /components.
- Ningún componente debe superar las ~80 líneas de JSX+lógica.
- Todos los componentes funcionales definidos como const.