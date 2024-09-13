import sequelize from "../../database/database";
import ReservaRepository from "./reservaRepository";
import ReservaController from "./controllerReserva";
import UsuarioRepository from "../UsuarioController/usuarioRepository";
import QuartoRepository from "../QuartoController/quartoRepository";

const reservaRepository = new ReservaRepository(sequelize);
const usuarioRepository = new UsuarioRepository(sequelize);
const quartoRepository = new QuartoRepository(sequelize);
const reservaController = new ReservaController(reservaRepository, usuarioRepository, quartoRepository);

export default reservaController;

