import { DataTypes, Sequelize } from "sequelize";

export default (sequelize: Sequelize) => {
    const Sum = sequelize.define("sum", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
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
        timestamps: true
    });

    return Sum;
};