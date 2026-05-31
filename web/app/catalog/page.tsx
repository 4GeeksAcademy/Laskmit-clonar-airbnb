"use client";

import { useMemo, useState } from "react";
import { BottomNavBar } from "@/components/bottom-nav-bar";
import { FilterBar } from "@/components/filter-bar";
import { SplitViewLayout } from "@/components/split-view-layout";
import { TopNavBar } from "@/components/top-nav-bar";
import { stays } from "@/lib/stays-data";

// Que hace: muestra el catalogo con ordenamiento por precio y vista dividida lista + mapa.
// De que depende: useMemo/useState, dataset local y componentes de catalogo/mapa.
// Donde se usa: ruta /catalog.
// Hooks usados: useState (orden actual), useMemo (lista ordenada memoizada).

// CatalogPage muestra un listado ordenable y su mapa asociado en vista dividida.
export default function CatalogPage() {
  // Controla si el orden por precio es ascendente o descendente.
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  // Prepara datos para catalogo: cambia imagenes y aplica orden por precio.
  const catalogStays = useMemo(() => {
    const withCatalogImages = stays.map((stay, index) => ({
      ...stay,
      image: index % 2 === 0 ? "/images/catalogo_01.jpg" : "/images/catalogo_02.jpg",
    }));

    return withCatalogImages.sort((a, b) =>
      sortOrder === "asc" ? a.pricePerNight - b.pricePerNight : b.pricePerNight - a.pricePerNight,
    );
  }, [sortOrder]);

  return (
    // Estructura: barra superior, filtros, controles de orden, split list/map y nav movil.
    <main className="min-h-screen bg-[var(--surface)]">
      <TopNavBar compact />
      <FilterBar activeLabel="Todos" />

      <section className="mx-auto flex w-full max-w-[1280px] items-center justify-between px-6 pt-6 md:px-10">
        <p className="text-sm text-[var(--on-surface-variant)]">
          {catalogStays.length} resultados
        </p>

        <label className="flex items-center gap-2 text-sm text-[var(--on-surface)]">
          <span>Ordenar por precio</span>
          <select
            value={sortOrder}
            onChange={(event) => setSortOrder(event.target.value as "asc" | "desc")}
            className="rounded-full border border-[var(--outline-variant)] bg-white px-3 py-1.5"
            aria-label="Ordenar resultados por precio"
          >
            <option value="asc">Ascendente</option>
            <option value="desc">Descendente</option>
          </select>
        </label>
      </section>

      <SplitViewLayout stays={catalogStays} />
      <BottomNavBar active="favoritos" />
    </main>
  );
}
