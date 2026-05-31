"use client";

import Link from "next/link";

// Que hace: presenta categorias en un carrusel horizontal con estado activo.
// De que depende: lista de categorias, categoria activa y callback opcional de seleccion.
// Donde se usa: Home (y potencialmente otras vistas con filtros por categoria).

interface CategoryCarouselItem {
  key: string;
  label: string;
  icon: string;
}

interface CategoryCarouselProps {
  categories: CategoryCarouselItem[];
  active?: string;
  onSelect?: (category: string) => void;
}

// Muestra categorias desplazables horizontalmente y soporta dos modos:
// interactivo (botones) o navegacion por links.
export const CategoryCarousel = ({ categories, active, onSelect }: CategoryCarouselProps) => {
  return (
    <nav className="no-scrollbar overflow-x-auto border-b border-[var(--outline-variant)]/60 px-6 md:px-10" aria-label="Categorias">
      <div className="mx-auto flex w-max min-w-full max-w-[1280px] items-center gap-6 py-4">
        {categories.map((category) => {
          // Permite marcar visualmente la categoria seleccionada.
          const isActive = category.key === active;
          return (
            onSelect ? (
              <button
                key={category.key}
                onClick={() => onSelect(category.key)}
                className={`flex min-w-16 flex-col items-center gap-1 border-b-2 pb-2 text-xs transition ${
                  isActive
                    ? "border-[var(--on-surface)] text-[var(--on-surface)]"
                    : "border-transparent text-[var(--on-surface-variant)] hover:text-[var(--on-surface)]"
                }`}
                type="button"
              >
                <span className="text-[11px] font-semibold uppercase tracking-wide">{category.icon}</span>
                <span className="font-medium">{category.label}</span>
              </button>
            ) : (
              <Link
                key={category.key}
                href={isActive ? "/" : `/catalog?category=${category.key}`}
                className={`flex min-w-16 flex-col items-center gap-1 border-b-2 pb-2 text-xs transition ${
                  isActive
                    ? "border-[var(--on-surface)] text-[var(--on-surface)]"
                    : "border-transparent text-[var(--on-surface-variant)] hover:text-[var(--on-surface)]"
                }`}
              >
                <span className="text-[11px] font-semibold uppercase tracking-wide">{category.icon}</span>
                <span className="font-medium">{category.label}</span>
              </Link>
            )
          );
        })}
      </div>
    </nav>
  );
};
