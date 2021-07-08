FROM node:12-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ .
RUN npm run build
 
FROM nginx as production-stage
RUN mkdir /app
EXPOSE 8080