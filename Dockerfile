# Build
FROM node:latest AS build
WORKDIR /usr/app
COPY package*.json /usr/app/
RUN npm ci && npm run build

# Production
FROM node:lts-apline@sha256:201a9b31be9fb5148ca40c9e727d5e559c659ed9521b3175ba73847026257e32
RUN apk add dumb-init && adduser -D svelteuser
ENV HOST=0.0.0.0 PORT=3001 NODE_ENV=production PROTOCOL_HEADER=x-forwarded-proto HOST_HEADER=x-forwarded-host
WORKDIR /usr/app
COPY --chown=svelteuser:svelteuser --from=build /usr/app/node_modules /usr/app/node_modules
COPY --chown=svelteuser:svelteuser . /usr/app
EXPOSE 3001
CMD ["dumb-init", "node", "build"]
