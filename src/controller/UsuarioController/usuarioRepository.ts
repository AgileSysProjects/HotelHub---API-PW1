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

    async deleteUser(cpf: string):Promise<void> {
        try {
            await Usuario.destroy({
                where:{
                    cpf:cpf,
                }
            })
        } catch (error) {
            console.error('Erro ao remover usuário', error);
            throw new Error('Erro ao remover usuário');
        }
    }
}

export default UsuarioRepository;