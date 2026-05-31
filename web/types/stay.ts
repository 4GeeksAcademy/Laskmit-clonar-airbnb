// Que hace: define el contrato de tipos del dominio de estancias.
// De que depende: tipos TypeScript nativos (sin dependencias externas).
// Donde se usa: componentes, paginas y helpers de datos del proyecto.

// Categorias permitidas para clasificar estancias y filtrar resultados.
export type StayCategory =
  | "cabins"
  | "pools"
  | "beach"
  | "mountains"
  | "city"
  | "design";

// DTO para construir pills o tarjetas de categorias en UI.
export interface CategoryOption {
  key: StayCategory;
  label: string;
  icon: string;
}

// Datos del anfitrion mostrados en la ficha de detalle.
export interface HostProfile {
  name: string;
  yearsHosting: number;
  profession: string;
  quote: string;
  superhost: boolean;
}

// Estructura de cada resena visible en el bloque de valoraciones.
export interface StayReview {
  id: string;
  author: string;
  rating: number;
  month: string;
  comment: string;
}

// Entidad principal de la aplicacion: representa un alojamiento completo.
export interface Stay {
  id: string;
  title: string;
  location: string;
  country: string;
  category: StayCategory;
  rating: number;
  reviewsCount: number;
  pricePerNight: number;
  guestFavorite: boolean;
  maxGuests: number;
  bedrooms: number;
  beds: number;
  baths: number;
  cancellation: "flexible" | "moderate" | "strict";
  description: string;
  amenities: string[];
  imageTones: string[];
  host: HostProfile;
  reviews: StayReview[];
  coordinates: {
    x: number;
    y: number;
  };
  image: string;
}
