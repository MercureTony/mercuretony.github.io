# Node 22 matches "engines" in package.json; pnpm comes from "packageManager" via Corepack.
FROM node:22-slim

WORKDIR /usr/src/app

RUN corepack enable

# Install from the lockfile only, so the image gets the same versions as the site.
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm build

CMD [ "pnpm", "start" ]
