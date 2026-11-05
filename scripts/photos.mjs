// Prepares photographs for an essay: turns them upright, resizes them to at
// most 2000px on the long side, strips their metadata (including the GPS
// position phones record) and saves them as JPEG, which the share cards need.
//
//   pnpm photos <essay-slug> <photo> [more photos…]
//   pnpm photos storms ~/Downloads/IMG_2041.jpg ~/Downloads/IMG_2050.png
//
// Files land in public/writings/<essay-slug>/, named after the originals.

import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const [slug, ...files] = process.argv.slice(2);

if (!slug || !files.length) {
  console.error("Usage: pnpm photos <essay-slug> <photo> [more photos…]");
  process.exit(1);
}

const essay = path.join("src/content/articles", `${slug}.mdx`);
if (!fs.existsSync(essay)) {
  console.error(`No essay at ${essay}. Use the file name without .mdx, e.g. "storms".`);
  process.exit(1);
}

const outDir = path.join("public/writings", slug);
fs.mkdirSync(outDir, { recursive: true });

for (const file of files) {
  const name = path
    .basename(file, path.extname(file))
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  const out = path.join(outDir, `${name}.jpg`);

  const info = await sharp(file)
    .rotate() // apply the camera's orientation, then forget it
    .resize({ width: 2000, height: 2000, fit: "inside", withoutEnlargement: true })
    .jpeg({ quality: 80, mozjpeg: true })
    .toFile(out);

  const kb = Math.round(info.size / 1024);
  console.log(`${out}  ${info.width}×${info.height}  ${kb} KB`);
  console.log(`  cover:   photo: /writings/${slug}/${name}.jpg`);
  console.log(`  inline:  ![Describe the photo](/writings/${slug}/${name}.jpg "Optional caption")`);
}
