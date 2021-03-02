FROM node:14

WORKDIR /usr/src/app

COPY ./client ./client

WORKDIR /usr/src/app/client

RUN npm install

RUN npm run build

WORKDIR /usr/src/app

COPY ./server/package*.json ./server/

WORKDIR /usr/src/app/server

COPY ./server .

RUN npm install

EXPOSE 9000

CMD [ "node", "server.js" ]


