FROM mhart/alpine-node:6

RUN mkdir -p /app
WORKDIR /app

COPY package.json /app

RUN npm install
RUN npm run build

COPY . /app

EXPOSE 3000
CMD ["npm", "run", "prod"]
