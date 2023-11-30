FROM node:18-alpine
COPY package.json /build
COPY package-lock.json /build
WORKDIR /build
EXPOSE 3001
RUN npm ci --omit dev
RUN npm run build
CMD ["node build"]
