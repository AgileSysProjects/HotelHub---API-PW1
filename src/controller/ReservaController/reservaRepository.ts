import { Sequelize, Model, UUID } from "sequelize";
import Reserva from "../../database/models/Reserva.ts";
import { ReservaDTO } from "./ReservaDTO.ts";

class ReservaRepository {
    constructor(private sequelize: Sequelize) {}

    async addReserva(reserva: Partial<Reserva>): Promise<Reserva> {
        try {
            return await Reserva.create(reserva as Reserva)
        } catch (error) {
            console.error('Erro ao fazer reserva:', error);
            throw new Error('Erro ao fazer reserva');
        }
    }
}

export default ReservaRepository;
    