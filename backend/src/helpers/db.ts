import { Sequelize } from "sequelize";
import Sum from '../models/Sum';

const sequelize = new Sequelize('eqaim_assignment', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres'
});

Sum(sequelize).sync();

export default sequelize;