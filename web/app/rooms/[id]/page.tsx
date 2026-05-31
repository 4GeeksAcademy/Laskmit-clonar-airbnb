import { RoomDetailPage } from "@/components/room-detail-page";

// Que hace: actua como entrada de ruta dinamica para el detalle de una estancia.
// De que depende: componente compartido RoomDetailPage.
// Donde se usa: ruta /rooms/:id.

// Esta ruta dinamica delega todo el render de detalle en un componente compartido.
export default function RoomPage() {
  return <RoomDetailPage />;
}
