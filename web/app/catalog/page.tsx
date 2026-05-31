"use client";

import { useMemo, useState } from "react";
import { BottomNavBar } from "@/components/bottom-nav-bar";
import { FilterBar } from "@/components/filter-bar";
import { SplitViewLayout } from "@/components/split-view-layout";
import { TopNavBar } from "@/components/top-nav-bar";
import { stays } from "@/lib/stays-data";

export default function CatalogPage() {
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

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
