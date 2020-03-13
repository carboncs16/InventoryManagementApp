FROM node AS build
ARG env
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run buildProd

FROM nginx
COPY --from=build /usr/src/app/dist/InventoryManagementUI /usr/share/nginx/html