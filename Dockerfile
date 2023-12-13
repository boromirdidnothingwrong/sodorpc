FROM node:21-alpine as build
RUN apk update && apk upgrade && apk add dumb-init && adduser -D svelteuser
USER svelteuser
RUN npm install && npm run build

FROM node:21-alpine
RUN apk update && apk upgrade && apk add dumb-init && adduser -D svelteuser
USER svelteuser
EXPOSE 3001
ENV HOST 0.0.0.0
ENV PORT 3001
ENV NODE_ENV production
RUN chmod +x /app/build
ENTRYPOINT ["dumb-init", "node", "build"]
