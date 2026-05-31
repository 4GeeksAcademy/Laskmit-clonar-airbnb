import { StayReview } from "@/types/stay";

// Que hace: muestra las resenas en tarjetas con metrica y comentario.
// De que depende: coleccion de StayReview y estilos de grid responsivo.
// Donde se usa: RoomDetailContent.

interface ReviewsSectionProps {
  reviews: StayReview[];
}

// Muestra valoraciones en tarjetas. Incluye un input de busqueda preparado para futura logica.
export const ReviewsSection = ({ reviews }: ReviewsSectionProps) => {
  return (
    <section className="space-y-4" aria-label="Resenas">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-2xl font-bold text-[var(--on-surface)]">Valoraciones</h2>
        <input
          type="search"
          placeholder="Buscar en reseñas"
          className="w-full rounded-xl border border-[var(--outline-variant)] bg-white px-4 py-2 text-sm md:w-72"
        />
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        {reviews.map((review) => (
          <article
            key={review.id}
            className="rounded-2xl border border-[var(--outline-variant)] bg-white p-4"
          >
            <div className="flex items-baseline justify-between gap-2">
              <p className="font-semibold text-[var(--on-surface)]">{review.author}</p>
              <p className="text-xs text-[var(--on-surface-variant)]">{review.month}</p>
            </div>
            <p className="mt-1 text-xs font-semibold text-[var(--primary)]">{review.rating}/5</p>
            <p className="mt-3 text-sm leading-6 text-[var(--on-surface-variant)]">{review.comment}</p>
          </article>
        ))}
      </div>
    </section>
  );
};
