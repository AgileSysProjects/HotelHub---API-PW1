import { Request, Response } from "express";
import ReservaRepository from "./reservaRepository.ts";
import { ReservaSchema, ReservaDTO } from "./ReservaDTO.ts";
import { z } from "zod";

class ReservaController {
    reservaRepository: ReservaRepository;

    constructor(reservaRepository: ReservaRepository) {
        this.reservaRepository = reservaRepository;
    }

    async addReserva(req: Request, res: Response) {
        try {
            const reservaData: ReservaDTO = ReservaSchema.parse(req.body);
            const reserva = await this.reservaRepository.addReserva(reservaData);

            return res.status(201).json(reserva);
        } catch (error) {
            if (error instanceof z.ZodError) {
                return res.status(400).json({ message: error.errors });
            }
            console.error(error);
            return res.status(500).json({ message: "Internal Server Error" });
        }
    }
}

export default ReservaController;