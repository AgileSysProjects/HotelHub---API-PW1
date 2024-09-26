import { Request, Response } from "express";
import AvaliacaoRepository from "./avaliacaoRepository";
import { AvaliacaoSchema, AvaliacaoDTO } from "./AvaliacaoDTO";
import { z } from "zod";
import Hotel from "../../database/models/Hotel";
import Avaliacao from "../../database/models/Avaliacao";

class AvaliacaoController {
    avaliacaoRepository: AvaliacaoRepository;

    constructor(avaliacaoRepository: AvaliacaoRepository) {
        this.avaliacaoRepository = avaliacaoRepository;
    }

    async addAvaliacao(req: Request, res: Response) {
        try {
            const avaliacaoData: AvaliacaoDTO = AvaliacaoSchema.parse(req.body);
            const avaliacao = await this.avaliacaoRepository.addAvaliacao(avaliacaoData);

            const cnpjHotel = req.body.hotelCNPJ
            const hotelVerify = await Hotel.findByPk(cnpjHotel);
            
            if (!hotelVerify) {
                return res.status(404).json('Hotel não encontrado');
            }

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
            const codigo  = req.body.codigo;
            console.log(codigo);

            const avaliacaoVerify = await Avaliacao.findByPk(codigo);
            console.log(avaliacaoVerify);
            if(!avaliacaoVerify) {
                return res.status(404).json('Avaliação não encontrada')
            }
            await this.avaliacaoRepository.deleteAvaliacao(codigo);
            return res.status(200).json('Avaliação removida!');
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Internal Server Error" });
        }
    }

    async findAvaliacaoByPk(req: Request, res: Response) {
        try {
            const { codigo } = req.params;
            const avaliacao = await this.avaliacaoRepository.findAvaliacaoByPk(codigo);
            return res.status(200).json(avaliacao);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Internal Server Error" });
        }
    }

    async updateAvaliacao(req: Request, res: Response) {
        try {
            const avaliacaoData: AvaliacaoDTO = AvaliacaoSchema.parse(req.body);
            const codigo = req.body.codigo;
            const updatedAvaliacao = await this.avaliacaoRepository.updateAvaliacao(codigo, avaliacaoData);
            return res.status(200).json(updatedAvaliacao);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Internal Server Error" });
        }
    }
}

export default AvaliacaoController;
