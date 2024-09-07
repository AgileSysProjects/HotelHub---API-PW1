import { Sequelize } from "sequelize-typescript";
import Usuario from "./models/Usuario";

const sequelize = new Sequelize('main', 'admin', 'postgres', {
    host: 'localhost',
    dialect: 'postgres'
});

export default sequelize;