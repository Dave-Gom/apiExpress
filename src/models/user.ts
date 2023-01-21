import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/database";
import { UserInterface as user } from "../interfaces/user.interface";





export const User = sequelize.define<Model, user>('users', {
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
