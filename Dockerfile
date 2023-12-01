FROM node:18-alpine
WORKDIR /usr/app
COPY ./ ./
COPY --chown=svelteuser:svelteuser ./ /usr/app
RUN npm i && npm run build
ENTRYPOINT PROTOCOL_HEADER=x-forwarded-proto HOST_HEADER=x-forwarded-host PORT=3001 node build
