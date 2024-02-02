FROM node@sha256:201a9b31be9fb5148ca40c9e727d5e559c659ed9521b3175ba73847026257e32
RUN apk update && apk upgrade && apk add dumb-init && adduser -D svelteuser
USER svelteuser
WORKDIR /usr/app
COPY manifest.json /
COPY ./ ./
COPY --chown=svelteuser:svelteuser ./ /usr/app
RUN npm ci && npm run build
EXPOSE 3001
ENV HOST=0.0.0.0 PORT=3001 NODE_ENV=production PROTOCOL_HEADER=x-forwarded-proto HOST_HEADER=x-forwarded-host
ENTRYPOINT ["dumb-init", "./statrup.sh"]


# Leaving the below in as an example of how multistage would be structured. Bear in mind this doesn't work yet.
# ---------
# Build
# FROM node:latest AS build
# WORKDIR /usr/app
# COPY . /usr/app/
# RUN npm ci && npm run build

# Production
# FROM node:lts-apline@sha256:201a9b31be9fb5148ca40c9e727d5e559c659ed9521b3175ba73847026257e32
# RUN apk add dumb-init && adduser -D svelteuser
# USER svelteuser
# ENV HOST=0.0.0.0 PORT=3001 NODE_ENV=production PROTOCOL_HEADER=x-forwarded-proto HOST_HEADER=x-forwarded-host
# WORKDIR /usr/app
# COPY manifest.json /
# COPY --chown=svelteuser:svelteuser --from=build package*.json /usr/app/build
# COPY --chown=svelteuser:svelteuser --from=build /usr/app/build /usr/app/build
# EXPOSE 3001
# CMD ["dumb-init", "node", "build"]
