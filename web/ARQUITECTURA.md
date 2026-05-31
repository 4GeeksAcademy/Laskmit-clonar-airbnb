# Guía de arquitectura y layout

Este documento describe la estructura de páginas, layout y componentes principales del proyecto, explicando para qué sirve y cómo funciona cada elemento clave.

---

## Tabla de páginas y layout (visión rápida)

| Ruta | Archivo de entrada | Estructura principal | Componentes clave |
|---|---|---|---|
| / | web/app/page.tsx | main → header/top nav → categorías → hero → grid/estado vacío → bottom nav móvil | TopNavBar, CategoryCarousel, PropertyGrid, BottomNavBar |
| /catalog | web/app/catalog/page.tsx | main → top nav compacta → filter bar → barra de resultados/orden → split list+map → bottom nav | TopNavBar, FilterBar, SplitViewLayout, BottomNavBar |
| /rooms/[id] | web/app/rooms/[id]/page.tsx | wrapper mínimo que delega en detalle | RoomDetailPage |
| /stays/[id] | web/app/stays/[id]/page.tsx | wrapper mínimo que delega en detalle | RoomDetailPage |
| Layout global | web/app/layout.tsx | html(lang=es) → body flex column → children | RootLayout (fuentes, estilos globales, metadata) |

---

## Árbol de layout/composición (tipo DOM) por ruta

### Ruta /
- RootLayout
  - HomePage
    - main
      - TopNavBar (con buscador activo)
      - CategoryCarousel (botones por categoría)
      - section hero (título + link a catálogo)
      - estado condicional
        - si loading: bloque Cargando alojamientos
        - si no loading: PropertyGrid
          - lista de PropertyCard
            - cada PropertyCard: imagen, badges, título, rating, precio, link a detalle
      - BottomNavBar (móvil)

### Ruta /catalog
- RootLayout
  - CatalogPage
    - main
      - TopNavBar (compact)
      - FilterBar (pills de filtros)
      - section (contador resultados + select de orden)
      - SplitViewLayout
        - columna izquierda: lista de PropertyCard compact
        - columna derecha: MapInterface
          - StaysMap (Leaflet, marcadores, popups)
      - BottomNavBar (móvil)

### Ruta /rooms/[id] y /stays/[id]
- RootLayout
  - RoomDetailPage
    - main
      - TopNavBar (compact)
      - estado condicional
        - RoomDetailLoading
        - o RoomDetailNotFound
        - o RoomDetailContent
          - cabecera detalle (volver, título, rating, ubicación)
          - ImageGallery (imagen principal + miniaturas + navegación)
          - grid 2 columnas
            - columna contenido: descripción + HostPassport + AmenitiesList + ReviewsSection
            - columna lateral: BookingWidget
              - BookingDateGuests (DatePicker check-in/out + control huéspedes)
              - BookingCostBreakdown (subtotal, fees, total)
          - sección relacionados: lista de PropertyCard compact

---

## Matriz de componentes compartidos

| Componente | / | /catalog | /rooms/[id] | /stays/[id] |
|---|---:|---:|---:|---:|
| TopNavBar | Sí | Sí | Sí | Sí |
| BottomNavBar | Sí | Sí | No | No |
| PropertyCard | Sí | Sí | Sí | Sí |
| RoomDetailPage | No | No | Sí | Sí |
| MapInterface / StaysMap | No | Sí | No | No |
| BookingWidget | No | No | Sí | Sí |

---

## Mapa de hooks (donde se usan)

| Archivo | Hooks usados | Para qué se usan |
|---|---|---|
| web/app/page.tsx | useState, useEffect | Estado de búsqueda/filtros/carga y simulación de carga inicial de datos |
| web/app/catalog/page.tsx | useState, useMemo | Estado de orden y memoización de lista ordenada |
| web/components/room-detail-page.tsx | useState, useEffect, useMemo, useParams | Leer id de ruta, cargar estancia, calcular relacionados y manejar estados |
| web/components/image-gallery.tsx | useState, useMemo | Índice actual de galería y fallback de imágenes |
| web/components/booking-widget.tsx | useState, useMemo | Estado de fechas/huéspedes y cálculo de noches/costos |
| web/components/stays-map.tsx | useEffect, useMemo | Ajuste de viewport y cálculo del centro inicial del mapa |

---

## Para qué sirve y cómo funciona cada elemento

