import { Sequelize } from "sequelize-typescript";

const sequelize = new Sequelize('main', 'admin', 'postgres', {
    host: 'localhost',
    dialect: 'postgres'
});

export default sequelize;