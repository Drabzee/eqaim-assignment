import { DataTypes, Optional, Model } from "sequelize";
import { TSteps } from "../utils/number_handler";
import sequelize from "../helpers/db";

interface SumAttributes {
    id: string;
    num1: string;
    num2: string;
    steps: TSteps;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface SumInput extends Optional<SumAttributes, 'id'> { }
export interface SumOuput extends Required<SumAttributes> { }

export class Sum extends Model<SumAttributes, SumInput> implements SumAttributes {
    public id!: string
    public num1!: string
    public num2!: string
    public steps!: TSteps

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Sum.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
    },
    num1: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    num2: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    steps: {
        type: DataTypes.JSON,
        allowNull: false,
    },
}, {
    timestamps: true,
    sequelize: sequelize,
});