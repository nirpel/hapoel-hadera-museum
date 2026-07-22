"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { getBackShirtImage, getPrimaryShirtImage, statusLabels, type Shirt } from "@/data/shirts";

export function ShirtCard({ shirt }: { shirt: Shirt }) {
  const frontImage = getPrimaryShirtImage(shirt);
  const backImage = getBackShirtImage(shirt);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const shouldBlockClick = useRef(false);
  const hasSwipeImages = Boolean(frontImage && backImage);

  function handleTouchStart(event: React.TouchEvent) {
    touchStartX.current = event.touches[0].clientX;
    touchStartY.current = event.touches[0].clientY;
    shouldBlockClick.current = false;
  }

  function handleTouchEnd(event: React.TouchEvent) {
    if (!hasSwipeImages || touchStartX.current === null || touchStartY.current === null) {
      return;
    }

    const endTouch = event.changedTouches[0];
    const deltaX = endTouch.clientX - touchStartX.current;
    const deltaY = endTouch.clientY - touchStartY.current;

    touchStartX.current = null;
    touchStartY.current = null;

    if (Math.abs(deltaX) < 38 || Math.abs(deltaX) < Math.abs(deltaY) * 1.2) {
      return;
    }

    shouldBlockClick.current = true;
    setActiveImageIndex((current) => (current === 0 ? 1 : 0));
    window.setTimeout(() => {
      shouldBlockClick.current = false;
    }, 0);
  }

  function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    if (!shouldBlockClick.current) {
      return;
    }

    event.preventDefault();
    shouldBlockClick.current = false;
  }

  return (
    <Link className="shirt-card" href={`/shirt/${shirt.id}`} onClick={handleClick}>
      <div
        className={`shirt-card-media${backImage ? " has-back-image" : ""}${activeImageIndex === 1 ? " is-showing-back" : ""}`}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {frontImage ? (
          <>
            <Image
              src={frontImage.src}
              alt={`${shirt.team} ${shirt.season} ${frontImage.label}`}
              fill
              sizes="(max-width: 680px) 100vw, 25vw"
              className="shirt-card-image shirt-card-image-front"
            />
            {backImage ? (
              <Image
                src={backImage.src}
                alt={`${shirt.team} ${shirt.season} ${backImage.label}`}
                fill
                sizes="(max-width: 680px) 100vw, 25vw"
                className="shirt-card-image shirt-card-image-back"
              />
            ) : null}
          </>
        ) : (
          <div className="shirt-placeholder">ח</div>
        )}
        {shirt.status !== "In Collection" ? <span className="status-badge">{statusLabels[shirt.status]}</span> : null}
        {hasSwipeImages ? (
          <div className="card-image-dots" aria-label={`תמונה ${activeImageIndex + 1} מתוך 2`}>
            <span className={activeImageIndex === 0 ? "is-active" : ""} />
            <span className={activeImageIndex === 1 ? "is-active" : ""} />
          </div>
        ) : null}
        <div className="card-tag">
          <span>{shirt.season || "-"}</span>
          <span>{shirt.classification}</span>
        </div>
      </div>
      <div className="shirt-card-body">
        <h3>{shirt.title}</h3>
        <div className="card-meta">
          {shirt.playerName ? <span>{shirt.playerName}</span> : null}
          {shirt.playerName && shirt.shirtNumber ? <span>·</span> : null}
          {shirt.shirtNumber ? <span>#{shirt.shirtNumber}</span> : null}
          {!shirt.playerName && !shirt.shirtNumber ? <span>{shirt.description}</span> : null}
        </div>
      </div>
    </Link>
  );
}
