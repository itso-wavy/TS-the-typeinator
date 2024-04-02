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

// `rfce`
// React.FunctionComponent: JSX를 반환하는 함수
// return문을 없애면 에러
// React.ClassicComponent

/* 
useRef<T>(T | null)
React에서 ref가 초기화되는 것은 해당 ref 객체가 해당하는 DOM 요소와 연결되는 것을 의미합니다.
일반적으로 ref를 사용하여 DOM 요소에 접근하려면 해당 요소가 렌더링될 때 생성되어야 합니다. React는 컴포넌트가 렌더링될 때 ref를 참조하는 DOM 요소를 찾고 ref 객체의 current 속성에 할당하여 초기화합니다.

const formSubmitHandler = (e: React.FormEvent) => {};

---

body-parser: 
// 요청의 body을 파싱하고 Express 애플리케이션에 주입하는 역할, JSON, URL-encoded, 그리고 멀티파트 형식의 데이터까지 파싱, 처리할 수 있음
*/
