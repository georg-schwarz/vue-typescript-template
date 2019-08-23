FROM node:lts-alpine

ARG BASE_URL
ARG SERVER_URL

WORKDIR /build
COPY .eslintrc.js .
COPY babel.config.js .
COPY package.json .
COPY postcss.config.js .
COPY tsconfig.json .
COPY vue.config.js .

COPY src/ ./src/

RUN echo "VUE_APP_BASE_URL=$BASE_URL" > .env
RUN echo "VUE_APP_SERVER_URL=$SERVER_URL" >> .env
RUN cat .env

RUN npm install

CMD [ "npm", "run", "serve" ]
