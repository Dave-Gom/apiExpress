import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/database";
import { CarInterface, GASENUM } from "../interfaces/Car.interface";



export const Item = sequelize.define<Model, CarInterface>('Items', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    color: {
        type: DataTypes.STRING,
        // allowNull: false
    },
    gas: {
        type: DataTypes.ENUM(GASENUM.ELECTRIC, GASENUM.GASOLINE),
        // allowNull: false,
    },
    year: {
        type: DataTypes.INTEGER,
        // allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        // allowNull: false,
    },
    price: {
        type: DataTypes.INTEGER,
        // allowNull: false
    }
});
