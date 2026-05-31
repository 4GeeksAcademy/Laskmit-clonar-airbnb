"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

interface ImageGalleryProps {
  tones: string[];
  images?: string[]; // Nuevo: lista de imágenes
}

export const ImageGallery = ({ tones, images }: ImageGalleryProps) => {
  const galleryImages = useMemo(() => {
    if (images && images.length > 0) {
      return images;
    }

    return tones.map(() => "/images/placeholder.jpg");
  }, [images, tones]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const safeIndex = Math.min(currentIndex, Math.max(0, galleryImages.length - 1));
  const currentImage = galleryImages[safeIndex];
  const goPrev = () => setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  const goNext = () => setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));

  return (
    <section className="space-y-3" aria-label="Galeria de imagenes">
      <div className="relative h-64 rounded-2xl overflow-hidden md:h-[420px]">
        <Image src={currentImage} alt={`Foto ${currentIndex + 1}`} fill sizes="(max-width: 768px) 100vw, 66vw" className="h-full w-full object-cover" />

        <button
          type="button"
          onClick={goPrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/85 px-3 py-2 text-xs font-semibold text-[var(--on-surface)]"
        >
          Anterior
        </button>
        <button
          type="button"
          onClick={goNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/85 px-3 py-2 text-xs font-semibold text-[var(--on-surface)]"
        >
          Siguiente
        </button>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-1">
        {galleryImages.map((img, index) => (
          <button
            type="button"
            key={`${img}-${index}`}
            onClick={() => setCurrentIndex(index)}
            className={`relative h-20 w-28 shrink-0 overflow-hidden rounded-xl border-2 ${
              index === safeIndex ? "border-[var(--on-surface)]" : "border-transparent"
            }`}
          >
            <Image src={img} alt={`Miniatura ${index + 1}`} fill sizes="112px" className="h-full w-full object-cover" />
          </button>
        ))}
      </div>
    </section>
  );
};
