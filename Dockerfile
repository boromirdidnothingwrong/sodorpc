FROM node:18-alpine
WORKDIR /
EXPOSE 3001
RUN npm ci
RUN npm run build
CMD ["node build"]
