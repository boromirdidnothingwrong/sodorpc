FROM node:18-alpine
RUN apk update && apk upgrade && apk add dumb-init && adduser -D svelteuser
USER svelteuser
WORKDIR /usr/app
COPY ./ ./
COPY --chown=svelteuser:svelteuser ./ /usr/app
RUN npm i && npm run build
ENV HOST=0.0.0.0 PORT=3001 NODE_ENV=production PROTOCOL_HEADER=x-forwarded-proto HOST_HEADER=x-forwarded-host
ENTRYPOINT ["dumb-init", "node", "build"]
