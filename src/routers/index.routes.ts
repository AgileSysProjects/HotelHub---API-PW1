import { Application } from "express";

import userRoutes from "./usuario.routes";
import hotelRoutes from "./hotel.routes";

const routes = (app:Application) => {
    userRoutes(app);
    hotelRoutes(app);
}

export default routes;


