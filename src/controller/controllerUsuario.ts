import { Request, Response } from "express";
import UsuarioRepository from "./repositories/usuarioRepository";

class UsuarioController{
    usuarioRepository: UsuarioRepository;
    constructor(usuarioRepository: UsuarioRepository){
        this.usuarioRepository = usuarioRepository;
    }
    async addUsuario(req:Request, res:Response){
        try{
            const usuario = await this.usuarioRepository.addUsuario(req.body)
            return res.status(201).json(usuario);
        }catch(error){
            console.error(error);
            return res.status(500).json({ message: "Internal Server Error" });
        }  

    }
}

export default UsuarioController;