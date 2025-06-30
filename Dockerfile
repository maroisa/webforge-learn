FROM denoland/deno:alpine as builder

WORKDIR /app
COPY package*.json .

RUN deno install

COPY . .

RUN deno run build

FROM nginx:1.29-alpine

COPY default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/_site /usr/share/nginx/html
