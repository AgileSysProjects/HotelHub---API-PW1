import { Request, Response } from "express";
import UsuarioRepository from "./repositories/usuarioRepository";

class UsuarioController{
    usuarioRepository: UsuarioRepository;
    constructor(usuarioRepository: UsuarioRepository){
        this.usuarioRepository = usuarioRepository;
    }
    async addUsuario(req:Request, res:Response){
        return await this.usuarioRepository.addUsuario(req.body)
    }
}

export default UsuarioController;