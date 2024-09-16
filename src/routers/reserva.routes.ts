import express from 'express';
import { Request, Response } from 'express';
import { Application } from 'express';

import app from './config';

import reservaController from '../controller/ReservaController';
import authenticate from '../middleware/authenticate';


const reservaRoutes = (app: Application) => {
    app.post("/Reserva", authenticate.handle, async(req: Request, res: Response) => {
        await reservaController.addReserva(req, res);
    });

    app.delete("/Reserva", authenticate.handle ,async(req:Request, res:Response) => {
        await reservaController.deleteReserva(req, res);
    });

    app.get("/Reserva", async(req: Request, res:Response) => {
        await reservaController.listAllReservas(req, res);
    });

    app.get("/Reserva/:numero", authenticate.handle ,async(req:Request, res:Response) => {
        await reservaController.findReservaByPk(req, res);
    })
}

export default reservaRoutes;