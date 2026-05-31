import { RoomDetailPage } from "@/components/room-detail-page";

// Que hace: ofrece una ruta alternativa al mismo detalle de estancia.
// De que depende: componente compartido RoomDetailPage.
// Donde se usa: ruta /stays/:id.

// Ruta alternativa hacia el mismo detalle, util para mantener compatibilidad de URLs.
export default function StayDetailPage() {
  return <RoomDetailPage />;
}
