# mercuretony.github.io

The source for my personal site: resume, essays, reading log, interests, and a
few side pages. Bilingual (English / French), print-friendly, statically
rendered.

Live at **[mercuretony-github-io.vercel.app](https://mercuretony-github-io.vercel.app)**.

## Stack

- [Next.js 14](https://nextjs.org) (App Router) + React 18 + TypeScript
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

## Credits

Built on top of [Bartosz Jarocki's minimalist CV](https://github.com/BartoszJarocki/cv),
which is MIT licensed. The original copyright notice is retained in
[LICENSE](./LICENSE).
