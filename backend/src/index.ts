import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
// import { PrismaClient } from '@prisma/client';

dotenv.config();

const app = express();
const port = process.env.PORT || 5001;
// const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// 헬스체크 라우트
app.get('/api/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'ok', message: 'MEDiEVENTALL-Ai Backend Service' });
});

// 테스트 유저 조회 라우트 (DB 연동 테스트용)
app.get('/api/users', async (req: Request, res: Response) => {
  try {
    // const users = await prisma.user.findMany();
    // res.json(users);
    res.json([{ id: 'mock-1', name: 'Mock User', email: 'mock@example.com' }]);
  } catch (error) {
    res.status(500).json({ error: 'Database access error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
