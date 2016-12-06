FROM mhart/alpine-node:6

RUN mkdir -p /app
WORKDIR /app

COPY package.json /app

RUN npm install
COPY . /app
RUN npm install -g pushstate-server
RUN npm run build

EXPOSE 9000
CMD ["pushstate-server", "build"]
