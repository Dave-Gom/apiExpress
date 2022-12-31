import 'dotenv/config';
import { Sequelize } from 'sequelize';

// const USER = process.env.USER || 'root'; /* no se por que no esta funcionando */

export const sequelize = new Sequelize('practica_express', `root`, '', {
    host: 'localhost',
    dialect: 'mysql'
});