// require('express');
import express, { Request, Response, NextFunction } from 'express';
import todoRoutes from './routes/todos';
import { json } from 'body-parser';
// 요청의 본문을 파싱하고 Express 애플리케이션에 주입하는 역할

const app = express();

app.use(json());

// 라우터
app.use('/todos', todoRoutes);

// 에러처리 미들웨어
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

app.listen(3000);
