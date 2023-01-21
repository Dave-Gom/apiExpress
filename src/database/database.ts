import 'dotenv/config';
import { Sequelize } from 'sequelize';

const USER = process.env.BDUSER || 'root'; /* no se por que no esta funcionando */

export const sequelize = new Sequelize('practica_express', USER, '', {
    host: 'localhost',
    password: process.env.BDPASSWORD,
    dialect: 'mysql',
    port: 8889
});