FROM node AS build
ARG env
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run buildProd

FROM nginx
COPY --from=build /usr/src/app/dist/InventoryManagementUI /etc/nginx/html/index.html
COPY ./default.conf /etc/nginx/conf.d/default.conf
CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'