| Elemento | Dónde está | Para qué sirve | Cómo lo hace (general) |
|---|---|---|---|
| RootLayout | web/app/layout.tsx | Define la estructura base de toda la app | Envuelve todas las páginas en html/body, carga estilos globales y fuentes, y renderiza children |
| HomePage | web/app/page.tsx | Página principal de exploración | Maneja estado de búsqueda/categoría/carga y decide qué lista mostrar |
| TopNavBar | web/components/top-nav-bar.tsx | Navegación superior y búsqueda | Renderiza header sticky; si recibe searchValue + onSearchChange muestra input controlado, si no muestra CTA de búsqueda simple |
| CategoryCarousel | web/components/category-carousel.tsx | Filtrar por categorías visuales | Recorre categorías y pinta botones (modo interactivo) o links (modo navegación), marcando activo |
| PropertyGrid | web/components/property-grid.tsx | Mostrar resultados en rejilla | Mapea stays y crea una PropertyCard por cada alojamiento |
| PropertyCard | web/components/property-card.tsx | Tarjeta resumida de un alojamiento | Muestra imagen, badges, rating, precio; enlaza al detalle con Link dinámico a /rooms/[id] |
| BottomNavBar | web/components/bottom-nav-bar.tsx | Navegación inferior móvil | Lista items fijos y resalta el activo según prop active |
| CatalogPage | web/app/catalog/page.tsx | Vista catálogo con lista + mapa | Ordena resultados por precio y los pasa a un layout dividido |
| FilterBar | web/components/filter-bar.tsx | Filtros rápidos de catálogo | Renderiza pills de filtro y etiqueta de categoría activa |
| SplitViewLayout | web/components/split-view-layout.tsx | Composición 2 columnas catálogo | Izquierda: cards compactas; derecha: mapa interactivo |
| MapInterface | web/components/map-interface.tsx | Contenedor visual del mapa | Carga StaysMap de forma dinámica (sin SSR) y muestra fallback de carga |
| StaysMap | web/components/stays-map.tsx | Mostrar alojamientos geolocalizados | Usa react-leaflet: centra mapa, ajusta bounds según puntos y dibuja marcadores con popup |
| RoomPage / StayDetailPage | web/app/rooms/[id]/page.tsx, web/app/stays/[id]/page.tsx | Entradas de rutas de detalle | Delegan todo el render a RoomDetailPage |
| RoomDetailPage | web/components/room-detail-page.tsx | Orquestar el detalle de una estancia | Toma id desde URL, busca datos, maneja loading/not found y renderiza contenido final |
| RoomDetailLoading | web/components/room-detail-status.tsx | Estado de carga del detalle | Muestra bloque de feedback mientras se resuelven datos |
| RoomDetailNotFound | web/components/room-detail-status.tsx | Estado cuando no existe la estancia | Muestra mensaje y link de retorno al catálogo |
| RoomDetailContent | web/components/room-detail-content.tsx | Cuerpo completo del detalle | Compone secciones: galería, info, anfitrión, amenities, reseñas, reserva y recomendados |
| ImageGallery | web/components/image-gallery.tsx | Galería principal del detalle | Mantiene índice activo, permite anterior/siguiente y selección por miniaturas |
| HostPassport | web/components/host-passport.tsx | Presentar datos del anfitrión | Muestra perfil básico y badge de superhost condicional |
| AmenitiesList | web/components/amenities-list.tsx | Listar amenidades del alojamiento | Recorre amenities y asigna icono simple por palabras clave |
| ReviewsSection | web/components/reviews-section.tsx | Mostrar reseñas de huéspedes | Mapea reviews en cards y deja input de búsqueda como UI de apoyo |
| BookingWidget | web/components/booking-widget.tsx | Simular reserva y costos | Controla fechas/huéspedes y calcula noches, subtotal, fees y total |
| BookingDateGuests | web/components/booking-date-guests.tsx | Selección de fechas y huéspedes | Usa DatePicker para check-in/check-out y stepper para número de personas |
| BookingCostBreakdown | web/components/booking-cost-breakdown.tsx | Desglosar costos de reserva | Recibe valores ya calculados y los presenta en formato resumen |
| Datos y helpers | web/lib/stays-data.ts | Fuente de datos y utilidades | Exporta stays/categorías y funciones getStayById/getRelatedStays para consultas |

---

