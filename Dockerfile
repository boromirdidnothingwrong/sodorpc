FROM node:18-alpine
WORKDIR /usr/app
COPY ./ ./
EXPOSE 3001
WORKDIR /usr/app
RUN npm i
RUN npm run build
CMD ["node"]
