import Link from "next/link";

// Que hace: encapsula estados visuales del detalle (cargando y no encontrado).
// De que depende: estilos del proyecto y enlace de retorno con next/link.
// Donde se usa: RoomDetailPage.

// Estado temporal mostrado mientras se resuelve la estancia solicitada.
export const RoomDetailLoading = () => {
  return (
    <section className="mx-auto w-full max-w-[1280px] px-6 py-10 md:px-10">
      <div className="rounded-2xl border border-[var(--outline-variant)] bg-white p-6 text-sm text-[var(--on-surface-variant)]">
        Cargando detalle de la habitacion...
      </div>
    </section>
  );
};

// Estado de error funcional cuando el id no coincide con ninguna estancia en datos.
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
