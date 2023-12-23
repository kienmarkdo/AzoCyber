FROM node:latest

WORKDIR /app

COPY package.json /app/
COPY package-lock.json /app/
COPY src /app/src/
COPY public /app/public/
COPY tsconfig.json /app/

RUN npm install

CMD ["npm", "start"]