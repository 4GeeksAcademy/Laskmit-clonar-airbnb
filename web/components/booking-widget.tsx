"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { BookingCostBreakdown } from "@/components/booking-cost-breakdown";
import { BookingDateGuests } from "@/components/booking-date-guests";

interface BookingWidgetProps {
  pricePerNight: number;
  rating: number;
  reviewsCount: number;
  maxGuests: number;
  cleaningFee?: number;
}

export const BookingWidget = ({
  pricePerNight,
  rating,
  reviewsCount,
  maxGuests,
  cleaningFee = 35,
}: BookingWidgetProps) => {
  const initialCheckIn = new Date();
  const initialCheckOut = new Date();
  initialCheckOut.setDate(initialCheckOut.getDate() + 1);

  const [guests, setGuests] = useState(1);
  const [checkIn, setCheckIn] = useState<Date | null>(initialCheckIn);
  const [checkOut, setCheckOut] = useState<Date | null>(initialCheckOut);

  const nights = useMemo(() => {
    if (!checkIn || !checkOut) return 0;
    return Math.max(1, Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24)));
  }, [checkIn, checkOut]);

  const subtotal = pricePerNight * nights;
  const serviceFee = Math.round(subtotal * 0.12);
  const total = subtotal + cleaningFee + serviceFee;

  const handleGuestsChange = (delta: number) => {
    setGuests((prev) => Math.min(maxGuests, Math.max(1, prev + delta)));
  };

  return (
    <aside className="sticky top-24 rounded-3xl border border-[var(--outline-variant)] bg-white/90 p-5 shadow-[0_12px_24px_rgba(0,0,0,0.14)] backdrop-blur-md">
      <div className="flex items-baseline justify-between">
        <p className="text-lg font-bold text-[var(--on-surface)]">USD {pricePerNight} <span className="text-sm font-normal">noche</span></p>
        <p className="text-sm text-[var(--on-surface-variant)]">★ {rating.toFixed(2)} · {reviewsCount} reseñas</p>
      </div>

      <BookingDateGuests
        checkIn={checkIn}
        checkOut={checkOut}
        setCheckIn={setCheckIn}
        setCheckOut={setCheckOut}
        guests={guests}
        maxGuests={maxGuests}
        onGuestsChange={handleGuestsChange}
      />

      <button className="mt-4 w-full rounded-xl bg-[var(--primary)] px-4 py-3 text-sm font-semibold text-[var(--on-primary)] transition hover:opacity-95">
        Reservar ahora
      </button>

      <BookingCostBreakdown
        pricePerNight={pricePerNight}
        nights={nights}
        subtotal={subtotal}
        cleaningFee={cleaningFee}
        serviceFee={serviceFee}
        total={total}
      />

      <Link href="/catalog" className="mt-4 inline-flex text-xs font-semibold text-[var(--primary)]">
        Ver mas opciones
      </Link>
    </aside>
  );
};
