import sequelize from "../../database/database";
import ReservaRepository from "./reservaRepository";
import ReservaController from "./controllerReserva";

const reservaRepository = new ReservaRepository(sequelize);
const reservaController = new ReservaController(reservaRepository);

export default reservaController;

