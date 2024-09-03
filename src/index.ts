import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, world!');
});

app.listen(3232, () => {
  console.log(`Servidor rodando!🚀🚀🚀`);
});
