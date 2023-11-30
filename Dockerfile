FROM node:18-alpine
COPY . .
WORKDIR /
EXPOSE 3001
# simple docker file for now
#RUN npm i
CMD ["node"]
