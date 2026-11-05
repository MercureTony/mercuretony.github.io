# mercuretony.github.io

The source for my personal site: resume, essays, reading log, interests, and a
few side pages. Bilingual (English / French), print-friendly, statically
rendered.

Live at **[mercuretony-github-io.vercel.app](https://mercuretony-github-io.vercel.app)**.

## Stack

- [Next.js 15](https://nextjs.org) (App Router) + React 19 + TypeScript
- [Tailwind CSS](https://tailwindcss.com) and [shadcn/ui](https://ui.shadcn.com)
- MDX for articles, via `next-mdx-remote`
- Deployed on [Vercel](https://vercel.com)

## Running locally

Requires Node 20+ and [pnpm](https://pnpm.io).

```bash
git clone https://github.com/MercureTony/mercuretony.github.io.git
cd mercuretony.github.io
pnpm install
pnpm dev
```

The site is then at [localhost:3000](http://localhost:3000).

Other scripts: `pnpm build`, `pnpm start`, `pnpm lint`.

### With Docker

```bash
docker compose build
docker compose up -d   # stop with: docker compose down
```

## Layout

| Path | What lives there |
| --- | --- |
| `src/app` | Routes. English at the root, French under `src/app/fr`. |
| `src/content/articles` | Essays, as MDX files. Filename is the URL slug. |
| `src/data` | Resume, reading list, interests, challenges. `*.fr.ts(x)` files are the French versions. |
| `src/components` | Shared components; `src/components/ui` is shadcn/ui. |
| `locales` | UI strings for each language. |

Most content changes are edits to a single file in `src/data`, or a new MDX
file in `src/content/articles`.

## Photographs in essays

An essay can open on a photograph. It develops from grey to colour as the page
loads, follows the pointer on the writing list, and becomes the essay's share
card. Essays without one get a typographic card instead.

1. Prepare the photos. This turns them upright, shrinks them to 2000px and
   strips their metadata, including GPS location:

   ```sh
   pnpm photos why-im-building-coalesc ~/Downloads/stage.jpg
   ```

2. Add the cover to the essay's front matter:

   ```yaml
   photo: /writings/why-im-building-coalesc/stage.jpg
   photoAlt: "What the photo shows, for people who can't see it."
   photoCaption: "Optional line under the photo."
   photoFocus: top   # optional: the part to keep when cropped
   ```

3. Photos inside the text, which develop as they scroll into view:

   ```mdx
   ![What it shows](/writings/slug/photo.jpg "Optional caption")

   <Photo src="/writings/slug/photo.jpg" alt="…" caption="…" size="wide" />

   <Photos caption="One caption for the set.">
     <Photo src="/writings/slug/a.jpg" alt="…" />
     <Photo src="/writings/slug/b.jpg" alt="…" />
   </Photos>
   ```

Share cards are drawn at build time by
`src/app/writings/[slug]/opengraph-image.tsx`.

## Reusing this

You are welcome to fork the site and make it yours. Start by replacing
`src/data/resume-data.tsx` (and its `.fr` counterpart), then delete
`src/content/articles` and the entries in `src/data` — that content is mine and
is not covered by the code license (see below).

Issues and pull requests are welcome for bugs and improvements to the code.
I am not looking for contributions to the writing.

## License

Two licenses, because this repository holds two different things.

- **Code** — the components, layouts, config, and styling — is [MIT](./LICENSE).
  Use it, fork it, ship it.
- **Content** — everything in `src/content`, the prose and data in `src/data`,
  the translations in `locales`, and the images in `public` — is **not** MIT.
  See [LICENSE-CONTENT](./LICENSE-CONTENT). Short version: read and share it,
  don't republish it as your own.
