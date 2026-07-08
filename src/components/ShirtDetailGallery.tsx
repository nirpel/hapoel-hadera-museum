"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMemo, useState } from "react";
import type { Shirt } from "@/data/shirts";

export function ShirtDetailGallery({ shirt }: { shirt: Shirt }) {
  const images = shirt.images;
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const activeImage = images[activeIndex];
  const hasMultipleImages = images.length > 1;

  const label = useMemo(() => {
    if (!activeImage) return "";
    return `${shirt.team} ${shirt.season} ${activeImage.label}`;
  }, [activeImage, shirt.season, shirt.team]);

  function showPrevious() {
    setActiveIndex((index) => (index === 0 ? images.length - 1 : index - 1));
  }

  function showNext() {
    setActiveIndex((index) => (index === images.length - 1 ? 0 : index + 1));
  }

  function handleTouchEnd(endX: number) {
    if (touchStartX === null || !hasMultipleImages) return;

    const distance = endX - touchStartX;
    if (Math.abs(distance) > 40) {
      if (distance > 0) {
        showNext();
      } else {
        showPrevious();
      }
    }

    setTouchStartX(null);
  }

  return (
    <div className="detail-gallery" onTouchStart={(event) => setTouchStartX(event.touches[0].clientX)} onTouchEnd={(event) => handleTouchEnd(event.changedTouches[0].clientX)}>
      <div className="detail-image">
        {activeImage ? (
          <Image src={activeImage.src} alt={label} width={760} height={980} priority />
        ) : (
          <div className="shirt-placeholder">ח</div>
        )}

        {hasMultipleImages ? (
          <>
            <button className="gallery-arrow gallery-arrow-prev" type="button" onClick={showPrevious} aria-label="תמונה קודמת">
              <ChevronRight size={20} />
            </button>
            <button className="gallery-arrow gallery-arrow-next" type="button" onClick={showNext} aria-label="תמונה הבאה">
              <ChevronLeft size={20} />
            </button>
          </>
        ) : null}
      </div>

      {hasMultipleImages ? (
        <div className="gallery-dots" aria-label="בחירת תמונה">
          {images.map((image, index) => (
            <button
              className={index === activeIndex ? "is-active" : ""}
              type="button"
              key={`${image.src}-${image.side}`}
              onClick={() => setActiveIndex(index)}
              aria-label={image.label}
              aria-pressed={index === activeIndex}
            >
              {image.label}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
