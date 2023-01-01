import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/database";

enum GASENUM {
    GASOLINE = 'GASOLINE',
    ELECTRIC = 'ELECTRIC',
}

export interface Car {
    id: number,
    color: string,
    gas: GASENUM,
    year: number,
    description: string,
    price: number
}

export const Item = sequelize.define<Model, Car>('Items', {
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
