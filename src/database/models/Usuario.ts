import { Table, Column, Model, PrimaryKey, Unique, NotNull } from 'sequelize-typescript';
import sequelize from '../database';

@Table({
  tableName: 'usuarios'
})
class Usuario extends Model<Usuario> {
  
  @PrimaryKey
  @Column
  cpf!: string;

  @Unique
  @Column
  email!: string;

  @Column
  nome!: string;

  @Column
  telefone!: string;
}

sequelize.addModels([Usuario]);

export default Usuario;
