FROM node:22.4.0 AS build
WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

FROM node:22

WORKDIR /app

COPY --from=build /app /app

EXPOSE 3000

CMD ["npm", "start"]
