import sequelize from './database/database';
import app from './routers/routes';
import Usuario from './database/models/Usuario';

const port = 3232;

try {
    await sequelize.authenticate()
    await sequelize.sync({ force: true });

    // Criação de um novo usuário
    const novoUsuario = await Usuario.create({
    cpf: '12345678901',
    email: 'example@example.com',
    nome: 'João da Silva',
    telefone: '123456789'
    });


    app.listen(port, () => {
        console.table({
            status: "Servidor rodando!🚀🚀🚀",
            port: port
        })
    })
} catch (error) {
    console.error("Unable to connect to the database:", error);
}