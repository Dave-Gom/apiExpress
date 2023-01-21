import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/database";
import { UserInterface } from "../interfaces/User.interface";





export const User = sequelize.define<Model, UserInterface>('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        defaultValue: "Soy una descriptcion"
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});
