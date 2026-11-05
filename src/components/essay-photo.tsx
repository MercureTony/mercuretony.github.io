import Image from "next/image";
import * as React from "react";

import { DevelopingImage } from "@/components/developing-image";
import { type Photo as PhotoData, photoSize } from "@/lib/essays";

// Essays run in a 37rem column. A wide photo steps out of it to 52rem on
// larger screens and runs edge to edge on a phone; its caption stays in the
// column, so the eye comes back to the text where it left it.
const wide =
  "relative left-1/2 w-screen -translate-x-1/2 sm:w-[min(52rem,calc(100vw-3rem))]";

const captionClass =
  "mx-auto mt-3 max-w-[37rem] text-pretty font-sans text-[0.8125rem] leading-5 text-neutral-500";

/** The photograph an essay opens on. Develops once it has loaded. */
export function Plate({ photo }: { photo: PhotoData }) {
  return (
    <figure className="mb-12 sm:mb-14">
      <div className={wide}>
        <DevelopingImage
          src={photo.src}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          priority
          sizes="(min-width: 640px) 52rem, 100vw"
          style={{ objectPosition: photo.focus }}
          className="max-h-[62vh] w-full bg-neutral-900 object-cover sm:rounded-sm"
        />
      </div>
      {photo.caption ? (
        <figcaption className={captionClass}>{photo.caption}</figcaption>
      ) : null}
    </figure>
  );
}

interface PhotoProps {
  src: string;
  alt?: string;
  caption?: React.ReactNode;
  /** "column" sits in the text; "wide" steps out of it. */
  size?: "column" | "wide";
}

/** A photograph inside an essay. Develops as it scrolls into view. */
export function Photo({ src, alt = "", caption, size = "column" }: PhotoProps) {
  const { width, height } = photoSize(src);
  const isWide = size === "wide";

  return (
    <figure className="my-[2.5em]">
      <div className={isWide ? wide : undefined}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={isWide ? "(min-width: 640px) 52rem, 100vw" : "(min-width: 640px) 37rem, 100vw"}
          className="develop-on-scroll h-auto w-full bg-neutral-900 sm:rounded-sm"
        />
      </div>
      {caption ? <figcaption className={captionClass}>{caption}</figcaption> : null}
    </figure>
  );
}

/**
 * Two or three photographs side by side, stepping out of the column, with one
 * caption under the set. Stacks on a phone.
 *
 *   <Photos caption="Before and after.">
 *     <Photo src="/writings/storms/a.jpg" alt="…" />
 *     <Photo src="/writings/storms/b.jpg" alt="…" />
 *   </Photos>
 */
export function Photos({ children, caption }: { children: React.ReactNode; caption?: React.ReactNode }) {
  const photos = React.Children.toArray(children).filter(React.isValidElement<PhotoProps>);

  return (
    <figure className="my-[2.5em]">
      <div
        className={`${wide} grid gap-2`}
        style={{ gridTemplateColumns: `repeat(auto-fit, minmax(min(100%, 14rem), 1fr))` }}
      >
        {photos.map((photo) => {
          const { src, alt = "" } = photo.props;
          const { width, height } = photoSize(src);
          return (
            <Image
              key={src}
              src={src}
              alt={alt}
              width={width}
              height={height}
              sizes="(min-width: 640px) 26rem, 100vw"
              className="develop-on-scroll aspect-[4/5] h-auto w-full bg-neutral-900 object-cover sm:rounded-sm"
            />
          );
        })}
      </div>
      {caption ? <figcaption className={captionClass}>{caption}</figcaption> : null}
    </figure>
  );
}
