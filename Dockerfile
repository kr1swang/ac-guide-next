# build stage
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/build /usr/share/nginx/html/data-contest
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY uploadsize.conf /etc/nginx/conf.d/uploadsize.conf
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
