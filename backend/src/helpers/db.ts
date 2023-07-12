import { Sequelize } from "sequelize";
import { Sum } from '../models/Sum';

const DB_USER = 'postgres';
const DB_PASSWORD = 'postgres';
const DB_NAME = 'eqaim_assignment';

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: 'localhost',
    dialect: 'postgres'
});

export const dbInit = () =>  Promise.all([
    Sum.sync({ alter: true })
]);

export default sequelize;