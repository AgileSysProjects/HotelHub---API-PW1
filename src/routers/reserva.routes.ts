import express from 'express';
import { Request, Response } from 'express';
import { Application } from 'express';

import app from './config';

import reservaController from '../controller/ReservaController';


const reservaRoutes = (app: Application) => {
    app.post("/Reserva", async(req: Request, res: Response) => {
        await reservaController.addReserva(req, res);
    });
}

export default reservaRoutes;