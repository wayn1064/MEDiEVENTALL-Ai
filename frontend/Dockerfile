# Build environment
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL
RUN npm run build

# Production environment
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

# 기본 Nginx 설정을 덮어쓰기 위해 커스텀 설정 복사
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
