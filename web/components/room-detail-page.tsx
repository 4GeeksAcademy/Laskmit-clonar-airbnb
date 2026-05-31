"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { RoomDetailContent } from "@/components/room-detail-content";
import { RoomDetailLoading, RoomDetailNotFound } from "@/components/room-detail-status";
import { TopNavBar } from "@/components/top-nav-bar";
import { getRelatedStays, getStayById } from "@/lib/stays-data";
import { Stay } from "@/types/stay";

const roomImages = [
  "/images/Detalle_ppal_01.jpg",
  "/images/Detalle_sec_01.jpg",
  "/images/Detalle_sec_02.jpg",
  "/images/Detalle_sec_03.jpg",
  "/images/Detalle_sec_04.jpg",
];

export const RoomDetailPage = () => {
  const params = useParams<{ id: string }>();
  const roomId = params?.id ?? "";
  const [loading, setLoading] = useState(true);
  const [stay, setStay] = useState<Stay | null>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setStay(getStayById(roomId) ?? null);
      setLoading(false);
    }, 1000);

    return () => window.clearTimeout(timer);
  }, [roomId]);

  const related = useMemo(() => (stay ? getRelatedStays(stay.id) : []), [stay]);

  return (
    <main className="min-h-screen bg-[var(--surface)] pb-16">
      <TopNavBar compact />
      {loading ? <RoomDetailLoading /> : stay ? <RoomDetailContent stay={stay} related={related} roomImages={roomImages} /> : <RoomDetailNotFound />}
    </main>
  );
};
