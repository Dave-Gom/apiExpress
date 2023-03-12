"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../database/database");
const Car_interface_1 = require("../interfaces/Car.interface");
exports.Item = database_1.sequelize.define('Items', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    color: {
        type: sequelize_1.DataTypes.STRING,
        // allowNull: false
    },
    gas: {
        type: sequelize_1.DataTypes.ENUM(Car_interface_1.GASENUM.ELECTRIC, Car_interface_1.GASENUM.GASOLINE),
        // allowNull: false,
    },
    year: {
        type: sequelize_1.DataTypes.INTEGER,
        // allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        // allowNull: false,
    },
    price: {
        type: sequelize_1.DataTypes.INTEGER,
        // allowNull: false
    }
});
