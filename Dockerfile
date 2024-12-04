FROM node:23 AS base
WORKDIR /usr/src/app
RUN npm install pnpm -g
COPY package.json pnpm-lock.yaml ./
COPY apps/app1/package.json ./apps/app1/package.json
COPY apps/app2/package.json ./apps/app2/package.json

FROM base AS prepare
RUN pnpm install
COPY . ./
CMD [ "/usr/src/app/entrypoint.sh" ]
