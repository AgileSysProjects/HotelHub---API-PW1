import { Application } from "express";

import userRoutes from "./usuario.routes";

const routes = (app:Application) => {
    userRoutes(app);
}

export default routes;


