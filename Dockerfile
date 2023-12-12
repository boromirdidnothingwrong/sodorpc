FROM node:21-alpine as build
RUN apk update && apk upgrade && apk add dumb-init && adduser -D svelteuser
USER svelteuser
WORKDIR /app/build
COPY --chown=svelteuser:svelteuser ./ /app/build
RUN npm install && npm run build

FROM node:21-alpine
RUN apk update && apk upgrade && apk add dumb-init && adduser -D svelteuser
USER svelteuser
WORKDIR /app/build
COPY --chown=svelteuser:svelteuser --from=build /app/build /app/build/package.json ./
EXPOSE 3001
ENV HOST 0.0.0.0
ENV PORT 3001
ENV NODE_ENV production
ENV PROTOCOL_HEADER x-forwarded-proto
ENV HOST_HEADER x-forwarded-host
ENTRYPOINT ["dumb-init", "node", "./build"]
