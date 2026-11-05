"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

/**
 * An image that develops like a print in the tray once it has loaded: grey and
 * dim, then itself. The animation lives in globals.css (.develop); it waits for
 * data-loaded so a slow photo doesn't finish developing before it is seen.
 * Without JavaScript, or with reduced motion, the photo simply shows.
 */
export function DevelopingImage({ alt, className = "", onLoad, ...props }: ImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <Image
      {...props}
      alt={alt}
      data-loaded={loaded ? "" : undefined}
      className={`develop ${className}`}
      onLoad={(event) => {
        setLoaded(true);
        onLoad?.(event);
      }}
    />
  );
}
