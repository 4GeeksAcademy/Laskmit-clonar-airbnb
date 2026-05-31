"use client";

import DatePicker from "react-datepicker";

// Que hace: captura check-in/check-out y cantidad de huespedes.
// De que depende: react-datepicker y callbacks recibidos del BookingWidget.
// Donde se usa: BookingWidget.

interface BookingDateGuestsProps {
  checkIn: Date | null;
  checkOut: Date | null;
  setCheckIn: (date: Date | null) => void;
  setCheckOut: (date: Date | null) => void;
  guests: number;
  maxGuests: number;
  onGuestsChange: (delta: number) => void;
}

// Subcomponente de BookingWidget para mantener separada la captura de fechas y cantidad de huespedes.
export const BookingDateGuests = ({
  checkIn,
  checkOut,
  setCheckIn,
  setCheckOut,
  guests,
  maxGuests,
  onGuestsChange,
}: BookingDateGuestsProps) => {
  return (
    <>
      {/* DatePicker controla rango valido: check-out nunca anterior a check-in. */}
      <div className="mt-4 grid grid-cols-2 overflow-hidden rounded-xl border border-[var(--outline-variant)]">
        <div className="border-r border-[var(--outline-variant)] p-3 text-left text-xs">
          <p className="font-semibold">Check-in</p>
          <DatePicker
            selected={checkIn}
            onChange={(date) => setCheckIn(date)}
            selectsStart
            startDate={checkIn}
            endDate={checkOut}
            minDate={new Date()}
            className="mt-1 w-full bg-transparent text-[var(--on-surface-variant)] outline-none"
            dateFormat="dd MMM"
          />
        </div>
        <div className="p-3 text-left text-xs">
          <p className="font-semibold">Check-out</p>
          <DatePicker
            selected={checkOut}
            onChange={(date) => setCheckOut(date)}
            selectsEnd
            startDate={checkIn}
            endDate={checkOut}
            minDate={checkIn ?? new Date()}
            className="mt-1 w-full bg-transparent text-[var(--on-surface-variant)] outline-none"
            dateFormat="dd MMM"
          />
        </div>
      </div>

      {/* Stepper simple para incrementar/decrementar huespedes dentro de limites. */}
      <div className="mt-3 rounded-xl border border-[var(--outline-variant)] p-3">
        <p className="text-xs font-semibold">Huespedes</p>
        <div className="mt-2 flex items-center justify-between">
          <button type="button" onClick={() => onGuestsChange(-1)} className="rounded-full border px-3 py-1 text-sm">
            -
          </button>
          <p className="text-sm">{guests} de {maxGuests}</p>
          <button type="button" onClick={() => onGuestsChange(1)} className="rounded-full border px-3 py-1 text-sm">
            +
          </button>
        </div>
      </div>
    </>
  );
};
