import Link from "next/link";

interface BottomNavBarProps {
  active: "explorar" | "favoritos" | "viajes" | "mensajes" | "perfil";
}

const items: Array<{ key: BottomNavBarProps["active"]; label: string; href: string }> = [
  { key: "explorar", label: "Explorar", href: "/" },
  { key: "favoritos", label: "Favoritos", href: "/catalog" },
  { key: "viajes", label: "Viajes", href: "/catalog" },
  { key: "mensajes", label: "Mensajes", href: "/catalog" },
  { key: "perfil", label: "Perfil", href: "/catalog" },
];

export const BottomNavBar = ({ active }: BottomNavBarProps) => {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-[var(--outline-variant)]/70 bg-white/90 backdrop-blur-xl md:hidden" aria-label="Navegacion movil">
      <ul className="mx-auto grid max-w-[480px] grid-cols-5">
        {items.map((item) => (
          <li key={item.key}>
            <Link
              href={item.href}
              className={`flex flex-col items-center gap-1 py-3 text-[11px] font-medium ${
                item.key === active ? "text-[var(--primary)]" : "text-[var(--on-surface-variant)]"
              }`}
            >
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
