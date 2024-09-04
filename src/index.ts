import express from 'express';
import { Request, Response } from 'express';
import sequelize from './database/database';
import Usuario from './database/models/Usuario';
import dotenv from 'dotenv';

const port = 3232;

const app = express();

app.get('/', (req: Request, res: Response) => {
    return res.send('Hello, world!');
});

try {
    await sequelize.authenticate()
    await sequelize.sync({ force: true });


    app.listen(port, () => {
        console.table({
            status: "Servidor rodando!🚀🚀🚀",
            port: port
        })
    })
} catch (error) {
    console.error("Unable to connect to the database:", error);
}