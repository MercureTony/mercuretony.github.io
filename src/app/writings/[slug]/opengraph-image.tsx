import fs from "fs";
import path from "path";
import { ImageResponse } from "next/og";
import sharp from "sharp";

import { formatDateOnly } from "@/lib/date";
import { getEssay, getEssays } from "@/lib/essays";

// The card a link to an essay unfurls into, drawn at build time. An essay
// with a figure becomes its first photo with the title over it; one without
// becomes a page of type in the essay's own face.

export const size = { width: 1200, height: 630 };
// JPEG, not PNG: a photo card as PNG runs past 1 MB, and WhatsApp drops
// previews over about 600 KB.
export const contentType = "image/jpeg";
export const alt = "Essay by Anthony Uyende";

export function generateStaticParams() {
  return getEssays().map((essay) => ({ slug: essay.slug }));
}

const font = (file: string) =>
  fs.readFileSync(path.join(process.cwd(), "src/assets/og-fonts", file));

const fonts = [
  { name: "Literata", data: font("Literata-Medium.ttf"), weight: 500 as const, style: "normal" as const },
  { name: "Literata", data: font("Literata-Italic.ttf"), weight: 400 as const, style: "italic" as const },
  { name: "Geist", data: font("Geist-Regular.ttf"), weight: 400 as const, style: "normal" as const },
  { name: "Geist", data: font("Geist-Medium.ttf"), weight: 500 as const, style: "normal" as const },
];

// The site's mark: eight dots in a ring, as in the favicon.
const DOTS = [
  [50, 25], [67.5, 32.5], [75, 50], [67.5, 67.5], [50, 75], [32.5, 67.5], [25, 50], [32.5, 32.5],
];

function Byline({ color }: { color: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
      <svg width="40" height="40" viewBox="0 0 100 100">
        {DOTS.map(([cx, cy]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="6" fill={color} />
        ))}
      </svg>
      <div style={{ fontFamily: "Geist", fontWeight: 500, fontSize: 26, color, letterSpacing: "-0.01em" }}>
        Anthony Uyende
      </div>
    </div>
  );
}

async function toJpeg(png: ImageResponse) {
  const jpeg = await sharp(Buffer.from(await png.arrayBuffer()))
    .jpeg({ quality: 88, mozjpeg: true })
    .toBuffer();
  return new Response(new Uint8Array(jpeg), { headers: { "Content-Type": contentType } });
}

/** Straight quotes to typeset ones: It's → It’s. */
function typeset(text: string) {
  return text
    .replace(/(\w)'/g, "$1’")
    .replace(/'/g, "‘")
    .replace(/"(\S)/g, "“$1")
    .replace(/"/g, "”");
}

function shorten(text: string, max: number) {
  if (text.length <= max) return text;
  return `${text.slice(0, text.lastIndexOf(" ", max)).replace(/[,.;:]$/, "")}…`;
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { meta } = getEssay(slug);

  const when = formatDateOnly(meta.date, { month: "long", year: "numeric" });
  const line = [meta.place, when, `${meta.readingTime} min read`].filter(Boolean).join("  ·  ");
  const titleSize = meta.title.length > 56 ? 60 : meta.title.length > 32 ? 70 : 84;

  if (meta.shareImage) {
    // The essay's first figure, cropped to the card. The crop keeps the photo's
    // top, where a stage photo's slide or a landscape's horizon tends to sit;
    // the title covers the bottom.
    const photo = await sharp(path.join(process.cwd(), "public", meta.shareImage))
      .resize(1200, 630, { fit: "cover", position: "top" })
      .jpeg({ quality: 90 })
      .toBuffer();
    const photoTitleSize = Math.min(titleSize, 72);

    return toJpeg(new ImageResponse(
      (
        <div style={{ display: "flex", width: "100%", height: "100%", position: "relative", background: "#171717" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`data:image/jpeg;base64,${photo.toString("base64")}`}
            alt=""
            width={1200}
            height={630}
            style={{ position: "absolute", top: 0, left: 0, width: 1200, height: 630 }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: 1200,
              height: 630,
              display: "flex",
              backgroundImage:
                "linear-gradient(180deg, rgba(10,10,10,0) 0%, rgba(10,10,10,0) 38%, rgba(10,10,10,0.55) 62%, rgba(10,10,10,0.94) 100%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: 1200,
              height: 630,
              display: "flex",
              backgroundImage: "linear-gradient(90deg, rgba(10,10,10,0.45) 0%, rgba(10,10,10,0) 65%)",
            }}
          />
          <div
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              width: "100%",
              padding: "56px 72px 60px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
              <div
                style={{
                  fontFamily: "Literata",
                  fontWeight: 500,
                  fontSize: photoTitleSize,
                  lineHeight: 1.08,
                  letterSpacing: "-0.015em",
                  color: "#fafafa",
                  maxWidth: 1000,
                  textShadow: "0 2px 24px rgba(0,0,0,0.35)",
                }}
              >
                {typeset(meta.title)}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
                <Byline color="rgba(255,255,255,0.95)" />
                <div style={{ fontFamily: "Geist", fontSize: 24, color: "rgba(255,255,255,0.72)" }}>{line}</div>
              </div>
            </div>
          </div>
        </div>
      ),
      { ...size, fonts },
    ));
  }

  return toJpeg(new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: "56px 72px 60px",
          background: "#171717",
        }}
      >
        <Byline color="#e5e5e5" />
        <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
          <div
            style={{
              fontFamily: "Literata",
              fontWeight: 500,
              fontSize: titleSize,
              lineHeight: 1.08,
              letterSpacing: "-0.015em",
              color: "#f5f5f5",
              maxWidth: 1000,
            }}
          >
            {typeset(meta.title)}
          </div>
          {meta.summary ? (
            <div
              style={{
                fontFamily: "Literata",
                fontStyle: "italic",
                fontSize: 30,
                lineHeight: 1.4,
                color: "#a3a3a3",
                maxWidth: 940,
              }}
            >
              {typeset(shorten(meta.summary, 130))}
            </div>
          ) : null}
        </div>
        <div
          style={{
            display: "flex",
            borderTop: "1px solid #404040",
            paddingTop: 24,
            fontFamily: "Geist",
            fontSize: 24,
            color: "#a3a3a3",
          }}
        >
          {line}
        </div>
      </div>
    ),
    { ...size, fonts },
  ));
}
