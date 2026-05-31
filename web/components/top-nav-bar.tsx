"use client";

import Link from "next/link";

// Que hace: dibuja la barra superior con logo, buscador/CTA y acciones de usuario.
// De que depende: props de modo compacto y callbacks de busqueda, ademas de next/link.
// Donde se usa: Home, Catalog y Detail.

interface TopNavBarProps {
  compact?: boolean;
  searchValue?: string;
  onSearchChange?: (value: string) => void;
}

// Barra superior reutilizable: en home muestra buscador activo y en otras vistas usa modo compacto.
export const TopNavBar = ({ compact = false, searchValue, onSearchChange }: TopNavBarProps) => {
  // Solo habilita input real cuando recibe valor y callback de cambio.
  const hasSearch = typeof searchValue === "string" && typeof onSearchChange === "function";

  return (
    <header className="sticky top-0 z-30 border-b border-[var(--outline-variant)]/70 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between gap-3 px-6 py-3 md:px-10">
        <Link href="/" className="text-lg font-bold tracking-tight text-[var(--on-surface)]">
          StayShare
        </Link>

        {/* Si hay props de busqueda, renderiza un input controlado; si no, una UI de CTA. */}
        {hasSearch ? (
          <label
            className="flex w-full max-w-[620px] items-center gap-2 rounded-full border border-[var(--outline-variant)] bg-white px-3 py-2 shadow-[0_6px_16px_rgba(0,0,0,0.08)] md:px-4"
            aria-label="Buscar hospedaje"
          >
            <span className="hidden text-sm font-semibold text-[var(--on-surface)] md:inline">Buscar</span>
            <input
              value={searchValue}
              onChange={(event) => onSearchChange(event.target.value)}
              placeholder="Destino, ciudad o titulo"
              className="w-full bg-transparent text-sm text-[var(--on-surface)] outline-none placeholder:text-[var(--on-surface-variant)]"
            />
            <span className="rounded-full bg-[var(--primary)] px-3 py-1 text-xs font-semibold text-[var(--on-primary)]">
              Ir
            </span>
          </label>
        ) : (
          <button
            className="flex w-full max-w-[620px] items-center gap-2 rounded-full border border-[var(--outline-variant)] bg-white px-3 py-2 text-left shadow-[0_6px_16px_rgba(0,0,0,0.08)] md:px-4"
            aria-label="Buscar hospedaje"
          >
            <span className="truncate text-sm font-semibold text-[var(--on-surface)]">Donde</span>
            <span className="hidden text-[var(--on-surface-variant)] md:inline">|</span>
            <span className="hidden text-sm text-[var(--on-surface)] md:inline">Cuando</span>
            <span className="hidden text-[var(--on-surface-variant)] md:inline">|</span>
            <span className="hidden text-sm text-[var(--on-surface)] md:inline">Quien</span>
            <span className="ml-auto rounded-full bg-[var(--primary)] px-3 py-1 text-xs font-semibold text-[var(--on-primary)]">
              Buscar
            </span>
          </button>
        )}

        {/* Acciones secundarias visibles en desktop */}
        <div className="hidden items-center gap-2 md:flex">
          {!compact && (
            <Link
              href="/catalog"
              className="rounded-full border border-[var(--outline-variant)] px-4 py-2 text-sm font-medium text-[var(--on-surface)]"
            >
              Ver mapa
            </Link>
          )}
          <button
            className="grid h-10 w-10 place-content-center rounded-full border border-[var(--outline-variant)] text-sm text-[var(--on-surface)]"
            aria-label="Idioma"
          >
            🌐
          </button>
          <button
            className="flex items-center gap-2 rounded-full border border-[var(--outline-variant)] px-3 py-2 text-sm text-[var(--on-surface)]"
            aria-label="Menu de usuario"
          >
            <span>☰</span>
            <span className="rounded-full bg-[var(--surface-variant)] px-2 py-0.5">👤</span>
          </button>
        </div>
      </div>
    </header>
  );
};
