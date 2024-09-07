import express from 'express';
import { Request, Response } from 'express';

import usuarioController from '../controller/UsuarioController';

const app = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    return res.send('Hello, world!');
});

app.post("/Usuario", async(req: Request, res: Response) => {
    await usuarioController.addUsuario(req, res)
});

app.get("/Usuario", async(req:Request, res:Response) => {
    await usuarioController.listAllUsers(req, res);
});

app.delete("/Usuario", async(req:Request, res:Response) => {
    await usuarioController.deleteUser(req, res);
});

app.get("/Usuario/:cpf", async(req:Request, res:Response) => {
    await usuarioController.findUserByPk(req, res);
});

export default app

