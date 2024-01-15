FROM node@sha256:201a9b31be9fb5148ca40c9e727d5e559c659ed9521b3175ba73847026257e32
RUN apk update && apk upgrade && apk add dumb-init && adduser -D svelteuser
USER svelteuser
WORKDIR /usr/app
COPY manifest.json /
COPY ./ ./
COPY --chown=svelteuser:svelteuser ./ /usr/app
RUN npm ci --omit=dev && npm run build
EXPOSE 3001
ENV HOST=0.0.0.0 PORT=3001 NODE_ENV=production PROTOCOL_HEADER=x-forwarded-proto HOST_HEADER=x-forwarded-host
ENTRYPOINT ["dumb-init", "node", "build"]
