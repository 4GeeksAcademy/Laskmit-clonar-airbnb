interface FilterBarProps {
  activeLabel?: string;
}

export const FilterBar = ({ activeLabel = "Todos" }: FilterBarProps) => {
  const pills = ["Precio", "Tipo de alojamiento", "Cancelacion gratuita", "Instanbook"]; 

  return (
    <section className="flex flex-wrap items-center gap-2 border-b border-[var(--outline-variant)]/60 bg-[var(--surface-container-lowest)] px-6 py-4 md:px-8">
      <span className="text-xs font-semibold uppercase tracking-wider text-[var(--on-surface-variant)]">
        Categoria: {activeLabel}
      </span>
      {pills.map((pill) => (
        <button
          key={pill}
          className="rounded-full border border-[var(--outline-variant)] bg-white px-3 py-2 text-sm text-[var(--on-surface)] transition hover:border-[var(--on-surface)]"
        >
          {pill}
        </button>
      ))}
    </section>
  );
};
