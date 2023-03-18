import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database/database';
import { AdminEnum, UserInterface } from '../interfaces/User.interface';

const User = sequelize.define<Model, UserInterface>(
    'users',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        role: {
            type: DataTypes.ENUM(AdminEnum.SU, AdminEnum.ADMIN),
            allowNull: false,
            defaultValue: AdminEnum.ADMIN,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        birthDate: {
            type: DataTypes.DATE,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        timestamps: true,
    }
);

export default User;
