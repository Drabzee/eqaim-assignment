import { Sequelize } from "sequelize";
import { Sum } from '../models/Sum';

const sequelize = new Sequelize('eqaim_assignment', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres'
});

export const dbInit = () =>  Promise.all([
    Sum.sync({ alter: true })
]);

export default sequelize;