**Cómo usar este documento**
- Empieza por la tabla de rutas para orientarte.
- Usa los árboles para entender la composición real de cada página.
- Consulta la matriz para ver reutilización y dependencias.
- Lee la tabla de "para qué sirve" para entender el propósito y funcionamiento general de cada pieza.

Este documento es útil para onboarding, debugging, refactor y comunicación con equipo técnico y no técnico.

---

## Diagrama Mermaid completo (árbol por página)

### Leyenda de colores

```mermaid
flowchart LR
  L1["RootLayout: envolver toda la app"]
  L2["Page: entrada de cada ruta"]
  L3["Componente: pieza de UI reutilizable"]
  L4{"Estado: decision de render"}
  L5["Con hooks: usa estado/ciclo de vida/enrutado"]

  classDef root fill:#fff7d6,stroke:#b08900,color:#2f2a00,stroke-width:1.5px;
  classDef page fill:#e9f3ff,stroke:#1d4ed8,color:#0b2459,stroke-width:1.2px;
  classDef component fill:#ecfdf3,stroke:#15803d,color:#073b1f,stroke-width:1px;
  classDef state fill:#fff1f2,stroke:#be123c,color:#4a0417,stroke-width:1.2px;
  classDef hooks fill:#ede9fe,stroke:#6d28d9,color:#2e1065,stroke-width:1.5px;

  class L1 root;
  class L2 page;
  class L3 component;
  class L4 state;
  class L5 hooks;
```

### 1) Home (/)

```mermaid
flowchart TB
  RL["RootLayout: envolver app completa<br/>web/app/layout.tsx"]

  subgraph HOME["Ruta / (HomePage)"]
    H1["HomePage: orquestar busqueda y listado [hooks]<br/>web/app/page.tsx"]
    H2["main: contenedor principal de la vista"]
    H3["TopNavBar: mostrar marca y buscador"]
    H4["CategoryCarousel: filtrar por categoria"]
    H5["Hero section: contexto y acceso a catalogo"]
    H6{"loading: datos listos?"}
    H7["Loading state: feedback mientras carga"]
    H8["PropertyGrid: pintar resultados"]
    H9["PropertyCard x N: resumen de cada alojamiento"]
    H10["BottomNavBar: navegacion movil"]
  end

  RL --> H1 --> H2
  H2 --> H3
  H2 --> H4
  H2 --> H5
  H2 --> H6
  H6 -->|si| H7
  H6 -->|no| H8 --> H9
  H2 --> H10

  classDef root fill:#fff7d6,stroke:#b08900,color:#2f2a00,stroke-width:1.5px;
  classDef page fill:#e9f3ff,stroke:#1d4ed8,color:#0b2459,stroke-width:1.2px;
  classDef component fill:#ecfdf3,stroke:#15803d,color:#073b1f,stroke-width:1px;
  classDef state fill:#fff1f2,stroke:#be123c,color:#4a0417,stroke-width:1.2px;
  classDef hooks fill:#ede9fe,stroke:#6d28d9,color:#2e1065,stroke-width:1.5px;

  class RL root;
  class H1 hooks;
  class H2,H3,H4,H5,H8,H9,H10 component;
  class H6,H7 state;
```

### 2) Catalog (/catalog)

```mermaid
flowchart TB
  RL["RootLayout: envolver app completa<br/>web/app/layout.tsx"]

  subgraph CATALOG["Ruta /catalog (CatalogPage)"]
    C1["CatalogPage: ordenar y mostrar vista mixta [hooks]<br/>web/app/catalog/page.tsx"]
    C2["main: contenedor principal de catalogo"]
    C3["TopNavBar: navegacion superior compacta"]
    C4["FilterBar: filtros rapidos visuales"]
    C5["Resultados + Select: resumen y ordenamiento"]
    C6["SplitViewLayout: dividir lista y mapa"]
    C7["Columna lista: panel de resultados"]
    C8["PropertyCard compact x N: items resumidos"]
    C9["Columna mapa: panel geoespacial"]
    C10["MapInterface: contenedor del mapa"]
    C11["StaysMap: cargar mapa en cliente [hooks]"]
    C12["MapContainer: lienzo Leaflet"]
    C13["TileLayer: capa base de calles"]
    C14["FitToStays: ajustar viewport a puntos [hooks]"]
    C15["CircleMarker + Popup x N: puntos de estancias"]
    C16["BottomNavBar: navegacion movil"]
  end

  RL --> C1 --> C2
  C2 --> C3
  C2 --> C4
  C2 --> C5
  C2 --> C6
  C6 --> C7 --> C8
  C6 --> C9 --> C10 --> C11 --> C12
  C12 --> C13
  C12 --> C14
  C12 --> C15
  C2 --> C16

  classDef root fill:#fff7d6,stroke:#b08900,color:#2f2a00,stroke-width:1.5px;
  classDef page fill:#e9f3ff,stroke:#1d4ed8,color:#0b2459,stroke-width:1.2px;
  classDef component fill:#ecfdf3,stroke:#15803d,color:#073b1f,stroke-width:1px;
  classDef hooks fill:#ede9fe,stroke:#6d28d9,color:#2e1065,stroke-width:1.5px;

  class RL root;
  class C1,C11,C14 hooks;
  class C2,C3,C4,C5,C6,C7,C8,C9,C10,C12,C13,C15,C16 component;
```

