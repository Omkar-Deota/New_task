FROM node:20-alpine

WORKDIR /app

COPY . .

RUN npm install

RUN npm install -g typescript ts-node

RUN npm run build

EXPOSE 8080

CMD ["node", "build/index.js"]
