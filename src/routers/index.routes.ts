import { Application } from "express";

import userRoutes from "./usuario.routes";
import hotelRoutes from "./hotel.routes";
import reservaRoutes from "./reserva.routes";
import quartoRoutes from "./quarto.routes";
import loginRoute from "./login.routes";

const routes = (app:Application) => {
    loginRoute(app)
    userRoutes(app);
    hotelRoutes(app);
    reservaRoutes(app);
    quartoRoutes(app)
}

export default routes;