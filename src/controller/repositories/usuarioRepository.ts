import { Sequelize, Model, DataTypes } from "sequelize";
import Usuario from '../types/usuario'

class UsuarioRepository {
   
    constructor(private sequelize: Sequelize) {}
    async addUsuario (usuario:Usuario):Promise<Model> {
        try {
            return await this.sequelize.models.Usuario.create(usuario);
        }catch (error) {
            console.error('Erro ao adicionar usuário:', error);
            throw new Error('Erro ao adicionar usuário');
        }
    }
}



export default UsuarioRepository;