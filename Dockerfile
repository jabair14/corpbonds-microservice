FROM node:latest

WORKDIR /

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY .  .

EXPOSE 4000

CMD ["npm", "run", "start"]

