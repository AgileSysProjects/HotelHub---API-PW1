import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Usuario from '../../database/models/Usuario.ts';

const secret = 'your_secret_key'; // Substitua por uma chave secreta segura

const login = async (req: Request, res: Response) => {
    const { cpf, password } = req.body;

    try {
        const user = await Usuario.findByPk(cpf);

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(400).json({ message: 'Credenciais inválidas.' });
        }

        const token = jwt.sign({ cpf: user.cpf }, secret, { expiresIn: '1h' });
        res.setHeader('Authorization', Bearer ${token});
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao fazer login.' });
    }
};

export default login;