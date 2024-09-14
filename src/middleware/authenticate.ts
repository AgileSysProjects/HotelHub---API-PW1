import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'default_secret_key'; 


interface CustomRequest extends Request {
    user?: string | JwtPayload;
}

class Authenticate {
    async handle(req: CustomRequest, res: Response, next: NextFunction){
        const authHeader = req.header('Authorization');
        
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ message: 'Acesso negado. Token não fornecido.' });
        }
    
        const token = authHeader.split(' ')[1];
    
        try {
            const decoded = jwt.verify(token, secret);
            req.user = decoded; 
    
            next(); 
        } catch (error) {
            
            if (error instanceof jwt.TokenExpiredError) {
                return res.status(401).json({ message: 'Token expirado.' });
            }
    
            if (error instanceof jwt.JsonWebTokenError) {
                return res.status(401).json({ message: 'Token inválido.' });
            }
    
            return res.status(500).json({ message: 'Erro de autenticação.' });
        }
    };
}

const authenticate = new Authenticate();

export default authenticate;
