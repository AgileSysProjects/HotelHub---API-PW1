import sequelize from './database/database';
import app from './routers/routes';

const port = 3232;

try {
    await sequelize.authenticate()
    //Verifica conexão com o banco

    await sequelize.sync();
    //Sincroniza o banco 

    app.listen(port, () => {
        console.table({
            status: "Servidor rodando!🚀🚀🚀",
            port: port
        })
    })
} catch (error) {
    console.error("Unable to connect to the database:", error);
}