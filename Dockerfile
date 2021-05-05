FROM node:14
WORKDIR /usr
COPY package*.json ./


RUN npm install

COPY . .
ENTRYPOINT ["npm", "start"]





