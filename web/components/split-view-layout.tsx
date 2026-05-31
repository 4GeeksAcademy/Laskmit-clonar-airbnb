import { Stay } from "@/types/stay";
import { PropertyCard } from "@/components/property-card";
import { MapInterface } from "@/components/map-interface";

// Que hace: organiza resultados en dos paneles (lista y mapa).
// De que depende: dataset Stay, PropertyCard compacta y MapInterface.
// Donde se usa: Catalog.

interface SplitViewLayoutProps {
  stays: Stay[];
}

// Distribuye el catalogo en dos paneles: listado de estancias y mapa sincronizado.
export const SplitViewLayout = ({ stays }: SplitViewLayoutProps) => {
  return (
    <section className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-6 px-6 py-6 pb-24 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:pb-10">
      <div className="space-y-5">
        {/* Lista compacta para lectura rapida y comparacion de resultados. */}
        {stays.map((stay) => (
          <div key={stay.id} className="rounded-2xl border border-[var(--outline-variant)]/70 p-3">
            <PropertyCard stay={stay} compact />
          </div>
        ))}
      </div>
      {/* El mapa recibe el mismo conjunto de datos para mantener contexto espacial. */}
      <MapInterface stays={stays} />
    </section>
  );
};
