import Link from "next/link";

export const RoomDetailLoading = () => {
  return (
    <section className="mx-auto w-full max-w-[1280px] px-6 py-10 md:px-10">
      <div className="rounded-2xl border border-[var(--outline-variant)] bg-white p-6 text-sm text-[var(--on-surface-variant)]">
        Cargando detalle de la habitacion...
      </div>
    </section>
  );
};

export const RoomDetailNotFound = () => {
  return (
    <section className="mx-auto w-full max-w-[1280px] px-6 py-10 md:px-10">
      <div className="space-y-3 rounded-2xl border border-[var(--outline-variant)] bg-white p-6">
        <p className="text-sm text-[var(--on-surface)]">No encontramos esta habitacion.</p>
        <Link href="/catalog" className="inline-flex text-xs font-semibold uppercase tracking-wider text-[var(--primary)]">
          Volver al catalogo
        </Link>
      </div>
    </section>
  );
};
