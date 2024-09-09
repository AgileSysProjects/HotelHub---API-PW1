import { Table, Column, Model, PrimaryKey, ForeignKey } from "sequelize-typescript";
import sequelize from "../database";
import Usuario from "./Usuario";
import Quarto from "./Quarto";

@Table({
    tableName: "reservas"
})
class Reserva extends Model<Reserva> {
    @PrimaryKey
    @Column
    numero!: number;

    @Column
    checkin!: Date;

    @Column
    checkout!: Date;

    @ForeignKey(
        () => Usuario
    )
    @Column
    usuarioCPF!: string;

    @ForeignKey(
        () => Quarto
    )
    @Column
    quartoNumero!: number;
}

sequelize.addModels([Reserva]);

export default Reserva;