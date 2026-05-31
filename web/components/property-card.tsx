import Image from "next/image";
import Link from "next/link";
import { Stay } from "@/types/stay";

// Que hace: muestra el resumen visual y textual de una estancia.
// De que depende: datos Stay, next/image para imagen optimizada y Link a detalle.
// Donde se usa: Home, Catalog y seccion de relacionados en Detail.

interface PropertyCardProps {
  stay: Stay;
  compact?: boolean;
}

// Tarjeta resumen de una estancia: combina imagen, metadata y acceso al detalle.
export const PropertyCard = ({ stay, compact = false }: PropertyCardProps) => {
  return (
    <article className="group flex flex-col gap-3">
      {/* Toda la tarjeta es clicable para simplificar navegacion en movil y desktop. */}
      <Link href={`/rooms/${stay.id}`} className="space-y-3">
        <div
          className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${stay.imageTones[0]} ${
            compact ? "h-44" : "h-64"
          }`}
        >
          <Image
            src={stay.image}
            alt={stay.title}
            fill
            sizes={compact ? "(max-width: 768px) 100vw, 45vw" : "(max-width: 768px) 100vw, 33vw"}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {/* Badge condicional para destacar estancias de alto interes para huespedes. */}
          {stay.guestFavorite && (
            <span className="absolute left-3 top-3 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-[var(--on-surface)]">
              Favorito entre huespedes
            </span>
          )}
          <span className="absolute bottom-3 right-3 rounded-full border border-white/70 bg-white/80 px-2 py-1 text-xs text-[var(--on-surface)]">
            {stay.location}
          </span>
        </div>

        <div className="space-y-1">
          <div className="flex items-start justify-between gap-2">
            <h3 className="line-clamp-2 text-sm font-semibold text-[var(--on-surface)] md:text-base">{stay.title}</h3>
            <span className="shrink-0 text-sm font-medium text-[var(--on-surface)]">★ {stay.rating.toFixed(2)}</span>
          </div>
          <p className="text-sm text-[var(--on-surface-variant)]">
            {stay.country} · {stay.bedrooms} hab
          </p>
          <p className="text-sm text-[var(--on-surface)]">
            <span className="font-semibold">USD {stay.pricePerNight}</span> por noche
          </p>
        </div>
      </Link>
    </article>
  );
};
