import Link from "next/link";
import { AmenitiesList } from "@/components/amenities-list";
import { BookingWidget } from "@/components/booking-widget";
import { HostPassport } from "@/components/host-passport";
import { ImageGallery } from "@/components/image-gallery";
import { PropertyCard } from "@/components/property-card";
import { ReviewsSection } from "@/components/reviews-section";
import { Stay } from "@/types/stay";

// Que hace: compone el contenido completo del detalle de estancia.
// De que depende: datos Stay y subcomponentes de galeria, info, resenas y reserva.
// Donde se usa: RoomDetailPage (rama de estado exitoso).

interface RoomDetailContentProps {
  stay: Stay;
  related: Stay[];
  roomImages: string[];
}

// Ensambla todas las secciones de la ficha de detalle de una estancia.
export const RoomDetailContent = ({ stay, related, roomImages }: RoomDetailContentProps) => {
  return (
    <section className="mx-auto w-full max-w-[1280px] space-y-6 px-6 py-7 md:px-10 md:py-10">
      {/* Encabezado con navegacion de retorno y contexto basico del alojamiento. */}
      <div className="space-y-2">
        <Link href="/catalog" className="inline-flex text-xs font-semibold uppercase tracking-wider text-[var(--primary)]">
          Volver al catalogo
        </Link>
        <h1 className="text-3xl font-bold tracking-tight text-[var(--on-surface)] md:text-4xl">{stay.title}</h1>
        <p className="text-sm text-[var(--on-surface-variant)]">
          ★ {stay.rating.toFixed(2)} · {stay.reviewsCount} reseñas · {stay.location}, {stay.country}
        </p>
      </div>

      {/* Galeria principal con imagen grande y miniaturas de control. */}
      <ImageGallery tones={stay.imageTones} images={roomImages} />

      {/* Dos columnas: informacion descriptiva y panel de reserva. */}
      <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
        <div className="space-y-8">
          <section className="space-y-3 border-b border-[var(--outline-variant)] pb-6">
            <h2 className="text-2xl font-bold text-[var(--on-surface)]">Alojamiento entero · {stay.maxGuests} huespedes</h2>
            <p className="text-sm text-[var(--on-surface-variant)]">{stay.bedrooms} habitaciones · {stay.beds} camas · {stay.baths} banos</p>
            <p className="max-w-3xl text-sm leading-7 text-[var(--on-surface)]">{stay.description}</p>
          </section>
          <HostPassport host={stay.host} />
          <AmenitiesList amenities={stay.amenities} />
          <ReviewsSection reviews={stay.reviews} />
        </div>

        {/* Widget con fechas, huespedes y costos estimados. */}
        <BookingWidget
          pricePerNight={stay.pricePerNight}
          rating={stay.rating}
          reviewsCount={stay.reviewsCount}
          maxGuests={stay.maxGuests}
        />
      </div>

      {/* Recomendaciones de estancias relacionadas al final del detalle. */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-[var(--on-surface)]">Tambien te puede gustar</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {related.map((item) => (
            <PropertyCard key={item.id} stay={item} compact />
          ))}
        </div>
      </section>
    </section>
  );
};
