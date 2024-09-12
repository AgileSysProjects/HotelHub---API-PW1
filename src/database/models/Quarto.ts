import { Table, Column, Model, PrimaryKey, ForeignKey, DataType } from "sequelize-typescript";
import sequelize from "../database";
import Hotel from "./Hotel";

@Table({
    tableName: "quartos"
})
class Quarto extends Model<Quarto>{
    @PrimaryKey
    @Column
    numero!: number;
    
    @Column({
        type: DataType.DECIMAL(10, 2),
        allowNull: false
    })
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