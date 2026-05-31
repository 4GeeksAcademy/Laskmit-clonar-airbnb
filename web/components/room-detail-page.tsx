"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { RoomDetailContent } from "@/components/room-detail-content";
import { RoomDetailLoading, RoomDetailNotFound } from "@/components/room-detail-status";
import { TopNavBar } from "@/components/top-nav-bar";
import { getRelatedStays, getStayById } from "@/lib/stays-data";
import { Stay } from "@/types/stay";

// Que hace: orquesta la pagina de detalle (carga datos por id y decide estado de render).
// De que depende: useParams, stays-data, barra superior y componentes de estado/contenido.
// Donde se usa: rutas /rooms/:id y /stays/:id.
// Hooks usados: useParams (id de ruta), useState (loading/stay), useEffect (carga por id), useMemo (relacionados).

// Galeria fija usada por el detalle. Se inyecta al componente de imagenes para mantener consistencia visual.
const roomImages = [
  "/images/Detalle_ppal_01.jpg",
  "/images/Detalle_sec_01.jpg",
  "/images/Detalle_sec_02.jpg",
  "/images/Detalle_sec_03.jpg",
  "/images/Detalle_sec_04.jpg",
];

// Orquesta el ciclo de vida del detalle: leer id de URL, cargar datos y decidir que estado mostrar.
export const RoomDetailPage = () => {
  // Extrae el segmento dinamico /:id desde la URL actual.
  const params = useParams<{ id: string }>();
  const roomId = params?.id ?? "";
  // Loading controla la rama de UI (cargando, encontrado, no encontrado).
  const [loading, setLoading] = useState(true);
  // Guarda la estancia encontrada o null cuando no existe.
  const [stay, setStay] = useState<Stay | null>(null);

  useEffect(() => {
    // Simula fetch asincrono por id.
    const timer = window.setTimeout(() => {
      setStay(getStayById(roomId) ?? null);
      setLoading(false);
    }, 1000);

    return () => window.clearTimeout(timer);
  }, [roomId]);

  // Calcula sugerencias relacionadas solo cuando ya hay estancia actual.
  const related = useMemo(() => (stay ? getRelatedStays(stay.id) : []), [stay]);

  return (
    <main className="min-h-screen bg-[var(--surface)] pb-16">
      <TopNavBar compact />
      {/* Arbol condicional principal del detalle */}
      {loading ? <RoomDetailLoading /> : stay ? <RoomDetailContent stay={stay} related={related} roomImages={roomImages} /> : <RoomDetailNotFound />}
    </main>
  );
};
