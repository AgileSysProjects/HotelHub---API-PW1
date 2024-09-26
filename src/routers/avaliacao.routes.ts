import { Request, Response } from 'express';
import { Application } from 'express';

import app from './config';

import avaliacaoController from '../controller/AvaliacaoController';
import authenticate from '../middleware/authenticate';

const avaliacaoRoutes = (app: Application) => {
    app.post("/Avaliacao", async(req: Request, res: Response) => {
        await avaliacaoController.addAvaliacao(req, res);
    });

    app.get("/Avaliacao", async(req: Request, res:Response) => {
        await avaliacaoController.listAllAvaliacoes(req, res);
    });

    app.delete("/Avaliacao", authenticate.handle ,async(req:Request, res:Response) => {
        await avaliacaoController.deleteAvaliacao(req, res);
    });
}

export default avaliacaoRoutes;