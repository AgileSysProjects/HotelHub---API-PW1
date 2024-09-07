import { Sequelize, Model } from "sequelize";
import Usuario from '../../database/models/Usuario.ts';

class UsuarioRepository {
    constructor(private sequelize: Sequelize) {}

    async addUsuario(usuario: Partial<Usuario>): Promise<Usuario> {
        try {
            return await Usuario.create(usuario as Usuario);
        } catch (error) {
            console.error('Erro ao adicionar usuário:', error);
            throw new Error('Erro ao adicionar usuário');
        }
    }

    async listAllUsers(): Promise<Usuario[]> {
        try {
            return await Usuario.findAll();
        } catch (error) {
            console.error('Erro ao listar usuários', error);
            throw new Error('Erro ao listar usuários');
        }
    }
}

export default UsuarioRepository;