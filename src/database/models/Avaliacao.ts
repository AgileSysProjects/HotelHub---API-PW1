import { Table, Column, Model, PrimaryKey, ForeignKey } from "sequelize-typescript";
import sequelize from "../database";
import Usuario from "./Usuario";
import Hotel from "./Hotel";

@Table({
    tableName: "avaliacoes"
})
class Avaliacao extends Model<Avaliacao> {
    @PrimaryKey
    @ForeignKey(
        () => Usuario
    )
    @Column
    usuarioCPF!: string;

    @PrimaryKey
    @ForeignKey(
        () => Hotel
    )
    @Column
    hotelCNPJ!: string;
    
    @Column
    feedback!: string;
}

sequelize.addModels([Avaliacao]);

export default Avaliacao;