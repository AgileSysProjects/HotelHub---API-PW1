import { Application } from "express";

import userRoutes from "./usuario.routes";
import hotelRoutes from "./hotel.routes";
import quartoRoutes from "./quarto.routes";

const routes = (app:Application) => {
    userRoutes(app);
    hotelRoutes(app);
    quartoRoutes(app)
}

export default routes;