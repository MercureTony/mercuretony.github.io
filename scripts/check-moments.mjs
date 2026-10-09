// Every Montreal Time line must exist, word for word, in the essay it names.
// Runs before `next build`; a line that drifted from its essay fails the build.
import fs from "node:fs";

const SOURCE = "src/data/moments.ts";

const normalize = (text) =>
  text
    .replace(/[’‘]/g, "'")
    .replace(/[“”«»]/g, '"')
    .replace(/[*_]/g, "")
    .replace(/\s+/g, " ")
    .trim();

const source = fs.readFileSync(SOURCE, "utf8");
const entries = /(\w+):\s*\{\s*essay:\s*"([^"]+)",\s*text:\s*"((?:[^"\\]|\\.)*)"/g;

let checked = 0;
let missing = 0;
for (const match of source.matchAll(entries)) {
  const [, id, essay, raw] = match;
  const text = JSON.parse(`"${raw}"`);
  const needle = normalize(text)
    .replace(/^…\s*/, "")
    .replace(/[.,;:!?]+$/, "");
  const file = `src/content/articles/${essay}.mdx`;
  checked++;
  if (!fs.existsSync(file)) {
    missing++;
    console.error(`✗ ${id}: ${file} does not exist`);
    continue;
  }
  if (!normalize(fs.readFileSync(file, "utf8")).includes(needle)) {
    missing++;
    console.error(`✗ ${id}: not found verbatim in ${file}\n    "${text}"`);
  }
}

if (checked === 0) {
  console.error(`No moment lines found in ${SOURCE}; the LINES map may have changed shape.`);
  process.exit(1);
}
console.log(`${checked - missing}/${checked} Montreal Time lines found verbatim in the essays`);
process.exit(missing ? 1 : 0);
