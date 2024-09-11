FROM node:22-bookworm-slim

WORKDIR /usr/src/app

COPY package* .

RUN npm i

COPY . .