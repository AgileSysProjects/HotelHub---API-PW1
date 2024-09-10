import { Request, Response } from "express";
import HotelRepository from "./hotelRepository.ts";
import { HotelSchema, HotelDTO } from "./HotelDTO.ts";
import { z } from "zod";

class HotelController {
    hotelRepository: HotelRepository;

    constructor(hotelRepository: HotelRepository) {
        this.hotelRepository = hotelRepository;
    }

    async addHotel(req: Request, res: Response) {
        try {
            const hotelData: HotelDTO = HotelSchema.parse(req.body);
            const hotel = await this.hotelRepository.addHotel(hotelData);

            return res.status(201).json(hotel);
        } catch (error) {
            if (error instanceof z.ZodError) {
                return res.status(400).json({ message: error.errors });
            }
            console.error(error);
            return res.status(500).json({ message: "Internal Server Error" });
        }
    }
}

export default HotelController;