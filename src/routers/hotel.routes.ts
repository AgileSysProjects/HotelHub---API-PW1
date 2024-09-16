import express from 'express';
import { Request, Response } from 'express';
import { Application } from 'express';

import app from './config';

import hotelController from '../controller/HotelController';
import authenticate from '../middleware/authenticate';


const hotelRoutes = (app: Application) => {
    app.post("/Hotel", async(req: Request, res: Response) => {
        await hotelController.addHotel(req, res);
    });

    app.get("/Hotel", async(req: Request, res:Response) => {
        await hotelController.listAllHotels(req, res);
    });

    app.delete("/Hotel", authenticate.handle ,async(req:Request, res:Response) => {
        await hotelController.deleteHotel(req, res);
    });

    app.get("/Hotel/:cnpj", async(req:Request, res:Response) => {
        await hotelController.findHotelByPk(req, res);
    });

    app.patch("/Hotel", authenticate.handle ,async(req:Request, res:Response) => {
        await hotelController.updateHotel(req, res);
    });
}

export default hotelRoutes;

