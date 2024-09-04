import express from 'express';
import { Request, Response } from 'express';
import UsuarioController from "../controller/controllerUsuario";
import UsuarioRepository from "../controller/repositories/usuarioRepository";
import sequelize from '../database/database';


const repo = new UsuarioRepository(sequelize)

const controller = new UsuarioController(repo)

const app = express();

app.get('/', (req: Request, res: Response) => {
    return res.send('Hello, world!');
});

app.post("/Usuario", (req: Request, res: Response) => {
    controller.addUsuario(req, res)
});


export default app

