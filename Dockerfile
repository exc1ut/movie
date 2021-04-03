FROM node:14

WORKDIR /usr/src/app

COPY ./client ./client

WORKDIR /usr/src/app/client

RUN yarn

RUN yarn  build

WORKDIR /usr/src/app

COPY ./server/package*.json ./server/

WORKDIR /usr/src/app/server

COPY ./server .

RUN yarn

EXPOSE 9000

CMD [ "node", "server.js" ]


