import { PostgreSqlContainer, StartedPostgreSqlContainer } from "@testcontainers/postgresql";
import { Sequelize } from "sequelize-typescript";

import Avaliacao from "../database/models/Avaliacao";
import Hotel from "../database/models/Hotel";
import Quarto from "../database/models/Quarto";
import Reserva from "../database/models/Reserva";
import Usuario from "../database/models/Usuario";

import HotelRepository from "../controller/HotelController/hotelRepository";
import { HotelDTO, HotelSchema } from "../controller/HotelController/HotelDTO";
import UsuarioRepository from "../controller/UsuarioController/usuarioRepository";
import { UsuarioDTO, UsuarioSchema } from "../controller/UsuarioController/UsuarioDTO";
import QuartoRepository from "../controller/QuartoController/quartoRepository";
import { QuartoDTO, QuartoSchema } from "../controller/QuartoController/QuartoDTO";
import { ReservaDTO, ReservaSchema } from "../controller/ReservaController/ReservaDTO";
import ReservaRepository from "../controller/ReservaController/reservaRepository";

describe('Testes de integração', () => {
    jest.setTimeout(20000);
    let container: StartedPostgreSqlContainer;
    let sequelize: Sequelize;

    beforeEach(async () => {
        container = await new PostgreSqlContainer('postgis/postgis:latest').start();

        sequelize = new Sequelize(container.getDatabase(), container.getUsername(), container.getPassword(), {
            host: container.getHost(),
            dialect: 'postgres',
            models: [Avaliacao, Hotel, Quarto, Reserva, Usuario],
            port: container.getPort()
        });

        await sequelize.authenticate();
        
        await sequelize.sync({
            force: true
        });
    });

    afterAll(async () => {
        if (sequelize) {
            await sequelize.close();
        }
        if (container) {
            await container.stop();
        }
    });

    test('Deve adicionar um hotel', async () => {
        const hotelRepository = new HotelRepository(sequelize);

        const exemploHotel = {
            cnpj: "12.345.678/0001-51",
            nome: "Hotel Exemplo",
            descricao: "Um hotel com ótima localização e serviços excelentes.",
            classificacao: "5",
            localizacao: {
              type: "Point",
              coordinates: [-23.550520, -46.633308], 
            },
        };

        const hotelData: HotelDTO = HotelSchema.parse(exemploHotel);

        expect(async () => await hotelRepository.addHotel(hotelData)).not.toThrow();
    });

    test('Deve adicionar um usuário', async () => {
        const usuarioRepository = new UsuarioRepository(sequelize);

        const exemploUsuario = {
            cpf: "123.456.789-10",
            email: "exemplo@dominio.com",
            nome: "João da Silva",
            telefone: "(11)98765-4321",
            password: "Senha123"
        };

        const usuarioData: UsuarioDTO = UsuarioSchema.parse(exemploUsuario);

        expect(async () => await usuarioRepository.addUsuario(usuarioData)).not.toThrow();
    })

    test('Deve adicionar um quarto', async () => {
        const quartoRepository = new QuartoRepository(sequelize);
        const hotelRepository = new HotelRepository(sequelize);

        const exemploHotel = {
            cnpj: "12.345.678/0001-58",
            nome: "Hotel Exemplo",
            descricao: "Um hotel com ótima localização e serviços excelentes.",
            classificacao: "5",
            localizacao: {
              type: "Point",
              coordinates: [-23.550520, -46.633308], 
            },
        };

        await hotelRepository.addHotel(exemploHotel);

        const exemploQuarto = {
            numero: 101, 
            hotelCNPJ: "12.345.678/0001-58", 
            preco: 250.00, 
            tipo: "Suíte" 
        };

        const quartoData: QuartoDTO = QuartoSchema.parse(exemploQuarto);

        expect(async () => await quartoRepository.addQuarto(quartoData)).not.toThrow();
    })

    test('Deve adicionar uma reserva', async () => {
        const quartoRepository = new QuartoRepository(sequelize);
        const hotelRepository = new HotelRepository(sequelize);
        const usuarioRepository = new UsuarioRepository(sequelize);
        const reservaRepository = new ReservaRepository(sequelize);

        const exemploHotel = {
            cnpj: "12.345.678/0001-60",
            nome: "Hotel Exemplo",
            descricao: "Um hotel com ótima localização e serviços excelentes.",
            classificacao: "5",
            localizacao: {
              type: "Point",
              coordinates: [-23.550520, -46.633308], 
            },
        };

        await hotelRepository.addHotel(exemploHotel);

        const exemploQuarto = {
            numero: 101, 
            hotelCNPJ: "12.345.678/0001-60", 
            preco: 250.00, 
            tipo: "Suíte" 
        };

        await quartoRepository.addQuarto(exemploQuarto);

        const exemploUsuario = {
            cpf: "123.456.789-11",
            email: "exemplo@dominio.com",
            nome: "João da Silva",
            telefone: "(11)98765-4321",
            password: "Senha123"
        };

        await usuarioRepository.addUsuario(exemploUsuario);

        const exemploReserva = {
            numero: 1, 
            checkin: "2024-09-25", 
            checkout: "2024-09-30", 
            usuarioCPF: "123.456.789-11", 
            quartoNumero: 101, 
            hotelCNPJ: "12.345.678/0001-60" 
        };

        const reservaData: ReservaDTO = ReservaSchema.parse(exemploReserva);

        expect(async () => await reservaRepository.addReserva(reservaData)).not.toThrow();
    })

    test('Deve lançar um erro ao tentar adicionar um usuário com CPF inválido', async () => {
        const usuarioRepository = new UsuarioRepository(sequelize);

        const exemploUsuario = {
            cpf: "123.456.789",
            email: "exemplo@dominio.com",
            nome: "João da Silva",
            telefone: "(11)98765-4321",
            password: "Senha123"
        };
        
        await expect(UsuarioSchema.parseAsync(exemploUsuario)).rejects.toThrow();
    });
});
