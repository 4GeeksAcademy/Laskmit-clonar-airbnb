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
Página principal enfocada en la exploración y descubrimiento visual.
- **Componentes clave:**
    - `TopNavBar`: Con búsqueda integrada "Dónde, Cuándo, Quién".
    - `CategoryCarousel`: Iconos interactivos para filtrar por tipo de propiedad (Cabañas, Piscinas, etc.).
    - `PropertyGrid`: Feed de tarjetas con imágenes de alta resolución, calificación y distintivos de "Favorito entre huéspedes".
    - `BottomNavBar`: Navegación rápida para dispositivos móviles (Explorar, Favoritos, Viajes, etc.).

## 2. Catálogo (Resultados de Búsqueda)
Vista comparativa para facilitar la toma de decisiones basada en ubicación y precio.
- **Componentes clave:**
    - `SplitViewLayout`: Panel izquierdo con lista de propiedades y panel derecho con mapa interactivo.
    - `MapInterface`: Mapa dinámico con marcadores de precio por noche.
    - `FilterBar`: Filtros rápidos (Precio, Tipo de alojamiento, Cancelación gratuita).
    - `PropertyCard`: Versión compacta con carrusel de imágenes interno.

## 3. Detalle de Propiedad
Vista de conversión diseñada para generar confianza y facilitar la reserva.
- **Componentes clave:**
    - `ImageGallery`: Rejilla inmersiva de 5 imágenes.
    - `HostPassport`: Componente biográfico que humaniza al anfitrión (antigüedad, profesión, datos curiosos).
    - `BookingWidget`: Tarjeta pegajosa (sticky) con selector de fechas, desglose de costos y botón de reserva.
    - `ReviewsSection`: Sistema de valoraciones detallado con búsqueda interna.

## Navegación:
La navegación entre vistas se realiza mediante el sistema de rutas de Next.js, garantizando una transición fluida sin recarga completa del navegador.

# Especificaciones técnicas y reglas de calidad (Checklist)

- Todos los componentes deben ser funcionales (const), sin clases.
- Cada componente en su propio archivo bajo /components.
- Ningún componente debe superar las ~80 líneas de JSX+lógica. Si lo hace, dividirlo.
- Usar useState/useEffect para estados de carga, filtros, navegación de fotos, etc.
- Usar Link de Next.js para navegación interna, nunca <a href="..."> plano.
- Simular carga de datos con useEffect y setTimeout donde aplique.
- Usar props para pasar datos y callbacks entre componentes.
- Los componentes visuales deben ser responsivos y mobile-first.
- Usar placeholders visuales para imágenes/mapas cuando no haya datos.
- Documentar en comentarios la función de cada componente y sus props.
