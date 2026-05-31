// Que hace: lista amenidades del alojamiento con un icono de apoyo.
// De que depende: arreglo de textos amenity y funcion amenityIcon.
// Donde se usa: RoomDetailContent.

interface AmenitiesListProps {
  amenities: string[];
}

// Asigna un icono aproximado segun palabras clave de cada amenidad.
const amenityIcon = (label: string) => {
  const lower = label.toLowerCase();

  if (lower.includes("wifi")) return "📶";
  if (lower.includes("piscina")) return "🏊";
  if (lower.includes("cocina") || lower.includes("chef")) return "🍳";
  if (lower.includes("playa")) return "🏖️";
  if (lower.includes("estacionamiento")) return "🚗";
  if (lower.includes("aire")) return "❄️";
  if (lower.includes("gimnasio")) return "🏋️";
  if (lower.includes("lavadora")) return "🧺";
  if (lower.includes("chimenea")) return "🔥";
  return "✔️";
};

// Lista visual de amenidades disponibles en la estancia.
export const AmenitiesList = ({ amenities }: AmenitiesListProps) => {
  return (
    <section className="space-y-3" aria-label="Amenidades">
      <h2 className="text-2xl font-bold text-[var(--on-surface)]">Lo que ofrece este lugar</h2>
      <ul className="grid gap-3 rounded-2xl border border-[var(--outline-variant)] bg-white p-4 md:grid-cols-2">
        {amenities.map((item) => (
          <li key={item} className="flex items-center gap-2 rounded-xl border border-[var(--outline-variant)]/50 px-3 py-2 text-sm text-[var(--on-surface)]">
            <span>{amenityIcon(item)}</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
