import { Table, Column, Model, PrimaryKey, DataType } from "sequelize-typescript";
import sequelize from "../database";
import { DataTypes } from "sequelize";

@Table ({
    tableName: "hoteis"
})
class Hotel extends Model<Hotel> {
    @PrimaryKey
    @Column
    cnpj!: string;

    @Column
    nome!: string;

    @Column
    descricao!: string;

    @Column
    imagem!: string;

    @Column
    classificacao!: string;

    @Column({
        type: DataTypes.GEOGRAPHY('POINT'),
        allowNull: false,
        field: 'geolocalizacao'
      })
      localizacao!: any;
}

export default Hotel;
