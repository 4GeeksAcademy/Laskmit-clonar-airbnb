"use client";

import { useEffect, useMemo } from "react";
import { LatLngBounds } from "leaflet";
import { CircleMarker, MapContainer, Popup, TileLayer, useMap } from "react-leaflet";
import { Stay } from "@/types/stay";

interface StaysMapProps {
  stays: Stay[];
}

const FitToStays = ({ stays }: StaysMapProps) => {
  const map = useMap();

  useEffect(() => {
    if (stays.length === 0) {
      return;
    }

    if (stays.length === 1) {
      map.setView([stays[0].coordinates.y, stays[0].coordinates.x], 7);
      return;
    }

    const bounds = new LatLngBounds(stays.map((stay) => [stay.coordinates.y, stay.coordinates.x] as [number, number]));
    map.fitBounds(bounds, { padding: [30, 30] });
  }, [map, stays]);

  return null;
};

export const StaysMap = ({ stays }: StaysMapProps) => {
  const center = useMemo<[number, number]>(() => {
    if (stays.length === 0) {
      return [40, 10];
    }

    const totalLat = stays.reduce((acc, stay) => acc + stay.coordinates.y, 0);
    const totalLng = stays.reduce((acc, stay) => acc + stay.coordinates.x, 0);

    return [totalLat / stays.length, totalLng / stays.length];
  }, [stays]);

  return (
    <MapContainer center={center} zoom={4} scrollWheelZoom className="h-full w-full rounded-3xl" aria-label="Mapa de alojamientos">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <FitToStays stays={stays} />

      {stays.map((stay) => (
        <CircleMarker
          key={stay.id}
          center={[stay.coordinates.y, stay.coordinates.x]}
          radius={10}
          pathOptions={{ color: "#202124", fillColor: "#202124", fillOpacity: 0.85 }}
        >
          <Popup>
            <div className="space-y-1">
              <p className="text-sm font-semibold">{stay.title}</p>
              <p className="text-xs text-slate-600">{stay.location}, {stay.country}</p>
              <p className="text-xs font-medium">USD {stay.pricePerNight} por noche</p>
            </div>
          </Popup>
        </CircleMarker>
      ))}
    </MapContainer>
  );
};
