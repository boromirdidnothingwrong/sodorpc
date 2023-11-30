FROM node:18-alpine
WORKDIR /usr/app
COPY ./ ./
EXPOSE 3001
RUN npm i
RUN npm run build
CMD ["node build"]
