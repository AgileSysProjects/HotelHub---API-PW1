import { Request, Response, Application } from 'express';
import upload from '../middleware/multerConfig';

const uploadRoute = (app: Application) => {
    app.post('/upload', upload.single('imagem'), (req: Request, res: Response) => {
        try {
            if (!req.file) {
                return res.status(400).json({ message: 'Nenhum arquivo enviado.' });
            }
    
            res.status(200).json({
                message: 'Upload realizado com sucesso!',
                file: req.file,
            });
        } catch (error) {
            console.error('Erro no upload:', error);
            res.status(500).json({
                message: 'Erro ao realizar o upload.',
                error: error instanceof Error ? error.message : 'Erro desconhecido',
            });
        }
    });    
}

export default uploadRoute;
