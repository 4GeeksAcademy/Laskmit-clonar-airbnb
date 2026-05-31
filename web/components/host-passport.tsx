import { HostProfile } from "@/types/stay";

// Que hace: resume informacion del anfitrion y destaca estado superhost.
// De que depende: datos HostProfile.
// Donde se usa: RoomDetailContent.

interface HostPassportProps {
  host: HostProfile;
}

// Resume datos clave del anfitrion y destaca si tiene estado de superhost.
export const HostPassport = ({ host }: HostPassportProps) => {
  return (
    <section className="flex items-center justify-between gap-4 rounded-3xl border border-[var(--outline-variant)] bg-[var(--surface-container-low)] p-5 shadow-[0_6px_16px_rgba(0,0,0,0.08)]">
      <div className="flex items-center gap-3">
        <div className="grid h-12 w-12 place-content-center rounded-full bg-[var(--surface-variant)] text-sm font-semibold text-[var(--on-surface)]">
          AV
        </div>
        <div>
          <p className="text-sm font-semibold text-[var(--on-surface)]">Anfitrion: {host.name}</p>
          <p className="text-sm text-[var(--on-surface-variant)]">{host.yearsHosting} anos como anfitrion</p>
        </div>
      </div>

      {host.superhost ? (
        <span className="inline-flex rounded-full bg-[var(--primary)]/10 px-3 py-1 text-xs font-semibold text-[var(--primary)]">
          Superhost
        </span>
      ) : null}
    </section>
  );
};
