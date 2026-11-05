import Image from "next/image";
import * as React from "react";

import { photoSize } from "@/lib/essays";

// Photos in an essay are figures, as in a textbook: set in the text column,
// numbered in order ("Figure 1.") by the counter in globals.css, with a short
// caption the text can point to.

const captionClass = "mt-3 text-pretty font-sans text-[0.8125rem] leading-5 text-neutral-400";

interface PhotoProps {
  src: string;
  alt?: string;
  caption?: React.ReactNode;
}

function PhotoImage({ src, alt = "", sizes }: { src: string; alt?: string; sizes: string }) {
  const { width, height } = photoSize(src);
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      className="h-auto w-full rounded-sm bg-neutral-900"
    />
  );
}

/** One photograph: ![What it shows](/writings/slug/photo.jpg "Caption") */
export function Photo({ src, alt, caption }: PhotoProps) {
  return (
    <figure className="essay-figure my-[2.25em]">
      <PhotoImage src={src} alt={alt} sizes="(min-width: 640px) 37rem, 100vw" />
      <figcaption className={captionClass}>{caption}</figcaption>
    </figure>
  );
}

/**
 * Two photographs side by side, counted as one figure with one caption.
 * Stacks on a phone.
 *
 *   <Photos caption="Before and after.">
 *     <Photo src="/writings/slug/a.jpg" alt="…" />
 *     <Photo src="/writings/slug/b.jpg" alt="…" />
 *   </Photos>
 */
export function Photos({ children, caption }: { children: React.ReactNode; caption?: React.ReactNode }) {
  const photos = React.Children.toArray(children).filter(React.isValidElement<PhotoProps>);

  return (
    <figure className="essay-figure my-[2.25em]">
      <div className="grid gap-2 sm:grid-cols-2">
        {photos.map(({ props }) => (
          <PhotoImage key={props.src} src={props.src} alt={props.alt} sizes="(min-width: 640px) 18rem, 100vw" />
        ))}
      </div>
      <figcaption className={captionClass}>{caption}</figcaption>
    </figure>
  );
}
