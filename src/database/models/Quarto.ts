import { Table, Column, Model, PrimaryKey, ForeignKey } from "sequelize-typescript";
import sequelize from "../database";
import Hotel from "./Hotel";

@Table({
    tableName: "quartos"
})
class Quarto extends Model<Quarto>{
    @PrimaryKey
    @Column
    numero!: number;
    
    @Column
    preco!: number;

    @Column
    tipo!: string;

    @ForeignKey(
        () => Hotel
    )
    @Column
    hotelCNPJ!: string;

}

export default Quarto;