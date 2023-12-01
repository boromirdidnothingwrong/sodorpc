FROM node:18-alpine
WORKDIR /usr/app
COPY ./ ./
COPY ./manifest.json /manifest.json
EXPOSE 3001
RUN npm i
RUN npm run build
CMD ["PORT=3001", "node", "build"]
