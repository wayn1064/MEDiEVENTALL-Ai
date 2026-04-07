FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN apk add --no-cache openssl
RUN npm install

COPY . .

# Prisma Generate (DB 연결 전이지만 스키마 컴파일을 위해 실행)
RUN npx prisma generate

# TypeScript 빌드
RUN npm run build

EXPOSE 5012
ENV PORT=5012

CMD ["npm", "start"]
