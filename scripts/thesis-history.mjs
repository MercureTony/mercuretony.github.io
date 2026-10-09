// Prints every distinct version of the "I'm currently building Coalesc…"
// paragraph on the About page, oldest first, with the commit that introduced
// it. Run locally with `pnpm thesis`; paste the result into
// src/data/thesis-history.ts and write the note for the new version.
//
// Not run at build time: Vercel clones shallowly, so git history isn't there.
import { execFileSync } from "node:child_process";

const FILE = "src/app/about/page.tsx";

const git = (...args) => execFileSync("git", args, { encoding: "utf8" });

const commits = git("log", "--format=%H%x09%ad", "--date=short", "--", FILE)
  .trim()
  .split("\n")
  .filter(Boolean)
  .map((line) => {
    const [sha, date] = line.split("\t");
    return { sha, date };
  })
  .reverse();

function decode(html) {
  return html
    .replace(/<[^>]+>/g, "")
    .replace(/&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

const versions = [];
for (const { sha, date } of commits) {
  let source;
  try {
    source = git("show", `${sha}:${FILE}`);
  } catch {
    continue;
  }
  const match = source.match(/<p[^>]*>\s*(I&apos;m currently building[\s\S]*?)<\/p>/);
  if (!match) continue;
  const hero = decode(match[1]);
  const domain = (match[1].match(/coalesc\.(xyz|ai)/) || [])[0] ?? null;
  const previous = versions[versions.length - 1];
  if (previous && previous.hero === hero) continue;
  versions.push({ version: versions.length + 1, date, sha: sha.slice(0, 7), domain, hero });
}

process.stdout.write(JSON.stringify(versions, null, 2) + "\n");
