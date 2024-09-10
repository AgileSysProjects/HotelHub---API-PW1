import { Sequelize, Model } from "sequelize";
import Avaliacao from '../../database/models/Avaliacao.ts';
import { AvaliacaoDTO } from "./AvaliacaoDTO.ts";

class AvaliacaoRepository {
    constructor(private sequelize: Sequelize) {}

    async addAvaliacao(avaliacao: Partial<Avaliacao>): Promise<Avaliacao> {
        try {
            return await Avaliacao.create(avaliacao as Avaliacao);
        } catch (error) {
            console.error('Erro ao adicionar avaliação:', error);
            throw new Error('Erro ao adicionar avaliação');
        }
    }

    async listAllAvaliacoes(): Promise<Avaliacao[]> {
        try {
            return await Avaliacao.findAll();
        } catch (error) {
            console.error('Erro ao listar avaliações', error);
            throw new Error('Erro ao listar avaliações');
        }
    }

    async deleteAvaliacao(id: string): Promise<void> {
        try {
            await Avaliacao.destroy({
                where: {
                    id: id,
                },
            });
        } catch (error) {
            console.error('Erro ao remover avaliação', error);
            throw new Error('Erro ao remover avaliação');
        }
    }

    async findAvaliacaoByPk(id: string): Promise<Avaliacao | null> {
        try {
            const avaliacao = await Avaliacao.findByPk(id);
            return avaliacao;
        } catch (error) {
            console.error('Erro ao buscar avaliação', error);
            throw new Error('Erro ao buscar avaliação');
        }
    }

    async updateAvaliacao(id: string, avaliacao: AvaliacaoDTO): Promise<unknown | void> {
        try {
            const updatedAvaliacao = await Avaliacao.update({ ...avaliacao }, { where: { id: id } });
            return updatedAvaliacao;
        } catch (error) {
            console.error('Erro ao atualizar avaliação', error);
            throw new Error('Erro ao atualizar avaliação');
        }
    }
}

export default AvaliacaoRepository;