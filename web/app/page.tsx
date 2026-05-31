"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BottomNavBar } from "@/components/bottom-nav-bar";
import { CategoryCarousel } from "@/components/category-carousel";
import { PropertyGrid } from "@/components/property-grid";
import { TopNavBar } from "@/components/top-nav-bar";
import { categoryOptions, stays } from "@/lib/stays-data";
import { Stay, StayCategory } from "@/types/stay";

// Que hace: renderiza la home de exploracion con busqueda, categorias y listado filtrado.
// De que depende: estado local de React, dataset stays-data y componentes de navegacion/listado.
// Donde se usa: ruta principal /.
// Hooks usados: useState (estado UI), useEffect (carga inicial), sin hooks de enrutado.

type HomeCategory = StayCategory | "all";

// Une la opcion "all" con las categorias del dataset para el carrusel superior.
const homeCategories = [
  { key: "all", label: "Todo", icon: "Todos" },
  ...categoryOptions,
];

// HomePage es la pantalla principal de descubrimiento: busca, filtra y lista alojamientos.
export default function HomePage() {
  // Estado de busqueda textual por destino o nombre.
  const [searchTerm, setSearchTerm] = useState("");
  // Categoria activa del carrusel.
  const [activeCategory, setActiveCategory] = useState<HomeCategory>("all");
  // Simula espera de datos para mostrar estado de carga.
  const [loading, setLoading] = useState(true);
  // Fuente de datos completa disponible para filtros.
  const [allStays, setAllStays] = useState<Stay[]>([]);
  // Resultado filtrado que finalmente se pinta en pantalla.
  const [visibleStays, setVisibleStays] = useState<Stay[]>([]);

  // Aplica filtros por categoria y texto en una sola pasada sobre el arreglo de estancias.
  const filterStays = (source: Stay[], search: string, category: HomeCategory) => {
    const normalizedSearch = search.trim().toLowerCase();

    return source.filter((stay) => {
      const matchesCategory = category === "all" || stay.category === category;
      const matchesSearch =
        normalizedSearch.length === 0 ||
        stay.title.toLowerCase().includes(normalizedSearch) ||
        stay.location.toLowerCase().includes(normalizedSearch) ||
        stay.country.toLowerCase().includes(normalizedSearch);

      return matchesCategory && matchesSearch;
    });
  };

  // Cada cambio de busqueda recalcula de inmediato la lista visible.
  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setVisibleStays(filterStays(allStays, value, activeCategory));
  };

  // Cada cambio de categoria reutiliza el texto actual para mantener ambos filtros sincronizados.
  const handleCategorySelect = (category: string) => {
    const nextCategory = category as HomeCategory;
    setActiveCategory(nextCategory);
    setVisibleStays(filterStays(allStays, searchTerm, nextCategory));
  };

  useEffect(() => {
    // Simula una peticion asincrona antes de hidratar la UI con datos.
    const timerId = window.setTimeout(() => {
      setAllStays(stays);
      setVisibleStays(filterStays(stays, "", "all"));
      setLoading(false);
    }, 1000);

    return () => window.clearTimeout(timerId);
  }, []);

  return (
    // Estructura principal: navegacion superior, filtros, contenido y navegacion movil.
    <main className="min-h-screen bg-[var(--surface)]">
      <TopNavBar searchValue={searchTerm} onSearchChange={handleSearchChange} />
      <CategoryCarousel categories={homeCategories} active={activeCategory} onSelect={handleCategorySelect} />

      <section className="mx-auto flex w-full max-w-[1280px] items-center justify-between px-6 pt-8 md:px-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--on-surface-variant)]">
            Escapadas de la semana
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-[var(--on-surface)] md:text-4xl">
            Descubre tu proxima estancia inolvidable
          </h1>
        </div>
        <Link
          href="/catalog"
          className="hidden rounded-full border border-[var(--outline-variant)] bg-white px-5 py-2 text-sm font-semibold text-[var(--on-surface)] md:inline-flex"
        >
          Abrir catalogo
        </Link>
      </section>

      {/* Render condicional por estado de carga y por existencia de resultados */}
      {loading ? (
        <section className="mx-auto w-full max-w-[1280px] px-6 py-10 md:px-10">
          <div className="rounded-2xl border border-[var(--outline-variant)] bg-white p-6 text-sm text-[var(--on-surface-variant)]">
            Cargando alojamientos...
          </div>
        </section>
      ) : (
        <>
          {visibleStays.length > 0 ? (
            <PropertyGrid stays={visibleStays} />
          ) : (
            <section className="mx-auto w-full max-w-[1280px] px-6 py-10 md:px-10">
              <div className="rounded-2xl border border-[var(--outline-variant)] bg-white p-6 text-sm text-[var(--on-surface-variant)]">
                No encontramos alojamientos para esa busqueda.
              </div>
            </section>
          )}
        </>
      )}
      <BottomNavBar active="explorar" />
    </main>
  );
}
