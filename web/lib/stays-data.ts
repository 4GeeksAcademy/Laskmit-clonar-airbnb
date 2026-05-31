import { CategoryOption, Stay } from "@/types/stay";

// Que hace: centraliza datos mock y helpers de consulta de estancias.
// De que depende: tipos de dominio Stay/CategoryOption.
// Donde se usa: Home, Catalog y Detail.

// Opciones de categoria usadas por filtros y carruseles de navegacion.
export const categoryOptions: CategoryOption[] = [
  { key: "cabins", label: "Cabanas", icon: "Cabana" },
  { key: "pools", label: "Piscinas", icon: "Piscina" },
  { key: "beach", label: "Playa", icon: "Costa" },
  { key: "mountains", label: "Montana", icon: "Altura" },
  { key: "city", label: "Ciudad", icon: "Urbano" },
  { key: "design", label: "Diseno", icon: "Autor" },
];

// Dataset local de estancias usado por la UI para prototipar sin backend.
export const stays: Stay[] = [
  // Estancia 1: escenario de costa orientado a descanso.
  {
    id: "sjo-ocean-dome",
    title: "Domo oceano con terraza privada",
    location: "Santa Teresa",
    country: "Costa Rica",
    category: "beach",
    rating: 4.97,
    reviewsCount: 214,
    pricePerNight: 182,
    guestFavorite: true,
    maxGuests: 4,
    bedrooms: 2,
    beds: 2,
    baths: 2,
    cancellation: "flexible",
    description:
      "Un refugio frente al mar con interiores suaves, ventilacion cruzada y una terraza ideal para ver atardeceres.",
    amenities: [
      "Wifi de 600 Mbps",
      "Piscina privada",
      "Cocina completa",
      "Acceso a playa en 3 minutos",
      "Estacionamiento gratuito",
      "Aire acondicionado",
    ],
    imageTones: [
      "from-rose-200 via-orange-100 to-amber-50",
      "from-cyan-200 via-teal-100 to-emerald-100",
      "from-slate-300 via-zinc-200 to-stone-100",
      "from-orange-200 via-pink-100 to-rose-50",
      "from-teal-300 via-cyan-100 to-sky-100",
    ],
    image: "/images/Home_01.jpg",
    host: {
      name: "Sofia",
      yearsHosting: 6,
      profession: "Arquitecta de interiores",
      quote: "Creo estancias que te bajan el ritmo apenas cruzas la puerta.",
      superhost: true,
    },
    reviews: [
      {
        id: "r1",
        author: "Valeria",
        rating: 5,
        month: "Marzo 2026",
        comment:
          "La casa se siente mejor que en fotos. Todo impecable y muy tranquila para trabajar remoto.",
      },
      {
        id: "r2",
        author: "Daniel",
        rating: 5,
        month: "Enero 2026",
        comment:
          "Excelente ubicacion y comunicacion del anfitrion. Volveriamos sin dudarlo.",
      },
      {
        id: "r3",
        author: "Camila",
        rating: 4,
        month: "Diciembre 2025",
        comment: "Muy comodo. El amanecer desde la terraza es espectacular.",
      },
    ],
    coordinates: { x: 68, y: 52 },
  },
  // Estancia 2: escenario urbano para viajes cortos y trabajo remoto.
  {
    id: "med-cloud-loft",
    title: "Loft panoramico en distrito creativo",
    location: "Medellin",
    country: "Colombia",
    category: "city",
    rating: 4.91,
    reviewsCount: 163,
    pricePerNight: 126,
    guestFavorite: false,
    maxGuests: 2,
    bedrooms: 1,
    beds: 1,
    baths: 1,
    cancellation: "moderate",
    description:
      "Loft de doble altura con vistas urbanas, rincones de lectura y acceso caminando a cafes y galerias.",
    amenities: [
      "Espacio de trabajo dedicado",
      "Check-in autonomo",
      "Gimnasio del edificio",
      "Cafetera premium",
      "Lavadora y secadora",
    ],
    imageTones: [
      "from-slate-200 via-zinc-100 to-neutral-50",
      "from-emerald-200 via-teal-100 to-cyan-50",
      "from-orange-200 via-amber-100 to-yellow-50",
      "from-pink-200 via-rose-100 to-orange-50",
      "from-violet-200 via-fuchsia-100 to-pink-50",
    ],
    image: "/images/Home_02.jpg",
    host: {
      name: "Mateo",
      yearsHosting: 4,
      profession: "Fotografo documental",
      quote: "Disene este lugar para que siempre encuentres una buena luz.",
      superhost: false,
    },
    reviews: [
      {
        id: "r4",
        author: "Lucia",
        rating: 5,
        month: "Abril 2026",
        comment: "Muy central y silencioso a la vez. Perfecto para una escapada corta.",
      },
      {
        id: "r5",
        author: "Ivan",
        rating: 4,
        month: "Febrero 2026",
        comment: "Buen diseno y excelente cama. El check-in fue super simple.",
      },
    ],
    coordinates: { x: 40, y: 41 },
  },
  // Estancia 3: escenario de montana con enfoque de naturaleza.
  {
    id: "baro-ridge-cabin",
    title: "Cabana de altura con tina termica",
    location: "Bariloche",
    country: "Argentina",
    category: "mountains",
    rating: 4.99,
    reviewsCount: 98,
    pricePerNight: 209,
    guestFavorite: true,
    maxGuests: 5,
    bedrooms: 2,
    beds: 3,
    baths: 2,
    cancellation: "strict",
    description:
      "Cabana de madera noble con vista al lago, tina exterior y chimenea para noches frias.",
    amenities: [
      "Chimenea interior",
      "Tina termica exterior",
      "Parrilla",
      "Vista al lago",
      "Guia local de senderos",
    ],
    imageTones: [
      "from-amber-300 via-orange-200 to-rose-100",
      "from-sky-200 via-cyan-100 to-blue-50",
      "from-emerald-300 via-green-200 to-lime-100",
      "from-stone-300 via-neutral-200 to-zinc-100",
      "from-cyan-300 via-sky-200 to-indigo-100",
    ],
    image: "/images/Home_03.jpg",
    host: {
      name: "Paula",
      yearsHosting: 8,
      profession: "Guia de montana",
      quote: "Cada temporada trae un paisaje distinto; aqui siempre hay algo nuevo.",
      superhost: true,
    },
    reviews: [
      {
        id: "r6",
        author: "Gaston",
        rating: 5,
        month: "Mayo 2026",
        comment: "La mejor vista que tuvimos en Patagonia. Super recomendable.",
      },
      {
        id: "r7",
        author: "Noelia",
        rating: 5,
        month: "Julio 2025",
        comment: "Acogedora y calida. La tina al atardecer fue inolvidable.",
      },
    ],
    coordinates: { x: 78, y: 30 },
  },
  // Estancia 4: escenario premium de piscina y servicio.
  {
    id: "tul-lagoon-pool-house",
    title: "Casa laguna con piscina infinita",
    location: "Tulum",
    country: "Mexico",
    category: "pools",
    rating: 4.88,
    reviewsCount: 147,
    pricePerNight: 238,
    guestFavorite: true,
    maxGuests: 6,
    bedrooms: 3,
    beds: 3,
    baths: 3,
    cancellation: "flexible",
    description:
      "Volumenes abiertos, vegetacion nativa y piscina de borde infinito para una estancia de descanso total.",
    amenities: [
      "Piscina infinita",
      "Chef bajo solicitud",
      "Bicicletas incluidas",
      "Terraza lounge",
      "Servicio de limpieza diario",
    ],
    imageTones: [
      "from-cyan-200 via-sky-100 to-blue-50",
      "from-green-300 via-emerald-200 to-teal-100",
      "from-amber-200 via-yellow-100 to-lime-50",
      "from-orange-200 via-rose-100 to-pink-50",
      "from-teal-300 via-cyan-200 to-sky-100",
    ],
    image: "/images/Home_04.jpg",
    host: {
      name: "Andrea",
      yearsHosting: 5,
      profession: "Chef y anfitriona",
      quote: "Mi objetivo es que descanses como si estuvieras en un spa privado.",
      superhost: true,
    },
    reviews: [
      {
        id: "r8",
        author: "Renata",
        rating: 5,
        month: "Enero 2026",
        comment: "La piscina y la privacidad son de otro nivel. Servicio muy atento.",
      },
      {
        id: "r9",
        author: "Marco",
        rating: 4,
        month: "Noviembre 2025",
        comment: "Casa preciosa, ideal para grupo de amigos.",
      },
    ],
    coordinates: { x: 21, y: 62 },
  },
];

// Busca una estancia por id para renderizar detalle de ruta dinamica.
export function getStayById(id: string): Stay | undefined {
  return stays.find((stay) => stay.id === id);
}

// Obtiene recomendaciones excluyendo el id actual, limitado por cantidad maxima.
export function getRelatedStays(currentId: string, max = 3): Stay[] {
  return stays.filter((stay) => stay.id !== currentId).slice(0, max);
}
