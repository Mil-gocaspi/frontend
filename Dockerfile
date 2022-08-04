FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npx ng build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist/frontend /usr/share/nginx/html
COPY nginxconfig /etc/nginx/sites-enabled/default
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
