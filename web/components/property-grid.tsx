import { Stay } from "@/types/stay";
import { PropertyCard } from "@/components/property-card";

interface PropertyGridProps {
  stays: Stay[];
}

export const PropertyGrid = ({ stays }: PropertyGridProps) => {
  return (
    <section className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-8 px-6 py-8 pb-24 sm:grid-cols-2 md:grid-cols-3 md:px-10 md:pb-10" aria-label="Propiedades destacadas">
      {stays.map((stay) => (
        <PropertyCard key={stay.id} stay={stay} />
      ))}
    </section>
  );
};
