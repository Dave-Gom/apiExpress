"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Storage = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../database/database");
exports.Storage = database_1.sequelize.define('storage', {
    fileName: {
        type: sequelize_1.DataTypes.STRING,
    },
    idUser: {
        type: sequelize_1.DataTypes.STRING,
    },
    path: {
        type: sequelize_1.DataTypes.STRING,
    },
});
