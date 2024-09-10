import { Sequelize, Model, UUID } from "sequelize";
import Hotel from '../../database/models/Hotel.ts';
import { HotelDTO } from "./HotelDTO.ts";

class HotelRepository {
    constructor(private sequelize: Sequelize) {}

    async addHotel(hotel: Partial<Hotel>): Promise<Hotel> {
        try {
            return await Hotel.create(hotel as Hotel);
        } catch (error) {
            console.error('Erro ao adicionar hotel:', error);
            throw new Error('Erro ao adicionar hotel');
        }
    }
}

export default HotelRepository;