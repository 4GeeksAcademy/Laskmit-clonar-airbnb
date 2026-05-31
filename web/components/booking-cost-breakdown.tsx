// Que hace: presenta el resumen de costos de la reserva en filas claras.
// De que depende: valores ya calculados por BookingWidget.
// Donde se usa: BookingWidget.

interface BookingCostBreakdownProps {
  pricePerNight: number;
  nights: number;
  subtotal: number;
  cleaningFee: number;
  serviceFee: number;
  total: number;
}

// Presenta en formato legible los valores ya calculados por el widget de reserva.
export const BookingCostBreakdown = ({
  pricePerNight,
  nights,
  subtotal,
  cleaningFee,
  serviceFee,
  total,
}: BookingCostBreakdownProps) => {
  return (
    <div className="mt-4 space-y-2 text-sm text-[var(--on-surface)]">
      <div className="flex justify-between">
        <span>USD {pricePerNight} x {nights} noches</span>
        <span>USD {subtotal}</span>
      </div>
      <div className="flex justify-between">
        <span>Tarifa de limpieza</span>
        <span>USD {cleaningFee}</span>
      </div>
      <div className="flex justify-between">
        <span>Tarifa de servicio</span>
        <span>USD {serviceFee}</span>
      </div>
      <div className="flex justify-between border-t border-[var(--outline-variant)] pt-2 font-semibold">
        <span>Total</span>
        <span>USD {total}</span>
      </div>
    </div>
  );
};
