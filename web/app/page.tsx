"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BottomNavBar } from "@/components/bottom-nav-bar";
import { CategoryCarousel } from "@/components/category-carousel";
import { PropertyGrid } from "@/components/property-grid";
import { TopNavBar } from "@/components/top-nav-bar";
import { categoryOptions, stays } from "@/lib/stays-data";
import { Stay, StayCategory } from "@/types/stay";

type HomeCategory = StayCategory | "all";

const homeCategories = [
  { key: "all", label: "Todo", icon: "Todos" },
  ...categoryOptions,
];

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState<HomeCategory>("all");
  const [loading, setLoading] = useState(true);
  const [allStays, setAllStays] = useState<Stay[]>([]);
  const [visibleStays, setVisibleStays] = useState<Stay[]>([]);

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

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setVisibleStays(filterStays(allStays, value, activeCategory));
  };

  const handleCategorySelect = (category: string) => {
    const nextCategory = category as HomeCategory;
    setActiveCategory(nextCategory);
    setVisibleStays(filterStays(allStays, searchTerm, nextCategory));
  };

  useEffect(() => {
    const timerId = window.setTimeout(() => {
      setAllStays(stays);
      setVisibleStays(filterStays(stays, "", "all"));
      setLoading(false);
    }, 1000);

    return () => window.clearTimeout(timerId);
  }, []);

  return (
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
