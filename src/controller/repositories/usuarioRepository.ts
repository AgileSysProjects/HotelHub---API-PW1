class UsuarioRepository {
    constructor(private sequelize: any) {}
    async addUsuario (usuario:any){
        return await this.sequelize.models.Usuario.create(usuario);
    }
}

export default UsuarioRepository;