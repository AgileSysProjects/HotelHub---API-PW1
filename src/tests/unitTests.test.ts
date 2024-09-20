import { usuarioRepository } from '../controller/UsuarioController/index';

describe('UsuarioRepository', () => {
    beforeEach(() => {
        
    });

    it('Deve adicionar um usuário com sucesso', async () => {
        // Mock da criação de usuário
        const mockUsuario = {
            cpf: "123.456.789-01",
            email: "example@example.com",
            nome: "João Silva",
            telefone: "12345678",
            password: "Senha123"
        };

        // (Usuario.create as jest.Mock).mockResolvedValue(mockUsuario);

        const result = await usuarioRepository.addUsuario(mockUsuario);
        console.log(result);
        
        // Verifica se o retorno é o usuário mockado
        expect(result).toEqual(mockUsuario);
    });

    it('deve lançar erro ao falhar ao adicionar um usuário', async () => {
        const mockUsuario = {
            id: '123',
            nome: 'Teste',
            email: 'teste@example.com',
            cpf: '12345678900'
        };

        await expect(usuarioRepository.addUsuario(mockUsuario))
            .rejects
            .toThrow('Erro ao adicionar usuário');
    });
});