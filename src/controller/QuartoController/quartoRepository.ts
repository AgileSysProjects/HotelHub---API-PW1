import { Sequelize, Model, UUID } from "sequelize";
import Quarto from '../../database/models/Quarto.ts';
import { QuartoDTO } from "./QuartoDTO";

class QuartoRepository {
    constructor(private sequelize: Sequelize) {}

    async addQuarto(quarto: Partial<Quarto>): Promise<Quarto> {
        try {
            return await Quarto.create(quarto as Quarto);
        } catch (error) {
            console.error('Erro ao adicionar quarto:', error);
            throw new Error('Erro ao adicionar quarto');
        }
    }

    async listAllRooms(): Promise<Quarto[]> {
        try {
            return await Quarto.findAll();
        } catch (error) {
            console.error('Erro ao listar quartos', error);
            throw new Error('Erro ao listar quartos');
        }
    }

    async deleteRoom(numero: number):Promise<void> {
        try {
            await Quarto.destroy({
                where:{
                    numero:numero,
                }
            })
        } catch (error) {
            console.error('Erro ao buscar quarto', error);
            throw new Error('Erro ao buscar quarto');
        }
    }

    async findUserByPk(numero:number):Promise<Quarto | null> { 
        try {
            const user:Quarto|null = await Quarto.findByPk(numero);
            return user;
        } catch (error) {
            console.error('Erro ao buscar quarto', error);
            throw new Error('Erro ao buscar quarto');
        }
    }

    async updateRoom(numero:number, room:Quarto|QuartoDTO):Promise<unknown | void> {
        try {
            const newRoom = await Quarto.update({
                ...room
            }, {
                where:{
                    numero:numero
                }
            })
            return newRoom;
        } catch(error) {
            console.error('Erro ao atualizar quarto', error);
            throw new Error('Erro ao atualizar quarto');
        }
    }
}

export default QuartoRepository;