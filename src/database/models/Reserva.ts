import { Table, Column, Model, PrimaryKey, ForeignKey } from "sequelize-typescript";
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
    checkin!: string;

    @Column
    checkout!: string;

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

export default Reserva;