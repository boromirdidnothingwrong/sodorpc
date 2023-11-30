FROM node:18-alpine
COPY package.json
COPY package-lock.json
WORKDIR /
EXPOSE 3001
RUN npm ci --omit dev
RUN npm run build
CMD ["node build"]
