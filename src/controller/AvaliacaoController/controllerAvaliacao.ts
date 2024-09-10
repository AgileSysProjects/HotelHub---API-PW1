import { Request, Response } from "express";
import AvaliacaoRepository from "./avaliacaoRepository";
import { AvaliacaoSchema, AvaliacaoDTO } from "./AvaliacaoDTO";
import { z } from "zod";

class AvaliacaoController {
    avaliacaoRepository: AvaliacaoRepository;

    constructor(avaliacaoRepository: AvaliacaoRepository) {
        this.avaliacaoRepository = avaliacaoRepository;
    }

    async addAvaliacao(req: Request, res: Response) {
        try {
            const avaliacaoData: AvaliacaoDTO = AvaliacaoSchema.parse(req.body);
            const avaliacao = await this.avaliacaoRepository.addAvaliacao(avaliacaoData);

            return res.status(201).json(avaliacao);
        } catch (error) {
            if (error instanceof z.ZodError) {
                return res.status(400).json({ message: error.errors });
            }
            console.error(error);
            return res.status(500).json({ message: "Internal Server Error" });
        }
    }

    async listAllAvaliacoes(req: Request, res: Response) {
        try {
            const avaliacoes = await this.avaliacaoRepository.listAllAvaliacoes();
            return res.status(200).json(avaliacoes);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Internal Server Error" });
        }
    }

    async deleteAvaliacao(req: Request, res: Response) {
        try {
            const { id } = req.body;
            await this.avaliacaoRepository.deleteAvaliacao(id);
            return res.status(200).json('Avaliação removida!');
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Internal Server Error" });
        }
    }

    async findAvaliacaoByPk(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const avaliacao = await this.avaliacaoRepository.findAvaliacaoByPk(id);
            return res.status(200).json(avaliacao);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Internal Server Error" });
        }
    }

    async updateAvaliacao(req: Request, res: Response) {
        try {
            const avaliacaoData: AvaliacaoDTO = AvaliacaoSchema.parse(req.body);
            const id = req.body.id;
            const updatedAvaliacao = await this.avaliacaoRepository.updateAvaliacao(id, avaliacaoData);
            return res.status(200).json(updatedAvaliacao);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Internal Server Error" });
        }
    }
}

export default AvaliacaoController;
