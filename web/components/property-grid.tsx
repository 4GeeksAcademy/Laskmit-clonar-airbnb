import { Stay } from "@/types/stay";
import { PropertyCard } from "@/components/property-card";

// Que hace: renderiza una rejilla responsiva de tarjetas de estancias.
// De que depende: arreglo de Stay y componente PropertyCard.
// Donde se usa: Home (listado principal).

interface PropertyGridProps {
  stays: Stay[];
}

// Rejilla responsiva de estancias. Solo recibe datos y delega el detalle visual a PropertyCard.
export const PropertyGrid = ({ stays }: PropertyGridProps) => {
  return (
    <section className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-8 px-6 py-8 pb-24 sm:grid-cols-2 md:grid-cols-3 md:px-10 md:pb-10" aria-label="Propiedades destacadas">
      {stays.map((stay) => (
        <PropertyCard key={stay.id} stay={stay} />
      ))}
    </section>
  );
};
