"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
require("dotenv/config");
const sequelize_1 = require("sequelize");
const USER = process.env.BDUSER || 'root'; /* no se por que no esta funcionando */
exports.sequelize = new sequelize_1.Sequelize('practica_express', USER, '', {
    host: 'localhost',
    password: process.env.BDPASSWORD,
    dialect: 'mysql',
    port: 8889
});
