FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Prisma Generate (DB 연결 전이지만 스키마 컴파일을 위해 실행)
RUN npx prisma generate

# TypeScript 빌드
RUN npm run build

EXPOSE 5001

CMD ["npm", "start"]
