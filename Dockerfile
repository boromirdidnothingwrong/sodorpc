FROM node:18-alpine
COPY . .
WORKDIR /
EXPOSE 3001
# simple docker file for now
RUN npm ci
RUN npm run build
CMD ["node build"]