### 3) Detail (/rooms/:id y /stays/:id)

```mermaid
flowchart TB
  RL["RootLayout: envolver app completa<br/>web/app/layout.tsx"]

  subgraph ROOM_ROUTE["Ruta /rooms/:id"]
    R0["RoomPage: entrada de detalle por room id<br/>web/app/rooms/:id/page.tsx"]
  end

  subgraph STAY_ROUTE["Ruta /stays/:id"]
    S0["StayDetailPage: entrada alterna de detalle<br/>web/app/stays/:id/page.tsx"]
  end

  subgraph DETAIL["RoomDetailPage compartido"]
    D1["RoomDetailPage: cargar estado de detalle [hooks]<br/>web/components/room-detail-page.tsx"]
    D2["main: contenedor principal del detalle"]
    D3["TopNavBar: navegacion superior compacta"]
    D4{"loading / encontrado: escoger rama de render"}
    D5["RoomDetailLoading: estado de carga"]
    D6["RoomDetailNotFound: estado cuando no existe"]
    D7["RoomDetailContent: contenido completo"]
    D8["Cabecera detalle: contexto y metrica del stay"]
    D9["ImageGallery: explorar fotos [hooks]"]
    D10["Grid 2 columnas: separar contenido y reserva"]
    D11["Columna contenido: informacion principal"]
    D12["HostPassport: perfil del anfitrion"]
    D13["AmenitiesList: listar amenidades"]
    D14["ReviewsSection: mostrar resenas"]
    D15["Columna reserva: acciones de booking"]
    D16["BookingWidget: calcular y reservar [hooks]"]
    D17["BookingDateGuests: fechas y huespedes"]
    D18["BookingCostBreakdown: desglose de costos"]
    D19["Relacionados: recomendar otras estancias"]
    D20["PropertyCard compact x N: tarjetas recomendadas"]
  end

  RL --> R0 --> D1
  RL --> S0 --> D1
  D1 --> D2 --> D3
  D2 --> D4
  D4 -->|loading| D5
  D4 -->|no encontrado| D6
  D4 -->|ok| D7
  D7 --> D8
  D7 --> D9
  D7 --> D10
  D10 --> D11
  D11 --> D12
  D11 --> D13
  D11 --> D14
  D10 --> D15 --> D16
  D16 --> D17
  D16 --> D18
  D7 --> D19 --> D20

  classDef root fill:#fff7d6,stroke:#b08900,color:#2f2a00,stroke-width:1.5px;
  classDef page fill:#e9f3ff,stroke:#1d4ed8,color:#0b2459,stroke-width:1.2px;
  classDef component fill:#ecfdf3,stroke:#15803d,color:#073b1f,stroke-width:1px;
  classDef state fill:#fff1f2,stroke:#be123c,color:#4a0417,stroke-width:1.2px;
  classDef hooks fill:#ede9fe,stroke:#6d28d9,color:#2e1065,stroke-width:1.5px;

  class RL root;
  class R0,S0 page;
  class D1,D9,D16 hooks;
  class D2,D3,D7,D8,D10,D11,D12,D13,D14,D15,D17,D18,D19,D20 component;
  class D4,D5,D6 state;
```

### Cómo leer estos diagramas
- Cada nodo representa un componente o bloque estructural real del render.
- Las flechas indican composición (quién renderiza a quién).
- Los rombos representan condiciones (por ejemplo loading o not found).
- Los nodos con x N indican listas renderizadas con map.
- Los nodos en color violeta y con etiqueta [hooks] usan hooks de React o de enrutado.
