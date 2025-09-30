# ---- build stage ----
FROM oven/bun:1 AS build
WORKDIR /app

# cache deps
COPY frontend/package.json ./
# you have "bun.lock" (not bun.lockb)
COPY frontend/bun.lock ./bun.lock
RUN bun install --frozen-lockfile

# copy source and build
COPY frontend/. ./
RUN bun run build

# ---- runtime stage ----
FROM nginx:1.27-alpine AS runtime
WORKDIR /usr/share/nginx/html

# custom nginx
RUN rm -f /etc/nginx/conf.d/default.conf
COPY frontend/nginx.conf /etc/nginx/conf.d/default.conf

# built assets
COPY --from=build /app/dist ./

EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s --start-period=15s \
  CMD wget -qO- http://127.0.0.1/ || exit 1
