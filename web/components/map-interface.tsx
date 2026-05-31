import dynamic from "next/dynamic";
import { Stay } from "@/types/stay";

// Que hace: envuelve y monta el mapa de estancias con carga diferida en cliente.
// De que depende: dynamic import de StaysMap y arreglo de stays.
// Donde se usa: SplitViewLayout en Catalog.

// Se carga de forma dinamica para evitar SSR con Leaflet (depende de window/document).
const StaysMap = dynamic(() => import("@/components/stays-map").then((module) => module.StaysMap), {
  ssr: false,
  loading: () => (
    <div className="relative min-h-[280px] overflow-hidden rounded-3xl border border-[var(--outline-variant)] bg-[#e6e6e6] p-5 md:min-h-[420px] lg:min-h-[680px]">
      <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-lg font-semibold text-[#6c6c6c]">
        Cargando mapa...
      </p>
    </div>
  ),
});

interface MapInterfaceProps {
  stays: Stay[];
}

// Marco visual del mapa con altura responsiva.
export const MapInterface = ({ stays }: MapInterfaceProps) => {
  return (
    <div className="min-h-[280px] rounded-3xl border border-[var(--outline-variant)] md:min-h-[420px] lg:min-h-[680px]">
      <StaysMap stays={stays} />
    </div>
  );
};
