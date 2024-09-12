import { Request, Response } from "express";
import QuartoRepository from "./quartoRepository.ts";
import { QuartoSchema, QuartoDTO } from "./QuartoDTO.ts";
import { z } from "zod";

class QuartoController {
    quartoRepository: QuartoRepository;

    constructor(quartoRepository: QuartoRepository) {
        this.quartoRepository = quartoRepository;
    }

    async addQuarto(req: Request, res: Response) {
        try {
            const quartoData: QuartoDTO = QuartoSchema.parse(req.body);
            const quarto = await this.quartoRepository.addQuarto(quartoData);

            return res.status(201).json(quarto);
        } catch (error) {
            if (error instanceof z.ZodError) {
                return res.status(400).json({ message: error.errors });
            }
            console.error(error);
            return res.status(500).json({ message: "Internal Server Error" });
        }
    }

    async listAllRooms(req:Request, res:Response) {
        try {
            const quartos = await this.quartoRepository.listAllRooms();
            return res.status(201).json(quartos);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Internal Server Error" });
        }
    }

    async deleteRoom(req:Request, res:Response) {
        try {
            const { numero } = req.body
            await this.quartoRepository.deleteRoom(numero);
            return res.status(201).json('Quarto removido!');
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Internal Server Error" });
        }
    }

    async findRoomByPk(req: Request, res:Response) {
        try {
            const numero: number = parseInt(req.params.numero);
            const room = await this.quartoRepository.findUserByPk(numero);
            return res.status(201).json(room);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Internal Server Error" });
        }
    }

    async updateRoom(req:Request, res:Response) {
        try {
            const { numero } = req.params;
            const roomData: QuartoDTO = QuartoSchema.parse(req.body);
            const room = await this.quartoRepository.updateRoom(parseInt(numero), roomData);
            return res.status(201).json(room);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Internal Server Error" });
        }
    }
}

export default QuartoController;