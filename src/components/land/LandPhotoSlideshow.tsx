"use client";

import Image from "next/image";
import {useEffect, useState} from "react";

export function LandPhotoSlideshow({images, alt}:{
  images: readonly [string, string];
  alt: string;
}) {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveImage((active) => (active + 1) % images.length);
    }, 4500);
    return () => window.clearInterval(timer);
  }, [images.length]);

  return (
    <>
      {images.map((src, index) => (
        <Image
          key={src}
          className={`land-photo-slide${activeImage === index ? " is-active" : ""}`}
          src={src}
          alt={activeImage === index ? alt : ""}
          aria-hidden={activeImage !== index}
          fill
          sizes="(max-width: 700px) 100vw,(max-width: 1100px) 50vw,33vw"
        />
      ))}
    </>
  );
}
