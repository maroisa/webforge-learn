FROM node:22-alpine as builder
ENV PNPM_HOME="/pnpm"
ENV COREPACK_INTEGRITY_KEYS=0
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable pnpm

WORKDIR /app
COPY package*.json .

RUN pnpm install

COPY . .

RUN pnpm build

FROM nginx:1.29-alpine

COPY --from=builder /app/_site /usr/share/nginx/html
